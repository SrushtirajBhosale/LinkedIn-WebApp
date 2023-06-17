import { auth, db, googleProvider } from "../firebase";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { signInWithPopup} from 'firebase/auth';
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from './actionType';
import { getDownloadURL } from "firebase/storage";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";


export const setUser = (payload) => ({
  type : SET_USER,
  user : payload,
})

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
    };
}

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
})

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
})

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async(user) => {
      if(user) {
        dispatch(setUser(user));
      }
    })
  }
}

export function signOutAPI() {
  return (dispatch) => {
    auth.signOut()
      .then(() => {  dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}



export function postArticleAPI(payload) {
  const storage = getStorage();
  const metadata = { 
    contentType : "image/gif, image/jpeg, image/png"
  }
  return(dispatch) => {
    dispatch(setLoading(true));

    if(payload.image !== "") {

      const storageRef = ref(storage, `images/${payload.image.name}`);
      const upload = uploadBytesResumable(storageRef, payload.image, metadata);

      upload.on("state_changed", (snapshot) => {
        const progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log("progress "  + progress + "%");
          switch (snapshot.state) {
            case "paused":
              console.log('upload is paused');
              break;
            case "running":
              console.log('upload is running');
              break;
            default:
                break;
          }

      }, 
      (error) => {
        console.log(error.code)
      },

      () => {

        getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
          console.log("file available at", downloadURL);
          addDoc(collection(db, "articles"),{
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: Timestamp.now(),
              image: payload.user.photoURL
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        })
        
      })
    } else if (payload.video) {
      addDoc(collection(db, "articles"),{
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  }
}

export function getArticlesAPI() {
  return (dispatch) => {
    var payload;

    const querySnapshot = query(collection(db, "articles"), orderBy('actor.date', 'desc'));
    onSnapshot(querySnapshot, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      // console.log(payload);
      dispatch(getArticles(payload));
    })
  }
}
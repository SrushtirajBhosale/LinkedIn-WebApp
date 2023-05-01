import { auth, googleProvider } from "../firebase";

export function signInAPI() {
    return (dispatch) => {
        auth
            .signInWithPopup(googleProvider)
            .then((payload) => {
                console.log(payload);
            })
            .catch((error) => alert(error.message));
    };
}
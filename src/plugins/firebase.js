import firebase from "firebase";

// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

// Initialize Cloud Firestore and get a reference to the service
export const firestore = firebase.firestore();

//Initialize Firebase Authentication and get a reference to the service
// export function signIn() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase.auth().useDeviceLanguage();

//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .catch((error) => {
//       console.log(error);
//     });

//   firebase.auth().onAuthStateChanged((user) => {
//     localStorage.setItem("test_user", JSON.stringify(user));
//   });
// }

// export async function signOut() {
//   await firebase.auth.signOut();
//   localStorage.removeItem("test_user");
// }

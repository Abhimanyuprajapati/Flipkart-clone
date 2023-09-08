// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_wMXb8jyyRJc36Bws-vHqVN73zkpvRHw",
  authDomain: "flipkartclone-df033.firebaseapp.com",
  projectId: "flipkartclone-df033",
  storageBucket: "flipkartclone-df033.appspot.com",
  messagingSenderId: "639802145300",
  appId: "1:639802145300:web:64083c72e283aee5cfc501",
  measurementId: "G-25WZS2SSL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export { auth,provider };
import firebase from "firebase";


// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
  apiKey: "AIzaSyAeXS_S6tENN58WxAiFzOvnahvDPKumUtA",
  authDomain: "subasta-de-empleos.firebaseapp.com",
  projectId: "subasta-de-empleos",
  storageBucket: "subasta-de-empleos.appspot.com",
  messagingSenderId: "231679577677",
  appId: "1:231679577677:web:a95a79d05a72b191b85604",
  measurementId: "G-X9NMNQWZ5D"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}

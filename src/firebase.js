import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5Oqpr80n2enYCrxGngTXe9SxzPnxaVOA",
    authDomain: "clone-56259.firebaseapp.com",
    databaseURL: "https://clone-56259.firebaseio.com",
    projectId: "clone-56259",
    storageBucket: "clone-56259.appspot.com",
    messagingSenderId: "880833436646",
    appId: "1:880833436646:web:8a7dc4274d009baa1fd427"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};



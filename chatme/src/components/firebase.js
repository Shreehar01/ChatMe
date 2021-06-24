import firebase from 'firebase/app'
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDfeaN5bUMsB-YsW9Rco41OclXD990Tavo",
    authDomain: "dotted-cedar-271907.firebaseapp.com",
    projectId: "dotted-cedar-271907",
    storageBucket: "dotted-cedar-271907.appspot.com",
    messagingSenderId: "161816614932",
    appId: "1:161816614932:web:52b6e66e76b81ca39f6f01"
}).auth();

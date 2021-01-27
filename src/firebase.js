import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIm1_Y1Y04u-ODJI5ASFl-zhbxmUo1sRI",
    authDomain: "reactjs-firebase-crud-d1b40.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-crud-d1b40-default-rtdb.firebaseio.com",
    projectId: "reactjs-firebase-crud-d1b40",
    storageBucket: "reactjs-firebase-crud-d1b40.appspot.com",
    messagingSenderId: "118451340520",
    appId: "1:118451340520:web:573457ec6b9e21c1f7355d"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
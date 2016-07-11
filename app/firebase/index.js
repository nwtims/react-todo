import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBO79rSuTc5qIEujgTHdJebvaaRNgpP-4Y",
    authDomain: "tims-todo-app.firebaseapp.com",
    databaseURL: "https://tims-todo-app.firebaseio.com",
    storageBucket: "tims-todo-app.appspot.com",
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

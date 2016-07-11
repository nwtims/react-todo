import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBO79rSuTc5qIEujgTHdJebvaaRNgpP-4Y",
  authDomain: "tims-todo-app.firebaseapp.com",
  databaseURL: "https://tims-todo-app.firebaseio.com",
  storageBucket: "tims-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Tim',
    age: 50
  }
}).then(() => {
  console.log('Set worked :)');
}, (e) => {
  console.log('Set failed :(');
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Exercise now!'
});

var newTodoRef = todosRef.push({
  text: 'Eat now!'
});



console.log('Todo id', newTodoRef.key);
//
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Exercise now!'
// });
//
// console.log('Todo id', newNoteRef.key);
// code above is equivalent to code below. the set can be left off as a shortcut
// var newNoteRef = notesRef.push().set({
//   text: 'Exercise'
// });

// var newNoteRef = notesRef.push();
// // push creates a new item and returns the items reference
//
// newNoteRef.set({
//   text: 'Exercise'
// });

//
// var logData = (snapshot) => {
//   console.log('Got Value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('fetch  worked :)', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('fetch failed :(');
// });
//
// firebaseRef.once('value').then((snapshot) => {
//   console.log('fetch  worked :)', snapshot.val());
// }, (e) => {
//   console.log('fetch failed :(');
// });




//
// firebaseRef.child('app').set({
//   name: 'Todo Application'
// });
//
// firebaseRef.update({
//   'user/name': 'Mike',
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   version: '1.0.1'
// }).then(() => {
//   console.log('Update worked :)');
// }, (e) => {
//   console.log('Update failed :(');
// });
//
// firebaseRef.child('user').update({
//   age: 47
// }).then(() => {
//   console.log('Update worked :)');
// }, (e) => {
//   console.log('Update failed :(');
// });
//
// // firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

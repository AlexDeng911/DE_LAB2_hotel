import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAUYUpN3pOejD8jQdu9HNt9XaMx7wT31xo',
  authDomain: 'my-hotel-fb2a2.firebaseapp.com',
  databaseURL: 'https://my-hotel-fb2a2-default-rtdb.europe-west1.firebasedatabase.app',
};

const database = firebase.initializeApp(firebaseConfig);

export default database;

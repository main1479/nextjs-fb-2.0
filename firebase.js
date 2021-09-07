import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'facebook2-0-bfaba.firebaseapp.com',
	projectId: 'facebook2-0-bfaba',
	storageBucket: 'facebook2-0-bfaba.appspot.com',
	messagingSenderId: '1076532547138',
	appId: '1:1076532547138:web:6931bc157603bf45d6e7db',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

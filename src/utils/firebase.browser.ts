import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Gtes the credentials from the.env file
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

//Initializes our firebase app
const app = initializeApp(clientCredentials);

//Get the firestore instance
const db = getFirestore(app);
// Gets the storage instance
const storage = getStorage(app);

const realtime = getDatabase(app);

const postsCollection = collection(db, "posts");

export { realtime, app, db, storage, postsCollection };

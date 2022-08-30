// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  doc,
  getFirestore,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfTHkUzCkesvXGzoDpvWQrimJOXJzHUGE",
  authDomain: "blog-creator-aa88c.firebaseapp.com",
  projectId: "blog-creator-aa88c",
  storageBucket: "blog-creator-aa88c.appspot.com",
  messagingSenderId: "844936071219",
  appId: "1:844936071219:web:3025bae4a60f622b273b46",
  measurementId: "G-79CFCWGK1J",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

// --------------------Add Blogs----------------

const addBlogsInDb = async (blog) => {
  if (typeof blog !== "object") return;
  const collectionRef = collection(db, "blogs");
  await addDoc(collectionRef, { ...blog });
};

//-----------Get All Blogs --------------

const getAllBlogs = async () => {
  return await getDocs(collection(db, "blogs"));
};

// -----------Delete Blogs-------------
const deleteBlog = async (bid) => {
  const docRef = doc(db, "blogs", bid);
  await deleteDoc(docRef);
};

// --------------------------------------------------------------

export { db, addBlogsInDb, getAllBlogs, deleteBlog };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

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
const auth = firebase.auth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

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

//--------------------- Image Upload ------------------------------

const uploadImage = (file, progressCallback, urlCallback, errorCallback) => {
  if (!file) {
    errorCallback("File not found");
    return;
  }

  const fileType = file.type;
  const fileSize = file.size / 1024 / 1024;

  if (!fileType.includes("image")) {
    errorCallback("File must an image");
    return;
  }
  if (fileSize > 2) {
    errorCallback("File must smaller than 2MB");
    return;
  }

  const storageRef = ref(storage, file.name);

  const task = uploadBytesResumable(storageRef, file);

  task.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressCallback(progress);
    },
    (error) => {
      errorCallback(error.message);
    },
    () => {
      getDownloadURL(task.snapshot.ref).then((url) => {
        urlCallback(url);
      });
    }
  );
};

// --------------------------------------------------------------

export { db, auth, addBlogsInDb, getAllBlogs, deleteBlog, uploadImage };

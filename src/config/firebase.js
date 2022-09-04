import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  query,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4qQe3zMV4a6afOeSdJ32ZPJ9cAZyvoTQ",
  authDomain: "food-ed6d7.firebaseapp.com",
  projectId: "food-ed6d7",
  storageBucket: "food-ed6d7.appspot.com",
  messagingSenderId: "54500414565",
  appId: "1:54500414565:web:f4820d2e40577defe4228c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// // User Sign Up
async function createUser(form) {
  const { email, password, name } = form;
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const uid = result.user.uid;
  await setDoc(doc(db, "users", uid), {
    email,
    name,
    uid,
  });
  return "done";
}
// // User Login
async function login(form) {
  const { name, email, password } = form;
  await signInWithEmailAndPassword(auth, email, password);
}

// // User Information Get
async function getuserData() {
  const uid = auth.currentUser.uid;
  // console.log("UID AYI--->>", uid);
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

// // Restaurant Collection Get
async function getRestaurant() {
  // const uid auth.
  const q = query(collection(db, "restaurant"));
  // console.log(db, "menu");
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    const adds = { ...doc.data(), id: doc.id };
    data.push(adds);
  });
  return data;
}

// // Restaurant
async function getRestaurantDetail(id) {
  const docRef = doc(db, "restaurant", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function getRestaurentMenu(id) {
  console.log(id);
  // console.log("firebase call hoa");
  let menu = [];
  const querySnapshot = await getDocs(
    collection(db, "restaurant", id, "menu")
  );
  querySnapshot.forEach((doc) => {
    const temp = { ...doc.data(), id: doc.id };
    menu.push(temp);
    console.log("DATA AYA-->",temp)
  });

  return menu;
}

export { createUser, login, getRestaurant, getRestaurantDetail, getuserData,getRestaurentMenu };

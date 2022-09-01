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

async function login(form) {
  const { name, email, password } = form;
  await signInWithEmailAndPassword(auth, email, password);
}
async function getRestaurant() {
  // const uid auth.
  const q = query(collection(db, "restaurant"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
      const adds = { ...doc.data(), id: doc.id  };
      data.push(adds);
  });
  return data;
}

async function getRestaurantDetail(id) {
  const docRef = doc(db, "restaurant", id)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

export { createUser, login, getRestaurant,getRestaurantDetail };

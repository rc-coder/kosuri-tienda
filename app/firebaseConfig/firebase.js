import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBH1nUHhUKd0nCBKPfkhPPHDp_9vga94-c',
  authDomain: 'kosuri-tienda.firebaseapp.com',
  projectId: 'kosuri-tienda',
  storageBucket: 'kosuri-tienda.appspot.com',
  messagingSenderId: '684240266477',
  appId: '1:684240266477:web:15050af23b69e640e518e4',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

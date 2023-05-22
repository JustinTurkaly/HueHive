/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCMdfsqusaFDU6uj8hoYrTpgWwn6LpbfIY',
  authDomain: 'huehive-d7763.firebaseapp.com',
  projectId: 'huehive-d7763',
  storageBucket: 'huehive-d7763.appspot.com',
  messagingSenderId: '561538784202',
  appId: '1:561538784202:web:9306d5465f39b8183e4d33',
  measurementId: 'G-BT8BWCRBTJ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};

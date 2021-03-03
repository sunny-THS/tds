var firebaseConfig = {
  apiKey: "AIzaSyDhnj1d1igGJTPx8h5Zjtgw69nm0pW8gEY",
  authDomain: "tdss-ef3a0.firebaseapp.com",
  databaseURL: "https://tdss-ef3a0.firebaseio.com",
  projectId: "tdss-ef3a0",
  storageBucket: "tdss-ef3a0.appspot.com",
  messagingSenderId: "733324019576",
  appId: "1:733324019576:web:c036e42d1ec3660f9cea8d",
  measurementId: "G-K5N1YNYF31"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
document.addEventListener("DOMContentLoaded", event => {
  var app = firebase.app();
});

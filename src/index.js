import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAweTNfP6HXxJItYeZ6R8jYeU4jk6Hwb1E",
    authDomain: "ionic4-udemy.firebaseapp.com",
    databaseURL: "https://ionic4-udemy.firebaseio.com",
    projectId: "ionic4-udemy",
    storageBucket: "ionic4-udemy.appspot.com",
    messagingSenderId: "704274670716",
    appId: "1:704274670716:web:4dc3212366406dc79f95f9"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

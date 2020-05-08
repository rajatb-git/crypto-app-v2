import app from 'firebase/app';
import 'firebase/auth';

import errorCodes from './firebaseErrorCodes';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.user = JSON.parse(window.sessionStorage.getItem('user')) || null;
  }

  doSignInWithEmailAndPassword = (signInEmail, signInPassword) => this.auth
    .signInWithEmailAndPassword(signInEmail, signInPassword)
    .then(response => {
      if (response && response.user && response.user.uid) {
        this.user = (({ uid, displayName, photoUrl, email, metadata }) => ({
          uid,
          displayName,
          photoUrl,
          email,
          metadata
        }))(response.user);
      }
      window.sessionStorage.setItem('user', JSON.stringify(this.user));
      return this.user;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      throw errorCodes[error.code];
    });

  doSignOut = () => {
    window.sessionStorage.clear();
    this.auth.signOut().then(() => {
      this.user = null;
    });
  };

  fetchUserToken = async () => {
    await this.auth.onAuthStateChanged(user => {
      if (!user) window.sessionStorage.clear();
      this.user = user;
    });

    return this.auth.currentUser.getIdToken(true)
      .then(idToken => idToken)
      .catch(error => {
        throw error.message;
      });
  };

  getUser = () => this.user;
}

export default Firebase;

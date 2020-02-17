import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config, 'crypto-app-v2');

      this.auth = firebase.app().auth();
      this.user = this.auth.currentUser;
    }
  }

  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async doSignInWithEmailAndPassword(email, password) {
    const result = await this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        this.user = userCred.user;
        return true;
      }).catch((error) => {
        return error;
      });

    return result;
  }

  isLoggedIn() {
    this.user = this.auth.currentUser;
    return Boolean(this.user);
  }
// doSignOut = () => this.auth.signOut();
// doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
// doPasswordUpdate = password =>
//   this.auth.currentUser.updatePassword(password);
}

export default Firebase;

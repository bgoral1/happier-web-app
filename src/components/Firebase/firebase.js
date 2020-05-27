// import axios from 'axios';
import firebaseConfig from './config';

class Firebase {
  constructor(app) {
    // eslint-disable-next-line no-use-before-define
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.firestore();
      this.functions = app.functions();
      this.storage = app.storage();
    }
  }

  async getUserProfile({ userId }) {
    return this.db
      .collection('publicProfiles')
      .where('userId', '==', userId)
      .get();
  }

  async register({ email, password, userName }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return this.db
      .collection('publicProfiles')
      .doc(userName)
      .set({
        userId: newUser.user.uid,
      });
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app);
    return firebaseInstance;
    // eslint-disable-next-line no-else-return
  } else if (firebaseInstance) {
    return firebaseInstance;
  } else {
    return null;
  }
}

export default getFirebaseInstance;

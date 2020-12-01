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

  getUserProfile({ userId, onSnapshot }) {
    return this.db
      .collection('publicProfiles')
      .where('userId', '==', userId)
      .limit(1)
      .onSnapshot(onSnapshot);
  }

  async checkLogin({ userName }) {
    const checkLoginCallable = this.functions.httpsCallable('checkLogin');
    return checkLoginCallable({ userName });
  }

  async register({ email, password, userName }) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    const createProfileCallable = this.functions.httpsCallable(
      'createPublicProfile'
    );
    return createProfileCallable({ userName });
  }

  async addInstitutionRole({ email }) {
    const addInstitutionCallable = this.functions.httpsCallable(
      'addInstitutionRole'
    );
    return addInstitutionCallable({ email });
  }

  async addToInstitutions({ name, email, city }) {
    const addToInstitutionsCallable = this.functions.httpsCallable(
      'addToInstitutions'
    );
    return addToInstitutionsCallable({ name, email, city });
  }

  async getInstitutionId({ email }) {
    return this.db
      .collection('institutions')
      .where('email', '==', email)
      .get();
  }

  async addPet({
    species,
    name,
    lead,
    description,
    institutionId,
    filters,
    petImage,
  }) {
    const addPetCallable = this.functions.httpsCallable('addPet');
    return addPetCallable({
      species,
      name,
      lead,
      description,
      institutionId,
      filters,
      petImage,
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

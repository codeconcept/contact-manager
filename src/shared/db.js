import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({ timestampsInSnapshots: true });

export default {
  create(contact) {
    return Firestore.collection('contacts').add(contact);
  },
  read() {
    return Firestore.collection('contacts').get();
  },
  update(contact) {
    return Firestore.collection('contacts').doc(contact.id).update({ contact });
  },
  replace(contact) {
    return Firestore.collection('contacts').doc(contact.id).set({ contact });
  },
  delete(id) {
    return Firestore.collection('drinks').doc(id).delete();
  },
};

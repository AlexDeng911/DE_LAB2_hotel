import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const databaseRef = firebase.database().ref();
export const accountsRef = databaseRef.child('Accounts');
export const roomsRef = databaseRef.child('Rooms');

export default firebase;

export const getAccountsFirebase = async () => {
  let accounts = {};
  const dbAccounts = await accountsRef.once('value');
  accounts = { ...accounts, ...dbAccounts.val() };
  return accounts;
};

export const getRoomsFirebase = async () => {
  const dbRooms = await roomsRef.once('value');
  return dbRooms.val().reduce((acc, room) => ({ ...acc, [room.id]: room }), {});
};

export const updateRoomFirebase = (id, data) => {
  roomsRef
    .orderByChild('id')
    .equalTo(id)
    .on('child_added', async (snapshot) => {
      await snapshot.ref.update(data);
    });
};

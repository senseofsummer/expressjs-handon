import { db } from '../functions/src/config/firebaseConfig';

export const updateUserData = async (userId: string, data: any) => {
  const userRef = db.collection('USERS').doc(userId);
  await userRef.set(data, { merge: true });
};

export const fetchUserData = async (userId: string) => {
  const userRef = db.collection('USERS').doc(userId);
  const doc = await userRef.get();

  if (!doc.exists) {
    throw new Error('User not found');
  }

  return doc.data();
};

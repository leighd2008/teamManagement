import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import 'firebase/compat/storage'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const role = 'family';

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        role,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = teams => {
  const transformedCollection = teams.docs.map(doc => {
    const {
      title,
      teamName,
      location,
      eventUrls,
      teamPic,
      calendarLink,
      tournaments,
      teamEvents,
      division,
      roster,
      headCoach,
      teamEmail,
      coachPhone,
      teamNum,
      teamManager,
      managerPhone,
      coachEmail
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      teamName,
      location,
      eventUrls,
      teamPic,
      calendarLink,
      tournaments,
      teamEvents,
      division,
      roster,
      headCoach,
      teamEmail,
      coachPhone,
      teamNum,
      teamManager,
      managerPhone,
      coachEmail
    };
  });

  return transformedCollection.reduce((accumulator, team) => {
    accumulator[team.title] = team;
    return accumulator;
  }, {});
};

export const convertCollectionsSnapshotToMap2 = fields => {
  const transformedCollection = fields.docs.map(doc => {
    const {
      title,
      fieldname,
      schedule,
      eventCreator,
      type,
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      fieldname,
      schedule,
      eventCreator,
      type,
    };
  });
  return transformedCollection.reduce((accumulator, field) => {
    accumulator[field.title] = field;
    return accumulator;
  }, {});
};

export const convertCollectionsSnapshotToMap3 = preregistration2022 => {
  const transformedCollection = preregistration2022.docs.map(doc => {
    const {
      title,
      players,
      division,
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      players,
      division,
    };
  });
  return transformedCollection.reduce((accumulator, registration) => {
    accumulator[registration.title] = registration;
    return accumulator;
  }, {});
};

export const convertCollectionsSnapshotToMap4 = registered => {
  const transformedCollection = registered.docs.map(doc => {
    const {
      title,
      players,
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      players,
    };
  });
  return transformedCollection.reduce((accumulator, registered) => {
    accumulator[registered.title] = registered;
    return accumulator;
  }, {});
};

export const storage = firebase.storage();
const listItems = []
storage.ref().child('tourneyWins/').listAll().then(res => {
  if (res.items && res.items.length > 0) {
    res.items.forEach(item => {
      item.getDownloadURL().then(url => {
        listItems.push(url)
      })
    })
  }
})
.catch(err => {
  alert(err.message);
})

export const tournyWinsList = listItems

const listItems2 = []
storage.ref().child('homeruns/').listAll().then(res => {
  if (res.items && res.items.length > 0) {
    res.items.forEach(item => {
      item.getDownloadURL().then(url => {
        listItems2.push(url)
      })
    })
  }
})
.catch(err => {
  alert(err.message);
})

export const homerunsList = listItems2

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

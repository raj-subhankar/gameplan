export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: "LOGIN_SUCCESS" })
    }).catch((err) => {
      dispatch({ type: "LOGIN_ERROR", err })
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = user => 
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    try {
      let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      console.log('createdUser', createdUser);
      // updateProfile adds these to the correct users document
      await firebase.updateProfile({
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.firstName[0] + user.lastName[0],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }
    catch (err) {
      dispatch({ type: 'SIGNUP_ERROR', err });
    }
  }

// export const signUp = (newUser) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     const firestore = getFirebase().firestore();

//     firebase.auth().createUserWithEmailAndPassword(
//       newUser.email,
//       newUser.password
//     ).then(resp => {
//       return firestore.collection('users').doc(resp.user.uid).set({
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         initials: newUser.firstName[0] + newUser.lastName[0]
//       });
//     }).then(() => {
//       dispatch({ type: 'SIGNUP_SUCCESS' });
//     }).catch((err) => {
//       dispatch({ type: 'SIGNUP_ERROR', err });
//     });
//   }
// }
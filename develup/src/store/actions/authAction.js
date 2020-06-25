export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS', credentials})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_FAILED', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}
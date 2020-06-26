export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('posts').add(
            {
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorAvatar: profile.avatar,
                authorId,
                createdAt: new Date()
            }
        ).then(
            dispatch({ type:'CREATE_POST', project })
        ).catch((err) => {
            dispatch({ type:'CREATE_POST_FAILED', err })
        }) 
    }
}
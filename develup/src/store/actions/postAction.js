export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('posts').add(
            {
                ...project,
                authorFirstName: 'Abhiram',
                authorLastName: 'Reddy',
                authorId: 1111,
                createdAt: new Date()
            }
        ).then(
            dispatch({ type:'CREATE_POST', project })
        ).catch((err) => {
            dispatch({ type:'CREATE_POST_FAILED', err })
        }) 
    }
}
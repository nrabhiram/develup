const initState = {
    posts: [
        { id: 1, title: 'Hey there!', content: 'Just some dummy text! Nothing to see here. Move on.'},
        { id: 2, title: 'Testing', content: 'Just some dummy text! Nothing to see here. Move on.'},
        { id: 3, title: 'Yo!', content: 'Just some dummy text! Nothing to see here. Move on.'}
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;
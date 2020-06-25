const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login successful')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAILED':
            console.log('login failed')
            return {
                ...state,
                authError: 'login failed'
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return {
                ...state,
                authError: null
            }
        default:
            return {
                ...state,
                authError: null
            }
    }
}

export default authReducer;
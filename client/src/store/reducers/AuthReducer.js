const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
	token: '',
	user: '',
}
const AuthReducer = (state = initState, action) => {
	if (action.type === 'SET_LOADER') {
		return { ...state, loading: true };
	} else if (action.type === 'CLOSE_LOADER') {
		return { ...state, loading: false };
	} else if (action.type === 'REGISTER_ERRORS') {
		console.log(action.payload)
		return { ...state, registerErrors: action.payload };
	} 
	// else if (action.type === SET_TOKEN) {
	// 	const decoded = verifyToken(action.payload);
	// 	const { user } = decoded;
	// 	return {
	// 		...state,
	// 		token: action.payload,
	// 		user: user,
	// 		loginErrors: [],
	// 		registerErrors: [],
	// 	};
	// } else if (action.type === LOGOUT) {
	// 	return { ...state, token: '', user: '' };
	// } else if (action.type === LOGIN_ERRORS) {
	// 	return {
	// 		...state,
	// 		loginErrors: action.payload,
	// 	};
	// } else {
		return state;
    // }
}
export default AuthReducer;
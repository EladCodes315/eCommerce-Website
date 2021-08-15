import * as actionTypes from '../constants/accountConstants';

export const getLoggedUserReducer = (state = { loggedUser: {} }, action) => {
	switch (action.type) {
		case actionTypes.POST_ACCOUNT_REQUEST: {
			return {
				loading: true,
				loggedUser: {}
			};
		}
		case actionTypes.POST_ACCOUNT_SUCCESS: {
			return {
				loading: false,
				loggedUser: {}
			};
		}
		case actionTypes.POST_ACCOUNT_FAIL: {
			return {
				loading: false,
				loggedUser: {},
				error: action.payload
			};
		}
		case actionTypes.LOGIN_ACCOUNT: {
			localStorage.setItem('loggedUser', JSON.stringify(action.payload));
			return {
				loggedUser: action.payload
			};
		}
		case actionTypes.ADD_TO_CART_REQUEST: {
			return {
				loading: true,
				loggedUser: { ...state.loggedUser }
			};
		}
		case actionTypes.ADD_TO_CART_SUCCESS: {
			return {
				loading: false,
				loggedUser: { ...state.loggedUser, cart: [ ...action.payload ] }
			};
		}
		case actionTypes.ADD_TO_CART_FAIL: {
			return {
				loading: false,
				loggedUser: { ...state.loggedUser },
				error: action.payload
			};
		}
		case actionTypes.REMOVE_FROM_CART_REQUEST: {
			return {
				loading: true,
				loggedUser: { ...state.loggedUser }
			};
		}
		case actionTypes.REMOVE_FROM_CART_SUCCESS: {
			return {
				...state,
				loading: false,
				loggedUser: { ...state.loggedUser, cart: action.payload }
			};
		}
		case actionTypes.REMOVE_FROM_CART_FAIL: {
			return {
				loading: false,
				loggedUser: { ...state.loggedUser },
				error: action.payload
			};
		}
		case actionTypes.LOGOUT_ACCOUNT: {
			localStorage.setItem('loggedUser', '{}');
			return {
				loggedUser: {}
			};
		}
		case actionTypes.RESET_CART_REQUEST: {
			return {
				loading: true,
				loggedUser: { ...state.loggedUser }
			};
		}
		case actionTypes.RESET_CART_SUCCESS: {
			return {
				...state,
				loading: false,
				loggedUser: { ...state.loggedUser, cart: [] }
			};
		}
		case actionTypes.RESET_CART_FAIL: {
			return {
				loading: false,
				loggedUser: { ...state.loggedUser },
				error: action.payload
			};
		}
		case actionTypes.CHANGE_ACCOUNT_USERNAME: {
			return {
				loggedUser: { ...state.loggedUser, username: action.payload }
			};
		}
		case actionTypes.CHANGE_ACCOUNT_PASSWORD: {
			return {
				loggedUser: { ...state.loggedUser, password: action.payload }
			};
		}
		case actionTypes.CHANGE_ACCOUNT_FULLNAME: {
			return {
				loggedUser: { ...state.loggedUser, fullname: action.payload }
			};
		}
		case actionTypes.CHANGE_ACCOUNT_EMAIL: {
			return {
				loggedUser: { ...state.loggedUser, email: action.payload }
			};
		}
		case actionTypes.CHANGE_ACCOUNT_BIRTHDATE: {
			return {
				loggedUser: { ...state.loggedUser, dateOfBirth: action.payload }
			};
		}
		default: {
			return { ...state };
		}
	}
};

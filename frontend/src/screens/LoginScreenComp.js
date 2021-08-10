import React, { useState } from 'react';

import './LoginScreenComp.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../redux/constants/accountConstants';

const LoginScreenComp = ({ history }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const dispatch = useDispatch();

	const loginFunc = async () => {
		try {
			let account = {
				username,
				password
			};
			let { data } = await axios.post('http://localhost:4000/login', account);
			if (data.account) {
				dispatch({
					type: actionTypes.LOGIN_ACCOUNT,
					payload: data.account
				});
				history.push('/');
			}
			else if (data.message === 'User Not Found') {
				alert('User Not Found');
			}
			else if (data.message === 'Invalid Password') {
				alert('Invalid Password');
			}
			else {
				alert('Server Error');
			}
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	return (
		<div className="loginscreen">
			<div className="login-container">
				<i className="fas fa-user-circle" style={{ fontSize: '50px' }} />
				<h2 className="login-title">Login</h2>
				<label className="login-labels">Username</label>
				<input type="text" onChange={e => setUsername(e.target.value)} />
				<label className="login-labels">Password</label>
				<input type="password" onChange={e => setPassword(e.target.value)} />
				<button className="login-btn" onClick={loginFunc}>
					Sign In
				</button>
				<p className="register-link">
					Don't have an account? <Link to="/register">Sign Up!</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginScreenComp;

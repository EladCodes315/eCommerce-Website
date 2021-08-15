import React, { useState } from 'react';

import './RegisterScreenComp.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/actions/accountActions';

const RegisterScreenComp = ({ history }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ fullname, setFullname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ dateOfBirth, setDateOfBirth ] = useState(new Date());

	const dispatch = useDispatch();

	const registerFunc = async () => {
		try {
			let account = {
				username,
				password,
				fullname,
				email,
				dateOfBirth
			};
			dispatch(addAccount(account));
			history.push('/login');
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};
	return (
		<div className="registerscreen">
			<div className="register-container">
				<i className="fas fa-user-circle" style={{ fontSize: '50px' }} />
				<h2 className="register-title">Register</h2>
				<label className="register-labels">Username</label>
				<input type="text" onChange={e => setUsername(e.target.value)} />
				<label className="register-labels">Password</label>
				<input type="password" onChange={e => setPassword(e.target.value)} />
				<label className="register-labels">Full Name</label>
				<input type="text" onChange={e => setFullname(e.target.value)} />
				<label className="register-labels">Email</label>
				<input type="email" onChange={e => setEmail(e.target.value)} />
				<label className="register-labels">Birthdate</label>
				<input type="date" onChange={e => setDateOfBirth(e.target.value)} />
				<button className="register-btn" onClick={registerFunc}>
					Sign Up
				</button>
				<p className="register-link">
					Already have an account? <Link to="/login">Sign In!</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterScreenComp;

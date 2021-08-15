import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import './ProfileScreenComp.css';

import * as actionTypes from '../redux/constants/accountConstants';

const ProfileScreenComp = ({ history }) => {
	const loggedUser = useSelector(state => state.getLoggedUser.loggedUser);

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ fullname, setFullname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ dateOfBirth, setDateOfBirth ] = useState(new Date());

	const dispatch = useDispatch();

	const changeUsernameHandler = async () => {
		try {
			await axios.put(`http://localhost:4000/accounts/${loggedUser._id}/accountusername`, { username });
			dispatch({ type: actionTypes.CHANGE_ACCOUNT_USERNAME, payload: username });
			history.push('/profile');
		} catch (error) {
			console.error(error);
		}
	};

	const changePasswordHandler = async () => {
		try {
			let { data } = await axios.put(`http://localhost:4000/accounts/${loggedUser._id}/accountpassword`, { password });
			dispatch({ type: actionTypes.CHANGE_ACCOUNT_PASSWORD, payload: data });
			history.push('/profile');
		} catch (error) {
			console.error(error);
		}
	};

	const changeFullnameHandler = async () => {
		try {
			await axios.put(`http://localhost:4000/accounts/${loggedUser._id}/accountfullname`, { fullname });
			dispatch({ type: actionTypes.CHANGE_ACCOUNT_FULLNAME, payload: fullname });
			history.push('/profile');
		} catch (error) {
			console.error(error);
		}
	};

	const changeEmailHandler = async () => {
		try {
			await axios.put(`http://localhost:4000/accounts/${loggedUser._id}/accountemail`, { email });
			dispatch({ type: actionTypes.CHANGE_ACCOUNT_EMAIL, payload: email });
			history.push('/profile');
		} catch (error) {
			console.error(error);
		}
	};

	const changeBirthdateHandler = async () => {
		try {
			await axios.put(`http://localhost:4000/accounts/${loggedUser._id}/accountdate`, { dateOfBirth });
			dispatch({ type: actionTypes.CHANGE_ACCOUNT_BIRTHDATE, payload: dateOfBirth });
			history.push('/profile');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="profilescreen">
			<h2> My Profile</h2>
			<Switch>
				<Route exact path="/profile">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							<b className="profile-labels">Username: </b> {loggedUser.username}{' '}
							<Link to="/profile/editusername" className="profile-edit-links" style={{ fontSize: '0.7rem' }}>
								Change Username
							</Link>
						</p>
						<p className="profile-info-paragraphs">
							<b className="profile-labels">Password: </b> ********{' '}
							<Link to="/profile/editpassword" className="profile-edit-links" style={{ fontSize: '0.7rem' }}>
								Change Password
							</Link>
						</p>
						<p className="profile-info-paragraphs">
							<b className="profile-labels">Full Name: </b> {loggedUser.fullname}{' '}
							<Link to="/profile/editfullname" className="profile-edit-links" style={{ fontSize: '0.7rem' }}>
								Change Name
							</Link>
						</p>
						<p className="profile-info-paragraphs">
							<b className="profile-labels">Email: </b> {loggedUser.email}{' '}
							<Link to="/profile/editemail" className="profile-edit-links" style={{ fontSize: '0.7rem' }}>
								Change Email
							</Link>
						</p>
						<p className="profile-info-paragraphs">
							<b className="profile-labels">Date of Birth: </b> {new Date(loggedUser.dateOfBirth).toLocaleDateString()}{' '}
							<Link to="/profile/editbirthdate" className="profile-edit-links" style={{ fontSize: '0.7rem' }}>
								Change Birthdate
							</Link>
						</p>
					</div>
				</Route>
				<Route path="/profile/editusername">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							New Username: <input type="text" onChange={e => setUsername(e.target.value)} />
							<button className="profile-changeBtns" onClick={changeUsernameHandler}>
								Change
							</button>{' '}
							<br />
							<button className="profile-backBtns" onClick={() => history.push('/profile')}>
								{' '}
								Back
							</button>
						</p>
					</div>
				</Route>
				<Route path="/profile/editpassword">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							New Password: <input type="password" onChange={e => setPassword(e.target.value)} />
							<button className="profile-changeBtns" onClick={changePasswordHandler}>
								Change
							</button>{' '}
							<br />
							<button className="profile-backBtns" onClick={() => history.push('/profile')}>
								{' '}
								Back
							</button>
						</p>
					</div>
				</Route>
				<Route path="/profile/editfullname">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							Full Name: <input type="text" onChange={e => setFullname(e.target.value)} />
							<button className="profile-changeBtns" onClick={changeFullnameHandler}>
								Change
							</button>{' '}
							<br />
							<button className="profile-backBtns" onClick={() => history.push('/profile')}>
								{' '}
								Back
							</button>
						</p>
					</div>
				</Route>
				<Route path="/profile/editemail">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							New Email: <input type="email" onChange={e => setEmail(e.target.value)} />
							<button className="profile-changeBtns" onClick={changeEmailHandler}>
								Change
							</button>{' '}
							<br />
							<button className="profile-backBtns" onClick={() => history.push('/profile')}>
								{' '}
								Back
							</button>
						</p>
					</div>
				</Route>
				<Route path="/profile/editbirthdate">
					<div className="profile-info">
						<p className="profile-info-paragraphs">
							New Birthdate: <input type="date" onChange={e => setDateOfBirth(e.target.value)} />
							<button className="profile-changeBtns" onClick={changeBirthdateHandler}>
								Change
							</button>{' '}
							<br />
							<button className="profile-backBtns" onClick={() => history.push('/profile')}>
								{' '}
								Back
							</button>
						</p>
					</div>
				</Route>
			</Switch>
		</div>
	);
};

export default ProfileScreenComp;

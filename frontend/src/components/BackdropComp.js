// React Hooks
import React from 'react';
// CSS
import './BackdropComp.css';

const BackdropComp = props => {
	return props.show && <div className={'backdrop'} onClick={props.click} />;
};

export default BackdropComp;

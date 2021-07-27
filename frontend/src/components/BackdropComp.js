// React Hooks
import React, { useEffect, useState } from 'react';
// CSS
import './BackdropComp.css';

const BackdropComp = props => {
	return props.show && <div className={'backdrop'} onClick={props.click} />;
};

export default BackdropComp;

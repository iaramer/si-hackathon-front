import * as React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../common/logo.png';
import  './header.scss';

export class Header extends React.PureComponent {
	 render() {
		return (
			<div className="header">
				<span>
					<img src={logo} className="logo" alt='logo'/>
				</span>
				<h3>E V A L</h3>

				<div>User Stub</div>
			</div>
		);
	}
}

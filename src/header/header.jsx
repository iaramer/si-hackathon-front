import * as React from 'react';

import logo from '../common/logo.png';
import  './header.scss';

export class Header extends React.PureComponent {
	 render() {
		return (
			<div className="header">
				<span>fffffff
					<img src={logo} className="logo" alt='logo'/>
				</span>
				
				<div>User Stub</div>
			</div>
		);
	}
}

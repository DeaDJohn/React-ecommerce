import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
	render(){
		return(
			<div>
				<header>Ecommerce</header>
				{this.props.children}
				<footer>&copy; 2019</footer>
			</div>
		)
	}
}


App.propTypes = {
	children: PropTypes.object.isRequired
};
export default App;
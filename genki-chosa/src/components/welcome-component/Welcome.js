import React from 'react';
import { Button } from '../button-component/Button';
import { Link } from 'react-router-dom';

import './Welcome.css';

function Welcome() {


	return (
		<div className="welcome-container">
			<h2>Genki Chōsa</h2>
			<small>『A げんき (3rd Edition) series study review.』</small>

			<div className="welcome-btns">
				<Link to="/genki1-home">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">GENKI 1 &nbsp; <i className="fas fa-book" /> </Button>
				</Link>

				<Link to="/genki2-home">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">GENKI 2 &nbsp;<i className="fas fa-book" /> </Button>
				</Link>
				

			</div>

		</div>
	);
}

export default Welcome;
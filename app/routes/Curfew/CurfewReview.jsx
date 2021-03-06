import React, { Component } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class CurfewReview extends Component {

	constructor(props) {
	    super(props);
	    this.createCurfew = this.createCurfew.bind(this);
	}

	createCurfew(e) {
		e.preventDefault();
		this.props.history.push('/createCurfew');
	}

	render() {
	    return (
	    	<div>
	    		<Heading/>
		        <div className="page">
		        	<VehicleBar/>
		          	<div className="page__content">
		            	<div className="page-title">Curfews</div>
		            	<div className="blade">          
						    <div className="blade__heading">
						      <img className="blade__icon blade__icon--small" src="/app/images/icon-circle-active.svg"/>
						      <div>
						        Summer Setting
						        <p className="blade__heading-description">Monday - Friday, 8:00 pm to 6:00 am</p>
						      </div>
						      <div className="blade__heading-dots"></div>
						    </div>
						</div>
						<div className="blade">          
						    <div className="blade__heading">
						      <img className="blade__icon blade__icon--small" src="/app/images/icon-circle-inactive.svg"/>
						      <div>
						        Winter Setting
						        <p className="blade__heading-description">Monday - Friday, 8:00 pm to 6:00 am</p>
						      </div>
						      <div className="blade__heading-dots"></div>
						    </div>
						</div>
		            	<div className="blade" onClick={this.createCurfew}>          
						    <div className="blade__heading">
						      <img className="blade__icon blade__icon--small" src="/app/images/icon-circle-plus.svg"/>
						      <div>
						        Create New Setting
						        <p className="blade__heading-description">Lock, Unlock and Locate Your Subaru</p>
						      </div>
						      <div className="blade__heading-dots"></div>
						    </div>
						</div>
			    	</div>
			    </div>
			</div>

	    )
	}
}

export default CurfewReview;
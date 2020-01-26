import React, { Component } from 'react';
import '../css/vendor/util.css';
import '../css/vendor/bootstrap.css';
import '../css/Contact.css';

class Contact extends Component {
	componentDidMount(){
		this.props.renderEvent(true);
	}
    render(){
        return(	
        <div class="container-contact100">
		<div class="wrap-contact100">
			<form class="contact100-form validate-form">
				<span class="contact100-form-title">Please contact us if you have any queries</span>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100 d-flex justify-content-center">Venkatesh Prasad</span>
					<span class="input100 d-flex justify-content-center">9786075467</span>
				</div>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100 d-flex justify-content-center">Sara Aafreen</span>
					<span class="input100 d-flex justify-content-center">8111872503</span>
				</div>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100 d-flex justify-content-center">Mail</span>
					<span class="input100 d-flex justify-content-center">admin@enantra.org</span>
				</div>
			</form>
		</div>
	</div>
        )
    }
}

export default Contact;
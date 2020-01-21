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
				<span class="contact100-form-title">Submit your queries</span>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100">Your Name</span>
					<input class="input-contact input100" type="text" name="name" placeholder="Enter your name"/>
					<span class="focus-input100"></span>
				</div>
				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<span class="label-input100">Email</span>
					<input class="input-contact input100" type="text" name="email" placeholder="Enter your email addess"/>
					<span class="focus-input100"></span>
				</div>
				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<span class="label-input100">Message</span>
					<textarea class="textarea-contact input100" name="message" placeholder="Your message here..."></textarea>
					<span class="focus-input100"></span>
				</div>
				<div class="container-contact100-form-btn">
					<div class="wrap-contact100-form-btn">
						<div class="contact100-form-bgbtn"></div>
						<button class="button-contact contact100-form-btn">
							<span>
								Submit
								<i class="fas fa-long-arrow-alt-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
        )
    }
}

export default Contact;
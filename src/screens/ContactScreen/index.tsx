import React from "react";

import "./index.css";

function ContactScreen() {
	return (
		<div className="contact-section">
			<div className="contact-content">
				<span>
					<h1 className="section-header contact-header">Contact</h1>
				</span>

				<div className="contact-details">
					<button
						className="email-button"
						onClick={() => {
							window.location.href =
								"mailto:collinj2055@gmail.com";
						}}
					>
						collinj2055@gmail.com
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactScreen;

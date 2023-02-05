import React from "react";

import "./index.css";

function StarterScreen() {
	return (
		<div className="starter-screen">
			<img
				src={require("../../assets/img/Teak_Hampster_Large.png")}
				alt="Logo"
				className="logo-title not-draggable light-box-shadow"
				onDragStart={(e) => e.preventDefault()}
			/>
			<div className="hello-content">
				<span className="hello-i-am not-draggable">Hello! I'm</span>
				<span className="hello-my-name">Collin</span>
				<span className="hello-i-make not-draggable">
					I make simplicity.
				</span>
			</div>
		</div>
	);
}

export default StarterScreen;

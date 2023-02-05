import React from "react";
import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";

import "./index.css";

function Header() {
	return (
		<div className="header">
			<div className="header-mobile">
				<img
					src={require("../../assets/img/Teak_Hampster_Large.png")}
					alt="Logo"
					className="logo-title-mobile not-draggable light-box-shadow"
					onDragStart={(e) => e.preventDefault()}
				/>

				<div
					className="header-mobile-title"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					Collin Jones
				</div>

				<div className="header-mobile-hamburger">
					<GiHamburgerMenu className="hamburger-icon" />
				</div>
				{/* <div className="header-mobile-links">
					<Link
						to="about-screen"
						smooth={true}
						duration={300}
						offset={-30}
					>
						<p className="header-element hover-underline-animation">
							About Me
						</p>
					</Link>
					<Link
						to="experience-screen"
						smooth={true}
						duration={300}
						offset={-30}
					>
						<p className="header-element hover-underline-animation">
							Experience
						</p>
					</Link>
					<Link
						to="my-work-screen"
						smooth={true}
						duration={300}
						offset={-30}
					>
						<p className="header-element hover-underline-animation">
							My Work
						</p>
					</Link>
					<Link
						to="about-screen"
						smooth={true}
						duration={300}
						offset={-30}
					>
						<p className="header-element hover-underline-animation">
							Contact
						</p>
					</Link>
				</div> */}
			</div>

			<div className="header-links">
				<Link
					to="about-screen"
					smooth={true}
					duration={300}
					offset={-30}
				>
					<p className="header-element hover-underline-animation">
						About Me
					</p>
				</Link>
				<Link
					to="experience-screen"
					smooth={true}
					duration={300}
					offset={-30}
				>
					<p className="header-element hover-underline-animation">
						Experience
					</p>
				</Link>
				<Link
					to="my-work-screen"
					smooth={true}
					duration={300}
					offset={-30}
				>
					<p className="header-element hover-underline-animation">
						My Work
					</p>
				</Link>
				<Link
					to="about-screen"
					smooth={true}
					duration={300}
					offset={-30}
				>
					<p className="header-element hover-underline-animation">
						Contact
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Header;

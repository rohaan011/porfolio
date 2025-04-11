import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://www.vocalpanda.com/_next/image?url=https%3A%2F%2Fjobportal-prod-bucket.s3.amazonaws.com%2Fuploads%2Fportal%2F2D2635_UBA%2520Solutions.jpg&w=1080&q=75"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">UBA solutions</div>
							<div className="work-subtitle">
								UI/UX Designer Intern
							</div>
							<div className="work-duration">2025 </div>
						</div>

					
					</div>
				}
			/>
		</div>
	);
};

export default Works;

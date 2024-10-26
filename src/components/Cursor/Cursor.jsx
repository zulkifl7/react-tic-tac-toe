import React, { useEffect } from "react";
import "./Cursor.css";

// Cursor component
const Cursor = () => {
	// useEffect to handle side effects like adding event listeners and animations
	useEffect(() => {
		// Initial cursor coordinates
		const coordinates = { x: 100, y: 100 };
		const tempCoordinates = { x: 100, y: 100 };

		// Select all cursor elements and the top circle element
		const cursorCircles = document.querySelectorAll(".cursor");
		const topCircle = document.querySelector(".cursor_");

		// Initialize positions for each cursor circle
		cursorCircles.forEach((circle) => {
			circle.x = 0;
			circle.y = 0;
		});

		// Event handler to update coordinates on mouse movement
		const handleMouseMove = (e) => {
			coordinates.x = e.clientX;
			tempCoordinates.x = e.clientX;
			coordinates.y = e.clientY;
			tempCoordinates.y = e.clientY;
		};

		// Attach mousemove event listener to update coordinates
		document.addEventListener("mousemove", handleMouseMove);

		// Function to animate the cursor's movement
		const animateCursor = () => {
			let x = coordinates.x;
			let y = coordinates.y;

			// Update the top circle's position
			if (topCircle) {
				topCircle.style.left = `${x - 10}px`;
				topCircle.style.top = `${y - 10}px`;
			}

			// Update the position and scale of each cursor circle
			cursorCircles.forEach((cursor, index) => {
				if (cursor) {
					cursor.style.left = `${x - 10}px`;
					cursor.style.top = `${y - 10}px`;
					// Adjust the scale based on the circle's position in the array
					cursor.style.scale =
						(cursorCircles.length - index) / cursorCircles.length;

					// Update the cursor's stored coordinates
					cursor.x = x;
					cursor.y = y;

					// Calculate the position for the next circle to create a trailing effect
					const nextCircle =
						cursorCircles[index + 1] || cursorCircles[0];
					x += (nextCircle.x - x) * 0.2;
					y += (nextCircle.y - y) * 0.2;
				}
			});

			// Continuously request the next frame for animation
			requestAnimationFrame(animateCursor);
		};

		// Start the cursor animation
		animateCursor();

		// Clean up event listeners when the component is unmounted
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Render the cursor elements
	return (
		<div>
			<div className="cursor_"></div>
			{Array.from({ length: 40 }).map((_, index) => (
				<div key={index} className="cursor"></div>
			))}
		</div>
	);
};

export default Cursor;

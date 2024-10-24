import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const coordinates = { x: 100, y: 100 };
    const tempCoordinates = { x: 100, y: 100 };
    const cursorCircles = document.querySelectorAll(".cursor");
    const topCircle = document.querySelector(".cursor_");

    cursorCircles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coordinates.x = e.clientX;
      tempCoordinates.x = e.clientX;
      coordinates.y = e.clientY;
      tempCoordinates.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      let x = coordinates.x;
      let y = coordinates.y;

      if (topCircle) {
        topCircle.style.left = `${x - 10}px`;
        topCircle.style.top = `${y - 10}px`;
      }

      cursorCircles.forEach((cursor, index) => {
        if (cursor) {
          cursor.style.left = `${x - 10}px`;
          cursor.style.top = `${y - 10}px`;
          cursor.style.scale =
            (cursorCircles.length - index) / cursorCircles.length;

          cursor.x = x;
          cursor.y = y;

          const nextCircle = cursorCircles[index + 1] || cursorCircles[0];
          x += (nextCircle.x - x) * 0.2;
          y += (nextCircle.y - y) * 0.2;
        }
      });

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Clean up event listeners when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

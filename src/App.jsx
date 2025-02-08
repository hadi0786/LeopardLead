import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import BasicRouter from "./config/Router/index";
function App() {
  const [count, setCount] = useState(0);

  const cursorRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const cursorScaleRefs = useRef([]);
  const newCursorRef = useRef([]);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "elastic",
      });
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>

      <div ref={newCursorRef}>
        <BasicRouter />
      </div>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import HeroSection from "./Components/HeroSection";
// import SignatureDishes from "./Components/SignatureDishes";
// import Reservation from "./Components/Reservation";
// import ChatbotSection from "./Components/ChatbotSection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
        Hi Cousins!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta incidunt, sapiente, aperiam ipsum suscipit iure omnis, voluptas ut voluptatem repellat harum sed. Cupiditate quidem at, natus quasi quos molestiae velit!
    </div>
  );
}
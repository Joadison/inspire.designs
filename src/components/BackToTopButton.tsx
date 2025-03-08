"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-[10rem] right-4 bg-blue-600 text-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp />
      </button>
    )
  );
}

export default BackToTopButton;

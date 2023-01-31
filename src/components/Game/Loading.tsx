import React, { useEffect, useState } from "react";
import GameButton from './GameButton';
import { elements, IElement } from './GameElements';

export default function Loading({ mode }: { mode: "classic" | "spock" | "custom" }) {
  const [currentElement, setCurrentElement] = useState(elements[0]);
  const length = (mode === "classic") ? 3 : (mode === "spock") ? 5 : elements.length

  useEffect(() => {
    const interval = setInterval(() => {
      let newElement = elements[Math.floor(Math.random() * length)];
      while (newElement === currentElement) {
        newElement = elements[Math.floor(Math.random() * length)];
      }
      setCurrentElement(newElement);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <GameButton
    color={currentElement.color}
    img={currentElement.img}
    func={() => { }}
  />
}


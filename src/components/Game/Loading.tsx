import React, { useEffect, useState } from "react";
import GameButton from './GameButton';
import { ELEMENTS } from './game_elements';
import { CLASSIC_SIZE, SPOCK_SIZE } from '../../utils/const';

export default function Loading({ mode }: {
  mode: "classic" | "spock" | "custom"
}) {
  const [currentElement, setCurrentElement] = useState(ELEMENTS[0]);
  const length = (mode === "classic") ?
    CLASSIC_SIZE : (mode === "spock") ?
      SPOCK_SIZE : ELEMENTS.length

  useEffect(() => {
    const interval = setInterval(() => {
      let newElement = ELEMENTS[Math.floor(Math.random() * length)];
      while (newElement === currentElement) {
        newElement = ELEMENTS[Math.floor(Math.random() * length)];
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


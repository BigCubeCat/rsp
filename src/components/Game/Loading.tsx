import React, { useEffect, useState } from "react";
import GameButton from './GameButton';
import { elements, IElement } from './GameElements';

export default function Loading() {
  const [currentElement, setCurrentElement] = useState(elements[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newElement = elements[Math.floor(Math.random() * elements.length)];
      // TODO: Оптимизировать
      while (newElement === currentElement) {
        newElement = elements[Math.floor(Math.random() * elements.length)];
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


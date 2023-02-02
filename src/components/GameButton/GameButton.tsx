import React from 'react';

interface GameButtonProps {
  func: Function;
  color: string;
  img?: string;
  size?: number;
}

export default function GameButton(props: GameButtonProps) {
  const size = (props.size) ? props.size : 100;
  return (
    <div
      style={{
        width: size, height: size,
        backgroundColor: props.color,
        display: 'flex', justifyContent: "center",
        margin: 10,
        borderRadius: "100%",
      }}
      onClick={() => props.func()}
    >
      <img
        style={{
          position: "relative",
          margin: "auto"
        }}
        src={props.img}
        width={Math.floor(.75 * size)}
        height={Math.floor(.75 * size)}
      />
    </div >
  )
}

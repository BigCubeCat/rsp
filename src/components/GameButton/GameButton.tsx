import React from 'react';
import styles from './GameButton.module.css'

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
      className={styles.But}
      style={{
        width: size, height: size,
        backgroundColor: props.color,
        display: 'flex', justifyContent: "center",
        margin: 10
      }}
      onClick={() => props.func()}
    >
      <img
        src={props.img}
        width={Math.floor(.75 * size)}
        height={Math.floor(.75 * size)}
      />
    </div>
  )
}

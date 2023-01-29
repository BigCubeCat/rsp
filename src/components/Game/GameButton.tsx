import React from 'react';
import styles from './GameButton.module.css'

interface GameButtonProps {
  func: Function;
  color: string;
  img?: string;
}

export default function GameButton(props: GameButtonProps) {
  return (
    <div
      className={styles.But}
      style={{
        width: "100px", height: "100px",
        backgroundColor: props.color,
        display: 'flex', justifyContent: "center",
        margin: 10
      }}
      onClick={() => props.func()}
    >
      <img src={props.img} width={75} height={75} />
    </div>
  )
}

import * as React from 'react';
import {
  Box
} from '@mui/material';

import Card from './Card/Card';

export default function Main() {
  return (
    <>
      <Card
        title={"Classic"}
        gameLink={"/game/classic"}
        rulesLink={"/about/classic"}
        img="/img/classic.jpg"
      />
      <Card
        title={"..., Lizard, Spock"}
        rulesLink={"/about/spock"}
        gameLink={"/game/spock"}
        img="/img/5.svg"
      />
      <Card
        title={"Classic"}
        rulesLink={"/about/custom"}
        gameLink={"/game/custom"}
        img="/img/classic.jpg"
      />
    </>
  )
}

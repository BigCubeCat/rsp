import * as React from 'react';
import {
  Box
} from '@mui/material';

import Card from './Card/Card';

export default function Main() {
  return (
    <>
      <Card title={"Classic"} rulesLink={"/about/classic"} img="/img/classic.jpg" />
      <Card title={"..., Lizard, Spock"} rulesLink={"/about/five"} img="/img/5.webp"/>
      <Card title={"Classic"} rulesLink={"/about/custom"} img="/img/classic.jpg"/>
    </>
  )
}

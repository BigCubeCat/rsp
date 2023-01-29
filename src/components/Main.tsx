import * as React from 'react';
import {
  Box
} from '@mui/material';

import Card from './Card/Card';

export default function Main() {
  return (
    <>
      <Card title={"Classic"} rulesLink={"/about/classic"} />
      <Card title={"Classic"} rulesLink={"/about/five"} />
      <Card title={"Classic"} rulesLink={"/about/custom"} />
    </>
  )
}

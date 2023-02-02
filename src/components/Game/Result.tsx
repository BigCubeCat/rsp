import React from 'react';
import { Alert } from '@mui/material';

import { resultType } from '../../utils/history';


export const Result = ({ result }: { result: resultType }): JSX.Element => {
  switch (result) {
    case "draw":
      return <Alert sx={{ margin: 5 }} severity="info">Ничья :-|</Alert>
    case "win":
      return <Alert sx={{ margin: 5 }} severity="success">Победа :-)</Alert>
    case "loose":
      return <Alert sx={{ margin: 5 }} severity="error">Поражение :-(</Alert>
    default:
      return <div></div>
  }
}

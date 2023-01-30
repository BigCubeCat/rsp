import { Alert } from '@mui/material';
import React from 'react';


export const Result = ({ result }: { result: number }): JSX.Element => {
  switch (result) {
    case 1:
      return <Alert sx={{ margin: 5 }} severity="info">Ничья!</Alert>
    case 2:
      return <Alert sx={{ margin: 5 }} severity="success">Победа 🎉 :-)</Alert>
    case 3:
      return <Alert sx={{ margin: 5 }} severity="error">Поражение :-(</Alert>
    default:
      return <div></div>
  }
}

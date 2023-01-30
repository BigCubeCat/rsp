import React from 'react';
import {
  Card, CardHeader, Typography, Box, Button
} from '@mui/material';
import { Link } from 'react-router-dom';

import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { GameResultRow, GetHistory } from './history';

/*
 * normilizeDate()
 * convert numbers < 10 like 7 to 07
 */
function normilizeDate(value: number): string {
  if (value < 10) {
    return "0" + value;
  }
  return "" + value;
}

function getDate(date: Date) {
  return normilizeDate(date.getDay()) + "."
    + normilizeDate(date.getMonth() + 1) + "."
    + date.getFullYear();
}

function getTime(date: Date) {
  return normilizeDate(date.getHours()) + "." + normilizeDate(date.getMinutes());
}

export default function HistoryTable() {
  const rows = GetHistory();
  return (
    <Card sx={{ padding: 5 }}>
      <CardHeader title={
        <Typography variant='h5' component="div">
          Статистика:
        </Typography>

      } />
      <Box sx={{
        maxWidth: 600, display: "flex", justifyContent: "space-between", flexWrap: "wrap"
      }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell>Игрок</TableCell>
                <TableCell align="right">Дата</TableCell>
                <TableCell align="right">Время</TableCell>
                <TableCell align="right">Результат</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {getDate(new Date(row.date))}
                  </TableCell>
                  <TableCell align="right">
                    {getTime(new Date(row.date))}
                  </TableCell>
                  <TableCell align="right">
                    {row.result}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}>
          <Button component={Link} to="/">Назад</Button>
        </Box>
      </Box>
    </Card>
  )
}

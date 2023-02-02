import React from 'react';
import { Link } from 'react-router-dom';

import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  Card, CardHeader, Typography, Box, Button
} from '@mui/material';

import { getHistory } from '../../utils/history';
import { getTime, getDate } from '../../utils/datetime';


export default function HistoryTable() {
  const rows = getHistory();
  return (
    <Card sx={{ padding: 5, maxHeight: window.innerHeight * 0.85 }}>
      <CardHeader title={
        <Typography variant='h5' component="div">
          Статистика:
        </Typography>

      } />
      <Box sx={{
        maxWidth: 600, display: "flex", justifyContent: "space-between", flexWrap: "wrap"
      }}>
        <TableContainer component={Paper} sx={{ maxHeight: window.innerHeight * 0.7, overflowY: "scroll" }}>
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

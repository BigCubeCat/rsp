import React, { useState } from 'react';
import {
  Table, Checkbox, Box, Typography, TableBody, Button,
  TableCell, TableContainer, TableHead, Paper, TableRow
} from '@mui/material';

import { allObjects, customRules, Rules } from '../Game/rules';
import GameButton from '../Game/GameButton';
import { elementKeys, elementIndexes } from '../Game/GameElements';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectRules, setRules } from '../../features/user/userSlice';

const graph: boolean[][] = allObjects.map((obj) => {
  let row: boolean[] = [];
  for (let i = 0; i < allObjects.length; ++i) {
    row.push(false);
  }
  // Перебор всех побежденных
  for (let bitten of customRules[obj]) {
    row[elementIndexes[bitten]] = true;
  }
  return row;
})


export default function RulesTable() {
  const dispatch = useAppDispatch();
  const rules = useAppSelector(selectRules);

  // TODO: graph from rules
  const [userTable, setUserTable] = useState(graph);

  let objectsIcons = allObjects.map(obj =>
    <TableCell align="center">
      <GameButton
        img={elementKeys[obj].img}
        color={elementKeys[obj].color}
        func={() => { }}
        size={32}
      />
    </TableCell>
  )

  const handleChange = (row: number, column: number) => {
    let newUserTable = userTable.map(arr => arr.slice())
    newUserTable[row][column] = !userTable[row][column];
    newUserTable[column][row] = userTable[row][column];
    setUserTable(newUserTable);
  }

  const saveSettings = () => {
    let rules: Rules = {};
    for (let i = 0; i < allObjects.length; ++i) {
      rules[allObjects[i]] = [];
      for (let j = 0; j < allObjects.length; ++j) {
        if (userTable[i][j]) {
          rules[allObjects[i]].push(allObjects[j]);
        }
      }
    }
    dispatch(setRules(rules));
  }
  return (
    <Box>
      <Typography sx={{ margin: 1 }} component="div">В ряду отмечается кого, побъет предмет</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {objectsIcons}
            </TableRow>
          </TableHead>
          <TableBody>
            {objectsIcons.map((icon, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {icon}
                </TableCell>
                {
                  objectsIcons.map((_, i) => (index === i) ? <TableCell></TableCell>
                    : <TableCell>
                      <Checkbox
                        checked={userTable[index][i]}
                        color="secondary"
                        onChange={() => handleChange(index, i)}
                      />
                    </TableCell>)
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: 'flex-end', }}>
        <Button
          sx={{ marginTop: 3 }}
          onClick={() => saveSettings()}
        >Сохранить</Button>
      </Box>
    </Box>
  );
}


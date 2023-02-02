import React, { useState } from 'react';
import {
  Table, Checkbox, Box, Typography, TableBody, Button,
  TableCell, TableContainer, TableHead, Paper, TableRow
} from '@mui/material';

import Saved from '../modals/Saved';
import GameButton from '../Game/GameButton';
import { ALL_OBJECTS, TRules } from '../../utils/rules';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { elementKeys, elementIndexes } from '../Game/GameElements';
import { selectRules, setRules } from '../../features/user/userSlice';

export default function RulesTable() {
  const dispatch = useAppDispatch();
  const currentRules = useAppSelector(selectRules);
  const [savedIsOpen, setSavedIsOpen] = useState(false);

  const graph: boolean[][] = ALL_OBJECTS.map((obj) => {
    let row: boolean[] = [];
    for (let i = 0; i < ALL_OBJECTS.length; ++i) {
      row.push(false);
    }
    // Перебор всех побежденных
    for (let bitten of currentRules[obj]) {
      row[elementIndexes[bitten]] = true;
    }
    return row;
  })

  const [userTable, setUserTable] = useState(graph);

  let objectsIcons = ALL_OBJECTS.map(obj =>
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
    let rules: TRules = {};
    for (let i = 0; i < ALL_OBJECTS.length; ++i) {
      rules[ALL_OBJECTS[i]] = [];
      for (let j = 0; j < ALL_OBJECTS.length; ++j) {
        if (userTable[i][j]) {
          rules[ALL_OBJECTS[i]].push(ALL_OBJECTS[j]);
        }
      }
    }
    dispatch(setRules(rules));
    setSavedIsOpen(true);
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
                        color="default"
                        checked={userTable[index][i]}
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
      <Saved handleClose={() => setSavedIsOpen(false)} isOpen={savedIsOpen} />
    </Box>
  );
}


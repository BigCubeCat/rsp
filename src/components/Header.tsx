import React from 'react';
import {
  Box, Typography, InputBase
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { elements } from './Game/GameElements';
import GameButton from './Game/GameButton';

const StyledInput = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const element = elements[Math.floor(Math.random() * elements.length)];
  return (
    <>
      <Box sx={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        zIndex: -1,
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#a9cc8a" fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,74.7C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </Box>
      <Box sx={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        display: 'flex'
      }}>
        <GameButton 
        func={() => { }} 
        color={element.color} 
        img={element.img} 
        size={50}
        />
        {// <Typography variant='h5' component="div" color="#ffffff">
          //   {props.title}
          // </Typography>
        }
        <StyledInput>
          <StyledInputBase placeholder="Имя игрока" />
        </StyledInput>
      </Box>
    </>
  )
}

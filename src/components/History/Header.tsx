import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box, Typography
} from "@mui/material";
import { elements } from '../Game/GameElements';
import GameButton from '../Game/GameButton';
import StyledInput from './StyledInput';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const element = elements[Math.floor(Math.random() * elements.length)];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src="/img/lizzard.png" width={48} height={48} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <StyledInput />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
// {     <GameButton
    //    func={() => { }}
    //    color={element.color}
    //    img={element.img}
    //    size={50}
    //  />
    //   {props.title}
    // </Typography>

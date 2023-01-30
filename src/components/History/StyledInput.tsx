import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser, setName } from '../../features/user/userSlice';


const StyledInput = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
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

export default function Input() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(user.name === "guest" ? "" : user.name);
  return (
    <StyledInput>
      <StyledInputBase
        placeholder="Имя игрока"
        value={value}
        onChange={e => {
          setValue(e.target.value)
          dispatch(setName(e.target.value))
        }}
      />
    </StyledInput>
  )

}

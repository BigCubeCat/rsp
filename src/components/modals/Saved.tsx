import * as React from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { style } from "./style";

export default function Clean(props: { handleClose: Function, isOpen: boolean }) {
  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Сохранено
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Вы можете продолжить редактирование или испытать свою
          удачу в борьбе с Искуственным интеллектом!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: 'space-between', marginTop: 4 }}>
          <Button
            onClick={() => props.handleClose()}
            color="secondary"
            variant="contained"
          >Продолжить</Button>
          <Button
            color="primary" variant="contained"
            component={Link} to="/game/custom"
          >
            Играть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

import * as React from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
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
          Готово
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          История очищена. Сыграйте еще раз, чтобы заполнить историю
        </Typography>
        <Box sx={{ display: "flex", justifyContent: 'flex-end', marginTop: 4 }}>
          <Button
            onClick={() => props.handleClose()}
            color="secondary"
            variant="contained"
          >Закрыть</Button>
        </Box>
      </Box>
    </Modal>
  );
}

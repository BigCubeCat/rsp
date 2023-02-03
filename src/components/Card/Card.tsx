import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  img: string;
  rulesLink: string;
  gameLink: string;
}

export default function CustomCard(props: CardProps) {
  return (
    <Card sx={{
      maxWidth: 345,
      minHeight: 300, margin: 5,
      transition: "2s",
      '&:hover': {
        position: "relative",
        top: "-15px",
      },
    }}>
      <CardContent sx={{
        minHeight: "100%",
      }}>
        <Typography variant="h5" component="div" textAlign="center">
          {props.title}
        </Typography>
        <img src={props.img} width="180" height="180" style={{ marginTop: 10 }} />
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          minHeight: 150,
          marginTop: 5,
          justifyContent: 'space-around',
        }}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={props.gameLink}
            sx={{ borderRadius: 100, fontWeight: "bold" }}
          >Играть</Button>
          <Button
            variant="contained"
            component={Link}
            to={props.rulesLink}
            sx={{ borderRadius: 100, fontWeight: "bold" }}
          >Правила</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { Ocean } from './Frame';
import Drawer from './Drawer';


const GridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: none;
  z-index: 0;
`

const DrawerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 96vh; 
  width: 360px;
  backdrop-filter: blur(50px);
  color: white;

  h1 {
    width: 100%;
    margin-left: -20%;
  }

  ul {
    width: 100%;
    text-align: left;
  }

  button {
    background: none;
    color: white;
    margin-left: 70px;
  }
`

const WorksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 120px;
  
  button {
    border: none;
    cursor: pointer;
    background: none;
    padding: 10px;
    border-radius: 10px;
    width: 95%;
    height: 20px;
    margin-top: 0%;
    font-size: 25px;
    color: white;
  }
` 


export default function ButtonAppBar() {
  return (
    <Box>
      <Typography variant="h6" component="div" align="center" >
        <h1>Alice Meowz Portfolio</h1>
        <Drawer />
      </Typography>
    </Box>
  );
}

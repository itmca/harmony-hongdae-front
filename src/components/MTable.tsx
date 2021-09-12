import React, { useEffect, useState } from 'react';
import { makeStyles,createTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
 
const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });

function MTable(props: any)  {
  const url = "http://localhost:5000/basic";
  //const [url, setUrl] = useState(props.menuUrl);
  //const menu = ['dessert', 'west', 'southEastAsia', 'japanese', 'maxican', 'chinese'];
  const classes = useStyles();
  const [rows, setRows] = useState(new Array<{
    id:number;
    name:string;
    category:string;
    location:string;
  }>());
  useEffect(()=>{
      axios.get(props.menuUrl==null?url:props.menuUrl)
      .then(function (response) {
       setRows(response.data)
      })
      .catch(function (error) {
      console.error(error);
      });
  },[]);
    return(
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="10%"></TableCell>
            <TableCell align="left" width="30%">이름</TableCell>
            <TableCell align="left" width="40%">위치&nbsp;</TableCell>
            <TableCell align="right" width="10%">카테고리&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" width="10%">
                {row.id}
              </TableCell>
              <TableCell align="left" width="30%">{row.name}</TableCell>
              <TableCell align="left" width="40%">{row.location}</TableCell>
              <TableCell align="right" width="10%">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
export default MTable;
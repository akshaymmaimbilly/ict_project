import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from "@mui/icons-material/Close";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  place: string,
  age: number,
  language: string,
  phone: number
) {
  return { name, place, age, language, phone };
}

const rows = [
  createData('Dan Brown', 'New Hampshire', 70, 'English', 4545657665),
  createData('Dan Brown', 'New Hampshire', 70, 'English', 4545657665),
  createData('Dan Brown', 'New Hampshire', 70, 'English', 4545657665),
  createData('Dan Brown', 'New Hampshire', 70, 'English', 4545657665),
  createData('Dan Brown', 'New Hampshire', 70, 'English', 4545657665),
];

const Author = ({ onRowClick }) => {
  const handleRowClick = (rowData) => {
    onRowClick(rowData); // Pass the row data to the parent component
  };

  return (
    <div style={{ padding: '50px' }}>
        <div style={{textAlign:'right'}}>

        <CloseIcon style={{fontSize:'40px',textAlign: "right"}} />
        </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Author Name</StyledTableCell>
              <StyledTableCell align="right">Place</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Language</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.place}</StyledTableCell>
                <StyledTableCell align="right">{row.age}</StyledTableCell>
                <StyledTableCell align="right">{row.language}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Author;

import React, { useEffect, useState } from 'react';
import { getLeaderBoard } from '../services/UserService';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../css/leaderboard.css';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LeaderBoard() {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    fetchLeaderBoardData();
  }, []);

  const fetchLeaderBoardData = async () => {
    try {
      const response = await getLeaderBoard();
      setLeaderBoardData(response.data.userFootPrintList);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <TableContainer component={Paper} className='leaderboard'>
      <Table sx={{ minWidth: 700, minHeight: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Placement</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            {/* <StyledTableCell align="right">Rank</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderBoardData.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.fullName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.footPrint} ton</StyledTableCell>
              {/* <StyledTableCell align="right">{row.rank}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

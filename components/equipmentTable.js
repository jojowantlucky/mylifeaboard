import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LatestNews from '../components/Common/LatestNews';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rowData = [
  {
    rowId: '01',
    make: 'make 1',
    model: 'model 1',
    price: '$100.00',
    purchaseDate: 'September 18, 2022',
    category: 'category1',
  },
  {
    rowId: '02',
    make: 'make 2',
    model: 'model 2',
    price: '$200.00',
    purchaseDate: 'September 2, 2022',
    category: 'category2',
  },
  {
    rowId: '03',
    make: 'make 3',
    model: 'model 3',
    price: '$300.00',
    purchaseDate: 'September 18, 2022',
    category: 'category3',
  },
  {
    rowId: '04',
    make: 'make 4',
    model: 'model 4',
    price: '$400.00',
    purchaseDate: 'September 4, 2022',
    category: 'category4',
  },
  {
    rowId: '05',
    make: 'make 5',
    model: 'model 5',
    price: '$500.00',
    purchaseDate: 'September 5, 2022',
    category: 'category5',
  },
  {
    rowId: '06',
    make: 'make 6',
    model: 'model 6',
    price: '$600.00',
    purchaseDate: 'September 6, 2022',
    category: 'category6',
  },
  {
    rowId: '07',
    make: 'make 7',
    model: 'model 7',
    price: '$700.00',
    purchaseDate: 'September 7, 2022',
    category: 'category7',
  },
  {
    rowId: '08',
    make: 'make 8',
    model: 'model 8',
    price: '$800.00',
    purchaseDate: 'September 8, 2022',
    category: 'category8',
  },
];



const EquipmentTable = () => {
  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align='right'>Make</TableCell>
              <TableCell align='right'>Model</TableCell>
              <TableCell align='right'>
                Purchase Price
              </TableCell>
              <TableCell align='right'>
                Purchase Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row, index) => (
              <TableRow
                key={`${row.model}-${index}`}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}>
                <TableCell component='th' scope='row'>
                  {row.category}
                </TableCell>
                <TableCell align='right'>
                  {row.make}
                </TableCell>
                <TableCell align='right'>
                  {row.model}
                </TableCell>
                <TableCell align='right'>
                  {row.price}
                </TableCell>
                <TableCell align='right'>
                  {row.purchaseDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EquipmentTable;

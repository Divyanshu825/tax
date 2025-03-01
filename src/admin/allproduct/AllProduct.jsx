// src/components/ExampleComponent.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { firdb } from '../../../firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment/moment';
import './AllProduct.css'


const AllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firdb, "product"));
      const items = querySnapshot.docs.map(doc => doc.data());
      setData(items);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);



  return (
    <div className='allproduct_container'>
      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="Product_head">
            <h1>All Products</h1>
            <h2>Admin-Pennal / All Products</h2>
          </div>
        </div>
      </div>
      <div className='alllproduct_data'>
        <TableContainer component={Paper} sx={{
        
        }}>
          <Table sx={{ minWidth: 1280 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{}}>
                <TableCell>ProductName</TableCell>
                <TableCell align="center">Message</TableCell>
                <TableCell align="center">Created Date</TableCell>
                {/* <TableCell align="center">State</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.ContactDetails}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{moment(row.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllProduct;

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
import './ContactDetails.css'

const ContactDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firdb, "users"));
            const items = querySnapshot.docs.map(doc => doc.data());
            setData(items);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log("data", data);
    return (
        <div className='admin_contact'>
            <div className="Overlay_Pages">
                <div className="Overlay_Pages">
                    <div className="Product_head">
                        <h1>Contact Details</h1>
                        <h2>Admin-Pennal / Contact Details</h2>
                    </div>
                </div>
            </div>
            <div className='admin_contact_table'>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1280 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 20, fontWeight: 600 }}>FirstName</TableCell>
                                {/* <TableCell sx={{ fontSize: 20, fontWeight: 600 }} >LastName</TableCell> */}
                                <TableCell sx={{ fontSize: 20, fontWeight: 600 }}>Mobile</TableCell>
                                <TableCell sx={{ fontSize: 20, fontWeight: 600 }}>Email</TableCell>
                                <TableCell sx={{ fontSize: 20, fontWeight: 600 }}>City</TableCell>
                                <TableCell sx={{ fontSize: 20, fontWeight: 600 }}>State</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.ContactDetails}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ fontSize: 20, fontWeight: 500 }}>{row.name}</TableCell>
                                    <TableCell sx={{ fontSize: 20, fontWeight: 500 }}>{row.mobileno}</TableCell>
                                    <TableCell sx={{ fontSize: 20, fontWeight: 500 }}>{row.email}</TableCell>
                                    <TableCell sx={{ fontSize: 20, fontWeight: 500 }}>{row.city}</TableCell>
                                    <TableCell sx={{ fontSize: 20, fontWeight: 500 }}>{row.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ContactDetails;

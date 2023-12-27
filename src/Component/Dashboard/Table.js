import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import styles from '../../Styles/dashboard.module.css'
import { userColumns, rows } from '../../TableSource';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import axios from 'axios'
const TableOfDash = () => {
    const [seed, setSeed] = useState(1);
    const [searchQuery, setSearchQuery] = useState('booked');
    const [filteredData, setFilteredData] = useState([]);
    const [ship, setShip] = useState([]);
    const [err, setErr] = useState('');
    const { token } = useSelector((state) => state.user);


    useEffect(() => {
        axios
            .get(`https://server.trauxit.app/api/v1/loads/shipper/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setShip(response.data.data.loads);
            })
            .catch((err) => {
                setErr(err.response.data.message);
            });
    }, []);
    useEffect(() => {
        const filtered = ship.filter((item) => item?.status === searchQuery);
        setFilteredData(filtered);
    }, [ship, searchQuery]);

    const reset = () => {
        setSeed(Math.random());
    }
    useEffect(() => {
        reset()
    }, [])
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {

                return (
                    <div className="cellAction">
                        <Link to='' style={{ textDecoration: "none" }}>
                            <div className={`${styles.edit__btn}`}><EditNoteIcon /></div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <section className={`${styles.tablebooked}`}>
                <Box>
                    <DataGrid
                        getRowId={rows => rows._id}
                        className={`${styles.table}`}
                        rows={filteredData}
                        columns={userColumns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 7,
                                },
                            },
                        }}
                        pageSizeOptions={[7]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </section>
        </>
    )
}

export default TableOfDash

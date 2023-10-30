import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import styles from '../../Styles/dashboard.module.css'
import { userColumns, rows } from '../../TableSource';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import Box from '@mui/material/Box';
const TableOfDash = () => {
    const [seed, setSeed] = useState(1);
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
            <section  >
                <Box>
                    <DataGrid
                        key={rows.map(id => id.id)}
                        className={`${styles.table}`}
                        rows={rows}
                        columns={userColumns.concat(actionColumn)}
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

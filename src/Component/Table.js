import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import styles from '../Styles/dashboard.module.css'
import { userColumns, rows } from '../TableSource';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
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

                <DataGrid
                    key={rows.map(id => id.id)}
                    className={`${styles.table}`}
                    rows={rows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                />
            </section>
        </>
    )
}

export default TableOfDash

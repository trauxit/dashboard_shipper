import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, rows } from '../../TableExpenses';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import styles from '../../Styles/expenses.module.css'

const TableExpenses = () => {
    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }
    useEffect(() => {
        reset()
    }, [])
    return (
        <>
            <section  >

                <DataGrid
                    key={rows.map(id => id.id)}
                    className={`${styles.table}`}
                    rows={rows}
                    columns={userColumns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                />
            </section>

        </>
    )
}

export default TableExpenses

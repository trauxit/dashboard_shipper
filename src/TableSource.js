import ProgressBar from 'react-bootstrap/ProgressBar';
import control from './assets/images/control 1.png'
import styles from './Styles/dashboard.module.css'
export const userColumns = [
    { field: "client", headerName: "client", width: 200 },
    {
        field: "Typeofgoods",
        headerName: <div className={`${styles.types__img}`}><img alt='' src={control} /> Type of goods</div>,
        width: 190,
    },
    {
        field: "route",
        headerName: "Route",
        width: 190,
    },

    {
        field: "status",
        headerName: <div className={`${styles.types__img}`}><img alt='' src={control} /> Status</div>,
        width: 190,
        renderCell: (params) => {

            return (

                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },

];

export const rows = [
    { id: 1, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Snow', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 2, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 60 },
    { id: 3, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 100 },
    { id: 4, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Stark', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 5, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Targaryen', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 6, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 100 },
    { id: 7, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 60 },
    { id: 8, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Stark', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 9, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Targaryen', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 10, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 100 },
    { id: 11, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 60 },
    { id: 12, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 60 },
    { id: 13, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Stark', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 14, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Targaryen', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 30 },
    { id: 15, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 100 },
    { id: 16, client: 'Basmala ayman', Typeofgoods: '20 palletes', route: '12-453', lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'Paied', prog: 60 },
];
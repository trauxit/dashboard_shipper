import ProgressBar from 'react-bootstrap/ProgressBar';
export const userColumns = [
    { field: "id", headerName: "ID", width: 80 },
    {
        field: "firstName",
        headerName: "Weight",
        width: 120,
    },
    {
        field: "age",
        headerName: "Date",
        width: 140,
    },

    {
        field: "status",
        headerName: "Status",
        width: 200,
        renderCell: (params) => {

            return (

                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                    <ProgressBar className={`prog ${params.row.status}  `}
                        min={0}
                        max={100} now={params.row.prog} />
                </div>
            );
        },
    },

];

export const rows = [
    { id: 1, lastName: 'Snow', firstName: '210 kg', age: '26 Sep 2023', status: 'proccesing', prog: 30 },
    { id: 2, lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'on the way', prog: 60 },
    { id: 3, lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'completed', prog: 100 },
    { id: 4, lastName: 'Stark', firstName: '210 kg', age: '26 Sep 2023', status: 'proccesing', prog: 30 },
    { id: 5, lastName: 'Targaryen', firstName: '210 kg', age: '26 Sep 2023', status: 'proccesing', prog: 30 },
    { id: 6, lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'completed', prog: 100 },
    { id: 7, lastName: 'Lannister', firstName: '210 kg', age: '26 Sep 2023', status: 'on the way', prog: 60 },

];
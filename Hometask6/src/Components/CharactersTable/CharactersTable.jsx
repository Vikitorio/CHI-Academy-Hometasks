import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider.jsx';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    },

];

const CharactersTable = ({ onPaginationUpdate, data, rowsCount, onRowClick }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <DataGrid
            autoPageSize={true}
            pagination columns={columns} rows={data}
            onRowClick={onRowClick}
            paginationMode="server"
            rowCount={rowsCount}
            onPaginationModelChange={onPaginationUpdate}
            theme="primary"
            sx={{
                '& .MuiDataGrid-mainContent,& .MuiDataGrid-row,  & .MuiDataGrid-columnHeader':
                 { backgroundColor: theme == "light" ? 'inherit' : '#34495e'},
                '& .MuiDataGrid-row:hover': { backgroundColor: theme == "light" ? '#bdc3c7' : "#2c3e50" },
                

            }}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 20, page: 0
                    },
                },
            }}
        />
    );
}

export default CharactersTable;
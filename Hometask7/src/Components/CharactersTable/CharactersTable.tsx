import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import CharacterRow from '../../CustomTypes/CharacterRow';
const columns: GridColDef<CharacterRow>[] = [
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
interface PaginationData {
    page: number;
    pageSize: number;
}
interface CharacterTableProps {
    onPaginationUpdate: (data: PaginationData) => (void);
    data: Array<CharacterRow>;
    rowsCount: number;
    onRowClick: (id: string) => void;
}

const CharactersTable: React.FC<CharacterTableProps> = ({ onPaginationUpdate, data, rowsCount, onRowClick }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <DataGrid
            autoPageSize={true}
            pagination columns={columns} rows={data}
            onRowClick={(data) => onRowClick(String(data.id))}
            paginationMode="server"
            rowCount={rowsCount}
            onPaginationModelChange={onPaginationUpdate}
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
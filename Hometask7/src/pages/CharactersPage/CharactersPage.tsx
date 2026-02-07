import { useContext, useEffect, useState } from "react";
import CharactersTable from "../../Components/CharactersTable/CharactersTable";
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { ThemeContext } from "../../Providers/ThemeProvider/ThemeProvider";
import { useRequest } from "ahooks";
import getCharactersList from "../../Api/getCharactersList";
const CharactersPage = () => {
    const [paginationInfo, setPaginationInfo] = useState({ page: 1, pageSize: 0 });
    const { theme } = useContext(ThemeContext);
    const { data: charactersData, refresh } = useRequest(() => getCharactersList(paginationInfo.page))
    let navigate = useNavigate();

    useEffect(() => {
        refresh();
    }, [paginationInfo])

    const rowsCount = charactersData?.info?.count ?? 0;
    const paginationUpdate = (data: { page: number, pageSize: number }) => {
        setPaginationInfo({ page: data.page, pageSize: data.pageSize });
    }
    const onRowClick = (id: string) => {
        navigate(`${id}`);
    }
    return (
        <div className="characters-container">
            <div className="table-wrapper" >
                <CharactersTable
                    onPaginationUpdate={paginationUpdate}
                    data={charactersData?.results || []}
                    rowsCount={rowsCount}
                    onRowClick={onRowClick}
                />
            </div>
            <div className="character-details-wrapper" style={{ backgroundColor: theme == "light" ? "#e8f5e9" : "#34495e" }}>
                <Outlet />
            </div>

        </div>);
}


export default CharactersPage;
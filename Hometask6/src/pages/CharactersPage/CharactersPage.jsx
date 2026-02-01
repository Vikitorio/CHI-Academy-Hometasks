import { useContext, useEffect, useState } from "react";
import CharactersTable from "../../Components/CharactersTable/CharactersTable.jsx";
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { ThemeContext } from "../../Providers/ThemeProvider/ThemeProvider.jsx";
const CharactersPage = () => {
    const [paginationInfo, setPaginationInfo] = useState({ page: 1, pageSize: 0 });
    const [rowsCount, setRowsCount] = useState(1);
    const [charactersList, setCharactersList] = useState();
    const {theme} = useContext(ThemeContext);
    let navigate = useNavigate();
    useEffect(() => {
        const fetchCharacters = async () => {
            const responce = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginationInfo.page}`);
            if (!responce.ok) {
                throw new Error("Failed to fetch");
            }
            const parsedData = await responce.json();
            setCharactersList(parsedData.results);
            setRowsCount(parsedData.info.count);
        }
        fetchCharacters();
    }, [paginationInfo])

    const paginationUpdate = (data) => {
        setPaginationInfo({ page: data.page, pageSize: data.pageSize });
    }
    const onRowClick = (data) => {
        console.log(data);
        navigate(`${data.id}`);
    }
    return (
        <div className="characters-container">
            <div className="table-wrapper" >
                <CharactersTable
                    onPaginationUpdate={paginationUpdate}
                    data={charactersList}
                    rowsCount={rowsCount}
                    onRowClick={onRowClick}
                />
            </div>
            <div className="character-details-wrapper" style={{backgroundColor:theme == "light" ? "#e8f5e9" : "#34495e"}}>
                <Outlet />
            </div>

        </div>);
}


export default CharactersPage;
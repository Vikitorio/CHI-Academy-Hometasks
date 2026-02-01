import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Typography from '@mui/material/Typography';
import "./style.css";
const CharacterInfo = () => {
    let { id } = useParams();
    const [charData, setCharData] = useState({});
    useEffect(() => {
        const fetchCharInfo = async () => {
            const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const parsed = await result.json();
            setCharData(parsed);
        }
        fetchCharInfo();
    }, [id])
    return (<div className="char_info__card">{charData && (
        <>
            <img src={charData.image} alt="" />
            <Typography variant="h6">{charData.name}</Typography>
            <Typography variant="body1">Gender: {charData.gender}</Typography>
            <Typography variant="body1">Status: {charData.status}</Typography>
        </>
    )}</div>);
}

export default CharacterInfo;
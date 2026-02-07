import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Typography from '@mui/material/Typography';
import "./style.css";
import { useRequest } from "ahooks";
import getCharacterInfo from "../../Api/getCharacterInfo";
const CharacterInfo = () => {
    let { id } = useParams();
    const { data: charData, refresh } = useRequest(() => getCharacterInfo(id));
    useEffect(() => {
        refresh();
    }, [id])
    return (
        <div className="char_info__card">{charData && (
            <>
                <img src={charData.image} alt="" />
                <Typography variant="h6">{charData.name}</Typography>
                <Typography variant="body1">Gender: {charData.gender}</Typography>
                <Typography variant="body1">Status: {charData.status}</Typography>
            </>
        )}</div>);
}

export default CharacterInfo;
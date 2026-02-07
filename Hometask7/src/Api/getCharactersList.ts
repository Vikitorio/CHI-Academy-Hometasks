import CharacterRow from "../CustomTypes/CharacterRow";


const getCharactersList = async (page: number): Promise<{ results: Array<CharacterRow>, info: { count: number } }> => {
    const responce = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return responce.json()
}

export default getCharactersList;
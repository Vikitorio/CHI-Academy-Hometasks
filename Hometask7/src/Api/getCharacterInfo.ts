interface CharacterInfo {
    name: string;
    status: string;
    gender: string;
    image: string;
}


const getCharacterInfo = async (id: string): Promise<CharacterInfo> => {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await result.json();
}

export default getCharacterInfo;
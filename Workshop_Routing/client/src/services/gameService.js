const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (gameData) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'                                                // we're creating the game on the server here
        },
        body: JSON.stringify(gameData) // we should return the data in a string format          and the server returns our game
    });

    const result = await response.json(); // and then return it again as a Javascript object
    return result;
}
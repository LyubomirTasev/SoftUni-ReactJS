const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    try { // always wrap async/await requests in a try/catch block
        const response = await fetch(baseUrl);
        const result = await response.json(); 

        const data = Object.values(result); // get all the values from the server's data
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
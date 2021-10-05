import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID JZ9kgWjkjngrPad0pTca6GdoFbaLp5nw5UOlqh48e-o" 
    }
});


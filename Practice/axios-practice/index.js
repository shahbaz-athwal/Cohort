const axios = require("axios")

const main = async () => {
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos)
}

const post = async () => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username: "shahbaz@gmail.com",
            password: "shahbaz",
            firstName: "Shahbaz",
            lastName: "Singh"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.message);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
};

post()
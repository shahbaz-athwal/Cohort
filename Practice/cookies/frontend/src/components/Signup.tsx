import { useState } from "react"
const BACKEND_URL = "http://localhost:3000";
import axios from "axios"

export const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <input onChange={(e) => {
            setUsername(e.target.value);
        }} type="text" placeholder="username" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} type="password" placeholder="password" />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/signup`, {
                username,
                password
            });
            alert("you are signed up")
        }}>Submit</button>
    </div>
}
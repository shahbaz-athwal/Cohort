import { useEffect, useState } from "react"
import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setBalance(response.data.balance)
        })
    }),[]

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}
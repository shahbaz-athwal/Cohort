import { useNavigate } from "react-router-dom"

export function Navbar() {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/dashboard")
    }
    return<>
    <div style={{background: "rgb(144, 164, 174)" }}>This is my react navbar</div>
    <button onClick={handleClick}>Dashboard</button>
    <button onClick={()=>{
        navigate("/landing")
    }}>Landing</button>
    </>

}
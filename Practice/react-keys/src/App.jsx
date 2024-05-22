import {useState} from "react"

function App() {
return <>
<CardWrapper></CardWrapper>
</>

}

function CardWrapper({children}) {
    return <div style={{border: "2px solid black", padding:"20px"}}>
        {children}
    </div>
}



export default App
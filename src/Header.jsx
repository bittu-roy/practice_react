import { useState } from "react";

const Header= (props)=>{
    const [name, setName]= useState("Roy");
      return <div className="Header">
        <h1>Hello, {name} from {props.country}</h1>
        <button onClick={()=>{
            setName("Rajarshee")
        }}>Change Name</button>
      </div> 
}

export default Header;
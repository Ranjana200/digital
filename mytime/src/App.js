import React,{useState} from "react";
import './style.css';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000)
  return(
    <>
    <h1 className="clock"> {ctime} </h1>
    
    </>
  )

}
export default App;
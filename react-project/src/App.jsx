import {useEffect, useReducer} from"react";
import './App.css'
import chef from "./images/chef.jpg"

function Header({name, year}){
  return (
    <header>
      <h1>{name}'s kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items  = [
  "Macaroni and Cheese",
  "Salmon and potatos",
  "Tofu with Nuts",
];

const dishObjects =items.map((dish,i) => ({
  id: i,
  title:dish
}))

function Main({dishes,openStatus,onStatus}){
  return (
    <>
    <div>
      <button onClick={()=> onStatus(true)}>I want to be open</button>
      <h2>Welcome to this restrurant {openStatus ? "Open" :"Closed"}</h2>
    </div>
    <main>
      <img src={chef} height={200} alt="chef image"/>
    <ul>
      {dishes.map((dish) => (
      
      <li key={dish.id} style={{ listStyleType: "none"}}>{dish.title}</li>
      
      ))}
    </ul>
    </main>
    </>
  )
}

function App() {
  //const [status,setStatus] =useState(true);
  const [status,toggle]=  useReducer(
    (status) => !status,
    true
  );

  useEffect(()=>{
    console.log( `The resurant is ${status ?"open" :"closed"} `);
  },[status]);

  return (
    <div>
      <h1>The restrurant is currently {status ? "open": "closed"}.</h1>
      <button onClick={toggle}>
        {status ? "Close" :"Open"} Restraunt</button>
    <Header name="Alex" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects} openStatus={status} onStatus={toggle}/>
    </div>
  );
}

export default App

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Test from './Test';

function App() {
  const [user,setUser]= useState([]);
  const[loading,setLoading]=useState(true);
  // old method
 
  //useEffect(() =>{
  // const getUsers = () => {
  //    fetch("https://jsonplaceholder.typicode.com/users")
  //    .then((res) => res.json())
  //    .then((data) => setUser(data))
  //    .catch((err) => console.log(err))
  //  };
  //  getUsers();
  //  setLoading(false);
  //  console.log(user);
 // },[]);
 useEffect(()=> {
  const fetchUsers = async()=>{
    try{
      const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
      setUser(data)

    } 
    catch(error){
      console.log(error);
    }
  };
  fetchUsers();
  setLoading(false);
 }
 )
  return (
    <div className="App">
      { loading ?
      <h1>Loading...</h1> :
      user.map(el=>
        
        <div  style={{border:"1px solid pink"}}>

        <h3 className='h3_app' style={{color:"blue"}}>{el.name}</h3>
        <email  className='email_app'>{el.email}</email>
        <center>
        <p className='p_app'>{el.address.street}</p>
        </center>
        </div>
        )
      } 
    </div>
    
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import { CardComponent} from "./Components/CardComponent";
import { NavbarComponent } from './Components/NavbarComponent';

function App() {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://dummyjson.com/";
  async function fetchData() {
    const response = await fetch(BASE_URL +"users");
    const data = await response.json();
    console.log(data.users);
    setUsers(data.users);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
   
      <div>
        <NavbarComponent/>
      </div>
      <div className='flex flex-wrap justify-center gap-7'>
      {users.map((user) => (
            <div key={user?.id}>
              <CardComponent profile={user.image} lastname={user.lastName}/>
            </div>

          ))}{" "} 
          </div>
    </>
  );
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { CardComponent} from "./Components/CardComponent";

function App() {
  const [users, setUser] = useState([]);
  const BASE_URL = "https://dummyjson.com/users";
  async function fetchData() {
    const response = await fetchData(BASE_URL +"user");
    const data = await response.json();
    console.log(data.users);
    setUsers(data.users);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      <div className='flex flex-wrap justify-center gap-5'>
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

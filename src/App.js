import './App.css';
import contacts from "./contacts.json";
import {useState} from "react";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0,5);

function App() {
  const [agenda, setAgenda]= useState(initAgenda);

  const addContact = ()=>{
  const randomIndex = Math.floor(Math.random()* remainingContacts.length)
  const randomContact = remainingContacts.splice(randomIndex,1);
  setAgenda(agenda.concat(randomContact));
  // setAgenda([...agenda,randomContact[0]])
  }

  const sortByName = ()=> {
    const sortedAgenda = agenda.sort((a,b)=>a.name>b.name ? 1: -1)
    setAgenda([...sortedAgenda])
  }

  const sortByPopularity = ()=>{
    const sortedPopularity = agenda.sort((a,b)=>a.popularity>b.popularity ? 1: -1)
    setAgenda([...sortedPopularity])
  }

  const deleteContact = (contactId) => {
    const filteredContact = agenda.filter(contact => 
      {
        return contact.id !== contactId
      })
      setAgenda([...filteredContact])
  }


  return (
    <>
    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Contact</button>
    <button onClick={sortByName}>Sort By name</button>
    <button onClick={sortByPopularity}>Sort By popularity</button>
    
    <div className="App">
      <table>
        <thread>
        <tr>
           <th>Picture</th>
            <th>Name</th>
           <th>Population</th>
           <th>Oscar Winner</th>
           <th>emmy Winner</th>
        </tr>
        </thread>
      </table>
      <tbody>
        {agenda.map(contact=>{
          return(
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} width="110px" height="170px"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
      
    </div>
    </>
  );
}

export default App;

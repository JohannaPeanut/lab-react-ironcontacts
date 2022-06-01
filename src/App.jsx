import { useState } from "react";
import "./App.css";
import data from "./contacts.json";

function App() {
  const FiveContacts = data.slice(0,5)
  // console.log(data.length, FiveContacts.length)
  const [contacts, setContacts] = useState(FiveContacts);

  const handleContactAddition = () => {
    const remainingContacts = data.slice(contacts.length) // <-- Why does this array include elements that are already in contacts?
    // console.log(remainingContacts.length, contacts.length)
    const randomIndex = Math.floor(Math.random() * (remainingContacts.length));
    const newContactArray = [...contacts, remainingContacts[randomIndex]]
    setContacts(newContactArray)
  }

  const handleSortPopularity = () => {
    const newArray = [...contacts]
    setContacts(newArray.sort((a,b) => b.popularity - a.popularity ))
  }

  const handleSortName = () => {
    const newArray = [...contacts]
    setContacts(newArray.sort((a,b) => a.name.localeCompare(b.name) ))
  }

  const handleContactRemoval = (id) => {
    const newArray = contacts.filter((contact) => contact.id !== id)
    setContacts(newArray)
  }

  return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={handleContactAddition}>Add random Contact</button>
    <button onClick={handleSortName}>Sort by Name</button>
    <button onClick={handleSortPopularity}>Sort by Popularity</button>
    <table>
    <th>Picture</th><th>Name</th><th>Popularity</th><th>Won an Oscar?</th><th>Won an Emmy?</th>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td><img className="contact-pic" src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆 </td> : <td> </td>}
              {contact.wonEmmy ? <td>🏆</td> : <td> </td>}
              <td><button onClick={() => handleContactRemoval(contact.id)}>Delete</button></td>
          </tr>
          
          );
        })}
      </table>
      

  </div>;
}
export default App;

import { useState } from "react";
import "./App.css";
import data from "./contacts.json";

function App() {
  const FiveContacts = data.slice(0,5)
  console.log(data)
  const [contacts, setContacts] = useState(FiveContacts);

  const handleContactAddition = () => {
    const remainingContacts = data.slice(contacts.length)
    const randomIndex = Math.floor(Math.random() * (remainingContacts.length));
    const newContactArray = [...contacts, remainingContacts[randomIndex]]
    setContacts(newContactArray)
  }

  return <div className="App">
    <h1>IronContacts</h1>
    <table>
    <th>Picture</th><th>Name</th><th>Popularity</th><th>Won an Oscar?</th><th>Won an Emmy?</th>
        {contacts.map((contact) => {
          return (
            <tr key={contact.name}>
              <td><img className="contact-pic" src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar && <td>'🏆' </td>}
              {contact.wonEmmy && <td>'🏆'</td>}
          </tr>
          
          );
        })}
      </table>
      <button onClick={handleContactAddition}>Add random Contact</button>

  </div>;
}
export default App;

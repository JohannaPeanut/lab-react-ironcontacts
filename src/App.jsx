import { useState } from "react";
import "./App.css";
import data from "./contacts.json";

function App() {
  const FiveContacts = data.slice(0,5)
  console.log(FiveContacts)
  const [contacts, setContacts] = useState(FiveContacts);

  return <div className="App">
    <table>
    <th>Picture</th><th>Name</th><th>Popularity</th>
        {contacts.map((contact) => {
          return (
            <tr key={contact.name}>
              <td><img className="contact-pic" src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
          </tr>
          );
        })}
        
        
      </table>

  {/* <table>
    <th>Picture</th>
    <th></th>
  </table> */}

  </div>;
}
export default App;

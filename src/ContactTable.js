import {useContext} from 'react';
import ContactRow from './ContactRow.js';
import {ContactContext} from './ContactContext.js';


/**
 * Table de contact
 * @param {contact} contact
 * @return {jsx}
 */
function ContactTable() {
  const {contact} = useContext(ContactContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((elt, index) => (
          <ContactRow
            key={index}
            name={elt.name}
            phone={elt.phone}
            email={elt.email}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;

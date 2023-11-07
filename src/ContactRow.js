import {useContext} from 'react';
import {ContactContext} from './ContactContext.js';


/**
 * Table de contact
 * @param {objet} props
 * @return {jsx}
 */
function ContactRow({name, phone, email}) {
  const {setContact} = useContext(ContactContext);
  /**
 * gestionnaire d'évènement de suppression de contact
 */
  function handleClickDelete() {
    setContact((prev) => prev.filter((elt) => elt.name !== name));
  }

  return (
    <tr>
      <th>{name}</th>
      <th>{phone}</th>
      <th>{email}</th>
      <th><button type="button" onClick={handleClickDelete}>X</button></th>
    </tr>
  );
}

export default ContactRow;

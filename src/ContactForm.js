import {useContext, useState} from 'react';
import {ContactContext} from './ContactContext.js';

/**
 * Composant ContactForm
 * @return {jsx} Formulaire d'ajout de contact
 */
function ContactForm() {
  const {setContact} = useContext(ContactContext);

  const [data, setData] = useState(
      {name: ''},
      {email: ''},
      {phone: ''}
  );

  /**
   * @param {Event} évènement onchange.
   */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }

  /**
   * gestionnaire d'évènement submit du formulaire
   * @param {Event} event onSubmit
   */
  function handleSubmit(event) {
    event.preventDefault();
    setContact((prev)=>[...prev, data]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleChange(e.target)}
      />

      <input type="phone"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange(e.target)}
      />

      <input type="email"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e.target)}
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default ContactForm;

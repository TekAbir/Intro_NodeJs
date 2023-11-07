import {useContext, useState} from 'react';
import {data} from './data.js';
import {ContactContext} from './ContactContext.js';

/**
 * Composant de bar de recherche.
 * @return {jsx}
 */
function SearchBar() {
  const [input, setInput] = useState();
  const {setContact} = useContext(ContactContext);

  /**
   * Gestionnaire d'evennement
   * @param {Event} e
   */
  function handleChange(e) {
    setInput(e.target.value);
  }

  /**
   * Gestionnaire d'évènement de click sur le bouton filtrer
   * Filtre la liste de contact.
   * Envoie la valeur filtrer dans le state
   */
  function handleClickFilter() {
    const filteredList = data.filter((elt) => elt.name.includes(input));
    setContact(filteredList);
  }

  return (
    <form>
      <input type="test" value={input} placeholder="search..." onChange={handleChange}/>
      <button type="button" onClick={handleClickFilter}>Filtrer</button>
    </form>
  );
}

export default SearchBar;

import {createContext, useState} from 'react';
import {data} from './data.js';

export const ContactContext = createContext();

/**
 * ContactContextProvider
 * @param {jsx} children JSX enfant du provider
 * @return {jsx}
 */
function ContactContextProvider({children}) {
  const [contact, setContact] = useState(data);
  return (
    <ContactContext.Provider value={{contact, setContact}}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;

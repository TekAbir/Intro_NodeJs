import ContactTable from './ContactTable.js';
import SearchBar from './SearchBar.js';
import ContactForm from './ContactForm.js';
import ContactContextProvider from './ContactContext.js';


/**
 * Compossant racine
 * @return {jsx}
 */
function App() {
  return (
    <>
      <h1>Filterable React List</h1>
      <ContactContextProvider>
        <SearchBar/>
        <ContactTable/>
        <ContactForm/>
      </ContactContextProvider>
    </>
  );
}

export default App;

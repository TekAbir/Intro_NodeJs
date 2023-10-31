import ContactTable from './ContactTable';
import SearchBar from './SearchBar';

/**
 * Compossant racine
 * @return {jsx}
 */
function App() {
  return (
    <>
      <h1>Filterable React List</h1>
      <SearchBar />
      <ContactTable />
    </>
  );
}

export default App;

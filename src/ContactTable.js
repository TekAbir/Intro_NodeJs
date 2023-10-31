import ContactRow from './ContactRow';

/**
 * Table de contact
 * @return {jsx}
 */
function ContactTable() {
  const data = [
    {
      name: 'Tom Jackson',
      phone: '555-444-3333',
      email: 'tom@gmail.com',
    },
    {
      name: 'Such Wow',
      phone: '555-444-1234',
      email: 'wow@gmail.com',
    },
  ];

  const jsxData = data.map((elt) => (
    <ContactRow
      name={elt.name}
      phone={elt.phone}
      email={elt.email}
    />
  ));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>email</th>
      </tr>
      {jsxData}
    </table>
  );
}

export default ContactTable;

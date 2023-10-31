/**
 * Table de contact
 * @param {objet} props
 * @return {jsx}
 */
function ContactRow({name, phone, email}) {
  return (
    <tr>
      <th>{name}</th>
      <th>{phone}</th>
      <th>{email}</th>
    </tr>
  );
}

export default ContactRow;

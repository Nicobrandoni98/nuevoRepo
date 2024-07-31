const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <ol>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          <p>
            {person.name} | number: {person.number}
            <button onClick={() => deletePerson(person.id)}>Borrar</button>
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Persons;

/* import Course from "./Course"; parte a*/
import { useState, useEffect } from "react";
import Filter from "./Filter.js"
import PersonForm from "./PersonForm.js"
import Persons from "./Persons.js" 
import axios from 'axios'


const App = () => {
  /* const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return <Course courses={courses} /> */



  // --------------------------------------------------------------------- PARTE B

  const [persons, setPersons] = useState([]); 
  const hook = () => {
    axios
      .get("http://localhost:3002/persons")
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook,[])

  const [newName, setNewName] = useState("");

  const [newNumber, setNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personCheck = persons.some((person) => person.name === newName);

    if (personCheck) {
      alert(`${newName} ya ha sido ingresado!`);
    } else {
      const personsObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber,
      };
      axios
        .post("http://localhost:3002/persons", personsObject)
        .then (response => {
          setPersons(persons.concat(response.data));
          setNumber("");
          setNewName("");
        })

    }
  };

  const deletePerson = (id) => {
    axios
      .delete(`http://localhost:3002/persons/${id}`)
      .then(response => {
        console.log('Persona borrada:', response.data);
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        console.error('Error deleting persona:', error);
      });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons =  persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  );




  // --------------------------------------------------------------------- PARTE C



};

export default App;

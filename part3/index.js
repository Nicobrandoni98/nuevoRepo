const express = require("express");
const app = express();

app.use(express.json());

const cors = require('cors');


const morgan = require("morgan");
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

morgan.token('body', (request) => {
  return request.body ? JSON.stringify(request.body) : '-'
})

const customFormat = ':method :url :status :response-time ms - :res[content-length] - Body: :body'

app.use(morgan(customFormat))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/info", (request, response) => {
  const info = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date().toISOString()}</p>
  `;
  response.send(info);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const {name, number} = request.body;

  if (!name || !number)
    return response
      .status(400)
      .json({ error: "El nombre y el numero son requeridos" });

  const nameExists = persons.some((person) => person.name === name);
  if (nameExists)
    return response.status(400).json({ error: "el nombre debe ser unico" });

  const ids = persons.map((person) => person.id);
  const maxId = Math.max(...ids);

  const newPerson = {
    id: maxId + 1,
    name: name,
    number: number
  };

  persons = [...persons, newPerson];

  response.json(newPerson);
});




const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

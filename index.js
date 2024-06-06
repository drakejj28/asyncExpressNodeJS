const express = require('express');
const app = express();

// reads data from POST requests
app.use(express.json());

// variable for the mock database
let mockDatabase = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com"
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob.brown@example.com"
    },
    {
      "id": 5,
      "name": "Charlie White",
      "email": "charlie.white@example.com"
    },
    {
      "id": 6,
      "name": "David Green",
      "email": "david.green@example.com"
    },
    {
      "id": 7,
      "name": "Emily Black",
      "email": "emily.black@example.com"
    },
    {
      "id": 8,
      "name": "Frank Red",
      "email": "frank.red@example.com"
    },
    {
      "id": 9,
      "name": "Grace Blue",
      "email": "grace.blue@example.com"
    },
    {
      "id": 10,
      "name": "Hannah Yellow",
      "email": "hannah.yellow@example.com"
    }
  ];  

// GET endpoint to get all data
app.get('/api/data', (req, res) => {
  // uses setTimeout to simulate a delay
  setTimeout(() => {
    res.send(mockDatabase);
  }, 1000);
});

// POST endpoint to add new data
app.post('/api/data', (req, res) => {
  // creates a new object with an ID and the data sent in the request
  const newEntry = {
    id: mockDatabase.length + 1,
    data: req.body.data
  };
  mockDatabase.push(newEntry);
  // sends back the new entry as confirmation
  res.send(newEntry);
});

// PUT endpoint to update data by ID
app.put('/api/data/:id', (req, res) => {
  // finds the index of the data with the given ID
  const index = mockDatabase.findIndex(entry => entry.id == req.params.id);
  if (index >= 0) {
    // updates the data when found
    mockDatabase[index].data = req.body.data;
    res.send(mockDatabase[index]);
  } else {
    // sends a 404 error if nothing is found
    res.status(404).send('Data not found');
  }
});

// DELETE endpoint to delete data by ID
app.delete('/api/data/:id', (req, res) => {
  // finds the index of the data with the given ID
  const index = mockDatabase.findIndex(entry => entry.id == req.params.id);
  if (index >= 0) {
    // if it is found we remove it from the database
    mockDatabase.splice(index, 1);
    // sends back a 204 status code to say it was successful
    res.status(204).send();
  } else {
    // sends a 404 error if nothing is found
    res.status(404).send('Data not found');
  }
});

// sets the port for the server
const PORT = 3000;
// sets the server and logs a message to the console
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
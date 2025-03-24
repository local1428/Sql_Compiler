const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));  // Serve static files like HTML and CSS

// MSSQL Database configuration
const config = {
  user: 'SA',
  password: 'Sql@112233',
  server: 'localhost',
  database: 'SSJ',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Test connection to the database
sql.connect(config).then(() => {
  console.log('Connected to the MSSQL database');
}).catch((err) => {
  console.error('Error connecting to the database:', err);
  process.exit(1);
});

// Endpoint to run SQL queries
app.post('/run-sql', async (req, res) => {
  const query = req.body.query;

  console.log("Received query:", query); // Log the query to ensure it's correct

  try {
    const result = await sql.query(query);
    console.log("SQL Result:", result.recordset); // Log the data to ensure it contains the expected results
    res.json({ data: result.recordset });
  } catch (err) {
    console.error("SQL Error:", err); // Log the error if it occurs
    res.status(400).json({ error: err.message });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Simple Express server for the Fintech Multiverse API
// This is just for demonstration purposes in the prototype

const express = require('express');
const cors = require('cors');
const personaRoutes = require('./api/persona');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/persona', personaRoutes.handlePersonaSelection);
app.get('/api/personas', personaRoutes.getPersonas);
app.get('/api/persona/:id', personaRoutes.getPersonaById);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  - POST /api/persona');
  console.log('  - GET /api/personas');
  console.log('  - GET /api/persona/:id');
  console.log('  - GET /health');
}); 
# Backend API Routes

This folder contains the API routes for the Fintech Multiverse prototype.

## Files

- `api/persona.js` - API handlers for persona-related operations

## API Endpoints

### Persona Selection

- **POST** `/api/persona` - Save a user's persona selection
  - Request body: `{ userId: string, persona: string }`
  - Response: `{ success: boolean, message: string, data: { userId, persona } }`

### Persona Retrieval

- **GET** `/api/personas` - Get all available personas

  - Response: `{ success: boolean, data: Persona[] }`

- **GET** `/api/persona/:id` - Get a specific persona by ID
  - Response: `{ success: boolean, data: Persona }`

## Implementation

For this prototype, the API routes are mocked and don't require a real server. In a production environment, these would be implemented as Next.js API routes or as a separate Express.js server.

## Integration with Frontend

The frontend makes API calls to these endpoints to:

1. Retrieve the list of available personas
2. Save a user's persona selection
3. Retrieve a specific persona's details

// API route handler for persona selection
// This is a mock implementation for the prototype

const mockSupabase = require('../../Database/mockDb');

// Handler for persona selection
async function handlePersonaSelection(req, res) {
  try {
    const { userId, persona } = req.body;

    if (!userId || !persona) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: userId and persona'
      });
    }

    // Save the persona selection to the mock database
    const result = await mockSupabase.saveUserPersona(userId, persona);

    if (result.error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to save persona selection',
        error: result.error
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Persona selected successfully',
      data: { userId, persona }
    });
  } catch (error) {
    console.error('Error in persona selection:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}

// Handler for getting all personas
async function getPersonas(req, res) {
  try {
    const result = await mockSupabase.getPersonas();

    if (result.error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch personas',
        error: result.error
      });
    }

    return res.status(200).json({
      success: true,
      data: result.data
    });
  } catch (error) {
    console.error('Error fetching personas:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}

// Handler for getting a specific persona
async function getPersonaById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Missing persona ID'
      });
    }

    const result = await mockSupabase.getPersonaById(id);

    if (result.error) {
      return res.status(404).json({
        success: false,
        message: 'Persona not found',
        error: result.error
      });
    }

    return res.status(200).json({
      success: true,
      data: result.data
    });
  } catch (error) {
    console.error('Error fetching persona:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}

module.exports = {
  handlePersonaSelection,
  getPersonas,
  getPersonaById
}; 
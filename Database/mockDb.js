// Mock database implementation to simulate Supabase

const mockData = {
  users: [],
  personas: [
    {
      id: 'innovator',
      name: 'Innovator',
      description: 'Always looking for the next big thing in tech and finance. You\'re drawn to emerging markets, disruptive technologies, and cutting-edge investment opportunities.',
      icon: '🚀',
      color_gradient: 'from-blue-500 to-cyan-500',
      traits: ['Forward-thinking', 'Tech-savvy', 'Early adopter']
    },
    {
      id: 'traditionalist',
      name: 'Traditionalist',
      description: 'Prefer proven strategies and stable, long-term investments. You value consistency, reliability, and the wisdom of time-tested financial approaches.',
      icon: '🏛️',
      color_gradient: 'from-green-500 to-emerald-500',
      traits: ['Disciplined', 'Patient', 'Value-focused']
    },
    {
      id: 'adventurer',
      name: 'Adventurer',
      description: 'Thrive on risk and excitement in the market. You\'re willing to explore unconventional opportunities and aren\'t afraid to take calculated risks for potentially higher returns.',
      icon: '🏃',
      color_gradient: 'from-orange-500 to-red-500',
      traits: ['Risk-tolerant', 'Adaptable', 'Opportunity-seeker']
    },
    {
      id: 'athlete',
      name: 'Athlete',
      description: 'Disciplined, goal-oriented, and performance-driven. You approach investing like training—with dedication, measurable targets, and a competitive edge.',
      icon: '🏆',
      color_gradient: 'from-purple-500 to-indigo-500',
      traits: ['Goal-oriented', 'Competitive', 'Consistent']
    },
    {
      id: 'artist',
      name: 'Artist',
      description: 'Creative approach to investing with unique perspectives. You see patterns others miss and aren\'t afraid to build a portfolio that reflects your individual vision.',
      icon: '🎨',
      color_gradient: 'from-pink-500 to-rose-500',
      traits: ['Creative', 'Intuitive', 'Unique perspective']
    }
  ],
  userPersonas: []
};

// Mock Supabase client
const mockSupabase = {
  // Get all personas
  getPersonas: () => {
    return Promise.resolve({ data: mockData.personas, error: null });
  },
  
  // Get a specific persona by ID
  getPersonaById: (id) => {
    const persona = mockData.personas.find(p => p.id === id);
    return Promise.resolve({ data: persona, error: persona ? null : 'Persona not found' });
  },
  
  // Save a user's persona selection
  saveUserPersona: (userId, personaId) => {
    // Check if user exists, if not create a new one
    if (!mockData.users.find(u => u.id === userId)) {
      mockData.users.push({ id: userId, created_at: new Date() });
    }
    
    // Check if this selection already exists
    const existingSelection = mockData.userPersonas.find(
      up => up.user_id === userId && up.persona_id === personaId
    );
    
    if (!existingSelection) {
      mockData.userPersonas.push({
        id: `up-${Math.random().toString(36).substring(2, 9)}`,
        user_id: userId,
        persona_id: personaId,
        selected_at: new Date()
      });
    }
    
    return Promise.resolve({ data: { success: true }, error: null });
  },
  
  // Get a user's selected persona
  getUserPersona: (userId) => {
    const userPersona = mockData.userPersonas.find(up => up.user_id === userId);
    if (!userPersona) {
      return Promise.resolve({ data: null, error: 'No persona selected' });
    }
    
    const persona = mockData.personas.find(p => p.id === userPersona.persona_id);
    return Promise.resolve({ data: persona, error: null });
  }
};

module.exports = mockSupabase; 
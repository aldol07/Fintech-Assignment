-- Mock Supabase PostgreSQL schema for Fintech Multiverse

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Personas table
CREATE TABLE personas (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NOT NULL,
  color_gradient VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User personas (for tracking which persona a user has selected)
CREATE TABLE user_personas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  persona_id VARCHAR(50) REFERENCES personas(id) ON DELETE CASCADE,
  selected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, persona_id)
);

-- Insert the 5 personas
INSERT INTO personas (id, name, description, icon, color_gradient) VALUES
  ('innovator', 'Innovator', 'Always looking for the next big thing in tech and finance. You''re drawn to emerging markets, disruptive technologies, and cutting-edge investment opportunities.', '🚀', 'from-blue-500 to-cyan-500'),
  ('traditionalist', 'Traditionalist', 'Prefer proven strategies and stable, long-term investments. You value consistency, reliability, and the wisdom of time-tested financial approaches.', '🏛️', 'from-green-500 to-emerald-500'),
  ('adventurer', 'Adventurer', 'Thrive on risk and excitement in the market. You''re willing to explore unconventional opportunities and aren''t afraid to take calculated risks for potentially higher returns.', '🏃', 'from-orange-500 to-red-500'),
  ('athlete', 'Athlete', 'Disciplined, goal-oriented, and performance-driven. You approach investing like training—with dedication, measurable targets, and a competitive edge.', '🏆', 'from-purple-500 to-indigo-500'),
  ('artist', 'Artist', 'Creative approach to investing with unique perspectives. You see patterns others miss and aren''t afraid to build a portfolio that reflects your individual vision.', '🎨', 'from-pink-500 to-rose-500'); 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User profile types
export interface UserProfile {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string;
  investment_style: string;
  risk_tolerance: 'low' | 'medium' | 'high';
  created_at: string;
}

// Investment types
export interface Investment {
  id: string;
  user_id: string;
  symbol: string;
  name: string;
  amount: number;
  purchase_price: number;
  purchase_date: string;
  created_at: string;
}

// Financial goal types
export interface FinancialGoal {
  id: string;
  user_id: string;
  title: string;
  target_amount: number;
  current_amount: number;
  target_date: string;
  created_at: string;
}

// Functions to interact with Supabase
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data as UserProfile;
}

export async function getUserInvestments(userId: string) {
  const { data, error } = await supabase
    .from('investments')
    .select('*')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data as Investment[];
}

export async function getUserGoals(userId: string) {
  const { data, error } = await supabase
    .from('goals')
    .select('*')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data as FinancialGoal[];
} 
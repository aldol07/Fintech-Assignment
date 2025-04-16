# Database Mock Setup

This folder contains mock database implementations for the Fintech Multiverse prototype.

## Files

- `schema.sql` - SQL schema for the Supabase PostgreSQL database
- `mockDb.js` - JavaScript implementation of a mock Supabase client

## Purpose

Since this is a prototype, we're using a mock database setup instead of a real Supabase connection. This allows the application to function without requiring an actual database connection.

## Database Schema

The mock database includes the following tables:

1. **users** - Stores user information
2. **personas** - Contains the 5 investor personas
3. **user_personas** - Tracks which persona each user has selected

## How to Use

In a real implementation, you would:

1. Set up a Supabase project
2. Run the `schema.sql` script to create the tables
3. Connect to Supabase using their client library

For this prototype, the `mockDb.js` file provides a simulated Supabase client that can be used in the application.

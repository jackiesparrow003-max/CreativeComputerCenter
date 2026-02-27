/*
  # Create courses table for Creative Computer Center

  1. New Tables
    - `courses`
      - `id` (uuid, primary key) - Unique identifier for each course
      - `title` (text) - Course title
      - `description` (text) - Detailed course description
      - `icon` (text) - Icon name for the course
      - `duration` (text) - Course duration
      - `level` (text) - Difficulty level (Beginner, Intermediate, Advanced)
      - `features` (jsonb) - Array of course features/highlights
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `courses` table
    - Add policy for public read access (courses are publicly viewable)
*/

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL DEFAULT 'BookOpen',
  duration text NOT NULL,
  level text NOT NULL DEFAULT 'Beginner',
  features jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO anon
  USING (true);
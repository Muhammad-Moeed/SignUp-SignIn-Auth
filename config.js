const { createClient } = supabase

const supabaseUrl = 'https://dslcynkpnycmfypxaits.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzbGN5bmtwbnljbWZ5cHhhaXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MjEwNzQsImV4cCI6MjA1MjE5NzA3NH0.28Dl7FBA71fEH0iclFbsqiGoneJn0Frn8OPSF8VIsw8'
const supabaseClient = createClient(supabaseUrl, supabaseKey)
window.supabase = supabaseClient

// console.log(supabaseClient)
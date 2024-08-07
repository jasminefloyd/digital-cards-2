import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lonounkcszeeyjfooglj.supabase.co';
const supabaseKey = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvbm91bmtjc3plZXlqZm9vZ2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNzExMjMsImV4cCI6MjAzODY0NzEyM30.9J7pCWXZ2rDtsi-b4swyD1lDfAHUp5GrKxDGmy9x7a4';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase }

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Real-time subscription helper
export const subscribeToTable = (tableName, callback) => {
  const channelName =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? `public:${tableName}:${crypto.randomUUID()}`
      : `public:${tableName}:${Date.now()}:${Math.random()}`;

  const channel = supabase
    .channel(channelName)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: tableName,
      },
      (payload) => {
        callback(payload);
      }
    )
    .subscribe();

  return {
    unsubscribe: () => {
      supabase.removeChannel(channel);
    },
  };
};

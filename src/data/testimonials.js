import { supabase, subscribeToTable } from "../lib/supabase";

let testimonials = [
  {
    name: "Amelia Ross",
    title: "CMO, Eira Skincare",
    quote:
      "Skyfill translated our vision into a premium launch that felt effortless. Demand exceeded forecasts within weeks.",
  },
];

// Fetch testimonials data from Supabase
export const fetchTestimonialsData = async () => {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    if (data && data.length > 0) {
      testimonials = data.map((item) => ({
        name: item.name,
        title: item.title,
        quote: item.quote,
      }));
    }
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
  }
  return testimonials;
};

// Subscribe to real-time updates
export const subscribeToTestimonialsUpdates = (callback) => {
  return subscribeToTable("testimonials", (payload) => {
    callback(payload);
    fetchTestimonialsData().then(callback);
  });
};

export { testimonials };

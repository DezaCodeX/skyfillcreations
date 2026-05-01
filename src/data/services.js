import { supabase, subscribeToTable } from "../lib/supabase";

let services = [
  {
    title: "Branding",
    description:
      "Positioning, naming, and identity systems that communicate prestige with clarity.",
    focus: "Identity, tone, governance",
  },
];

// Fetch services data from Supabase
export const fetchServicesData = async () => {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    if (data && data.length > 0) {
      services = data.map((item) => ({
        title: item.title,
        description: item.description,
        focus: item.focus,
      }));
    }
  } catch (error) {
    console.error("Error fetching services data:", error);
  }
  return services;
};

// Subscribe to real-time updates
export const subscribeToServicesUpdates = (callback) => {
  return subscribeToTable("services", (payload) => {
    callback(payload);
    fetchServicesData().then(callback);
  });
};

export { services };

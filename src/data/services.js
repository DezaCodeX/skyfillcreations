import { subscribeToTable, supabase } from "../lib/supabase";

let services = [
  {
    id: 1,
    title: "Branding",
    description:
      "Positioning, naming, and identity systems that communicate prestige with clarity.",
    focus: "Identity, tone, governance",
  },
  {
    id: 2,
    title: "Photography",
    description:
      "Editorial photography and art direction for elevated product storytelling.",
    focus: "Studio, lifestyle, launch",
  },
  {
    id: 3,
    title: "Podcasts",
    description:
      "Premium podcast production that builds authority and lasting engagement.",
    focus: "Production, distribution",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Web, UI, and campaign design that feels effortless and performs across touchpoints.",
    focus: "Web, campaigns, assets",
  },
  {
    id: 5,
    title: "Business Analysis",
    description:
      "Market diagnostics and funnel audits that reveal high-leverage growth paths.",
    focus: "Insights, forecasting",
  },
  {
    id: 6,
    title: "Competitor Analysis",
    description:
      "Competitive intelligence that reveals whitespace and premium differentiation.",
    focus: "Category mapping",
  },
  {
    id: 7,
    title: "Marketing Packages",
    description:
      "Modular retainers that scale content, media, and optimization.",
    focus: "Launch + growth",
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

    if (Array.isArray(data) && data.length > 0) {
      services = data.map((item) => ({
        id: item.id,
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
  return subscribeToTable("services", () => {
    fetchServicesData().then(callback);
  });
};

export { services };

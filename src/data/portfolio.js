import { supabase, subscribeToTable } from "../lib/supabase";

let portfolioProjects = [
  {
    title: "Ad Shoot Preparation",
    category: "Ad Shoots",
    description:
      "Planning and setup for production-ready ad visuals with clear direction and brand consistency.",
    results: "Production workflow optimized",
    tags: ["Ad Shoots", "Pre-Production", "Direction"],
    accent: "from-sky-400/40 via-cyan-300/10 to-transparent",
    image:
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
];

// Fetch portfolio data from Supabase
export const fetchPortfolioData = async () => {
  try {
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    if (data && data.length > 0) {
      portfolioProjects = data.map((item) => ({
        title: item.title,
        category: item.category,
        description: item.description,
        results: item.results,
        tags: item.tags || [],
        accent: item.accent,
        image: item.image,
        featured: item.featured || false,
      }));
    }
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
  return portfolioProjects;
};

// Subscribe to real-time updates
export const subscribeToPortfolioUpdates = (callback) => {
  return subscribeToTable("portfolio_projects", (payload) => {
    callback(payload);
    fetchPortfolioData().then(callback);
  });
};

export { portfolioProjects };

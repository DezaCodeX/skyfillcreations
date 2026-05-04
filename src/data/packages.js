import { subscribeToTable, supabase } from "../lib/supabase";

let packages = [
  {
    id: 1,
    name: "Signature Brand Build",
    description:
      "A focused identity package for businesses that need a sharper premium presence.",
    servicesOffered: ["Branding", "Design", "Brand Storytelling"],
  },
  {
    id: 2,
    name: "Content Engine Studio",
    description:
      "A production package for consistent social, campaign, and multimedia content.",
    servicesOffered: [
      "Photography",
      "Content Creation",
      "Video Editing",
      "Podcasts",
    ],
  },
  {
    id: 3,
    name: "Market Clarity Lab",
    description:
      "An analysis package for understanding performance, competitors, and growth gaps.",
    servicesOffered: [
      "Business Analysis",
      "Competitor Analysis",
      "Performance Tracking",
    ],
  },
  {
    id: 4,
    name: "Launch Growth System",
    description:
      "A complete execution package for brands preparing to launch, scale, or relaunch.",
    servicesOffered: [
      "Marketing Packages",
      "Ad Shoot Direction",
      "Campaign Content",
      "Design",
      "Growth Marketing",
    ],
  },
];

export const fetchPackagesData = async () => {
  try {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("id", { ascending: true });

    if (error) throw error;

    if (Array.isArray(data) && data.length > 0) {
      packages = data.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        servicesOffered: item.services_offered || [],
      }));
    }
  } catch (error) {
    console.error("Error fetching packages data:", error);
  }

  return packages;
};

export const subscribeToPackagesUpdates = (callback) => {
  return subscribeToTable("packages", () => {
    fetchPackagesData().then(callback);
  });
};

export { packages };

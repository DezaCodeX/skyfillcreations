import { supabase, subscribeToTable } from "../lib/supabase";

let services = [
  {
    title: "Branding",
    description:
      "Positioning, naming, and identity systems that communicate prestige with clarity.",
    focus: "Identity, tone, governance",
  },
  {
    title: "Photography",
    description:
      "Editorial photography and art direction for elevated product storytelling.",
    focus: "Studio, lifestyle, launch",
  },
  {
    title: "Podcasts",
    description:
      "Premium podcast production that builds authority and lasting engagement.",
    focus: "Production, distribution",
  },
  {
    title: "Design",
    description:
      "Web, UI, and campaign design that feels effortless and performs across touchpoints.",
    focus: "Web, campaigns, assets",
  },
  {
    title: "Business Analysis",
    description:
      "Market diagnostics and funnel audits that reveal high-leverage growth paths.",
    focus: "Insights, forecasting",
  },
  {
    title: "Competitor Analysis",
    description:
      "Competitive intelligence that reveals whitespace and premium differentiation.",
    focus: "Category mapping",
  },
  {
    title: "Marketing Packages",
    description:
      "Modular retainers that scale content, media, and optimization.",
    focus: "Launch + growth",
  },
  {
    title: "Content Creation",
    description:
      "We craft high-quality, engaging content that connects your brand with your audience. From social media posts to website copy, our content is designed to inform, inspire, and convert. We focus on storytelling, brand voice consistency, and audience-driven strategies to maximize impact.",
    focus:
      "Social Media Content, Website & Blog Writing, Brand Storytelling, Ad Copy & Campaign Content, SEO-Optimized Content",
  },
  {
    title: "Video Editing",
    description:
      "We transform raw footage into compelling visual stories that capture attention and drive engagement. Our video editing services ensure high-quality production with smooth transitions, professional effects, and a strong narrative flow tailored to your brand.",
    focus:
      "Promotional & Marketing Videos, Social Media Reels & Shorts, Corporate & Brand Videos, YouTube Video Editing",
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

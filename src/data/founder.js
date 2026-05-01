import { supabase, subscribeToTable } from "../lib/supabase";

let founderProfile = {
  name: "PG Gireesh",
  role: "Founder, Studio Skyfill Creations",
  about:
    "PG Gireesh the founder of Studio Skyfill Creations, focused on building premium brands with clarity and purpose. His work blends design, storytelling, and strategy to create impactful digital experiences.\n\nFrom branding and photography to business and competitor analysis, he helps businesses stand out, scale smarter, and communicate with confidence across every touchpoint.\n\nDriven by precision and creativity, his vision is to craft modern brands that feel effortless, perform consistently, and leave a lasting impression.",
  profileImage: "/Founder%20details/pg-gireesh.jpeg",
  profileImageFit: "contain",
  qualities: [
    "Creative Direction",
    "Brand Strategy",
    "Growth Marketing",
    "Client Partnership",
    "Production Excellence",
    "Execution Speed",
    "Data-Driven Decisions",
    "Team Leadership",
    "Long-Term Vision",
    "Detail Focus",
  ],
  workImages: [
    "/Founder%20details/work%20gallery%201.jpeg",
    "/Founder%20details/work%20galery%202.jpeg",
    "/Founder%20details/work%20gallery%203.png",
    "/Founder%20details/work%20gallery%204.png",
    "/Founder%20details/work%20gallery%205.png",
  ],
  contact: {
    phone: "+91 9345370090",
    phone2: "+91 95001 25369",
    email: "skyfillcreationspg@gmail.com",
    instagramId: "gireesh__pg",
  },
};

// Fetch founder data from Supabase
export const fetchFounderData = async () => {
  try {
    const { data, error } = await supabase
      .from("founder_profile")
      .select("*")
      .single();

    if (error) throw error;

    if (data) {
      founderProfile = {
        name: data.name,
        role: data.role,
        about: data.about,
        profileImage: data.profile_image,
        profileImageFit: data.profile_image_fit || "contain",
        qualities: data.qualities || [],
        workImages: data.work_images || [],
        contact: {
          phone: data.contact_phone,
          phone2: data.contact_phone2,
          email: data.contact_email,
          instagramId: data.contact_instagram_id,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching founder data:", error);
  }
  return founderProfile;
};

// Subscribe to real-time updates
export const subscribeToFounderUpdates = (callback) => {
  return subscribeToTable("founder_profile", (payload) => {
    if (payload.eventType === "UPDATE" && payload.new) {
      founderProfile = {
        name: payload.new.name,
        role: payload.new.role,
        about: payload.new.about,
        profileImage: payload.new.profile_image,
        profileImageFit: payload.new.profile_image_fit || "contain",
        qualities: payload.new.qualities || [],
        workImages: payload.new.work_images || [],
        contact: {
          phone: payload.new.contact_phone,
          phone2: payload.new.contact_phone2,
          email: payload.new.contact_email,
          instagramId: payload.new.contact_instagram_id,
        },
      };
      callback(founderProfile);
    }
  });
};

export { founderProfile };

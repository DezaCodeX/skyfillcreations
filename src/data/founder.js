import { subscribeToTable, supabase } from "../lib/supabase";

let founderProfile = {
  eyebrow: "Founder Profile",
  title: "About the Founder",
  subtitle:
    "Explore the vision behind Skyfill Creations-featuring the founder's journey, creative approach, signature work, and direct ways to collaborate.",
  badgeLabel: "Founder",
  name: "PG Gireesh",
  role: "Founder, Studio Skyfill Creations",
  about:
    "PG Gireesh the founder of Studio Skyfill Creations, focused on building premium brands with clarity and purpose. His work blends design, storytelling, and strategy to create impactful digital experiences.\n\nFrom branding and photography to business and competitor analysis, he helps businesses stand out, scale smarter, and communicate with confidence across every touchpoint.\n\nDriven by precision and creativity, his vision is to craft modern brands that feel effortless, perform consistently, and leave a lasting impression.",
  profileImage: "/Founder%20details/pg-gireesh.jpeg",
  profileImageFit: "contain",
  profileImageLabel: "Founder Image",
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
  qualitiesTitle: "Qualities of PG Gireesh",
  workImages: [
    "/Founder%20details/work%20gallery%201.jpeg",
    "/Founder%20details/work%20galery%202.jpeg",
    "/Founder%20details/work%20gallery%203.png",
    "/Founder%20details/work%20gallery%204.png",
    "/Founder%20details/work%20gallery%205.png",
  ],
  workImagesTitle: "Work Images",
  primaryCtaLabel: "Talk to Founder",
  primaryCtaPath: "/contact",
  secondaryCtaLabel: "View Services",
  secondaryCtaPath: "/services",
  contact: {
    phone: "+91 9345370090",
    phone2: "+91 95001 25369",
    email: "skyfillcreationspg@gmail.com",
    instagramId: "gireesh__pg",
    instagramUrl: "https://www.instagram.com/gireesh__pg?igsh=bnp1c25qbnhma2U4",
    mobileLabel: "Mobile",
    mailLabel: "Mail",
    instagramLabel: "Instagram",
  },
};

// Fetch founder data from Supabase
export const fetchFounderData = async () => {
  try {
    const { data, error } = await supabase
      .from("founder_profile")
      .select("*")
      .order("id", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    if (data) {
      founderProfile = {
        eyebrow: data.eyebrow || founderProfile.eyebrow,
        title: data.title || founderProfile.title,
        subtitle: data.subtitle || founderProfile.subtitle,
        badgeLabel: data.badge_label || founderProfile.badgeLabel,
        name: data.name || founderProfile.name,
        role: data.role || founderProfile.role,
        about: data.about || founderProfile.about,
        profileImage: data.profile_image || founderProfile.profileImage,
        profileImageFit: data.profile_image_fit || "contain",
        profileImageLabel:
          data.profile_image_label || founderProfile.profileImageLabel,
        qualities: data.qualities || founderProfile.qualities,
        qualitiesTitle:
          data.qualities_title || `Qualities of ${data.name || founderProfile.name}`,
        workImages: data.work_images || founderProfile.workImages,
        workImagesTitle: data.work_images_title || founderProfile.workImagesTitle,
        primaryCtaLabel:
          data.primary_cta_label || founderProfile.primaryCtaLabel,
        primaryCtaPath: data.primary_cta_path || founderProfile.primaryCtaPath,
        secondaryCtaLabel:
          data.secondary_cta_label || founderProfile.secondaryCtaLabel,
        secondaryCtaPath:
          data.secondary_cta_path || founderProfile.secondaryCtaPath,
        contact: {
          phone: data.contact_phone || founderProfile.contact.phone,
          phone2: data.contact_phone2 || founderProfile.contact.phone2,
          email: data.contact_email || founderProfile.contact.email,
          instagramId:
            data.contact_instagram_id || founderProfile.contact.instagramId,
          instagramUrl:
            data.contact_instagram_url || founderProfile.contact.instagramUrl,
          mobileLabel:
            data.contact_mobile_label || founderProfile.contact.mobileLabel,
          mailLabel: data.contact_mail_label || founderProfile.contact.mailLabel,
          instagramLabel:
            data.contact_instagram_label ||
            founderProfile.contact.instagramLabel,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching founder data:", error);
  }
  return founderProfile;
};

export const subscribeToFounderUpdates = (callback) => {
  return subscribeToTable("founder_profile", () => {
    fetchFounderData().then(callback);
  });
};

export { founderProfile };

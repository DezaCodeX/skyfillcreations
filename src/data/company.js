import { subscribeToTable, supabase } from "../lib/supabase";

let companyData = {
  name: "Studio Skyfill Creations",
  shortName: "Skyfill",
  email: "skyfillcreationspg@gmail.com",
  phone: "9345370090",
  phone2: "9500125369",
  instagramId: "skyfill_creations",
  instagramUrl:
    "https://www.instagram.com/skyfill_creations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  address:
    "VSK Nagar, Pannimadi Road, Near PV Mahal, Coimbatore, Thudiyalur 641017",
  logo: "/logo.jpeg",
  brand: {
    line1: "Studio",
    line2: "Skyfill Creations",
  },
};

// Fetch company data from Supabase
export const fetchCompanyData = async () => {
  try {
    const { data, error } = await supabase
      .from("company")
      .select("*")
      .single();

    if (error) throw error;

    if (data) {
      companyData = {
        name: data.name,
        shortName: data.short_name,
        email: data.email,
        phone: data.phone,
        phone2: data.phone2,
        instagramId: data.instagram_id,
        instagramUrl: data.instagram_url,
        address: data.address,
        logo: data.logo,
        brand: {
          line1: data.brand_line1,
          line2: data.brand_line2,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
  return companyData;
};

export const subscribeToCompanyUpdates = (callback) => {
  return subscribeToTable("company", () => {
    fetchCompanyData().then(callback);
  });
};

export const company = companyData;

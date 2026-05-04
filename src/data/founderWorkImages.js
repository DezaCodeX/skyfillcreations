import { subscribeToTable, supabase } from "../lib/supabase";

let founderWorkImages = [
  {
    id: 1,
    image: "/Founder%20details/work%20gallery%201.jpeg",
    alt: "Work sample 1",
  },
  {
    id: 2,
    image: "/Founder%20details/work%20galery%202.jpeg",
    alt: "Work sample 2",
  },
  {
    id: 3,
    image: "/Founder%20details/work%20gallery%203.png",
    alt: "Work sample 3",
  },
  {
    id: 4,
    image: "/Founder%20details/work%20gallery%204.png",
    alt: "Work sample 4",
  },
  {
    id: 5,
    image: "/Founder%20details/work%20gallery%205.png",
    alt: "Work sample 5",
  },
];

export const fetchFounderWorkImagesData = async () => {
  try {
    const { data, error } = await supabase
      .from("founder_work_images")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("id", { ascending: true });

    if (error) throw error;

    if (Array.isArray(data)) {
      founderWorkImages = data.map((item, index) => ({
        id: item.id,
        image: item.image_url,
        alt: item.alt_text || `Work sample ${index + 1}`,
      }));
    }
  } catch (error) {
    console.error("Error fetching founder work images:", error);
  }

  return founderWorkImages;
};

export const subscribeToFounderWorkImagesUpdates = (callback) => {
  return subscribeToTable("founder_work_images", () => {
    fetchFounderWorkImagesData().then(callback);
  });
};

export { founderWorkImages };

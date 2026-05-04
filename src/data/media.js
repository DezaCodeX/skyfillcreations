import { subscribeToTable, supabase } from "../lib/supabase";

let media = {
  backgroundVideos: [
    {
      label: "Ad Shoots",
      src: "/videos/shooting.mp4",
      poster:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
    },
  ],
  heroVideo: "/videos/podcast.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  testimonialImage:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
  contactImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
};

// Fetch media data from Supabase
export const fetchMediaData = async () => {
  try {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .single();

    if (error) throw error;

    if (data) {
      media = {
        backgroundVideos: data.background_videos || [],
        heroVideo: data.hero_video,
        heroPoster: data.hero_poster,
        aboutImage: data.about_image,
        testimonialImage: data.testimonial_image,
        contactImage: data.contact_image,
      };
    }
  } catch (error) {
    console.error("Error fetching media data:", error);
  }
  return media;
};

export const subscribeToMediaUpdates = (callback) => {
  return subscribeToTable("media", () => {
    fetchMediaData().then(callback);
  });
};

export { media };

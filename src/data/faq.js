import { subscribeToTable, supabase } from "../lib/supabase";

let faqItems = [
  {
    question: "What makes Skyfill different from a traditional agency?",
    answer:
      "We operate as a premium growth partner, combining brand strategy, creative production, and performance analytics in one studio. You get senior talent, not layers of account management.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most clients see a full brand and demand system live within 4 to 6 weeks, depending on scope and approvals.",
  },
  {
    question: "Do you work with global teams?",
    answer:
      "Yes. Our delivery model supports distributed stakeholders across North America, Europe, and Asia with weekly leadership reporting.",
  },
  {
    question: "What does a typical engagement include?",
    answer:
      "Every engagement includes strategy, creative direction, a content system, and performance optimization tailored to your goals.",
  },
];

// Fetch FAQ data from Supabase
export const fetchFaqData = async () => {
  try {
    const { data, error } = await supabase
      .from("faq_items")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    if (data && data.length > 0) {
      faqItems = data.map((item) => ({
        question: item.question,
        answer: item.answer,
      }));
    }
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
  }
  return faqItems;
};

export const subscribeToFaqUpdates = (callback) => {
  return subscribeToTable("faq_items", () => {
    fetchFaqData().then(callback);
  });
};

export { faqItems };

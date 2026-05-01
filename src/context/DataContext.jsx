import React, { createContext, useContext, useEffect, useState } from "react";
import { company as defaultCompany, fetchCompanyData, subscribeToCompanyUpdates } from "../data/company";
import { faqItems as defaultFaqItems, fetchFaqData, subscribeToFaqUpdates } from "../data/faq";
import { portfolioProjects as defaultPortfolio, fetchPortfolioData, subscribeToPortfolioUpdates } from "../data/portfolio";
import { services as defaultServices, fetchServicesData, subscribeToServicesUpdates } from "../data/services";
import { testimonials as defaultTestimonials, fetchTestimonialsData, subscribeToTestimonialsUpdates } from "../data/testimonials";
import { founderProfile as defaultFounder, fetchFounderData, subscribeToFounderUpdates } from "../data/founder";
import { media as defaultMedia, fetchMediaData, subscribeToMediaUpdates } from "../data/media";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [company, setCompany] = useState(defaultCompany);
  const [faqItems, setFaqItems] = useState(defaultFaqItems);
  const [portfolio, setPortfolio] = useState(defaultPortfolio);
  const [services, setServices] = useState(defaultServices);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [founder, setFounder] = useState(defaultFounder);
  const [media, setMedia] = useState(defaultMedia);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        // Fetch all data from Supabase
        const [companyData, faqData, portfolioData, servicesData, testimonialsData, founderData, mediaData] = 
          await Promise.all([
            fetchCompanyData(),
            fetchFaqData(),
            fetchPortfolioData(),
            fetchServicesData(),
            fetchTestimonialsData(),
            fetchFounderData(),
            fetchMediaData(),
          ]);

        setCompany(companyData);
        setFaqItems(faqData);
        setPortfolio(portfolioData);
        setServices(servicesData);
        setTestimonials(testimonialsData);
        setFounder(founderData);
        setMedia(mediaData);

        setLoading(false);
      } catch (error) {
        console.error("Error initializing data:", error);
        setLoading(false);
      }
    };

    initializeData();

    // Subscribe to real-time updates
    const subscriptions = [];

    subscriptions.push(
      subscribeToCompanyUpdates((data) => {
        setCompany(data);
      })
    );

    subscriptions.push(
      subscribeToFaqUpdates((data) => {
        setFaqItems(data);
      })
    );

    subscriptions.push(
      subscribeToPortfolioUpdates((data) => {
        setPortfolio(data);
      })
    );

    subscriptions.push(
      subscribeToServicesUpdates((data) => {
        setServices(data);
      })
    );

    subscriptions.push(
      subscribeToTestimonialsUpdates((data) => {
        setTestimonials(data);
      })
    );

    subscriptions.push(
      subscribeToFounderUpdates((data) => {
        setFounder(data);
      })
    );

    subscriptions.push(
      subscribeToMediaUpdates((data) => {
        setMedia(data);
      })
    );

    return () => {
      subscriptions.forEach((sub) => {
        if (sub) sub.unsubscribe();
      });
    };
  }, []);

  const value = {
    company,
    faqItems,
    portfolio,
    services,
    testimonials,
    founder,
    media,
    loading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

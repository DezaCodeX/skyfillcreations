import React, { createContext, useContext, useEffect, useState } from "react";
import { company as defaultCompany, fetchCompanyData, subscribeToCompanyUpdates } from "../data/company";
import { faqItems as defaultFaqItems, fetchFaqData, subscribeToFaqUpdates } from "../data/faq";
import { portfolioProjects as defaultPortfolio, fetchPortfolioData, subscribeToPortfolioUpdates } from "../data/portfolio";
import { services as defaultServices, fetchServicesData, subscribeToServicesUpdates } from "../data/services";
import { testimonials as defaultTestimonials, fetchTestimonialsData, subscribeToTestimonialsUpdates } from "../data/testimonials";
import { founderProfile as defaultFounder, fetchFounderData, subscribeToFounderUpdates } from "../data/founder";
import { founderWorkImages as defaultFounderWorkImages, fetchFounderWorkImagesData, subscribeToFounderWorkImagesUpdates } from "../data/founderWorkImages";
import { media as defaultMedia, fetchMediaData, subscribeToMediaUpdates } from "../data/media";
import { packages as defaultPackages, fetchPackagesData, subscribeToPackagesUpdates } from "../data/packages";

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
  const [founderWorkImages, setFounderWorkImages] = useState(defaultFounderWorkImages);
  const [media, setMedia] = useState(defaultMedia);
  const [packages, setPackages] = useState(defaultPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      const tasks = [
        fetchCompanyData().then(setCompany),
        fetchFaqData().then(setFaqItems),
        fetchPortfolioData().then(setPortfolio),
        fetchServicesData().then((data) => {
          if (Array.isArray(data)) {
            setServices(data);
          }
        }),
        fetchTestimonialsData().then(setTestimonials),
        fetchFounderData().then(setFounder),
        fetchFounderWorkImagesData().then((data) => {
          if (Array.isArray(data)) {
            setFounderWorkImages(data);
          }
        }),
        fetchMediaData().then(setMedia),
        fetchPackagesData().then((data) => {
          if (Array.isArray(data)) {
            setPackages(data);
          }
        }),
      ];

      const results = await Promise.allSettled(tasks);
      results.forEach((result) => {
        if (result.status === "rejected") {
          console.error("Error initializing data:", result.reason);
        }
      });
      setLoading(false);
    };

    initializeData();

    // Subscribe to real-time updates
    const subscriptions = [];

    try {
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
          if (Array.isArray(data)) {
            setServices(data);
          }
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
        subscribeToFounderWorkImagesUpdates((data) => {
          if (Array.isArray(data)) {
            setFounderWorkImages(data);
          }
        })
      );

      subscriptions.push(
        subscribeToMediaUpdates((data) => {
          setMedia(data);
        })
      );

      subscriptions.push(
        subscribeToPackagesUpdates((data) => {
          if (Array.isArray(data)) {
            setPackages(data);
          }
        })
      );
    } catch (error) {
      console.error("Error subscribing to realtime updates:", error);
    }

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
    founderWorkImages,
    media,
    packages,
    loading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

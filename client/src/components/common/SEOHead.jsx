import React, { useEffect } from 'react';

export const SEOHead = ({
  title,
  description = "We create digital experiences and technology solutions for businesses, while developing our own products and ventures for the future.",
  keywords,
  canonical,
}) => {
  useEffect(() => {
    // Set document title
    const fullTitle = title
      ? `${title} | Vanguard Digital`
      : "Vanguard Digital — Technology, Design & Digital Solutions for What's Next";
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OpenGraph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
  }, [title, description]);

  return null;
};

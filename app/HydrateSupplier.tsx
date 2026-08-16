"use client";

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import CountrySelector from './CountrySelector';

export default function HydrateSupplier() {
  useEffect(() => {
    // Wait for the dangerouslySetInnerHTML to mount the DOM
    const timer = setTimeout(() => {
      const container = document.getElementById('supplier');
      if (container && !container.hasAttribute('data-hydrated')) {
        container.setAttribute('data-hydrated', 'true');
        const root = createRoot(container);
        root.render(<CountrySelector />);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
}

// app/components/StripePricingTable.tsx
'use client';

import React, { useEffect } from 'react';

const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement('stripe-pricing-table', {
    'pricing-table-id': 'prctbl_1S6r3LF6XLY4flzw2vZp4OW6',
    'publishable-key': 'pk_live_WYJzenOkJZzqDr0BmsGnlddg',
  });
};

export default StripePricingTable;
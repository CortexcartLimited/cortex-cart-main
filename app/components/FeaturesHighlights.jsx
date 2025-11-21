import React from 'react';
import Image from 'next/image';

const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Feature 1: Unified Dashboard (Image Right) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              All your metrics. <br />
              <span className="text-blue-600">One Source of Truth.</span>
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Stop jumping between tabs. Connect Shopify, WooCommerce, Facebook Ads, and Google Analytics into a single, beautiful dashboard. See your net profit and marketing efficiency in real-time.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">Unified Sales & Marketing View</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">Real-time Profit Tracking</span>
              </div>
            </dl>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            {/* REPLACE THIS DIV WITH YOUR IMAGE */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 aspect-video flex items-center justify-center overflow-hidden p-4">
              <Image src="/images/screenshots/dashboard.png" alt="Unified Dashboard Screenshot" width={1000} height={600} className="rounded-lg object-cover" />
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 top-0 right-0 transform translate-x-1/2 -translate-y-1/2 lg:translate-x-1/3">
               <div className="w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            </div>
          </div>
        </div>

        {/* Feature 2: AI Analyst (Image Left) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mt-10 lg:mt-0 lg:order-1 relative">
             {/* REPLACE THIS DIV WITH YOUR IMAGE */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 aspect-video flex items-center justify-center overflow-hidden">
               <span className="text-gray-400 font-medium"><Image src="/images/screenshots/AI reccomendations.png" alt="AI Recommendations Screenshot"  width={1000} height={600} className="rounded-lg object-cover" /></span>
            </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 lg:-translate-x-1/3">
               <div className="w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            </div>
          </div>
          <div className="lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wide mb-4">
              AI Powered
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Your personal <br />
              <span className="text-purple-600">AI Data Analyst.</span>
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Cortex Cart doesn't just show you the chart; it reads it. Our AI analyzes your trends and gives you plain-English recommendations on how to improve conversions and fix leaks in your funnel.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">Automated Funnel Analysis</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">Copy & Content Improvements</span>
              </div>
            </dl>
          </div>
        </div>

        {/* Feature 3: A/B Testing (Image Right) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Test, don't guess. <br />
              <span className="text-blue-600">Built-in A/B Testing.</span>
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Wondering if that new headline works better? Run A/B tests directly from your dashboard to see what drives more revenue. No external plugins required.
            </p>
             <dl className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">One-click Experiments</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span className="ml-3 text-gray-600">Statistical Significance Tracking</span>
              </div>
            </dl>
          </div>
          <div className="mt-10 lg:mt-0 relative">
             {/* REPLACE THIS DIV WITH YOUR IMAGE */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 aspect-video flex items-center justify-center overflow-hidden">
               <span className="text-gray-400 font-medium"><Image src="/images/screenshots/ab testing screenshot.png" alt="A/B Testing Screenshot"  width={1000} height={600} className="rounded-lg object-cover" /></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Icon
const CheckIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default FeatureHighlights;
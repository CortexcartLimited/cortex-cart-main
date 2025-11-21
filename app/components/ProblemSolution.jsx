import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Problem Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            The Problem
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Running an e-commerce store shouldn't feel like gambling.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You have data everywhere—Shopify, Facebook Ads, Google Analytics—but you still don't know why sales are dropping.
          </p>
        </div>

        {/* The 3 Pain Points (Cards) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {/* Pain Point 1 */}
          <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="absolute -top-6 left-8 bg-red-100 p-3 rounded-xl">
              <ChartDownIcon className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">The "Why" Gap</h3>
            <p className="mt-2 text-gray-600">
              You see traffic going up but sales going down. Google Analytics shows you charts, but it doesn't tell you <em>why</em> it's happening.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="absolute -top-6 left-8 bg-orange-100 p-3 rounded-xl">
              <SpreadsheetIcon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Spreadsheet Hell</h3>
            <p className="mt-2 text-gray-600">
              Wasting hours every week exporting CSVs from 4 different platforms just to create a report that is outdated by the time you finish.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="absolute -top-6 left-8 bg-yellow-100 p-3 rounded-xl">
              <MoneyIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Ad Burn</h3>
            <p className="mt-2 text-gray-600">
              Scaling ads that aren't converting because you don't have a clear view of your customer's true journey or LTV.
            </p>
          </div>
        </div>

        {/* The Transition / Solution Statement */}
        <div className="relative text-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-lg font-medium text-gray-500">
              It's time to stop guessing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

// Icons
const ChartDownIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);
const SpreadsheetIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125v1.5c0 .621-.504 1.125-1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5" />
  </svg>
);
const MoneyIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default ProblemSolution;
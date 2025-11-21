import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why store owners are switching to Cortex Cart
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we stack up against the giants.
          </p>
        </div>

        {/* Table Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-200">
          
          {/* Responsive Scroll Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-gray-200 min-w-[200px]"></th>
                  
                  {/* Cortex Cart Column Header (Highlighted) */}
                  <th className="p-6 bg-blue-50/50 border-b-2 border-blue-500 min-w-[220px] relative">
                    <div className="absolute top-2 bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
                        Recommended
                      </span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 text-center">
                      Cortex Cart 🧠
                    </div>
                    <div className="text-sm text-blue-600 font-semibold text-center mt-1">
                      AI Analyst
                    </div>
                  </th>

                  {/* GA4 Header */}
                  <th className="p-6 border-b border-gray-200 min-w-[200px]">
                    <div className="text-lg font-bold text-gray-500 text-center">
                      Google Analytics 4
                    </div>
                    <div className="text-sm text-gray-400 text-center mt-1">
                      General Data
                    </div>
                  </th>

                  {/* Triple Whale Header */}
                  <th className="p-6 border-b border-gray-200 min-w-[200px]">
                    <div className="text-lg font-bold text-gray-500 text-center">
                      Triple Whale
                    </div>
                    <div className="text-sm text-gray-400 text-center mt-1">
                      Ad Attribution
                    </div>
                  </th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-100">
                {/* Row 1: Primary Focus */}
                <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50">Primary Focus</td>
                  <td className="p-6 bg-blue-50/30 text-center">
                    <span className="font-bold text-gray-900">AI Growth Insights</span>
                    <div className="text-xs text-gray-500 mt-1">(Why sales happen)</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Raw Traffic Data
                    <div className="text-xs text-gray-400 mt-1">(Who visited)</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Ad Attribution
                    <div className="text-xs text-gray-400 mt-1">(ROAS tracking)</div>
                  </td>
                </tr>

                {/* Row 2: Ease of Use */}
                <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50">Ease of Use</td>
                  <td className="p-6 bg-blue-50/30 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Simple
                    </span>
                    <div className="text-xs text-gray-500 mt-1">Plug & Play</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    High Complexity
                    <div className="text-xs text-gray-400 mt-1">Requires training</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Moderate
                    <div className="text-xs text-gray-400 mt-1">Complex setup</div>
                  </td>
                </tr>

                {/* Row 3: Actionable Advice */}
                <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50">Actionable Advice</td>
                  <td className="p-6 bg-blue-50/30 text-center">
                    <div className="flex items-center justify-center gap-2 font-bold text-gray-900">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      AI Recommendations
                    </div>
                  </td>
                  <td className="p-6 text-center">
                     <div className="flex items-center justify-center gap-2 text-gray-400">
                      <CrossIcon className="w-5 h-5" />
                      None
                    </div>
                  </td>
                  <td className="p-6 text-center">
                     <div className="flex items-center justify-center gap-2 text-gray-400">
                      <CrossIcon className="w-5 h-5" />
                      None
                    </div>
                  </td>
                </tr>

                {/* Row 4: Data Sources */}
                <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50">Data Sources</td>
                  <td className="p-6 bg-blue-50/30 text-center font-semibold text-gray-900">
                    Unified
                    <div className="text-xs font-normal text-gray-500 mt-1">Store + Socials + Ads</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Web Only
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Ads + Store
                  </td>
                </tr>

                 {/* Row 5: A/B Testing */}
                 <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50">A/B Testing</td>
                  <td className="p-6 bg-blue-50/30 text-center">
                    <div className="flex items-center justify-center gap-2 font-bold text-gray-900">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      Built-in
                    </div>
                  </td>
                  <td className="p-6 text-center">
                     <div className="flex items-center justify-center gap-2 text-gray-400">
                      <CrossIcon className="w-5 h-5" />
                      Requires Plugins
                    </div>
                  </td>
                  <td className="p-6 text-center">
                     <div className="flex items-center justify-center gap-2 text-gray-400">
                      <CrossIcon className="w-5 h-5" />
                      No
                    </div>
                  </td>
                </tr>

                {/* Row 6: Cost */}
                <tr>
                  <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50 border-b-0">Cost</td>
                  <td className="p-6 bg-blue-50/30 text-center border-b-4 border-blue-500 rounded-b-lg">
                    <span className="text-2xl font-extrabold text-blue-600">FREE TRIAL</span>
                    <div className="text-xs text-blue-800 font-medium mt-1">Until Jan 2026 then starts at £29 p/m</div>
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Free
                  </td>
                  <td className="p-6 text-center text-gray-600">
                    Starts at £230 p/m
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* The Verdict Section */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">The Verdict</h3>
            <p className="text-white text-lg leading-relaxed">
              "Google Analytics tells you <em>what</em> happened. Triple Whale tells you <em>which ad</em> worked. <br className="hidden sm:block" />
              <span className="text-blue-200 font-bold">Cortex Cart tells you how to fix your store and grow revenue.</span>"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// Simple Icon Components to avoid dependencies
const CheckIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const CrossIcon = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default ComparisonTable;
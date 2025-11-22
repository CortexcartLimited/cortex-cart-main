// components/NewsletterSignup.jsx
import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Not ready to dive in yet?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Join 2,000+ store owners getting weekly tips on how to read their data and boost profits.
        </p>
        
        {/* Simple Form */}
        <form 
          action="https://hotmail.us10.list-manage.com/subscribe/post?u=2a4f0a325428c7bbf43e861d4&amp;id=695c1615c7&amp;f_id=002f5ae2f0" 
          method="POST"
          id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
          className="mt-8 sm:flex justify-center"
          class="validate" 
          target="_blank"
        >
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="email-address"
            name="EMAIL"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md border-transparent"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
            >
              Get the tips
            </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-blue-200">
          We respect your inbox. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
// app/(landing)/directory/page.tsx
import React from 'react';
import Link from 'next/link';


export default function LandingPage() {
  return (
    <div className="max-w-3xl w-full px-6 py-12 bg-white shadow-xl rounded-2xl my-10">
      
      {/* 1. Logo - Keep it simple, just the brand */}
      <div className="flex justify-center mb-8">
         {/* Replace with your actual Logo Image */}
        <h1 className="text-2xl font-bold text-blue-600">CortexCart</h1>
      </div>

      {/* 2. Hero Copy */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Unlock Your Analytics <span className="text-blue-600">Hidden Revenue</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Stop managing with guesswork. Get advanced analytics and social scheduling in one dashboard.
        </p>
        
        {/* The Offer Hook */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg inline-block">
          <p className="font-semibold text-blue-800">
            🔥 BETA OFFER: Full Premium Access FREE until 2026
          </p>
        </div>
      </div>

      {/* 3. The Call to Action (Form or Button) */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <Link 
          href="https://checkout.stripe.com/c/pay/cs_live_a1bKGu1Ixv4effFfty3F3rmyeyEkMPNTckncLEXojUDLtefGolBetvhB6V#fidkdWxOYHwnPyd1blppbHNgWlJcT39ga0puT19%2FdEF3NUdodkJraWFhYicpJ3ZwZ3Zmd2x1cWxqa1BrbHRwYGtgdnZAa2RnaWBhJz9jZGl2YHgl" // Or your auth sign-up link
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Join the Beta — Free
        </Link>
        <span className="text-sm text-gray-400">No credit card required. 2-minute setup.</span>
      </div>

      {/* 4. Value Stack (Bullet Points) */}
      <div className="grid md:grid-cols-3 gap-6 text-center border-t pt-8">
        <div>
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-gray-800">AI Reporting</h3>
          <p className="text-sm text-gray-500">Identify best sellers instantly.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">⏰</div>
          <h3 className="font-bold text-gray-800">Social Auto-Pilot</h3>
          <p className="text-sm text-gray-500">Schedule posts from your data.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="font-bold text-gray-800">E-Commerce Multiple Platforms</h3>
          <p className="text-sm text-gray-500">Built specifically for multiple platforms.</p>
        </div>
      </div>

      {/* 5. Simple Footer for Legal Compliance (Required for FB Ads) */}
      <div className="mt-12 pt-6 border-t text-center text-xs text-gray-400">
        <p>&copy; 2025 CortexCart. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>

    </div>
  );
}
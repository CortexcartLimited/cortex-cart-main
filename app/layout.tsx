// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Your font import
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  other: {
    'facebook-domain-verification': '5jg6zgmfosj3k53rwsnzq13d3cvj4n',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
     {children}
      </body>
         <Script 
        id="cortex-cart-tracker"
        strategy="afterInteractive"
      >
        {`
          (function() {
            const SITE_ID = '9';
            const API_ENDPOINT = 'https://tracker.cortexcart.com/api/track';
            
            function sendEvent(eventName, data = {}) {
                const eventData = { siteId: SITE_ID, eventName: eventName, data: { ...data, path: window.location.pathname, referrer: document.referrer }};
                try { 
                    navigator.sendBeacon(API_ENDPOINT, JSON.stringify(eventData)); 
                } catch(e) { 
                    fetch(API_ENDPOINT, { method: 'POST', body: JSON.stringify(eventData), keepalive: true }); 
                }
            }

            document.addEventListener('click', (e) => sendEvent('click', { x: e.pageX, y: e.pageY }), true);
            
            window.cortexcart = { track: sendEvent };
            sendEvent('pageview');
          })();
        `}
      </Script>
    </html>
  );
}
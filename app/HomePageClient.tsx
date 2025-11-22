// app/HomePageClient.tsx
'use client';

import Link from 'next/link';
import {
    ShieldCheckIcon, ChartBarIcon, SparklesIcon, ArrowRightIcon, PuzzlePieceIcon, TableCellsIcon, BeakerIcon
} from '@heroicons/react/24/outline';
import "./globals.css";
import React from 'react';
import Image from 'next/image';
import { ElementType } from 'react';
import StripePricingTable from '@/app/components/StripePricingTable'; // Import the new component
import ComparisonTable from '@/app/components/ComparisonTable'; 
import ProblemSolution from '@/app/components/ProblemSolution'; 
import FeatureHighlights from '@/app/components/FeaturesHighlights'; 
import NewsletterSignup from '@/app/components/NewsletterSignup'; 

// --- Interfaces for Type Safety ---
interface CmsContent {
    hero_title?: string;
    hero_subtitle?: string;
    feature_1_title?: string;
    feature_1_description?: string;
    feature_2_title?: string;
    feature_2_description?: string;
    feature_3_title?: string;
    feature_3_description?: string;
    feature_4_title?: string;
    feature_4_description?: string;
    feature_5_title?: string;
    feature_5_description?: string;
    feature_6_title?: string;
    feature_6_description?: string;
}

const trackerUrl = process.env.NEXT_PUBLIC_APP_URL || '/';
const pageStyles = {
  container: {
    maxWidth: 'auto',
    margin: '0 100px',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#111827'
  }
};
const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/cortexcartai',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.77-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cortexcartai/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/jonathanservice',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.682 10.623 20.239 3h-1.64l-5.705 6.44L7.65 3H3l6.836 9.753L3 21h1.64l6.082-6.885L16.351 21H21l-7.318-10.377zM14.78 13.968l-.87-1.242L6.155 4.16h2.443l4.733 6.742.87 1.242 7.03 9.98h-2.443l-5.045-7.143z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://uk.pinterest.com/Cortexcart/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M12.017 0C5.396 0 .029 5.367.029 12c0 4.137 2.678 7.653 6.333 8.943.02-.19.029-.398.05-.61l.329-1.4a.123.123 0 0 1 .099-.1c.36-.18 1.15-.56 1.15-.56s-.299-.909-.249-1.79c.06-.9.649-2.12 1.459-2.12.68 0 1.2.51 1.2 1.12 0 .68-.43 1.7-.65 2.64-.179.78.379 1.42.919 1.42 1.58 0 2.63-2.1 2.63-4.22 0-1.8-1.12-3.44-3.03-3.44-2.28 0-3.52 1.68-3.52 3.32 0 .61.22 1.25.5 1.62.03.04.04.05.02.13l-.15.65c-.05.2-.14.24-.32.08-1.05-.9-1.5-2.3-1.5-3.82C6.18 5.76 8.35 3 12.33 3c3.22 0 5.59 2.38 5.59 4.91 0 3.22-1.95 5.61-4.79 5.61-.9 0-1.75-.47-2.05-1.02l-.52 2.1c-.24 1.01-1.04 2.45-1.04 2.45s-.28.1-.32.08c-.46-.38-.68-1.2-.55-1.88l.38-1.68c.12-.55-.03-1.2-.5-1.52-1.32-.9-1.9-2.6-1.9-4.22 0-2.28 1.6-4.3 4.6-4.3 2.5 0 4.2 1.8 4.2 4.15 0 2.5-1.55 4.5-3.8 4.5-.75 0-1.45-.38-1.7-.82l-.28-.9c-.1-.4-.2-.8-.2-1.22 0-.9.42-1.68 1.12-1.68.9 0 1.5.8 1.5 1.88 0 .8-.25 1.88-.58 2.8-.25.7-.5 1.4-.5 1.4s-.3.12-.35.1c-.2-.1-.3-.2-.3-.4l.02-1.12z" />
        </svg>
      ),
    }
];

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    meta_description: string;
    featured_image_url: string;
    published_at: string;
}

interface HomePageClientProps {
    content: Partial<CmsContent>;
    recentPost: BlogPost | null;
}

const featureIcons = {
    feature_1: ChartBarIcon,
    feature_2: SparklesIcon,
    feature_3: ShieldCheckIcon,
    feature_4: PuzzlePieceIcon,
    feature_5: TableCellsIcon,
    feature_6: BeakerIcon,
};

// --- Main Client Component ---
export default function HomePageClient({ content, recentPost }: HomePageClientProps) {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
			{/* This is the new logo image, wrapped in a link to the homepage */}
                    <Link href="/" passHref>
                      <Image
                        src="/cortexcart-com-logo-home.png" // This points to /public/logo.png
                        alt="CortexCart Logo"
                        width={150} // Adjust this to your logo's width
                        height={40}  // Adjust this to your logo's height
                        priority // Helps load the logo faster on the homepage
                      />
                    </Link>
                    <ul className="flex items-center space-x-6">
                        <li><Link href="pages/integrations"><span className="hover:text-blue-600 cursor-pointer">Integrations</span></Link></li>
                        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                        <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
                        <li>
                            <Link href={`${trackerUrl}/blog`}>
                                <span className="hover:text-blue-600 cursor-pointer">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#pricing">
                                <div className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                                    Start Free Trial
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="text-center py-20 lg:py-32 bg-blue-700">
                 <div className="container mx-auto px-6">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-100 leading-tight">
                        {content?.hero_title || 'The AI-Powered Analytics Dashboard for E-commerce analytics with ai insights and sales optimization'}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-100">
                        {content?.hero_subtitle || 'Stop guessing. Start growing. CortexCart gives you the actionable insights you need to boost sales.'}
                    </p>
                    <div className="mt-8">
                        <Link href="https://cortexcart.com/#pricing">
                           <div className="inline-flex items-center px-8 py-4 text-lg font-semibold text-bluw-700 bg-gray-100 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 cursor-pointer">
                                Get Started for Free <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <section id="features" className="py-20">
                 <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose CortexCart?</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-gray-600">Discover the tools that give you a competitive edge and simplify your path to success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard icon={featureIcons.feature_1} title={content?.feature_1_title} description={content?.feature_1_description} />
                        <FeatureCard icon={featureIcons.feature_2} title={content?.feature_2_title} description={content?.feature_2_description} />
                        <FeatureCard icon={featureIcons.feature_3} title={content?.feature_3_title} description={content?.feature_3_description} />
                        <FeatureCard icon={featureIcons.feature_4} title={content?.feature_4_title} description={content?.feature_4_description} />
                        <FeatureCard icon={featureIcons.feature_5} title={content?.feature_5_title} description={content?.feature_5_description} />
                        <FeatureCard icon={featureIcons.feature_6} title={content?.feature_6_title} description={content?.feature_6_description} />
                    </div>
                </div>
            </section>
<div className="text-center my-12 bg-gray-50 p-4">
                     <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Launch Partners</h2>
                     <div className="flex justify-center items-center">
                       
                        <a href="https://www.producthunt.com/products/cortexcart-insight-dashboard-beta-0-9-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-cortexcart&#0045;insight&#0045;dashboard&#0045;beta&#0045;0&#0045;9&#0045;6" target="_blank" rel="noopener noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1039956&theme=neutral&t=1763549163573" alt="Cortexcart&#0032;Insight&#0032;Dashboard&#0032;Beta&#0032;0&#0046;9&#0046;6 - Stop&#0032;guessing&#0046;&#0032;Grow&#0032;your&#0032;store&#0032;with&#0032;AI&#0032;insights | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
                         <a href="https://saasbrowser.com/en/saas/990388/cortexcart"><img src="https://files.saasbrowser.com/4s95cikd4psm7wxl87o8c2ebofvl" alt="CortexCart - SaaS Browser" width="200" height="133" style={{ margin: '20px' }} /></a>
                     <a href="https://nxgntools.com/tools/cortexcart-insight-dashboard" target="_blank" rel="noopener" style={{ display: 'inline-block', width: 'auto' }}>
    <img src="https://nxgntools.com/api/embed/cortexcart-insight-dashboard?type=FEATURED_ON&hideUpvotes=true" alt="NextGen Tools Badge" style={{ height: '48px', width: 'auto' }} />
</a>
                     </div>
                 </div>
            
            <ProblemSolution />
            <FeatureHighlights />
           
                 
<ComparisonTable />
<NewsletterSignup />
 <section id="pricing" className="py-20">
                 <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Choose the plan that&apos;s right for your business. Start free, no credit card required.
                        </p>
                    </div>
                    </div>
                 <StripePricingTable />
             </section>
{recentPost && (
                 <section id="from-the-blog" className="py-2 mb-4">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">From the Blog</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-gray-600">Check out our latest insights and tutorials.</p>
                        </div>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-xl">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                <Image src={recentPost.featured_image_url || 'https://placehold.co/600x400/E2E8F0/4A5568?text=CortexCart'} alt={recentPost.title} fill className="object-cover"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    {new Date(recentPost.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <h3 className="mt-2 text-2xl font-bold text-gray-900">{recentPost.title}</h3>
                                <p className="mt-4 text-gray-600">{recentPost.meta_description}</p>
                                <Link href={`/blog/${recentPost.slug}`}>
                                    <div className="mt-6 inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                                        Read more <ArrowRightIcon className="h-4 w-4 ml-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Scrolling Logo Banner Section */}
            <section className="py-12 bg-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Integrates with Your Favorite Platforms</h2>
                </div>
                <div className="flex animate-scroll-left whitespace-nowrap py-4">
                    {/* Duplicate content to ensure seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center justify-around flex-shrink-0 w-full md:w-auto px-8 space-x-12">
                 <Image src="/logos/mailchimplogo.png" width={100} height={100} alt={'Mailchimp Logo'}></Image>
                <Image src="/logos/quickbooklogo.png" width={100} height={100} alt={'Quickbooks Logo'}></Image>
                <Image src="/logos/shopifylogo.png" width={100} height={100} alt={'Shopify Logo'}></Image>
                <Image src="/logos/facebooklogo.png" width={100} height={100} alt={'Facebook Logo'}></Image>
                <Image src="/logos/instagramlogo.png" width={100} height={100} alt={'Instagram Logo'}></Image>
                <Image src="/logos/xlogo.png" width={100} height={100} alt={'X Logo'}></Image>
                <Image src="/logos/pintrestlogo.png" width={100} height={100} alt={'Pinterest Logo'}></Image>
               <Image src="/logos/bigcommercelogo.png" width={100} height={100} alt={'Bigcommerce Logo'}></Image>
               <Image src="/logos/magentologo.png" width={100} height={100} alt={'Magento Logo'}></Image>
               <Image src="/logos/opencartlogo.png" width={100} height={100} alt={'Opencart Logo'}></Image>

                                            </div>
                    ))}
                </div>
                <style jsx>{`
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%); /* Scrolls half the width of the duplicated content */
                        }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 30s linear infinite;
                        display: flex;
                        width: 200%; /* Double the width to accommodate duplicated content */
                    }
                    .animate-scroll-left:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            <footer className="bg-gray-800 text-white py-8">
                 <div className="container mx-auto px-6 text-center">
                     <div className="mt-4">
                        <Link href="https://tracker.cortexcart.com/login"><span className="px-3 hover:underline cursor-pointer">My Account</span></Link>
                        <span className="text-gray-500">|</span>
                        <Link href="pages/about"><span className="px-3 hover:underline cursor-pointer">About</span></Link>
                        <span className="text-gray-500">|</span>
                        <Link href="pages/contact"><span className="px-3 hover:underline cursor-pointer">Contact</span></Link>
                        <span className="text-gray-500">|</span>
     			 <Link href="pages/terms"><span className="px-3 hover:underline cursor-pointer">Terms of Service</span></Link>
                        <span className="text-gray-500">|</span>
                        <Link href="pages/privacy"><span className="px-3 hover:underline cursor-pointer">Privacy Policy</span></Link>
		        <span className="text-gray-500">|</span>
                        <Link href="pages/data-protection"><span className="px-3 hover:underline cursor-pointer">Data Protection</span></Link>
                    <span className="text-gray-500">|</span>
                        <Link href="pages/license"><span className="px-3 hover:underline cursor-pointer">EULA License</span></Link>
                    </div>
                    {/* NEW: Social Icons Section */}
                    <div className="flex justify-center space-x-6 mt-4">
                       
                        {socialLinks.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                                       <p className="mt-4">&copy; {new Date().getFullYear()} Cortexcart LIMITED Company Number: NI732656. All rights reserved.</p>
 <Image 
                        src="/logos/Powered by Stripe - white.svg" 
                        alt="Powered by Stripe Badge"
                        width={200} // Adjust width as needed
                        height={100} // Adjust height as needed
                        className="mx-4"
                          
                        />
                </div>
            </footer>
        </div>
    );
}

const FeatureCard = ({ icon: Icon, title, description }: { icon: ElementType, title?: string, description?: string }) => (
   <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="inline-block p-4 bg-blue-100 rounded-full">
            <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);
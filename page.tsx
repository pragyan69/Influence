
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, PhoneIcon as WhatsApp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RevenueGraph } from "./revenue-graph"

const MotionCard = motion(Card);
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export default function LandingPage() {
  const resultsRef = useRef<HTMLElement>(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1F1432] to-[#2D1B4B] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-10 sm:py-6 flex sm:flex-row flex-col justify-between items-center text-center sm:text-left">
  {/* Logo Section */}
  <div className="flex items-center gap-2">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(11)-27aApeZBOdzWpZ8SMcEGGfzWBYq6bp.png"
      alt="Influence Logo"
      width={500}
      height={250}
      className="h-48 w-auto"
      priority
    />
  </div>

  {/* Influence Title */}
  <div className="mt-4 sm:mt-0">
    <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide 
      bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
      INFLUENCE
    </p>
  </div>

  {/* Contact Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-0">
    <Link
      href="tel:7637855557"
      className="flex items-center gap-2 bg-[#A855F7] px-6 py-3 rounded-full hover:bg-[#A855F7]/90 transition-colors"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold">7637855557</span>
    </Link>
    <Link
  href="https://wa.link/q2mgpg"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
>
  <Image
    src="/whatsappNoNg.png"
    alt="WhatsApp Logo"
    width={24} // Adjust size as needed
    height={24}
    className="h-6 w-6"
    priority
  />
  <span className="font-semibold">WhatsApp</span>
</Link>

  </div>
</header>



      {/* Hero Section */}
           {/* Hero Section */}
           <section className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Supercharge Your Business 🚀 <br />
          <span className="text-[#A855F7]">Reach 10x Revenue!</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the ranks of businesses that have achieved phenomenal growth with our proven strategies.
        </p>
        <div className="max-w-4xl mx-auto mb-12">
          <RevenueGraph />
        </div>

        {/* Stacked Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <Link
            href="mailto:influenceoffcl@gmail.com?subject=Need%20help%20In%20Scaling%20my%20business&body=I%20would%20greatly%20appreciate%20your%20assistance%20in%20growing%20my%20business.%20Your%20expertise%20and%20support%20could%20make%20a%20significant%20difference%20on%20this%20exciting%20journey.%20Let%27s%20work%20together%20to%20achieve%20new%20heights!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#A855F7] hover:bg-[#A855F7]/90 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full max-w-xs"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>

          <Link
            href="https://calendly.com/officialinfluence/strategic-growth-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#A855F7] hover:bg-[#A855F7]/90 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full max-w-xs"
          >
            Book a call
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Choose Your <span className="text-[#A855F7]">Influence</span> Plan
        </h2>

        {/* Plan Toggle */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white bg-[#A855F7] hover:bg-[#A855F7]/10">
              Monthly
            </Button>
            <Button className="bg-[#A855F7] hover:bg-[#A855F7]/90">Yearly</Button>
          </div>
          <Badge variant="outline" className="text-white border-white text-lg py-2 px-4 animate-pulse">
            Monthly Plans Coming Soon!
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="bg-white text-black rounded-3xl transform hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle>
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-lg text-gray-600">for users new to Influence</div>
                <div className="text-5xl font-bold mt-4 text-[#A855F7]">
                  Rs 0<span className="text-xl">/2 weeks</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#A855F7]">✓</span>
                  Free growth Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A855F7]">✓</span>
                  Free Logo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A855F7]">✓</span>
                  Free Business Card
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-gradient-to-br from-[#A855F7] to-[#7B2CBF] text-white rounded-3xl transform hover:scale-105 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-4 bg-white text-[#A855F7] font-bold px-4 py-1">MOST POPULAR</Badge>
              <CardTitle>
                <div className="text-3xl font-bold mb-2">Pro</div>
                <div className="text-lg opacity-90">Get access to all features</div>
                <div className="text-5xl font-bold mt-4">
                  Rs 10999<span className="text-xl">/year</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-medium mb-4">All Free Features +Pro features</div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Website Design + Setup + SSL Certificate
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Payment Gateway Integration
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Delivery Partner Integration
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Advanced growth strategy
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Google Business Listing
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  10 Ad Creatives
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  White-labeled products
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Assistance with Domain
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>3 Meta Ad Campaigns
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Scale Your Business?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Join the ranks of businesses that have achieved phenomenal growth. Let's start your success story today!
        </p>
      {/* RESULTS SECTION */}

      <section ref={resultsRef} className="py-20 bg-gradient-to-b from-[#1F1432] to-[#2D1B4B] to-black">
  <div className="container px-4 mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
    >
      Proven Results
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
    >
      Real numbers from brands using INFLUENCE
    </motion.p>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        { metric: "40%", label: "Average Growth in Sales", sublabel: "Month over Month" },
        { metric: "3x", label: "Return on Investment", sublabel: "Compared to Traditional Methods" },
        { metric: "200+", label: "New Customers Monthly", sublabel: "Per Brand Average" },
        { metric: "95%", label: "Cost Reduction", sublabel: "In Marketing Operations" },
      ].map((item, index) => (
        <MotionCard
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700/50 transition-all duration-500 ease-out rounded-2xl" // ✅ Rounded corners
        >
          <CardContent className="p-8 text-center">
            <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
              {item.metric}
            </p>
            <p className="text-xl font-semibold text-gray-200 mb-2">{item.label}</p>
            <p className="text-gray-400">{item.sublabel}</p>
          </CardContent>
        </MotionCard>
      ))}
    </motion.div>
  </div>
</section>

        <Link
          href="mailto:influenceoffcl@gmail.com?subject=Need%20help%20In%20Scaling%20my%20business&body=I%20would%20greatly%20appreciate%20your%20assistance%20in%20growing%20my%20business.%20Your%20expertise%20and%20support%20could%20make%20a%20significant%20difference%20on%20this%20exciting%20journey.%20Let%27s%20work%20together%20to%20achieve%20new%20heights!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#A855F7] hover:bg-[#A855F7]/90 text-xl px-12 my-5 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-6 w-6" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 bg-[#1F1432]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
            <p className="mb-2 text-lg">Phone: 7637855557</p>
            <p className="text-lg">Email: influenceoffcl@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


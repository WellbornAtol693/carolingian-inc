'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'

const tiers = [
  {
    title: "The Empire Tier (Contact to Negotiate Price)",
    image: "/hero2.PNG",
    description: `• Full stack security and business intelligence.  
• Military-grade protection, 24/7 monitoring, AI analytics, and crisis response.  
• For businesses ready to dominate their industry.`,
    features: [
      "✅ All Fortress Tier features",
      "✅ Military-grade cyber perimeter (Cloudflare, TLS, brute-force lockout)",
      "✅ 24/7 security monitoring + daily backups",
      "✅ Monthly Threat Report (AI-generated + analyst reviewed)",
      "✅ Employee phishing tests + security training",
      "✅ Custom AI dashboard for sales, traffic, and client insights",
      "✅ Priority support + 2 free strategy calls per year",
      "✅ Emergency recovery within 12 hours"
    ]
  },
  {
    title: "The Fortress Tier (Contact to Negotiate Price)",
    image: "/manager.PNG",
    description: `• Run your business like a machine.  
• Secure client/inventory database, admin login, CRM tools, and performance tracking.  
• Everything you need to scale, systemize, and stop using spreadsheets forever.`,
    features: [
      "✅ All Shield Tier features + Google SEO",
      "✅ Custom business database (clients, inventory, appointments)",
      "✅ Excel export + monthly data backup",
      "✅ Admin dashboard with secure login",
      "✅ Traffic analytics + performance monitoring",
      "✅ Secure employee login system",
      "✅ Setup of CRM email system (Mailchimp or Sendgrid)"
    ]
  },
  {
    title: "The Shield Tier ($750)",
    image: "/website.PNG",
    description: `• Get online fast with a professional, secure website.  
• Perfect for new businesses or solo owners.  
• Includes your .com domain, mobile-ready design, and hosting — all 100% built in the USA with zero outsourced code.  
• Simple, strong, and ready to launch.`,
    features: [
      "✅ Custom 5-page .com website",
      "✅ 1 year domain + secure hosting",
      "✅ Mobile optimization & fast load speed",
      "✅ Contact form + basic lead capture",
      "✅ Branded color scheme + logo placement",
      "✅ No outsourced code or code-free generating AI — 100% American programming development"
    ]
  }
]

export default function Services() {
  return (
    <main className="bg-imperialIndigo min-h-screen flex flex-col items-center justify-start">
      {/* TOP HEADER */}
      <section className="w-full border-b border-gold shadow-md py-2">
        <header className="max-w-7xl mx-auto px-4 py-3 flex items-center relative">
          <h1 className="font-serif absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-5xl font-bold text-gold">
            <Link href="/">Carolingian Inc.</Link>
          </h1>
          <nav className="hidden sm:flex space-x-4 text-gold ml-auto font-serif z-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/invest" className="hover:text-white transition">Invest</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>
        </header>
      </section>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row w-full border-b border-gold bg-[#0A1D3C]">
        <div className="w-full md:w-5/12 relative h-[48vh] md:h-auto overflow-hidden">
          <Image
            src="/abg.PNG"
            alt="Hero Background"
            fill
            className="object-cover object-top object-left"
            priority
          />
        </div>

        <div className="flex flex-col h-[48vh] md:flex-row items-center justify-between w-screen px-6 md:px-16 py-8 bg-[#0b1a2f] text-white">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-serif font-semibold">
              ⚠️ The War For Data Is Here! <br />Is Your Business Truly Safe?
            </h2>
            <p className="text-sm leading-relaxed">
              • <strong className='text-gold'>68%</strong> of small businesses were targeted by cyberattacks last year <br />
              • <strong className='text-gold'>45%</strong> still don’t own their own customer data <br />
              • <strong className='text-gold'>87%</strong> are vulnerable to digital theft, shutdowns, or manipulation.
              <br /><br />
              <strong>Every dollar you don’t track, someone else is. Every customer you don’t retain, your competition buys.</strong>
            </p>
            <ul className="list-none space-y-2 pt-4 text-xs">
              <li>✅ Custom client website/database management and build</li>
              <li>✅ Cyber Security practices to protect your business’s data and profit</li>
              <li>✅ No outsourced code or code-free generating AI — 100% American programming development</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="/contact">
                <button className="bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-md hover:bg-yellow-300 transition">
                  🚀 Book Your Free Digital Defense Audit
                </button>
              </a>
              <a href="/contact">
                <button className="bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-md hover:bg-yellow-300 transition">
                  🚀 I want to Learn about the Tiers
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/5 flex justify-end items-stretch relative overflow-hidden mt-8 md:mt-0 h-[48vh]">
            <Image
              src="/analyst.PNG"
              alt="Analyst"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="w-full bg-[#0A1D3C] border-b border-gold px-4 py-12 flex flex-wrap gap-6 justify-center">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className="bg-[#0b1a2f] border border-[#d4af37] rounded-xl p-6 w-full sm:w-[48%] lg:w-[31%] flex flex-col text-white shadow-md"
          >
            <div className="mb-4 w-full h-48 relative rounded overflow-hidden">
              <Image
                src={tier.image}
                alt="tier image"
                fill
                className="object-contain object-center"
              />
            </div>
            <h2 className="text-xl font-serif text-gold font-bold mb-2 text-center">{tier.title}</h2>
            <ul className="list-disc text-sm text-white pl-4 mb-4 space-y-1">
              {tier.description
                .split('\n')
                .map(line => line.trim())
                .filter(line => line)
                .map((line, idx) => {
                  const cleanLine = line.startsWith('•') ? line.slice(1).trim() : line;
                  return <li key={idx}>{cleanLine}</li>;
                })}
            </ul>
            <ul className="list-none text-xs font-serif text-white max-h-48 overflow-y-auto pr-1 space-y-2">
              {tier.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <a href="/invest">
                <button className="bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-md hover:bg-yellow-300 transition">
                  🚀 Learn More
                </button>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Optional Footer */}
      {/* <Footer /> */}
    </main>
  )
}

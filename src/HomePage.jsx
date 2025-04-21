import { Mail, Globe, Heart, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 font-serif">
      <section className="bg-gradient-to-b from-black to-gray-800 text-white py-24 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Centurion Global Capital Logo"
              className="h-24 w-auto mx-auto rounded shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            Centurion Global Capital
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A private family office preserving and growing generational wealth with global presence and strategic foresight.
          </p>
          <button className="text-lg px-6 py-4 rounded-2xl bg-white text-black shadow-xl hover:bg-gray-200">
            Explore Our Investments
          </button>
        </div>
      </section>

      <section className="py-20 px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Global Offices</h2>
            <ul className="text-lg space-y-2">
              <li>🇸🇬 Singapore (Headquarters)</li>
              <li>🇲🇨 Monaco</li>
              <li>🇬🇧 London</li>
              <li>🇺🇸 New York</li>
              <li>🇦🇪 Abu Dhabi</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mandate</h2>
            <p className="text-lg">
              We invest across public and private markets, real estate, venture capital, and strategic opportunities globally.
              Our focus is on long-term value creation and philanthropic legacy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Investments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md p-6 rounded">
              <Briefcase className="w-6 h-6 mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Private Equity</h3>
              <p>
                Long-term strategic investments in private businesses across sectors with a focus on scalable growth and operational excellence.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <Briefcase className="w-6 h-6 mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p>
                Global real estate portfolio spanning commercial, residential, hospitality, and land development in core and emerging markets.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <Briefcase className="w-6 h-6 mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Public Markets</h3>
              <p>
                Equities, fixed income, and thematic strategies aligned with macroeconomic trends and capital preservation goals.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <Briefcase className="w-6 h-6 mb-4 text-gray-700" />
              <h3 className="text-xl font-semibold mb-2">Venture Capital</h3>
              <p>
                Early and growth-stage investments in transformative technologies, digital infrastructure, fintech, and health innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Philanthropy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 shadow-md p-6 rounded">
              <Heart className="w-6 h-6 mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Education & Opportunity</h3>
              <p>
                Empowering future generations through scholarships, school infrastructure, and global learning initiatives.
              </p>
            </div>
            <div className="bg-gray-50 shadow-md p-6 rounded">
              <Heart className="w-6 h-6 mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Sustainability & Conservation</h3>
              <p>
                Supporting climate action, reforestation, and preservation of marine and terrestrial ecosystems.
              </p>
            </div>
            <div className="bg-gray-50 shadow-md p-6 rounded">
              <Heart className="w-6 h-6 mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Humanitarian Relief</h3>
              <p>
                Funding crisis response efforts, food and water access, and health care services for vulnerable populations.
              </p>
            </div>
            <div className="bg-gray-50 shadow-md p-6 rounded">
              <Heart className="w-6 h-6 mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Arts & Culture</h3>
              <p>
                Preserving cultural heritage and supporting institutions that elevate artistic expression and historical narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6 text-lg">
            For trusted introductions or institutional inquiries:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 border border-gray-300 text-lg px-6 py-3 rounded hover:bg-white/80">
              <Mail className="mr-2 w-5 h-5" /> info@centurioncapital.com
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-lg px-6 py-3 rounded hover:bg-white/80">
              <Globe className="mr-2 w-5 h-5" /> www.centurionglobalcapital.com
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

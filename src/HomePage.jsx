import { Card, CardContent } from "@/components/ui/card";
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

      {/* other sections unchanged */}

      <section className="bg-gray-100 py-20 px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6 text-lg">
            For trusted introductions or institutional inquiries:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 border border-gray-300 text-lg px-6 py-3 rounded hover:bg-white/80">
              <Mail className="w-5 h-5" /> info@centurioncapital.com
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-lg px-6 py-3 rounded hover:bg-white/80">
              <Globe className="w-5 h-5" /> www.centurionglobalcapital.com
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { Library, Star, Users, ArrowLeft, BadgeCheck } from "lucide-react";

type Listing = {
  title: string;
  provider: string;
  niche: string;
  price: string;
  rating: number;
  students: number;
  emoji: string;
  featured?: boolean;
};

const LISTINGS: Listing[] = [
  {
    title: "Sportbootführerschein Binnen — Komplettkurs",
    provider: "Segelschule Bodensee",
    niche: "SBF Binnen",
    price: "€49",
    rating: 4.8,
    students: 1240,
    emoji: "⛵",
    featured: true,
  },
  {
    title: "Sportbootführerschein See — Theorie & Navigation",
    provider: "Nordsee Yachting Akademie",
    niche: "SBF See",
    price: "€59",
    rating: 4.7,
    students: 870,
    emoji: "🧭",
  },
  {
    title: "§34a Sachkundeprüfung — Sicherheitsgewerbe",
    provider: "IHK-Vorbereitung Berlin",
    niche: "Security",
    price: "€39",
    rating: 4.6,
    students: 2310,
    emoji: "🛡️",
  },
  {
    title: "PPL Theorie — Privatpilotenlizenz",
    provider: "Flugschule Rhein-Main",
    niche: "Aviation",
    price: "€129",
    rating: 4.9,
    students: 410,
    emoji: "✈️",
  },
  {
    title: "Friseur Gesellenprüfung — Theorie-Trainer",
    provider: "Friseur-Innung München",
    niche: "Trades",
    price: "€35",
    rating: 4.5,
    students: 560,
    emoji: "✂️",
  },
  {
    title: "Pflege-Anerkennung für ausländische Fachkräfte",
    provider: "Akademie für Gesundheitsberufe",
    niche: "Care",
    price: "€89",
    rating: 4.8,
    students: 1530,
    emoji: "🩺",
  },
];

export default function Marketplace() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-stone-900 text-lg">
            <Library size={22} className="text-sky-600" />
            Guildly
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
            <ArrowLeft size={16} /> Back to generator
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Marketplace</h1>
            <p className="text-stone-600 mt-1.5">
              Courses created on Guildly, sold by schools and trainers across regulated niches.
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            {["All", "Sailing", "Security", "Aviation", "Trades", "Care"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-3 py-1.5 ${
                  i === 0 ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {LISTINGS.map((l) => (
            <div
              key={l.title}
              className="rounded-2xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <div className="h-32 bg-gradient-to-br from-sky-100 to-emerald-50 flex items-center justify-center text-5xl relative">
                {l.emoji}
                {l.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-white/90 rounded-full px-2.5 py-1">
                    <BadgeCheck size={13} /> Featured
                  </span>
                )}
                <span className="absolute top-3 right-3 text-xs font-medium text-stone-600 bg-white/90 rounded-full px-2.5 py-1">
                  {l.niche}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-stone-900 leading-snug">{l.title}</h3>
                <p className="text-sm text-stone-500 mt-1">{l.provider}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-stone-500">
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" /> {l.rating}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users size={14} /> {l.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                  <span className="text-xl font-bold text-stone-900">{l.price}</span>
                  <button className="rounded-lg bg-sky-600 text-white px-4 py-2 text-sm font-medium hover:bg-sky-700">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone-400 mt-10">
          Mockup — marketplace listings illustrate the supply/demand side. Commission model: 80% to
          the creator, 20% platform fee (Stripe Connect in the full build).
        </p>
      </div>
    </main>
  );
}

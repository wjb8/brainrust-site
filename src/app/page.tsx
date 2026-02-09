import Image from "next/image";
import Link from "next/link";
import { FaBandcamp, FaFacebook, FaInstagram } from "react-icons/fa";
import NavigationHeader from "../components/NavigationHeader";
import FadeUp from "../components/FadeUp";

const members = [
  { name: "James Brown", role: "Guitar / Vocals" },
  { name: "Kyle Marchand", role: "Guitar / Vocals" },
  { name: "Nick Hildenbrand", role: "Percussion" },
  { name: "Matt Findlater", role: "Bass" },
];

const streamingLinks = [
  {
    label: "Bandcamp",
    href: "https://brainrustonline.bandcamp.com",
  },
  {
    label: "Tidal",
    href: "https://tidal.com/browse/album/361960951",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/ca/artist/brainrust/1741818338",
  },
];

const socialLinks = [
  {
    href: "https://brainrustonline.bandcamp.com",
    icon: FaBandcamp,
    label: "Bandcamp",
  },
  {
    href: "https://www.facebook.com/people/Brainrust/61558737663532/",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/brainrust.online",
    icon: FaInstagram,
    label: "Instagram",
  },
];

export default function Home() {
  return (
    <>
      <NavigationHeader />

      <main>
        {/* ── Hero ── */}
        <section className="pt-14">
          {/* Full-bleed wordmark */}
          <div className="w-full mt-16 sm:mt-24 px-4 sm:px-0">
            <Image
              src="/brainrust-wordmark.png"
              alt="Brainrust"
              width={1920}
              height={300}
              className="w-full h-auto max-w-5xl mx-auto mix-blend-lighten"
              priority
            />
          </div>
          <div className="max-w-2xl mx-auto text-center mt-8 sm:mt-12 px-6">
            <a
              href="mailto:brainrustmusic@gmail.com"
              className="inline-block mt-6 px-6 py-2.5 text-xs tracking-[0.15em] uppercase border border-neutral-600 text-fg hover:bg-fg hover:text-bg transition-colors"
            >
              Booking &amp; Contact
            </a>
          </div>
          <div className="mb-12 sm:mb-20" />
        </section>

        {/* ── Video ── */}
        <section id="video" className="scroll-mt-20 py-24 px-6">
          <FadeUp className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div>
                <div className="aspect-video w-full bg-neutral-900">
                  <iframe
                    src="https://www.youtube.com/embed/FYTdapkB2xE"
                    title="Brainrust — Ordinary (Official Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <p className="mt-4 text-sm text-muted">
                  &ldquo;Ordinary&rdquo; &mdash; from{" "}
                  <em>Indistinct Chatter</em> (2024)
                </p>
              </div>
              {/* Add additional videos here */}
            </div>
          </FadeUp>
        </section>

        {/* ── Music ── */}
        <section id="music" className="scroll-mt-20 py-24 px-6">
          <FadeUp className="max-w-4xl mx-auto">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-12">
              Music
            </h2>

            <div className="flex flex-col sm:flex-row gap-8">
              {/* Album art + details */}
              <div className="sm:w-64 flex-shrink-0">
                <Image
                  src="/indistinct-chatter-cover.png"
                  alt="Indistinct Chatter — album cover"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-fg">
                    Indistinct Chatter
                  </h3>
                  <p className="text-sm text-muted mt-1">2024</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {streamingLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bandcamp embed */}
              <div className="flex-1 min-w-0">
                <iframe
                  title="Indistinct Chatter by brainrust on Bandcamp"
                  src="https://bandcamp.com/EmbeddedPlayer/album=1170355516/size=large/bgcol=0a0a0a/linkcol=e5e5e5/tracklist=true/artwork=none/transparent=true/"
                  seamless
                  className="border-0 w-full h-full min-h-[400px]"
                />
              </div>
            </div>
            {/* Booking CTA after music */}
            <div className="mt-16 pt-12 border-t border-neutral-800 text-center">
              <p className="text-sm text-muted">
                Interested in booking Brainrust?
              </p>
              <a
                href="mailto:brainrustmusic@gmail.com"
                className="inline-block mt-3 text-fg hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors text-sm"
              >
                brainrustmusic@gmail.com
              </a>
            </div>
          </FadeUp>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="scroll-mt-20 py-24 px-6 border-t border-neutral-800"
        >
          <FadeUp className="max-w-2xl mx-auto">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-12">
              About
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-neutral-300">
              <p>
                Brainrust is a four-piece from Windsor, Ontario, playing
                emotionally charged, guitar-driven rock. Their sound balances
                angular songwriting with dynamic melody and structure,
                constantly swinging between tension and release. You may enjoy
                Brainrust if you like Cloud Nothings, Polvo, Pile, or similar
                bands.
              </p>
              <p>
                The band released their debut album{" "}
                <em className="text-fg">Indistinct Chatter</em> in 2024,
                alongside a self-produced video for the single
                &ldquo;Ordinary,&rdquo; and is now performing a new set with a
                refreshed lineup.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── Band Photo + Members ── */}
        <section className="py-24 px-6 border-t border-neutral-800">
          <FadeUp className="max-w-3xl mx-auto">
            <Image
              src="/brainrust-promo.png"
              alt="Brainrust — band photo"
              width={1200}
              height={1200}
              className="w-full h-auto"
              style={{
                maskImage:
                  "radial-gradient(circle, black 50%, transparent 65%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 50%, transparent 65%)",
              }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {members.map((member) => (
                <div key={member.name}>
                  <p className="text-fg text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* ── Shows ── */}
        <section
          id="shows"
          className="scroll-mt-20 py-24 px-6 border-t border-neutral-800"
        >
          <FadeUp className="max-w-2xl mx-auto">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-12">
              Live
            </h2>

            <h3 className="text-sm tracking-[0.1em] uppercase text-fg mb-6">
              Upcoming
            </h3>
            <p className="text-sm text-muted italic mb-16">
              New dates coming soon. Get in touch for booking.
            </p>

            <h3 className="text-sm tracking-[0.1em] uppercase text-fg mb-6">
              Past
            </h3>
            <ul className="space-y-5 text-neutral-300">
              <li className="flex items-baseline gap-4">
                <span className="text-xs text-muted font-mono shrink-0 w-24">
                  Aug 16, 2025
                </span>
                <span className="text-sm">Dropped on Drouillard Festival</span>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="text-xs text-muted font-mono shrink-0 w-24">
                  Mar 28, 2025
                </span>
                <span className="text-sm">
                  w/ The World Is A Beautiful Place &amp; I Am No Longer Afraid
                  To Die
                </span>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="text-xs text-muted font-mono shrink-0 w-24">
                  Oct 19, 2024
                </span>
                <span className="text-sm">w/ Bonnie Trash, Burner</span>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="text-xs text-muted font-mono shrink-0 w-24">
                  Nov 10, 2023
                </span>
                <span className="text-sm">w/ Cory Hanson</span>
              </li>
            </ul>
          </FadeUp>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="scroll-mt-20 py-24 px-6 border-t border-neutral-800"
        >
          <FadeUp className="max-w-2xl mx-auto">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-12">
              Contact
            </h2>
            <p className="text-neutral-300 text-sm">
              For booking, press inquiries, and all other contact:
            </p>
            <a
              href="mailto:brainrustmusic@gmail.com"
              className="inline-block mt-4 text-fg hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-colors text-sm"
            >
              brainrustmusic@gmail.com
            </a>
          </FadeUp>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-xs text-muted">&copy; 2026 Brainrust</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted hover:text-fg transition-colors"
              >
                <link.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

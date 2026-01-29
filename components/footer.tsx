"use client";

import Link from "next/link";
import Image from "next/image";

// SVG icons for social media since some aren't in lucide-react
const MeetupIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.978 20.238c-.224.941-1.023 1.699-1.978 1.993-1.318.4-2.847.227-3.848-.587-1.025-.834-1.346-2.172-.906-3.331.44-1.16 1.561-1.906 2.802-1.906 1.583 0 2.889 1.168 3.117 2.675l.001.016c.105.602-.349 1.152-.952 1.156-.603.004-1.091-.482-.985-1.085.089-.507-.295-1.009-.81-1.114-.514-.105-1.009.295-1.114.81-.335 1.918-1.86 3.416-3.798 3.603-1.938.186-3.765-.973-4.391-2.833-.312-.933-.264-1.946.136-2.843.399-.898 1.126-1.618 2.036-1.999.227-.093.381-.307.381-.552 0-.244-.154-.459-.381-.552-.91-.381-1.637-1.101-2.036-1.999-.4-.897-.448-1.91-.136-2.843.626-1.86 2.453-3.019 4.391-2.833 1.938.187 3.463 1.685 3.798 3.603.105.515.6.915 1.114.81.515-.105.899-.607.81-1.114-.216-1.239-1.082-2.273-2.262-2.721-1.18-.447-2.515-.253-3.506.518-.99.772-1.479 2.018-1.286 3.259.193 1.241 1.012 2.289 2.147 2.772-.007.002-.013.005-.02.007-1.449.573-2.588 1.689-3.107 3.052-.519 1.362-.369 2.904.405 4.142.774 1.238 2.092 2.045 3.551 2.175 1.459.13 2.889-.43 3.872-1.514.115-.128.268-.2.428-.2.357 0 .646.289.646.646 0 .16-.058.314-.162.433l-.006.007c-1.001.817-2.53 1.164-3.848.764-.18-.055-.347-.128-.507-.206-.438.475-1.058.784-1.753.784-.841 0-1.604-.461-2.001-1.19-.398.729-1.161 1.19-2.002 1.19-.935 0-1.768-.571-2.12-1.438-.352.867-1.185 1.438-2.12 1.438-1.287 0-2.33-1.043-2.33-2.33 0-.239.036-.469.103-.685-.888.413-1.921.46-2.839.125-1.61-.597-2.568-2.274-2.241-3.964.185-.937.777-1.753 1.612-2.238.835-.485 1.835-.587 2.749-.282.914.305 1.654.965 2.019 1.799.108.253.179.518.211.788.393-.539.995-.903 1.686-.975 1.287-.128 2.458.776 2.627 2.063.01.076.016.153.016.231 0 .24-.037.471-.105.688.889-.412 1.923-.458 2.842-.12.906.332 1.629 1.016 1.974 1.87.346.855.271 1.825-.202 2.612-.473.787-1.264 1.33-2.166 1.479-.902.148-1.82-.138-2.517-.784-.697.646-1.615.932-2.517.784-.902-.149-1.693-.692-2.166-1.479-.473-.787-.548-1.757-.202-2.612.345-.854 1.068-1.538 1.974-1.87.919-.338 1.953-.292 2.842.12-.068-.217-.105-.448-.105-.688 0-.078.006-.155.016-.231.169-1.287 1.34-2.191 2.627-2.063.691.072 1.293.436 1.686.975.032-.27.103-.535.211-.788.365-.834 1.105-1.494 2.019-1.799.914-.305 1.914-.203 2.749.282.835.485 1.427 1.301 1.612 2.238.327 1.69-.631 3.367-2.241 3.964-.918.335-1.951.288-2.839-.125.067.216.103.446.103.685 0 1.287-1.043 2.33-2.33 2.33z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  {
    name: "Meetup",
    href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland",
    icon: MeetupIcon,
  },
  {
    name: "Bitcoin Lectures",
    href: "https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg",
    icon: YouTubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/bitcoin_ch",
    icon: XIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
              alt="Bitcoin Association Switzerland"
              width={120}
              height={120}
              className="h-auto w-[120px]"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-teal hover:text-teal transition-colors"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Back to Top & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
            <Link 
              href="#header" 
              className="hover:text-teal transition-colors"
            >
              Back to Top
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              href="/privacy" 
              className="hover:text-teal transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              href="/terms" 
              className="hover:text-teal transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
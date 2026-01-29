# Bitcoin Association Switzerland Website Clone

A pixel-perfect clone of the Bitcoin Association Switzerland website built with Next.js 15, TypeScript, Tailwind CSS, and React 19.

## Features

- **Modern Stack**: Next.js 15.5.9 with App Router, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with desktop navigation
- **Typekit Fonts**: Proxima Nova and Adobe Garamond Pro integration
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images and fast loading

## Tech Stack

- **Framework**: Next.js 15.5.9+
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui pattern + custom components
- **Icons**: Lucide React
- **Package Manager**: pnpm 9.15.4

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.15.4

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bitcoin-association-switzerland

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles & Typekit fonts
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Mission statement hero
│   ├── feature-cards.tsx    # About & Join cards
│   └── footer.tsx           # Footer with social links
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Design Specifications

### Colors
- Primary Teal: `#3D9991`
- Dark Text: `#1F1F1F`
- White Background: `#FFFFFF`

### Typography
- **Headings**: Adobe Garamond Pro (serif)
- **Body**: Proxima Nova (sans-serif)

### Navigation Structure
- Home
- News (with News & Archive subpages)
- Events (with multiple meetup locations)
- Membership (Private, Corporate, Our Corporate Members)
- Participate (Meetups & Events)
- About (About, Board, Finances, Statutes, Media Kit, Contact)

## License

MIT License - Feel free to use this template for your projects.

## Credits

Original website: [Bitcoin Association Switzerland](https://www.bitcoinassociation.ch/)
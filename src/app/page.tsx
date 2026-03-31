"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { Award, CheckCircle, Clock, Code, Layout, PenTool, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Vista Digital"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Swiss Precision in Every Pixel."
      description="Vista Digital crafts high-end web experiences for forward-thinking startups and SMBs. We blend Swiss design tradition with modern engineering excellence."
      tag="WEB DESIGN & DEVELOPMENT"
      buttons={[
        {
          text: "Start a Project",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-minimalist-high-end-architectural-abst-1774935333842-3f55bcd8.png?_wi=1",
          imageAlt: "Swiss Design Inspiration",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-minimalist-high-end-architectural-abst-1774935333842-3f55bcd8.png?_wi=2",
          imageAlt: "Minimalist Workspace",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-close-up-shot-of-a-professional-digita-1774935336409-4a0a3590.png?_wi=1",
          imageAlt: "Design System",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/conceptual-high-tech-development-workspa-1774935333741-d2a2d385.png?_wi=1",
          imageAlt: "Development",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/premium-branding-materials-business-card-1774935333994-98c0e9cf.png?_wi=1",
          imageAlt: "Branding",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by 50+ Swiss Startups"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Web Design",
          description: "Crafting intuitive interfaces rooted in Swiss design principles.",
          icon: Layout,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-close-up-shot-of-a-professional-digita-1774935336409-4a0a3590.png?_wi=2",
              imageAlt: "Design",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-close-up-shot-of-a-professional-digita-1774935336409-4a0a3590.png?_wi=3",
              imageAlt: "Design",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-minimalist-high-end-architectural-abst-1774935333842-3f55bcd8.png?_wi=3",
          imageAlt: "A minimalist, high-end architectural abstract photo in Swiss design style. Featuring crisp lines, mo",
        },
        {
          title: "Development",
          description: "High-performance digital products engineered for long-term growth.",
          icon: Code,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/conceptual-high-tech-development-workspa-1774935333741-d2a2d385.png?_wi=2",
              imageAlt: "Dev",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/conceptual-high-tech-development-workspa-1774935333741-d2a2d385.png?_wi=3",
              imageAlt: "Dev",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/a-close-up-shot-of-a-professional-digita-1774935336409-4a0a3590.png?_wi=4",
          imageAlt: "A close-up shot of a professional digital design process, focused on typography and grid systems. Cl",
        },
        {
          title: "Branding",
          description: "Identity systems designed to resonate and endure in a digital world.",
          icon: PenTool,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/premium-branding-materials-business-card-1774935333994-98c0e9cf.png?_wi=2",
              imageAlt: "Brand",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/premium-branding-materials-business-card-1774935333994-98c0e9cf.png?_wi=3",
              imageAlt: "Brand",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/conceptual-high-tech-development-workspa-1774935333741-d2a2d385.png?_wi=4",
          imageAlt: "Conceptual high-tech development workspace with a clean laptop screen showing elegant code. Minimali",
        },
      ]}
      title="Our Services"
      description="Tailored digital solutions built on clarity, functionality, and performance."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Swiss Fintech Platform",
          price: "Identity & UI/UX",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/premium-website-ui-showcase-for-a-swiss--1774935336225-2b72555a.png",
        },
        {
          id: "2",
          name: "Luxury Home Concept",
          price: "Web Development",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/elegant-website-design-for-a-luxury-prod-1774935334055-d8d7ae3c.png",
        },
        {
          id: "3",
          name: "Cloud Analytics SaaS",
          price: "Branding & Web",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BgBmVbQsEIWC0IJRSwiOFJGu9c/professional-tech-platform-dashboard-cle-1774935334229-ca352e45.png",
        },
      ]}
      title="Selected Work"
      description="A curated collection of digital transformations."
    />
  </div>

  <div id="about" data-section="about">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "Crafted",
          description: "In-house design & dev.",
          icon: CheckCircle,
        },
        {
          id: "m2",
          value: "50+",
          title: "Projects",
          description: "Across DACH region.",
          icon: Award,
        },
        {
          id: "m3",
          value: "12",
          title: "Years",
          description: "Cumulative agency experience.",
          icon: Clock,
        },
      ]}
      title="Craftsmanship at Scale"
      description="We believe digital experiences should be as robust as a Swiss watch."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to discuss your digital future? We are available for select partnerships."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@vista.ch",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Imprint",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Vista Digital"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

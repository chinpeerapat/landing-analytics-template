import Link from "next/link";
import { Github, Twitter } from "lucide-react";

// Define types for FooterLink props
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

// FooterLink Component
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  </li>
);

// Define types for FooterSection props
interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

// FooterSection Component
const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
      {title}
    </h3>
    <ul className="mt-4 space-y-4">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">WorkWhales</h3>
            <p className="text-sm text-gray-600">
              Making the world a better place through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Visit our Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Visit our GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Sections */}
          <FooterSection
            title="Product"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Testimonials", href: "#testimonials" },
            ]}
          />
          <FooterSection
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Careers", href: "/careers" },
            ]}
          />
          <FooterSection
            title="Legal"
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} MIT, workwhales.
          </p>
        </div>
      </div>
    </footer>
  );
}

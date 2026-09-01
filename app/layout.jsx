import './globals.css';

import HeaderNavigation from '@/components/organisms/HeaderNavigation';

export const metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description:
    'A mobile-first digital showcase of Pangasinan heritage and tourism.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Skip navigation */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {/* Site navigation */}
        <HeaderNavigation />

        {/* Main page content */}
        <div className="site-content">
          {children}
        </div>

        {/* Footer */}
        <footer
          className="footer"
          aria-label="Site footer"
        >
          <div className="container footer-inner">

            <strong>
              Pangasinan Heritage Digital Showcase
            </strong>

            <span>
              Culture • History • Tourism
            </span>

          </div>
        </footer>

      </body>
    </html>
  );
}
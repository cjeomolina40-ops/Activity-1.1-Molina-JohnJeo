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
        <HeaderNavigation />
        {children}
        <footer className="footer">
          <div className="container">
            <strong>Pangasinan Heritage Digital Showcase</strong>
            <span>Culture • History • Tourism</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-indigo-950 text-gold">
        
        <main className="min-h-screen">
          
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
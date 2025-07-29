import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
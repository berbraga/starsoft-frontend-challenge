import localFont from "next/font/local";
import './globals.css';
import Header from '../components/layout/Header';  // Importe o Header
import Footer from '../components/layout/Footer';  // Importe o Footer


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
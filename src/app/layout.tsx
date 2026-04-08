
import "./globals.css";
import Footer from './../Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../Components/Navbar/Navbar';
import PopupForm from './../Components/PopupForm/PopupForm';
import WhatsApp from './../Components/WhatsApp/WhatsApp';
import Topbar from './../Components/Topbar/Topbar';
import Script from "next/script";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17917921555"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17917921555');
          `}
        </Script>
      </head>
      <body >
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <PopupForm />
        <WhatsApp />
      </body>
    </html>
  );
}

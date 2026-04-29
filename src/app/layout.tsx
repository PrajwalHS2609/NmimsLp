
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
         {/* Google Ads Global Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17917921555"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17917921555');

            // Conversion function
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (url) {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17917921555/RO6BCOqe4PEbEJOS999C',
                'event_callback': callback
              });
              return false;
            }
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

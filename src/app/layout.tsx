
import "./globals.css";
import Footer from './../Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../Components/Navbar/Navbar';
import PopupForm from './../Components/PopupForm/PopupForm';
import WhatsApp from './../Components/WhatsApp/WhatsApp';
import Topbar from './../Components/Topbar/Topbar';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon.ico" />

      <body >
        <Topbar/>
        <Navbar />
        {children}
        <Footer />
        <PopupForm />
        <WhatsApp />
      </body>
    </html>
  );
}

import Navbar from "./component/navbar";
import Main from "./component/main";
import "./globals.css";
import Footer from "./component/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-200">
        <Navbar/>
        {children}
        <Main/>
        <Footer/>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/footer";
import MainLayout from "@/app/mainlayout";
import "@/style/app.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Body from "../components/Body"
import Footer from "../components/footer"
import Nav from "../components/Nav"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SGC",
  description: "Sistema Gerenciador de Clientes",
};


export default function RootLayout({children}) {

  return (
    <html lang="en">
    <Body>
    <Nav></Nav> 
    <div className=" flex flex-col h-full w-full">
    <Header props={"Seja Bem-Vindo !"}></Header>
    {children}
    <Footer></Footer>
    </div>
    </Body>
    </html>
  );
}

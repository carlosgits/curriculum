"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { Providers } from "./provider";
import {Provider} from "react-redux"
import { store } from "./store";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </head>
      <body className={inter.className} >
      <Provider store={store}>
        <main className="w-[375px] h-[667px]  bg-sky-blue relative mx-auto || md:w-[100vw] md:h-[600px]  md:top-[20vh] p-[15px]">
          <div  className="bg-[url('/media/h-banner.svg')] relative left-[-15px] right-[auto] top-[-15px] mr-[20px] md:bg-[url('/media/md-banner.svg')] bg-cover bg-no-repeat || md:w-[278px] md:h-[568px] w-[375px] h-[172px] md:relative md:bg-center rounded-[10px] md:top-[5px] " ></div>
          {/** Nav is for the numbers in theheaders being in all of my pages*/}
          <Nav />
          {/** Providers is for the NextUi library being in all of my components */}
          <Providers>
            
            {children}
           
            </Providers>
          {/** footer is for the go back and next button being in all of my pages*/}
          <Footer />
        </main>
        </Provider> 
      </body>
    </html>
  );
}

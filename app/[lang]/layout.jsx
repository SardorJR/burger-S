// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Inter } from "next/font/google"; // Если хотите использовать Inter, просто добавьте
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// export async function generateStaticParams() {
//   return [{ lang: 'en' }, { lang: 'ru' }]
// }
// export default function RootLayout({

//   children,

// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap" 
//           rel="stylesheet" 
//         />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import React from 'react';
import "./globals.css";
import { getDictionary } from './dictionalies';
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}
async function RootLayout({ children, params }) {
  const { lang } = params;
  const translate = await getDictionary(lang);
  console.log(translate.products.cart);
  return (
    <html lang={params}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="circle-box"></div>
        <div className="wrap">
          <div className="icons">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="box">
            <div className="left">
              <img src="/images/g10.png" alt="" />
            </div>
            <div className="right">
              <span className="white" >{translate.header.title} <br />
                <span className="yellow">{translate.header.titleTwo}</span>
              </span>
              <h4>{translate.header.subtitle}</h4>
            </div>
          </div>
        </div>
        {children}
        <footer>
          <div className="box-foot">
            <div className="left-foot">
              <div className="item-foot">
                <img src="/images/Group 7.png" alt="" />
                <div className="loc">
                  <p>© YouMeal, 2022</p>
                  <p>Design: Anastasia Ilina</p>
                </div>
              </div>
            </div>
            <div className="right-foot">
              <div className="item">
                <span>{translate.footer.order}</span>
                <div className="tel-number">
                  <img src="/images/Vector.png" alt="" />
                  <p>+7(930)833-38-11</p>
                </div>
              </div>
              <div className="item">
                <span>{translate.footer.site}</span>
                <div className="tel-number">
                  <img src="/images/entypo-social_vk-with-circle.png" alt="" />
                  <img src="/images/bi_telegram.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;


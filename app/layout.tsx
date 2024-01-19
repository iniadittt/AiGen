"use client";

import "./globals.css";
import { AuthContextProvider } from "@/app/context/AuthContext";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>AiGen - Saham Prediction</title>
      </head>
      <body className='font-google-sans'>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}

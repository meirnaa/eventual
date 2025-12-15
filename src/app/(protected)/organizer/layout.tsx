import HeaderOrganizer from "@/components/shared/HeaderOrganizer";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex h-screen flex-col">
        <HeaderOrganizer />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
  );
}
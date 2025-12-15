import HeaderUser from "@/components/shared/HeaderUser";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex h-screen flex-col">
        <HeaderUser />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
  );
}
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex-center min-h-screen w-full bg-branco bg-dotted-pattern bg-cover bg-fixed bg-center">
        {children}
      </div>
  );
}
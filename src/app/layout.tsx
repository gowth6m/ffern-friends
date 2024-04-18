import "@/styles/globals.css";
import { Metadata } from "next/types";
import AppConfig from "@/configs/app-config";
import NavWrapper from "@/components/navigation/nav-wrapper";
import Footer from "@/components/footer/footer";
import Providers from "@/context/providers";

export const metadata: Metadata = {
  title: AppConfig.metadata.title,
  description: AppConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <NavWrapper>
            {children}
            <Footer />
          </NavWrapper>
        </Providers>
      </body>
    </html>
  );
}

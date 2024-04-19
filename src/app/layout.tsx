import "@/styles/globals.css";
import { Metadata } from "next/types";
import Providers from "@/context/providers";
import AppConfig from "@/configs/app-config";
import PageWrapper from "@/components/page/page-wrapper";

export const metadata: Metadata = {
  title: AppConfig.metadata.title,
  description: AppConfig.metadata.description,
  icons: {
    icon: "/favicon.png",
  },
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
          <PageWrapper>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  );
}

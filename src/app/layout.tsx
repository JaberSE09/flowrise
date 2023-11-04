import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import type { Metadata, ResolvingMetadata } from 'next'
import { createClient } from "@/prismicio";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});


export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const page =  await client.getSingle("settings")
  
  return {
    title: page.data.site_title || "Flowrise",
    description: page.data.meta_desc || "flowrise is the best app",
   openGraph: {
    images: [page.data.og_image.url || ""]
   }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

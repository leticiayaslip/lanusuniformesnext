import { settings } from "@/settings/settings";
// import Script from "next/script";
import "normalize.css";
import "@/styles/globals.scss";

import {
  frankRuhl,
  josefinSans,
  poppins,
  openSans,
  montserrat,
  manrope,
  averiaSerif,
  overpass,
} from "@/lib/fonts";

import type { Metadata } from "next";

import Script from "next/script";

import Topo from "@/partials/Topo";
import Rodape from "@/partials/Rodape";
import RodapeMobile from "@/partials/RodapeMobile";
import Form from "@/components/Home/Form";
import ScrollToTop from "@/components/ui/ScrollToTop";

const { title, description, keywords, canonical, openGraph, robots } = settings;

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title, // Usando o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    url: openGraph.url,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
    siteName: openGraph.siteName,
    locale: openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: openGraph.images,
  },
  robots: robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="RmKSU3BCRv1OW6fFNwPDiroQ3mhCQBlYthB1xADT9y8"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-n8hh8ljn"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                      'gtm.start': new Date().getTime(),
                      event: 'gtm.js'
                  });
                  var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != 'dataLayer' ? '&l=' + l : '';
                  j.async = true;
                  j.src =
                      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-N8HH8LJN');
            `,
          }}
        />

        {/* Google Tag Manager - Marketing do Cliente */}
        <Script
          id="gtm-p4b7b6tr"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                      'gtm.start': new Date().getTime(),
                      event: 'gtm.js'
                  });
                  var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != 'dataLayer' ? '&l=' + l : '';
                  j.async = true;
                  j.src =
                      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-P4B7B6TR');
            `,
          }}
        />
      </head>
      <body
        className={`${frankRuhl.variable} ${poppins.variable} ${josefinSans.variable} ${openSans.variable} ${montserrat.variable} ${manrope.variable} ${averiaSerif.variable} ${overpass.variable}`}
      >
        {/* Google Tag Manager - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8HH8LJN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager - Marketing do Cliente - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4B7B6TR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8HH8LJN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Topo />
        {children}
        <Form />
        <Rodape />
        <RodapeMobile />

        <ScrollToTop />
      </body>
    </html>
  );
}

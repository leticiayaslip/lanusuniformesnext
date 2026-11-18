import CategoriasUniformes from "@/components/Categorias/CategoriasUniformes";

import Script from "next/script";

export default function Kimonos() {
  return (
    <>
      <CategoriasUniformes />

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-710H4F84D2"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-uniformes"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-710H4F84D2');
          `,
        }}
      />
    </>
  );
}

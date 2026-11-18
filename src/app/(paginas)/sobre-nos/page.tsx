import BannerSobre from "@/components/SobreNos/BannerSobre";
import QuemSomos from "@/components/SobreNos/QuemSomos";

import Script from "next/script";

export default function SobreNos() {
  return (
    <>
      <BannerSobre />
      <QuemSomos />

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-710H4F84D2"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-sobre-nos"
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

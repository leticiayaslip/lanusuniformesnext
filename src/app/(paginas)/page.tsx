import Banner from "@/components/Home/Banner";
import First from "@/components/Home/First";
import Produtos from "@/components/Home/Produtos";
import Second from "@/components/Home/Second";
import Third from "@/components/Home/Third";
import PopUp from "@/components/PopUp/Popup";
import "@/styles/index.scss";

import Script from "next/script";

export default function Home() {
  return (
    <>
      <PopUp />
      <Banner />
      <First />
      <Second />
      <Third />
      <Produtos />

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-710H4F84D2"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-home"
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

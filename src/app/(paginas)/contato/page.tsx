import ContatoForm from "@/components/ContactForm/ContactForm";
import TitlePage from "@/components/TitlePage";
import { settings } from "@/settings/settings";
import "@/styles/index.scss";
import { Metadata } from "next";
import { FaCalendar, FaRegClock } from "react-icons/fa";
import Image from "next/image";

import Script from "next/script";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const {
  siteName,
  numeroTelefone,
  numeroTelefone2,
  ddd,
  email,
  whatsappApi,
  numeroWhatsapp,
} = settings;
const { rua, numero, cidade, estado, cep, bairro, mapaEmbed } =
  settings.endereco;

const title = "Entre em Contato Conosco";
const description =
  "Fale com a Lanus Uniformes. Tire dúvidas, solicite orçamentos e conheça nossas soluções em uniformes profissionais, corporativos e personalizados.";
const keywords =
  "Lanus Uniformes contato, falar com Lanus Uniformes, solicitar orçamento uniformes, atendimento Lanus, telefone Lanus Uniformes, email Lanus";
const canonical = "contato";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`, // Undo o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description: description,
    images: [
      {
        url: "/logo.webp", // Imagem para Open Graph
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    type: "website",
  },
};

export default function Contato() {
  return (
    <>
      <TitlePage title={title} />
      <div className="container-contato">
        <div className="primeiro">
          <div className="box-title">
            <h2 className="title">Saiba como podemos te ajudar</h2>
          </div>
          <div className="conteiner-imgs">
            <Image
              alt="Imagem"
              src="/kimonos/kimono3.webp"
              width={1000}
              height={600}
            />
          </div>
        </div>

        <div className="base">
          <div className="box-details">
            <p className="description">Deixe Sua Mensagem</p>
            <div className="infoforms">
              <ContatoForm variation="contatoForm" />
            </div>
          </div>
          <div className="mapa-contato">
            <iframe
              src={mapaEmbed}
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="conteinerInfo">
          <div className="contact">
            <div className="contact-info">
              <p className="tituloContato">Endereço</p>
              <a href="" target="_blank" rel="noreferrer" className="endereco">
                {`${rua}, ${numero} ${bairro} - ${cidade} / ${estado}, CEP: ${cep}`}
              </a>
            </div>

            <div className="contact-info">
              <p className="tituloContato">Contato</p>
              <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                <IoMdMail /> {`${email}`}
              </a>
              <a
                href={`tel:0${ddd}${numeroTelefone}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone /> {`(${ddd}) ${numeroTelefone}`}
              </a>
              <a
                href={`tel:0${ddd}${numeroTelefone2}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone /> {`(${ddd}) ${numeroTelefone2}`}
              </a>
              <a
                href={`(${ddd})  ${whatsappApi}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                {`(${ddd})  ${numeroWhatsapp}`}
              </a>
            </div>

            <div className="contact-info">
              <p className="tituloContato">Atendimento</p>
              <p>
                <FaCalendar /> Dias: de Seg à Sexta
              </p>
              <p>
                <FaRegClock /> Horário: das 08h00 às 18h00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-710H4F84D2"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-contato"
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

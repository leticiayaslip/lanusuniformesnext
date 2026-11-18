import { SiteSettings } from "@/types";

const siteName = "Lanus Uniformes";
const title = `Início | ${siteName}`;
const description = "Uniformes profissionais de qualidade com durabilidade, conforto e elegância. Lanus Uniformes: soluções sob medida para sua empresa.";
const keywords = "uniformes profissionais, uniformes personalizados, uniformes operacionais, uniformes corporativos, empresa de uniformes, Lanus Uniformes";
export const url = "https://www.lanusuniformes.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "2546-2179",
  numeroTelefone2: "3467-0439",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511980679298&text=Olá!%20Vim%20do%20Google%20e%20gostaria%20de%20mais%20informações%20e%20Orçamento.",
  numeroWhatsapp: "98067-9298",
  // email: "wesley@yaslip.com.br",
  // emailDestinatario: "wesley@yaslip.com.br",
  email: "contato@lanusuniformes.com.br",
  emailDestinatario: "contato@lanusuniformes.com.br",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/oe6jiTyecjUnGg3d8",
    rua: "Estrada de Mogi das Cruzes",
    numero: "1946",
    bairro: "Vila Rio Branco",
    cidade: "São Paulo",
    estado: "SP",
    cep: "03890-100",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4207367444264!2d-46.4820111!3d-23.5173652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60de9ab512ef%3A0xbec716afaf201ee0!2sEstr.%20de%20Mogi%20das%20Cruzes%2C%201946%20-%20Vila%20Rio%20Branco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003890-100!5e0!3m2!1sen!2sbr!4v1751553329397!5m2!1sen!2sbr",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/logo.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};

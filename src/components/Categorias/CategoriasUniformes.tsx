"use client";

import { settings } from "@/settings/settings";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "./CategoriasPage.module.scss";

type Categoria = {
  titulo: string;
  imagem: string;
  descricao: string[];
  link: string;
};

const { whatsappApi } = settings;

export default function CategoriasPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria | null>(null);

  const categorias = {
    gastronomia: {
      titulo: "Uniformes de Gastronomia",
      imagem: "/uniformes/gastronomia.webp",
      descricao: [
        "Nossos uniformes para a área de gastronomia foram desenvolvidos pensando em quem atua nos bastidores e na linha de frente dos serviços alimentícios, como atendentes, confeiteiros, garçons, copeiras e auxiliares. As peças aliam conforto e funcionalidade para garantir agilidade durante toda a jornada de trabalho",
        "  Com tecidos leves, resistentes e fáceis de lavar, os uniformes mantêm uma aparência impecável mesmo após várias lavagens. Modelagens ergonômicas proporcionam liberdade de movimento, enquanto o acabamento reforçado garante durabilidade e segurança em ambientes com alta demanda.",
        "Além da qualidade, oferecemos opções de personalização com bordados ou estampas que reforçam a identidade visual do seu estabelecimento, valorizando ainda mais sua equipe. Conte com um uniforme que transmite profissionalismo e organização em cada detalhe.",
      ],
      link: whatsappApi,
    },

    social: {
      titulo: "Uniformes Sociais",
      imagem: "/uniformes/social.webp",
      descricao: [
        "Os uniformes sociais são a escolha ideal para empresas que valorizam a imagem profissional da equipe. Desenvolvidos com tecidos de alta qualidade, proporcionam elegância, conforto e caimento impecável ao longo de todo o expediente.",
        "Nossas peças incluem camisas, calças, saias, coletes e blazers, todos com modelagem ajustada ao corpo e pensados para manter a boa apresentação mesmo em jornadas longas. São resistentes, respiráveis e de fácil manutenção, ideais para o dia a dia corporativo.",
        "Além da sofisticação, oferecemos personalização com bordados ou etiquetas discretas, reforçando a identidade da sua empresa com discrição e bom gosto. Uniformes que unem aparência profissional, praticidade e conforto para sua equipe se destacar com confiança.",
      ],
      link: whatsappApi,
    },

    operacional: {
      titulo: "Uniformes Operacionais",
      imagem: "/uniformes/operacional.webp",
      descricao: [
        "Os uniformes operacionais são desenvolvidos para garantir segurança, visibilidade e resistência em situações de trabalho exigentes, como serviços de resgate, manutenção de vias, obras, tráfego e atendimento em áreas de risco. São projetados para enfrentar sol, chuva, poeira e outras condições extremas com eficiência.",
        "Fabricados com tecidos robustos e de alta durabilidade, nossos uniformes oferecem conforto térmico, secagem rápida e proteção contra abrasão. Modelagens funcionais, com bolsos estratégicos e faixas refletivas, garantem mobilidade e visibilidade durante o dia e à noite.",
        "Disponíveis em diversos modelos e cores conforme as normas da área, os uniformes operacionais também podem ser personalizados com logotipos, nomes e faixas de identificação. Equipamentos que valorizam a segurança da equipe e reforçam a imagem de profissionalismo em campo.",
      ],
      link: whatsappApi,
    },

    hospitalar: {
      titulo: "Uniformes Hospitalares",
      imagem: "/uniformes/hospitalar.webp",
      descricao: [
        "Os uniformes hospitalares são essenciais para garantir conforto, higiene e credibilidade em ambientes clínicos e hospitalares. Desenvolvidos para profissionais que atuam diretamente no cuidado com os pacientes ou nos bastidores da rotina hospitalar, nossas peças unem praticidade e apresentação profissional.",
        "Confeccionados com tecidos leves, respiráveis e fáceis de lavar, os uniformes resistem a rotinas intensas e múltiplas lavagens sem perder a qualidade. A modelagem anatômica proporciona liberdade de movimento, enquanto os acabamentos reforçados garantem durabilidade e segurança no dia a dia.",
        "Disponibilizamos jalecos, scrubs, pijamas hospitalares, aventais e peças personalizadas com bordados ou logotipos, de acordo com a identidade visual da instituição. Uniformes pensados para promover bem-estar, confiança e profissionalismo em cada atendimento.",
      ],
      link: whatsappApi,
    },

    seguranca: {
      titulo: "Uniformes de Segurança",
      imagem: "/uniformes/seguranca.webp",
      descricao: [
        "Os uniformes de segurança são projetados para transmitir autoridade, confiança e profissionalismo. Além da aparência imponente, eles oferecem conforto e mobilidade para que os profissionais possam desempenhar suas funções com agilidade e segurança em diferentes ambientes.",
        "Fabricados com tecidos resistentes, nossos uniformes contam com reforços em áreas de maior desgaste, ótimo caimento e opções com faixas refletivas, ideais para uso em áreas externas ou com pouca iluminação. Os bolsos estratégicos facilitam o acesso rápido a equipamentos e objetos essenciais no dia a dia.",
        "Oferecemos personalização com logotipos, crachás e faixas de identificação, de acordo com a necessidade de cada empresa ou operação. Seja para controle de acesso, segurança patrimonial ou vigilância em eventos, nossos uniformes garantem presença, durabilidade e funcionalidade em todas as situações.",
      ],
      link: whatsappApi,
    },

    chef: {
      titulo: "Uniformes de Chef",
      imagem: "/uniformes/chef.webp",
      descricao: ["Os uniformes de chef de cozinha são mais do que vestimentas — são símbolos de autoridade, técnica e tradição dentro da cozinha. Desenvolvidos para unir elegância e funcionalidade, eles refletem o profissionalismo e o cuidado em cada prato preparado.",
        "Com tecidos leves, resistentes ao calor e de fácil higienização, nossos jalecos, dólmãs, aventais e calças oferecem conforto durante longas jornadas de trabalho. Modelagens ergonômicas e detalhes como botões duplos, gola mandarim e bolsos estratégicos garantem praticidade e sofisticação.",
        "Disponíveis em diversas cores e estilos, nossos uniformes podem ser personalizados com bordados e logotipos, reforçando a identidade do restaurante ou do chef. Ideal para cozinhas profissionais, buffets e eventos gastronômicos que exigem presença e padrão elevado.",
      ],
      link: whatsappApi,
    },

    socorrista: {
      titulo: "Uniformes de Socorrista",
      imagem: "/uniformes/socorrista.webp",
      descricao: ["Os uniformes para socorristas são desenvolvidos para oferecer resistência, visibilidade e mobilidade em situações críticas. Projetados para quem atua no atendimento pré-hospitalar, salvamento e primeiros socorros, garantem conforto e segurança em ambientes de alto risco e operação intensa.",
        "Com tecidos duráveis, respiráveis e de secagem rápida, nossos uniformes incluem faixas refletivas, bolsos estratégicos e modelagem funcional que permite agilidade em todos os movimentos. Eles suportam diferentes condições climáticas e mantêm a integridade mesmo após uso intenso e lavagens frequentes.",
        "Disponíveis em diferentes cores conforme normas da área, os uniformes podem ser personalizados com logotipos, cargos e identificações visuais. São ideais para equipes de ambulância, brigadas de emergência, resgate em rodovias e eventos, garantindo visibilidade, desempenho e profissionalismo em campo.",
      ],
      link: whatsappApi,
    },

    porteiro: {
      titulo: "Uniformes de Porteiro",
      imagem: "/uniformes/porteiro.webp",
      descricao: ["Os uniformes para porteiros são desenvolvidos para transmitir seriedade, organização e confiança logo no primeiro contato com visitantes e moradores. Com aparência profissional e acabamento refinado, eles contribuem diretamente para a imagem da empresa ou condomínio.",
        "Fabricados com tecidos confortáveis, resistentes e de fácil manutenção, nossos uniformes garantem boa apresentação durante toda a jornada de trabalho. As modelagens são pensadas para longos períodos em pé ou sentado, oferecendo mobilidade e praticidade no desempenho das funções.",
        "Disponíveis em versões sociais ou operacionais, os uniformes podem ser personalizados com logotipo, nome da empresa ou crachá bordado. Seja em ambientes residenciais, comerciais ou corporativos, eles reforçam a postura profissional e a credibilidade de quem está na linha de frente da segurança e recepção.",
      ],
      link: whatsappApi,
    },
  };

  return (
    <>
      {categoriaSelecionada && (
        <div
          className={styles.modalOverlay}
          onClick={() => setCategoriaSelecionada(null)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.fecharModal}
              type="button"
              onClick={() => setCategoriaSelecionada(null)}
              aria-label="Fechar modal"
            >
              <IoClose />
            </button>

            <div className={styles.modalImagem}>
              <Image
                src={categoriaSelecionada.imagem}
                alt={categoriaSelecionada.titulo}
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>

            <div className={styles.modalConteudo}>
              <h2>{categoriaSelecionada.titulo}</h2>

              {categoriaSelecionada.descricao.map((texto, index) => (
                <p key={index}>{texto}</p>
              ))}

              <a href={categoriaSelecionada.link}>
                <FaCircle /> Saiba mais
              </a>
            </div>
          </div>
        </div>
      )}

      <div className={styles.catalogo}>
        <div className={styles.galeria}>
          <div
            className={`${styles.card} ${styles.gastronomia}`}
            onClick={() => setCategoriaSelecionada(categorias.gastronomia)}
          >
            <h2>Gastronomia</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.social}`}
            onClick={() => setCategoriaSelecionada(categorias.social)}
          >
            <h2>Social</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.operacional}`}
            onClick={() => setCategoriaSelecionada(categorias.operacional)}
          >
            <h2>Operacional</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.hospitalar}`}
            onClick={() => setCategoriaSelecionada(categorias.hospitalar)}
          >
            <h2>Hospitalar</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.seguranca}`}
            onClick={() => setCategoriaSelecionada(categorias.seguranca)}
          >
            <h2>Segurança</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.chef}`}
            onClick={() => setCategoriaSelecionada(categorias.chef)}
          >
            <h2>Chef</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.socorrista}`}
            onClick={() => setCategoriaSelecionada(categorias.socorrista)}
          >
            <h2>Socorrista</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.porteiro}`}
            onClick={() => setCategoriaSelecionada(categorias.porteiro)}
          >
            <h2>Porteiro</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

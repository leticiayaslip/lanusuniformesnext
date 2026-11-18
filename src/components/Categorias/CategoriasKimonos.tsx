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
    jiuJitsu: {
      titulo: "Kimonos de Jiu-Jitsu",
      imagem: "/produtos/kimono-jiu.webp",
      descricao: [
        "Desenvolvidos para suportar os treinos mais intensos e competições de alto nível, nossos kimonos oferecem conforto, mobilidade e durabilidade em cada costura",
        "Modelagens ajustadas ao corpo, tecidos resistentes e reforços nas áreas de maior impacto garantem liberdade de movimento sem abrir mão da proteção.",
        "Disponíveis em diferentes cores, tamanhos e cortes — ideal para iniciantes, faixas pretas e atletas profissionais.",
      ],
      link: whatsappApi,
    },

    judo: {
      titulo: "Kimonos de Judô",
      imagem: "/kimonos/kimono-jiu3.webp",
      descricao: [
        "Fabricados com tecido trançado de alta resistência, nossos kimonos oferecem durabilidade, conforto e segurança nos treinos e competições.",
        "Com cortes amplos e reforços nas áreas de maior tração, garantem liberdade de movimento sem comprometer a estrutura.",
        "Disponíveis em modelos para iniciantes, praticantes avançados e competidores — todos com acabamento técnico e excelente caimento.",
      ],
      link: whatsappApi,
    },

    karate: {
      titulo: "Kimonos de Karatê",
      imagem: "/kimonos/kimono-karate3.webp",
      descricao: [
        "Os kimonos de Karatê foram desenvolvidos para oferecer liberdade de movimento e conforto durante cada treino e combate. Com tecido leve e resistente, eles se ajustam ao corpo sem limitar seus golpes e deslocamentos.",
        "Disponíveis em diversos tamanhos e modelos, nossos kimonos são ideais tanto para iniciantes quanto para atletas experientes. Costuras reforçadas e modelagem estratégica garantem durabilidade mesmo em treinos intensos.",
        "Escolher o kimono certo é parte essencial da sua jornada no Karatê. Nossa equipe está pronta para te ajudar a encontrar o modelo perfeito com o melhor custo-benefício do mercado.",
      ],
      link: whatsappApi,
    },

    taekwondo: {
      titulo: "Uniformes de Taekwondo",
      imagem: "/produtos/kimono-karate.webp",
      descricao: [
        "Leves, flexíveis e respiráveis, nossos kimonos são ideais para golpes rápidos, chutes altos e movimentos ágeis",
        "Confeccionados com tecido de alta qualidade e corte anatômico, proporcionam conforto e liberdade durante treinos e competições.",
        "Disponíveis em modelos tradicionais e modernos, para atletas iniciantes e avançados",
      ],
      link: whatsappApi,
    },

    infantis: {
      titulo: "Kimonos Infantis",
      imagem: "/produtos/kimono-infantil.webp",
      descricao: [
        " Confortáveis, resistentes e seguros, nossos kimonos infantis são ideais para crianças em fase de iniciação nas artes marciais.",
        "Modelagens pensadas para o corpo infantil, com tecidos leves, reforços em pontos estratégicos e ótimo ajuste.",
        "Perfeitos para proporcionar confiança, liberdade de movimento e incentivo ao aprendizado.",
      ],
      link: whatsappApi,
    },

    aikido: {
      titulo: "Kimonos de Aikido",
      imagem: "/produtos/aikido.webp",
      descricao: [
        "Projetados para favorecer a mobilidade e a execução precisa das técnicas circulares do Aikidô.",
        "Tecido leve, resistente e com caimento ideal para absorver quedas e manter o conforto durante a prática.",
        "Um uniforme que honra a tradição e respeita a técnica.",
      ],
      link: whatsappApi,
    },

    capoeira: {
      titulo: "Uniformes de Capoeira",
      imagem: "/produtos/capoeira.webp",
      descricao: [
        "Confeccionadas com tecido leve, elástico e altamente durável, ideais para movimentos amplos, acrobacias e jogos com energia.",
        "As peças oferecem conforto, liberdade e resistência ao desgaste, seja em rodas, treinos ou apresentações.",
        "Disponíveis em diversos modelos e cores, com possibilidade de personalização para grupos e academias.",
      ],
      link: whatsappApi,
    },

    kungfu: {
      titulo: "Uniformes de Kung Fu",
      imagem: "/produtos/kung-fu.webp",
      descricao: [
        " Inspirados nos trajes clássicos das escolas chinesas, nossos modelos unem conforto, estética e mobilidade.",
        "Tecidos leves e respiráveis, com cortes amplos para permitir fluidez nos movimentos e expressividade nas técnicas.",
        "Ideal para todas as linhagens: Shaolin, Wing Chun, Wushu, Tai Chi e mais.",
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
                // sizes="(max-width: 768px) 90vw, 40vw"
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
            className={`${styles.card} ${styles.jiuJitsu}`}
            onClick={() => setCategoriaSelecionada(categorias.jiuJitsu)}
          >
            <h2>Jiu-Jitsu</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.judo}`}
            onClick={() => setCategoriaSelecionada(categorias.judo)}
          >
            <h2>Judô</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.karate}`}
            onClick={() => setCategoriaSelecionada(categorias.karate)}
          >
            <h2>Karatê</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.taekwondo}`}
            onClick={() => setCategoriaSelecionada(categorias.taekwondo)}
          >
            <h2>Taekwondo</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.infantis}`}
            onClick={() => setCategoriaSelecionada(categorias.infantis)}
          >
            <h2>Peças Infantis</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.capoeira}`}
            onClick={() => setCategoriaSelecionada(categorias.capoeira)}
          >
            <h2>Capoeira</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.aikido}`}
            onClick={() => setCategoriaSelecionada(categorias.aikido)}
          >
            <h2>Aikido</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>

          <div
            className={`${styles.card} ${styles.kungfu}`}
            onClick={() => setCategoriaSelecionada(categorias.kungfu)}
          >
            <h2>Kung Fu</h2>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

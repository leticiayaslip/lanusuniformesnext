"use client";

import Link from "next/link";
import { settings } from "@/settings/settings";
import { FaCircle } from "react-icons/fa";

export default function First() {
  const { whatsappApi } = settings;

  return (
    <>
      <div className="conteinerFirst">
        
        <div className="tituloFirst">
          <h2>Equipamentos e uniformes que acompanham sua jornada.</h2>
          <p>
            Seja nas artes marciais ou no ambiente profissional, oferecemos
            produtos confortáveis, resistentes e com acabamento impecável.
          </p>
          <p>
            Nosso atendimento é dedicado e humano, sempre pronto para ajudar
            você a encontrar a melhor opção.
          </p>
          <Link href={whatsappApi} aria-label="Botão Whatsapp">
            <FaCircle />
            Saiba Mais
          </Link>
        </div>

        <div className="conteinerImgs">
          <div className="imgFirst base">
            <div className="textoImgs">
              <p className="titulo">Uniformes</p>
              <div className="textoHover">
              <p>
                Força e tradição em cada detalhe. Feitos para proporcionar
                máxima resistência e conforto, atendendo às exigências dos
                atletas mais dedicados.
              </p>
              <Link href="/kimonos">Saiba Mais</Link>
              </div>
            </div>
          </div>
          <div className="imgFirst2 base">
            <div className="textoImgs">
              <p className="titulo">Uniformes</p>
              <div className="textoHover">
              <p>
                Desenvolvidos especialmente para garantir mobilidade,
                durabilidade e apresentação impecável no dia a dia de trabalho
              </p>
              <Link href="/uniformes">Saiba Mais</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

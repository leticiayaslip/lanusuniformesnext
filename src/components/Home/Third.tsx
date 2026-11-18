"use client";

import Image from "next/image";

export default function Third() {
  return (
    <>
      <div className="base-bg">
        <div className="conteinerThird">
          <div className="imgKimono">
            <Image
              src="/kimonos/kimono6.webp"
              alt="Imagem"
              width={500}
              height={700}
            />
          </div>
          <div className="textThird">
            <h3>Sua melhor escolha para o treino de artes marciais</h3>
            <p>
              Treine com qualidade e desempenho! Nossos kimonos são projetados
              para garantir resistência, conforto e ajuste perfeito, permitindo
              que você se mova com liberdade e segurança em cada luta.
            </p>
            <ul>
              <li>
                Feitos para serem resistentes e evitar rasgos quando puxados e
                agarrados durante as lutas.
              </li>
              <li>
                Eles ficam justos ao corpo para reduzir o excesso de tecido que
                seu oponente poderia usar a seu favor.
              </li>
              <li>
                Um bom kimono é adequado ao seu tipo de corpo, altura e peso
                garantirá um ajuste ideal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

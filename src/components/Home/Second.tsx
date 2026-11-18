"use Client";

import Link from "next/link";
import { settings } from "@/settings/settings";
import { FaCircle, FaUserTie, FaVestPatches } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";

export default function Second() {
  const { whatsappApi } = settings;

  return (
    <>
      <div className="conteinerSecond">
        
        <div className="row-1">
          <h3>Características de um Uniforme Profissional de Qualidade.</h3>
          <div className="text2">
            <p>
              Uniformes desenvolvidos para atender às exigências do dia a dia
              profissional, com foco em durabilidade, conforto e apresentação.
              Garantia de desempenho e imagem impecável para sua equipe
            </p>
            <Link href={whatsappApi}><FaCircle />Saiba mais</Link>
          </div>
        </div>

        <div className="row-2">
          <div className="card">
            <FaVestPatches />
            <p className="destaqueUniforme">Uniformes Operacionais</p>
            <p>
              Reforçados e funcionais, ideais para quem trabalha em ambientes
              exigentes. Com alta durabilidade e conforto para longas jornadas.
            </p>
          </div>
          <div className="card">
            <FaUserTie />
            <p className="destaqueUniforme">Uniformes Corporativos</p>
            <p>Modelagem moderna e tecidos de qualidade para quem precisa transmitir profissionalismo e elegância no ambiente de trabalho.</p>
          </div>
           <div className="card">
           <FaShirt />
            <p className="destaqueUniforme">Uniformes Personalizados</p>
            <p>Produzidos sob medida para atender às necessidades da sua empresa. Cores, bordados e identidade visual com acabamento impecável.</p>
          </div>
        </div>

      </div>
    </>
  );
}

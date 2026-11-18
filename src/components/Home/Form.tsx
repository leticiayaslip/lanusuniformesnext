"use client";

import ContactForm from "../ContactForm/ContactForm";
import "../../styles/index.scss";
import { settings } from "@/settings/settings";
import { usePathname } from "next/navigation";

const { mapaEmbed } = settings.endereco;

export default function Form() {
  const pathname = usePathname();

  if (pathname === "/contato") return null; // Caso seja página de contato, não exibe o formulário

  return (
    <div className="included-form">
      <div className="base">
        <div className="box-details">
          <div className="box-title">
            <p className="title">Tire Suas Duvidas</p>
            <p className="description">
              Entre em contato com nossos profissionais
            </p>
          </div>
          <ContactForm variation="contatoFormIncluded" />
        </div>
        <div className="box-title">
          <p className="title">Como chegar?</p>
          <p className="description">Venha até nós</p>
          <iframe
          className="mapForm"
            src={mapaEmbed}
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

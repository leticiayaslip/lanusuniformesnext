
"use client";

import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "./PopUp.module.scss";

export default function PopUp() {
  const [fechando, setFechando] = useState(false);
  const [escondido, setEscondido] = useState(false);

  function fecharPopup() {
    if (fechando) return;

    setFechando(true);
  }

  function finalizarAnimacao() {
    setEscondido(true);
  }

  if (escondido) return null;

  return (
    <div
      className={`${styles.popupIndex} ${
        fechando ? styles.popupSaida : ""
      }`}
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "popupSaida"
        ) {
          finalizarAnimacao();
        }
      }}
    >
      <button
        className={styles.closed}
        type="button"
        onClick={fecharPopup}
        aria-label="Fechar aviso"
      >
        <IoClose />
      </button>

      <div className={styles.bgImg}>
        <div className={styles.infoGolpe}>
          <p className={styles.tituloPop}>
            <FaExclamationTriangle />
            Atenção: alerta de segurança!
          </p>

          <p className={styles.destaque}>
            Informativo importante aos nossos clientes
          </p>

          <p>
            A Lanus Uniformes alerta sobre golpes praticados por terceiros que
            utilizam indevidamente o nome da empresa para realizar cobranças
            sem entregar os produtos.
          </p>

          <p>
            Antes de efetuar qualquer pagamento, confirme se está negociando
            pelos nossos canais oficiais.
          </p>

          <p>
            Em caso de dúvida, entre em contato conosco para verificar a
            autenticidade da compra.
          </p>
        </div>
      </div>
    </div>
  );
}
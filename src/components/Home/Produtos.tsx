"use client";

import { FaStar } from "react-icons/fa";
import { settings } from "@/settings/settings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
import Link from "next/link";

export default function Produtos() {
  const { whatsappApi } = settings;

  return (
    <>
      <div className="conteinerProdutos">
        <div className="linhaProdutos">
          <h3>Linha de Produtos</h3>
        </div>

        <div className="produtosSwipper">
          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={20}
            speed={900}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="cardProdutos produto-1">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>Judô</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cardProdutos produto-2">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>Jiu Jitso</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cardProdutos produto-3">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>Karatê</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cardProdutos produto-3">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>KungFu</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cardProdutos produto-4">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>Infantil</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cardProdutos produto-2">
                <div className="textoCard">
                  <div className="flex-1">
                    <h4>Taekwondo</h4>
                    <p>
                      5<FaStar />
                    </p>
                  </div>
                  <div className="botaoProdutos">
                    <Link href={whatsappApi}>Consulte Valores</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

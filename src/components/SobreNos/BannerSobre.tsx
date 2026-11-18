"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-item banner-2">
            <div className="texto">
              <h1>Uniformes profissionais com apresentação impecável.</h1>
              <p>
                Conforto, resistência e personalização para representar sua
                empresa com excelência. Do operacional ao corporativo — costura
                reforçada, tecidos de alta qualidade e acabamento superior.
              </p>
              <Link href="/uniformes">Uniformes</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-1">
            <div className="texto">
              <h2>Kimonos que acompanham sua jornada</h2>
              <p>
                Alta performance, conforto e durabilidade para todas as artes
                marciais. Do iniciante ao profissional — qualidade, atendimento
                e confiança em cada detalhe.
              </p>
              <Link href="/kimonos">Kimonos</Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

"use client";

import "@/partials/Topo/topo.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import HamburgerMenu from "@/components/HamburgerMenu";

export default function Topo() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsFixed(scroll > 100); // 100 é a altura do topo
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]); // funciona no App Router

  const toggleMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={isFixed ? "topo fixed" : "topo"}>
        <div className="topo-menu">
          <div className="base">
            <div className="logoMobile">
            <Link href="/">
              <Image
                alt="Imagem"
                src="/logo-lanus.webp"
                width={160}
                height={110}
              />
            </Link>
            </div>
            <ul className="topo-links">
              <li className="topo-item">
                <Link href="/">Home</Link>
              </li>
              <li className="topo-item">
                <Link href="/sobre-nos">Sobre nós</Link>
              </li>
              <li className="topo-item">
                <Link href="/kimonos">Kimonos</Link>
              </li>
              <li className="topo-item">
                <Link href="/uniformes">Uniformes</Link>
              </li>
              <li className="topo-item">
                <Link href="/contato">Contato</Link>
              </li>
              <li className="topo-item">
                <Link href="/informacoes">.</Link>
              </li>
            </ul>
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />
          </div>
        </div>
      </div>

      <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />
        <ul className="topo-links-mobile">
          <li className="topo-item">
            <Link href="/">Home</Link>
          </li>
          <li className="topo-item">
            <Link href="/sobre-nos">Sobre nós</Link>
          </li>
          <li className="topo-item">
            <Link href="/kimonos">Kimonos</Link>
          </li>
          <li className="topo-item">
            <Link href="/uniformes">Uniformes</Link>
          </li>
          <li className="topo-item">
            <Link href="/contato">Contato</Link>
          </li>
          <li className="topo-item">
            <Link href="/informacoes">.</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

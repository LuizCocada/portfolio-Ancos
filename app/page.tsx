'use client';

import GradualSpacing from "@/components/ui/gradual-spacing";
import HyperText from "@/components/ui/hyper-text";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Safari from "@/components/ui/safari";
import ShimmerButton from "@/components/ui/shimmer-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showAfterScroll, setShowAfterScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajuste o valor conforme necessário para determinar quando a seção aparece
      const scrollThreshold = 300;
      if (window.scrollY > scrollThreshold) {
        setShowAfterScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const messageWhatsApp = `Olá, Gostaria de saber mais sobre o serviço de agendamentos para salões e barbearias.`;

  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <div className="flex flex-col justify-center items-center mb-20">
          <GradualSpacing text="Transforme seu negocio." className="text-2xl font-bold pt-24 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl " />
          <GradualSpacing text="Seu sistema sob medida." className="py-6 text-xl sm:text-2xl md:text-4xl xl:text-6xl" />

          <div className="pt-20">
            <Link
              href={`https://wa.me/5585999295393?text=${encodeURIComponent(messageWhatsApp)}`}
              target="_blank"
            >
              <ShimmerButton>
                Saiba mais.
              </ShimmerButton>
            </Link>
          </div>

          <div className="xl:flex items-center gap-48">
            <div className="flex flex-col items-center pt-24 ">
              <HyperText
                className="text-4xl font-bold text-black dark:text-white md:text-7xl xl:text-8xl"
                text="Salões"
              />
              <HyperText
                className="text-4xl font-bold text-black dark:text-white md:text-7xl xl:text-8xl"
                text="E"
              />
              <HyperText
                className="text-4xl font-bold text-black dark:text-white md:text-7xl xl:text-8xl"
                text="Barbearias"
              />
            </div>
            <div className="px-10 pt-24">
              <Iphone15Pro className="size-full" src="/cell.png" />
            </div>
          </div>

          {/* sessão para renderizar após rolagem */}
          {showAfterScroll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pt-24"
            >
              <GradualSpacing text="Gerencie seu negócio" className="text-2xl font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl " />
              <GradualSpacing text="De forma simples." className="pt-3 text-xl sm:text-2xl md:text-4xl xl:text-6xl" />
              <Safari className="pt-10 px-4 w-full max-w-xl h-fit sm:max-w-full xl:px-16" url="Sua-barbearia.com" src="mainBarber.png" />
              <div className="px-4 py-10 w-full max-w-xl sm:max-w-full xl:px-16">
                <TextGenerateEffect
                  words={"Não oferecemos apenas um serviço de agendamentos, mas sim uma plataforma personalizada e única feita sob medida para cada cliente."}
                  className="border-b pb-2" />
                <TextGenerateEffect
                  words={"Ficou curioso? Entre em contato conosco e agende uma demonstração."}
                  className="font-bold"
                />
              </div>
              <div className="flex justify-center pt-5 pb-10">
                <Link
                  href={`https://wa.me/5585999295393?text=${encodeURIComponent(messageWhatsApp)}`}
                  target="_blank"
                >
                  <ShimmerButton>
                    Saiba mais.
                  </ShimmerButton>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

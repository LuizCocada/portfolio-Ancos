'use client';

import GradualSpacing from "@/components/ui/gradual-spacing";
import HyperText from "@/components/ui/hyper-text";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Safari from "@/components/ui/safari";
import ShimmerButton from "@/components/ui/shimmer-button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

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

          <GradualSpacing text="Transforme seu negocio." className="text-2xl font-bold pt-32 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl " />
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

            <div className="px-4 pt-24">
              <Iphone15Pro className="size-full" src="/cell.png" />
            </div>
          </div>
          {/* <Safari className="pt-24" url="Sua-barbearia.com" src="mainBarber.png" /> */}
        </div>
      </motion.div>
    </AnimatePresence>

  );
}
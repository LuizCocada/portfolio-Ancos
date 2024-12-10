'use client';

import { AuroraBackground } from "@/components/ui/aurora-background"
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground className="h-[100%]">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <GradualSpacing
          className="text-3xl md:text-7xl font-bold dark:text-white text-center mt-40"
          text="O site que sua barbearia precisa!"
        />
        <GradualSpacing
          className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4"
          text="torne a gestão do seu negócio fácil e eficiente."
        />

        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Saiba mais
        </button>

        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Seu cliente feliz com um sistema simples e funcional. <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Transforme seu espaço
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/scroolPad.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}

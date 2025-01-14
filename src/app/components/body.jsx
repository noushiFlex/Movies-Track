"use client";

import React from "react";
import TextReveal from "@/components/ui/text-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import BoxReveal from "@/components/ui/box-reveal";

function Body() {
    return (
        <div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-white dark:bg-black px-4">
                <TextReveal text="Tous vos films et séries réunis en un seul endroit." className="text-4xl text-center" />
            </div>
            <div className="p-10">
                <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 mx-auto">
                    <BoxReveal boxColor={"#000d"} duration={0.5}>
                        <p className="text-[2.5rem] font-semibold text-center">
                            Movies Track<span className="text-[#000]">.</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#000"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-[1rem] text-center">
                            <span className="font-semibold text-[#000]">Movies Tracks</span> c'est ...{" "}
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#000"} duration={0.5}>
                        <div className="mt-6 text-sm md:text-base">
                            <p>
                                -&gt; Plus de <span className="font-semibold text-[#000]">500 000 films</span>{" "}
                                disponibles. <br />
                                -&gt; Plus de <span className="font-semibold text-[#000]">100 000 séries</span>{" "}
                                listées. <br />
                                -&gt; Plus de <span className="font-semibold text-[#000]">500 000</span> personnes
                                (<span className="font-semibold text-[#000]">acteurs</span>,{" "}
                                <span className="font-semibold text-[#000]">réalisateurs</span>, etc.) inscrites. <br />
                                -&gt; Des <span className="font-semibold text-[#000]">millions d'avis</span> et de{" "}
                                <span className="font-semibold text-[#000]">notes</span> d'utilisateurs. <br />
                            </p>
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </div>
    );
}

export default Body;

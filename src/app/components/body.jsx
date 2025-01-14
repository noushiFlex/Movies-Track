import React from 'react'
import TextReveal from '@/components/ui/text-reveal'
import SparklesText from '@/components/ui/sparkles-text'
import BoxReveal from '@/components/ui/box-reveal'
import ShinyButton from '@/components/ui/shiny-button'



function Body() {
    return (
        <div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  bg-white dark:bg-black">
                <TextReveal text="Tous vos films et séries réunis en un seul endroit." className="text-4xl" />
            </div>
            <div className='p-10'><div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
                <BoxReveal boxColor={"#000d"} duration={0.5}>
                    <p className="text-[2.5rem] font-semibold">
                        Movies Track<span className="text-[#000]">.</span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#000"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[1rem]">
                    <span className="font-semibold text-[#000]">Movies Tracks</span> c'est ...{" "}
                    </h2>
                </BoxReveal>

                <BoxReveal boxColor={"#000"} duration={0.5}>
                    <div className="mt-6">
                        <p>
                            -&gt; Plus de <span className="font-semibold text-[#000]">500 000 films</span> disponibles. <br />
                            -&gt; Plus de <span className="font-semibold text-[#000]">100 000 séries</span>  listées. <br />
                            -&gt; Plus de <span className="font-semibold text-[#000]">500 000</span> personnes (<span className="font-semibold text-[#000]">acteurs</span>, <span className="font-semibold text-[#000]">réalisateurs</span>, etc.) inscrites. <br />
                            -&gt; Des <span className="font-semibold text-[#000]">millions d'avis</span> et de <span className="font-semibold text-[#000]">notes</span> d'utilisateurs. <br />
                        </p>

                    </div>
                </BoxReveal>

                <BoxReveal boxColor={"#000"} duration={0.5}>
                    <ShinyButton className="mt-[1.6rem] ">Decouvrir</ShinyButton>
                </BoxReveal>
                <div className='h-[100px]'>
                    <div className=' flex justify-center items-center m-auto mt-12'><span className='flex items-center justify-center'>Made By <a href='https://linktr.ee/YohannVessime' id='yohannName' className='mx-2 border rounded-sm '><SparklesText className='text-lg ' text="Yohann" sparklesCount='3' /></a> with <img src="/assets/PngItem_130568.png" alt="Logo" className='w-5 object-contain'></img> </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Body
import React from 'react';
import SparklesText from '@/components/ui/sparkles-text';

function Footer() {
    return (
        <div>
            <div className="h-[100px]">
                <div className="flex justify-center items-center m-auto mt-12">
                    <span className="flex items-center justify-center">
                        Made By 
                        <a href="https://linktr.ee/YohannVessime" id="yohannName" className="mx-2 border rounded-sm px-2 py-1">
                            <SparklesText className="text-lg" text="Yohann" sparklesCount="3" />
                        </a> 
                        with 
                        <img src="/assets/PngItem_130568.png" alt="Logo" className="w-5 object-contain ml-1" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;

"use client";
import Image from "next/image";

const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350] sm:h-[350] md:w-[400] md:h-[400]">
                    <Image 
                        src="/documents.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image 
                        src="/documents-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    )
}

export default Heroes;
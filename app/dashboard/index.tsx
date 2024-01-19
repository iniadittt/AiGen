import React from 'react'
import Image from 'next/image'




const Index = ({ user }: any) => {
    return (
        <div className="w-full h-full flex flex-col gap-8">
            <div className="h-full grid grid-cols-4 gap-8">
                <div className="h-full col-span-3 flex flex-col gap-4">
                    <div>
                        <h1>Apa kata anda?</h1>
                    </div>
                    <div className="flex">
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        <div className="inline w-[120px] rounded-md shadow-sm overflow-hidden relative">
                            <p className="w-full bottom-0 absolute bg-white text-xs text-center">
                                Iqbal Pamula
                            </p>
                            <Image
                                src="https://source.unsplash.com/random/500×400"
                                width={900}
                                height={1600}
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                        
                    </div>


                    <div className="p-4 bg-white border rounded-lg text-gray-700 shadow-lg col-span-3">
                        <p className="text-lg font-bold">Dashboard</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="w-full h-full shadow-sm">
                    <div className="w-1/5 h-full fixed right-6 bg-white border text-gray-700 rounded-md">
                        <p className="text-lg font-bold">Dashboard</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quod.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
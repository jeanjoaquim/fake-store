import Image from "next/image"

export default function Shop() {
    return(
        <div className="pt-16 mx-2">
            <div className="bg-white px-2 rounded-lg max-w-5xl sm:px-8 sm:py-2 mx-auto">
                <h5 className="font-bold text-3xl pt-2 mb-3">Products</h5>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-2">
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div className="border-solid border border-gray-100 rounded-lg overflow-hidden">
                        <Image src="/images/product.png" alt="" width={200} height={200}/>
                        <div className="px-2">
                            <h5 className="font-bold">Fjallraven - Foldsack No. 1</h5>
                            <p className="uppercase text-sm text-neutral-300">men's clothing</p>
                            <p className="text-primaryColor font-bold text-lg">R$300,00</p>
                        </div>
                        <button className="bg-primaryColor w-full text-white py-1">
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
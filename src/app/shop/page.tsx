import Image from "next/image"

export default function Shop() {
    return(
        <div className="pt-16 mx-2">
            <div className="bg-white px-2 rounded-lg">
                <h5 className="font-bold text-3xl pt-2">Products</h5>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Image src="/images/hero.jpg" alt="" width={200} height={200}/>
                        <h5>Fjallraven - Foldsack No. 1</h5>
                        <span>men's clothing</span>
                        <span>R$300,00</span>
                        <button>
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                    <div>
                        <Image src="/images/hero.jpg" alt="" width={200} height={200}/>
                        <h5>Fjallraven - Foldsack No. 1</h5>
                        <span>men's clothing</span>
                        <span>R$300,00</span>
                        <button>
                            <span className="material-symbols-outlined py-2 px-2">shopping_cart</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
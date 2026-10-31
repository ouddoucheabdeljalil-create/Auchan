import { produitE1 ,pagenation } from "./cart.js";
export function AfficherProduit(pageItem) {
    for (let p of pageItem) {
        const productContainer = document.createElement('div');
        productContainer.classList.add('test')
        productContainer.innerHTML = ` <div draggable="true" class="grid grid-cols-4 grid-rows-4 border border-[#E1EAF7] bg-[#FFFFFF] h-60 rounded-xl">
                    <img src="${p.image}" alt=""
                        class="h-60 -w-auto ml-5  col-start-1 col-end-3 row-start-1 row-end-4"> 
                    <h2 class="row-start-1 col-start-3 col-span-2 flex justify-center items-center ">${p.nom}</h2>
                    <p class="row-start-2 col-start-3 col-span-2 flex justify-center items-center text-[#4338CA]">${p.prix}  DH
                    </p>
                    <button class="bg-[#4338CA] h-10 w-10  pl-1 rounded-xl row-start-4 row-end-4 col-start-4"><img
                            src="assest/panier.png" alt="" class=""></button>
                </div>`
                produitE1.appendChild(productContainer)
    }
    
}

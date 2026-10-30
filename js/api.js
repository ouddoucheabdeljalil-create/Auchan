// export let  produits= null
export  function dataProduits (){
    fetch("./data/data.json")
    .then(resp => resp.json())
    
    .then(data => {
        localStorage.setItem('dataProduits', JSON.stringify(data))
    //   produits = data ;  
    })
    .catch(error => {
        console.log('error whlie loading' ,error)
    });
    
    
    return produits;
}


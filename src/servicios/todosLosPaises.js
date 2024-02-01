
const extraerDatos = async function(paises){    
    const miarray = [];
    await Promise.all([paises.then(res => { 
        
        res.forEach(element => 
            {
                element.forEach(
                    el => {
                        //miarray.push(el.name.common,el.population,el.capital,el.flags);
                        miarray.push({
                            "nombre":el.name.common, 
                            "poblacion":el.population, 
                            "capital":el.capital,
                            "bandera":el.flags
                        });
                        //"bandera":el.flags});
                    }
                );
                
            }
        )
        
     })]);
     return miarray;
}

async function todosLosPaises(){
    const url = "https://restcountries.com/v3.1/all";
    return extraerDatos(Promise.all([fetch(url).then(res => res.json())]));
}

async function unPais(pais){
    const url = "https://restcountries.com/v3.1/name/"+pais ;
    return extraerDatos(Promise.all([fetch(url).then(res => res.json())]));
}

export {unPais, todosLosPaises};

//todosLosPaises().then(res => console.log(res))
//unPais("Argentina").then(res => console.log(res))


const parsearcurrencies = function(dato){
    let res = "";
    for (let item in dato){
        res = res + dato[item].name + " / ";
    }
    return res.substring(0, res.length-2);
}
const parsearlenguajes = function(dato){
    let res = "";
    for (let item in dato){
        res = res + dato[item] + " / ";
    }
    return res.substring(0, res.length-2);
}
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
                            "nombrenativo":el.name.official, 
                            "poblacion":el.population, 
                            "capital":el.capital,
                            "bandera":el.flags,
                            "ccn3": el.cca3,
                            "limitrofes":el.borders,
                            "region":el.region,
                            "subregion":el.subregion,
                            "tld":el.tld,
                            "currencies":parsearcurrencies(el.currencies),
                            "languages":parsearlenguajes(el.languages)
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

async function paisesPorRegion(region){
    const url = "https://restcountries.com/v3.1/region/"+region ;
    return extraerDatos(Promise.all([fetch(url).then(res => res.json())]));
}

/*async function paisesLimitrofes(codigoPaisesLimitrofes){
    console.log(codigoPaisesLimitrofes);
    
}*/

async function obtenerNombrePorCodigo(codigoPais){
    const url = "https://restcountries.com/v3.1/alpha?codes="+codigoPais ;
    return extraerDatos(Promise.all([fetch(url).then(res => res.json())]));
}

export {unPais, paisesPorRegion, todosLosPaises,  obtenerNombrePorCodigo};

//todosLosPaises().then(res => console.log(res))
//unPais("Argentina").then(res => console.log(res))
//obtenerNombrePorCodigo("aut").then(res => console.log(res))


let headers = new Headers({"Content-Type": "application/json"});
let puerto= 4005;
//json-server --watch db.json -p 4005 
// *codigo activacion server* 

const getProductosAll= async ()=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/productos`, config)).json();
    
}

const getProductosId= async (arg)=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/productos/${arg.id}`, config)).json();
    
}

const postProductos = async (arg)=>{
    console.log("post");
   /*  arg.id = (arg.id) ? arg.id : undefined; */
    let config ={
        method:"POST",
        headers : headers,
        body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/productos/${arg.id}`, config)).json();
}

const deleteProductos = async (arg)=>{
    console.log("delete");
     /*  arg.id = (arg.id) ? arg.id : Date.now(); */
     let config ={
        method:"DELETE",
        headers : headers,
    };
    return await (await fetch(`http://localhost:${puerto}/productos/${arg.id}`, config)).json();

}
const putProductos = async (arg)=>{
    console.log("put");
     /*  arg.id = (arg.id) ? arg.id : Date.now(); */
     let config ={
        method:"PUT",
        headers : headers,
       body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/productos/${arg.id}`, config)).json();

}

export default {
    getProductosAll,
    postProductos,
    deleteProductos,
    putProductos,
    getProductosId
}
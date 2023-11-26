//console.log("HOLA DESDE EL SERVIDOR")


//1.-import expres from 'express' es lo mismo que importar lo de arriba
// npm i express
const express= require('express');

//2.- CREAR UNA CONSTATMNTE APP QUE TEMNDRA TODAS LAS FUNCIONALIDADES DE EXPREESS

const app=express();

// midelwere   se necesitan para  el idioma 
app.use(express.json()); // permite tener el body en formato json 
app.use(express.urlencoded({ extends: true }));

//  DEFINICION DE FUNCION 

const findAll=(req, res)=>{
    return res.status(200).json({
        message : "method get -findAll"
    })
}

const create=(req, res)=>{
    const disease = req.body
    const {enfermedad , especie , raza}=req.body
    console.log(req.body)
    return res.status(201).json({
        message : 'method post -create' , 
        data : disease
    })

}
//3.- DEFINIDR EL ENDPOINT
// PROTOCOL , DOMINIO , RESOURSE

// endpoint para buscar todas las enfermedades geneticas
app.get('/api/v1/geneti-ddiseases', (req , res)=>{
  //  res.send("HOLA MUNDO DESDE EL SERVIDOR")
    //console.log("HELLO WORLD")    colocar un return en cada respuesrta 
    return res.status(201).json(/*[
        {
        enfermedad: "anoplasmosis"
        },
        {
        enfermedad: "dificultades respiratorias+"
            }
    ]*/
    
    {  message : 'method get findall'}
    )
})

// endpoint opara generar una enfermedad genetica 
app.post('/api/v1/geneti-ddiseases',create)

// endpint para buscar una efmermedad genetica

app.get('/api/v1/geneti-ddiseases/:id/:name', (req , res)=>{

    console.log(req.params)
    
    return res.status(200).json({
        message : 'method get -findOne'
    })
})

// enpoint para actualizar una enfermedad genetica
// puedes utilizar tambien el put
app.patch('/api/v1/geneti-ddiseases/:id', (req , res)=>{
    
    const{id}= req.params;  // destructuramos los parametros

    
    return res.status(200).json({
        message: 'method patch-update' , 
        id
    })
})


app.delete('/api/v1/geneti-ddiseases/:id' , (req , res)=>{

    const{id}= req.params;
    return res.status(200).json({
        message: 'method patch-delete' , 
        id 

    })
})

// 4.- escuchar el servidor por un puerto
app.listen(3000 , ()=>{
    console.log("SERVER RUNNING ON PORT: " + 3000)
})

// servidor local -> direccion ip de loopback
// 127.0.0.1 .> lcoalhost
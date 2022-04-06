const express = require('express');
const {faker} =  require('@faker-js/faker');
const { response } = require('express');
const app=express();

const usuario ={
    id: faker.random.uuid(),
    primer_nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    numero_telefono: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    contraseña: faker.internet.password(),

}

const empresa={
    id: faker.random.uuid(),
    nombre: faker.company.companyName(),
    direccion: {
        calle: faker.address.streetAddress(),
        ciudad: faker.address.city(),
        estado: faker.address.state(),
        codigo_postal: faker.address.zipCodeByState(),
        pais: faker.address.country(),
    }
}
app.use(express.json() );

app.get('/api/users/new',(request,response)=>{
    return response.status(200).json(usuario);
});

app.get('/api/companies/new',(request,response)=>{
    return response.status(200).json(empresa);
});

app.get('/api/user/company',(request,response)=>{
    const todo=[];
    todo.push(usuario,empresa);    
    return response.status(200).json(todo);
})


app.listen (8080,()=>{
    console.log("el servidor se encuentra corriendo en el puerto 8080")
})

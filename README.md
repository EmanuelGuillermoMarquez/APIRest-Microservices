# APIRest-Microservices

Bienvenidos a mi API Rest basada en microservicios, utilizando teconologias como MongoDB, Docker y Google Cloud.

En la misma podran realizar un CRUD completo de datos referidos a la saga de peliculas de Star Wars, mediante los siguientes endpoints:

DIRECCION IP: 34.168.5.235

# Tabla de Personajes

LISTAR TODOS LOS PERSONAJES: get 34.168.5.235/characters

VER UN PERSONAJE POR ID: get 34.168.5.235/characters/[id]    
El id es un numero

AGREGAR UN NUEVO PERSONAJE: post 34.168.5.235/characters
Debemos enviar informacion por body
Datos obligatorios: { _id , name } 

MODIFICAR UN PERSONAJE: post 34.168.5.235/characters/[id]    
El id es un numero
Debemos enviar informacion por body
Datos obligatorios: { _id , name }

ELIMINAR UN PERSONAJE: delete 34.168.5.235/characters/[id]    
El id es un numero

# Tabla de Planetas

LISTAR TODOS LOS PLANETAS: get 34.168.5.235/planets

VER UN PLANETA POR ID: get 34.168.5.235/planets/[id]    
El id es un numero

AGREGAR UN NUEVO PLANETA: post 34.168.5.235/planets
Debemos enviar informacion por body
Datos obligatorios: { _id , name } 

MODIFICAR UN PLANETA: post 34.168.5.235/planets/[id]    
El id es un numero
Debemos enviar informacion por body
Datos obligatorios: { _id , name }

ELIMINAR UN PLANETA: delete 34.168.5.235/planets/[id]    
El id es un numero

# Tabla de Peliculas

LISTAR TODOS LOS PELICULAS: get 34.168.5.235/films

VER PELICULA POR ID: get 34.168.5.235/films/[id]    
El id es un numero

AGREGAR UNA NUEVA PELICULA: post 34.168.5.235/films
Debemos enviar informacion por body
Datos obligatorios: { _id , title } 

MODIFICAR PELICULA: post 34.168.5.235/films/[id]    
El id es un numero
Debemos enviar informacion por body
Datos obligatorios: { _id , title }

ELIMINAR PELICULA: delete 34.168.5.235/films/[id]    
El id es un numero

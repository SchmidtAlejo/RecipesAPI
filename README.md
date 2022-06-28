# RecipesAPI

Introducción: 

En esta API es para una aplicación donde se podran buscar recetas de comidas en base a un ingrediente. 
Los usuarios podrán darle "likes" y guardar sus recetas favoritas. Además, podrán ver las recetas con 
mayor cantidad de likes.

# Alcance:

1. Registración de usuario.
2. Inicio de sesión de usuario.
3. Cambio de constraseña.
4. Mostrar por recetas ordenadas por likes.
5. Buscar recetas por ingredientes. 
6. Agregar recetas a favorito.
7. Agregar like a las recetas.
8. Ver listado de recetas guardadas en favorito.
9. Eliminar receta del listado de favoritos.

# Requerimientos:

1. Clonar el repositorio.
2. Ejecutar por consola el comando "npm install"
3. Agregar el archivo .env con sus respectivos datos.
4. Ejecutar el endpoint "POST: /" para generar datos de prueba. 

# Endpoint para cargar datos de prueba:

POST: /

# Endpoints para los usuarios: 

GET: api/users (Devuelve todos los usuarios)

GET: api/users/[id] (Devuelve el usuario del id ingresado)

POST: api/users (Agrega un usario con los datos agregados al body)
body:{
    "email": [email],
    "password": [password]
}

POST: api/users/login (devuelve el usuario y el token)
body:{
    "email": [email],
    "password": [password]
}

PUT: api/users (Cambia la contraseña del usuario)
body:{
    "_id": [userId],
    "password": [password]
}

PUT: api/users/addFavorites (añade una receta a favoritos)
body:{
    "userId": [userId],
    "recipeId": [recipeId]
}

PUT: api/users/removeFavorites (devuelve el token)
body:{
    "userId": [userId],
    "recipeId": [recipeId]
}

# Endpoints para las recetas: 

GET: api/recipes?ingridients=true (Devuelve todos los ingredientes)

GET: api/recipes?ingridient=[ingredientName] (Devuelve todas las recetas que se pueden hacer con el ingrediente ingresado)

GET: api/recipes?recipeId=[recipeId] (devuelve los detaslles de la receta ingresada)

GET: api/recipes?userId=[idUser] (devuelve las recetas favoritas del usuario)

# Endpoints para las recetas likeadas:

GET: api/recipes/likes (Devuelve todos las recetas que fueron likeadas en orden de mayor a menor likes)

GET: api/recipes/likes/[recipeId] (Devuelve la cantidad de likes de una receta)

POST: api/recipes/likes (Agrega un like a la receta que se pasa por el body)
{
    "recipeId": [recipeId]
    "userId": [userId]
}
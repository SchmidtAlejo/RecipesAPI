# RecipesAPI

Alcance:

1. Registración de usuario.
2. Inicio de sesión de usuario.
3. Cambio de constraseña.
4. Mostrar por recetas ordenadas por likes.
5. Buscar recetas por ingredientes. 
6. Agregar recetas a favorito.
7. Agregar like a las recetas.
8. Ver listado de recetas guardadas en favorito.
9. Eliminar receta del listado de favoritos.

# Endpoints:

Endopioint para las recetas: 

api/recipes?ingridients=true (Devuelve los ingredientes)

api/recipes?ingridientItem=[nombre del ingrediente] (Devuelve todas las recetas que se pueden hacer con el ingrediente ingresado)

api/recipes?recipeId=[recipeId] (devuelve los detaslles de la receta ingresada)

api/recipes?userId=[idUser] (devuelve las recetas favoritas del usuario)
# Prueba back PULPO 🐙

Proyecto realizado para una prueba técnica. Consiste en que un usuario pueda agregar tantos servicios como requiera al mismo tiempo y estos se muestren en otra vista.

### Funcionalidad

- Registrar nuevos servicios
- Listar servicios `Título` `Precio` `Unidad`

## API Routes

#### health point

```http
  GET /
```

#### Tipos de unidad

```http
  GET /units
```

#### Buscar tipos de unidad por ID

```http
  GET /units/id
```

#### Añadir nuevo tipo de unidad

```http
  POST /units
```

#### Servicios

```http
  GET /services
```

#### Buscar servicios por ID

```http
  GET /services/id
```

#### Añadir nuevo servicio

```http
  POST /services
```

### Dependencias

Librearías que se han utilizado en este proyecto son las siguientes:

* [express]
* [dotenv]
* [mysql2]
* [cors]
* [sequelize]
* [joi]
* [morgan]

# Iniciar el proyecto
* Modificar el archivo .env y añadir tus credenciales

* npm
  ```sh
  npm install
  npm run start
  ```
  
  * OPCIONAL Para cargar datos en la Base de datos
  ```sh
  npm run seed:units
  npm run seed:services
  ```

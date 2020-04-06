# ECHOMERCIO

Esta aplicacion es para adminstrar una red social de economia circular desarrollada con Ionic Framework y Angular.

¿Que es economia cirular?

**Los datos son reales, pero no hay ningun contacto con lo usuarios y empresas. La base de datos de comercios se genero con datos del DENUE de la INEGI**

## Contenido

- 1. [Descripcion de la app](#descripcion-app)
- 2. [Codigo](#codigo)
- 3. [Descarga y contribuye](#descargaycontribuye)
- 4. [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Descripcion de la app

### [Configuracion]()

  Establece la zona que prefieres para tus consultas. Esto facilita y mejora los resultados de la aplicacion.

### [Anuncios]()

  Anuncia intenciones de vender, comprar o intercambiar:

  * Articulos usados
  * Residuos recuperables

### [Eventos]()

  Organiza y participa en eventos relacionados con la "economia circular." Por ejemplo:

  * Acopio de articulos electronicos que no se VENUSTIANO
  * Bazaares de articulos usados (ropa, discos, etc.)
  * Ferias de productos locales como:

### [Miembros y contactos]()

  Tres tipos de miembros de la red:

  Tipos de usuarios:

  1. Miembro normal - puede consultar anuncios y comercios y contactar a otros. Puede hacer pagos pero no cobros.
  2. Miembro empresarial - puede hacer anuncios y vender sus productos y servicios a traves de la aplicacion. Tiene acceso a un centro de pagos.
  3. Administrador - puede acceder a la informacion del sitio y a modificar el codigo de la app y el sitio


### [Aprendizaje]()

  * Juegos educativos que ayudan a sensibilizar y a aprender sobre la economia circular
  * Directorio de documentos de consulta sobre economia circular

## Codigo

La aplicacion parte de la plantilla "conference" de IONIC.

### Dependencias

IONIC es un framework de Angular y requiere lo siguiente para poder "deploy":

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

#### Deploying

Para correr la app.

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`


## Descarga y contribuye

La licencia para contribuir se hereda de la licencia de la plantilla:

Ver [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:

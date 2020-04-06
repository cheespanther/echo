# ECHOMERCIO

## Introduccion

¿Que es economia circular?


La economia circular es:

Sin embargo, nosotros hemos identificado tres retos para la economia circular en Mexico que nos gustaria enfrentar a traves del diseño y desarrollo de una aplicacion web/movil.

## Falta de conocimiento
    1. La población en general no sabe como identificar ni manejar los diferentes tipos de residuos que se generan en la ciudad.4
    2. Aunque muchos de nosotros compramos y vendemos articulos usados y reciclables, pocos comprendemos que participar en esto contribuye a la economia circular.   

## Manejo de residuos
    3. El manejo de residuos puede y debe involucrar a la ciudadanía, es decir, no es un problema de responsabilidad exclusiva de los gobiernos locales.

## Falta de articulacion entre las personas y empresas que participan en la economia circular
    3. Los sitios, empresas y grupos que se dedican al manejo de residuos y a la economía circular relacionada a los residuos no siempre son tan conocidos y están desarticulados. No existe una red de este tipo de empresas o sitios.

Dicho lo anterior, ECHO es una plataforma que tiene tres objetivos relacionados a los retos explicados:

    1. Contribuya a la formacion de una comunidad de personas que participan en la economia circular.
    Esto se logra a traves de una app que tiene una app que facilita la:
        ◦ El mapa/directorio de empresas/grupos que participan en algun tipo de economia circular:
            ▪ Manejo de residuos orgánicos por ejemplo: Huerto Tlatelolco, viveros municipales, composteros municipales.
            ▪ Manejo de residuos peligrosos como baterías, residuos hospitalarios, etc.
            ▪ Compra/Venta de artículos usados (Tiendas de segunda, Bazaares de ropa usada, Ferias de productos locales, etc.
            ▪ Manejo de residuos de jardinería
            ▪ Manejo de residuos de construcción
            ▪ Acopio y compra/venta de materiales recuperables
    2. Proveer de contenido que eduque e incentive la economia circular
        ◦ El juego tendría como objetivo enseñar 3 cosas:
            ▪ Identificar los diferentes tipos de residuos
            ▪ Identificar las opciones de manejo para cada tipo de residuo
            ▪ Conocer y poder contactar a empresas y sitios que participan en la economía circular
    3. Facilitar la ineraccion entre personas que activamente participan en la economia circular de Mexico.

![Class Diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/Zingam/Markdown-Document-UML-Use-Test/master/UML/Instance.puml)

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

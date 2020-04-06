# ECHOMERCIO

## Introduccion

¿Que es economia circular?

La economia circular se refiere a modos de consumo que procuran :

  1. Reducir la entrada de materiales nuevos en la produccion
  2. Reducir la produccion de desecho
  3. Cerrar los flujos economicos y ecologicos de los recursos

De esta manera reduciendo el impacto ambiental de los patrones de consumo. Algunas estrategias relacionadas a la economia ciruclar son:

  1. Reutilizacion de envases
  2. Disminusion de empaques no necesarios
  3. Consumo local de productos de primera necesidad
  4. Consumo de productos usados

En los proximos años la transicion de habitos de consumo hacia una economia circular enfrentara grandes retos.

Para el RetoCDMX, hemos identificado tres retos particulares para la economia circular en Mexico que nos gustaria enfrentar a traves del diseño y desarrollo de una aplicacion web/movil.

## Reto 1: Falta de conocimiento

Algunos retos para la economia circular tiene que ver con la formacion de ciudadanos mas dispuestos a los cambios de habitos que implica la economia ciruclar. Para lograr una transicion hacia una economia circular es importante que las personas empiecen a identificar que es, como funciona, por que es importante y como pueden participar.

En este sentido, una de las secciones de la app que proponemos incluye esta enfocada a la difusion de informacion y educacion sobre temas pertienentes a la economia circular como los tipos de residuos, las formas en que se tratan los rediuos, el consumo local, entre otros.

2. Proveer de contenido que eduque e incentive la economia circular
    ◦ El juego tendría como objetivo enseñar 3 cosas:
        ▪ Identificar los diferentes tipos de residuos
        ▪ Identificar las opciones de manejo para cada tipo de residuo
        ▪ Conocer y poder contactar a empresas y sitios que participan en la economía circular

## Reto 2: Falta de articulacion entre las personas y empresas que participan en la economia circular

Los sitios, empresas y grupos que se dedican al manejo de residuos y a la economía circular relacionada a los residuos no siempre son tan conocidos y están desarticulados. Los mercados de productos locales, los bazaares de articulos usados, los centros de acopio de materiales recuperables, las platnas de copostaje entre otros, son algunos de las empresas y serivicios que forman parte de la red de personas involucradas en la economia circular.

Dicho lo anterior, ECHO es una plataforma que pretende contribuir a la formacion de una comunidad de personas que participan en la economia circular a traves de ofrecer:

  1. Mapa/directorio de empresas/grupos que participan en algun tipo de economia circular
  2. Red social de personas y grupos de personas interesados

La red de miembros se clasifica en tres nivles de usuarios:

  1. Usuario general - interesados en consumir o participar en la economia circular (clientes o posibles clientes)
  2. Usuario empresarial - empresas, institutciones y grupos de la sociedad civil organizada involucrados en:
            ▪ Manejo de residuos orgánicos
            ▪ Manejo de residuos peligrosos
            ▪ Compra/Venta de artículos usados
            ▪ Manejo de residuos de jardinería
            ▪ Manejo de residuos de construcción
            ▪ Acopio y compra/venta de materiales recuperables
            ▪ Productores locales
  3. Administradores - usuarios interesados en utilizar los datos y la informacion que se genere en la app sin fines de lucro para investigar, regular y/o impulsar la economia circular. Se refiere principalmente a tomadores de decisiones, investigadores y organizaciones de la sociedad civil.

**Los datos son reales, pero no hay ningun contacto con lo usuarios y empresas en esta etapa. La base de datos de comercios se genero con datos del DENUE de la INEGI**

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
  * Ferias de productos locales como: (Mercado del 100, Mercado de productores, Xochimilco)

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

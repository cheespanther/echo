# ECHO
### Red de Economía Circular en México

Plataforma web y app de networking social que contribuye la generación de redes de economía circular; capacitando y conectando a los distintos actores en formas de consumo responsable.

## 1. Introducción

¿Qué es economía circular?

La economía circular se refiere a modos de consumo que procuran:

  1. Reducir la entrada de materiales nuevos en la producción
  2. Reducir la producción de desecho
  3. Cerrar los flujos economicos y ecologicos de los recursos

De esta manera reduciendo el impacto ambiental de los patrones de consumo. Algunas estrategias relacionadas a la economia ciruclar son:

  1. Reutilización de envases
  2. Disminución de empaques no necesarios
  3. Consumo local de productos de primera necesidad
  4. Consumo de productos usados

En los proximos años la transición de habitos de consumo hacia una economia circular enfrentara grandes retos.

Para el RetoCDMX, hemos identificado tres retos particulares para la economía circular en México que nos gustaria enfrentar a traves del diseño y desarrollo de una aplicación web/movil.

### Reto 1: Falta de conocimiento

Algunos retos para la economía circular tiene que ver con la formación de ciudadanos mas dispuestos a los cambios de habitos implicados en la economía ciruclar. Para lograr una transición hacia una economía circular es importante que las personas empiecen a identificar qué es, cómo funciona, por qué es importante y como pueden participar.

En este sentido, una de las secciones de la plataforma que se propone:

Proveerá de contenido que instruya sobre e incentive la economía circular a través de la divulgación de contenido relacionado, cursos y juegos en línea.

### Reto 2: Falta de articulación entre los diferentes "actores" que participan en la economía circular

Los sitios, empresas y grupos que particpan en actividades relacionadas a la economía circular (productores locales, recicladoras, plantas de compostaje, entre otros) no siempre son tan conocidos y están desarticulados. Por la forma en que operan, no tienen mecanismos y estructuras tan robustas como las empresas multinacionales con las cuales a menudo compiten. 

Dicho lo anterior, ECHO es una plataforma que pretende contribuir a la construcción de una comunidad que incluya a los diversos "actores" que participan en la economía circular al funcionar como un:

  1. Mapa/directorio de empresas y organizaciones involucradas en alguna forma de economía circular
  2. Red de networking para grupos y personas de personas interesadas en la economía circular

La red tendría tres tipos de miembros/usuarios:

  1. Miembro normal - interesados en consumir o participar en la economia circular (clientes o posibles clientes)
  2. Miembro empresarial - empresas, organizaciones y grupos de la sociedad civil que estén involucradas en alguna de las siguientes actividades:
            ▪ Manejo de residuos orgánicos
            ▪ Manejo de residuos peligrosos
            ▪ Compra/Venta de artículos usados
            ▪ Manejo de residuos de jardinería
            ▪ Manejo de residuos de construcción
            ▪ Acopio y compra/venta de materiales recuperables
            ▪ Productores locales
  3. Miembro administrador - son aquellos interesados en utilizar los datos y la informacion que se genere en la app sin fines de lucro para investigar, regular y/o impulsar la economia circular como instancias del gobierno, centros de investigación, ONGs, entre otros.

## 2. Descripcion de la propuesta

Desarrollar una plataforma web y aplicación móvil para Android e iOS con

* Angular
* IOINIC
* Laravel

Las funcionalidades de la plataforma/app giran en torno a 1) ofrecer contenido educativo y de divulgacion que promueva la economia ciruclar y 2) construir una red de los diferentes actores que participan en la economia circular (compradores, proveedores, sociedad civil organizada e institutciones)

El contenido de este repositorio es un prototipo operacional con datos muestra de la app esta compuesta de 4 funciones generales

### Función 1: Configuración

En esta seccion de la app el usuario puede configurar ciertos parametros generales de ubiacion e intereses para mejorar la funcionalidad de la aplicacion:
  * Zona
  * Intereses del usuario

  ![alt text](https://raw.githubusercontent.com/cheespanther/echo/master/resources/screenshots/configuracion.png)

### Función 2: Anuncios

La seccion de "anuncios" permite a los usuarios consultar y crear anuncios para:
  * Promover productos y servicios relevantes a la economia circular - productos locales, articulos reciclados, articulos usados, etc.
  * Organizar eventos relevantes a la economia circular - bazaares de ropa usada, ferias de productores locales, etc.
  * Publicar avisos gubernamentales o institucionales - Eventos de acopio organizados por institutos como el Reciclatron que organiza la UAM

Los anuncios se pueden consultar en un listado o por un mapa.

#### Captura de pantalla de: Listado de anuncios/eventos

  ![alt text](https://raw.githubusercontent.com/cheespanther/echo/master/resources/screenshots/items.png)

#### Captura de pantalla de: Mapa de usuarios y Eventos

![alt text](https://raw.githubusercontent.com/cheespanther/echo/master/resources/screenshots/mapa.png)


### Función 3: Menú de usuarios

En el menú de usuarios, segun el tipo de cuenta que tenga, es posible:

  1. Comprar, vender y ofrecer servicios relacoinados a la economia circular
  2. Organizar y participar en eventos relacionados a la economia ciruclar
  3. Consultar informacion sobre la economia circular
  4. Comunicarse con otros miembros de la red de usuarios

La comunicacion entre usuarios funcionaria como la de cualquier red de networking social. Cada usuario irá creando un listado de contactos de los con los cuales quiera comunicarse. Al igual que para los anuncios se puede consultar por una lista o en un mapa.

#### Captura de pantalla de: Lista de contactos

  ![alt text](https://raw.githubusercontent.com/cheespanther/echo/master/resources/screenshots/contactos.png)

Es importante mantener cierto control sobre de quien hace que dentro de la red, es por eso que se proponen tres tipos de miembros/usuarios con distintos niveles de acceso.

  1. Miembro normal - puede consultar anuncios y comercios y contactar a otros. Puede hacer pagos pero no cobros.
  2. Miembro empresarial - puede hacer anuncios y vender sus productos y servicios a traves de la aplicacion. Tiene acceso a un centro de pagos.
  3. Miembro administrador - puede acceder a la informacion del sitio y a modificar el codigo de la app y el sitio

### Seccion 4: Aprendizaje

Uno de los objetivos de la aplicación es que los usuarios puedan aprendan sobre la econmia circular y como pueden participar en ella. En este sentido, la sección de "aprendizaje" de la app incluye lo siguiente:

  1. Juegos educativos relacionados a la economia circular
  2. Directorio de documentos y sitios web relacionados a la economia circular
  3. Cursos en linea sobre la economia circular (gratiuitos y con costo)

#### Captura de pantalla de: Tutorial de como usar ECHO

  ![alt text](https://raw.githubusercontent.com/cheespanther/echo/master/resources/screenshots/tutorial.png)

## 3. Modelo de negocios

El éxito de cualquier proyecto requier de estrategias de financiamiento para que logre cierta independencia de fondos y concursos como RetoCDMX. Es por eso que se tiene pensado desarrollar un modelo de negocios que considera lo siguiente:

    1. Las cuentas no tendran costo
    2. Publicar un evento o vender un articulo generaran una comision que servira para mantener la App
    3. Publicidad de empresas o institutos involucrados en la economia circular
    4. Costo por acceder a los datos que genere la aplicacion para actividades con fines de lucro
    5. Algunos de los cursos/juegos ofrecidos tendran algun costo

## 4. Codigo

### Licencia

La aplicación "demo" de este repositorio parte de la plantilla "conference" de IONIC y hereda los mismos derechos. Es decir, todo el codigo de desarrollo de la app se puede utilizar para desarrollar otras apps similares o locales. 

Se documentará apropiadamente permitiendo a que personas en otras comunidades puedan hacer sus propias redes de economía ciruclar.

La licencia herdada de la plantilla de IONIC es:

Ver [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:

### Dependencias

IONIC es un framework de Angular y requiere lo siguiente para poder probar la app "demo":

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

### Deploying

INSERTAR INSTRUCCIONES PARA INSTALAR Y CORRER LA APP.

## 5. Equipo para el RetoCDMX

Juan Carlos Mandujano

Desarrollador de software especializado en el desarrollo de aplicaciones web y Mobile, entusiasta empedernido de javascript como tecnología para el desarrollo de software. Actualmente estudiando, experimentando y desarrollando con AngularJS para el desarrollo de aplicaciones web y Ionic y React para el desarrollo de aplicaciones móviles. Desarrollador fullstack esarrollo Frontend con lenguajes como JavaEE y PHP para la operación de negocio, creación y mantenimiento de servicios web y micro servicios, así como para operar la capa de datos con diversos motores de bases de datos como: SQL Server, MySql, Oracle, Sybase, Informix. Cuenta también con nociones básicas UX/UI que le permiten desarrollar productos digitales intuitivos y orgánicos. Actualmente trabaja en el sector privado para Vagapp Soluciones en la Ciudad de México

David Martinez

Oceanólogo de formación, cuenta con especialidad en ciencia de datos, particularmente en el análisis de datos ecológicos y ambientales. Desde sus estudios en oceanografía estuvo enfocado en la resolución de problemas mediante métodos numéricos y algoritmos de optimización, volviéndose experto en Algoritmos Genéticos y Redes Neuronales. Sus principales herramientas de trabajo son lenguajes de programación como R, Python y Matlab. Desde el 2015 incursionó en la visualización de datos e información y desde entonces ha venido adquiriendo experiencia en el uso de lenguajes como HTML, CSS y JavaScript, para la visualización web. Tiene experiencia en el manejo de bases de datos mediante SQL. Actualmente está cursando la Especialidad en Geomática, en donde hace uso de todas estas herramientas y tecnologías sobre bases de datos espaciales. Es también un apasionado de la filosofía conocida como Investigación Reproducible (o Reproducible Research) que se enfoca en la optimización de procesos y la reproducibilidad de resultados; para alcanzar lo anterior se ha convertido en un experto en el versionamiento semántico, y usa de forma cotidiana herramientas como Git y Mercurial, así como plataformas como GitHub y Bitbucket.

Iskar Waluyo

Ingeniero Ambiental y Maestro en Diseño y Estudios Urbanos de la UAM-Azcapotzalco. Cuenta con especialiedades en ciencias de datos y en sistemas de control de calidad. Aunque siempre ha enfocado sus energías en problemáticas y trabajo relacionado al medio ambiente, el urbanismo y la sustentabilidad, desde pequeño ha sido apasionado y practicante de la informática. Escribió su primer programa en una Tandy CoCo 2 cuando tenía 8 años y cada que puede integra la informática en su trabajo. Es miembro de Ambulare Comunidad Creativa, un grupo multidisciplinario con quien colabora y trabaja en proyectos de diseño e investigacion relacionados con el espacio público. Actualmente esta terminando una especialidad en geomática y trabaja como asesor ambiental independiente y desarrolloador de soluciones teconlogicas para proyectos de investigacion y educativos.

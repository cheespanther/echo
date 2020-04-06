# ECHOMERCIO

Esta aplicacion es para adminstrar una red social de economia circular desarrollada con Ionic Framework y Angular.

**Los datos son reales, pero no hay ningun contacto con lo usuarios y empresas. La base de datos de comercios se genero con datos del DENUE de la INEGI**

Tipos de usuarios:

1. Usuario normal - puede consultar anuncios y comercios y contactar a otros. Puede hacer pagos pero no cobros.
2. Usuario empresarial - puede hacer anuncios y vender sus productos y servicios a traves de la aplicacion. Tiene acceso a un centro de pagos.
3. Administrador -



## Contenido
- [Arrancar la app](#getting-started)
- [Descarga y contribuye](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Arrancar la app

### Dependencias



* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

### [Configuracion](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/menu/menu.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |


### [Anuncios](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/schedule/schedule.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Schedule](/resources/screenshots/android-schedule.png) | ![iOS Schedule](/resources/screenshots/ios-schedule.png) |

### [Eventos](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-list/speaker-list.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Miembros y contactos](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [Tutorial](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`

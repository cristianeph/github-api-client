# Github Rest Client Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Requisitos

1. Debe tener instalado node.
2. Debe instalar angular cli desde el terminal con `npm install -g @angular/cli`

## A tener en cuenta

Los requests a las APIs sin autenticación/token son limitados.
Por lo que deberan reemplazar el valor de la llave `apiToken` en el archivo `environment/environment.ts` por el token que adjuntaré en el correo que recibiran. 

El archivo debe quedar así:

```
export const environment = {
  production: false,
  apiUrl: 'https://api.github.com',
  apiUser: 'cristianeph',
  apiRepository: 'github-api-client',
  apiToken: '<Aqui va el token entre comilla simple>'
};
```

## Para correr el proyecto

1. Ubicarse en un folder determinar en el terminal y ejecutar `git clone https://github.com/cristianeph/github-api-client`
2. Ubicarse en la raíz del proyecto clonado y ejecutar `npm install`
2. En caso el terminal muestre errores debería ejecutarlo así `sudo npm install`
3. Una vez terminados los trabajos del terminal correr el comando en terminal `ng serve`
4. Por defecto la aplicación se abrira en el puerto 4200, para acceder a ella abra en su navegador http://localhost:4200/


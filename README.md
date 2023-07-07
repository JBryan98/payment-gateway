## Automatización Web con Cypress y Cucumber
### Descripción
Este proyecto muestra una integración de Cypress, Typescript y Cucumber para realizar automatización web utilizando **Page Object Model**. Se automatizó un flujo de compras de la página https://demo.guru99.com/payment-gateway.

### Requisitos
- El único requisito es contar con una versión de **NodeJS >= 16**

### Instalación

- Clonar el proyecto en tu equipo.
```
git clone https://github.com/JBryan98/payment-gateway.git
```
- Una vez dentro del proyecto ejecutar
```
npm install
```

### Ejecución
- Para levantar el proyecto solo hay que ejecutar el siguiente comando
```
npm run test
```

### Dependencias utilizadas
1. ``@badeball/cypress-cucumber-preprocessor: ^18.0.1``
2. ``@bahmutov/cypress-esbuild-preprocessor": ^2.2.0",``
3. ``cypress: ^12.16.0``
4. ``esbuild: ^0.18.11``
5. ``typescript: ^5.1.6``
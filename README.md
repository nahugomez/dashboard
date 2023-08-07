# Integraciones

¡Bienvenidos al proyecto de integraciones de la Municipalidad de Capital! 🏗

El objetivo principal de este repositorio, es proporcionar una base para migrar los sistemas existentes de la Municipalidad de Capital utilizando como base `React`, buscando modernizar, mejorar la eficiencia y la escalabilidad de los sistemas, como también brindarles una experiencia de usuario más agradable a todos los trabajadores de la municipalidad.

## Detalles del Proyecto

- **Objetivo**: Crear una aplicación web basada en React, que nuclee todos los sistemas de la municipalidad.
- **Tipo**: Aplicación web
- **Lenguaje a utilizar**: JavaScript, utilizando React como framework principal para el desarrollo de las interfaces.
- **Destinado a**: Desarrolladores front-end de la Municipalidad de Capital.

La aplicación web tiene que ser diseñada de tal manera que sea eficiente, fácil de utilizar para el usuario, y fácil de mantener para los desarrolladores, siguiendo una serie de estándares para conseguir una aplicación sólida y escalable.

Cualquier duda respecto al proyecto, no dude en contactarme por [Slack](https://app.slack.com/client/T05JVJBC0JJ/D05JMSM8WSK/rimeto_profile/U05K4S4JDE0)

### User Interface - Material Design

Para el desarrollo de la interfaz del usuario, se van a seguir los lineamientos brindados por [Material Design](https://m3.material.io/), un sistema de diseño _open-source_ desarrollado por Google, que nos da una serie de guías de cómo podemos diseñar nuestras aplicaciones para mejorar la experiencia de usuario al momento de utilizar los sistemas.

Por suerte, no es necesario crear todos los componentes siguiendo esos lineamientos desde cero. En este caso, vamos a utilizar [MaterialUI](https://mui.com/material-ui/getting-started/installation/) que nos va a dar una serie de componentes ya creados y estandarizados para el desarrollo de la interfaz, como botones, _cards_, _switches_, etc.

Los paquetes asociadas a la implementación de Material en la interfaz son

- [@emotion/react](https://www.npmjs.com/package/@emotion/react)
- [@emotion/styled](https://www.npmjs.com/package/@emotion/styled)
- [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material)
- [@mui/material](https://www.npmjs.com/package/@mui/material)

### Authentication & Authorization

En este repositorio, se encuentra un ejemplo sencillo de autenticación y autorización utilizando `Keycloak`, un software _open-source_ que se encarga de gestionar las identidades y sesiones de los usuarios.

> Es completamente necesario para poder utilizar funcionalidades de autorización y autenticación levantar una instancia de Keycloak, que se puede hacer fácilmente utilizando [Docker](https://www.docker.com/), como se explica a continuación.

En el siguiente [link](https://git.municipiosanjuan.gob.ar/-/snippets/7) explico como levantar una instancia local de Keycloak, y como probar las funcionalidades de autenticación y autorización en una aplicación básica de React.

### Manejo de Formularios con Formik y Yup

Recomiendo, para el manejo de formularios dentro de React, utilizar [Formik](https://formik.org/), en conjunto con [Yup](https://www.npmjs.com/package/yup) para realizar una fácil y concisa implementación de formularios.

En el siguiente [link](https://git.municipiosanjuan.gob.ar/-/snippets/3) explico cómo se puede utilizar Formik y Yup para el manejo y validación de formularios en React.

### Manejo de Errores (Client-side)

Para evitar que el error de un componente se propague a toda la aplicación, y se produzca un pantallazo blanco, podemos encapsular el error utilizando un componente de clase `ErrorBoundary`. Recomiendo utilizarlo para el manejo de errores del lado del cliente, para brindar una mejor experiencia de usuario.

El componente debe envolver aquellos componentes que sean propensos a disparar errores, para evitar que se dispersen al resto de la aplicación.

En el siguiente [link](https://git.municipiosanjuan.gob.ar/-/snippets/6) explico cómo se puede implementar el componente `ErrorBoundary` dentro de la aplicación.

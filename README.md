# 48h React Frontend Challenge

# Objetivo

Implementa una interfaz, basándose en el prototipo entregado, donde un padre de familia puede ver el status de las mensualidades/colegiaturas de su hijo/hija usando React.js e integrando los APIs que entregan la información necesaria.

# Descripción

1. Implementa el flujo especificado en el siguiente [prototipo](https://adolfo445847.invisionapp.com/prototype/ckzohx3jj00vbtz01c81rjvrf/play).

1. Integra las siguientes APIs para extraer la información necesaria para poblar la interfaz:

   - **Retrieve Student Info**

     Este endpoint te entregará toda la información básica del estudiante, de su escuela y su responsable.

     ```bash
     curl --location --request GET 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/' \
     --header 'hash: OcJn4jYChW'
     ```

     **Ejemplo de respuesta:**

     ```json
     {
       "id": "3b35fb50-3d5e-41b3-96d6-c5566141fab0",
       "first_name": "Mateo",
       "last_name": "Creamer",
       "guardian": {
         "id": "b5ad0bde-f1bb-433a-8124-10379cc906f5",
         "first_name": "Valeria",
         "last_name": "Wu",
         "email": "adoval4@gmail.com",
         "phone": "+51950862507",
         "tax_id": "47865675"
       },
       "cohort": "Primer año",
       "school": {
         "id": "41ecfd5e-ffd2-44b3-8df5-70279624ad41",
         "name": "Innova Schools San Miguel",
         "logo": null,
         "country": "PE",
         "city": null,
         "address": "Jr. La paz 123",
         "zip_code": null
       },
       "monthly_grant_type": null,
       "monthly_grant_value": null,
       "inscription_grant_value": null,
       "inscription_grant_type": null
     }
     ```

   - **List Student Orders**
     Este endpoint entrega la información de las ordenes de pago del estudiante.
     ```bash
     curl --location --request GET 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/' \
     --header 'hash: OcJn4jYChW'
     ```
     **Ejemplo de respuesta:**
     ```json
     [
       {
         "id": "dc438d87-18fc-4f65-8927-d860d1496795",
         "concept": "MONTHLY",
         "name": "Colegiatura Enero 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-01-05",
         "status": "PAID",
         "interest": "1000.00",
         "payin": {
           "id": "487244ce-9a64-4bf8-8feb-e9599f1a7ee3",
           "created": "2022-02-09T19:21:57.752070Z"
         }
       },
       {
         "id": "ac1d2527-a0ec-4d98-a981-7c97c50580cf",
         "concept": "MONTHLY",
         "name": "Colegiatura Febrero 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-02-05",
         "status": "DUE",
         "interest": "500.00",
         "payin": null
       },
       {
         "id": "c2866664-020a-4df3-a078-f08337c3cb3a",
         "concept": "MONTHLY",
         "name": "Colegiatura Marzo 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-03-05",
         "status": "OUTSTANDING",
         "interest": "None",
         "payin": null
       },
       {
         "id": "c25f618b-b6ad-4941-972c-0be4e1c659ab",
         "concept": "MONTHLY",
         "name": "Colegiatura Abril 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-04-05",
         "status": "OUTSTANDING",
         "interest": "None",
         "payin": null
       },
       {
         "id": "25d4dd53-c45a-4e0a-afb7-fcff15b3a612",
         "concept": "MONTHLY",
         "name": "Colegiatura Mayo 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-05-05",
         "status": "OUTSTANDING",
         "interest": "None",
         "payin": null
       },
       {
         "id": "bd394e6e-b322-49c8-9b3f-29931a978880",
         "concept": "MONTHLY",
         "name": "Colegiatura Junio 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-06-05",
         "status": "OUTSTANDING",
         "interest": "None",
         "payin": null
       },
       {
         "id": "46d73bcf-e25d-4531-847d-8ccd5b1870cb",
         "concept": "MONTHLY",
         "name": "Colegiatura Julio 22",
         "price": "5000.00",
         "price_currency": "MXN",
         "due": "2022-07-05",
         "status": "OUTSTANDING",
         "interest": "None",
         "payin": null
       }
     ]
     ```

# Recomendaciones

1. Usar Next.js
2. Usar los componentes de la liberaría MUI ([https://mui.com](https://mui.com/))
3. Implementa tu servidor como un servicio de Docker Compose
4. Siéntete libre de hacer mejoras al prototipo. Por ejemplo: cómo hacer más claro que solo puedes seleccionar la cuota/colegiatura del mes siguiente al últimos pagado o seleccionado.

# Entregables

Envíame un email a **adolfo@getcometa.com** con el asunto **Cometa - React Frontend Challenge** en donde nos compartes:

- El enlace a un repositorio público donde podemos ver tu código.
- Un enlace a una demo live de tu implementación.

# Dudas?

Si tienes alguna consulta, escríbeme a **adolfo@getcometa.com**

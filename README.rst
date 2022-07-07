===========
Workahomies
===========

Introducción
############

Descripción
-----------

Workahomies es un proyecto que busca implementar una plataforma que conecte a profesionales
que buscan compartir un momento de trabajo con otros colegas.

Al ingresar en la aplicación por defecto se mostrarán las ubicaciones de los hosts mas cercanos
a tu ubicación. Luego también tendras la opción de buscar ingresando una ciudad, calle, o
dirección para ver los hosts en dicha ubicación. Cada opción mostrará de manera agradable
rápida y sencilla información relevante sobre esos hosts que te permita tomar una decisión
sobre cual elegir acorde a tu perfil.

Para esto los usuarios podrán interactuar con la aplicación de dos maneras, host o guest.
En cualquier momento luego y durante el registro tendrás la opción de habilitar y completar
los datos para ser host, es decir recibir en tu lugar de trabajo a otros colegas o profesionales
de áreas de tu interes. Para ello deberás completar información sobre las condiciones de tu lugar
de trabajo y la disponibilidad horaria que tienes. Una vez hecho esto los otros usuarios de
la plataforma podrán solicitarte y coordinar el día y hora para poder trabajar juntos.
Por defecto todos los usuarios actuan de modo guest, es decir, aún aunque seas host
puedes también ser guest de otros usuarios.

Los datos al registrarse serán los típicos de toda aplicación, como nombre, apellido, email,
pero además datos de tu profesión o profesiones, e intereses personales con el objetivo
de conectar a las personas con la mayor compatibilidad posible.

Se piensa en implementar tanto la versión web, pero más importante será implementar una
versión mobile. La aplicación se basará mucho en la ubicación de las personas de manera
que el uso de mapas es muy importante para marcar en él, los hosts mas cercanos.

El rating o reputación de los usuarios será bastante importante como en todas las
aplicaciones donde se conecta con desconocidos es por eso que los usuarios podrán
dejar reviews, y puntuar tanto a los hosts como a los guest.

Otra característica que se agregará es la posiblidad de a modo blog subir historias
sobre los logros alcanzados, anecdotas, y casos de éxito que estos usuarios consiguieron
gracias a esta interacción. La idea es contar una historia no dar un feedback sobre la app.

Estado del Arte
---------------

En los últimos años las personas que combinan trabajar y viajar al mismo tiempo creció
considerablemente, es así que negocios como coworkings y plataformas como Coachsurfing,
Airbnb, Meetups, Workpackers y otras también crecieron en usuarios.

Mientras se está de viaje sobre todo cuando te mueves constantemente (nómada digital) encontrar
otros profesionales y un lugar cómodo de trabajo a veces puede costar un poco, lo más común es
buscar un coworking cerca y pagar casi lo que la noche de hospedaje por solo un par de horas.
Este proyecto busca que los usuarios creen sus perfiles con la información de su profesión y
lugar de trabajo disponible, puede ser una mesa o un escritorio extra que tengan en sus casas
y ofrecerlo a estos viajeros. En retribución ellos obtienen el intercambio cultural y quizás
ideas o ayudas en sus propios proyectos/trabajo ya que compartirán una jornada laboral.
Esto generará comunidad y una red de contactos enorme lo que también generará nuevas ideas
de proyectos y emprendimientos entre los usuarios de esta plataforma.

Otra ventaja a diferencia de plataformas como coachsurfing es que lo que se ofrece no es un lugar
para dormir entonces la desconfianza inicial de usar el producto será menor.

Impacto innovador
-----------------

Si bien otras plataformas o aplicaciones como las ya mencionada coachsurfing o meetup se pueden
usar con este fin, la propuesta innovadora será en focalizar el tipo de interacción y usuarios
que la usarán. Se guiará y remarcará fuertemente que es una herramienta de intercambio
de experiencia laboral y en un punto más minimalista, sólo un lugar cómodo para
trabajar. La información solicitada será extrictamente con ese objetivo. De igual forma ese será
uno de los desafíos iniciales, que los usuarios comprendan claramente cual es el uso que
se le debe dar a la plataforma.

Objetivos
---------

Los objetivos del proyecto son los siguientes:

1. Crear un servicio que sea útil y sea aceptado por los usuarios a los que apunta,
2. Crear en un tiempo corto una versión MVP que nos permita saber la aceptación de la propuesta.
3.

Objetivos personales:

1. Crear en un tiempo corto una versión MVP que nos permita saber la aceptación de la propuesta.
2. Aprender y diseñar una buen UI/UX utilizando corrientes de diseño trending como el Neobrutalism.
3. Construir una aplicación
4. Aprender sobre desarrollo mobile.

Obstáculos
----------

Algunos de los obstáculos o complicaciones que tendremos serán:

- Mantener el scope del mvp acotado,
- Lanzar una versión funcional en el tiempo requerido,
- Aprender sobre cuestiones legales que implican a la aplicación,
- Difundir la plataforma, generar usuarios activos,
- Monetizar (modelo Airbnb, modelo Coachsurfing),
- Mantener un flujo de nuevos usuarios constante o creciente.

Para poder afrontar estos obstáculos será necesario de un plan de trabajo bien
definido, planificar y definir bien las tarjetas de las primeras iteraciones sobre todo.
Para la versión mvp ir por tecnologías conocidas, el stack podría ser Typescript, NestJS,
PostgreSQL, React.
Consultar con profesionales sobre temas legales implicados que nos ayuden a definir
y redactar las póliticas. También sobre que licencias podríamos necesitar.
Para la difusión lo más conveniente será buscar ayuda en un communty manager que nos ayude
a crear los espacios necesario en redes.
Confiamos en el atractivo del producto para atraer a los primeros usuarios.

Implementación
##############

Plan trabajo
------------

El plan de trabajo lo devidiremos en tres etapas:

- Análisis de requerimientos: definiremos y detallaremos las features
necesarias para completar el proyecto en su totalidad.
- Análisis y diseño: se analizarán desde un punto de vista técnico la lista
de features entregadas en la etapa anterior y definir el alcance del MVP.
Luego se creará un modelo de la arquitectura, un modelo de datos y mockups
de las vistas. Al final esta etapa tendremos un prototipo de la aplicación,
modelo de datos, arquitectura y assets necesarios.
- Implementación: para la implementación seguiremos una metodología ágil
un poco modificada de manera que nos permita trabajar de maneras más asincrona.
Por eso es muy importante el detalle y reducir cualquier ambigüedad que pueda
surgir en la etapa anterior.

Cronograma de actividades:
1. Análisis de requerimientos.
2. Análisis y diseño: definir alcance.
3. Análisis y diseño: crear diagrama con la arquitectura de la aplicación.
4. Análisis y diseño: crear diagrama de datos.
5. Análisis y diseño: crear mockups.
6. Análisis y diseño: definir stack.
7. Implementación: Setup del proyecto, repositorios.
8. Implementación: Módulo de usuarios.
9. Implementación: Módulo de autenticación (Auth0).
10. Implementación: Módulo de profile de usuarios.
11. Implementación: Módulo de verificación de ID.
12. Implementación: Módulo de historias.
13. Implementación: Home page.
14. Implementación: user profile page.
15. Implementación: searching page.
16. Implementación: host detail page.
17. Implementación: How it works page.
18. Implementación: Experiences page.
19. Implementación: About us page.


Tabla de entregables y fechas


Estructura y metodología de trabajo
-----------------------------------

Del proyecto formaremos parte dos personas, dos desarrolladores pero en el camino
tendremos que ir haciendo tarea de otros roles como diseño, testing.

La metodología será un scrum modificado donde tendremos reuniones semanales (weekly)
donde servirá como demo de los entregables, consulta y planning de lo siguiente a priorizar.
La daily la haremos solo por chat implementando un bot por slack que pregunte por
tareas completadas, tareas en progreso y dificultades o bloqueantes. En cualquier momento
en caso de ser necesario podremos iniciar una llamada pero debemos mantenerlo al mínimo.


Equipo y recursos
-----------------

Para el proyecto el equipo se conformará por dos desarrolladores Full-stack, los cuales
implementarán la aplicación y también se encargarán del despliegue y pruebas.
Para algunas tareas específicas se necesitará ayuda externa en forma de consultoría
o trabajo a demanda. Necesitaremos un diseñador, para el diseño de assets (logo, ilustraciones, dibujos).
Asesoría legal con temas relacionados a las responsabilidades por parte de los involucrados.
Y una persona para el marketing digital, sabemos que esto es algo muy complejo pero nos
acotaremos a unos objetivos especificos aún no definidos.

+-------------------------+----------------+----------------------------------------------------+
| Recursos                | Costo estimado | Justificación                                      |
+=========================+================+====================================================+
| VPS o servicio cloud    | $25/m          | Servidor para el despliegue                        |
+-------------------------+----------------+----------------------------------------------------+
| Dominio                 | $15/y          | Registro de un dominio                             |
+-------------------------+----------------+----------------------------------------------------+
| Certificado ssl         | $100/y         | Compra del certificado                             |
+-------------------------+----------------+----------------------------------------------------+
| Service google maps     | $200/m         | Service google maps necesaria para el uso de mapas |
+-------------------------+----------------+----------------------------------------------------+
| Service aws rekognition | $100/m         | Service aws rekognition para validar los ID        |
+-------------------------+----------------+----------------------------------------------------+
| Asesoría legal          | $25/h          | Remuneración por servicios prestados               |
+-------------------------+----------------+----------------------------------------------------+
| Diseñador               | $20/h          | Remuneración por servicios prestados               |
+-------------------------+----------------+----------------------------------------------------+
| Marketing digital       | $20/h          | Remuneración por servicios prestados               |
+-------------------------+----------------+----------------------------------------------------+


Seguridad
#########

No estoy seguro de esto.

Plan de ventas y comunicación
#############################

El plan de negocio aún no está definido y es una de los grandes complicaciones que tendremos
sin embargo si conseguimos que la plataforma se use de manera masiva el plan de negocio
aparecerá.

El servicio apunta a un público determinado, personas que buscan un complemento en su jornada laboral,
compartir un momento, un brainstorming, feedback. Estas personas por lo general son viajeros que trabajan
de manera remota, personas en sus ciudades haciendo teletrabajo buscando cambiar de ambiente. Este
es el tipo de usuarios que necesitamos atraer. Usuarios que normalmente usarían aplicaciones como
Meetup, Celebreak, Coachsurfing, Airbnb, es decir aplicaciones de comunidad y encuentro. Personas
con edades entre los 20 y los 50 años que tengan un buen manejo de la tecnología.

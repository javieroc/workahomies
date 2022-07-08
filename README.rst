.. sectnum::

.. footer::

  ###Page###

===========
Workahomies
===========

Introducción
############

Descripción
-----------

Workahomies es un proyecto que busca implementar una plataforma que conecte a profesionales
que buscan compartir un momento de trabajo con otros colegas, encontrar un lugar para conectarse
y trabajar sin tener que buscar necesariamente un coworking. Está destinado a personas que combinan
viajar con trabajar de manera remota, también personas que trabajando desde sus hogares
buscan cambiar de ambiente, compañero para emprender, comenzar un proyecto,
o simplemente compartir una idea o una tarde de trabajo.

Al ingresar en la aplicación por defecto se mostrarán las ubicaciones de los hosts mas cercanos
a tu ubicación. Luego también tendras la opción de buscar ingresando una ciudad, o
dirección para ver los hosts en dicha ubicación. Los hosts, resultado de la búsqueda,
se mostrarán de manera agradable rápida y sencilla con un detalle  de la información
relevante sobre dichos hosts que te permita tomar una decisión sobre cual elegir acorde a tu perfil.

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

La aplicación se basará mucho en la ubicación de las personas de manera
que el uso de mapas será necesario para marcar en él, los hosts mas cercanos.

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
lugar de trabajo disponible, éste puede ser una mesa o un escritorio extra que tengan en sus casas
y ofrecerlo a estos viajeros. En retribución ellos obtienen el intercambio cultural y quizás
ideas o ayudas en sus propios proyectos/trabajo ya que compartirán una jornada laboral.
Esto generará comunidad y una red de contactos enorme lo que también generará nuevas ideas
de proyectos y emprendimientos entre los usuarios de esta plataforma.

Otra ventaja a diferencia de plataformas como coachsurfing es que lo que se ofrece no es un lugar
para dormir entonces la desconfianza inicial de usar el servicio será menor.

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

Los objetivos del proyecto:

1. Crear un servicio que sea útil y sea aceptado por los usuarios a los que apunta,
2. Ser un servicio que al mismo tiempo genere comunidad,
3. Implementar una aplicación sólida desde lo técnico.

Objetivos personales:

1. Poner a prueba habilidades para gestionar un proyecto desde 0.
2. Aprender y diseñar una buen UI/UX utilizando corrientes de diseño trending como el Neobrutalism.
3. Aprender sobre desarrollo que implique una alta concurrencia y disponibilidad si es que
   el número de usuarios crece como esperamos.

Obstáculos
----------

Algunos de los obstáculos o complicaciones que tendremos serán:

- Mantener el scope del mvp acotado,
- Lanzar una versión funcional en el tiempo requerido,
- Aprender sobre cuestiones legales que implican a la aplicación,
- Difundir la plataforma, generar usuarios activos,
- Monetizar la aplicación (modelo Airbnb, modelo Coachsurfing),
- Mantener un flujo de nuevos usuarios constante o creciente.


Para poder afrontar estos obstáculos será necesario de un plan de trabajo bien
definido, planificar y definir bien las tarjetas de las primeras iteraciones sobre todo.
Para la versión mvp ir por tecnologías conocidas, el stack podría ser Typescript, NestJS,
PostgreSQL, React.

Consultar con profesionales sobre temas legales implicados que nos ayuden a definir
y redactar las póliticas y licencias que podríamos necesitar.
Para la difusión lo más conveniente será buscar ayuda en un communty manager que nos ayude
a crear los espacios necesario en redes.
Confiamos en el atractivo del producto para atraer a los primeros usuarios.

Implementación
##############

Plan trabajo
------------

El plan de trabajo se conforma de las siguientes etapas:

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
- Difusión: seguir un plan de marketing que se definirá con ayuda de alguien con más
  conocimientos sobre el tema.

**Cronograma de actividades:**

+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Task Name                                                                    | Assignee                         | Start Date                     | Due Date                       |
+==============================================================================+==================================+================================+================================+
| Analisis de requerimientos                                                   | Javier Ocampo,                   | Monday, August 1st 2022        | Wednesday, August 3rd 2022     |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Análisis y diseño: Definir alcance.                                          | Javier Ocampo,                   | Thursday, August 4th 2022      | Friday, August 5th 2022        |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Análisis y diseño: Crear diagrama con la arquitectura de la aplicación.      | Javier Ocampo,                   | Monday, August 8th 2022        | Tuesday, August 9th 2022       |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Análisis y diseño: Crear diagrama de datos.                                  | Javier Ocampo,                   | Wednesday, August 10th 2022    | Friday, August 12th 2022       |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Análisis y diseño: Crear mockups                                             | Javier Ocampo                    | Monday, August 15th 2022       | Friday, August 19th 2022       |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Crear encuestas online para ver aceptación de la propuesta.                  | Javier Ocampo,                   | Monday, August 22nd 2022       | Wednesday, August 24th 2022    |
|                                                                              | Diseñador                        |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Setup del proyecto, repositorios.                            | Javier Ocampo,                   | Monday, August 22nd 2022       | Wednesday, August 24th 2022    |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Módulo de usuarios.                                          | Matías Novoa                     | Thursday, August 25th 2022     | Friday, September 2nd 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Módulo de autenticación (Auth0)                              | Javier Ocampo,                   | Monday, September 5th 2022     | Friday, September 9th 2022     |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Módulo de profile de usuarios                                | Matías Novoa                     | Monday, September 12th 2022    | Wednesday, September 14th 2022 |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Módulo de verificación de ID                                 | Javier Ocampo,                   | Wednesday, September 14th 2022 | Tuesday, September 20th 2022   |
|                                                                              | Matías Novoa                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Módulo de historias                                          | Matías Novoa                     | Wednesday, September 21st 2022 | Tuesday, September 27th 2022   |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Home page                                                    | Javier Ocampo                    | Wednesday, September 28th 2022 | Friday, October 7th 2022       |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: User profile page                                            | Javier Ocampo                    | Monday, October 10th 2022      | Friday, October 14th 2022      |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Searching page                                               | Javier Ocampo                    | Monday, October 17th 2022      | Wednesday, October 26th 2022   |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Host detail page                                             | Javier Ocampo                    | Thursday, October 27th 2022    | Tuesday, November 1st 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: How it works page                                            | Javier Ocampo                    | Wednesday, November 2nd 2022   | Friday, November 4th 2022      |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: Experiences page                                             | Javier Ocampo                    | Monday, November 7th 2022      | Friday, November 11th 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Implementación: About us page                                                | Javier Ocampo                    | Monday, November 14th 2022     | Wednesday, November 16th 2022  |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Redactar y agregar policy                                                    | Javier Ocampo,                   | Monday, November 1st 2022      | Wednesday, November 16th 2022  |
|                                                                              | Matias Novoa,                    |                                |                                |
|                                                                              | Asesor legal                     |                                |                                |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Difusión: Crear contenido audiovisual                                        | Diseñador, Asesor de marketing   | Thursday, November 17th 2022   | Friday, November 25th 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Difusión: Crear cuenta de instagram y página en facebook                     | Javier Ocampo, Community manager | Wednesday, November 23rd 2022  | Tuesday, November 29th 2022    |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Difusión: Publicitar la app en comunidades y redes sociales                  | Javier Ocampo, Community manager | Wednesday, November 30th 2022  | Tuesday, December 6th 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Difusión: Subscribirse y administrar servicios de publicidad (google, otros) | Javier Ocampo                    | Monday, December 12th 2022     | Friday, December 16th 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+
| Mantenimiento, bug fixing, correciones acorde a feedback de los usuarios.    | Javier Ocampo                    | Monday, December 19th 2022     | Friday, December 30th 2022     |
+------------------------------------------------------------------------------+----------------------------------+--------------------------------+--------------------------------+


Estructura y metodología de trabajo
-----------------------------------

El equipo estará formado por dos desarrolladores, y eventualmente sumaremos personas que nos
ayuden en tareas específicas como puede ser un diseñador, un asesor legar y una persona
de marketing digital.

La metodología será un scrum modificado donde tendremos reuniones semanales (weekly)
donde tendrá lugar la demo de los entregables, consulta y planning de lo siguientes milestones a priorizar.
La daily la haremos solo por chat implementando un bot por slack que pregunte por
tareas completadas, tareas en progreso y dificultades o bloqueantes. En cualquier momento
si se requiere podremos iniciar una llamada para aclarar alguna duda o brindar la ayuda
necesaria.


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



Plan de ventas y comunicación
#############################

El plan de negocio aún no está definido y es una de los grandes complicaciones que tendremos
sin embargo si conseguimos que la plataforma se use de manera masiva el plan de negocio
aparecerá.

El servicio apunta a un público determinado, personas que buscan un complemento en su jornada laboral,
compartir un momento, un brainstorming, feedback. Estas personas por lo general son viajeros que trabajan
de manera remota, también personas que trabajando desde sus hogares buscan cambiar de ambiente. Este
es el tipo de usuarios que necesitamos atraer. Usuarios que normalmente usarían aplicaciones como
Meetup, Celebreak, Coachsurfing, Airbnb, es decir aplicaciones de comunidad y encuentro. Personas
con edades entre los 20 y los 50 años que tengan un buen manejo de la tecnología.

Mientras la implementación del proyecto va en curso, se obtendrán feedback sobre la propuesta
usando pequeñas encuestas online que se compartirá en foros, grupos de telegram, grupos en
Slack, y otras comunidades.

Una véz terminada la primera versón del proyecto, por los mismos canales de comunicación se
invitará a los potenciales usuarios a unirse a la plataforma. Se lanzará una campaña de publicidad
a través de redes sociales junto a la de cuenta de instagram y página de facebook.

En una tercera etapa con el feedback de las encuestas y las primeros resultados sobre la aceptación
del servicio, se publicitará contratando publicidad en google para tener anuncios sobre todo en youtube,
y otros medios digitales. Para ello será necesario generar material audiovisual.

Relevar métricas y tomar acciones en base a ellas, mejorar la estrategia de marketing o incluso
rediseños en la app para mantener y captar más usuarios.

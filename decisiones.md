## Ingenieria de software 3
### Agustin Lopez Villagra - 2324951

## 1. Configurar tu entorno y preparar tu repositorio

Use:
git config user.name "Agustin Lopez"
git config user.email "agustinlopezv99@gmail.com"
para identificar mis commits y asgururar la trazabilidad.

## 2. Desarrollar una funcionalidad
Trabajá en una rama separada de main.
Hacé al menos 2 commits atómicos con mensajes claros.

para crear una nueva rama use git checkout -b feature/boton-mensaje
la nueva funcionalidad es un boton que al ser presionado muestra un mensaje.
para hacerlo use tres commits diferentes:
- git add index.html y git commit -m 'nueva funcion boton' para la definicion del nuevo boton
- git add src/boton.js src/styles.css y git commit -m 'funcionalidad y estilos para boton'
- git add decisiones.md README.md y git commit -m 'tp2 ej2 terminado' 

Justificá la estrategia que usaste (¿por qué esa rama? ¿por qué esos commits?).
trabajar en una rama separada de main nos permite mantener el codigo principal sinc ambios mientras desarrollamos nuevas funcionalidades. Asi podemos evitar conflictos y mantener codigo limpio y estable.
cree una rama propia para la nueva funcionalidad, esto hace mas facil la revision del codigo y permite una integracion mas controlada a main.
si algo sale mal, podemos revertir el commit sin afectar codigo no relacionado a la nueva feature

cree tres commits distintos buscando mantener la atomicidad, esto tiene varias ventajas: la identificacion rapida de problemas, reversion segura en caso de errores y un codigo mas facil de revisar en general.
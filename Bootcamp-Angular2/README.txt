Notas Curso Angular 2
Para tomar deciones sobre que es mejor para crear la aplicación : iso25000.png

- http://plnkr.co/edit/?p=preview&open=app%2Fapp.component.ts
- https://slides.com/jdjuan/angular2-day1/live#/4/6
- http://es6console.com/
- http://www.typescriptlang.org/play/
- http://www.typescriptlang.org/docs/handbook/classes.html


=====Comandos de Angular Cli =====
ng new = nuevo proyecto
ng generate = se le indica que generar
ng serve = genera un server local
ng github-pages:deploy (puedes añadir el token --gh-token)
ng test
ng init = Crea un nuevo proyecto pero en la carpeta actual

==========otros comandos=========
ng g m moduleName = Creacion de un modulo
ng g c componentName  = Creacion de un componente


ng generate module = ng g m
git reset --hard : deshace todos los cambios

===========Comandos ========
ngClass :  añade clases al elemento

(click)="nombre_del_metodo()"
[ngClass]= "nombre_de_la_clase"


=====Directivas estructurales ======
extienden el comportamiento
*ngIf
*ngFor
ngSwitch{
		ngSwitchCase
		}

nota: el * indica que el div va entre un template y si es verdadero muesta el template.

=====Directivas de Atributos=====
Aumentar la usabilidad del DOM



componente, directivas, bindins, services

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BloqueRedondeadoModule } from './directives/bloque-redondeado/bloque-redondeado.module';
import { DraggableDirective } from './directives/draggable/draggable.directive';
import { EjercicioNgifNgforComponent } from './ejercicios/ejercicio-ngif-ngfor/ejercicio-ngif-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    EjercicioNgifNgforComponent,
  ],
  imports: [
    BrowserModule,BloqueRedondeadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

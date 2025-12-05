import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Importações Angular Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app/app-routing.module';

//import { RestritoRoutingModule } from './app/restrito/restrito-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './app/inicio/inicio.component';
import { LoginComponent } from './app/login/login.component';
import { MenuComponent } from './app/menu/menu.component';
import { RodapeComponent } from './app/rodape/rodape.component';
import { RestritoComponent } from './app/restrito/restrito.component';
import { AtualizaProdutoComponent } from './app/restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './app/restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './app/restrito/lista-produto/lista-produto.component';
import { MenuRestritoComponent } from './app/restrito/menu-restrito/menu-restrito.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
    RodapeComponent,
    RestritoComponent,
    AtualizaProdutoComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    MenuRestritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    //RestritoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

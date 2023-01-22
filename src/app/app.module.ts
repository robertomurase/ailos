import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
import { MainContentComponent } from './components/template/main-content/main-content.component';
import { StepperComponent } from './components/template/stepper/stepper.component';
import { FormComponent } from './components/template/form/form.component';
import { DadosCooperadoComponent } from './components/views/dados-cooperado/dados-cooperado.component';

const maskConfig: Partial<IConfig> = {
  dropSpecialCharacters: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MainContentComponent,
    StepperComponent,
    FormComponent,
    DadosCooperadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

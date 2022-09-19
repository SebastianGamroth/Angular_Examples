import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FilterComponent } from './components/filter/filter.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { UseModelsComponent } from './components/use-models/use-models.component';
import { UseServiceComponent } from './components/use-service/use-service.component';
import { NgformComponent } from './components/ngform/ngform.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiPokeComponent } from './components/api-poke/api-poke.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InputOutputComponent,
    FilterComponent,
    ReactiveFormsComponent,
    UseModelsComponent,
    UseServiceComponent,
    NgformComponent,
    DragAndDropComponent,
    FirebaseComponent,
    ParentComponent,
    ChildComponent,
    ApiPokeComponent,
    CopyrightComponent,
    ImprintComponent,
    PrivacyComponent,
    VirtualScrollingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    MatGridListModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

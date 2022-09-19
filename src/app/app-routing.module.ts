import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPokeComponent } from './components/api-poke/api-poke.component';
import { ChildComponent } from './components/child/child.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { FilterComponent } from './components/filter/filter.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { NgformComponent } from './components/ngform/ngform.component';
import { ParentComponent } from './components/parent/parent.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { UseModelsComponent } from './components/use-models/use-models.component';
import { UseServiceComponent } from './components/use-service/use-service.component';

const routes: Routes = [
  { path: 'input-output', component: InputOutputComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'use-models', component: UseModelsComponent },
  { path: 'use-service', component: UseServiceComponent },
  { path: 'ngform', component: NgformComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'api-poke', component: ApiPokeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'copyright', component: CopyrightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { FilterComponent } from './filter/filter.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgformComponent } from './ngform/ngform.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UseModelsComponent } from './use-models/use-models.component';
import { UseServiceComponent } from './use-service/use-service.component';

const routes: Routes = [
  { path: 'input-output', component: InputOutputComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'use-models', component: UseModelsComponent },
  { path: 'use-service', component: UseServiceComponent },
  { path: 'ngform', component: NgformComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent },
  { path: 'firebase', component: FirebaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

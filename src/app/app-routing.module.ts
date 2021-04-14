import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";
import { LoginComponent } from "./components/login/login.component";
import { StudentsListComponent } from "./components/students-list/students-list.component";
import { AuthGuardService as AuthGuard } from "./shared/auth-guard.service";

const routes: Routes = [
  //add canActivate to the route which u want to be authenticated
  { path: "login", component: LoginComponent },
  {
    path: "add-student",
    component: AddStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-student/:id",
    component: EditStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "students-list",
    component: StudentsListComponent,
    canActivate: [AuthGuard],
  },
  { path: "", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

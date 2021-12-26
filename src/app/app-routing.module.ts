import { ChatAdminComponent } from './chat/chat-admin/chat-admin.component';
import { ChatUserComponent } from './chat/chat-user/chat-user.component';
import { StudentLocationComponent } from './T/student-location/student-location.component';
import { StudentListComponent } from './T/student-list/student-list.component';
import { TechListComponent } from './T/tech-list/tech-list.component';
import { TableListComponent } from './T/table-list/table-list.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { LoginComponent } from './log/login/login.component';
import { RegestierComponent } from './reg/regestier/regestier.component';
import { AddTableComponent } from './table/add-table/add-table.component';
import { ListTableComponent } from './table/list-table/list-table.component';
import { EditSComponent } from './student/edit-s/edit-s.component';
import { AddSComponent } from './student/add-s/add-s.component';
import { ListSComponent } from './student/list-s/list-s.component';
import { LocationComponent } from './location/location.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NfComponent } from './notfound/nf/nf.component';
import { AddTComponent } from './teacher/add-t/add-t.component';
import { ListTComponent } from './teacher/list-t/list-t.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTableComponent } from './table/edit-table/edit-table.component';
const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: HomeUserComponent },
  { path: "", component: LoginComponent },
  { path: "list-t", component: ListTComponent },
  { path: "add-t", component: AddTComponent },
  { path: "list-t/:id", component: UpdateTeacherComponent },
  { path: "location", component: LocationComponent },
  { path: "list-s", component: ListSComponent },
  { path: "add-s", component: AddSComponent },
  { path: "list-s/:id", component: EditSComponent },
  { path: "list-table", component: ListTableComponent },
  { path: "add-table", component: AddTableComponent },
  { path: "list-table/:id", component: EditTableComponent },
  { path: "register", component: RegestierComponent },
  { path: "listTuser", component: TableListComponent },
  { path: "listTechUser", component: TechListComponent },
  { path: "lisStudUser", component: StudentListComponent },
  { path: "StudentLoc", component: StudentLocationComponent },
  { path: "chatUser", component: ChatUserComponent },
  { path: "chatAdmin", component: ChatAdminComponent },








  { path: "**", component: NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
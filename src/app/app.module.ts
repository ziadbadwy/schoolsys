import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListTComponent } from './teacher/list-t/list-t.component';
import { AddTComponent } from './teacher/add-t/add-t.component';
import { NfComponent } from './notfound/nf/nf.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LocationComponent } from './location/location.component';
import { AddSComponent } from './student/add-s/add-s.component';
import { ListSComponent } from './student/list-s/list-s.component';
import { EditSComponent } from './student/edit-s/edit-s.component';
import { EditTableComponent } from './table/edit-table/edit-table.component';
import { ListTableComponent } from './table/list-table/list-table.component';
import { AddTableComponent } from './table/add-table/add-table.component';
import { RegestierComponent } from './reg/regestier/regestier.component';
import { LoginComponent } from './log/login/login.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { TableListComponent } from './T/table-list/table-list.component';
import { TechListComponent } from './T/tech-list/tech-list.component';
import { NavUserComponent } from './Navbar-user/nav-user/nav-user.component';
import { StudentListComponent } from './T/student-list/student-list.component';
import { StudentLocationComponent } from './T/student-location/student-location.component';
import { ChatUserComponent } from './chat/chat-user/chat-user.component';
import { ChatAdminComponent } from './chat/chat-admin/chat-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListTComponent,
    AddTComponent,
    NfComponent,
    UpdateTeacherComponent,
    FooterComponent,
    LocationComponent,
    AddSComponent,
    ListSComponent,
    EditSComponent,
    EditTableComponent,
    ListTableComponent,
    AddTableComponent,
    RegestierComponent,
    LoginComponent,
    HomeUserComponent,
    TableListComponent,
    TechListComponent,
    NavUserComponent,
    StudentListComponent,
    StudentLocationComponent,
    ChatUserComponent,
    ChatAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

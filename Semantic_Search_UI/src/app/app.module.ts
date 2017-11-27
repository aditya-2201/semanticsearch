import { MatTabsModule } from '@angular/material/tabs';
import { SidebarDomainComponent } from './sidebardomain/sidebardomain.component';
import { StompService } from 'ng2-stomp-service';
import { SocketService } from './sidebarresults/socket.service';
import { DomRegisterComponent } from './domainexpertregister/domregister.component';
import { DomainComponent } from './domainexpertlogin/domain.component';
import { LoginComponent } from './adminlogin/login.component';
import { RegisterComponent } from './adminregister/register.component';
import { SidebarAdminComponent } from './sidebaradmin/sidebaradmin';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { SideResComponent } from './sidebarresults/sideres.component';
import { MainComponent } from './main/main.component';
import { FinalComponent } from './final/final.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import { SearchComponent } from './search/search.component';
import { DisplayService } from './display.service';
import { HttpModule } from '@angular/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import { ChatModule } from './chat.module';
import { AudioService } from './audio.service';
import {FormsModule} from "@angular/forms";
import {BusyModule} from 'angular2-busy';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FinalComponent,
    MainComponent,
    SideResComponent,
    AdminpanelComponent,
    SidebarAdminComponent,
    RegisterComponent,
    LoginComponent,
    DomainComponent,
    DomRegisterComponent,
    SidebarDomainComponent

    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    ChatModule,
    FormsModule,
    BrowserAnimationsModule,
    BusyModule,
    MatProgressBarModule,
    RouterModule.forRoot([

      { path: '', component: FinalComponent },
      { path: 'search', component: SearchComponent },
      { path: 'final', component: FinalComponent },
      { path: 'main', component: MainComponent },
      { path: 'admin', component: AdminpanelComponent },
      { path: 'sidebaradmin', component: SidebarAdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'sideres/:concept/:intent', component: SideResComponent },
      { path: 'domainexpertlogin', component: DomainComponent },
      { path: 'domregister', component: DomRegisterComponent },
      { path: 'sidebardomain', component: SidebarDomainComponent }
      
    ])
  ],
  providers: [DisplayService,AudioService,SocketService,StompService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

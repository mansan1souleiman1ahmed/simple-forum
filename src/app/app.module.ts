import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ForumPageComponent } from "./page/forum-page/forum-page.component";
import { MaterialModule } from "./material/material/material.module";
import { ForumComponent } from "./components/forum/forum.component";

// ...other imports
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ComponentListComponent } from "./components/component-list/component-list.component";
import { WssService } from "./service/wss.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ForumPageComponent,
    ForumComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [WssService],
  bootstrap: [AppComponent]
})
export class AppModule {}

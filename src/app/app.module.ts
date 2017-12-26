import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { WebsocketService } from './shared/websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

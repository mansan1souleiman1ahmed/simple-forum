import { Injectable } from "@angular/core";
//import { Socket } from "ngx-socket-io";
import { MessageModel } from "../model/message";

import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WssService {
  private url = "";
  private urlApi = "api";

  private socket;
  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }
  public sendName(name) {
    this.socket.emit("new-name", name);
  }
  public sendMessage(message) {
    this.socket.emit("new-message", message);
  }
  public getName = () => {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("new-name", name => {
        observer.next(name);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  };

  public getMessages = () => {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("new-message", message => {
        observer.next(message);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  };
  //Get recipes=> See the components.ts and .html files.
  public receiveMessagesDB(): Observable<MessageModel[]> {
    return this.http.get<any>(this.urlApi);
  }
}

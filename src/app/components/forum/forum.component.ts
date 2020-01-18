import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { Subscription } from "rxjs";
import { Document } from "src/app/model/document";
import { startWith } from "rxjs/operators";
import { WssService } from "src/app/service/wss.service";
import { MessageModel } from "src/app/model/message";
@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"]
})
export class ForumComponent implements OnInit {
  message: string;
  messageDb: string;
  name: string;
  nameDb: string;
  names: string[] = [];
  namesDb: string[] = [];
  nameDisplay: string;
  nameDisplayDb: string[];
  messages: string[] = [];
  messagesDb: string[] = [];
  @ViewChild("scrollTop", { static: false }) scrollTop: ElementRef;
  constructor(private wssService: WssService) {}
  sendMessage() {
    this.wssService.sendMessage(this.message);
    this.message = "";
    console.log("sucess");
    this.wssService.sendName(this.name);
    this.name = "";
  }
  scroll() {
    this.scrollTop.nativeElement.scrollTop = this.scrollTop.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    //Scroll
    this.scroll();
  }

  ngOnInit() {
    this.wssService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
      // console.log(message);
    });
    this.wssService
      .receiveMessagesDB()
      .subscribe((messageFromDb: MessageModel[]) => {
        //console.log(messageFromDb);
        messageFromDb.forEach(ele => {
          //  console.log(ele.message);
          this.messagesDb.push(ele.message);
          this.namesDb.push(ele.name);
          console.log(this.namesDb[0]);
        });
      });
    this.wssService.getName().subscribe((name: string) => {
      this.names.push(name);
      //   console.log(this.names);
      //   console.log(this.names);
    });
  }
}

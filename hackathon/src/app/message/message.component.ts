import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  tempAlert: string = "primary";
  constructor() { }

  ngOnInit() {
    this.getTempAlert();
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  public getTempAlert(){
    console.log("test");
    if(parseFloat(this.message.LPC.tempav) > 7 || parseFloat(this.message.LPC.tempar) > 7){
      this.tempAlert = "danger";
    }
    this.tempAlert = "primary";
  }
}

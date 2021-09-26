import { Injectable } from '@angular/core';

export interface Message {
  id: number;
  voyage: string;
  tourne: string;
  porte: string;
  transporteur: string;
  nbpos:  string;
  nbum: string;
  tonnage: string;
  temperature: string;
  datefin: string;
  LPC: any
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      "id" : 0,
      "voyage":"DSIU00",
      "tourne":"B300",
      "porte":"06D",
      "transporteur":"STEF TRP NANTES",
      "nbpos":"3",
      "nbum":"4",
      "tonnage":"2100",
      "temperature":"FR/SU",
      "datefin":"24/09/2021 11h00",
      "LPC":{
        "tempav":"7",
        "tempar":"-26",
        "LPC":"02FC065092529328",
        "progress":"50",
        "tps":"45",
        "umcharge":"15",
        "alerte":""
        }
      },
      {
      "id" : 1,
      "voyage":"DIB300",
      "tourne":"B300",
      "porte":"08D",
      "transporteur":"STEF TRP NANTES",
      "nbpos":"1",
      "nbum":"1",
      "tonnage":"49",
      "temperature":"FR",
      "datefin":"24/09/2021 11h00",
      "LPC":	{
        "tempav":"7",
        "tempar":"6",
        "LPC":"02FC065092521452",
        "progress":"0",
        "tps":"20",
        "umcharge":"0",
        "alerte":""
        }
      },
      {
      "id" : 2,
      "voyage":"PBE100",
      "tourne":"B100",
      "porte":"10D",
      "transporteur":"OLANO",
      "nbpos":"1",
      "nbum":"3",
      "tonnage":"500",
      "temperature":"SU",
      "datefin":"24/09/2021 11h30",
      "LPC":	{
        "tempav":"-24",
        "tempar":"-26",
        "LPC":"02FC065092576249",
        "progress":"0",
        "tps":"45",
        "umcharge":"0",
        "alerte":""
        }
      },
      {
      "id" : 3,
      "voyage":"LYO300",
      "tourne":"L300",
      "porte":"02D",
      "transporteur":"STEF TRP NANTES",
      "nbpos":"5",
      "nbum":"10",
      "tonnage":"5600",
      "temperature":"FR",
      "datefin":"24/09/2021 12h00",
      "LPC":	{
        "tempav":"5",
        "tempar":"5",
        "LPC":"02FC065092090023",
        "progress":"0",
        "tps":"45",
        "umcharge":"0",
        "alerte":""
        }
      },
      {
        "id" : 4,
        "voyage":"PAR100",
        "tourne":"P100",
        "porte":"10D",
        "transporteur":"OLANO",
        "nbpos":"2",
        "nbum":"7",
        "tonnage":"2500",
        "temperature":"FR",
        "datefin":"24/09/2021 13h30",
        "LPC":	{
          "tempav":"5",
          "tempar":"6",
          "LPC":"02FC065095666432",
          "progress":"0",
          "tps":"45",
          "umcharge":"0",
          "alerte":""
          }
      },
      {
        "id" : 5,
        "voyage":"BEG700",
        "tourne":"B700",
        "porte":"24D",
        "transporteur":"STEF TRP NANTES",
        "nbpos":"1",
        "nbum":"1",
        "tonnage":"77",
        "temperature":"FR",
        "datefin":"24/09/2021 15h00",
        "LPC":	{
          "tempav":"7",
          "tempar":"6",
          "LPC":"02FC065092521452",
          "progress":"0",
          "tps":"20",
          "umcharge":"0",
          "alerte":""
          }
      }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}

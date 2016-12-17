import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class ChatRoomService {
    private APIEndPoint = 'https://socketiochat-p1p3.c9users.io/';
    private headers = new Headers({'Content-Type': 'application/json'});

    private options = new RequestOptions({headers: this.headers});

    private messages:Array<Message>;
    constructor(private http:Http) { 
        this.messages  = new Array<Message>();
    }

    postMessage(message:Message){
        return this.http.post(this.APIEndPoint+'/message', message,this.options).toPromise()
        // this.messages.push(message)
    }

    getMessages(){
        return this.http.get(this.APIEndPoint+'/message')
        .toPromise()
        .then(response => response.json() as Message[])
        // return this.messages;
    }
}
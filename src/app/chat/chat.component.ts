import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({

	selector: 'chat',
	template: `
		<div>
			<textarea placeholder="Type a message" cols="50" rows="5" [(ngModel)]="message"></textarea><br/>
			<input type="button" value="Send" (click)="sendMessage()"/>
		</div>
	`
})
export class ChatComponent implements OnInit{

	message: string;

	constructor(private chatService: ChatService) { }

	sendMessage() {

		this.chatService.sendMessage(this.message);
	}

	ngOnInit() {

		this.chatService.getMessages().subscribe((messages) => {

			console.log(messages);
		});
	}

}
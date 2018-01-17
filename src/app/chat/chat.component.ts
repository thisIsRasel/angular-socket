import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import 'rxjs/add/operator/map';

@Component({

	selector: 'chat',
	template: `
		<div>
			<div>
				<textarea placeholder="Type a message" cols="50" rows="5" [(ngModel)]="message" (keyup.enter)="sendMessage()"></textarea><br/>
				<input type="button" value="Send" (click)="sendMessage()" />
			</div>

			<br/>

			<div style="height: 200px; width: 450px; border: 1px solid grey; overflow: auto;">
				<p *ngFor="let message of messages">{{ message.text }}</p>
			</div>
		</div>
	`
})
export class ChatComponent implements OnInit{

	message: string;
	messages: any[] = [];

	constructor(private chatService: ChatService) { }

	sendMessage() {

		this.chatService.sendMessage(this.message);
		this.message = "";
	}

	ngOnInit() {

		this.chatService.getMessages().map(response => response).subscribe((messages) => {

			console.log(messages);

			this.messages.push(messages);
		});
	}

	onEnter(event: any) {

		console.log('enter pressed');
	}

}
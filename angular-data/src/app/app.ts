import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { UserItem } from './user-item/user-item';
import { HelloWorld } from './hello-world/hello-world';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserItem, HelloWorld,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data');
}

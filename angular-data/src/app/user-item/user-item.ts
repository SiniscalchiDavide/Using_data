import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-user-item',
  standalone: true, // Assicurati che sia presente se usi 'imports'
  imports: [],
  templateUrl: './user-item.html', // Verifica che il nome file sia corretto
  styleUrl: './user-item.css',
})
export class UserItem implements OnInit {
  name: string; 

  constructor() { 
    this.name = 'Felipe'; 
  }
  
  ngOnInit() {
  }
}
import { ClientComponent } from './../../../pages/client/client/client.component';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: Client[] = [];
  totalClients: Number = 0;
  totalEnterprises: Number = 0;
  totalRealties: Number = 0;

  constructor(private ClientService: ClientService) {
  }


  ngOnInit(): void {
    this.ClientService.getAll()
      .subscribe((clients) => this.clients = clients)
  }

  clearFields() {}
  getClientByName(){}
  getEnterpriseByName(){}
  getEnterprisesByClientName(){}
  getEnterpriseByNameAndClientName(){}
  
}

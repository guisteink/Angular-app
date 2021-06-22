import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  totalClients: Number = 0;
  totalEnterprises: Number = 0;
  totalRealties: Number = 0;
  name: string = ''
  flag: boolean = true

  constructor(private ClientService: ClientService) {
  }

  ngOnInit(): void {
    this.ClientService.getAll()
      .subscribe((clients) => this.clients = clients)

    this.ClientService.getGeneralTotals()
      .subscribe((data: any) => {
        console.log(data)
        this.totalClients = data.clients,
          this.totalEnterprises = data.enterprises,
          this.totalRealties = data.realties
      })
  }

  getTotals(){
    this.flag = !this.flag
  }

  clearFields() {
    this.name = ''
    this.ngOnInit()
  }

  SearchByName() {
    if (this.name == '') {
      this.ngOnInit()
    }
    else {
      this.clients = this.clients.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }

  }

}

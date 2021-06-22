import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalClients: Number = 0;
  totalEnterprises: Number = 0;
  totalRealties: Number = 0;

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    this.ClientService.getGeneralTotals()
      .subscribe((data: any) => {
        console.log(data)
        this.totalClients = data.clients,
          this.totalEnterprises = data.enterprises,
          this.totalRealties = data.realties
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client'
import { Enterprise } from '../../../interfaces/enterprise'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  id: string = '';
  name: string = '';
  image_src: string = '';
  totalEnterprises: Number = 0;
  totalRealties: Number = 0;
  enterprises: Enterprise[] = [];

  nameSearch: string = ''

  constructor(private ClientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params
    if (params['name']) {
      var id
      this.ClientService.getByName(params['name'])
        .subscribe((data: any) => {
          this.id = data._id
          this.name = data.name
          this.image_src = data.image_src
          this.enterprises = data.enterprises
        })
    }
    else if (params['id']) {
      this.ClientService.getById(params['id'])
        .subscribe((data: any) => {
          this.id = data._id
          this.name = data.name
          this.image_src = data.image_src
          this.enterprises = data.enterprises
        })

      this.ClientService.getTotalsByCompany(params['id'])
        .subscribe((data: any) => {
          this.totalEnterprises = data.totalEnterprises
          this.totalRealties = data.totalRealties
        })
    }
  }

  clearFields() {
    this.nameSearch = ''
    this.ngOnInit()
  }

  SearchByName() {
    if (this.name == '') {
      this.ngOnInit()
    }
    else {
      this.enterprises = this.enterprises.filter(res => {
        return res.name.toLocaleLowerCase().match(this.nameSearch.toLocaleLowerCase())
      })
    }
  }

}

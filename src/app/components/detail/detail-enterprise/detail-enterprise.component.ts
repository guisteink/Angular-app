import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../../services/enterprise.service';
import { Enterprise } from '../../../interfaces/enterprise'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-enterprise',
  templateUrl: './detail-enterprise.component.html',
  styleUrls: ['./detail-enterprise.component.css']
})
export class DetailEnterpriseComponent implements OnInit {
  id: string = '';
  name: string = '';
  image_src: string = '';
  realties: number = 0;
  totalRealties: number = 0;

  constructor(private EnterpriseService: EnterpriseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params
    if (params['id']) {
      this.EnterpriseService.getById(params['id'])
        .subscribe((data: any) => {
          this.id = data._id
          this.name = data.name
          this.image_src = data.image_src
          this.realties = data.realties
        })
      this.EnterpriseService.getTotalsByEnterprise(params['id'])
        .subscribe((data: any) => {
          this.totalRealties = data.totalRealties
        })
    }
    else if (params['name']) {
      this.EnterpriseService.getByName(params['name'])
        .subscribe((data: any) => {
          this.id = data._id
          this.name = data.name
          this.image_src = data.image_src
          this.realties = data.realties
        })
    }
  }
}

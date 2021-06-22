import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../../services/enterprise.service';
import { Enterprise } from '../../../interfaces/enterprise';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  name: string = ''
  enterprises: Enterprise[] = []
  _id: string = ''

  constructor(private EnterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    this.EnterpriseService.getAll()
      .subscribe((data: any) => this.enterprises = data)
  }


  clearFields() {
    this.name = ''
    this.ngOnInit()
  }

  searchByName() {
    if (this.name == '') {
      this.ngOnInit()
    }
    else {
      this.enterprises = this.enterprises.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }

  searchById() {
    if (this._id == '') {
      this.ngOnInit()
    }
    else {
      this.enterprises = this.enterprises.filter(res => {
        return res._id.toLocaleLowerCase().match(this._id.toLocaleLowerCase())
      })
    }
  }

}

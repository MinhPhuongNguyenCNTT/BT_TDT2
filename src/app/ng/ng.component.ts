import { Component, OnInit } from '@angular/core';
import index from '@angular/core/schematics/migrations/template-var-assignment';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.scss']
})
export class NgComponent implements OnInit {
  filterStatus = 'Xem_tat_ca'
  newcolor = '';
  newflower = '';
  newstatus = '';

  seasons = [
    {id: 1, color: 'đỏ', flower: 'hoa hồng', status: true},
    {id: 2, color: 'vàng', flower: 'hoa cúc', status: true},
    {id: 3, color: 'xanh', flower: 'hoa lan', status: false},
    {id: 4, color: 'trắng', flower: 'hoa ngọc lan', status: true},
    {id: 5, color: 'đen', flower: 'hoa đồng tiền', status: false},
    {id: 6, color: 'hồng', flower: 'hoa tường vi', status: true},
    {id: 7, color: 'cam', flower: 'hoa loa kèn', status: false}
  ];

  addSeason() {
    this.seasons.unshift({
      id: this.seasons.length + 1,
      color: this.newcolor,
      flower: this.newflower,
      status: false
    });
    this.newcolor = '';
    this.newflower = '';
    this.newstatus = '';
  }
  removeseasons(id: number) {
    const index = this.seasons.findIndex(e => e.id === id);
    this.seasons.splice(index, 1);
  }
  constructor() { }
  ngOnInit() {
  }

}

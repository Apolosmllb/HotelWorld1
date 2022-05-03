import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import{HotelsService} from "../../services/hotels.service";
import {Hotel} from "../../model/hotel"
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import * as _ from "lodash";
import {Employee} from "../../model/employee";
import {EmployeesService} from "../../services/employees.service";
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  dataList: Hotel[] = [];
  hotelData:Hotel;
  dataSource: MatTableDataSource<any>;


  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;



  constructor(private hotelService: HotelsService) {
    this.dataList = {} as Hotel[];

    this.dataSource= new MatTableDataSource<any>();
    this.hotelData= {} as Hotel;
  }
  getAllHotels(){
    this.hotelService.getAll().subscribe((response: any)=>{
      this.dataSource = response;
    })
  }
  addCar(i:number){
    this.hotelData.id = i;
    this.hotelData.image="../assets/cars/car8.png";
    this.hotelData.title="NUEVO AU";
    this.hotelData.price="600";
    this.hotelData.description="mejor auto de l mundo prar rod{pandnajdbsj,dvjav,jcahda";
  }

  ngOnInit(): void {
    this.getAllHotels();
  }



}

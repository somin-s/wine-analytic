import { Component, ViewChild } from '@angular/core';

import { ServiceService } from '../../services/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Metadata1 } from '../../models/metadata';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  displayedColumns: string[] = ['ID','Producer_Abbrev','Producer'];
  dataSource!: MatTableDataSource<any>;

  constructor (private service: ServiceService, private dialog:MatDialog){
    this.service.listen().subscribe(data=>{
      this.refeshList();
    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //dataSource = new MatTableDataSource<any>();

  dataSourceArr:any= [];

  refeshList() {
    this.service.getMetadata1().subscribe((data)=>{
      this.dataSource = new MatTableDataSource<Metadata1>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit(){
    this.refeshList();
  }

}

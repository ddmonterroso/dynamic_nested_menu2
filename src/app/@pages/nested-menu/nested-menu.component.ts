import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/@core/services/data/data.service';
import { IItem } from '../../@shared/models/item/IItem';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent implements OnInit {
  @Input()
  items!: IItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;

  constructor(private dataService:DataService){
    this.items=dataService.getItems();
    console.log('items:',this.items)
  }
  ngOnInit(): void {
  }

}

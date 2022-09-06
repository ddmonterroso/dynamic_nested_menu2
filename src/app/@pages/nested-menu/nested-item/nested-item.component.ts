import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IItem  } from '../../../@shared/models/item/IItem';

@Component({
  selector: 'app-nested-item',
  templateUrl: './nested-item.component.html',
  styleUrls: ['./nested-item.component.scss']
})
export class NestedItemComponent implements OnInit {

  constructor() { }
  @Input() items!: IItem[];
  @ViewChild('childMenu') public childMenu: any;
  ngOnInit(): void {
    console.log(this.childMenu)
  }

}

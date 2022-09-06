import { Injectable } from '@angular/core';
import { IItem } from 'src/app/@shared/models/item/IItem';
import products from '../../../../assets/products.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getItems():IItem[] | []{
    return  products.map((item: any) => {
      item.children = products.filter((_item: any) => _item?.parentId == item?.id)
      return item;
    }).filter((i: any) => !i.parentId) as IItem[] || [];
  }

}


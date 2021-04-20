import { Component, OnInit } from '@angular/core';
import { clientesi } from 'src/app/interfaces/clientes';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-nuestroclientes',
  templateUrl: './nuestroclientes.component.html',
  styleUrls: ['./nuestroclientes.component.css']
})
export class NuestroclientesComponent implements OnInit {

  public listas: clientesi[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this._api.getalluser().subscribe(data => {
      this.listas = data;
      console.log(data);


    })
  }



}

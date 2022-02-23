import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from 'src/app/classes/joueur';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-one-joueur',
  templateUrl: './one-joueur.component.html',
  styleUrls: ['./one-joueur.component.css']
})
export class OneJoueurComponent implements OnInit {

  id:any;
  data:any;
  joueur = new Joueur();

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getInfosJoueur();
  }
  
  getInfosJoueur(){
    this.dataService.getJoueurData(this.id).subscribe(res => {
      this.data = res;
    })
  }

  editJoueur(form :NgForm){  
    let urlParameters = Object.entries(this.joueur).map(e => e.join('=')).join('&');
    this.dataService.editJoueur(this.id, urlParameters).subscribe(res => {
      this.getInfosJoueur();
      form.reset();
    });
  }

}

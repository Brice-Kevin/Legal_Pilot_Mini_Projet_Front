import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Joueur } from 'src/app/classes/joueur';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  joueurs:any;
  equipe_1:any;
  equipe_2:any;
  score_dom:any;
  score_ext:any;
  pays:any;

  joueur = new Joueur();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getJoueursData();
  }

  getJoueursData() {
    this.dataService.getJoueursData().subscribe(res => {
      this.joueurs = res;
    });
    
    this.dataService.getJoueursData().subscribe(res => {
      let x = JSON.parse(JSON.stringify(this.joueurs));
      let min = Math.ceil(0);
      let max = Math.floor(1000);
      this.equipe_1 = []; 
      this.equipe_2 = []; 
      
      while (this.equipe_1.length < 5) {
        let y = Math.floor(Math.random() * (max - min +1)) + min;
        if(typeof(x[y]) !== "undefined" && x[y] !== "vide"){
          this.equipe_1.push(x[y]);
          x[y] = "vide";
        }
      }

      let index=0;
      while (this.equipe_2.length < 5) {
        if (x[index] != "vide") {       
          this.equipe_2.push(x[index]);   
        }
        index = index + 1;
      }
    });
  }

  PlayGame(){
      let min = Math.ceil(0);
      let max = Math.floor(7);
      this.score_dom = Math.floor(Math.random() * (max - min +1)) + min;
      this.score_ext = Math.floor(Math.random() * (max - min +1)) + min;
  }

  createJoueur(form :NgForm){
    let urlParameters = Object.entries(this.joueur).map(e => e.join('=')).join('&');
    this.dataService.createJoueur(urlParameters).subscribe(res => {
      this.getJoueursData();
      form.reset();
    });
  }

  deleteJoueur(id:any){ 
    this.dataService.deleteJoueur(id).subscribe(res => {
      this.getJoueursData();
    });
  }
}

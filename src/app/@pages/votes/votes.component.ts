import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@core/interfaces/character.interface';
import { ApiService } from 'src/app/@core/services/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  characters: Character[] = [];
  
  loading: boolean;
  data: Observable<any>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.data = this.apiService.getCharacters(true);
    this.changeVotes();
  }

  // Suscribirse al cambio de votos
  changeVotes() {
    this.apiService.changeVotesListener().subscribe(({data}) => {
      console.log(data.changeVotes);
      this.characters = data.changeVotes;
    });
  }

  addVote(character: string) {
    this.apiService.addVote(character).subscribe(({data}) => {
      console.log(data);
    });
  }

}

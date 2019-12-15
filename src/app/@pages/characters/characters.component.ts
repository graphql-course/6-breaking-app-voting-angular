import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api.service';
import { Character } from 'src/app/@core/interfaces/character.interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  character: Character[] = [];
  data: Observable<any>;
  loading: boolean;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loading = false;
    this.data = this.api.getCharacters(false);
    /**
     * .subscribe((data) => {
      this.character = data;
      this.loading = false;
    })
     */
  }
  getCharacters() {
    this.data = this.api.getCharacters(false);
  }
}

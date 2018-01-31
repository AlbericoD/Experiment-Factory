import { Component, OnInit } from '@angular/core';
import { Twtextension } from '../twtextension';
import { TwitchExtension } from "../mock-twitch-extensions";

@Component({
  selector: 'app-twitchextensoes',
  templateUrl: './twitchextensoes.component.html',
  styleUrls: ['./twitchextensoes.component.css']
})
export class TwitchextensoesComponent implements OnInit {
  
  
  conjuntoextension = TwitchExtension;
  selectedExtension: Twtextension;
  
  constructor() { }

  ngOnInit() {
  }
  onSelect(extension: Twtextension):void{
    this.selectedExtension = extension;
  }

}

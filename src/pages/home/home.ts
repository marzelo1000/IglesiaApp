import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';
import { NoticiasPage } from '../noticias/noticias';
import { InformacionesGeneralesPage } from '../informaciones-generales/informaciones-generales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService: NotesService) {
    //this.notes=notesService.getNotes();

    this.notesService.getNotes().subscribe(notas => {
      this.notes = notas;
    });
  }

  public goToDetail(id) {
    this.navCtrl.push(DetailPage, { id: id });
  }

  public createNote() {
    this.navCtrl.push(DetailPage, { id: 0 });
  }
  public goToNoticias(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(NoticiasPage);
  }

  public goToInformacionesGenerales(params) {
    if (!params) params = {}; {
      this.navCtrl.setRoot(InformacionesGeneralesPage);
    }
  }
}

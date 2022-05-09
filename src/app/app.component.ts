import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;  //將由header傳遞過來的值，直接用來判斷要顯示哪一個分頁。
  }



}

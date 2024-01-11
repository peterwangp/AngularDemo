import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en','fr']);
    translateService.setDefaultLang('en');
  }

  translateSite(langauge: string) {
    this.translateService.use(langauge);
  }
}

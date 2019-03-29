import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arize';
  cookieMessage: string =
    'This website uses cookies and location to improve service and for statistical purposes. By using this site, you agree to this use.';
  cookieDismiss: string = 'I agree';
  // cookieLinkText: any = '';

  ngOnInit() {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: 'rgba(0, 0,0, 0.5);'
        },
        button: {
          background: '#2699fb',
          text: 'white',
          'border-radius': '39px'
        }
      },
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss
        // link: this.cookieLinkText
      }
    });
  }
}

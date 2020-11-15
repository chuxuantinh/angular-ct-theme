import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'dark-theme-tutorial';
  toggleTheme(event) {
    document.documentElement.classList.add('color-theme-in-transition')
    let attr = document.documentElement.attributes.getNamedItem('data-theme');
    if (event.srcElement.checked) {
      attr.value = 'dark';
    }
    else {
      attr.value = 'light';
    }
    document.documentElement.attributes.setNamedItem(attr);
    window.setTimeout(function () {
      document.documentElement.classList.remove('color-theme-in-transition')
    }, 1200)
  }
}

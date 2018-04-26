import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-app',
    styles: [require('./app.component.sass')],
    template: require('./app.component.html'),
})
export class HelloComponent {
    message = 'Hello Component!';
}

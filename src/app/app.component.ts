import { Component } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'whatToEat';

  resizeObservable$: Observable<Event> | undefined;
  loadObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;
  loadSubscription$: Subscription | undefined;

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.loadObservable$ = fromEvent(window, 'load')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      console.log('resize: ', (evt?.currentTarget as Window).innerHeight);
      const vh = (evt?.currentTarget as Window).innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
    this.loadSubscription$ = this.loadObservable$.subscribe( evt => {
      console.log('load: ', (evt?.currentTarget as Window).innerHeight);
      const vh = (evt?.currentTarget as Window).innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
  }
}

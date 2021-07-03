import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-random-string',
  templateUrl: './random-string.component.html',
  styleUrls: ['./random-string.component.scss']
})
export class StringViewComponent implements OnInit {

  constructor() {
  }

  @ViewChild('newString') newString: ElementRef | undefined;

  ngOnInit(): void {
    this.setRandomString();
    this.startIntervalSubscription();
  }

  string = ''

  isTicking = false

  intervalTimer = interval(3000)

  intervalSubscription: any;

  stopIntervalSubscription(): void {
    if (this.isTicking) {
      this.intervalSubscription.unsubscribe();
      this.isTicking = false;
    }
  }

  startIntervalSubscription(): void {
    if (!this.isTicking) {
      this.setRandomString();

      this.intervalSubscription = this.intervalTimer.subscribe(() => {
        this.setRandomString();
      })
      this.isTicking = true;
    }
  }

  setStringHandler(str: string): void {
    if (this.newString) {
      this.string = str;

      this.newString.nativeElement.value = "";

      this.stopIntervalSubscription();
    }
  }

  randomStringHandler(): void {
    this.setRandomString();

    this.stopIntervalSubscription();
  }

  setRandomString(): void {
    this.string = Math.random().toString(36).substring(2, 7);
  }

  get isPalindrome(): boolean {
    return this.string === this.string.split('').reverse().join('')
  }

  get isContainZero(): boolean {
    return this.string.includes('0');
  }

  get isNumber(): boolean {
    return !isNaN(+this.string)
  }

}

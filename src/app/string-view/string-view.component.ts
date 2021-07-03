import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-string-view',
  templateUrl: './string-view.component.html',
  styleUrls: ['./string-view.component.scss']
})
export class StringViewComponent implements OnInit {

  constructor() {
    this.startInterval()
  }

  ngOnInit(): void {
  }

  string = '11dd11'

  startInterval(): void {
    (interval(3000)).subscribe(() => {
      this.setRandomString();
    })
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

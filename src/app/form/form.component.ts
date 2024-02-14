import { Component } from '@angular/core';

@Component({
  selector: 'password-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public password: string = '';
  public selectLength: number = 0;
  public selectStrength: number = 0;
  public selectWeak: number = 0;

  public labelLength: string = '';
  public labelStrength: string = '';
  public labelWeak: string = '';

  public stylesArr = ['grey', 'yellow', 'red', 'green'];
  public classLength = '';
  public classStrength = '';
  public classWeak = '';

  checkPassword() {
    const password = this.password;
    const letters = /[a-zA-Z]/;
    const digits = /[0-9]/;
    const symbols = /[^a-zA-Z0-9]/;

    if (password.length === 0) {
      this.selectLength = 0;
      this.selectStrength = 0;
      this.selectWeak = 0;
      this.labelLength = '';
      this.labelStrength = '';
      this.labelWeak = '';
      this.classLength = this.stylesArr[2];
      this.classStrength = this.stylesArr[2];
      this.classWeak = this.stylesArr[2];
    } else if (password.length < 8) {
      this.selectLength = 30;
      this.selectStrength = 20;
      this.selectWeak = 80;
      this.labelLength = 'short';
      this.labelStrength = 'easy';
      this.labelWeak = 'easy';
      this.classLength = this.stylesArr[2];
      this.classStrength = this.stylesArr[2];
      this.classWeak = this.stylesArr[2];
    } else {
      const hasLetters = letters.test(password);
      const hasDigits = digits.test(password);
      const hasSymbols = symbols.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.selectLength = 100;
        this.selectStrength = 100;
        this.selectWeak = 100;
        this.labelLength = 'good';
        this.labelStrength = 'strong';
        this.labelWeak = 'good';
        this.classLength = this.stylesArr[3];
        this.classStrength = this.stylesArr[3];
        this.classWeak = this.stylesArr[3];
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.selectLength = 50;
        this.selectStrength = 50;
        this.selectWeak = 50;
        this.labelLength = 'normal';
        this.labelStrength = 'medium';
        this.labelWeak = 'medium';
        this.classLength = this.stylesArr[1];
        this.classStrength = this.stylesArr[1];
        this.classWeak = this.stylesArr[0];
      } else {
        this.selectLength = 70;
        this.selectStrength = 10;
        this.selectWeak = 100;
        this.labelLength = '';
        this.labelStrength = '';
        this.labelWeak = 'easy';
        this.classLength = this.stylesArr[2];
        this.classStrength = this.stylesArr[0];
        this.classWeak = this.stylesArr[0];
      }
    }
  }
}
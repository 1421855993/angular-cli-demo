import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <!--<a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    <input type="text" [disabled]="disabled" [ngClass]="classes"/>
    <button (click)="changeClass()">click</button>
    <table border=1>
      &lt;!&ndash;  expression calculates colspan=2 &ndash;&gt;
      <tr>
        <td [attr.colspan]="1 + 1">One-Two</td>
      </tr>

      &lt;!&ndash; ERROR: There is no \`colspan\` property to set!
        <tr><td colspan="{{1 + 1}}">Three-Four</td></tr>
      &ndash;&gt;
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>-->
    <page></page>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public disabled: Boolean = true;
  public classes: String = "class1 class2";
  public changeClass() {
    this.classes = "class3";
  }
}

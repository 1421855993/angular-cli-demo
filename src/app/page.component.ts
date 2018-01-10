import {Component, Input, OnInit} from '@angular/core';

import {PageService} from "./page.service";
import {GUID} from "./GUID";


@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  public datas: any = [];
  // 显示多少页数
  public pageShow: any = 5;
  public centerPage: any = Math.ceil(this.pageShow / 2) - 1;
  public totalSize: any;
  public currentPage = 0;
  // 一共多少页
  public lastPage: any;
  public pages: any;
  constructor(
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    let c = localStorage.getItem("currentPage");
    this.currentPage = c === undefined ? 0 : Number(c);
    this.getData();
    setInterval(() => this.getData(), 30000);
  }
  OnDestroy(): void {
    localStorage.removeItem("currentPage");
  }
  getData(): void {
    this.pageService.getDatas(this.currentPage).
    then(datas => {
      localStorage.setItem("currentPage", String(this.currentPage));
      this.datas = datas.data;
      this.totalSize = datas.count;
      this.lastPage = Math.ceil(this.totalSize / 10);
      this.pages = [];
      if (this.lastPage < this.pageShow) {
        for (let i = 0; i < this.lastPage; i ++) {
          this.pages.push(i);
        }
      } else {
        if (this.currentPage >= this.centerPage) {
          if (this.currentPage <= (this.lastPage - 1 - this.centerPage)) {
            for (let i = 0; i < this.pageShow; i ++) {
              this.pages.push(this.currentPage - this.centerPage + i);
            }
          } else {
            for (let i = 0; i < this.pageShow; i ++) {
              this.pages.push(this.lastPage - 1 - i);
            }
            this.pages.sort();
          }

        } else {
          for (let i = 0; i < this.pageShow; i ++) {
            this.pages.push(i);
          }
        }

      }

    });
  }
  public turnPage(pageId): void {
    if (pageId > this.lastPage - 1) {
      return;
    } else if (pageId < 0) {
      return;
    } else if (pageId === this.currentPage) {
      return;
    }
    this.currentPage = pageId;
    this.getData();
  }

}

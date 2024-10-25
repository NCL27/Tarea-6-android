import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  NewsList = [];
  ReplaceData = "<p>EL NUEVO DIARIO, "
  ReplaceData1 = "</p>"
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.GetNews()
  }

  GetNews() {
    this.http.get("https://elnuevodiario.com.do/wp-json/wp/v2/posts").subscribe(data => {
      this.NewsList.push(data[0])
      this.NewsList.push(data[1])
      this.NewsList.push(data[2])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import HttpClientModule from @angular/common/http in AppModule
import { HttpClientModule } from '@angular/common/http';

export class clsOwnerModelData {
  id: number = 0;
  Name: string = "";
  Url: string = "";
}

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  public retPostData
  public retGetData
  public retGetSearchData: any[] = [];
  public owner: clsOwnerModelData;
  values = '';

  constructor(private http: HttpClient) {


  }
  //save SEARCH KEYWORD FOR API for get data
  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
  ngOnInit() {
    this.owner = new clsOwnerModelData();
  }
  public PostData() {

    const url = "http://localhost:49528/api/Home";
    const retVal = this.http.post(url, this.owner).subscribe(data => { this.retPostData = data; });
  }
  public GetData() {
    const url = "http://localhost:49528/api/Home/5";
    this.http.get(url).subscribe(data => { this.retGetData = data; });
  }
  //Get data from api 
  public GetSearchData() {
    const url = "https://api.github.com/search/repositories?q=" + this.values;
    console.log(url)
    this.http.get(url).subscribe(data => { this.retGetSearchData = JSON.parse(JSON.stringify(data)); });


  }
  public GetChooseData(id, name, url) {
    //add to  object choose item and post to Web.api to save to session
    //

    console.log("****************", id, name, url);
    this.owner.id = id;
    this.owner.Name = name;
    this.owner.Url = url;
    url = "http://localhost:49528/api/Home";
    const retVal = this.http.post(url, this.owner, { withCredentials: true }).subscribe(data => { this.retPostData = data; });

    //const retVal = this.http.post(url, this.owner, { withCredentials: true }).subscribe(data => { this.retPostData = data; });

    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


    oldItems.push(this.owner);

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    var consoletest = localStorage.getItem('itemsArray');
    console.log(consoletest)

  }

}

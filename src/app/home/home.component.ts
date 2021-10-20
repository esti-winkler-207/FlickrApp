import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallApiFlickerService } from '../Services/call-api-flicker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images !: Array<any>

  src !: string; 

  page : number = 1

  hideLoader : boolean = false

  showLargeImg : boolean = false

  imageSrc !: string

  constructor(private callApiService : CallApiFlickerService) { }

  ngOnInit(): void {

    //Boot of the first page
    this.callApiService.getAllPictures("0").subscribe(data=>{
      if(data){
        this.hideLoader = true
      }
      this.images = data.photos.photo
      this.images.map((pic)=>{
        this.src = pic.url_s
      })
    })
    
    //Addition of additional pages each time the user reaches the end of the previous page
    window.onscroll = (event)=> {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const next= ()=>{ 
        this.getNextPage();
      }
      next();
    }
    };

  }

 //hide large image
 hideLargeImage(hide : boolean){
  this.showLargeImg = hide
 }

//get next images page
 getNextPage(){
  this.hideLoader = false
  console.log(this.hideLoader)
  var page1= this.page.toString()
  this.callApiService.getAllPictures(page1).subscribe((data)=>{
    if(data) { this.hideLoader = true }
    data.photos.photo.map((pic : any)=>{
      this.images.push(pic)
    })
  })
  this.page++;
 }

 //large image
 enlargeImage(src : any){
  this.imageSrc = src.url_s;
  this.showLargeImg = true
 }


}

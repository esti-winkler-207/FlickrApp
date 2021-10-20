import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  srcImg !: string

  private _srcImage !: string

  width : number = window.innerWidth

  

  @Input()
    set srcImage(srcImage: string) {
    this._srcImage = srcImage.substring(0, srcImage.length - 5);
    this._srcImage += 'z.jpg';
  
    }
    get srcImage(): string { return this._srcImage; }

  @Output() HideLarge: EventEmitter<boolean> =   new EventEmitter();  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    window.onresize = ()=>{
      this.width = window.innerWidth
    }

  }
  hideLargeImg(){
    this.HideLarge.emit(false)
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-transportations-detail',
  templateUrl: './transportations-detail.component.html',
  styleUrls: ['./transportations-detail.component.css']
})
export class TransportationsDetailComponent implements OnInit {
    items: GalleryItem[];
    id: any;
    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h2';
    public hE = 'h3';
    public hF = 'h4'
    constructor(public gallery: Gallery, public lightbox: Lightbox, public route: ActivatedRoute) {
    }
    public imageData = [
        {
            srcUrl: 'assets/1240x720.png',
            previewUrl: 'assets/1240x720.png'
        },
        {
            srcUrl: 'assets/1280x720.jpg',
            previewUrl: 'assets/1280x720.jpg'
        },
        {
            srcUrl: 'assets/1240x720.png',
            previewUrl: 'assets/1240x720.png'
        }
        // ... more items
    ];
    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id);
        });
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.cTainer = '';
            this.hD = 'h5';
            this.hE = '';
            this.hF = '';
        }

        /*Transportations*/
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        console.log(this.items);
        this.gallery.ref('tranlightbox').load(this.items);


    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'tranlightbox', {
            panelClass: 'fullscreen'
        });
    }


}

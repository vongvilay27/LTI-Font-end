import { Component, OnInit} from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-attractions-detail',
  templateUrl: './attractions-detail.component.html',
  styleUrls: ['./attractions-detail.component.css']
})
export class AttractionsDetailComponent implements OnInit {
    items: GalleryItem[];
    id: any;

    constructor(public gallery: Gallery, public lightbox: Lightbox, public route: ActivatedRoute) {
    }
    public imageData = [
        {
            srcUrl: '../../../assets/1240x720.png',
            previewUrl: '../../../assets/1240x720.png'
        },
        {
            srcUrl: '../../../assets/1280x720.jpg',
            previewUrl: '../../../assets/1280x720.jpg'
        },
        {
            srcUrl: '../../../assets/1240x720.png',
            previewUrl: '../../../assets/1240x720.png'
        }
        // ... more items
    ];


    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id);
        });
         this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        this.gallery.ref('lightbox').load(this.items);
  }
    openLightbox(index: number) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    }


}

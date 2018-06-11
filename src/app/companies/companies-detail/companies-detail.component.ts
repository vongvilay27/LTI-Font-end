import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.css']
})
export class CompaniesDetailComponent implements OnInit {
    items: GalleryItem[];
    // galleryId = 'mixed';
    // galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    constructor(public gallery: Gallery, public lightbox: Lightbox) {
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
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        console.log(this.items)
        this.gallery.ref('lightbox').load(this.items);
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    }


}

import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-shelters-detail',
  templateUrl: './shelters-detail.component.html',
  styleUrls: ['./shelters-detail.component.css']
})
export class SheltersDetailComponent implements OnInit {
    items: GalleryItem[];
    rooms: GalleryItem[];
    id: any;
    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h3';
    public hP = 'h1';
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

    public roomsData: any[] = [
        {
            srcUrl: 'assets/1240x720.png',
            previewUrl: 'assets/1240x720.png',

        },
        {
            srcUrl: 'assets/1280x720.jpg',
            previewUrl: 'assets/1280x720.jpg',
        },
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
            this.hP = '';
        }
        /*Shelters*/
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        console.log(this.items);
        this.gallery.ref('shelterlightbox').load(this.items);

        /*Rooms*/
        this.rooms = this.roomsData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        this.gallery.ref('roomslightbox').load(this.rooms);
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'shelterlightbox', {
            panelClass: 'fullscreen'
        });
    }
    openMenubox(index: number) {
        this.lightbox.open(index, 'roomslightbox', {
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-restaurants-detail',
  templateUrl: './restaurants-detail.component.html',
  styleUrls: ['./restaurants-detail.component.css']
})
export class RestaurantsDetailComponent implements OnInit {
    items: GalleryItem[];
    menus: GalleryItem[];

    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h3';
    public hP = 'h1'
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

    public menuData: any[] = [
        {
            srcUrl: '../../../assets/1240x720.png',
            previewUrl: '../../../assets/1240x720.png',

        },
        {
            srcUrl: '../../../assets/1280x720.jpg',
            previewUrl: '../../../assets/1280x720.jpg',
        },
        // ... more items
    ];
    public  menuTitle: any[] = [
        {
            menuName: 'ຊື່ເມນຸອາຫານທີ່ 1',
            menuType: 'ແກງ'
        },
        {
            menuName: 'ຊື່ເມນຸອາຫານທີ່ 2',
            menuType: 'ປີ້ງ'
        }
    ];


    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.cTainer = '';
            this.hD = 'h5';
            this.hP = '';
        }

        const switchItem = (item) => {
            switch (item.type) {
                case 'image':
                    return new ImageItem(item.src, item.thumbSrc);
                case 'video':
                    return new VideoItem(item.src, item.thumbSrc);
                case 'youtube':
                    return new YoutubeItem(item.src);
            }
        };
        /*        this.data.map(item => {
                    this.galleryRef.add(switchItem(item));
                });*/
        /*Restaurant*/
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        console.log(this.items);
        this.gallery.ref('reslightbox').load(this.items);

        /*Menu*/
        this.menus = this.menuData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
        this.gallery.ref('menulightbox').load(this.menus);
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'reslightbox', {
            panelClass: 'fullscreen'
        });
    };
    openMenubox(index: number) {
        this.lightbox.open(index, 'menulightbox', {
        });
    }


}

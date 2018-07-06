import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {LocationcheckService} from '../../services/locationcheck.service';
import {NgProgress} from 'ngx-progressbar';
import {DetailService} from '../../services/detail.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-restaurants-detail',
  templateUrl: './restaurants-detail.component.html',
  styleUrls: ['./restaurants-detail.component.css']
})
export class RestaurantsDetailComponent implements OnInit {
    items: GalleryItem[];
    menus: GalleryItem[];
    id: any;
    restaurants: Object = {};
    foods: Object = {};
    weather: Object = {};
    info_near_by: Object = {};
    zoom = 10;

    lat: number;
    lng: number;

    public imageData: Array<{srcUrl: string, previewUrl: string}> = [];
    public menuData: Array<{srcUrl: string, previewUrl: string}> = [];
    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h3';
    public hP = 'h1'
    constructor(
        public gallery: Gallery,
        public lightbox: Lightbox,
        public ngProgress: NgProgress,
        private route: ActivatedRoute,
        private router: Router,
        private safeSanitizer: DomSanitizer,
        private locationService: LocationcheckService,
        private detailService: DetailService
    ) {
        this.ngProgress.start();
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            if (this.id) {
                const resSubscript: Subscription = this.detailService.getRestaurant(this.id).subscribe((res) => {
                    this.restaurants = res.json()['data'];
                    this.foods = this.restaurants['foods']
                    console.log(this.restaurants)
                    console.log(this.foods)

                    this.ngProgress.done();
                    const nearSubscript: Subscription = this.detailService.getInfoNearby(
                        this.restaurants['_id'],
                        this.restaurants['location']['lat']
                        + ',' +
                        this.restaurants['location']['long']
                    )
                        .subscribe((near_res) => {
                            this.info_near_by = near_res.json()['data'];
                            console.log(this.info_near_by);
                            nearSubscript.unsubscribe();
                        }, (near_error) => {
                            nearSubscript.unsubscribe();
                        });
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.restaurants['location']['lat'],
                        this.restaurants['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, (api_error) => {
                        apiSubscript.unsubscribe();
                    });
                    for (let i = 0; i < this.restaurants['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.restaurants['images'][i],
                            previewUrl: this.restaurants['images'][i]
                        };
                    };
                    for (let j = 0; j < this.restaurants['foods'].length; j++) {
                        this.menuData[j] = {
                            srcUrl: this.restaurants['foods'][j]['image'],
                            previewUrl: this.restaurants['foods'][j]['image']
                        };
                    };
                    /*Restaurant*/
                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('reslightbox').load(this.items);
                    /*Menu*/
                    this.menus = this.menuData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('menulightbox').load(this.menus);
                    resSubscript.unsubscribe();
                }, (res_error) => {
                    this.ngProgress.done();
                    resSubscript.unsubscribe();
                    this.router.navigate(['/home']);
                });
            }
        });
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.cTainer = '';
            this.hD = 'h5';
            this.hP = '';
        }

    }

    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.restaurants['video_url']) {
            url = this.restaurants['video_url'];
        }
        const new_url = url.split('&')[0];
        const urlArray = new_url.split('=');
        if (urlArray[0] === 'https://www.youtube.com/watch?v') {
            const youtube_id = urlArray[1];
            const youtube_domain = urlArray[0].split('watch')[0];
            const youtube_embed_url = youtube_domain + 'embed/' + youtube_id;
            return this.safeSanitizer.bypassSecurityTrustResourceUrl(youtube_embed_url);
        }
        return this.safeSanitizer.bypassSecurityTrustResourceUrl(url);
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

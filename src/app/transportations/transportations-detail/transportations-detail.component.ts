import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationcheckService} from '../../services/locationcheck.service';
import {DetailService} from '../../services/detail.service';
import {NgProgress} from 'ngx-progressbar';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-transportations-detail',
  templateUrl: './transportations-detail.component.html',
  styleUrls: ['./transportations-detail.component.css']
})
export class TransportationsDetailComponent implements OnInit {
    items: GalleryItem[];

    id: any;
    transportations: Object = {};
    services: Object = {};
    weather: Object = {};
    info_near_by: Object = {};
    zoom = 10;

    lat: number;
    lng: number;

    public imageData: Array<{srcUrl: string, previewUrl: string}> = [];

    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h2';
    public hE = 'h3';
    public hF = 'h4'
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
                const tranSubscript: Subscription = this.detailService.getTransportation(this.id).subscribe((res) => {
                    this.transportations = res.json()['data'];
                    this.services = this.transportations['services']
                   /* console.log(this.transportations)
                    console.log(this.services)*/
                    this.ngProgress.done();
                    const nearSubscript: Subscription = this.detailService.getInfoNearby(
                        this.transportations['_id'],
                        this.transportations['location']['lat']
                        + ',' +
                        this.transportations['location']['long']
                    )
                        .subscribe((near_res) => {
                            this.info_near_by = near_res.json()['data'];
                            /*console.log(this.info_near_by);*/
                            nearSubscript.unsubscribe();
                        }, (near_error) => {
                            nearSubscript.unsubscribe();
                        });
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.transportations['location']['lat'],
                        this.transportations['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, (api_error) => {
                        apiSubscript.unsubscribe();
                    });
                    for (let i = 0; i < this.transportations['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.transportations['images'][i],
                            previewUrl: this.transportations['images'][i]
                        };
                    };

                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('tranlightbox').load(this.items);

                }, (shel_error) => {
                    this.ngProgress.done();
                    tranSubscript.unsubscribe();
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
            this.hE = '';
            this.hF = '';
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }

    }

    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.transportations['video_url']) {
            url = this.transportations['video_url'];
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
        this.lightbox.open(index, 'tranlightbox', {
            panelClass: 'fullscreen'
        });
    }


}

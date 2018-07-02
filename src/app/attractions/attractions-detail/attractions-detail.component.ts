import { DetailService } from './../../services/detail.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit} from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-attractions-detail',
  templateUrl: './attractions-detail.component.html',
  styleUrls: ['./attractions-detail.component.css']
})
export class AttractionsDetailComponent implements OnInit {
    items: GalleryItem[];
    id: any;
    attractions: Object = {};
    weather: Object = {};

    lat: number;
    lng: number;

    public imageData: Array<{srcUrl: string, previewUrl: string}> = [];

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
                const attSubscript: Subscription = this.detailService.getAttractions(this.id).subscribe((att_res) => {
                    this.attractions = att_res.json()['data'];
                    this.ngProgress.done();
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.attractions['location']['lat'],
                        this.attractions['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        console.log(this.weather);
                    }, (api_error) => {
                    });
                    for (let i = 0; i < this.attractions['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.attractions['images'][i],
                            previewUrl: this.attractions['images'][i]
                        };
                    }
                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('lightbox').load(this.items);
                    attSubscript.unsubscribe();
                }, (att_error) => {
                    this.ngProgress.done();
                    attSubscript.unsubscribe();
                    this.router.navigate(['/home']);
                });
            }
        });
    }


    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
            });
        }
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    }

    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.attractions['video_url']) {
          url = this.attractions['video_url'];
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


}

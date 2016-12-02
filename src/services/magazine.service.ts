import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Configuration } from '../app/app.constants';
import { SafeHttp } from './safe-http.service';

@Injectable()
export class MagazineService {

  private actionUrl: string;

  constructor(private http: SafeHttp, private configuration: Configuration) {
    this.actionUrl = configuration.ServerWithApiUrl + '/magazines/';
  }

  getById(id) {
    return Observable.create(observer => {
      observer.next(magazines[id]);
      observer.complete();
    });
  }

  getAll() {
    return Observable.create(observer => {
      observer.next(magazines);
      observer.complete();
    });
  }

}

export const images = [
  { id: 1, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/01.jpg" },
  { id: 2, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/02.jpg" },
  { id: 3, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/03.jpg" },
  { id: 4, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/04.jpg" },
  { id: 5, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/05.jpg" },
  { id: 6, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/06.jpg" },
  { id: 7, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/07.jpg" },
  { id: 8, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/08.jpg" },
  { id: 9, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/09.jpg" },
  { id: 10, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/10.jpg" },
  { id: 11, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/11.jpg" },
  { id: 12, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/12.jpg" },
  { id: 13, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/13.jpg" },
  { id: 14, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/14.jpg" },
  { id: 15, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/15.jpg" },
  { id: 16, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/16.jpg" },
  { id: 17, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/17.jpg" },
  { id: 18, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/18.jpg" },
  { id: 19, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/19.jpg" },
  { id: 20, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/20.jpg" },
  { id: 21, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/21.jpg" },
  { id: 22, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/22.jpg" },
  { id: 23, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/23.jpg" },
  { id: 24, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-2danoviembre-2016/24.jpg" },
];

export const images2 = [
  { id: 1, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/01.jpg" },
  { id: 2, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/02.jpg" },
  { id: 3, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/03.jpg" },
  { id: 4, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/04.jpg" },
  { id: 5, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/05.jpg" },
  { id: 6, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/06.jpg" },
  { id: 7, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/07.jpg" },
  { id: 8, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/08.jpg" },
  { id: 9, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/09.jpg" },
  { id: 10, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/10.jpg" },
  { id: 11, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/11.jpg" },
  { id: 12, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/12.jpg" },
  { id: 13, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/13.jpg" },
  { id: 14, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/14.jpg" },
  { id: 15, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/15.jpg" },
  { id: 16, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/16.jpg" },
  { id: 17, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/17.jpg" },
  { id: 18, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/18.jpg" },
  { id: 19, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/19.jpg" },
  { id: 20, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/20.jpg" },
  { id: 21, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/21.jpg" },
  { id: 22, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/22.jpg" },
  { id: 23, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/23.jpg" },
  { id: 24, path: "http://www.cooperativaobrera.coop/media/img/folder/ahorron-1ra-diciembre-2016/24.jpg" },
];

export const images3 = [
  { id: 1, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/01.jpg" },
  { id: 2, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/02.jpg" },
  { id: 3, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/03.jpg" },
  { id: 4, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/04.jpg" },
  { id: 5, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/05.jpg" },
  { id: 6, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/06.jpg" },
  { id: 7, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/07.jpg" },
  { id: 8, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/08.jpg" },
  { id: 9, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/09.jpg" },
  { id: 10, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/10.jpg" },
  { id: 11, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/11.jpg" },
  { id: 12, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/12.jpg" },
  { id: 13, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/13.jpg" },
  { id: 14, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/14.jpg" },
  { id: 15, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/15.jpg" },
  { id: 16, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/16.jpg" },
  { id: 17, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/17.jpg" },
  { id: 18, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/18.jpg" },
  { id: 19, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/19.jpg" },
  { id: 20, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/20.jpg" },
  { id: 21, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/21.jpg" },
  { id: 22, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/22.jpg" },
  { id: 23, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/23.jpg" },
  { id: 24, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/24.jpg" },
  { id: 25, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/25.jpg" },
  { id: 26, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/26.jpg" },
  { id: 27, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/27.jpg" },
  { id: 28, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/28.jpg" },
  { id: 29, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/29.jpg" },
  { id: 30, path: "http://www.cooperativaobrera.coop/media/img/folder/coopehogar-diciembre-2016/30.jpg" }
];

export const magazines = [
  { id: 1, description: "Ahorron 2da de noviembre 2016", images: images },
  { id: 1, description: "Ahorron 1era de diciembre 2016", images: images2 },
  { id: 2, description: "Coopehogar diciembre 2016", images: images3 }
];
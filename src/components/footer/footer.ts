// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { HomePage } from '../../pages/home-pages/home/home';
import { CategoriesPage } from '../../pages/categorie-pages/categories/categories';
//import { ProductsPage } from '../../pages/products/products';
import { NewsPage } from '../../pages/news/news';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
///import { share } from 'rxjs/operator/share';
//import { AboutUsPage } from '../../pages/about-us/about-us';
import { SettingsPage } from '../../pages/settings/settings';
import { ProductsPage } from '../../pages/products/products';
import { ConfigProvider } from '../../providers/config/config';
import { Home2Page } from '../../pages/home-pages/home2/home2';
import { Home3Page } from '../../pages/home-pages/home3/home3';
import { Home5Page } from '../../pages/home-pages/home5/home5';
import { Home4Page } from '../../pages/home-pages/home4/home4';
import { Categories3Page } from '../../pages/categorie-pages/categories3/categories3';
import { Categories2Page } from '../../pages/categorie-pages/categories2/categories2';
import { Categories5Page } from '../../pages/categorie-pages/categories5/categories5';
import { Categories4Page } from '../../pages/categorie-pages/categories4/categories4';
import { Categories6Page } from '../../pages/categorie-pages/categories6/categories6';



@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {
  segments: any = 'HomePage';
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataProvider,
    public config: ConfigProvider,
    public events: Events,
  ) {
    // console.log(shared.selectedFooterPage);
    this.segments = shared.selectedFooterPage;
    events.subscribe('footerChange', (value) => {
      this.segments = value;
    });
  }
  openPage(page) {
    this.shared.selectedFooterPage = page;

    if (page == "HomePage") { this.openHomePage(); }
    else if (page == "CategoriesPage") { this.openCategoryPage(); }
    else if (page == "ProductsPage") { this.navCtrl.push(ProductsPage); }
    else if (page == "NewsPage") { this.navCtrl.setRoot(NewsPage); }
    else if (page == "SettingsPage") { this.navCtrl.setRoot(SettingsPage); }
  }
  openHomePage() {
    this.events.publish("openHomePage");
  }
  openCategoryPage() {
    this.events.publish("openCategoryPage");
  }
}

// events.subscribe('footerPageChange', (value) => {
//   console.log(value);
//   this.segments = value;
// });
// this.events.publish('footerPageChange',page);
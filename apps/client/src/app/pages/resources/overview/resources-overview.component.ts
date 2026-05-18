import { publicRoutes } from '@ghostfolio/common/routes/routes';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'gf-resources-overview',
  styleUrls: ['./resources-overview.component.scss'],
  templateUrl: './resources-overview.component.html'
})
export class ResourcesOverviewComponent {
  public overviewItems = [
    {
      description:
        '在「常見問題（FAQ）」中快速找到 Ghostfolio 常見問題的解答。',
      routerLink: publicRoutes.faq.routerLink,
      title: publicRoutes.faq.title
    },
    {
      description: '透過我們的指南開始你的投資與財務管理之路。',
      routerLink: publicRoutes.resources.subRoutes.guides.routerLink,
      title: publicRoutes.resources.subRoutes.guides.title
    },
    {
      description: '取得多元的市場資源與工具，掌握金融市場最新動態。',
      routerLink: publicRoutes.resources.subRoutes.markets.routerLink,
      title: publicRoutes.resources.subRoutes.markets.title
    },
    {
      description: '在完整的詞彙表中認識重要的金融術語與概念。',
      routerLink: publicRoutes.resources.subRoutes.glossary.routerLink,
      title: publicRoutes.resources.subRoutes.glossary.title
    }
  ];
}

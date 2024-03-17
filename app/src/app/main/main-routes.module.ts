import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {authGuard} from "../_helper/auth.guard";
import {ChannelComponent} from "./chat/channel.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const mainRoutes: Routes = [
  {
    path: '', // /
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'channel/:channel', // /channel/:channel
        component: ChannelComponent
      },
      {
        path:'**',
        component: PageNotFoundComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutesModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'hotel',
    component: HotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

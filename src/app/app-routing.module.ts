import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constantes } from '@data/constantes/constantes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { HomeModule } from '@modules/home/home.module';

const routes: Routes = [
  {
   path: Constantes.EMPTY_STRING,
   component: SkeletonComponent,
   children: [
    {
     path: Constantes.RUTA_HOME,
     loadChildren: () => import('@modules/home/home.module').then((m): typeof HomeModule => m.HomeModule),
    },
    { path: '**', redirectTo: Constantes.EMPTY_STRING, pathMatch: 'full' },
   ],
  },
  { path: '**', redirectTo: Constantes.EMPTY_STRING, pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

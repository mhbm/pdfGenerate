import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfComponent} from './pdf/pdf.component'
import { Pdfv2Component} from './pdf-v2/pdf-v2.component'


const routes: Routes = [
  {
    path: 'pdf',
    component: PdfComponent,
  },
  {
    path: 'pdf2',
    component: Pdfv2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

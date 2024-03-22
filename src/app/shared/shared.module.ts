import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { InputComponent } from './input/input.component'
import {RadioButtonModule} from 'primeng/radiobutton';
import { RatingComponent } from './rating/rating.component'


@NgModule({
    declarations: [InputComponent,RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RadioButtonModule],
    exports: [InputComponent, RadioButtonModule,
             RatingComponent, CommonModule, 
             FormsModule, ReactiveFormsModule]

})
export class SharedModule{}
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {RadioOption} from './radio-option.model'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent) ,
    multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {


  @Input() options:RadioOption[]

  value: any 

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value 
    this.onChange(this.value)
  }
    /**
     * Writes a new value to the element.
     *
     * This method will be called by the forms API to write to the view when programmatic
     * (model -> view) changes are requested.
     *
     * Example implementation of `writeValue`:
     *
     * ```ts
     * writeValue(value: any): void {
     *   this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
     * }
     * ```
     */
    writeValue(obj: any): void{
    this.value = obj
    }
    /**
     * Registers a callback function that should be called when the control's value
     * changes in the UI.
     *
     * This is called by the forms API on initialization so it can update the form
     * model when values propagate from the view (view -> model).
     *
     * If you are implementing `registerOnChange` in your own value accessor, you
     * will typically want to save the given function so your class can call it
     * at the appropriate time.
     *
     * ```ts
     * registerOnChange(fn: (_: any) => void): void {
     *   this._onChange = fn;
     * }
     * ```
     *
     * When the value changes in the UI, your class should call the registered
     * function to allow the forms API to update itself:
     *
     * ```ts
     * host: {
     *    (change): '_onChange($event.target.value)'
     * }
     * ```
     *
     */
    registerOnChange(fn: any): void{
      this.onChange = fn
    }
    /**
     * Registers a callback function that should be called when the control receives
     * a blur event.
     *
     * This is called by the forms API on initialization so it can update the form model
     * on blur.
     *
     * If you are implementing `registerOnTouched` in your own value accessor, you
     * will typically want to save the given function so your class can call it
     * when the control should be considered blurred (a.k.a. "touched").
     *
     * ```ts
     * registerOnTouched(fn: any): void {
     *   this._onTouched = fn;
     * }
     * ```
     *
     * On blur (or equivalent), your class should call the registered function to allow
     * the forms API to update itself:
     *
     * ```ts
     * host: {
     *    '(blur)': '_onTouched()'
     * }
     * ```
     */
    registerOnTouched(fn: any): void{}
    /**
     * This function is called by the forms API when the control status changes to
     * or from "DISABLED". Depending on the value, it should enable or disable the
     * appropriate DOM element.
     *
     * Example implementation of `setDisabledState`:
     *
     * ```ts
     * setDisabledState(isDisabled: boolean): void {
     *   this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
     * }
     * ```
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void{}

}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formDataPayload } from 'src/app/types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  // Output to send data to the parent component
  @Output() formValue: EventEmitter<formDataPayload> =
    new EventEmitter<formDataPayload>();

  myForm: FormGroup = this.fb.group({
    latitude: ['40.43', Validators.required],
    longitude: ['-3.70', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // emit output this.myForm.value
    this.formValue.emit(this.myForm.value);
  }
}

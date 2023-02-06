import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})

export class CreateCitaComponent implements OnInit {
  
  citasForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    symptom: ['', Validators.required],
  })
  @Output() nuevaCita = new EventEmitter<any>();

  citas: any[] = []


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  submitCita(){
    this.nuevaCita.emit(this.citasForm.value);
  }

}

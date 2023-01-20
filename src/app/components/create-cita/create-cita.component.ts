import { Component, OnInit } from '@angular/core';
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


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }


  submitCita(){
    console.log('Estas son las citas', this.citasForm);
  }

}

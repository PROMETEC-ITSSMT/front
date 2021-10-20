import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';


export interface PeriodicElement {
	duracion: number;
	descripcion: number;
	tSugerida: number;
	tRecibida: number;
  }

  const ELEMENT_DATA: PeriodicElement[] = [

	{descripcion: 1, duracion: 1, tSugerida: 104.40, tRecibida: (108.80*1)},
	{descripcion: 2, duracion: 2, tSugerida: (104.40*2), tRecibida: (108.80*2)},
	{descripcion: 3, duracion: 3, tSugerida: (104.40*3), tRecibida: (108.80*3)},
	{descripcion: 4, duracion: 4, tSugerida: (104.40*4), tRecibida: (108.80*4)},
	{descripcion: 5, duracion: 5, tSugerida: (104.40*5), tRecibida: (108.80*5)},
	{descripcion: 6, duracion: 6, tSugerida: (104.40*6), tRecibida: (108.80*6)},
	{descripcion: 7, duracion: 7, tSugerida: (104.40*7), tRecibida: (108.80*7)},
	{descripcion: 8, duracion: 8, tSugerida: (104.40*8), tRecibida: (108.80*8)},
	{descripcion: 9, duracion: 9, tSugerida: (104.40*9), tRecibida: (108.80*9)},
	{descripcion: 10, duracion: 10, tSugerida: (104.40*10), tRecibida: (108.80*10)},
	{descripcion: 11, duracion: 11, tSugerida: (104.40*11), tRecibida: (108.80*11)},
	{descripcion: 12, duracion: 12, tSugerida: (104.40*12), tRecibida: (108.80*12)},
	{descripcion: 13, duracion: 13, tSugerida: (104.40*13), tRecibida: (108.80*13)},
	{descripcion: 14, duracion: 14, tSugerida: (104.40*14), tRecibida: (108.80*14)},


  ];



@Component({

	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	providers: [{
	    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
	}]
})

export class StepperComponent implements OnInit {

	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = ELEMENT_DATA;
	clickedRows = new Set<PeriodicElement>();
 
	isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

	isLinearvarient = false;
  	varientfirstFormGroup: FormGroup=Object.create(null);
 	varientsecondFormGroup: FormGroup=Object.create(null);

 	isLinearposition = false;
  	positionfirstFormGroup: FormGroup=Object.create(null);
 	positionsecondFormGroup: FormGroup=Object.create(null);


 	optionalfirstFormGroup: FormGroup=Object.create(null);
	optionalsecondFormGroup: FormGroup=Object.create(null);
	isOptional = false;

	editablefirstFormGroup: FormGroup=Object.create(null);
	editablesecondFormGroup: FormGroup=Object.create(null);
	isEditable = false;

	customizefirstFormGroup: FormGroup=Object.create(null);
	customizesecondFormGroup: FormGroup=Object.create(null);

	errorfirstFormGroup: FormGroup=Object.create(null);
	errorsecondFormGroup: FormGroup=Object.create(null);

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		// varient
		this.varientfirstFormGroup = this._formBuilder.group({
		      varientfirstCtrl: ['', Validators.required]
		});
		this.varientsecondFormGroup = this._formBuilder.group({
		      varientsecondCtrl: ['', Validators.required]
		});

		// position
		this.positionfirstFormGroup = this._formBuilder.group({
		      positionfirstCtrl: ['', Validators.required]
		});
		this.positionsecondFormGroup = this._formBuilder.group({
		      positionsecondCtrl: ['', Validators.required]
		});

		// optional
		this.optionalfirstFormGroup = this._formBuilder.group({
		      optionalfirstCtrl: ['', Validators.required]
		});
		this.optionalsecondFormGroup = this._formBuilder.group({
		      optionalsecondCtrl: ['', Validators.required]
		});

		// editable
		this.editablefirstFormGroup = this._formBuilder.group({
		      editablefirstCtrl: ['', Validators.required]
		});
		this.editablesecondFormGroup = this._formBuilder.group({
		      editablesecondCtrl: ['', Validators.required]
		});

		// customize
		this.customizefirstFormGroup = this._formBuilder.group({
		      customizefirstCtrl: ['', Validators.required]
		});
		this.customizesecondFormGroup = this._formBuilder.group({
		      customizesecondCtrl: ['', Validators.required]
		});

		// error
		this.errorfirstFormGroup = this._formBuilder.group({
		      errorfirstCtrl: ['', Validators.required]
		});
		this.errorsecondFormGroup = this._formBuilder.group({
		      errorsecondCtrl: ['', Validators.required]
		});
	}
}


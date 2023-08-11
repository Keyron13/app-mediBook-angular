import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crearmedico',
  templateUrl: './crearmedico.component.html',
  styleUrls: ['./crearmedico.component.scss']
})
export class CrearmedicoComponent implements OnInit{

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private notificacion: ToastrService,

  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  FormMedico!: FormGroup;
  buildForm() {
    this.FormMedico = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      fecha: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }

  Crear(){
    if (this.FormMedico.invalid) {
      this.notificacion.error('Formulario invalido', 'Proceso erroneo');
      // Realiza acciones si el formulario es inválido
      return;
    } else {
  }
}


provincias = [
  {
    id: 1,
    label: 'Azuay',
    cantones: [
      { id: 1, label: 'Camilo Ponce Enríquez' },
      { id: 2, label: 'Chordeleg' },
      { id: 3, label: 'Cuenca' },
      { id: 4, label: 'El Pan' },
      { id: 5, label: 'Girón' },
      { id: 6, label: 'Gualaceo' },
      { id: 7, label: 'Guachapala' },
      { id: 8, label: 'Nabón' },
      { id: 9, label: 'Oña' },
      { id: 10, label: 'Paute' },
      { id: 11, label: 'Pucará' },
      { id: 12, label: 'San Fernando' },
      { id: 13, label: 'Santa Isabel' },
      { id: 14, label: 'Sevilla de Oro' },
      { id: 15, label: 'Sigsig' },
    ],
  },
  {
    id: 2,
    label: 'Bolívar',
    cantones: [
      { id: 1, label: 'Caluma' },
      { id: 2, label: 'Chillanes' },
      { id: 3, label: 'Chimbo' },
      { id: 4, label: 'Echeandía' },
      { id: 5, label: 'Guaranda' },
      { id: 6, label: 'Las Naves' },
      { id: 7, label: 'San Miguel' },
      { id: 8, label: 'Simón Bolívar' },
    ],
  },
  {
    id: 3,
    label: 'Cañar',
    cantones: [
      { id: 1, label: 'Azogues' },
      { id: 2, label: 'Biblián' },
      { id: 3, label: 'Cañar' },
      { id: 4, label: 'Déleg' },
      { id: 5, label: 'El Tambo' },
      { id: 6, label: 'La Troncal' },
      { id: 7, label: 'Suscal' },
    ],
  },
  {
    id: 4,
    label: 'Carchi',
    cantones: [
      { id: 1, label: 'Bolívar' },
      { id: 2, label: 'Espejo' },
      { id: 3, label: 'Mira' },
      { id: 4, label: 'Montúfar' },
      { id: 5, label: 'San Pedro de Huaca' },
      { id: 6, label: 'Tulcán' },
    ],
  },
  {
    id: 5,
    label: 'Chimborazo',
    cantones: [
      { id: 1, label: 'Alausí' },
      { id: 2, label: 'Colta' },
      { id: 3, label: 'Chambo' },
      { id: 4, label: 'Chunchi' },
      { id: 5, label: 'Cumandá' },
      { id: 6, label: 'Guamote' },
      { id: 7, label: 'Guano' },
      { id: 8, label: 'Pallatanga' },
      { id: 9, label: 'Penipe' },
      { id: 10, label: 'Riobamba' },
    ],
  },
  {
    id: 6,
    label: 'Cotopaxi',
    cantones: [
      { id: 1, label: 'La Maná' },
      { id: 2, label: 'Latacunga' },
      { id: 3, label: 'Pangua' },
      { id: 4, label: 'Pujilí' },
      { id: 5, label: 'Salcedo' },
      { id: 6, label: 'Saquisilí' },
      { id: 7, label: 'Sigchos' },
    ],
  },
  {
    id: 7,
    label: 'El Oro',
    cantones: [
      { id: 1, label: 'Arenillas' },
      { id: 2, label: 'Atahualpa' },
      { id: 3, label: 'Balsas' },
      { id: 4, label: 'Chilla' },
      { id: 5, label: 'El Guabo' },
      { id: 6, label: 'Huaquillas' },
      { id: 7, label: 'Las Lajas' },
      { id: 8, label: 'Machala' },
      { id: 9, label: 'Marcabelí' },
      { id: 10, label: 'Pasaje' },
      { id: 11, label: 'Piñas' },
      { id: 12, label: 'Portovelo' },
      { id: 13, label: 'Santa Rosa' },
      { id: 14, label: 'Zaruma' },
    ],
  },
  {
    id: 8,
    label: 'Esmeraldas',
    cantones: [
      { id: 1, label: 'Atacames' },
      { id: 2, label: 'Eloy Alfaro' },
      { id: 3, label: 'Esmeraldas' },
      { id: 4, label: 'Muisne' },
      { id: 5, label: 'Quinindé' },
      { id: 6, label: 'Río Verde' },
      { id: 7, label: 'San Lorenzo' },
    ],
  },
  {
    id: 9,
    label: 'Galápagos',
    cantones: [
      { id: 1, label: 'Isabela' },
      { id: 2, label: 'San Cristóbal' },
      { id: 3, label: 'Santa Cruz' },
      { id: 4, label: 'Floreana' },
    ],
  },
  {
    id: 10,
    label: 'Guayas',
    cantones: [
      { id: 1, label: 'Guayaquil' },
      { id: 2, label: 'Alfredo Baquerizo Moreno (Jujan)' },
      { id: 3, label: 'Balao' },
      { id: 4, label: 'Balzar' },
      { id: 5, label: 'Colimes' },
      { id: 6, label: 'Daule' },
      { id: 7, label: 'Duran' },
      { id: 8, label: 'El Empalme' },
      { id: 9, label: 'El Triunfo' },
      { id: 10, label: 'General Antonio Elizalde (Bucay)' },
      { id: 11, label: 'General Villamil (Playas)' },
      { id: 12, label: 'Isidro Ayora' },
      { id: 13, label: 'Lomas de Sargentillo' },
      { id: 14, label: 'Milagro' },
      { id: 15, label: 'Naranjal' },
      { id: 16, label: 'Naranjito' },
      { id: 17, label: 'Nobol' },
      { id: 18, label: 'Palestina' },
      { id: 19, label: 'Pedro Carbo' },
      { id: 20, label: 'Playas' },
      { id: 21, label: 'Salitre (El Salitre)' },
      { id: 22, label: 'Samborondón' },
      { id: 23, label: 'Santa Elena' },
      { id: 24, label: 'Santa Lucía' },
      { id: 25, label: 'Simón Bolívar' },
      { id: 26, label: 'Yaguachi' },
      { id: 27, label: 'General Antonio Elizalde (Bucay)' },
      { id: 28, label: 'Isidro Ayora' },
    ],
  },
  {
    id: 11,
    label: 'Imbabura',
    cantones: [
      { id: 1, label: 'Antonio Ante' },
      { id: 2, label: 'Cotacachi' },
      { id: 3, label: 'Ibarra' },
      { id: 4, label: 'Otavalo' },
      { id: 5, label: 'Pimampiro' },
      { id: 6, label: 'San Miguel de Urcuquí' },
    ],
  },
  {
    id: 12,
    label: 'Loja',
    cantones: [
      { id: 1, label: 'Loja' },
      { id: 2, label: 'Calvas' },
      { id: 3, label: 'Catamayo' },
      { id: 4, label: 'Celica' },
      { id: 5, label: 'Chaguarpamba' },
      { id: 6, label: 'Espíndola' },
      { id: 7, label: 'Gonzanamá' },
      { id: 8, label: 'Macará' },
      { id: 9, label: 'Paltas' },
      { id: 10, label: 'Puyango' },
      { id: 11, label: 'Quilanga' },
      { id: 12, label: 'Saraguro' },
      { id: 13, label: 'Sozoranga' },
      { id: 14, label: 'Zapotillo' },
    ],
  },
  {
    id: 13,
    label: 'Los Ríos',
    cantones: [
      { id: 1, label: 'Baba' },
      { id: 2, label: 'Babahoyo' },
      { id: 3, label: 'Buena Fe' },
      { id: 4, label: 'Mocache' },
      { id: 5, label: 'Montalvo' },
      { id: 6, label: 'Palenque' },
      { id: 7, label: 'Puebloviejo' },
      { id: 8, label: 'Quevedo' },
      { id: 9, label: 'Quinsaloma' },
      { id: 10, label: 'Urdaneta' },
      { id: 11, label: 'Valencia' },
      { id: 12, label: 'Ventanas' },
      { id: 13, label: 'Vínces' },
      { id: 14, label: 'Vivas' },
    ],
  },
  {
    id: 14,
    label: 'Manabí',
    cantones: [
      { id: 1, label: 'Bolívar' },
      { id: 2, label: 'Chone' },
      { id: 3, label: 'El Carmen' },
      { id: 4, label: 'Flavio Alfaro' },
      { id: 5, label: 'Jama' },
      { id: 6, label: 'Jaramijó' },
      { id: 7, label: 'Jipijapa' },
      { id: 8, label: 'Junín' },
      { id: 9, label: 'Manta' },
      { id: 10, label: 'Montecristi' },
      { id: 11, label: 'Olmedo' },
      { id: 12, label: 'Paján' },
      { id: 13, label: 'Pedernales' },
      { id: 14, label: 'Portoviejo' },
      { id: 15, label: 'Puerto López' },
      { id: 16, label: 'Rocafuerte' },
      { id: 17, label: 'San Vicente' },
      { id: 18, label: 'Santa Ana' },
      { id: 19, label: 'Sucre' },
      { id: 20, label: 'Tosagua' },
    ],
  },
  {
    id: 15,
    label: 'Morona Santiago',
    cantones: [
      { id: 1, label: 'Gualaquiza' },
      { id: 2, label: 'Huamboya' },
      { id: 3, label: 'Limón Indanza' },
      { id: 4, label: 'Logroño' },
      { id: 5, label: 'Morona' },
      { id: 6, label: 'Pablo Sexto' },
      { id: 7, label: 'Palora' },
      { id: 8, label: 'San Juan Bosco' },
      { id: 9, label: 'Santiago' },
      { id: 10, label: 'Sucúa' },
      { id: 11, label: 'Taisha' },
      { id: 12, label: 'Tiwintza' },
    ],
  },
  {
    id: 16,
    label: 'Napo',
    cantones: [
      { id: 1, label: 'Tena' },
      { id: 2, label: 'Archidona' },
      { id: 3, label: 'Carlos Julio Arosemena Tola' },
      { id: 4, label: 'El Chaco' },
      { id: 5, label: 'Quijos' },
      { id: 6, label: 'Quijos' },
      { id: 7, label: 'Tena' },
    ],
  },
  {
    id: 17,
    label: 'Orellana',
    cantones: [
      { id: 1, label: 'Orellana' },
      { id: 2, label: 'Aguarico' },
      { id: 3, label: 'La Joya de los Sachas' },
      { id: 4, label: 'Loreto' },
    ],
  },
  {
    id: 18,
    label: 'Pastaza',
    cantones: [
      { id: 1, label: 'Pastaza' },
      { id: 2, label: 'Mera' },
      { id: 3, label: 'Santa Clara' },
      { id: 4, label: 'Arajuno' },
    ],
  },
  {
    id: 19,
    label: 'Pichincha',
    cantones: [
      { id: 1, label: 'Quito' },
      { id: 2, label: 'Cayambe' },
      { id: 3, label: 'Mejía' },
      { id: 4, label: 'Pedro Moncayo' },
      { id: 5, label: 'Rumiñahui' },
      { id: 6, label: 'San Miguel de los Bancos' },
      { id: 7, label: 'Pedro Vicente Maldonado' },
      { id: 8, label: 'Puerto Quito' },
      { id: 9, label: 'Santo Domingo' },
    ],
  },
  {
    id: 20,
    label: 'Santa Elena',
    cantones: [
      { id: 1, label: 'La Libertad' },
      { id: 2, label: 'Salinas' },
      { id: 3, label: 'Santa Elena' },
    ],
  },
  {
    id: 21,
    label: 'Santo Domingo de los Tsáchilas',
    cantones: [
      { id: 1, label: 'Santo Domingo' },
      { id: 2, label: 'La Concordia' },
    ],
  },
  {
    id: 22,
    label: 'Sucumbíos',
    cantones: [
      { id: 1, label: 'Lago Agrio' },
      { id: 2, label: 'Cascales' },
      { id: 3, label: 'Cuyabeno' },
      { id: 4, label: 'Gonzalo Pizarro' },
      { id: 5, label: 'Putumayo' },
      { id: 6, label: 'Shushufindi' },
      { id: 7, label: 'Sucumbíos' },
    ],
  },
  {
    id: 23,
    label: 'Tungurahua',
    cantones: [
      { id: 1, label: 'Ambato' },
      { id: 2, label: 'Baños de Agua Santa' },
      { id: 3, label: 'Cevallos' },
      { id: 4, label: 'Mocha' },
      { id: 5, label: 'Patate' },
      { id: 6, label: 'Pelileo' },
      { id: 7, label: 'Pillaro' },
      { id: 8, label: 'Quero' },
      { id: 9, label: 'San Pedro de Pelileo' },
      { id: 10, label: 'Santiago de Pillaro' },
      { id: 11, label: 'Tisaleo' },
    ],
  },
  {
    id: 24,
    label: 'Zamora Chinchipe',
    cantones: [
      { id: 1, label: 'Zamora' },
      { id: 2, label: 'Chinchipe' },
      { id: 3, label: 'Nangaritza' },
      { id: 4, label: 'Yacuambi' },
      { id: 5, label: 'Yantzaza' },
      { id: 6, label: 'El Pangui' },
      { id: 7, label: 'Centinela del Cóndor' },
      { id: 8, label: 'Palanda' },
      { id: 9, label: 'Paquisha' },
    ],
  },
];

//Selecionar Provincias
provinciaHolder: string = '';
selectedOption = false;
selectedOptionCanton: any;
onOptionSelected() {
  this.selectedOption = true;
}
onClearSelection(): void {
  this.selectedProvincia = null;
  this.provinciaHolder = 'provincias';
  this.selectedCanton = null;
  this.cantonHolder = 'cantones';
}

onOptionSelectedCanton() {
  this.selectedOptionCanton = 'false';
  this.cantonHolder = '';
}
cantonHolder: string = '';
onClearSelectedCanton(): void {
  this.selectedCanton = null; // Restablecer la selección a null o a otro valor por defecto
  this.cantonHolder = 'cantones'; // Restablecer el valor del placeholder
}
//selcionar provincias y para cada canton
selectedCanton: any;
selectedProvincia: any;
filteredCantones: any[] = [];
disableProvincias = false;

onProvinciaSelected() {
  if (this.selectedProvincia) {
    this.filteredCantones = this.selectedProvincia.cantones;
  } else {
    this.filteredCantones = [];
  }
}
}



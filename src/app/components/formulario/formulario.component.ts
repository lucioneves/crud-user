import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule,  ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  @Input() btnAcao!:string;
  @Input() descTitulo!: string;

  @Output() onSubmit = new EventEmitter<UsuarioListar>()
  @Input() dadosUsuario : UsuarioListar | null = null;

  usuarioForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
      this.usuarioForm = new FormGroup({
        id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
        nomeCompleto: new FormControl(this.dadosUsuario ? this.dadosUsuario.nomeCompleto : ''),
        email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : ''),
        cargo: new FormControl(this.dadosUsuario ? this.dadosUsuario.cargo : ''),
        salario: new FormControl(this.dadosUsuario ? this.dadosUsuario.salario : 0),
        cpf: new FormControl(this.dadosUsuario ? this.dadosUsuario.cpf: ''),
        situacao: new FormControl(this.dadosUsuario ? this.dadosUsuario.situacao : true),
        senha: new FormControl(this.dadosUsuario ? this.dadosUsuario.senha : '')
      })
  }

  submit() {
    this.onSubmit.emit(this.usuarioForm.value);
    
  }

}

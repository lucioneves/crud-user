import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { UsuarioListar } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Usuário";

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
      
  }

  criarUsuario(usuario: UsuarioListar ) {
    this.usuarioService.CriarUsuario(usuario).subscribe(response => {
    this.router.navigate(['/']);
      
    })

  }



}

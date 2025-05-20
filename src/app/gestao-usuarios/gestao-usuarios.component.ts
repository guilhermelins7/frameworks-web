import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService, Usuario } from './usuario.service';

@Component({
  selector: 'app-gestao-usuarios',
  standalone: false,
  templateUrl: './gestao-usuarios.component.html',
  styleUrl: './gestao-usuarios.component.css',
})
export class GestaoUsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarios: Usuario[] = [];
  editandoUsuario: Usuario | null = null;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      if (this.editandoUsuario) {
        this.usuarioService
          .atualizarUsuario(this.editandoUsuario.id!, {
            ...this.usuarioForm.value,
          })
          .subscribe(() => {
            this.carregarUsuarios();
            this.limparFormulario();
          });
      } else {
        this.usuarioService
          .criarUsuario(this.usuarioForm.value)
          .subscribe(() => {
            this.carregarUsuarios();
            this.limparFormulario();
          });
      }
    }
  }

  editarUsuario(usuario: Usuario) {
    this.editandoUsuario = usuario;
    this.usuarioForm.patchValue({
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone,
    });
  }

  deletarUsuario(id: string) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.usuarioService.deletarUsuario(id).subscribe(() => {
        this.carregarUsuarios();
      });
    }
  }

  limparFormulario() {
    this.usuarioForm.reset();
    this.editandoUsuario = null;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TipoContaEnum } from 'src/app/enums/tipo-conta.enum';
import { ContaAplicacaoModel } from 'src/app/models/conta-aplicacao.model';
import { ContaCorrenteModel } from 'src/app/models/conta-corrent.model';
import { CooperadoModel } from 'src/app/models/cooperado.model';
import { CPFModel } from 'src/app/models/cpf.model';
import { CooperadoService } from 'src/app/services/cooperado.service';

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.scss']
})
export class NovaAdmissaoComponent implements OnInit, OnDestroy {
  cooperado: CooperadoModel | undefined
  cpfInput: string = ""
  loading = false
  subs = new Subscription()
  form: FormGroup
  fcCpf: FormControl
  constructor(
    private _cooperadoService: CooperadoService,
    private _snackBar: MatSnackBar
  ) {
    this.fcCpf = new FormControl('', [Validators.required])
    this.form = new FormGroup({
      cpf: this.fcCpf
    })
}

get formControls() { return this.form.controls}

ngOnInit(): void {
}

ngOnDestroy(): void {
  this.subs.unsubscribe()
}

consultarCPF(cpf: string) {
  this.cooperado = undefined
  this.loading = true
  //Timeout apenas para dar um efeito de buscar
  setTimeout(() => {
    let sub = this._cooperadoService.consultaCPFApi(cpf)
      .subscribe(cpf => {
        if (cpf) {
          this.cooperado = new CooperadoModel()

          this.cooperado.nome = cpf.nome
          this.cooperado.cpf = new CPFModel()
          this.cooperado.cpf.numero = cpf.id
          this.cooperado.cpf.situacao = cpf.situacao

          console.log('cooperado', this.cooperado);
          console.log('cpf', cpf);
          

          let sub = this._cooperadoService.consultaCooperadoCPF(cpf.id)
            .subscribe(cooperado => {
              cooperado.contas.forEach(conta => {
                console.log('contas', conta);

                switch (conta.tipo) {
                  case TipoContaEnum.ContaAplicacao: {
                    this.cooperado?.contas.push(new ContaAplicacaoModel(conta.id, conta.numero, conta.cooperativa))
                    break
                  }
                  case TipoContaEnum.ContaCorrente: {
                    this.cooperado?.contas.push(new ContaCorrenteModel(conta.id, conta.numero, conta.cooperativa))
                    break
                  }
                }

              })
            })
          this.subs.add(sub)
        } else {
          this._snackBar.open("CPF não encontrado na consulta", 'X', {duration: 5000})
        }
      }, error => {
        this._snackBar.open("CPF não encontrado na consulta", 'X', {duration: 5000})
        this.loading = false
      }, () => this.loading = false)
    this.subs.add(sub)
  }, 2000)


}

}

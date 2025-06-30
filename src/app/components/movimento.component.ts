import {Component, OnInit} from '@angular/core';
import {MovimentoService} from '../services/movimento.service';
import {ProdutoService} from "../services/produto.service";
import {CosifService} from "../services/cosif.service";

@Component({
    selector: 'app-movimento',
    templateUrl: './movimento.component.html',
    styleUrls: ['./movimento.component.css']
})
export class MovimentoComponent implements OnInit {
    movimentos: any[] = [];
    movimento: any = {
        mes: '', ano: '', numeroLancamento: '', codProduto: '', codCosif: '', descricao: '', valor: '', usuario: ''
    };
    modoEdicao = false;
    produtos: any[] = [];
    cosifs: any[] = [];
    formDesabilitado: boolean = true;

    constructor(private movimentoService: MovimentoService, private produtoService: ProdutoService, private cosifService: CosifService) {
    }

    ngOnInit(): void {
        this.listarMovimentos();
        this.carregarProdutos();
        this.carregarCosifs();
    }

    listarMovimentos() {
        this.movimentoService.listar().subscribe(data => this.movimentos = data);
    }

    carregarProdutos() {
        this.produtoService.listarProdutos().subscribe(data => this.produtos = data);
    }

    carregarCosifs() {
        this.cosifService.listarCosifs().subscribe(data => this.cosifs = data);
    }

    criarMovimento() {
        const { numeroLancamento, usuario, ...movimentoSemCamposGerados } = this.movimento;
        this.movimentoService.criar(movimentoSemCamposGerados).subscribe(() => {
            this.listarMovimentos();
            this.movimento = {
                mes: '',
                ano: '',
                codProduto: '',
                codCosif: '',
                descProduto: '',
                valor: '',
                usuario: ''

            };
            this.modoEdicao = false;
        });
    }


    limparFormulario() {
        this.movimento = {};
    }

    novoMovimento() {
        this.modoEdicao = true;
        this.movimento = {
            mes: '',
            ano: '',
            numeroLancamento: '',
            codProduto: '',
            codCosif: '',
            valor: '',
            descricao: '',
            usuario: ''
        };
    }

    displayedColumns: string[] = [
        'mes',
        'ano',
        'codProduto',
        'descProduto',
        'numeroLancamento',
        'descricao',
        'valor'
    ];


    permitirSomenteNumeros(event: KeyboardEvent) {
        const charCode = event.key.charCodeAt(0);
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    }


}
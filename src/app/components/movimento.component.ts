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
    }

    listarMovimentos() {
        this.movimentoService.listar().subscribe(data => this.movimentos = data);
    }

    carregarProdutos() {
        this.produtoService.listarProdutos().subscribe(data => this.produtos = data);
    }

    carregarCosifsPorProduto() {
        if (this.movimento.codProduto) {
            this.cosifService.listarCosifsPorProduto(this.movimento.codProduto).subscribe(cosifs => {
                this.cosifs = cosifs;
            });
        }
    }

    onProdutoChange() {
        this.carregarCosifsPorProduto();
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


    validarMesInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        let valor = input.value;

        // Remove caracteres não numéricos
        valor = valor.replace(/\D/g, '');

        // Limita a no máximo 2 dígitos
        if (valor.length > 2) {
            valor = valor.substring(0, 2);
        }

        // Só valida se tiver 2 dígitos
        if (valor.length === 2) {
            const numero = Number(valor);
            if (numero < 1 || numero > 12) {
                valor = '';
            }
        }

        input.value = valor;
        this.movimento.mes = valor;
    }



    permitirSomenteNumeros(event: KeyboardEvent): void {
        const charCode = event.key.charCodeAt(0);
        // Permite apenas caracteres entre '0' (48) e '9' (57)
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    }



}
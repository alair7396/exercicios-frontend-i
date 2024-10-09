import './App.css';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import MesAtual from './componentes/MesAtual/Mesatual';
import AnoAtual from './componentes/AnoAtual/AnoAtual';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import MinutoAtual from './componentes/MinutoAtual/MinutoAtual';
import DataCompletaAtual from './componentes/DataCompletaAtual/DataCompletaAtual';
import OlaPessoa from './componentes/OlaPessoa/OlaPessoa';
import ListaProdutos from './componentes/ListaProdutos/ListaProdutos';
import VerificarIdade from './componentes/VerificarIdade/VerificarIdade';
import NumerosPares from './componentes/NumerosPares/NumerosPares';
import NumerosImpares from './componentes/NumerosImpares/NumerosImpares';




function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />

      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>
      <div className='container'>
        <DiaAtual />
      </div>
      <hr />
      <samp>
        3. Crie um componente chamado 'MesAtual' que mostra o texto:
        "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco.

      </samp>
      <MesAtual />
      <hr />
      <samp>
        4.Crie um componente chamado 'AnoAtual' que mostra o texto:
        "2024" em uma div com o fundo vermelho, justificado à direita na cor amarelo
      </samp>
      <AnoAtual />
      <hr />
      <samp>
        5. Crie um componente chamado 'HoraAtual' que mostra o texto:
        "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor
        amarelo.
      </samp>
      <div className='container'>
        <HoraAtual />
      </div>
      <hr />
      <samp>6. Crie um componente chamado 'MinutoAtual' que mostra o texto:
        "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor
        preta.
      </samp>
      <div className='container'>
        <MinutoAtual />
      </div>
      <hr />
      <samp>7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
        "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
        branca.
      </samp>
      <DataCompletaAtual />
      <hr />
      <samp>
        8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
        e mostra o texto:
        "Olá, nome!" em uma div com o fundo laranja, texto centralizado na cor branca.

      </samp>
      <OlaPessoa nome={'maria'} />
      <hr />
      <samp>
        9. Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
        'produtos' e deve ser uma lista de nomes de produtos.
        O componente deve listar os itens em tela em uma ul com o fundo roxo e a letra
        amarela.
      </samp>
      <ListaProdutos produtos={<ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>} />
      <hr />
      <samp>
        10.Crie um componente chamado 'VerificarIdade' que aceita uma prop chamada
        'idade' e mostra uma mensagem:
        "xx anos, é maior de idade" se a idade for maior ou igual a 18, em uma div
        com o fundo verde e letra amarela;
        "xx anos, é menor de idade" se for menor que 18, em uma div com o
        fundo vermelho e letra amarela.;
        Chame o componente duas vezes, uma para maior de idade e outra para menor de
        idade.
      </samp>
      <VerificarIdade idade={[15]} />
      <hr />
      <samp>
        11.Crie um componente chamado 'NumerosPares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números pares em uma ul com o
        fundo azul e a letra amarela.
      </samp>
      <NumerosPares numeros={[2,4,6]}/>
      <hr />
      <samp>
        12.Crie um componente chamado 'NumerosImpares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números ímpares em uma ul
        com o fundo azul e a letra amarela.
      </samp>
      <NumerosImpares numerosimpar={[1,3,5]}/>

    </>
  )
};

export default App;

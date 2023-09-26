import React from "react";
import { Table, Button } from "react-bootstrap";

class Anotacao extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,  
      titulo: "",
      descricao: "",
      anotacoes: [],
    };
  }

  componentDidMount() {
    this.buscarAnotacao();
  }

  renderFormulario(){
    return(
        <div >
        <form id="cadForm" style={{ display: 'none' }}>
            <div>
            <h2>Cadastro de Anotação</h2>
            <div id="divId" style={{ display: 'none' }}>
            <label htmlFor="id">ID:</label>
            <input 
              style={{textAlign : 'center'}} 
              type="text"
              id="id"
              value={this.state.id}
              onChange={this.handleTituloChange}
              readOnly={true}
            /> 
            </div>
            <br></br>
            <br></br>
            <label htmlFor="titulo">Título:</label>
            <br></br>      
            <input
              type="text"
              id="titulo"
              value={this.state.titulo}
              onChange={this.handleTituloChange}
            />
            </div>
            <div>
            <label htmlFor="descricao">Descrição:</label>
            <br></br>
            <textarea
              id="descricao"
              value={this.state.descricao}
              onChange={this.handleDescricaoChange}
            />
            </div>
            <Button id="botaoUpd" variant="primary" type="submit" onClick={this.update} style={{ display: 'none' }}>Salvar</Button>
            <Button id="botaoCad" variant="primary"  onClick={this.submit} style={{ display: 'none' }}>Salvar</Button> 
            <Button id="botaoCancelar" variant="danger" onClick={this.cancelarFormulario} style={{ display: 'none' }}>Cancelar</Button>  
        </form>
        </div>
    );
  }

  renderTabela() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.anotacoes.map((anotacao) => (
            <tr>
              <td>{anotacao.id}</td>
              <td>{anotacao.titulo}</td>
              <td>{anotacao.descricao}</td>
              <td>
                <Button variant="warning" onClick={() => this.buscarAnotacaoById(anotacao.id)}>Editar</Button>
                <Button
                  variant="danger"
                  onClick={() => this.deletarAnotacao(anotacao.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  buscarAnotacao() {
    fetch("http://localhost:8080/anotacao")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ anotacoes: dados });
      });
  }

  buscarAnotacaoById = (id) => {
    this.ativarFormUpdate();
    fetch("http://localhost:8080/anotacao/"+id, { method: "GET" })
      .then((resposta) => resposta.json())
      .then(anotacao => {
        this.setState({ 
            id: anotacao.id,
            titulo: anotacao.titulo,
            descricao: anotacao.descricao
        });
      });
  }

  deletarAnotacao = (id) => {
    fetch("http://localhost:8080/anotacao/" + id, { method: "DELETE" }).then(
      (resposta) => {
        if (resposta.ok) {
          this.buscarAnotacao();
        }
      }
    );
  };

  cadastrarAnotacao = (anotacao) => {
    fetch("http://localhost:8080/anotacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(anotacao),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarAnotacao();
      }
    });
  };

  editarAnotacao = (anotacao) => {
    fetch("http://localhost:8080/anotacao", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(anotacao),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarAnotacao();
      }
    });
  };

  handleTituloChange = (e) => {
    this.setState({
      titulo: e.target.value
    });
  };

  handleDescricaoChange = (e) => {
    this.setState({
      descricao: e.target.value
    });
  };

  submit = () => {
    const anotacao = {
      id: this.state.id,   
      titulo: this.state.titulo,
      descricao: this.state.descricao,
    };
    this.cadastrarAnotacao(anotacao);
  }

  update = () => {
    const anotacao = {
        id: this.state.id,   
        titulo: this.state.titulo,
        descricao: this.state.descricao,
      };
      this.editarAnotacao(anotacao);
  }

  cancelarFormulario = () => {
    var formulario = document.getElementById('cadForm');
    formulario.style.display = 'none';
  }

  alternarVisibilidade = () => {
    const divElement = document.getElementById('cadForm');
    const botaoElement = document.getElementById('botaoAlterar');
    const botaoCad = document.getElementById('botaoCad');
    const botaoCancelar = document.getElementById('botaoCancelar');
    

        if (divElement && botaoElement && botaoCad && botaoCancelar) {
            if (divElement.style.display === 'none') {
                divElement.style.display = 'block';
                botaoCad.style.display = 'block';
                botaoCancelar.style.display = 'block';
                botaoElement.style.display = 'none';
                } else {
                divElement.style.display = 'none';
                botaoCad.style.display = 'none';
                botaoCancelar.style.display = 'none';
                botaoElement.style.display = 'block';
                }
        }
    }

    ativarFormUpdate = () => {
        const inputElement = document.getElementById('divId');
        const divElement = document.getElementById('cadForm');
        const botaoElement = document.getElementById('botaoAlterar');
        const botaoCad = document.getElementById('botaoCad');
        const botaoCancelar = document.getElementById('botaoCancelar');
        const botaoUpd = document.getElementById('botaoUpd');
        if (inputElement && divElement && botaoCad && botaoUpd && botaoCancelar ){
            if(divElement.style.display === 'none'){
                divElement.style.display = 'block';
                botaoUpd.style.display = 'block';
                botaoCancelar.style.display = 'block';
                inputElement.style.display = 'block'
                botaoCad.style.display = 'none';
                botaoElement.style.display = 'none';
            } else {
                divElement.style.display = 'none';
                inputElement.style.display = 'none'
                botaoUpd.style.display = 'none';
                botaoCad.style.display = 'none';
                botaoCancelar.style.display = 'none';
                botaoElement.style.display = 'block';
            }
        }
    }

  render() {
    return (
        <div>
        {this.renderTabela()}
        <div>
        <Button id="botaoAlterar" variant="primary" onClick={this.alternarVisibilidade} style={{ display: 'block' }}>Cadastrar</Button>       
        {this.renderFormulario()}
        </div>
      </div>
    );
  }
}

export default Anotacao;

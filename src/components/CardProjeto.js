import React, { Component } from 'react';
import api from '../api';

class CardProjetos extends Component {

    constructor() {
        super();
        this.state = {
            likes: 0
        }
        this.addLike = this.addLike.bind(this);
    }

    componentDidMount() {
        this.setState({ likes: this.props.likes });
    }

    addLike() {
        let novo_likes = parseInt(this.state.likes + 1);
        api.put(`projetos/${this.props.id}`, JSON.stringify({ likes: novo_likes })).then(function){
            this.setState({ likes: novo_likes })
        }
        .catch(e=>{
            
        })
        
    }



    render() {
        return (
            <div className="column">
                <div className="ui card centered">
                    <div className="image"><img src="https://picsum.photos/500" alt="" /></div>
                    <div className="content">
                        <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/72/FAQ-icon.png" className="ui right floated avatar image" alt="" />
                        <div className="header">{this.props.nome}</div>
                        <div className="meta"><span className="date">{this.props.usuario}</span></div>
                        <div className="description">{this.props.descricao}</div>
                    </div>

                    <div className="content">
                        <span>
                            <i aria-hidden="true" className="chat icon"></i>0 comentários
                      </span>
                        <span href="/" className="right floated botao-like" onClick={this.addLike}>
                            <i aria-hidden="true" className="heart icon"></i>
                            {this.state.likes} likes
                        </span>
                    </div>





                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Comentar" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardProjetos;
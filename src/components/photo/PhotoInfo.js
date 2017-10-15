import React, {Component} from 'react';

export default class PhotoInfo extends Component {
   render() {
      return(
         <div className="foto-info">
            <div className="foto-info-likes">
               {
                  this.props.photo.likers.map(liker => {
                     return (<a href="#">{liker.login}</a>);
                  })
               }
               curtiram
            </div>

            <p className="foto-info-legenda">
               <a className="foto-info-autor">{this.props.photo.loginUsuario}</a>
               {this.props.photo.comentario}
            </p>

            <ul className="foto-info-comentarios">
               {this.props.photo.comentarios.map(comentario => {
                  return(
                     <li className="comentario">
                        <a className="foto-info-autor">{comentario.login}</a>
                        {comentario.texto}
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

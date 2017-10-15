import React, {Component} from 'react';
import PhotoHeader from './PhotoHeader';
import PhotoInfo from './PhotoInfo';
import PhotoComment from './PhotoComment';

export default class Photo extends Component {

   render() {
      return(
         <div className="foto">
            <PhotoHeader photo={this.props.photo}/>
            <img alt="foto" className="foto-src" src={this.props.photo.urlFoto}/>
            <PhotoInfo photo={this.props.photo}/>
            <PhotoComment />
         </div>
      );
   }
}

import React, {Component} from 'react';
import Photo from './photo/Photo';

export default class Timeline extends Component {

   constructor() {
      super();
      this.state = {photos: []};
   }

   componentDidMount() {
      fetch('http://localhost:8080/api/public/fotos/alots')
      .then(response => response.json())
      .then(photos => {
         this.setState({photos: photos});
      });
   }

   render() {
      return (
         <div className="fotos container">
            {
               this.state.photos.map(photo => <Photo photo={photo}/>)
            }
         </div>
      );
   }
}

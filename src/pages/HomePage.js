import React,{ Component } from 'react';
import IntroductionComponent from '../components/IntroductionComponent';

class HeaderComponent extends Component{
    render(){
      return (
      <div>
        <IntroductionComponent></IntroductionComponent>
      </div>
      );
    }
  }
  
  export default HeaderComponent;
import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
//import AddSubscribePopup from '../../Popup/AddSubscribePopup/AddSubscribePopup';
//import WarningMessage from '../../Components/WarningMessage/WarningMessage';
import '../style/IntroductionComponent.css';

/*
 {this.state.showPopup ? <AddSubscribePopup 
                                        title='Takip Et' 
                                        closePopup={this.TogglePopup.bind(this)}
                                        successComment={this.ToggleSuccessComment.bind(this)}
                                        unsuccessComment={this.ToggleUnsuccessComment.bind(this)}
                                        uniqueComment={this.ToggleUniqueComment.bind(this)}/>: ''}
*/


class Introduction extends Component{
    constructor(){
    super();
    this.state={
		showPopup:false,
        warning:false,
        warningMessage:'',
        warningType:'',
    }
    window.scrollTo(0, 0);
  }
	
componentDidMount() {
   if(this.state.warning){setTimeout(() => { this.setState({warning: false})}, 2000);}
}
    
TogglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
}

ToggleSuccessComment(){
      this.setState({warning:true,
                     warningMessage:"Takip isteğiniz onaylandı.",
                     warningType:"Başarılı!",
                        });
    }

ToggleUnsuccessComment(){
      this.setState({warning:true,
                     warningMessage:"Bir sorun oluştu.",
                     warningType:"Hata!"
                          })     
    }

ToggleUniqueComment(){
      this.setState({warning:true,
                     warningMessage:"Bu mail adresi zaten kayıtlı.",
                     warningType:"Hata!"
                          })     
    }

SendWarningMessage = (message,type) => {
    //var warning = <WarningMessage message={message} type={type}/>;
    //return warning
  }
  //<div className="search-area"> <SearchComponent /> </div>

  render(){
    return(
            <div className="jumbotron text-center introduction-body">
              <div><img src="code.png" className="img-circle Author-intro-img" alt="#" /></div> 
              {this.state.warning ? this.SendWarningMessage(this.state.warningMessage,this.state.warningType) : ""} 
              <p className="introduction-text">Aramak istediğiniz konu yada başlığı burada aratabilirsiniz.</p>
              
              <button className="btn btn-default btn-inroducton-follow" onClick={this.TogglePopup.bind(this)} >Takip Et</button>
             
            </div>   
            
          
      );
  }
}
export default Introduction;
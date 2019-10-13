import React, { Component } from 'react';
import Select from 'react-select';
//import fetch from 'isomorphic-fetch';
//import AuthService from './../../Pages/AuthService';
import '../style/SearchComponent.css';

class SearchComponent extends Component{
  constructor(props){
      super(props);
      this.state = {entrys: [],entry: "",value: "",backup:"", warning:false, warningMessage:'', warningType:''}; 
      this.apilocal= "localhost:5001"
      this.apiServer= "165.227.174.88:5001"

      //---------------Bind-------------------
      this.getEntry = this.getEntry.bind(this);
      this.onChangeEntrySelect = this.onChangeEntrySelect.bind(this);
      this.onPressEnter = this.onPressEnter.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onPressButton = this.onPressButton.bind(this);
      //--------------------------------------
      //this.Auth = new AuthService();
    }


   getEntry (input) {
    /*var entrys = [];
    var url="";
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    if(this.Auth.getToken() == null)
    {
      url = 'http://'+this.apiServer+'/api/get_postlist/-1';
    }else
    {
      url= 'http://'+this.apiServer+'/api/author/get_postlist/-1?token='+this.Auth.getToken();
    }  
    return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      for(var i=0;i<json.PostList.length;i++)
      { 
        entrys.push({value: json.PostList[i]['post_id'], label: json.PostList[i]['title'] })   
      }
      return { options: entrys};
    });*/
  }

  onChangeEntrySelect(value) {this.setState({entry: value,value: value.labe});if(value!==""){this.setState({backup: value.label});};}

  onPressEnter(key){
/*
    if(key.keyCode === 13)
    {
      if(this.state.entry)
      {
        window.location.pathname = '/search/for/'+btoa(unescape(encodeURIComponent(this.state.entry.label)));
      }else if(this.state.value !== null  && this.state.value.length > 0)
      {
        window.location.pathname = '/search/for/'+btoa(unescape(encodeURIComponent(this.state.value)));
      }
      
    }
*/
  }
  
  onPressButton(e){
    /*var _self = this;
    if(this.state.backup !== null  && this.state.backup.length > 0){
        window.location.pathname = '/search/for/'+btoa(unescape(encodeURIComponent(_self.state.backup)));
    }*/
  }

  onInputChange(value){this.setState({value: value});if(value!==""){this.setState({backup: value});}}

  render(){
    return(            
                <div className="input-group search-input-group">
                  <div className="search-input">
                    <Select.Async placeholder="Anahtar kelimeyi girin.." name="selected-state" value={this.state.entry} onInputKeyDown={this.onPressEnter} onInputChange={this.onInputChange} onChange={this.onChangeEntrySelect} loadOptions={this.getEntry} backspaceRemoves={true}/>
                  </div>
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-danger search-button" onClick={this.onPressButton}>ARA</button>
                    }
                  </div>
                </div>
      );
  }
}
export default SearchComponent;
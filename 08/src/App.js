import React,{Component} from 'react';
import Battle from "./Battle";
import Popular from './Popular';
import {HashRouter,Route,Link}  from  'react-router-dom';
    class App extends Component {
        constructor(props){
            super(props);
            this.state={navigationValue:location.hash.substring(1)?location.hash.substring(1):'/'}
        }
        onSwich= value =>{
            this.setState({
                navigationValue:value
            })
        }
        render(){
            const {navigationValue} =this.state;
            return(
            <div>
                <HashRouter>
                        <div style={{ fontSize:'30px',fontWeight:'600',margin:'40px 20px',display:'flex'}} >
                            <div style={{margin:'0 20px'}} onClick={()=>{this.onSwich('/')}} >
                            <Link to='/'  style={{color:navigationValue==='/' ? 'red':'black'}}>  Popular </Link>   
                            </div>
                            <div style={{margin:'0 20px'}} onClick={()=>{this.onSwich('Battle')}}>
                            <Link to='/Battle'  style={{color:navigationValue==='/Battle' ? 'red':'black'}}> Battle</Link>   
                            </div>    
                        </div> 
                        <Route  path="/Battle" component={Battle}/>
                        <Route exact path="/" component={Popular}/>
                        
                </HashRouter>
            </div>
            );
        }
    }
    export default App;
import React,{Component} from 'react';
import Battle from "./Battle";
import Popular from './Popular';
    class App extends Component {
        constructor(props){
            super(props);
            this.state={navigationValue:'Popular'}
        }
        onSwich= value =>{
            this.setState({
                navigationValue:value
            })
        }
        render(){
            const {navigationValue} =this.state;
            return(<div>
                        <div style={{ fontSize:'30px',fontWeight:'600',margin:'40px 20px'}} >
                            <span style={{margin:'0 20px',color:navigationValue==='Popular' ? 'red':''}} onClick={()=>this.onSwich('Popular')} >Popular</span>
                            <span style={{margin:'0 20px',color:navigationValue==='Battle' ? 'red':''}} onClick={()=>this.onSwich('Battle')}>Battle</span>    
                        </div>
                        {navigationValue === 'Popular' ?<Popular />:<Battle />}
                   </div>
            );
        }
    }
    export default App;
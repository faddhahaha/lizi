import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Battle extends Component{
    constructor(){
        super()
        this.state={left:false,right:false,valueleft:false,valuerigth:false}
    }
    changeLeft=(e)=>{
        if(e.target.value){
                this.setState({
                    valueleft:true
                })
        }
    }
    changeRight=(e)=>{
        if(e.target.value){
            this.setState({
                valuerigth:true
            })
    }
    }
    
    btnLeft=()=>{
        this.setState({
            left:true
        }) 

    }
    btnRigth=()=>{
        this.setState({
            right:true
        }) 
       
    }
    render(){
        const {left,right,valueleft,valuerigth} =this.state;
        return(
            <div>
                <h2 style={{textAlign:'center'}}>Instructions</h2>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{width:'16%',margin:'20px 20px 0 20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <p style={{fontWeight:'550',fontSize:'22px'}}>Enter two Github users</p>
                        <div style={{ background: '#eee', padding: '20px' }}>
                            <i className='fa fa-users' style={{ fontSize: '150px', color: '#ffbf74' }}></i>
                        </div>
                    </div>
                    <div style={{width:'16%',margin:'20px 20px 0 20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <p style={{fontWeight:'550',fontSize:'22px'}}>Battle</p>
                        <div style={{ background: '#eee', padding: '20px' }}>
                            <i className='fa fa-fighter-jet' style={{ fontSize: '150px', color: '#808080' }}></i>
                        </div>
                    </div>
                    <div style={{width:'16%',margin:'20px 20px 0 20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <p style={{fontWeight:'550',fontSize:'22px'}}>See the winner</p>
                        <div style={{ background: '#eee', padding: '20px' }}>
                            <i className='fa fa-bell' style={{ fontSize: '150px', color: '#ffbf74' }}></i>
                        </div>
                    </div>
                   
                </div>
                <h2 style={{textAlign:'center',margin:'30px 0'}}>players</h2>
                <div style={{width:'90%',margin:'70px auto',display:'flex',justifyContent:'space-around'}}>
                <div >
                        <p style={{fontWeight:'550',fontSize:'20px'}}>Player One</p>
                        <input type="text" style={{width:'400px',lineHeight:'38px'}}  onChange={this.changeLeft}  placeholder="github username"></input>
                        <button style={{padding:'8px 20px',marginLeft:'20px'}}  disabled={valueleft?"":"disabled"} onClick={this.btnLeft} >Submit</button>
                    </div>
                    <div >
                        <p style={{fontWeight:'550',fontSize:'20px'}}>Player Two</p>
                        <input type="text" style={{width:'400px',lineHeight:'38px'}}  onChange={this.changeRight} placeholder="github username"></input>
                        <button style={{padding:'8px 20px',marginLeft:'20px'}} disabled={valuerigth ?"":"disabled"} onClick={this.btnRigth}>Submit</button>
                    </div>
                </div>
                <div style={{width:'100%'}}>
                  <button style={{padding:'8px 30px',marginLeft:'20px',display:(left && right) ? 'block' : 'none',margin:'0 auto'}}>Battle</button>
                </div>
            </div>
            ) ;
    
        }
}
export default Battle;
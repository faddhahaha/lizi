import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
class Battle extends Component{
    constructor(props){
        super(props);
        this.state={
            left:false,
            right:false,
            valueleft:false,
            valuerigth:false,
            leftvalue:'',
            rightvalue:'',
            imgUrlLeft:'',
            imgUrlRight:'',
        }
    }
    details=()=>{
        this.props.history.push(`/Battle/relust?player1=${this.state.leftvalue}&player2=${this.state. rightvalue}`);
    }
    clearLeft=()=>{
        this.setState({
            left:false
        }) 
    }
    clearRight=()=>{
        this.setState({
            right:false
        }) 

    }
    rightkeyUp = (e) => {
        if (e.keyCode === 13) {
           this.setState({
            right:true
           })
        }
    };
    leftkeyUp = (e) => {
        if (e.keyCode === 13) {
           this.setState({
            left:true
           })
        }
    };
    changeLeft=(e)=>{
        if(e.target.value){
            this.setState({
                valueleft:true,
                leftvalue:e.target.value
            })
        }
    }
    changeRight=(e)=>{
        if(e.target.value){
            this.setState({
                valuerigth:true,
                rightvalue:e.target.value
            })
        }
    }
    requestVlaue=(page,both)=>{
        if(both=='left'){
             let url = `https://api.github.com/users/${page}`
                fetch(url).then(res => 
                        res.json()
                )
                .then(res=>{
                    console.log(res);
                    this.setState({
                        imgUrlLeft:res.avatar_url
                    })
                }).catch(error=>console.log(error))
        }
        if(both=='right'){
            let url = `https://api.github.com/users/${page}`
            fetch(url).then(res => 
                    res.json()
            )
            .then(res=>{
                console.log(res);
                this.setState({
                    imgUrlRight:res.avatar_url
                })
            }).catch(error=>console.log(error))
        }
       
    }
    btnLeft=()=>{
        this.setState({
            left:true
        }) 
       this.requestVlaue(this.state.leftvalue,'left');
    }
    btnRigth=()=>{
        this.setState({
            right:true
        }) 
        this.requestVlaue(this.state.rightvalue,'right');
    }
    render(){
        const {left,right,valueleft,valuerigth,leftvalue,rightvalue,imgUrlRight,imgUrlLeft} =this.state;
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
                <div>
                        <p style={{fontWeight:'550',fontSize:'20px'}}>Player One</p>
                        <input type="text" style={{width:'400px',lineHeight:'38px'}}  onChange={this.changeLeft}  placeholder="github username" onKeyUp={this.leftkeyUp}></input>
                        <button style={{padding:'8px 20px',marginLeft:'20px'}}  disabled={valueleft?"":"disabled"} onClick={this.btnLeft} >Submit</button>
                        <div style={{display: left ?'flex':"none",justifyContent:'space-between',alignItems:'center',width:'510px',height:'100px',background:'#DFDFDF',marginTop:'10px',borderRadius:'10px'}}>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                            <div style={{width:'80px',height:'80px',margin:'0 20px'}}>
                                <img style={{width:'100%',borderRadius:'10px'}} src={imgUrlLeft} />
                            </div>
                            <span style={{fontSize:'20px',marginLeft:'10px'}}>{leftvalue}</span>
                            </div> 
                            <div style={{width:'40px',height:'40px',marginRight:'20px',background:'red',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={this.clearLeft}>
                                <i className="fa fa-times fa-3x" ></i>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p style={{fontWeight:'550',fontSize:'20px'}}>Player Two</p>
                        <input type="text" style={{width:'400px',lineHeight:'38px'}}  onChange={this.changeRight} placeholder="github username" onKeyUp={this.rightkeyUp}></input>
                        <button style={{padding:'8px 20px',marginLeft:'20px'}} disabled={valuerigth ?"":"disabled"} onClick={this.btnRigth} >Submit</button>
                        <div style={{display: right ?'flex':"none",justifyContent:'space-between',alignItems:'center',width:'510px',height:'100px',background:'#DFDFDF',marginTop:'10px',borderRadius:'10px'}}>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                                <div style={{width:'80px',height:'80px',margin:'0 20px'}}>
                                    <img style={{width:'100%',borderRadius:'10px'}} src={imgUrlRight} />
                                </div>
                                <span style={{fontSize:'20px',marginLeft:'10px'}}>{rightvalue}</span>
                            </div>
                            <div style={{width:'40px',height:'40px',marginRight:'20px',background:'red',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={this.clearRight}>
                                <i className="fa fa-times fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%'}}>
                  <button style={{padding:'8px 30px',marginLeft:'20px',display:(left && right) ? 'block' : 'none',margin:'0 auto'}} onClick={this.details.bind(this)}>
                  <Link to='/Battle/relust'>Battle</Link>
                  </button>
                </div>
            </div>
            ) ;

        }
}
export default Battle;
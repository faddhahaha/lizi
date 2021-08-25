import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class PopularALL extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const {data}=this.props;
        
            {data.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-sm-12 col-md-6 inner" key={index} >
                        <div style={{backgroundColor:'#EBEBEB',display:'flex',flexDirection:'column', alignItems:'center', justifyContent: 'center',margin:'1% 1%',}}> 
                        <h2 style={{margin:'10px 0'}}>#{index}</h2>
                        <div style={{margin:'0 auto',display:' inline-block',textAlign:'center',width:'100%'}}>
                            <img style={{width:'150px'}} src={item.owner.avatar_url} />
                        </div>
                        <div style={{color:'red',fontWeight:'600'}}>{item.owner.login}</div>
                        <div style={{width:'100%',paddingLeft:'10px'}}>
                            <ul className="fa-ul">
                                <li><i className="fa-li fa fa-book"></i>{item.owner.login}</li>
                                <li><i className="fa-li fa fa-check-square"></i>{item.stargazers_count} stars</li>
                                <li><i className="fa-li fa fa-spinner fa-spin"></i>{item.forks} forks</li>
                                <li><i className="fa-li fa fa-square"></i>{item.open_issues_count} Open issues</li>
                            </ul>
                        </div>  
                        </div>
                        </div>
                    )
                }
            )}
    }
} 
export default PopularALL;
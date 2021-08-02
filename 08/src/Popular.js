import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import InfiniteScroll from 'react-infinite-scroller'

class Popular extends Component {
    constructor() {
        super()
        this.state = {
            date: [],
            switchIndex: 'ALL',
            url: {
                'ALL': 'https://api.github.com/search/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories',
                'JavaScript': 'https://api.github.com/search/repositories?q=stars:3E1+language:javascript&sort=stars&order=desc&type=Repositories',
                'Ruby': 'https://api.github.com/search/repositories?q=stars:3E1+language:ruby&sort=stars&order=desc&type=Repositories',
                'Java': 'https://api.github.com/search/repositories?q=stars:3E1+language:java&sort=stars&order=desc&type=Repositories',
                'CSS': 'https://api.github.com/search/repositories?q=stars:3E1+language:css&sort=stars&order=desc&type=Repositories'
            },
            hasMore: true, // 是否开启下拉加载
            pageUrl: 'https://api.github.com/search/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories'
        }
        this.loadMoreData()
    }
    // 加载更多数据
    loadMoreData = (page = 1) => {
        // page 当前滚动到了第几页
        const { pageUrl } = this.state
        this.getData(`${pageUrl}&page=${page}`)
    }
    //获取数据
    getData = (url = 'https://api.github.com/search/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories') => {
        let { date } = this.state
        fetch(url).then(res => res.json())
            .then(res => {
                if (res.items) {
                    this.setState({ date: [...date, ...res.items] })
                }
            }).catch(e => { console.log(e) })
    }
    //切换
    onSwitch = value => {
        this.setState({ 
            date: [], 
            pageUrl: this.state.url[value], 
            switchIndex: value }, 
            () => { this.loadMoreData(1) 
        })
    }
    render() {
        const { date, hasMore, switchIndex } = this.state
        return (
            <div>
                <div >
                <h1 style={{textAlign:'center'}}>
                         <span style={{marginRight:'20px',color:(switchIndex=='ALL') ? "red" : " "}} onClick={()=>this.onSwitch('ALL')}>ALL</span>
                         <span style={{marginRight:'20px',color:(switchIndex=='JavaScript') ? "red" : " "}} onClick={()=>this.onSwitch('JavaScript')}>JavaScript</span>
                         <span style={{marginRight:'20px',color:(switchIndex=='Ruby') ? "red" : " "}} onClick={()=>this.onSwitch('Ruby')}>Ruby</span>
                         <span style={{marginRight:'20px',color:(switchIndex=='java') ? "red" : " "}} onClick={()=>this.onSwitch('java')}>java</span>
                         <span style={{marginRight:'20px',color:(switchIndex=='CSS') ? "red" : " "}} onClick={()=>this.onSwitch('CSS')}>CSS</span>
                </h1>
                </div>
                <InfiniteScroll
                    initialLoad={false} // 不让它进入直接加载
                    pageStart={1} // 设置初始化请求的页数
                    loadMore={this.loadMoreData}  // 监听的ajax请求
                    hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
                    useWindow={true} // 不监听 window 滚动条
                    key={switchIndex}
                    style={{width: '100%',overflow:'hidden'}}
                >
                    <div className='row'>
                        {date.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-sm-12 col-md-6 inner" key={index} >
                                <div style={{backgroundColor:'#EBEBEB',display:'flex',flexDirection:'column', alignItems:'center', justifyContent: 'center',margin:'1% 1%',}}> 
                                <h2>#{index}</h2>
                                <div style={{margin:'0 auto',display:' inline-block',textAlign:'center',width:'100%'}}>
                                    <img style={{width:'150px'}} src={item.owner.avatar_url} />
                                </div>
                                <div style={{color:'red',fontWeight:'600'}}>{item.owner.login}</div>
                                <div>
                                <ul className="fa-ul">
                                    <li><i className="fa-li fa fa-book"></i>{item.owner.login}</li>
                                    <li><i className="fa-li fa fa-check-square"></i>{item.watchers}</li>
                                    <li><i className="fa-li fa fa-spinner fa-spin"></i>{item.forks}</li>
                                    <li><i className="fa-li fa fa-square"></i>{item.stargazers_count}</li>
                                </ul>
                                </div>  
                            </div>
                                </div>
                            )
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}
const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    item: {
        backgroundColor: '#ebebeb',
        width: '100%',
        marginBottom: '10px'
    }
}

export default Popular;
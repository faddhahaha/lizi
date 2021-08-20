
const initState = {
    store: [],
    sum: 0,
    price:0,
    installments:0,
    commodityStore:[],
    ordcommodityStore:[],
    size:[
        {name:'XS',action:false},
        {name:'S',action:false},
        {name:'M',action:false},
        {name:'ML',action:false},
        {name:'L',action:false},
        {name:'XL',action:false},
        {name:'XXL',action:false},
    ]
};

export default {
    namespace: 'commodityContent',
    state: initState,
    subscriptions: {},
    effects: {
            *request({payload},{put,call}){
    
                function https(){
                    
                    return fetch('https://react-shopping-cart-67954.firebaseio.com/products.json').then(res => {
              
                        return res.json();
                    })
                    .then(res => {
                        
                        return res;

                        
                
                    }) 
                    
                }

                let res = yield call(https);
                console.log(res)
                yield put({
                        type:'sizeSelection',
                        payload:res.products
                })
                yield put({
                    type:'commodityvalue',
                    payload:res.products
            })
            }
    },
    reducers: {
        ////尺码筛选
        changeSize(state,{payload}){ 
            state.map((item)=>{
                if(item.name === payload){
                    item.action=!item.action;
                }
                
            })
            return [...state]
        },
        //保存原始值
        commodityvalue(state,{payload}){
            state.ordcommodityStore =payload;
            return {
                ...state
            }
        },
        //尺码筛选
        sizeSelection(state,{payload}){
            state.commodityStore =payload;
            return {
                ...state
            }
        },
        //刷新页面数据初始化
        localCarContent(state,{payload}){
                state=payload;
                return {...state};
        },
        // 结算清空购物车
        carClear(state){
            state.store =[];
            state.sum=0;
            state.price=0;
            state.installments=0;
            return {...state}
        },
        //清除购物车单项
        carDelectItem(state,{payload}){
            state.store.map((item,index)=>{
                if(item.id === payload.id){
                    state.store.splice(index,index+1);
                    state.sum= state.sum-payload.sum;
                    state.price= state.price-payload.price*payload.sum;
                    if( item.installments === state.installments ){
                        state.installments =0;
                    }
                }
            })
            return {...state}
        },
        //购物车分期信息
        carInstallment(state){
                state.store.map((item)=>{
                    state.installments =item.installments > state.installments?item.installments :state.installments
                })
                return {...state}
        },
        //购物车价格总计
        carPrice(state, {payload}){
            state.price=payload.price+state.price;
            return {...state}
        },
        //购车内容添加操作
        carContent(state, {payload}) {
            if (state.store.length === 0) {
                payload.sum= 1;
                state.store.push(payload);
                state.sum = state.sum + 1;  
            } else {
                let bool = false;
                for (let v of state.store) {
                    if (v.id === payload.id) {
                    state.sum = state.sum + 1;
                        v.sum++
                     
                        bool = true;
                        break
                    }
                }
                if (!bool) {
                    state.sum = state.sum + 1;
                    payload.sum = 1;
                    state.store.push(payload);
                }
            }
            let value ={...state}
            window.localStorage.setItem("value", JSON.stringify(value));

            return {
                ...state
            }
        },
        //总计件数减操作
        carReduction(state,{payload}){
            state.store.map((item)=>{
                if(item.id === payload && item.sum>0 && state.sum>0){
                    item.sum= item.sum-1;
                    state.sum =state.sum-1;
                }
                
            })
            
            return {...state}
        },
        //购物车价格总计减操作
        carPriceReduction(state,{payload}){
            state.price=state.price-payload.price;
            return {...state}
        },
        //购物车价格总计加操作
        carAddPrice(state,{payload}){
            state.price =state.price+payload.price;
            payload.sum=payload.sum+1;
            state.sum =state.sum+1;
         return {...state}
        }
       
    }
}
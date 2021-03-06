
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
            *request(_,{call, put}){
    
                function https(){
                    
                    return fetch('https://react-shopping-cart-67954.firebaseio.com/products.json').then(res => {
              
                        return res.json();
                    })
                    .then(res => {
                        
                        return res;
                    }) 
                    
                }

                let res = yield call(https);
               
                yield put({
                    type:'commodityValue',
                    payload:res.products
                })
            }
    },
    reducers: {
        commodityValue(state,{payload}){
            state.ordcommodityStore =payload;
            state.commodityStore =payload;
            
        
                return {...state}
        },
        sizeChange(state){
            let newList=[];
            let listName = [];
            state.commodityStore=state.ordcommodityStore;
            state.size.map(item => {
                    if (item.action){
                        listName.push(item.name)
                    } 
            })
            if (listName.length >0 ) {
                state.commodityStore.map(item => {
                    
                    listName.map(name => {
                            if (name !== undefined && item.availableSizes.indexOf(name) !== -1 && newList.indexOf(item) === -1) {
                                newList.push(item);
                               
                            }
                        })
                    })
                    
            } else {
               newList = state.ordcommodityStore;
                 
            }
            state.commodityStore = newList;
             
            return {...state}
        },
        //????????????
        sort(state,{payload}){
            let newList =state.commodityStore;
            
            if(payload ==='LowestToHighest'){
                    newList = newList.sort((a, b) => a.price - b.price)

            }else if(payload ==='HighestToLowest'){
                    newList = newList.sort((a, b) => b.price - a.price)
            }else if(payload === 'Select'){
                    newList = newList.sort((a,b)=>a.id-b.id)
            }
            state.commodityStore=newList;
            return {...state}
        },
        //????????????
        changeSize(state,{payload}){ 
            state.size.map((item)=>{
                if(item.name === payload){
                    item.action=!item.action;
                }
                
            })
            return {...state}
        },
        //???????????????
        commodityvalue(state,{payload}){
            state.ordcommodityStore =payload;
            return {
                ...state
            }
        },
        //????????????
        sizeSelection(state,{payload}){
            state.commodityStore =payload;
            return {
                ...state
            }
        },
        //???????????????????????????
        localCarContent(state,{payload}){
                state=payload;
                return {...state};
        },
        // ?????????????????????
        carClear(state){
            state.store =[];
            state.sum=0;
            state.price=0;
            state.installments=0;
            return {...state}
        },
        //?????????????????????
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
        //?????????????????????
        carInstallment(state){
                state.store.map((item)=>{
                    state.installments =item.installments > state.installments?item.installments :state.installments
                })
                return {...state}
        },
        //?????????????????????
        carPrice(state, {payload}){
            state.price=payload.price+state.price;
            return {...state}
        },
        //????????????????????????
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
        //?????????????????????
        carReduction(state,{payload}){
            state.store.map((item)=>{
                if(item.id === payload && item.sum>0 && state.sum>0){
                    item.sum= item.sum-1;
                    state.sum =state.sum-1;
                }
                
            })
            
            return {...state}
        },
        //??????????????????????????????
        carPriceReduction(state,{payload}){
            state.price=state.price-payload.price;
            return {...state}
        },
        //??????????????????????????????
        carAddPrice(state,{payload}){
            state.price =state.price+payload.price;
            payload.sum=payload.sum+1;
            state.sum =state.sum+1;
         return {...state}
        }
       
    }
}
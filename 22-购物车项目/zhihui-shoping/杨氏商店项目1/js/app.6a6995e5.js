(function(){"use strict";var t={8500:function(t,e,s){s.d(e,{A:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"count-box"},[e("button",{staticClass:"sub",on:{click:t.handlesub}},[t._v("-")]),e("input",{staticClass:"inp",attrs:{type:"text"},domProps:{value:t.value},on:{change:t.handlechange}}),e("button",{staticClass:"add",on:{click:t.handleadd}},[t._v("+")])])},i=[],o={props:{value:{type:Number,default:1}},methods:{handlesub(){this.value<=1||this.$emit("input",this.value-1)},handleadd(){this.$emit("input",this.value+1)},handlechange(t){const e=+t.target.value;isNaN(e)||e<1?t.target.value=this.value:this.$emit("input",e)}}},n=o,r=s(1656),c=(0,r.A)(n,a,i,!1,null,null,null),d=c.exports},2426:function(t,e,s){s.d(e,{A:function(){return d}});s(4114);var a=function(){var t=this,e=t._self._c;return t.item.goods_id?e("div",{staticClass:"goods-item",on:{click:function(e){return t.$router.push(`/prodetail/${t.item.goods_id}`)}}},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.item.goods_image,alt:""}})]),e("div",{staticClass:"right"},[e("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(t.item.goods_name)+" ")]),e("p",{staticClass:"count"},[t._v("已售"+t._s(t.item.goods_sales)+"件")]),e("p",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("¥"+t._s(t.item.goods_price_min))]),e("span",{staticClass:"old"},[t._v("¥"+t._s(t.item.line_price_min))])])])]):t._e()},i=[],o={name:"GoodsItem",props:{item:{type:Object,default:()=>({})}}},n=o,r=s(1656),c=(0,r.A)(n,a,i,!1,null,"32fa985b",null),d=c.exports},9652:function(t,e,s){s.d(e,{U4:function(){return i},YR:function(){return n},fd:function(){return o},gq:function(){return r}});var a=s(5720);const i=(t,e,s)=>a.A.post("/cart/add",{goodsId:t,goodsNum:e,goodsSkuId:s}),o=()=>a.A.get("/cart/list"),n=(t,e,s)=>a.A.post("/cart/update",{goodsId:t,goodsNum:e,goodsSkuId:s}),r=t=>a.A.post("/cart/clear",{cartIds:t})},9546:function(t,e,s){var a=s(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],n={data(){return{}}},r=n,c=s(1656),d=(0,c.A)(r,i,o,!1,null,null,null),l=d.exports,u=s(6178),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pay"},[e("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"address"},[e("div",{staticClass:"left-icon"},[e("van-icon",{attrs:{name:"logistics"}})],1),t.selectAddress?.address_id?e("div",{staticClass:"info"},[e("div",{staticClass:"info-content"},[e("span",{staticClass:"name"},[t._v(t._s(t.selectAddress.name))]),e("span",{staticClass:"mobile"},[t._v(t._s(t.selectAddress.phone))])]),e("div",{staticClass:"info-address"},[t._v(" "+t._s(t.selectAddress.detail)+" ")])]):e("div",{staticClass:"info"},[t._v(" 请选择配送地址 ")]),e("div",{staticClass:"right-icon"},[e("van-icon",{attrs:{name:"arrow"}})],1)]),t.order.goodsList?e("div",{staticClass:"pay-list"},[e("div",{staticClass:"list"},t._l(t.order.goodsList,(function(s){return e("div",{key:s.goods_id,staticClass:"goods-item"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:s.goods_image,alt:""}})]),e("div",{staticClass:"right"},[e("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(s.goods_name)+" ")]),e("p",{staticClass:"info"},[e("span",{staticClass:"count"},[t._v("x"+t._s(s.total_num))]),e("span",{staticClass:"price"},[t._v("¥"+t._s(s.total_pay_price))])])])])})),0),e("div",{staticClass:"flow-num-box"},[e("span",[t._v("共 "+t._s(t.order.orderTotalNum)+" 件商品，合计：")]),e("span",{staticClass:"money"},[t._v("￥"+t._s(t.order.orderTotalPrice))])]),e("div",{staticClass:"pay-detail"},[e("div",{staticClass:"pay-cell"},[e("span",[t._v("订单总金额：")]),e("span",{staticClass:"red"},[t._v("￥"+t._s(t.order.orderTotalPrice))])]),t._m(0),e("div",{staticClass:"pay-cell"},[e("span",[t._v("配送费用：")]),t.selectAddress?e("span",{staticClass:"red"},[t._v("+￥0.00")]):e("span",[t._v("请先选择配送地址")])])]),e("div",{staticClass:"pay-way"},[e("span",{staticClass:"tit"},[t._v("支付方式")]),e("div",{staticClass:"pay-cell"},[e("span",[e("van-icon",{attrs:{name:"balance-o"}}),t._v("余额支付（可用 ¥ "+t._s(t.personal.balance)+" 元）")],1),e("span",{staticClass:"red"},[e("van-icon",{attrs:{name:"passed"}})],1)])]),e("div",{staticClass:"buytips"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}})])]):t._e(),e("div",{staticClass:"footer-fixed"},[e("div",{staticClass:"left"},[t._v("实付款："),e("span",[t._v("￥"+t._s(t.order.orderTotalPrice))])]),e("div",{staticClass:"tipsbtn",on:{click:t.submitOrder}},[t._v("提交订单")])])],1)},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pay-cell"},[e("span",[t._v("优惠券：")]),e("span",[t._v("无优惠券可用")])])}],h=s(5720);const v=()=>h.A.get("/address/list"),g=()=>h.A.post("/address/add",{form:{name:"张小二",phone:"18999292929",region:[{value:782,label:"上海"},{value:783,label:"上海市"},{value:785,label:"徐汇区"}],detail:"北京路1号楼8888室"}}),f=(t,e)=>h.A.get("/checkout/order",{params:{mode:t,delivery:10,couponId:0,isUsePoints:0,...e}}),_=(t,e)=>h.A.post("/checkout/submit",{mode:t,delivery:10,couponId:0,isUsePoint:0,paytype:10,...e}),C=(t,e)=>h.A.get("/order/list",{params:{dataType:t,page:e}});var y={data(){return{title:"标题"}},methods:{sayHi(){console.log("hi")},loginConfirm(){return!this.$store.getters.token&&(this.$dialog.confirm({confirmButtonText:"去登陆",cancelButtonText:"再逛逛",title:"温馨提示",message:"此时需要先登录才能继续操作"}).then((()=>{this.$router.replace({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{})),!0)}}},A={name:"PayIndex",mixins:[y],data(){return{addressList:[],order:{},personal:{},remark:""}},computed:{selectAddress(){return this.addressList[0]},mode(){return this.$route.query.mode},cartIds(){return this.$route.query.cartId},goodsId(){return this.$route.query.goodsId},goodsSkuId(){return this.$route.query.goodsSkuId},goodsNum(){return this.$route.query.goodsNum}},methods:{async getAddressList(){const{data:{list:t}}=await v();this.addressList=t},async addAddressList(){const t=await g();console.log(t)},async getOrderList(){if("cart"===this.mode){const{data:{order:t,personal:e}}=await f(this.mode,{cartIds:this.cartIds});this.order=t,this.personal=e}if("buyNow"===this.mode){const{data:{order:t,personal:e}}=await f(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum});this.order=t,this.personal=e}},async submitOrder(){"cart"===this.mode&&await _(this.mode,{cartIds:this.cartIds,remark:this.remark}),"buyNow"===this.mode&&await _(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum,remark:this.remark}),this.$toast.success("支付成功"),this.$router.replace("/myorder")}},created(){this.getAddressList(),this.getOrderList()}},b=A,k=(0,c.A)(b,m,p,!1,null,"03032e9a",null),I=k.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go("-1")}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.picUrl,alt:""},on:{click:t.handleClickImg}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(" "+t._s(t.totalSecond===t.second?"获取验证码":t.second+"秒后重新发送")+" ")])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}];const S=()=>h.A.get("/captcha/image"),L=(t,e,s)=>h.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:s}}),P=(t,e)=>h.A.post("/passport/login",{form:{isParty:!1,mobile:t,partyData:{},smsCode:e}});var N={name:"LoginPage",data(){return{picKey:"",picUrl:"",totalSecond:60,second:60,timeId:"",mobile:"",picCode:"",msgCode:""}},async created(){this.getPicCode()},destroyed(){clearInterval(this.timeId)},methods:{async getPicCode(){const{data:{base64:t,key:e}}=await S();this.picUrl=t,this.picKey=e},handleClickImg(){this.getPicCode()},async getCode(){this.vaildFn()&&(this.timeId||this.second!==this.totalSecond||(await L(this.picCode,this.picKey,this.mobile),this.$toast("短信发送成功"),this.timeId=setInterval((()=>{this.second--,this.second<1&&(clearInterval(this.timeId),this.second=this.totalSecond)}),1e3)))},vaildFn(){return/^1[3-9]\d{9}$/.test(this.mobile)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入正确图形验证码"),!1):(this.$toast("请输入正确手机号"),!1)},async login(){if(!this.vaildFn())return;if(!/^\d{6}$/.test(this.msgCode))return;const t=await P(this.mobile,this.msgCode);this.$store.commit("user/setuserInfo",t.data);const e=this.$route.query.backUrl||"/";this.$router.replace(e),this.$toast("登录成功")}}},T=N,E=(0,c.A)(T,w,x,!1,null,"93def8f6",null),$=E.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t._l(t.list,(function(t){return e("OrderListItem",{key:t.order_id,attrs:{item:t}})}))],2)},q=[],K=function(){var t=this,e=t._self._c;return t.item.order_id?e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.item.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s(t.item.state_text))])])]),e("div",{staticClass:"list"},t._l(t.item.goods,(function(s,a){return e("div",{key:a,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:s.goods_image,alt:""}})]),e("div",{staticClass:"goods-content text-ellipsis-2"},[t._v(" "+t._s(s.goods_name)+" ")]),e("div",{staticClass:"goods-trade"},[e("p",[t._v("¥ "+t._s(s.total_pay_price))]),e("p",[t._v("x "+t._s(s.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.item.total_num)+" 件商品，总金额 ¥"+t._s(t.item.total_price)+" ")]),e("div",{staticClass:"actions"},[10===t.item.order_status?e("div",[10===t.item.pay_status?e("span",[t._v("立刻付款")]):10===t.item.delivery_status?e("span",[t._v("申请取消")]):20===t.item.delivery_status||30===t.item.delivery_status?e("span",[t._v("确认收货")]):t._e()]):t._e(),30===t.item.order_status?e("div",[e("span",[t._v("评价")])]):t._e()])]):t._e()},j=[],F={props:{item:{type:Object,default:()=>({})}}},B=F,U=(0,c.A)(B,K,j,!1,null,"b835b5d2",null),D=U.exports,J={name:"OrderPage",components:{OrderListItem:D},data(){return{active:this.$route.query.dataType||"all",page:1,list:[]}},methods:{async getOrderList(){const{data:{list:t}}=await C(this.active,this.page);t.data.forEach((t=>{t.total_num=0,t.goods.forEach((e=>{t.total_num+=e.total_num}))})),this.list=t.data}},watch:{active:{immediate:!0,handler(){this.getOrderList()}}}},R=J,M=(0,c.A)(R,O,q,!1,null,"6d8ab072",null),z=M.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",clearable:""},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:function(e){return t.goSearch(t.search)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.history.length>0?e("div",{staticClass:"search-history"},[e("div",{staticClass:"title"},[e("span",[t._v("最近搜索")]),e("van-icon",{staticStyle:{cursor:"pointer"},attrs:{name:"delete-o",size:"16"},on:{click:t.clearHistory}})],1),e("div",{staticClass:"list"},t._l(t.history,(function(s){return e("div",{key:s,staticClass:"list-item",on:{click:function(e){return t.goSearch(s)}}},[t._v(t._s(s))])})),0)]):t._e()],1)},Z=[],G=(s(4114),s(2272)),H={name:"SearchIndex",data(){return{history:(0,G.JK)(),search:""}},methods:{goSearch(t){this.history.includes(t)&&(this.history=this.history.filter((e=>e!==t))),this.history.unshift(t),(0,G.Dh)(this.history),this.$router.push(`/searchlist?search=${t}`)},clearHistory(){this.history=[],(0,G.Dh)([])}}},Y=H,W=(0,c.A)(Y,V,Z,!1,null,"59bde7d5",null),Q=W.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(e){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[e("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),e("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return e("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},tt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sort-btns"},[e("div",{staticClass:"sort-item"},[t._v("综合")]),e("div",{staticClass:"sort-item"},[t._v("销量")]),e("div",{staticClass:"sort-item"},[t._v("价格 ")])])}];const et=t=>{const{categoryId:e,goodsName:s,page:a}=t;return h.A.get("/goods/list",{params:{categoryId:e,goodsName:s,page:a}})},st=t=>h.A.get("/goods/detail",{params:{goodsId:t}}),at=(t,e)=>h.A.get("/comment/listRows",{params:{goodsId:t,limit:e}});var it=s(2426),ot={name:"SearchIndex",data(){return{page:1,proList:[]}},components:{GoodsItem:it.A},computed:{querySearch(){return this.$route.query.search}},async created(){const{data:{list:t}}=await et({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}},nt=ot,rt=(0,c.A)(nt,X,tt,!1,null,"34b39094",null),ct=rt.exports,dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prodetail"},[e("van-nav-bar",{attrs:{fixed:"",title:"商品详情页","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[e("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+" / "+t._s(t.images.length))])]},proxy:!0}])},t._l(t.images,(function(t,s){return e("van-swipe-item",{key:s},[e("img",{attrs:{src:t.external_url}})])})),1),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.detail.goods_price_min))]),e("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.detail.line_price_min))])]),e("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.detail.goods_sales)+"件")])]),e("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.detail.goods_name)+" ")]),e("div",{staticClass:"service"},[e("div",{staticClass:"left-words"},[e("span",[e("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),e("span",[e("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),e("div",{staticClass:"right-icon"},[e("van-icon",{attrs:{name:"arrow"}})],1)])]),e("div",{staticClass:"comment"},[e("div",{staticClass:"comment-title"},[e("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(t.totalcomment)+"条)")]),e("div",{staticClass:"right"},[t._v("查看更多 "),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("div",{staticClass:"comment-list"},t._l(t.comment,(function(s){return e("div",{key:s.comment_id,staticClass:"comment-item"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:s.user.avatar_url||t.defaultImg,alt:""}}),e("div",{staticClass:"name"},[t._v(t._s(s.user.nick_name))]),e("van-rate",{attrs:{size:16,value:s.score/10,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),e("div",{staticClass:"content"},[t._v(" "+t._s(s.content)+" ")]),e("div",{staticClass:"time"},[t._v(" "+t._s(s.create_time)+" ")])])})),0)]),e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.detail.content)}}),e("div",{staticClass:"footer"},[e("div",{staticClass:"icon-home",on:{click:function(e){return t.$router.push("/")}}},[e("van-icon",{attrs:{name:"wap-home-o"}}),e("span",[t._v("首页")])],1),e("div",{staticClass:"icon-cart",on:{click:function(e){return t.$router.push("/cart")}}},[t.cartTotal>0?e("span",{staticClass:"num"},[t._v(t._s(t.cartTotal))]):t._e(),e("van-icon",{attrs:{name:"shopping-cart-o"}}),e("span",[t._v("购物车")])],1),e("div",{staticClass:"btn-add",on:{click:t.addCart}},[t._v("加入购物车")]),e("div",{staticClass:"btn-buy",on:{click:t.buyNow}},[t._v("立刻购买")])]),e("van-action-sheet",{attrs:{title:"cart"===t.mode?"加入购物车":"立刻购买"},model:{value:t.showPannel,callback:function(e){t.showPannel=e},expression:"showPannel"}},[e("div",{staticClass:"product"},[e("div",{staticClass:"product-title"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.detail.goods_image,alt:""}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"price"},[e("span",[t._v("¥")]),e("span",{staticClass:"nowprice"},[t._v(t._s(t.detail.goods_price_min))])]),e("div",{staticClass:"count"},[e("span",[t._v("库存")]),e("span",[t._v(t._s(t.detail.stock_total))])])])]),e("div",{staticClass:"num-box"},[e("span",[t._v("数量")]),e("CountBox",{model:{value:t.addCount,callback:function(e){t.addCount=e},expression:"addCount"}})],1),t.detail.stock_total>0?e("div",{staticClass:"showbtn"},["cart"===t.mode?e("div",{staticClass:"btn",on:{click:t.addcart}},[t._v("加入购物车")]):e("div",{staticClass:"btn now",on:{click:t.goBuyNow}},[t._v("立刻购买")])]):e("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1)},lt=[],ut=s(7767),mt=s(8500),pt=s(9652),ht={name:"ProDetail",mixins:[y],components:{CountBox:mt.A},data(){return{images:["https://img01.yzcdn.cn/vant/apple-1.jpg","https://img01.yzcdn.cn/vant/apple-2.jpg"],current:0,detail:{},comment:{},totalcomment:0,defaultImg:ut,showPannel:!1,mode:"",addCount:1,cartTotal:0}},computed:{goodsId(){return this.$route.params.id}},methods:{onChange(t){this.current=t},async getDetail(){const{data:{detail:t}}=await st(this.goodsId);this.detail=t,this.images=t.goods_images},async getComment(){const{data:{list:t,total:e}}=await at(this.goodsId,3);this.comment=t,this.totalcomment=e},addCart(){this.mode="cart",this.showPannel=!0},buyNow(){this.mode="buyNow",this.showPannel=!0},async addcart(){if(this.loginConfirm())return;const{data:t}=await(0,pt.U4)(this.goodsId,this.addCount,this.detail.skuList[0].goods_sku_id);this.cartTotal=t.cartTotal,this.$toast("加入购物车成功"),this.showPannel=!1},goBuyNow(){this.loginConfirm()||this.$router.push({path:"/pay",query:{mode:"buyNow",goodsId:this.goodsId,goodsSkuId:this.detail.skuList[0].goods_sku_id,goodsNum:this.addCount}})}},created(){this.getDetail(),this.getComment()}},vt=ht,gt=(0,c.A)(vt,dt,lt,!1,null,"57fc66b6",null),ft=gt.exports,_t=s(8246);const Ct=()=>s.e(877).then(s.bind(s,8877)),yt=()=>s.e(862).then(s.bind(s,862)),At=()=>s.e(24).then(s.bind(s,5024)),bt=()=>s.e(378).then(s.bind(s,7378)),kt=()=>s.e(781).then(s.bind(s,9781));a.Ay.use(u.Ay);const It=new u.Ay({routes:[{path:"/login",component:$},{path:"/",component:Ct,redirect:"/home",children:[{path:"/home",component:bt},{path:"/category",component:kt},{path:"/cart",component:At},{path:"/user",component:yt}]},{path:"/pay",component:I},{path:"/search",component:Q},{path:"/searchlist",component:ct},{path:"/prodetail/:id",component:ft},{path:"/myorder",component:z}]}),wt=["/pay","/myorder"];It.beforeEach(((t,e,s)=>{if(!wt.includes(t.path))return void s();const a=_t.A.getters.token;a?s():setInterval((()=>{s("/login")}),1e3)}));var xt=It,St=(s(2512),s(6852)),Lt=(s(440),s(162)),Pt=(s(4368),s(6885)),Nt=(s(2636),s(6579)),Tt=(s(9867),s(4648)),Et=(s(3212),s(6874)),$t=(s(9125),s(2665)),Ot=(s(9851),s(1431)),qt=(s(7057),s(6749)),Kt=(s(79),s(7235)),jt=(s(4537),s(8541)),Ft=(s(9704),s(1981)),Bt=(s(4510),s(1864)),Ut=(s(3425),s(6141)),Dt=(s(7231),s(9363)),Jt=(s(2190),s(4365)),Rt=(s(9831),s(5324)),Mt=(s(6117),s(7555));a.Ay.use(Mt.A),a.Ay.use(Rt.A),a.Ay.use(Jt.A),a.Ay.use(Dt.A),a.Ay.use(Ut.A),a.Ay.use(Bt.A),a.Ay.use(Ft.A),a.Ay.use(jt.A),a.Ay.use(Kt.A),a.Ay.use(qt.A),a.Ay.use(Ot.A),a.Ay.use($t.A),a.Ay.use(Et.A),a.Ay.use(Tt.A),a.Ay.use(Nt.A),a.Ay.use(Pt.A),a.Ay.use(Lt.A),a.Ay.use(St.A),a.Ay.config.productionTip=!1,new a.Ay({router:xt,store:_t.A,render:t=>t(l)}).$mount("#app")},8246:function(t,e,s){s.d(e,{A:function(){return l}});var a=s(6848),i=s(3518),o=s(2272),n={namespaced:!0,state(){return{userInfo:(0,o.Vp)()}},getters:{},mutations:{setuserInfo(t,e){t.userInfo=e,(0,o.x1)(e)}},actions:{logout(t){t.commit("setuserInfo",{}),t.commit("cart/setCartList",[],{root:!0})}}},r=(s(9704),s(1981)),c=s(9652),d={namespaced:!0,state(){return{cartList:[]}},mutations:{setCartlist(t,e){t.cartList=e},toggleChecked(t,e){const s=t.cartList.find((t=>t.goods_id===e));s.isChecked=!s.isChecked},toggleAllChecked(t,e){t.cartList.forEach((t=>{t.isChecked=e}))},changeCount(t,{goodsId:e,goodsNum:s}){const a=t.cartList.find((t=>t.goods_id===e));a.goods_num=s}},getters:{cartTotal(t){return t.cartList.reduce(((t,e)=>t+e.goods_num),0)},selCartList(t){return t.cartList.filter((t=>t.isChecked))},selCount(t,e){return e.selCartList.reduce(((t,e)=>t+e.goods_num),0)},selPrice(t,e){return e.selCartList.reduce(((t,e)=>t+e.goods_num*e.goods.goods_price_min),0).toFixed(2)},isAllChecked(t){return t.cartList.every((t=>t.isChecked))}},actions:{async getCartAction(t){const{data:e}=await(0,c.fd)();e.list.forEach((t=>{t.isChecked=!0})),t.commit("setCartlist",e.list)},async changeCountAction(t,e){const{goodsNum:s,goodsId:a,goodsSkuId:i}=e;t.commit("changeCount",{goodsId:a,goodsNum:s}),await(0,c.YR)(a,s,i)},async delAction(t){const e=t.getters.selCartList,s=e.map((t=>t.id));await(0,c.gq)(s),(0,r.A)("删除成功"),t.dispatch("getCartAction")}}};a.Ay.use(i.Ay);var l=new i.Ay.Store({state:{},getters:{token(t){return t.user.userInfo.token}},mutations:{},actions:{},modules:{user:n,cart:d}})},5720:function(t,e,s){s(9704);var a=s(1981),i=s(9357),o=s(8246);const n=i.A.create({baseURL:"http://cba.itlike.com/public/index.php?s=/api/",timeout:5e3});n.interceptors.request.use((function(t){a.A.loading({message:"加载中",forbidClick:!0});const e=o.A.getters.token;return e&&(t.headers["Access-Token"]=e,t.headers.platform="H5"),t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){const e=t.data;return 200!==e.status?((0,a.A)(e.message),Promise.reject(e.message)):(a.A.clear(),e)}),(function(t){return Promise.reject(t)})),e.A=n},2272:function(t,e,s){s.d(e,{Dh:function(){return c},JK:function(){return r},Vp:function(){return o},x1:function(){return n}});const a="hm_shopping_info",i="search_history",o=()=>{const t={taken:"",userId:""},e=localStorage.getItem(a);return e?JSON.parse(e):t},n=t=>{localStorage.setItem(a,JSON.stringify(t))},r=()=>{const t=localStorage.getItem(i);return t?JSON.parse(t):[]},c=t=>{localStorage.setItem(i,JSON.stringify(t))}},7767:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEXp6en////9/f3o6Ojw8PDj4+Pl5eXh4eHs7Oz7+/v09PTy8vL4+Pj29vY+GdZKAAADDElEQVRYw+3Wv0sbYRjA8ZNwp+Li89YhUQO+b6F0PDTx6NBBtHXpcBDPRkvhakiC1CGghqIIyRCdOqQlHdouUoqlm1Co0KUZhK4tFPvn9MnF5n6+P4R2KT6EhJe8n3y5ewOJduXJXZNr8l+Tecd5uFu6CinbS18+LR06pjJxxl4ATuZD2anMaXMKxHkOl/P6LFVxCnJi3YXAvP34zZWR1A6E54aUVI8j5J4mIcZBRExLr8WKRk5cGdmHyFyYEqI3o2SqJiH5NkRHl5B9iE3HFBJjI07StpDoC3Ey7QrJfBviYwiJCwmzLCQ7SeRCSNaTyEtTQFKbSSTtishsIrEFxBi6Jn+FFAWk+iSR1PnEyHWTSObM5pJSG5KnxSWPgDMdk0ce88gMl6zzyE0uWRnsoWFyziUubiWMAiMM8AmdtwT4zL38fJcxRnAXw6EI+0sGBpfoTUJIbxfF6ZnL5aTNP/0DklSht1w+KVFK4xVY1vjkqEkSKtltAdH2IF6Bjisi1vd4BfSGiByukWiFjtvi35dKO1qBI01M8AZEKtmahKQ2wxVK07aEaCuRCj3XZKTSDl8L6FIyPESCFZisSYm2F76Wjisn5TZlgYrekJPWLPErdKKm8kfxGfgVODFVyHATBpXJbU2FpDYGdwzGi2rkzqBC064a2fIrSP5VZTZQsZVIa8i/Y1M1JTJ86p9LZrWhdpSB01c6SqtJ/ApM1RtSYmDErzB4b0uJc0qYXyEsUzUlpDoKNFgh9LZjCkn1KTAWqhD4umvyScrJUULDFTTvsMMhxu4YimiFUfhVLSSTvPsAUMQqhMKbw0ICGckXf3giVsEHZO6vxsiIVewC7kqsUAZksR4lerENjPAquCCLhTAxtrv4Lr+CT6Rlh4hzCpSKKozQrGUGiDUKjIkrjMBEvTEg+FXsfyJWiLfRm96LV+unGPy0B6R83NuI73qAeKq/9h4epjgZ6w/Rt8Db2EeBCq4DFdQztUuy2mWKA0d9oq8RVULTNY+UMaKcyfdIao+oE/rKRqIvsCtMtpT7DVEPKD7Ga13IAAAAAElFTkSuQmCC"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,o){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],i=t[l][1],o=t[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<n&&(n=o));if(r){t.splice(l--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{24:"2e1e7654",378:"2aaf701a",781:"9547e4e2",862:"e1484473",877:"fa9ea0c9"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{24:"edee684a",781:"3e18c60d",862:"6d9ae7df"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="zhihui-shoping:";s.l=function(a,i,o,n){if(t[a])t[a].push(i);else{var r,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+o),r.src=a),t[a]=[i];var m=function(e,s){r.onerror=r.onload=null,clearTimeout(p);var i=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,i,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",s.nc&&(n.nonce=s.nc);var r=function(s){if(n.onerror=n.onload=null,"load"===s.type)i();else{var a=s&&s.type,r=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+r+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=r,n.parentNode&&n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=r,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){i=n[a],o=i.getAttribute("data-href");if(o===t||o===e)return i}},a=function(a){return new Promise((function(i,o){var n=s.miniCssF(a),r=s.p+n;if(e(n,r))return i();t(a,r,null,i,o)}))},i={524:0};s.f.miniCss=function(t,e){var s={24:1,781:1,862:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={524:0};s.f.j=function(e,a){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(s,a){i=t[e]=[s,a]}));a.push(i[2]=o);var n=s.p+s.u(e),r=new Error,c=function(a){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",r.name="ChunkLoadError",r.type=o,r.request=n,i[1](r)}};s.l(n,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,n=a[0],r=a[1],c=a[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(c)var l=c(s)}for(e&&e(a);d<n.length;d++)o=n[d],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},a=self["webpackChunkzhihui_shoping"]=self["webpackChunkzhihui_shoping"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(9546)}));a=s.O(a)})();
//# sourceMappingURL=app.6a6995e5.js.map
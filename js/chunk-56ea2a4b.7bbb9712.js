(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56ea2a4b"],{"4d13":function(t,e,i){var a=i("f4ef");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("499e").default;n("38c574aa",a,!0,{sourceMap:!1,shadowMode:!1})},"6bf6":function(t,e,i){t.exports=i.p+"img/coin.7fe1d7df.png"},8297:function(t,e,i){t.exports=i.p+"img/border.6a04da8b.png"},da64:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"homePage"}},[1==t.$store.state.inviteStatus?a("transition",{attrs:{name:"modalfade"}},[a("div",{staticClass:"pending_view"},[a("img",{staticClass:"topborder",attrs:{src:i("8297"),alt:""}}),a("img",{staticClass:"logo",attrs:{src:i("6bf6"),alt:""}}),a("div",{staticClass:"pending_loading"},[a("van-loading",{attrs:{type:"spinner",size:"24px",color:"#ffffff",vertical:""}})],1)])]):t._e(),2==t.$store.state.inviteStatus?a("transition",{attrs:{name:"modalfade"}},[a("div",{staticClass:"invite_view"},[a("div",{staticClass:"invite_input"},[a("p",[t._v("填写邀请地址"),a("span",[t._v("*")])]),a("img",{staticClass:"coin",attrs:{src:i("6bf6"),alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",name:"",id:""},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.inviting,expression:"!inviting"}],staticClass:"invite_btn",on:{click:t.bindInviteAddr}},[t._v("绑定")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.inviting,expression:"inviting"}],staticClass:"invite_btn"},[a("van-loading",{attrs:{type:"spinner",size:"24px",color:"#ffffff"}})],1)])]):t._e(),3==t.$store.state.inviteStatus?a("transition",{attrs:{name:"modalfade"}},[a("div",{staticClass:"start_view"},[a("img",{staticClass:"topborder",attrs:{src:i("8297"),alt:""}}),a("p",{staticClass:"start_welcome"},[t._v("欢迎来到")]),a("p",{staticClass:"start_welcome"},[t._v("火星元宇宙，开启Web3")]),a("p",{staticClass:"start_welcome"},[t._v("科幻之旅...")]),a("p",{staticClass:"start_intro"},[t._v("公平、开放、创新、共享")]),a("div",{staticClass:"start_btn",on:{click:t.turnPage}},[t._v("开启火星计划")])])]):t._e()],1)},n=[],s={name:"index",data(){return{value:"",inviting:!1}},watch:{"$store.state.inviteStatus"(){if(2==this.$store.state.inviteStatus){const t=this.getInviteAddr();this.value=t||""}}},mounted(){},methods:{goPage(t){1!=t?this.$router.push("/ido"):this.$router.push("/game")},getInviteAddr(){var t,e;const i=(null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.address)||"";return i},async bindInviteAddr(){try{const t=this.$store.state.userAddress,e=this.$store.state.inviteContract;if(this.value){const i=await e.methods.registed(this.value).call();if(i){this.inviting=!0;const i=await e.methods.regist(this.value).send({from:t});i.status&&(this.inviting=!1,this.$store.commit("setinviteStatus",3),this.$toast(this.$t("lang.success")))}else this.$toast(this.$t("lang.dizhiwuxiao"))}}catch(t){this.inviting=!1,this.$toast(this.$t("lang.bangdingshibai"))}},turnPage(){this.$router.push("/game/gold")}}},o=s,r=(i("de70"),i("2877")),d=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=d.exports},de70:function(t,e,i){"use strict";i("4d13")},f4ef:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"#homePage{width:100%;min-height:100vh}#homePage .pending_view{width:100%;height:100vh;position:relative;display:flex;align-items:center;justify-content:center}#homePage .pending_view .topborder{position:absolute;left:0;top:0;width:100%}#homePage .pending_view .logo{width:100px;height:100px;z-index:1}#homePage .pending_view .pending_loading{position:absolute;left:50%;bottom:25%;width:60px;height:60px;margin-left:-30px}#homePage .invite_view,#homePage .pending_view .pending_loading{display:flex;flex-direction:column;align-items:center;justify-content:center}#homePage .invite_view{width:100%;height:100vh;padding:0 16px}#homePage .invite_view .invite_input{width:100%;height:56px;border-radius:16px;border:2px solid #fff;margin-bottom:52px;position:relative;display:flex;align-items:center;padding:0 10px}#homePage .invite_view .invite_input p{position:absolute;left:16px;top:-8px;width:auto;height:16px;line-height:16px;color:#828282;font-size:12px;padding:0 8px;background:#1b1f21}#homePage .invite_view .invite_input p span{color:#ff2f4f;padding-left:5px}#homePage .invite_view .invite_input img{width:26px;height:26px;margin-right:10px}#homePage .invite_view .invite_input input{flex:1;height:26px;background:none;outline:none;border:none;font-size:16px;color:#fff}#homePage .invite_view .invite_btn{width:189px;height:44px;background:linear-gradient(103deg,#29373e 1%,#032723 98%);box-shadow:0 4px 4px 0 rgba(17,25,53,.2);border-radius:16px;border:1px solid #fff;font-size:16px;font-weight:700;color:#fff;line-height:44px;letter-spacing:2px;text-align:center}#homePage .invite_view .invite_btn:active{opacity:.8}#homePage .start_view{width:100%;height:100vh;overflow-y:auto}#homePage .start_view .topborder{width:100%;height:auto}#homePage .start_view .start_welcome{padding-left:20px;font-size:26px;font-weight:500;color:#fff;line-height:36px}#homePage .start_view .start_intro{padding-left:22px;margin-top:5px;font-size:14px;font-weight:500;color:#999;line-height:22px}#homePage .start_view .start_btn{margin-top:27px;margin-left:22px;width:148px;height:44px;background:linear-gradient(103deg,#29373e 1%,#032723 98%);box-shadow:0 4px 4px 0 rgba(17,25,53,.2);border-radius:16px;border:1px solid #dfdfdf;font-size:16px;font-weight:700;color:#fff;line-height:44px;letter-spacing:2px;text-align:center}#homePage .start_view .start_btn:active{opacity:.8}#homePage .inviteLoading{position:fixed;top:0;left:0;width:100%;height:100%;background:none;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.3)}",""]),t.exports=e}}]);
(this.webpackJsonpsplooshkaboom=this.webpackJsonpsplooshkaboom||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},23:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(14),s=a.n(o),l=(a(21),a(1)),c=a.n(l),u=a(11),d=a(15),h=a(12),f=a(3),p=a(2),v=a(7),b=a(8),m=a(10),y=a(9),g=a(4),w=(a(23),null);var k=0;function x(e,t){var a=t(1*e.length);return(null!==w&&w.buffer===n.memory.buffer||(w=new Uint8Array(n.memory.buffer)),w).set(e,a/1),k=e.length,a}var S=null;function E(e,t){var a=t(4*e.length);return(null!==S&&S.buffer===n.memory.buffer||(S=new Uint32Array(n.memory.buffer)),S).set(e,a/4),k=e.length,a}var _=null;function C(){return null!==_&&_.buffer===n.memory.buffer||(_=new Float64Array(n.memory.buffer)),_}function M(e,t){var a=t(8*e.length);return C().set(e,a/8),k=e.length,a}var O=null;function B(){return null!==O&&O.buffer===n.memory.buffer||(O=new Int32Array(n.memory.buffer)),O}function T(e,t){return C().subarray(e/8,e/8+t)}function R(e,t,a,r,i){var o=x(e,n.__wbindgen_malloc),s=k,l=x(t,n.__wbindgen_malloc),c=k,u=E(r,n.__wbindgen_malloc),d=k,h=M(i,n.__wbindgen_malloc),f=k;n.calculate_probabilities_with_board_constraints(8,o,s,l,c,a,u,d,h,f);var p,v=B()[2],b=B()[3];return 0!==v&&(p=T(v,b).slice(),n.__wbindgen_free(v,8*b)),p}function P(e,t,a,r,i,o){var s=x(e,n.__wbindgen_malloc),l=k,c=x(t,n.__wbindgen_malloc),u=k,d=E(r,n.__wbindgen_malloc),h=k,f=E(i,n.__wbindgen_malloc),p=k,v=M(o,n.__wbindgen_malloc),b=k;n.calculate_probabilities_from_game_history(8,s,l,c,u,a,d,h,f,p,v,b);var m,y=B()[2],g=B()[3];return 0!==y&&(m=T(y,g).slice(),n.__wbindgen_free(y,8*g)),m}function F(e,t,a,r){var i=x(e,n.__wbindgen_malloc),o=k,s=E(t,n.__wbindgen_malloc),l=k,c=E(a,n.__wbindgen_malloc),u=k,d=M(r,n.__wbindgen_malloc),h=k;n.disambiguate_final_board(8,i,o,s,l,c,u,d,h);var f=B()[2],p=B()[3];return 0===f?void 0:p>>>0}function j(e,t){return A.apply(this,arguments)}function A(){return(A=Object(p.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("function"===typeof Response&&t instanceof Response)){e.next=23;break}if("function"!==typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(t,a);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"==t.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,t.arrayBuffer();case 17:return n=e.sent,e.next=20,WebAssembly.instantiate(n,a);case 20:return e.abrupt("return",e.sent);case 23:return e.next=25,WebAssembly.instantiate(t,a);case 25:if(!((r=e.sent)instanceof WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:r,module:t});case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function I(e){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(c.a.mark((function e(t){var a,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},("string"===typeof t||"function"===typeof Request&&t instanceof Request||"function"===typeof URL&&t instanceof URL)&&(t=fetch(t)),e.t0=j,e.next=5,t;case 5:return e.t1=e.sent,e.t2=a,e.next=9,(0,e.t0)(e.t1,e.t2);case 9:return r=e.sent,i=r.instance,o=r.module,n=i.exports,I.__wbindgen_wasm_module=o,e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=I,G=a(24)(["#004","#070","#090","#0b0","#0d0","#0f0","#6f6"]),L=function(e){return Object(g.a)(Array(e).keys())},H=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=null!==this.props.best&&this.props.best[0]===this.props.x&&this.props.best[1]===this.props.y,t=this.props.backgroundColor;return void 0===t&&(t=null===this.props.text?G(this.props.prob):"HIT"===this.props.text?"#a2a":"#44a"),i.a.createElement("div",{key:this.props.x+","+this.props.y,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"70px",height:"70px",border:this.props.valid?"1px solid grey":"1px solid red",outline:e?"4px solid yellow":"",zIndex:e?1:0,fontFamily:"monospace",userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",msUserSelect:"none",color:"white",fontSize:this.props.fontSize,opacity:this.props.opacity,backgroundColor:t},onClick:this.props.onClick},null===this.props.text?(100*this.props.prob).toFixed(this.props.precision)+"%":this.props.text)}}]),a}(i.a.Component),N=z("/web-sploosh-kaboom/sploosh_wasm_bg.wasm");window.JUST_ONCE=!1;var D=null;function U(){return V.apply(this,arguments)}function V(){return(V=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==D){e.next=2;break}return e.abrupt("return");case 2:if(!D.readyToProcess()||!D.state.doVideoProcessing){e.next=5;break}return e.next=5,D.readBoardState();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return Y.apply(this,arguments)}function Y(){return(Y=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:setTimeout(W,25);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)for(var n=0,r=[!1,!0];n<r.length;n++){var i=r[n];e.push({x:a,y:t,direction:i})}var o=[],s={};function l(e,t,a){for(var n=0;n<a;n++){var r=t.x,i=t.y;if(t.direction?r+=n:i+=n,r>=8||i>=8)return;e[r+8*i]=a}}for(var c=new Array(64).fill(0),u=0,d=e;u<d.length;u++){var h,p=d[u],v=Object(f.a)(e);try{for(v.s();!(h=v.n()).done;){var b,m=h.value,y=Object(f.a)(e);try{for(y.s();!(b=y.n()).done;){var g=b.value;c.fill(0),l(c,p,2),l(c,m,3),l(c,g,4);var w,k=0,x=Object(f.a)(c);try{for(x.s();!(w=x.n()).done;){var S=w.value;k+=S}}catch(O){x.e(O)}finally{x.f()}29===k&&o.push(Array.from(c))}}catch(O){y.e(O)}finally{y.f()}}}catch(O){v.e(O)}finally{v.f()}}for(var E=0,_=0,C=o;_<C.length;_++){var M=C[_];s[M.map((function(e){return 0===e?".":e})).join("")]=E,E++}return s}()}function J(e){for(var t=Math.round(8*Math.random()),a=Math.round(8*Math.random()),n=Math.random()<.5,r=[[t,a]],i=0;i<e-1;i++){var o=r[r.length-1],s=n?[o[0]+1,o[1]]:[o[0],o[1]+1];r.push(s)}return r}window.JUST_ONCE||W();var K=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={grid:e.makeEmptyGrid(),selectedCell:null},e}return Object(b.a)(a,[{key:"makeEmptyGrid",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=".";return e}},{key:"clearBoard",value:function(){this.setState({grid:this.makeEmptyGrid(),selectedCell:null})}},{key:"onClick",value:function(e,t){if(null!==this.state.selectedCell){for(var a=Object(h.a)({},this.state.grid),n=!1,r=0,i=[2,3,4];r<i.length;r++)for(var o=i[r],s=0,l=[[1,0],[0,1],[-1,0],[0,-1]];s<l.length;s++){var c=Object(d.a)(l[s],2),u=c[0],f=c[1];if(this.state.selectedCell[0]===e+u*(o-1)&&this.state.selectedCell[1]===t+f*(o-1)){for(var p=0;p<8;p++)for(var v=0;v<8;v++)a[[v,p]]===""+o&&(a[[v,p]]=".");for(var b=0;b<o;b++)a[[e+b*u,t+b*f]]=""+o;n=!0}}for(var m={2:0,3:0,4:0,".":0},y=0;y<8;y++)for(var g=0;g<8;g++)m[a[[g,y]]]++;for(var w=0,k=[2,3,4];w<k.length;w++){var x=k[w];if(m[x]!==x)for(var S=0;S<8;S++)for(var E=0;E<8;E++)a[[E,S]]===""+x&&(a[[E,S]]=".")}n&&this.setState({grid:a}),this.setState({selectedCell:null})}else this.setState({selectedCell:[e,t]})}},{key:"getLayoutString",value:function(){for(var e="",t=0;t<8;t++)for(var a=0;a<8;a++)e+=this.state.grid[[a,t]];return e}},{key:"setStateFromLayoutString",value:function(e){for(var t=[],a=0;a<8;a++)for(var n=0;n<8;n++)t[[n,a]]=e[n+8*a];this.setState({grid:t})}},{key:"render",value:function(){var e=this,t=this.getLayoutString(),a=this.props.parent.boardIndices[t],n=function(t,a){return null!==e.state.selectedCell&&t===e.state.selectedCell[0]&&a===e.state.selectedCell[1]};return i.a.createElement("div",{style:{margin:"20px",display:"inline-block",color:"white"}},i.a.createElement("div",{style:{backgroundImage:'url("/web-sploosh-kaboom/board_background_square.png")',backgroundSize:"100% 100%",padding:"18px"}},L(8).map((function(t){return i.a.createElement("div",{key:t,style:{display:"flex"}},L(8).map((function(a){return i.a.createElement(H,{key:a+","+t,x:a,y:t,onClick:function(){return e.onClick(a,t)},text:e.state.grid[[a,t]],valid:!0,best:e.state.selectedCell,fontSize:"200%",opacity:n(a,t)||"."!==e.state.grid[[a,t]]?.6:.2,backgroundColor:"."===e.state.grid[[a,t]]?void 0:"green"})})))}))),i.a.createElement("br",null),"Squid Layout: ",a)}}]),a}(i.a.Component),Z=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).videoRef=i.a.createRef(),e.canvasRef=i.a.createRef(),e.outputCanvasRef=i.a.createRef(),e.hiddenAreaRef=i.a.createRef(),e.layoutDrawingBoardRefs=[i.a.createRef(),i.a.createRef(),i.a.createRef()],e.state=e.makeEmptyState(),e.bannerCache=new Map,window.RECOMP=function(){e.bannerCache=new Map,e.getBoardRegistrationAndScale()},D=Object(u.a)(e),e.previouslyReadStates=[null,null,null],e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.makeReferenceImageCanvases(),this.doComputation(this.state.grid,this.state.squidsGotten)}},{key:"makeReferenceImageCanvases",value:function(){var e=this,t=this.hiddenAreaRef.current;this.referenceCanvases={};for(var a=function(){var a=r[n],i=document.createElement("canvas");i.setAttribute("id","canvas_"+a),t.appendChild(i);var o=document.createElement("img");o.src="/web-sploosh-kaboom/images/"+a+".png",o.onload=function(){i.width=this.width,i.height=this.height,i.getContext("2d").drawImage(o,0,0)},e.referenceCanvases[a]=i},n=0,r=["hit","miss","killed_squid","remaining_squid","top_banner_new","bottom_banner_new"];n<r.length;n++)a()}},{key:"makeEmptyGrid",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=null;return e}},{key:"makeEmptyState",value:function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++)e[[a,t]]=0;return{mode:"calculator",squidLayout:function(){for(var e={},t={},a=0,n=[2,3,4];a<n.length;a++)for(var r=n[a];;){var i,o=J(r),s=!0,l=Object(f.a)(o);try{for(l.s();!(i=l.n()).done;){var c=i.value;(c[0]>7||c[1]>7||!0===t[c])&&(s=!1)}}catch(h){l.e(h)}finally{l.f()}if(s){e["squid"+r]=o;var u,d=Object(f.a)(o);try{for(d.s();!(u=d.n()).done;){t[u.value]=!0}}catch(h){d.e(h)}finally{d.f()}break}}return e}(),grid:this.makeEmptyGrid(),squidsGotten:"unknown",probs:e,best:[3,3],valid:!0,observationProb:1,screenRecordingActive:!1,doVideoProcessing:!1,lastComputationTime:-1,lastCVTime:-1,turboBlurboMode:!1,potentialMatches:[],firstBoardStepsThousands:500,firstBoardStepsThousandsStdDev:500,nextBoardStepsThousands:7,nextBoardStepsThousandsStdDev:3}}},{key:"startScreenRecording",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,a,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.screenRecordingActive){e.next=3;break}return alert("Already screen capturing!"),e.abrupt("return");case 3:return t={video:{cursor:"always"},audio:!1},e.next=6,navigator.mediaDevices.getDisplayMedia(t);case 6:return a=e.sent,(n=this.videoRef.current).srcObject=a,n.play(),this.setState({screenRecordingActive:!0}),e.next=13,new Promise((function(e){return setTimeout(e,500)}));case 13:this.updateCapture(),r=this.canvasRef.current,i=this.outputCanvasRef.current,console.log(r,i,r.width,r.height),i.width=r.width,i.height=r.height,i.getContext("2d").drawImage(r,0,0);case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initializeTurboBlurboMode",value:function(e){var t=this;if(!1===this.state.turboBlurboMode){this.setState({turboBlurboMode:"initializing"}),this.boardIndices=X(),this.boardIndexToLayoutString=new Array(Object.keys(this.boardIndices).length);for(var a=0,r=Object.keys(this.boardIndices);a<r.length;a++){var i=r[a];this.boardIndexToLayoutString[this.boardIndices[i]]=i}var o=new XMLHttpRequest,s=e?"/board_table_25M.bin":"/board_table_5M.bin";o.open("GET","/web-sploosh-kaboom"+s,!0),o.responseType="arraybuffer",o.onload=function(e){t.boardTable=new Uint32Array(o.response),console.log("Board table length:",t.boardTable.length);var a,r=Object(f.a)(t.boardTable);try{for(r.s();!(a=r.n()).done;){var i=a.value;i>604583&&alert("BUG BUG BUG: Bad value in board table: "+i)}}catch(s){r.e(s)}finally{r.f()}!function(e){var t=E(e,n.__wbindgen_malloc),a=k;n.set_board_table(t,a)}(t.boardTable),t.setState({turboBlurboMode:!0,squidsGotten:"0"})},o.send()}}},{key:"toggleVideoProcessing",value:function(){if(this.state.screenRecordingActive)if(!1!==this.state.doVideoProcessing||this.readyToProcess()){if(this.setState({doVideoProcessing:!this.state.doVideoProcessing}),null!==this.previouslyReadStates[this.previouslyReadStates.length-1]){var e=this.previouslyReadStates[this.previouslyReadStates.length-1];this.setState(e),this.doComputation(e.grid,e.squidsGotten),this.previouslyReadStates[this.previouslyReadStates.length-1]=null}}else alert("You must first detect a board.")}},{key:"getBoardRegistrationAndScale",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.screenRecordingActive){e.next=2;break}return e.abrupt("return");case 2:this.updateCapture(),t=.375,a=.7,n=0;case 6:if(!(n<10)){e.next=15;break}return e.next=9,this.performGridSearch(t*(1-a),t*(1+2*a),0===n?20:1===n?10:4);case 9:this.boardFitParams=e.sent,t=this.boardFitParams.scale,a/=2;case 12:n++,e.next=6;break;case 15:return console.log("Best fit params:",this.boardFitParams),this.bannerCache.delete(t),this.testForTopBannerAtScale(t),this.testForBottomBanner(),console.log("Final fit params:",this.boardFitParams),e.next=22,new Promise((function(e){return setTimeout(e,100)}));case 22:this.setState({doVideoProcessing:!0});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"performGridSearch",value:function(){var e=Object(p.a)(c.a.mark((function e(t,a,n){var r,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={score:-1},i=0;case 2:if(!(i<n)){e.next=11;break}return o=t+i*(a-t)/(n-1),(s=this.testForTopBannerAtScale(o)).score>r.score&&(r=s),e.next=8,new Promise((function(e){return setTimeout(e,10)}));case 8:i++,e.next=2;break;case 11:return console.log("Grid search over:",t,"to",a,"got:",r),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"testForBottomBanner",value:function(){var e=window.cv.imread("cv_canvasRef"),t=window.cv.imread("canvas_bottom_banner_new"),a=Math.round(t.size().width*this.boardFitParams.scale),n=Math.round(t.size().height*this.boardFitParams.scale),r=new window.cv.Mat,i=new window.cv.Size(a,n);window.cv.resize(t,r,i,0,0,window.cv.INTER_AREA);var o=new window.cv.Mat,s=new window.cv.Mat,l=window.cv.TM_CCOEFF_NORMED;window.cv.matchTemplate(e,r,o,l,s);var c=window.cv.minMaxLoc(o,s).maxLoc,u=new window.cv.Scalar(255,0,0,255),d=new window.cv.Point(c.x+r.cols,c.y+r.rows);window.cv.rectangle(e,c,d,u,2,window.cv.LINE_8,0),window.cv.imshow("cv_outputCanvasRef",e),e.delete(),t.delete(),r.delete(),o.delete(),s.delete(),this.boardFitParams.bottomBannerOffset={x:c.x,y:c.y}}},{key:"getCellXY",value:function(e,t){var a=(this.boardFitParams.bottomBannerOffset.y-this.boardFitParams.topBannerOffset.y)/(828*this.boardFitParams.scale);return(a<.95||a>1.05)&&(a=1),{x:this.boardFitParams.topBannerOffset.x+this.boardFitParams.scale*(161.5+75.5*e),y:this.boardFitParams.topBannerOffset.y+this.boardFitParams.scale*a*(239+78.6*t)}}},{key:"getSquidIndicatorXY",value:function(e){var t=(this.boardFitParams.bottomBannerOffset.y-this.boardFitParams.topBannerOffset.y)/(828*this.boardFitParams.scale);return(t<.95||t>1.05)&&(t=1),{x:this.boardFitParams.topBannerOffset.x+948*this.boardFitParams.scale,y:this.boardFitParams.topBannerOffset.y+this.boardFitParams.scale*t*(185+133*e)}}},{key:"getBoardRect",value:function(){var e=(this.boardFitParams.bottomBannerOffset.y-this.boardFitParams.topBannerOffset.y)/(828*this.boardFitParams.scale);return(e<.95||e>1.05)&&(e=1),new window.cv.Rect(Math.round(this.boardFitParams.topBannerOffset.x),Math.round(this.boardFitParams.topBannerOffset.y),Math.round(1040*this.boardFitParams.scale),Math.round(this.boardFitParams.scale*e*940))}},{key:"testForTopBannerAtScale",value:function(e){if(this.bannerCache.has(e))return this.bannerCache.get(e);var t=window.cv.imread("cv_canvasRef"),a=window.cv.imread("canvas_top_banner_new"),n=Math.round(a.size().width*e),r=Math.round(a.size().height*e),i=new window.cv.Mat,o=new window.cv.Size(n,r);window.cv.resize(a,i,o,0,0,window.cv.INTER_AREA);var s=new window.cv.Mat,l=new window.cv.Mat,c=window.cv.TM_CCOEFF_NORMED;window.cv.matchTemplate(t,i,s,c,l);var u=window.cv.minMaxLoc(s,l),d=u.maxLoc,h=new window.cv.Scalar(255,0,0,255),f=new window.cv.Point(d.x+i.cols,d.y+i.rows);window.cv.rectangle(t,d,f,h,2,window.cv.LINE_8,0),window.cv.imshow("cv_outputCanvasRef",t),t.delete(),a.delete(),i.delete(),s.delete(),l.delete();var p=u.maxVal;return this.bannerCache.set(e,p),{score:p,scale:e,topBannerOffset:{x:d.x,y:d.y}}}},{key:"readyToProcess",value:function(){return this.state.screenRecordingActive&&void 0!==this.boardFitParams&&this.boardFitParams.hasOwnProperty("bottomBannerOffset")}},{key:"readBoardState",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,a,n,r,i,o,s,l,u,d,f,p,v,b,m,y,g,w,k,x,S,E,_,C,M,O,B,T,R,P,F,j,A,I,q,z,G,L,H,N,D,U,V,W,Y,X,J,K,Z,$,Q,ee,te,ae,ne,re,ie,oe,se,le;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le=function(e,t){if(null===e||null===t)return!1;for(var a=e.squidsGotten===t.squidsGotten,n=0;n<8;n++)for(var r=0;r<8;r++)e.grid[[r,n]]!==t.grid[[r,n]]&&(a=!1);return a},this.readyToProcess()){e.next=3;break}return e.abrupt("return");case 3:for(t={grid:{},squidsGotten:0},this.updateCapture(),a=performance.now(),n=window.cv.imread("cv_canvasRef"),r=new window.cv.Size(3,3),window.cv.GaussianBlur(n,n,r,0,0,window.cv.BORDER_DEFAULT),i=[n],o=function(e,t){var a=n.ucharPtr(Math.round(t),Math.round(e)),r={r:a[0],g:a[1],b:a[2]},i=Math.sqrt(r.r*r.r+r.g*r.g+r.b*r.b);return Object(h.a)({},r,{energy:i})},s=new window.cv.Scalar(80,80,80,255),l=new window.cv.Scalar(255,0,255,255),u=new window.cv.Scalar(100,255,0,255),d=new window.cv.Scalar(255,100,100,255),f=new window.cv.Scalar(50,255,100,255),p=null,v=-1,b=0;b<8;b++)for(m=0;m<8;m++)y=this.getCellXY(m,b),(g=o(y.x,y.y+15)).energy>v&&(v=g.energy,p={x:m,y:b});for(w=0;w<8;w++)for(k=0;k<8;k++)x=this.getCellXY(k,w),S=x.x,E=x.y,2,_=o(S,E),C=o(S-2,E-2),M=o(S+2,E-2),O=o(S-2,E+2),B=o(S+2,E+2),T=k===p.x&&w===p.y,R=T||k===p.x+1&&w===p.y,P=T||k===p.x-1&&w===p.y,F=T||k===p.x&&w===p.y+1,j=T||k===p.x&&w===p.y-1,A=F||R,I=F||P,q=j||R,z=j||P,G=s,L=T?240:220,H=(_.energy>=L)+(C.energy>=(A?240:220))+(M.energy>=(I?240:220))+(O.energy>=(q?240:220))+(B.energy>=(q?240:220)),N=T?1:1.02,D=(_.g>=_.b*N)+(C.g>=C.b*(A?N:1.05))+(M.g>=M.b*(I?N:1.05))+(O.g>=O.b*(q?N:1.05))+(B.g>=B.b*(z?N:1.05)),t.grid[[k,w]]=null,(H>=4&&D>=3||H>=3&&D>=4)&&(U=Math.max(_.r,C.r,M.r,O.r,B.r),V=Math.max(_.g,C.g,M.g,O.g,B.g),U>1.25*V?(G=l,t.grid[[k,w]]="HIT"):(G=u,t.grid[[k,w]]="MISS")),window.JUST_ONCE&&(T&&console.log("INSIDE!!!!!"),console.log("Scores:",k,w,T,D,_,C,M,O,B)),W=new window.cv.Point(S-7,E-7),Y=new window.cv.Point(S+7,E+7),window.cv.rectangle(n,W,Y,G,1,window.cv.LINE_8,0);for(X=0;X<3;X++)J=this.getSquidIndicatorXY(X),K=J.x,Z=J.y,$=n.ucharPtr(Math.round(Z),Math.round(K)),Q={r:$[0],g:$[1],b:$[2]},ee=new window.cv.Point(K-15,Z-15),te=new window.cv.Point(K+15,Z+15),ae=f,Q.r>1.25*Q.b&&(ae=d,t.squidsGotten=Math.max(t.squidsGotten,X+1)),window.cv.rectangle(n,ee,te,ae,1,window.cv.LINE_8,0);for(ne=this.getBoardRect(),re=n.roi(ne),i.push(re),window.cv.imshow("cv_outputCanvasRef",re),ie=0,oe=i;ie<oe.length;ie++)oe[ie].delete();if(se=performance.now(),console.log("CV took: "+(se-a)+"ms"),this.setState({lastCVTime:se-a}),le(this.previouslyReadStates[0],this.previouslyReadStates[1])||!le(this.previouslyReadStates[1],this.previouslyReadStates[2])||!le(this.previouslyReadStates[2],t)){e.next=33;break}return this.setState(t),e.next=33,this.doComputation(t.grid,t.squidsGotten);case 33:return this.previouslyReadStates.shift(),this.previouslyReadStates.push(t),e.abrupt("return",t);case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCapture",value:function(){var e=this.videoRef.current,t=this.canvasRef.current,a=t.getContext("2d"),n=Math.round(e.videoHeight/e.videoWidth*960);console.log("Native image capture shape: "+e.videoWidth+"x"+e.videoHeight+" -> scaling to: 960x"+n),t.width=960,t.height=n,a.drawImage(e,0,0,960,n)}},{key:"findMatchingLocations",value:c.a.mark((function e(t,a,n){var r,i,o,s,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=3;break}return e.next=3,[];case 3:r=t[0],i=this.boardTable,o=Math.min(i.length,a+n),s=a;case 7:if(!(s<o)){e.next=29;break}if(i[s]!==r){e.next=26;break}l=Object(f.a)(this.findMatchingLocations(t.slice(1),s,1e4)),e.prev=10,l.s();case 12:if((u=l.n()).done){e.next=18;break}return d=u.value,e.next=16,[s].concat(Object(g.a)(d));case 16:e.next=12;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),l.e(e.t0);case 23:return e.prev=23,l.f(),e.finish(23);case 26:s++,e.next=7;break;case 29:case"end":return e.stop()}}),e,this,[[10,20,23,26]])}))},{key:"makeGameHistoryArguments",value:function(){var e,t=this,a=this.layoutDrawingBoardRefs.map((function(e){return t.boardIndices[e.current.getLayoutString()]})),n=[],r=Object(f.a)(a);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(void 0===i)break;n.push(i)}}catch(b){r.e(b)}finally{r.f()}var o,s=[],l=Object(f.a)(this.findMatchingLocations(n,0,1e6));try{for(l.s();!(o=l.n()).done;){var c=o.value;s.push(c)}}catch(b){l.e(b)}finally{l.f()}this.setState({potentialMatches:s});for(var u=[],d=[],h=!0,p=0,v=[].concat(n,[null]);p<v.length;p++){if(void 0===v[p])break;h?(u.push(1e3*Number(this.state.firstBoardStepsThousands)),d.push(1e3*Number(this.state.firstBoardStepsThousandsStdDev))):(u.push(1e3*Number(this.state.nextBoardStepsThousands)),d.push(1e3*Number(this.state.nextBoardStepsThousandsStdDev))),h=!1}return[Uint32Array.from(n),Uint32Array.from(u),Float64Array.from(d)]}},{key:"getGridStatistics",value:function(e,t){for(var a=[],n=[],r=0;r<8;r++)for(var i=0;i<8;i++){var o=e[[i,r]];"HIT"===o&&a.push(8*r+i),"MISS"===o&&n.push(8*r+i)}for(var s=-1,l=0,c=["0","1","2","3"];l<c.length;l++){var u=c[l];t!==u&&t!==Number(u)||(s=Number(u))}return{hits:a,misses:n,numericSquidsGotten:s}}},{key:"doComputation",value:function(){var e=Object(p.a)(c.a.mark((function e(t,a){var n,r,i,o,s,l,u,d,h,f,p,v,b,m,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=performance.now(),r=this.getGridStatistics(t,a),i=r.hits,o=r.misses,s=r.numericSquidsGotten,e.next=4,N;case 4:if(this.state.turboBlurboMode?(u=this.makeGameHistoryArguments(),l=P.apply(void 0,[Uint8Array.from(i),Uint8Array.from(o),s].concat(Object(g.a)(u)))):l=R(Uint8Array.from(i),Uint8Array.from(o),s,Uint32Array.from([]),Float64Array.from([])),void 0!==l){for(d=0,h=0,f=-1,p=[],v=0;v<8;v++)for(b=0;b<8;b++)p[[b,v]]=l[8*v+b],null===t[[b,v]]&&l[8*v+b]>f&&(f=l[8*v+b],h=b,d=v);m=l[64],this.setState({probs:p,best:f>=0?[h,d]:null,valid:!0,observationProb:m})}else this.setState({valid:!1});y=performance.now(),this.setState({lastComputationTime:y-n});case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"onClick",value:function(e,t,a){var n=Object(h.a)({},this.state.grid),r=n[[e,t]],i=this.state.squidsGotten;if("calculator"===this.state.mode){switch(r){case null:r=a?"HIT":"MISS";break;case"MISS":r="HIT";break;case"HIT":r=null}n[[e,t]]=r}else{if(null!==r)return;r=function(a){var n,r=Object(f.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i[0]===e&&i[1]===t)return!0}}catch(o){r.e(o)}finally{r.f()}return!1}([].concat(Object(g.a)(this.state.squidLayout.squid2),Object(g.a)(this.state.squidLayout.squid3),Object(g.a)(this.state.squidLayout.squid4)))?"HIT":"MISS",n[[e,t]]=r,i=0;for(var o=0,s=["2","3","4"];o<s.length;o++){var l,c=s[o],u=this.state.squidLayout["squid"+c],d=!0,p=Object(f.a)(u);try{for(p.s();!(l=p.n()).done;){"HIT"!==n[l.value]&&(d=!1)}}catch(v){p.e(v)}finally{p.f()}i+=d}this.setState({squidsGotten:i})}this.setState({grid:n}),this.doComputation(n,i)}},{key:"clearField",value:function(){for(var e=this.makeEmptyState(),t={},a=0,n=["squidLayout","grid","squidsGotten"];a<n.length;a++){var r=n[a];t[r]=e[r]}this.state.turboBlurboMode&&(t.squidsGotten="0"),this.setState(t),this.doComputation(t.grid,t.squidsGotten)}},{key:"reportMiss",value:function(){null!==this.state.best&&null===this.state.grid[this.state.best]&&this.onClick.apply(this,Object(g.a)(this.state.best))}},{key:"reportHit",value:function(){null!==this.state.best&&null===this.state.grid[this.state.best]&&this.onClick.apply(this,Object(g.a)(this.state.best).concat([!0]))}},{key:"incrementKills",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="unknown"===this.state.squidsGotten?0:Number(this.state.squidsGotten),a=this.state.grid,4!==++t){e.next=8;break}return e.next=6,this.copyToHistory();case 6:e.sent?(t=0,a=this.makeEmptyGrid()):t=3;case 8:this.setState({grid:a,squidsGotten:""+t}),this.doComputation(a,""+t);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"copyToHistory",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,a,n,r,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getGridStatistics(this.state.grid,this.state.squidsGotten),a=t.hits,n=this.makeGameHistoryArguments(),e.next=4,N;case 4:if(void 0!==(r=F.apply(void 0,[Uint8Array.from(a)].concat(Object(g.a)(n))))){e.next=7;break}return e.abrupt("return",!1);case 7:return console.log("Final board:",r),i=this.boardIndexToLayoutString[r],o=n[0],(s=o.length)===this.layoutDrawingBoardRefs.length&&(this.shiftHistory(),s--),this.layoutDrawingBoardRefs[s].current.setStateFromLayoutString(i),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shiftHistory",value:function(){for(var e=this.layoutDrawingBoardRefs.map((function(e){return e.current})),t=0;t<e.length-1;t++)e[t].setState(e[t+1].state);e[e.length-1].clearBoard()}},{key:"renderActualMap",value:function(e){var t=this;return i.a.createElement("div",{style:{display:"inline-block"}},L(8).map((function(a){return i.a.createElement("div",{key:a,style:{display:"flex"}},L(8).map((function(n){return i.a.createElement(H,{key:n+","+a,x:n,y:a,onClick:function(){return t.onClick(n,a)},text:t.state.grid[[n,a]],prob:t.state.probs[[n,a]],valid:t.state.valid,best:t.state.best,precision:e?0:2,opacity:e?.5+.3*t.state.probs[[n,a]]:void 0})})))})))}},{key:"renderOverlayMap",value:function(){if(this.state.doVideoProcessing)return i.a.createElement("div",{style:{position:"absolute",top:"210px",left:"127px",transform:"scale(1.01, 1.05)",zIndex:20,display:"inline-block"}},this.renderActualMap(!0))}},{key:"render",value:function(){for(var e=this,t=0,a=!0,n=0;n<8;n++)for(var r=0;r<8;r++)null!==this.state.grid[[r,n]]&&(t++,"HIT"===this.state.grid[[r,n]]&&(a=!1));return i.a.createElement("div",{style:{margin:"20px"}},i.a.createElement("span",{style:{fontSize:"150%",color:"white"}},"Shots used: ",t),i.a.createElement("br",null),this.state.doVideoProcessing||this.renderActualMap(!1),this.state.valid||this.state.turboBlurboMode||i.a.createElement("div",{style:{fontSize:"150%",color:"white"}},"Invalid configuration! This is not possible."),i.a.createElement("br",null),i.a.createElement("div",{style:{fontSize:"150%"}},i.a.createElement("span",{style:{color:"white"}},"Number of squids killed:"),i.a.createElement("select",{style:{marginLeft:"20px",fontSize:"100%"},value:this.state.squidsGotten,onChange:function(t){e.setState({squidsGotten:t.target.value}),e.doComputation(e.state.grid,t.target.value)}},this.state.turboBlurboMode||i.a.createElement("option",{value:"unknown"},"Unknown"),i.a.createElement("option",{value:"0"},"0"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3")),i.a.createElement("br",null)),i.a.createElement("br",null),this.state.turboBlurboMode&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.reportMiss()}},"Miss (z)"),i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.reportHit()}},"Hit (x)"),i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.copyToHistory()}},"Copy to History (h)"),i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.shiftHistory()}},"Shift History")),i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.incrementKills()}},"Increment Kills (k)"),i.a.createElement("button",{style:{fontSize:"150%",margin:"10px"},onClick:function(){e.clearField()}},"Reset"),i.a.createElement("select",{style:{marginLeft:"20px",fontSize:"150%"},value:this.state.mode,onChange:function(t){return e.setState({mode:t.target.value})}},i.a.createElement("option",{value:"calculator"},"Calculator Mode"),i.a.createElement("option",{value:"practice"},"Practice Mode")),i.a.createElement("br",null),a&&!this.state.screenRecordingActive&&"calculator"===this.state.mode&&!this.state.turboBlurboMode&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{color:"white",fontSize:"120%",marginTop:"20px"}},"Opening optimizer: Probability that this",i.a.createElement("br",null),"pattern would get at least one hit: ",this.state.valid?(100*Math.max(0,1-this.state.observationProb)).toFixed(2)+"%":"Invalid")),i.a.createElement("br",null),i.a.createElement("hr",null),"initializing"===this.state.turboBlurboMode&&i.a.createElement("div",{style:{fontSize:"150%",color:"white"}},"Downloading table...",i.a.createElement("br",null)),!0===this.state.turboBlurboMode&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,this.layoutDrawingBoardRefs.map((function(t,a){return i.a.createElement(K,{parent:e,ref:t,key:a})}))),i.a.createElement("div",{style:{color:"white",fontSize:"130%"}},"Gaussian RNG step count beliefs (all counts in ",i.a.createElement("i",null,"thousands")," of steps):",i.a.createElement("br",null),"First board mean:   ",i.a.createElement("input",{style:{width:"50px"},value:this.state.firstBoardStepsThousands,onChange:function(t){return e.setState({firstBoardStepsThousands:t.target.value})}})," \xa0 First board stddev: ",i.a.createElement("input",{style:{width:"50px"},value:this.state.firstBoardStepsThousandsStdDev,onChange:function(t){return e.setState({firstBoardStepsThousandsStdDev:t.target.value})}})," \xa0 Next board mean:    ",i.a.createElement("input",{style:{width:"50px"},value:this.state.nextBoardStepsThousands,onChange:function(t){return e.setState({nextBoardStepsThousands:t.target.value})}})," \xa0 Next board stddev:  ",i.a.createElement("input",{style:{width:"50px"},value:this.state.nextBoardStepsThousandsStdDev,onChange:function(t){return e.setState({nextBoardStepsThousandsStdDev:t.target.value})}})),i.a.createElement("div",{style:{margin:"20px",color:"white",fontSize:"130%",border:"1px solid white",width:"400px",minHeight:"20px",display:"inline-block"}},this.state.potentialMatches.map((function(e,t){return i.a.createElement("div",{key:t},"Potential match:",e.map((function(e,t){return i.a.createElement("span",{key:t}," ",e)})))}))),i.a.createElement("div",{style:{fontSize:"150%",color:"white"}},"Turbo blurbo mode initialized.",i.a.createElement("br",null))),i.a.createElement("button",{disabled:!1!==this.state.turboBlurboMode,style:{fontSize:"150%",margin:"10px"},onClick:function(){e.initializeTurboBlurboMode(!1)}},"Initialize Turbo Blurbo Mode"),i.a.createElement("br",null),i.a.createElement("button",{disabled:!1!==this.state.turboBlurboMode,style:{fontSize:"150%",margin:"10px"},onClick:function(){e.initializeTurboBlurboMode(!0)}},"Initialize Turbo Blurbo Mode (big table)"),i.a.createElement("br",null),i.a.createElement("span",{style:{color:"white"}},"Last recompute time: ",this.state.lastComputationTime,"ms"),i.a.createElement("div",{style:{display:"none"},ref:this.hiddenAreaRef}))}}]),a}(i.a.Component);document.addEventListener("keydown",(function(e){"p"===e.key&&null!==D&&D.toggleVideoProcessing(),"z"===e.key&&null!==D&&D.reportMiss(),"x"===e.key&&null!==D&&D.reportHit(),"k"===e.key&&null!==D&&D.incrementKills(),"h"===e.key&&null!==D&&D.copyToHistory()}));var $=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#666"}},{key:"render",value:function(){return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("div",{style:{display:"inline-block",width:"600px"}},i.a.createElement("h1",{style:{color:"white"}},"Sploosh Kaboom Probability Calculator"),i.a.createElement("p",{style:{color:"white"}},"This page gives exact probabilities (no approximation) of hitting a squid in each cell, given the observation of hits, misses, and completed squid kills. Click on the map to cycle a cell between HIT and MISS. You can also set the number of squids completely killed in the drop-down menu at the bottom. You should set this to the value you see in the game for the number of squids killed. This will yield slightly more accurate probabilities. The highest probability location to play will be shown with a yellow outline. If you play perfectly according to picking the highlighted cell you will win in 20 or fewer shots \u224818.5% of the time.")),i.a.createElement(Z,null),i.a.createElement("span",{style:{color:"white"}},"Made by Peter Schmidt-Nielsen and CryZe (v0.0.6)"))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3639bb95.chunk.js.map
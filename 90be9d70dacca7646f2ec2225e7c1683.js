require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({9:[function(require,module,exports) {
!function(t,e,i,n){"use strict";function r(t,e,i){return setTimeout(u(t,i),e)}function s(t,e,i){return!!Array.isArray(t)&&(o(t,i[e],i),!0)}function o(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function a(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,n),e.apply(this,arguments)}}function h(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&J(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function c(t,e){return typeof t==tt?t.apply(e?e[0]||n:n,e):t}function l(t,e){return t===n?e:t}function p(t,e,i){o(m(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){o(m(e),function(e){t.removeEventListener(e,i,!1)})}function d(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function v(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function g(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function T(t){return Array.prototype.slice.call(t,0)}function y(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];g(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function E(t,e){for(var i,r,s=e[0].toUpperCase()+e.slice(1),o=0;o<K.length;){if((r=(i=K[o])?i+s:e)in t)return r;o++}return n}function I(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}function A(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){c(t.options.enable,[t])&&i.handler(e)},this.init()}function _(t,e,i){var r=i.pointers.length,s=i.changedPointers.length,o=e&pt&&r-s==0,a=e&(dt|vt)&&r-s==0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,r=e.pointers,s=r.length;i.firstInput||(i.firstInput=C(e)),s>1&&!i.firstMultiple?i.firstMultiple=C(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,h=a?a.center:o.center,u=e.center=S(r);e.timeStamp=nt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=x(h,u),e.distance=D(h,u),c=i,l=e,p=l.center,f=c.offsetDelta||{},v=c.prevDelta||{},m=c.prevInput||{},l.eventType!==pt&&m.eventType!==dt||(v=c.prevDelta={x:m.deltaX||0,y:m.deltaY||0},f=c.offsetDelta={x:p.x,y:p.y}),l.deltaX=v.x+(p.x-f.x),l.deltaY=v.y+(p.y-f.y),e.offsetDirection=P(e.deltaX,e.deltaY);var c,l,p,f,v,m;var g=b(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=g.x,e.overallVelocityY=g.y,e.overallVelocity=it(g.x)>it(g.y)?g.x:g.y,e.scale=a?(E=a.pointers,I=r,D(I[0],I[1],St)/D(E[0],E[1],St)):1,e.rotation=a?(T=a.pointers,y=r,x(y[1],y[0],St)+x(T[1],T[0],St)):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,r,s,o,a=t.lastInterval||e,h=e.timeStamp-a.timeStamp;if(e.eventType!=vt&&(h>lt||a.velocity===n)){var u=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,l=b(h,u,c);r=l.x,s=l.y,i=it(l.x)>it(l.y)?l.x:l.y,o=P(u,c),t.lastInterval=e}else i=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=s,e.direction=o}(i,e);var T,y;var E,I;var A=t.element;d(e.srcEvent.target,A)&&(A=e.srcEvent.target),e.target=A}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function C(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:et(t.pointers[i].clientX),clientY:et(t.pointers[i].clientY)},i++;return{timeStamp:nt(),pointers:e,center:S(e),deltaX:t.deltaX,deltaY:t.deltaY}}function S(t){var e=t.length;if(1===e)return{x:et(t[0].clientX),y:et(t[0].clientY)};for(var i=0,n=0,r=0;e>r;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:et(i/e),y:et(n/e)}}function b(t,e,i){return{x:e/t||0,y:i/t||0}}function P(t,e){return t===e?mt:it(t)>=it(e)?0>t?gt:Tt:0>e?yt:Et}function D(t,e,i){i||(i=Ct);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function x(t,e,i){i||(i=Ct);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}function w(){this.evEl=Pt,this.evWin=Dt,this.pressed=!1,A.apply(this,arguments)}function O(){this.evEl=Ot,this.evWin=Rt,A.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function R(){this.evTarget=zt,this.evWin=Nt,this.started=!1,A.apply(this,arguments)}function M(){this.evTarget=Yt,this.targetIds={},A.apply(this,arguments)}function z(){A.apply(this,arguments);var t=u(this.handler,this);this.touch=new M(this.manager,t),this.mouse=new w(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function N(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},Ft)}}function X(t,e){this.manager=t,this.set(e)}function Y(t){this.options=J({},this.defaults,t||{}),this.id=ot++,this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=Zt,this.simultaneous={},this.requireFail=[]}function F(t){return t&Qt?"cancel":t&Jt?"end":t&$t?"move":t&Bt?"start":""}function W(t){return t==Et?"down":t==yt?"up":t==gt?"left":t==Tt?"right":""}function q(t,e){var i=e.manager;return i?i.get(t):t}function k(){Y.apply(this,arguments)}function H(){k.apply(this,arguments),this.pX=null,this.pY=null}function L(){k.apply(this,arguments)}function U(){Y.apply(this,arguments),this._timer=null,this._input=null}function V(){k.apply(this,arguments)}function j(){k.apply(this,arguments)}function G(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Z(t,e){return(e=e||{}).recognizers=l(e.recognizers,Z.defaults.preset),new B(t,e)}function B(t,e){var i;this.options=J({},Z.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(ht?O:ut?M:at?z:w))(i,_),this.touchAction=new X(this,this.options.touchAction),$(this,!0),o(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function $(t,e){var i,n=t.element;n.style&&(o(t.options.cssProps,function(r,s){i=E(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}var J,K=["","webkit","Moz","MS","ms","o"],Q=e.createElement("div"),tt="function",et=Math.round,it=Math.abs,nt=Date.now;J="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(r!==n&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var rt=a(function(t,e,i){for(var r=Object.keys(e),s=0;s<r.length;)(!i||i&&t[r[s]]===n)&&(t[r[s]]=e[r[s]]),s++;return t},"extend","Use `assign`."),st=a(function(t,e){return rt(t,e,!0)},"merge","Use `assign`."),ot=1,at="ontouchstart"in t,ht=E(t,"PointerEvent")!==n,ut=at&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),ct="touch",lt=25,pt=1,ft=2,dt=4,vt=8,mt=1,gt=2,Tt=4,yt=8,Et=16,It=gt|Tt,At=yt|Et,_t=It|At,Ct=["x","y"],St=["clientX","clientY"];A.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(I(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(I(this.element),this.evWin,this.domHandler)}};var bt={mousedown:pt,mousemove:ft,mouseup:dt},Pt="mousedown",Dt="mousemove mouseup";h(w,A,{handler:function(t){var e=bt[t.type];e&pt&&0===t.button&&(this.pressed=!0),e&ft&&1!==t.which&&(e=dt),this.pressed&&(e&dt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var xt={pointerdown:pt,pointermove:ft,pointerup:dt,pointercancel:vt,pointerout:vt},wt={2:ct,3:"pen",4:"mouse",5:"kinect"},Ot="pointerdown",Rt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(Ot="MSPointerDown",Rt="MSPointerMove MSPointerUp MSPointerCancel"),h(O,A,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=xt[n],s=wt[t.pointerType]||t.pointerType,o=s==ct,a=g(e,t.pointerId,"pointerId");r&pt&&(0===t.button||o)?0>a&&(e.push(t),a=e.length-1):r&(dt|vt)&&(i=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Mt={touchstart:pt,touchmove:ft,touchend:dt,touchcancel:vt},zt="touchstart",Nt="touchstart touchmove touchend touchcancel";h(R,A,{handler:function(t){var e=Mt[t.type];if(e===pt&&(this.started=!0),this.started){var i=function(t,e){var i=T(t.touches),n=T(t.changedTouches);return e&(dt|vt)&&(i=y(i.concat(n),"identifier",!0)),[i,n]}.call(this,t,e);e&(dt|vt)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:ct,srcEvent:t})}}});var Xt={touchstart:pt,touchmove:ft,touchend:dt,touchcancel:vt},Yt="touchstart touchmove touchend touchcancel";h(M,A,{handler:function(t){var e=Xt[t.type],i=function(t,e){var i=T(t.touches),n=this.targetIds;if(e&(pt|ft)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=T(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return d(t.target,h)}),e===pt)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(dt|vt)&&delete n[o[r].identifier],r++;return a.length?[y(s.concat(a),"identifier",!0),a]:void 0}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:ct,srcEvent:t})}});var Ft=2500,Wt=25;h(z,A,{handler:function(t,e,i){var n=i.pointerType==ct,r="mouse"==i.pointerType;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&pt?(this.primaryTouch=e.changedPointers[0].identifier,N.call(this,e)):t&(dt|vt)&&N.call(this,e)}).call(this,e,i);else if(r&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(Wt>=s&&Wt>=o)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var qt=E(Q.style,"touchAction"),kt=qt!==n,Ht="auto",Lt="manipulation",Ut="none",Vt="pan-x",jt="pan-y",Gt=function(){if(!kt)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();X.prototype={set:function(t){"compute"==t&&(t=this.compute()),kt&&this.manager.element.style&&Gt[t]&&(this.manager.element.style[qt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){c(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(v(t,Ut))return Ut;var e=v(t,Vt),i=v(t,jt);return e&&i?Ut:e||i?e?Vt:jt:v(t,Lt)?Lt:Ht}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(!this.manager.session.prevented){var n=this.actions,r=v(n,Ut)&&!Gt[Ut],s=v(n,jt)&&!Gt[jt],o=v(n,Vt)&&!Gt[Vt];if(r){var a=1===t.pointers.length,h=t.distance<2,u=t.deltaTime<250;if(a&&h&&u)return}return o&&s?void 0:r||s&&i&It||o&&i&At?this.preventSrc(e):void 0}e.preventDefault()},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Zt=1,Bt=2,$t=4,Jt=8,Kt=Jt,Qt=16;Y.prototype={defaults:{},set:function(t){return J(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=q(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=q(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return-1===g(e,t=q(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=q(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,n=this.state;Jt>n&&e(i.options.event+F(n)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),n>=Jt&&e(i.options.event+F(n))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Zt)))return!1;t++}return!0},recognize:function(t){var e=J({},t);return c(this.options.enable,[this,e])?(this.state&(Kt|Qt|32)&&(this.state=Zt),this.state=this.process(e),void(this.state&(Bt|$t|Jt|Qt)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},h(k,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Bt|$t),r=this.attrTest(t);return n&&(i&vt||!r)?e|Qt:n||r?i&dt?e|Jt:e&Bt?e|$t:Bt:32}}),h(H,k,{defaults:{event:"pan",threshold:10,pointers:1,direction:_t},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(jt),t&At&&e.push(Vt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&It?(r=0===s?mt:0>s?gt:Tt,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?mt:0>o?yt:Et,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return k.prototype.attrTest.call(this,t)&&(this.state&Bt||!(this.state&Bt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=W(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(L,k,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Ut]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Bt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),h(U,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ht]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(dt|vt)&&!s)this.reset();else if(t.eventType&pt)this.reset(),this._timer=r(function(){this.state=Kt,this.tryEmit()},e.time,this);else if(t.eventType&dt)return Kt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Kt&&(t&&t.eventType&dt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=nt(),this.manager.emit(this.options.event,this._input)))}}),h(V,k,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Ut]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Bt)}}),h(j,k,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:It|At,pointers:1},getTouchAction:function(){return H.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|At)?e=t.overallVelocity:i&It?e=t.overallVelocityX:i&At&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&it(e)>this.options.velocity&&t.eventType&dt},emit:function(t){var e=W(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(G,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Lt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&pt&&0===this.count)return this.failTimeout();if(n&&s&&i){if(t.eventType!=dt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||D(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=r(function(){this.state=Kt,this.tryEmit()},e.interval,this),Bt):Kt}return 32},failTimeout:function(){return this._timer=r(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Kt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Z.VERSION="2.0.7",Z.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[V,{enable:!1}],[L,{enable:!1},["rotate"]],[j,{direction:It}],[H,{direction:It},["swipe"]],[G],[G,{event:"doubletap",taps:2},["tap"]],[U]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};B.prototype={set:function(t){return J(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Kt)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(Bt|$t|Jt)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=g(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return o(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==n){var i=this.handlers;return o(m(t),function(t){e?i[t]&&i[t].splice(g(i[t],e),1):delete i[t]}),this}},emit:function(t,i){var n,r,s;this.options.domEvents&&(n=t,r=i,(s=e.createEvent("Event")).initEvent(n,!0,!0),s.gesture=r,r.target.dispatchEvent(s));var o=this.handlers[t]&&this.handlers[t].slice();if(o&&o.length){i.type=t,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var a=0;a<o.length;)o[a](i),a++}},destroy:function(){this.element&&$(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},J(Z,{INPUT_START:pt,INPUT_MOVE:ft,INPUT_END:dt,INPUT_CANCEL:vt,STATE_POSSIBLE:Zt,STATE_BEGAN:Bt,STATE_CHANGED:$t,STATE_ENDED:Jt,STATE_RECOGNIZED:Kt,STATE_CANCELLED:Qt,STATE_FAILED:32,DIRECTION_NONE:mt,DIRECTION_LEFT:gt,DIRECTION_RIGHT:Tt,DIRECTION_UP:yt,DIRECTION_DOWN:Et,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:At,DIRECTION_ALL:_t,Manager:B,Input:A,TouchAction:X,TouchInput:M,MouseInput:w,PointerEventInput:O,TouchMouseInput:z,SingleTouchInput:R,Recognizer:Y,AttrRecognizer:k,Tap:G,Pan:H,Swipe:j,Pinch:L,Rotate:V,Press:U,on:p,off:f,each:o,merge:st,extend:rt,assign:J,inherit:h,bindFn:u,prefixed:E}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Z,"function"==typeof define&&define.amd?define(function(){return Z}):"undefined"!=typeof module&&module.exports?module.exports=Z:t.Hammer=Z}(window,document);
},{}]},{},[9])
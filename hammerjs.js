require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({9:[function(require,module,exports) {
!function(t,e,i,n){"use strict";var r,s=["","webkit","Moz","MS","ms","o"],o=e.createElement("div"),a="function",h=Math.round,u=Math.abs,c=Date.now;function l(t,e,i){return setTimeout(T(t,i),e)}function p(t,e,i){return!!Array.isArray(t)&&(f(t,i[e],i),!0)}function f(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function v(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,n),e.apply(this,arguments)}}r="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(r!==n&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var d=v(function(t,e,i){for(var r=Object.keys(e),s=0;s<r.length;)(!i||i&&t[r[s]]===n)&&(t[r[s]]=e[r[s]]),s++;return t},"extend","Use `assign`."),m=v(function(t,e){return d(t,e,!0)},"merge","Use `assign`.");function g(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&r(n,i)}function T(t,e){return function(){return t.apply(e,arguments)}}function y(t,e){return typeof t==a?t.apply(e?e[0]||n:n,e):t}function E(t,e){return t===n?e:t}function I(t,e,i){f(S(e),function(e){t.addEventListener(e,i,!1)})}function A(t,e,i){f(S(e),function(e){t.removeEventListener(e,i,!1)})}function _(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function C(t,e){return t.indexOf(e)>-1}function S(t){return t.trim().split(/\s+/g)}function b(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function D(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];b(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,r,o=e[0].toUpperCase()+e.slice(1),a=0;a<s.length;){if((r=(i=s[a])?i+o:e)in t)return r;a++}return n}var w=1;function O(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}var R="ontouchstart"in t,M=x(t,"PointerEvent")!==n,z=R&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),N="touch",X=25,Y=1,F=2,W=4,q=8,k=1,H=2,L=4,U=8,V=16,j=H|L,G=U|V,Z=j|G,B=["x","y"],$=["clientX","clientY"];function J(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){y(t.options.enable,[t])&&i.handler(e)},this.init()}function K(t,e,i){var r=i.pointers.length,s=i.changedPointers.length,o=e&Y&&r-s==0,a=e&(W|q)&&r-s==0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,r=e.pointers,s=r.length;i.firstInput||(i.firstInput=Q(e));s>1&&!i.firstMultiple?i.firstMultiple=Q(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,h=a?a.center:o.center,l=e.center=tt(r);e.timeStamp=c(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=rt(h,l),e.distance=nt(h,l),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Y&&s.eventType!==W||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=it(e.deltaX,e.deltaY);var p=et(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=p.x,e.overallVelocityY=p.y,e.overallVelocity=u(p.x)>u(p.y)?p.x:p.y,e.scale=a?(d=a.pointers,m=r,nt(m[0],m[1],$)/nt(d[0],d[1],$)):1,e.rotation=a?(f=a.pointers,v=r,rt(v[1],v[0],$)+rt(f[1],f[0],$)):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,r,s,o,a=t.lastInterval||e,h=e.timeStamp-a.timeStamp;if(e.eventType!=q&&(h>X||a.velocity===n)){var c=e.deltaX-a.deltaX,l=e.deltaY-a.deltaY,p=et(h,c,l);r=p.x,s=p.y,i=u(p.x)>u(p.y)?p.x:p.y,o=it(c,l),t.lastInterval=e}else i=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=s,e.direction=o}(i,e);var f,v;var d,m;var g=t.element;_(e.srcEvent.target,g)&&(g=e.srcEvent.target);e.target=g}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Q(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:h(t.pointers[i].clientX),clientY:h(t.pointers[i].clientY)},i++;return{timeStamp:c(),pointers:e,center:tt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function tt(t){var e=t.length;if(1===e)return{x:h(t[0].clientX),y:h(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:h(i/e),y:h(n/e)}}function et(t,e,i){return{x:e/t||0,y:i/t||0}}function it(t,e){return t===e?k:u(t)>=u(e)?t<0?H:L:e<0?U:V}function nt(t,e,i){i||(i=B);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function rt(t,e,i){i||(i=B);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}J.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&A(this.element,this.evEl,this.domHandler),this.evTarget&&A(this.target,this.evTarget,this.domHandler),this.evWin&&A(O(this.element),this.evWin,this.domHandler)}};var st={mousedown:Y,mousemove:F,mouseup:W},ot="mousedown",at="mousemove mouseup";function ht(){this.evEl=ot,this.evWin=at,this.pressed=!1,J.apply(this,arguments)}g(ht,J,{handler:function(t){var e=st[t.type];e&Y&&0===t.button&&(this.pressed=!0),e&F&&1!==t.which&&(e=W),this.pressed&&(e&W&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ut={pointerdown:Y,pointermove:F,pointerup:W,pointercancel:q,pointerout:q},ct={2:N,3:"pen",4:"mouse",5:"kinect"},lt="pointerdown",pt="pointermove pointerup pointercancel";function ft(){this.evEl=lt,this.evWin=pt,J.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(lt="MSPointerDown",pt="MSPointerMove MSPointerUp MSPointerCancel"),g(ft,J,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=ut[n],s=ct[t.pointerType]||t.pointerType,o=s==N,a=b(e,t.pointerId,"pointerId");r&Y&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(W|q)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var vt={touchstart:Y,touchmove:F,touchend:W,touchcancel:q},dt="touchstart",mt="touchstart touchmove touchend touchcancel";function gt(){this.evTarget=dt,this.evWin=mt,this.started=!1,J.apply(this,arguments)}g(gt,J,{handler:function(t){var e=vt[t.type];if(e===Y&&(this.started=!0),this.started){var i=function(t,e){var i=P(t.touches),n=P(t.changedTouches);e&(W|q)&&(i=D(i.concat(n),"identifier",!0));return[i,n]}.call(this,t,e);e&(W|q)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:N,srcEvent:t})}}});var Tt={touchstart:Y,touchmove:F,touchend:W,touchcancel:q},yt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=yt,this.targetIds={},J.apply(this,arguments)}g(Et,J,{handler:function(t){var e=Tt[t.type],i=function(t,e){var i=P(t.touches),n=this.targetIds;if(e&(Y|F)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=P(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return _(t.target,h)}),e===Y)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;r=0;for(;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(W|q)&&delete n[o[r].identifier],r++;if(!a.length)return;return[D(s.concat(a),"identifier",!0),a]}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:N,srcEvent:t})}});var It=2500,At=25;function _t(){J.apply(this,arguments);var t=T(this.handler,this);this.touch=new Et(this.manager,t),this.mouse=new ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ct(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},It)}}g(_t,J,{handler:function(t,e,i){var n=i.pointerType==N,r="mouse"==i.pointerType;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&Y?(this.primaryTouch=e.changedPointers[0].identifier,Ct.call(this,e)):t&(W|q)&&Ct.call(this,e)}).call(this,e,i);else if(r&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=At&&o<=At)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var St=x(o.style,"touchAction"),bt=St!==n,Pt="auto",Dt="manipulation",xt="none",wt="pan-x",Ot="pan-y",Rt=function(){if(!bt)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();function Mt(t,e){this.manager=t,this.set(e)}Mt.prototype={set:function(t){"compute"==t&&(t=this.compute()),bt&&this.manager.element.style&&Rt[t]&&(this.manager.element.style[St]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return f(this.manager.recognizers,function(e){y(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(C(t,xt))return xt;var e=C(t,wt),i=C(t,Ot);if(e&&i)return xt;if(e||i)return e?wt:Ot;if(C(t,Dt))return Dt;return Pt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,r=C(n,xt)&&!Rt[xt],s=C(n,Ot)&&!Rt[Ot],o=C(n,wt)&&!Rt[wt];if(r){var a=1===t.pointers.length,h=t.distance<2,u=t.deltaTime<250;if(a&&h&&u)return}if(!o||!s)return r||s&&i&j||o&&i&G?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var zt=1,Nt=2,Xt=4,Yt=8,Ft=Yt,Wt=16;function qt(t){this.options=r({},this.defaults,t||{}),this.id=w++,this.manager=null,this.options.enable=E(this.options.enable,!0),this.state=zt,this.simultaneous={},this.requireFail=[]}function kt(t){return t&Wt?"cancel":t&Yt?"end":t&Xt?"move":t&Nt?"start":""}function Ht(t){return t==V?"down":t==U?"up":t==H?"left":t==L?"right":""}function Lt(t,e){var i=e.manager;return i?i.get(t):t}function Ut(){qt.apply(this,arguments)}function Vt(){Ut.apply(this,arguments),this.pX=null,this.pY=null}function jt(){Ut.apply(this,arguments)}function Gt(){qt.apply(this,arguments),this._timer=null,this._input=null}function Zt(){Ut.apply(this,arguments)}function Bt(){Ut.apply(this,arguments)}function $t(){qt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Jt(t,e){return(e=e||{}).recognizers=E(e.recognizers,Jt.defaults.preset),new Kt(t,e)}qt.prototype={defaults:{},set:function(t){return r(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(p(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Lt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return p(t,"dropRecognizeWith",this)?this:(t=Lt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(p(t,"requireFailure",this))return this;var e=this.requireFail;return-1===b(e,t=Lt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(p(t,"dropRequireFailure",this))return this;t=Lt(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<Yt&&n(e.options.event+kt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=Yt&&n(e.options.event+kt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|zt)))return!1;t++}return!0},recognize:function(t){var e=r({},t);if(!y(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Ft|Wt|32)&&(this.state=zt),this.state=this.process(e),this.state&(Nt|Xt|Yt|Wt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},g(Ut,qt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Nt|Xt),r=this.attrTest(t);return n&&(i&q||!r)?e|Wt:n||r?i&W?e|Yt:e&Nt?e|Xt:Nt:32}}),g(Vt,Ut,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var t=this.options.direction,e=[];return t&j&&e.push(Ot),t&G&&e.push(wt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&j?(r=0===s?k:s<0?H:L,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?k:o<0?U:V,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return Ut.prototype.attrTest.call(this,t)&&(this.state&Nt||!(this.state&Nt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Ht(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),g(jt,Ut,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[xt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Nt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),g(Gt,qt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Pt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(W|q)&&!r)this.reset();else if(t.eventType&Y)this.reset(),this._timer=l(function(){this.state=Ft,this.tryEmit()},e.time,this);else if(t.eventType&W)return Ft;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ft&&(t&&t.eventType&W?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}}),g(Zt,Ut,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[xt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Nt)}}),g(Bt,Ut,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:j|G,pointers:1},getTouchAction:function(){return Vt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(j|G)?e=t.overallVelocity:i&j?e=t.overallVelocityX:i&G&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&u(e)>this.options.velocity&&t.eventType&W},emit:function(t){var e=Ht(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),g($t,qt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Dt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Y&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=W)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||nt(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=l(function(){this.state=Ft,this.tryEmit()},e.interval,this),Nt):Ft}return 32},failTimeout:function(){return this._timer=l(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Jt.VERSION="2.0.7",Jt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Zt,{enable:!1}],[jt,{enable:!1},["rotate"]],[Bt,{direction:j}],[Vt,{direction:j},["swipe"]],[$t],[$t,{event:"doubletap",taps:2},["tap"]],[Gt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Kt(t,e){var i;this.options=r({},Jt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(M?ft:z?Et:R?_t:ht))(i,K),this.touchAction=new Mt(this,this.options.touchAction),Qt(this,!0),f(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function Qt(t,e){var i,n=t.element;n.style&&(f(t.options.cssProps,function(r,s){i=x(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}Kt.prototype={set:function(t){return r(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Ft)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(Nt|Xt|Yt)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof qt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(p(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(p(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=b(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return f(S(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==n){var i=this.handlers;return f(S(t),function(t){e?i[t]&&i[t].splice(b(i[t],e),1):delete i[t]}),this}},emit:function(t,i){var n,r,s;this.options.domEvents&&(n=t,r=i,(s=e.createEvent("Event")).initEvent(n,!0,!0),s.gesture=r,r.target.dispatchEvent(s));var o=this.handlers[t]&&this.handlers[t].slice();if(o&&o.length){i.type=t,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var a=0;a<o.length;)o[a](i),a++}},destroy:function(){this.element&&Qt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},r(Jt,{INPUT_START:Y,INPUT_MOVE:F,INPUT_END:W,INPUT_CANCEL:q,STATE_POSSIBLE:zt,STATE_BEGAN:Nt,STATE_CHANGED:Xt,STATE_ENDED:Yt,STATE_RECOGNIZED:Ft,STATE_CANCELLED:Wt,STATE_FAILED:32,DIRECTION_NONE:k,DIRECTION_LEFT:H,DIRECTION_RIGHT:L,DIRECTION_UP:U,DIRECTION_DOWN:V,DIRECTION_HORIZONTAL:j,DIRECTION_VERTICAL:G,DIRECTION_ALL:Z,Manager:Kt,Input:J,TouchAction:Mt,TouchInput:Et,MouseInput:ht,PointerEventInput:ft,TouchMouseInput:_t,SingleTouchInput:gt,Recognizer:qt,AttrRecognizer:Ut,Tap:$t,Pan:Vt,Swipe:Bt,Pinch:jt,Rotate:Zt,Press:Gt,on:I,off:A,each:f,merge:m,extend:d,assign:r,inherit:g,bindFn:T,prefixed:x}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Jt,"function"==typeof define&&define.amd?define(function(){return Jt}):"undefined"!=typeof module&&module.exports?module.exports=Jt:t.Hammer=Jt}(window,document);
},{}]},{},[9])
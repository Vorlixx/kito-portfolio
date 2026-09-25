var cK=Object.defineProperty;var uK=(e,i,r)=>i in e?cK(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var Gi=(e,i,r)=>uK(e,typeof i!="symbol"?i+"":i,r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))t(A);new MutationObserver(A=>{for(const a of A)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(A){const a={};return A.integrity&&(a.integrity=A.integrity),A.referrerPolicy&&(a.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?a.credentials="include":A.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(A){if(A.ep)return;A.ep=!0;const a=r(A);fetch(A.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vq="167",WK=0,kq=1,KK=2,kc=1,xK=2,yA=3,Le=0,Nt=1,TA=2,Fe=0,ba=1,_q=2,$q=3,rn=4,FK=5,He=100,hK=101,EK=102,MK=103,UK=104,LK=200,pK=201,dK=202,wK=203,$V=204,im=205,NK=206,RK=207,CK=208,YK=209,XK=210,ZK=211,GK=212,zK=213,DK=214,yK=0,QK=1,BK=2,wl=3,gK=4,SK=5,TK=6,OK=7,_c=0,jK=1,bK=2,he=0,IK=1,vK=2,HK=3,fK=4,JK=5,PK=6,kK=7,$c=300,Ao=301,eo=302,rm=303,tm=304,Il=306,Am=1e3,bA=1001,em=1002,it=1003,_K=1004,ps=1005,Ot=1006,AV=1007,Pe=1008,kA=1009,iu=1010,ru=1011,es=1012,mq=1013,la=1014,WA=1015,xs=1016,qq=1017,nq=1018,ao=1020,tu=35902,Au=1021,eu=1022,wt=1023,au=1024,ou=1025,Ia=1026,oo=1027,su=1028,cq=1029,lu=1030,uq=1031,Wq=1033,ll=33776,Vl=33777,ml=33778,ql=33779,am=35840,om=35841,sm=35842,lm=35843,Vm=36196,mm=37492,qm=37496,nm=37808,cm=37809,um=37810,Wm=37811,Km=37812,xm=37813,Fm=37814,hm=37815,Em=37816,Mm=37817,Um=37818,Lm=37819,pm=37820,dm=37821,nl=36492,wm=36494,Nm=36495,Vu=36283,Rm=36284,Cm=36285,Ym=36286,$K=3200,ix=3201,rx=0,tx=1,OA="",hA="srgb",Ce="srgb-linear",Kq="display-p3",vl="display-p3-linear",Nl="linear",Cr="srgb",Rl="rec709",Cl="p3",Wa=7680,tn=519,Ax=512,ex=513,ax=514,mu=515,ox=516,sx=517,lx=518,Vx=519,An=35044,en="300 es",IA=2e3,Yl=2001;let Wo=class{addEventListener(i,r){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[i]===void 0&&(t[i]=[]),t[i].indexOf(r)===-1&&t[i].push(r)}hasEventListener(i,r){if(this._listeners===void 0)return!1;const t=this._listeners;return t[i]!==void 0&&t[i].indexOf(r)!==-1}removeEventListener(i,r){if(this._listeners===void 0)return;const A=this._listeners[i];if(A!==void 0){const a=A.indexOf(r);a!==-1&&A.splice(a,1)}}dispatchEvent(i){if(this._listeners===void 0)return;const t=this._listeners[i.type];if(t!==void 0){i.target=this;const A=t.slice(0);for(let a=0,o=A.length;a<o;a++)A[a].call(this,i);i.target=null}}};const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eV=Math.PI/180,Xm=180/Math.PI;function Fs(){const e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+"-"+ot[i&255]+ot[i>>8&255]+"-"+ot[i>>16&15|64]+ot[i>>24&255]+"-"+ot[r&63|128]+ot[r>>8&255]+"-"+ot[r>>16&255]+ot[r>>24&255]+ot[t&255]+ot[t>>8&255]+ot[t>>16&255]+ot[t>>24&255]).toLowerCase()}function pt(e,i,r){return Math.max(i,Math.min(r,e))}function mx(e,i){return(e%i+i)%i}function aV(e,i,r){return(1-r)*e+r*i}function Fo(e,i){switch(i.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ut(e,i){switch(i.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class qr{constructor(i=0,r=0){qr.prototype.isVector2=!0,this.x=i,this.y=r}get width(){return this.x}set width(i){this.x=i}get height(){return this.y}set height(i){this.y=i}set(i,r){return this.x=i,this.y=r,this}setScalar(i){return this.x=i,this.y=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setComponent(i,r){switch(i){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y)}copy(i){return this.x=i.x,this.y=i.y,this}add(i){return this.x+=i.x,this.y+=i.y,this}addScalar(i){return this.x+=i,this.y+=i,this}addVectors(i,r){return this.x=i.x+r.x,this.y=i.y+r.y,this}addScaledVector(i,r){return this.x+=i.x*r,this.y+=i.y*r,this}sub(i){return this.x-=i.x,this.y-=i.y,this}subScalar(i){return this.x-=i,this.y-=i,this}subVectors(i,r){return this.x=i.x-r.x,this.y=i.y-r.y,this}multiply(i){return this.x*=i.x,this.y*=i.y,this}multiplyScalar(i){return this.x*=i,this.y*=i,this}divide(i){return this.x/=i.x,this.y/=i.y,this}divideScalar(i){return this.multiplyScalar(1/i)}applyMatrix3(i){const r=this.x,t=this.y,A=i.elements;return this.x=A[0]*r+A[3]*t+A[6],this.y=A[1]*r+A[4]*t+A[7],this}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this}clamp(i,r){return this.x=Math.max(i.x,Math.min(r.x,this.x)),this.y=Math.max(i.y,Math.min(r.y,this.y)),this}clampScalar(i,r){return this.x=Math.max(i,Math.min(r,this.x)),this.y=Math.max(i,Math.min(r,this.y)),this}clampLength(i,r){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(i,Math.min(r,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(i){return this.x*i.x+this.y*i.y}cross(i){return this.x*i.y-this.y*i.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(i){const r=Math.sqrt(this.lengthSq()*i.lengthSq());if(r===0)return Math.PI/2;const t=this.dot(i)/r;return Math.acos(pt(t,-1,1))}distanceTo(i){return Math.sqrt(this.distanceToSquared(i))}distanceToSquared(i){const r=this.x-i.x,t=this.y-i.y;return r*r+t*t}manhattanDistanceTo(i){return Math.abs(this.x-i.x)+Math.abs(this.y-i.y)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,r){return this.x+=(i.x-this.x)*r,this.y+=(i.y-this.y)*r,this}lerpVectors(i,r,t){return this.x=i.x+(r.x-i.x)*t,this.y=i.y+(r.y-i.y)*t,this}equals(i){return i.x===this.x&&i.y===this.y}fromArray(i,r=0){return this.x=i[r],this.y=i[r+1],this}toArray(i=[],r=0){return i[r]=this.x,i[r+1]=this.y,i}fromBufferAttribute(i,r){return this.x=i.getX(r),this.y=i.getY(r),this}rotateAround(i,r){const t=Math.cos(r),A=Math.sin(r),a=this.x-i.x,o=this.y-i.y;return this.x=a*t-o*A+i.x,this.y=a*A+o*t+i.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class er{constructor(i,r,t,A,a,o,s,V,m){er.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],i!==void 0&&this.set(i,r,t,A,a,o,s,V,m)}set(i,r,t,A,a,o,s,V,m){const q=this.elements;return q[0]=i,q[1]=A,q[2]=s,q[3]=r,q[4]=a,q[5]=V,q[6]=t,q[7]=o,q[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(i){const r=this.elements,t=i.elements;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this}extractBasis(i,r,t){return i.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(i){const r=i.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(i){return this.multiplyMatrices(this,i)}premultiply(i){return this.multiplyMatrices(i,this)}multiplyMatrices(i,r){const t=i.elements,A=r.elements,a=this.elements,o=t[0],s=t[3],V=t[6],m=t[1],q=t[4],c=t[7],n=t[2],l=t[5],x=t[8],K=A[0],u=A[3],W=A[6],E=A[1],h=A[4],U=A[7],N=A[2],w=A[5],p=A[8];return a[0]=o*K+s*E+V*N,a[3]=o*u+s*h+V*w,a[6]=o*W+s*U+V*p,a[1]=m*K+q*E+c*N,a[4]=m*u+q*h+c*w,a[7]=m*W+q*U+c*p,a[2]=n*K+l*E+x*N,a[5]=n*u+l*h+x*w,a[8]=n*W+l*U+x*p,this}multiplyScalar(i){const r=this.elements;return r[0]*=i,r[3]*=i,r[6]*=i,r[1]*=i,r[4]*=i,r[7]*=i,r[2]*=i,r[5]*=i,r[8]*=i,this}determinant(){const i=this.elements,r=i[0],t=i[1],A=i[2],a=i[3],o=i[4],s=i[5],V=i[6],m=i[7],q=i[8];return r*o*q-r*s*m-t*a*q+t*s*V+A*a*m-A*o*V}invert(){const i=this.elements,r=i[0],t=i[1],A=i[2],a=i[3],o=i[4],s=i[5],V=i[6],m=i[7],q=i[8],c=q*o-s*m,n=s*V-q*a,l=m*a-o*V,x=r*c+t*n+A*l;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const K=1/x;return i[0]=c*K,i[1]=(A*m-q*t)*K,i[2]=(s*t-A*o)*K,i[3]=n*K,i[4]=(q*r-A*V)*K,i[5]=(A*a-s*r)*K,i[6]=l*K,i[7]=(t*V-m*r)*K,i[8]=(o*r-t*a)*K,this}transpose(){let i;const r=this.elements;return i=r[1],r[1]=r[3],r[3]=i,i=r[2],r[2]=r[6],r[6]=i,i=r[5],r[5]=r[7],r[7]=i,this}getNormalMatrix(i){return this.setFromMatrix4(i).invert().transpose()}transposeIntoArray(i){const r=this.elements;return i[0]=r[0],i[1]=r[3],i[2]=r[6],i[3]=r[1],i[4]=r[4],i[5]=r[7],i[6]=r[2],i[7]=r[5],i[8]=r[8],this}setUvTransform(i,r,t,A,a,o,s){const V=Math.cos(a),m=Math.sin(a);return this.set(t*V,t*m,-t*(V*o+m*s)+o+i,-A*m,A*V,-A*(-m*o+V*s)+s+r,0,0,1),this}scale(i,r){return this.premultiply(oV.makeScale(i,r)),this}rotate(i){return this.premultiply(oV.makeRotation(-i)),this}translate(i,r){return this.premultiply(oV.makeTranslation(i,r)),this}makeTranslation(i,r){return i.isVector2?this.set(1,0,i.x,0,1,i.y,0,0,1):this.set(1,0,i,0,1,r,0,0,1),this}makeRotation(i){const r=Math.cos(i),t=Math.sin(i);return this.set(r,-t,0,t,r,0,0,0,1),this}makeScale(i,r){return this.set(i,0,0,0,r,0,0,0,1),this}equals(i){const r=this.elements,t=i.elements;for(let A=0;A<9;A++)if(r[A]!==t[A])return!1;return!0}fromArray(i,r=0){for(let t=0;t<9;t++)this.elements[t]=i[t+r];return this}toArray(i=[],r=0){const t=this.elements;return i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2],i[r+3]=t[3],i[r+4]=t[4],i[r+5]=t[5],i[r+6]=t[6],i[r+7]=t[7],i[r+8]=t[8],i}clone(){return new this.constructor().fromArray(this.elements)}}const oV=new er;function qu(e){for(let i=e.length-1;i>=0;--i)if(e[i]>=65535)return!0;return!1}function Xl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qx(){const e=Xl("canvas");return e.style.display="block",e}const an={};function Oo(e){e in an||(an[e]=!0,console.warn(e))}function nx(e,i,r){return new Promise(function(t,A){function a(){switch(e.clientWaitSync(i,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:A();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:t()}}setTimeout(a,r)})}const on=new er().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sn=new er().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[Ce]:{transfer:Nl,primaries:Rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[hA]:{transfer:Cr,primaries:Rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[vl]:{transfer:Nl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(sn),fromReference:e=>e.applyMatrix3(on)},[Kq]:{transfer:Cr,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(sn),fromReference:e=>e.applyMatrix3(on).convertLinearToSRGB()}},cx=new Set([Ce,vl]),Ur={enabled:!0,_workingColorSpace:Ce,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!cx.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,i,r){if(this.enabled===!1||i===r||!i||!r)return e;const t=ho[i].toReference,A=ho[r].fromReference;return A(t(e))},fromWorkingColorSpace:function(e,i){return this.convert(e,this._workingColorSpace,i)},toWorkingColorSpace:function(e,i){return this.convert(e,i,this._workingColorSpace)},getPrimaries:function(e){return ho[e].primaries},getTransfer:function(e){return e===OA?Nl:ho[e].transfer},getLuminanceCoefficients:function(e,i=this._workingColorSpace){return e.fromArray(ho[i].luminanceCoefficients)}};function va(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function sV(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ka;class ux{static getDataURL(i){if(/^data:/i.test(i.src)||typeof HTMLCanvasElement>"u")return i.src;let r;if(i instanceof HTMLCanvasElement)r=i;else{Ka===void 0&&(Ka=Xl("canvas")),Ka.width=i.width,Ka.height=i.height;const t=Ka.getContext("2d");i instanceof ImageData?t.putImageData(i,0,0):t.drawImage(i,0,0,i.width,i.height),r=Ka}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",i),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(i){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){const r=Xl("canvas");r.width=i.width,r.height=i.height;const t=r.getContext("2d");t.drawImage(i,0,0,i.width,i.height);const A=t.getImageData(0,0,i.width,i.height),a=A.data;for(let o=0;o<a.length;o++)a[o]=va(a[o]/255)*255;return t.putImageData(A,0,0),r}else if(i.data){const r=i.data.slice(0);for(let t=0;t<r.length;t++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[t]=Math.floor(va(r[t]/255)*255):r[t]=va(r[t]);return{data:r,width:i.width,height:i.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),i}}let Wx=0;class nu{constructor(i=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Fs(),this.data=i,this.dataReady=!0,this.version=0}set needsUpdate(i){i===!0&&this.version++}toJSON(i){const r=i===void 0||typeof i=="string";if(!r&&i.images[this.uuid]!==void 0)return i.images[this.uuid];const t={uuid:this.uuid,url:""},A=this.data;if(A!==null){let a;if(Array.isArray(A)){a=[];for(let o=0,s=A.length;o<s;o++)A[o].isDataTexture?a.push(lV(A[o].image)):a.push(lV(A[o]))}else a=lV(A);t.url=a}return r||(i.images[this.uuid]=t),t}}function lV(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ux.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class nt extends Wo{constructor(i=nt.DEFAULT_IMAGE,r=nt.DEFAULT_MAPPING,t=bA,A=bA,a=Ot,o=Pe,s=wt,V=kA,m=nt.DEFAULT_ANISOTROPY,q=OA){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Fs(),this.name="",this.source=new nu(i),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=t,this.wrapT=A,this.magFilter=a,this.minFilter=o,this.anisotropy=m,this.format=s,this.internalFormat=null,this.type=V,this.offset=new qr(0,0),this.repeat=new qr(1,1),this.center=new qr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new er,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=q,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(i=null){this.source.data=i}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(i){return this.name=i.name,this.source=i.source,this.mipmaps=i.mipmaps.slice(0),this.mapping=i.mapping,this.channel=i.channel,this.wrapS=i.wrapS,this.wrapT=i.wrapT,this.magFilter=i.magFilter,this.minFilter=i.minFilter,this.anisotropy=i.anisotropy,this.format=i.format,this.internalFormat=i.internalFormat,this.type=i.type,this.offset.copy(i.offset),this.repeat.copy(i.repeat),this.center.copy(i.center),this.rotation=i.rotation,this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrix.copy(i.matrix),this.generateMipmaps=i.generateMipmaps,this.premultiplyAlpha=i.premultiplyAlpha,this.flipY=i.flipY,this.unpackAlignment=i.unpackAlignment,this.colorSpace=i.colorSpace,this.userData=JSON.parse(JSON.stringify(i.userData)),this.needsUpdate=!0,this}toJSON(i){const r=i===void 0||typeof i=="string";if(!r&&i.textures[this.uuid]!==void 0)return i.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(i).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),r||(i.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(i){if(this.mapping!==$c)return i;if(i.applyMatrix3(this.matrix),i.x<0||i.x>1)switch(this.wrapS){case Am:i.x=i.x-Math.floor(i.x);break;case bA:i.x=i.x<0?0:1;break;case em:Math.abs(Math.floor(i.x)%2)===1?i.x=Math.ceil(i.x)-i.x:i.x=i.x-Math.floor(i.x);break}if(i.y<0||i.y>1)switch(this.wrapT){case Am:i.y=i.y-Math.floor(i.y);break;case bA:i.y=i.y<0?0:1;break;case em:Math.abs(Math.floor(i.y)%2)===1?i.y=Math.ceil(i.y)-i.y:i.y=i.y-Math.floor(i.y);break}return this.flipY&&(i.y=1-i.y),i}set needsUpdate(i){i===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(i){i===!0&&this.pmremVersion++}}nt.DEFAULT_IMAGE=null;nt.DEFAULT_MAPPING=$c;nt.DEFAULT_ANISOTROPY=1;class $r{constructor(i=0,r=0,t=0,A=1){$r.prototype.isVector4=!0,this.x=i,this.y=r,this.z=t,this.w=A}get width(){return this.z}set width(i){this.z=i}get height(){return this.w}set height(i){this.w=i}set(i,r,t,A){return this.x=i,this.y=r,this.z=t,this.w=A,this}setScalar(i){return this.x=i,this.y=i,this.z=i,this.w=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setZ(i){return this.z=i,this}setW(i){return this.w=i,this}setComponent(i,r){switch(i){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(i){return this.x=i.x,this.y=i.y,this.z=i.z,this.w=i.w!==void 0?i.w:1,this}add(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this.w+=i.w,this}addScalar(i){return this.x+=i,this.y+=i,this.z+=i,this.w+=i,this}addVectors(i,r){return this.x=i.x+r.x,this.y=i.y+r.y,this.z=i.z+r.z,this.w=i.w+r.w,this}addScaledVector(i,r){return this.x+=i.x*r,this.y+=i.y*r,this.z+=i.z*r,this.w+=i.w*r,this}sub(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this.w-=i.w,this}subScalar(i){return this.x-=i,this.y-=i,this.z-=i,this.w-=i,this}subVectors(i,r){return this.x=i.x-r.x,this.y=i.y-r.y,this.z=i.z-r.z,this.w=i.w-r.w,this}multiply(i){return this.x*=i.x,this.y*=i.y,this.z*=i.z,this.w*=i.w,this}multiplyScalar(i){return this.x*=i,this.y*=i,this.z*=i,this.w*=i,this}applyMatrix4(i){const r=this.x,t=this.y,A=this.z,a=this.w,o=i.elements;return this.x=o[0]*r+o[4]*t+o[8]*A+o[12]*a,this.y=o[1]*r+o[5]*t+o[9]*A+o[13]*a,this.z=o[2]*r+o[6]*t+o[10]*A+o[14]*a,this.w=o[3]*r+o[7]*t+o[11]*A+o[15]*a,this}divideScalar(i){return this.multiplyScalar(1/i)}setAxisAngleFromQuaternion(i){this.w=2*Math.acos(i.w);const r=Math.sqrt(1-i.w*i.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=i.x/r,this.y=i.y/r,this.z=i.z/r),this}setAxisAngleFromRotationMatrix(i){let r,t,A,a;const V=i.elements,m=V[0],q=V[4],c=V[8],n=V[1],l=V[5],x=V[9],K=V[2],u=V[6],W=V[10];if(Math.abs(q-n)<.01&&Math.abs(c-K)<.01&&Math.abs(x-u)<.01){if(Math.abs(q+n)<.1&&Math.abs(c+K)<.1&&Math.abs(x+u)<.1&&Math.abs(m+l+W-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const h=(m+1)/2,U=(l+1)/2,N=(W+1)/2,w=(q+n)/4,p=(c+K)/4,C=(x+u)/4;return h>U&&h>N?h<.01?(t=0,A=.707106781,a=.707106781):(t=Math.sqrt(h),A=w/t,a=p/t):U>N?U<.01?(t=.707106781,A=0,a=.707106781):(A=Math.sqrt(U),t=w/A,a=C/A):N<.01?(t=.707106781,A=.707106781,a=0):(a=Math.sqrt(N),t=p/a,A=C/a),this.set(t,A,a,r),this}let E=Math.sqrt((u-x)*(u-x)+(c-K)*(c-K)+(n-q)*(n-q));return Math.abs(E)<.001&&(E=1),this.x=(u-x)/E,this.y=(c-K)/E,this.z=(n-q)/E,this.w=Math.acos((m+l+W-1)/2),this}setFromMatrixPosition(i){const r=i.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this.z=Math.min(this.z,i.z),this.w=Math.min(this.w,i.w),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this.z=Math.max(this.z,i.z),this.w=Math.max(this.w,i.w),this}clamp(i,r){return this.x=Math.max(i.x,Math.min(r.x,this.x)),this.y=Math.max(i.y,Math.min(r.y,this.y)),this.z=Math.max(i.z,Math.min(r.z,this.z)),this.w=Math.max(i.w,Math.min(r.w,this.w)),this}clampScalar(i,r){return this.x=Math.max(i,Math.min(r,this.x)),this.y=Math.max(i,Math.min(r,this.y)),this.z=Math.max(i,Math.min(r,this.z)),this.w=Math.max(i,Math.min(r,this.w)),this}clampLength(i,r){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(i,Math.min(r,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z+this.w*i.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,r){return this.x+=(i.x-this.x)*r,this.y+=(i.y-this.y)*r,this.z+=(i.z-this.z)*r,this.w+=(i.w-this.w)*r,this}lerpVectors(i,r,t){return this.x=i.x+(r.x-i.x)*t,this.y=i.y+(r.y-i.y)*t,this.z=i.z+(r.z-i.z)*t,this.w=i.w+(r.w-i.w)*t,this}equals(i){return i.x===this.x&&i.y===this.y&&i.z===this.z&&i.w===this.w}fromArray(i,r=0){return this.x=i[r],this.y=i[r+1],this.z=i[r+2],this.w=i[r+3],this}toArray(i=[],r=0){return i[r]=this.x,i[r+1]=this.y,i[r+2]=this.z,i[r+3]=this.w,i}fromBufferAttribute(i,r){return this.x=i.getX(r),this.y=i.getY(r),this.z=i.getZ(r),this.w=i.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends Wo{constructor(i=1,r=1,t={}){super(),this.isRenderTarget=!0,this.width=i,this.height=r,this.depth=1,this.scissor=new $r(0,0,i,r),this.scissorTest=!1,this.viewport=new $r(0,0,i,r);const A={width:i,height:r,depth:1};t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},t);const a=new nt(A,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace);a.flipY=!1,a.generateMipmaps=t.generateMipmaps,a.internalFormat=t.internalFormat,this.textures=[];const o=t.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}get texture(){return this.textures[0]}set texture(i){this.textures[0]=i}setSize(i,r,t=1){if(this.width!==i||this.height!==r||this.depth!==t){this.width=i,this.height=r,this.depth=t;for(let A=0,a=this.textures.length;A<a;A++)this.textures[A].image.width=i,this.textures[A].image.height=r,this.textures[A].image.depth=t;this.dispose()}this.viewport.set(0,0,i,r),this.scissor.set(0,0,i,r)}clone(){return new this.constructor().copy(this)}copy(i){this.width=i.width,this.height=i.height,this.depth=i.depth,this.scissor.copy(i.scissor),this.scissorTest=i.scissorTest,this.viewport.copy(i.viewport),this.textures.length=0;for(let t=0,A=i.textures.length;t<A;t++)this.textures[t]=i.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;const r=Object.assign({},i.texture.image);return this.texture.source=new nu(r),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,i.depthTexture!==null&&(this.depthTexture=i.depthTexture.clone()),this.samples=i.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pe extends xx{constructor(i=1,r=1,t={}){super(i,r,t),this.isWebGLRenderTarget=!0}}class cu extends nt{constructor(i=null,r=1,t=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:i,width:r,height:t,depth:A},this.magFilter=it,this.minFilter=it,this.wrapR=bA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(i){this.layerUpdates.add(i)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fx extends nt{constructor(i=null,r=1,t=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:i,width:r,height:t,depth:A},this.magFilter=it,this.minFilter=it,this.wrapR=bA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(i=0,r=0,t=0,A=1){this.isQuaternion=!0,this._x=i,this._y=r,this._z=t,this._w=A}static slerpFlat(i,r,t,A,a,o,s){let V=t[A+0],m=t[A+1],q=t[A+2],c=t[A+3];const n=a[o+0],l=a[o+1],x=a[o+2],K=a[o+3];if(s===0){i[r+0]=V,i[r+1]=m,i[r+2]=q,i[r+3]=c;return}if(s===1){i[r+0]=n,i[r+1]=l,i[r+2]=x,i[r+3]=K;return}if(c!==K||V!==n||m!==l||q!==x){let u=1-s;const W=V*n+m*l+q*x+c*K,E=W>=0?1:-1,h=1-W*W;if(h>Number.EPSILON){const N=Math.sqrt(h),w=Math.atan2(N,W*E);u=Math.sin(u*w)/N,s=Math.sin(s*w)/N}const U=s*E;if(V=V*u+n*U,m=m*u+l*U,q=q*u+x*U,c=c*u+K*U,u===1-s){const N=1/Math.sqrt(V*V+m*m+q*q+c*c);V*=N,m*=N,q*=N,c*=N}}i[r]=V,i[r+1]=m,i[r+2]=q,i[r+3]=c}static multiplyQuaternionsFlat(i,r,t,A,a,o){const s=t[A],V=t[A+1],m=t[A+2],q=t[A+3],c=a[o],n=a[o+1],l=a[o+2],x=a[o+3];return i[r]=s*x+q*c+V*l-m*n,i[r+1]=V*x+q*n+m*c-s*l,i[r+2]=m*x+q*l+s*n-V*c,i[r+3]=q*x-s*c-V*n-m*l,i}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get w(){return this._w}set w(i){this._w=i,this._onChangeCallback()}set(i,r,t,A){return this._x=i,this._y=r,this._z=t,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(i){return this._x=i.x,this._y=i.y,this._z=i.z,this._w=i.w,this._onChangeCallback(),this}setFromEuler(i,r=!0){const t=i._x,A=i._y,a=i._z,o=i._order,s=Math.cos,V=Math.sin,m=s(t/2),q=s(A/2),c=s(a/2),n=V(t/2),l=V(A/2),x=V(a/2);switch(o){case"XYZ":this._x=n*q*c+m*l*x,this._y=m*l*c-n*q*x,this._z=m*q*x+n*l*c,this._w=m*q*c-n*l*x;break;case"YXZ":this._x=n*q*c+m*l*x,this._y=m*l*c-n*q*x,this._z=m*q*x-n*l*c,this._w=m*q*c+n*l*x;break;case"ZXY":this._x=n*q*c-m*l*x,this._y=m*l*c+n*q*x,this._z=m*q*x+n*l*c,this._w=m*q*c-n*l*x;break;case"ZYX":this._x=n*q*c-m*l*x,this._y=m*l*c+n*q*x,this._z=m*q*x-n*l*c,this._w=m*q*c+n*l*x;break;case"YZX":this._x=n*q*c+m*l*x,this._y=m*l*c+n*q*x,this._z=m*q*x-n*l*c,this._w=m*q*c-n*l*x;break;case"XZY":this._x=n*q*c-m*l*x,this._y=m*l*c-n*q*x,this._z=m*q*x+n*l*c,this._w=m*q*c+n*l*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(i,r){const t=r/2,A=Math.sin(t);return this._x=i.x*A,this._y=i.y*A,this._z=i.z*A,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(i){const r=i.elements,t=r[0],A=r[4],a=r[8],o=r[1],s=r[5],V=r[9],m=r[2],q=r[6],c=r[10],n=t+s+c;if(n>0){const l=.5/Math.sqrt(n+1);this._w=.25/l,this._x=(q-V)*l,this._y=(a-m)*l,this._z=(o-A)*l}else if(t>s&&t>c){const l=2*Math.sqrt(1+t-s-c);this._w=(q-V)/l,this._x=.25*l,this._y=(A+o)/l,this._z=(a+m)/l}else if(s>c){const l=2*Math.sqrt(1+s-t-c);this._w=(a-m)/l,this._x=(A+o)/l,this._y=.25*l,this._z=(V+q)/l}else{const l=2*Math.sqrt(1+c-t-s);this._w=(o-A)/l,this._x=(a+m)/l,this._y=(V+q)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(i,r){let t=i.dot(r)+1;return t<Number.EPSILON?(t=0,Math.abs(i.x)>Math.abs(i.z)?(this._x=-i.y,this._y=i.x,this._z=0,this._w=t):(this._x=0,this._y=-i.z,this._z=i.y,this._w=t)):(this._x=i.y*r.z-i.z*r.y,this._y=i.z*r.x-i.x*r.z,this._z=i.x*r.y-i.y*r.x,this._w=t),this.normalize()}angleTo(i){return 2*Math.acos(Math.abs(pt(this.dot(i),-1,1)))}rotateTowards(i,r){const t=this.angleTo(i);if(t===0)return this;const A=Math.min(1,r/t);return this.slerp(i,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(i){return this._x*i._x+this._y*i._y+this._z*i._z+this._w*i._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let i=this.length();return i===0?(this._x=0,this._y=0,this._z=0,this._w=1):(i=1/i,this._x=this._x*i,this._y=this._y*i,this._z=this._z*i,this._w=this._w*i),this._onChangeCallback(),this}multiply(i){return this.multiplyQuaternions(this,i)}premultiply(i){return this.multiplyQuaternions(i,this)}multiplyQuaternions(i,r){const t=i._x,A=i._y,a=i._z,o=i._w,s=r._x,V=r._y,m=r._z,q=r._w;return this._x=t*q+o*s+A*m-a*V,this._y=A*q+o*V+a*s-t*m,this._z=a*q+o*m+t*V-A*s,this._w=o*q-t*s-A*V-a*m,this._onChangeCallback(),this}slerp(i,r){if(r===0)return this;if(r===1)return this.copy(i);const t=this._x,A=this._y,a=this._z,o=this._w;let s=o*i._w+t*i._x+A*i._y+a*i._z;if(s<0?(this._w=-i._w,this._x=-i._x,this._y=-i._y,this._z=-i._z,s=-s):this.copy(i),s>=1)return this._w=o,this._x=t,this._y=A,this._z=a,this;const V=1-s*s;if(V<=Number.EPSILON){const l=1-r;return this._w=l*o+r*this._w,this._x=l*t+r*this._x,this._y=l*A+r*this._y,this._z=l*a+r*this._z,this.normalize(),this}const m=Math.sqrt(V),q=Math.atan2(m,s),c=Math.sin((1-r)*q)/m,n=Math.sin(r*q)/m;return this._w=o*c+this._w*n,this._x=t*c+this._x*n,this._y=A*c+this._y*n,this._z=a*c+this._z*n,this._onChangeCallback(),this}slerpQuaternions(i,r,t){return this.copy(i).slerp(r,t)}random(){const i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),t=Math.random(),A=Math.sqrt(1-t),a=Math.sqrt(t);return this.set(A*Math.sin(i),A*Math.cos(i),a*Math.sin(r),a*Math.cos(r))}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._w===this._w}fromArray(i,r=0){return this._x=i[r],this._y=i[r+1],this._z=i[r+2],this._w=i[r+3],this._onChangeCallback(),this}toArray(i=[],r=0){return i[r]=this._x,i[r+1]=this._y,i[r+2]=this._z,i[r+3]=this._w,i}fromBufferAttribute(i,r){return this._x=i.getX(r),this._y=i.getY(r),this._z=i.getZ(r),this._w=i.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(i=0,r=0,t=0){_.prototype.isVector3=!0,this.x=i,this.y=r,this.z=t}set(i,r,t){return t===void 0&&(t=this.z),this.x=i,this.y=r,this.z=t,this}setScalar(i){return this.x=i,this.y=i,this.z=i,this}setX(i){return this.x=i,this}setY(i){return this.y=i,this}setZ(i){return this.z=i,this}setComponent(i,r){switch(i){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+i)}return this}getComponent(i){switch(i){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+i)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(i){return this.x=i.x,this.y=i.y,this.z=i.z,this}add(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this}addScalar(i){return this.x+=i,this.y+=i,this.z+=i,this}addVectors(i,r){return this.x=i.x+r.x,this.y=i.y+r.y,this.z=i.z+r.z,this}addScaledVector(i,r){return this.x+=i.x*r,this.y+=i.y*r,this.z+=i.z*r,this}sub(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this}subScalar(i){return this.x-=i,this.y-=i,this.z-=i,this}subVectors(i,r){return this.x=i.x-r.x,this.y=i.y-r.y,this.z=i.z-r.z,this}multiply(i){return this.x*=i.x,this.y*=i.y,this.z*=i.z,this}multiplyScalar(i){return this.x*=i,this.y*=i,this.z*=i,this}multiplyVectors(i,r){return this.x=i.x*r.x,this.y=i.y*r.y,this.z=i.z*r.z,this}applyEuler(i){return this.applyQuaternion(ln.setFromEuler(i))}applyAxisAngle(i,r){return this.applyQuaternion(ln.setFromAxisAngle(i,r))}applyMatrix3(i){const r=this.x,t=this.y,A=this.z,a=i.elements;return this.x=a[0]*r+a[3]*t+a[6]*A,this.y=a[1]*r+a[4]*t+a[7]*A,this.z=a[2]*r+a[5]*t+a[8]*A,this}applyNormalMatrix(i){return this.applyMatrix3(i).normalize()}applyMatrix4(i){const r=this.x,t=this.y,A=this.z,a=i.elements,o=1/(a[3]*r+a[7]*t+a[11]*A+a[15]);return this.x=(a[0]*r+a[4]*t+a[8]*A+a[12])*o,this.y=(a[1]*r+a[5]*t+a[9]*A+a[13])*o,this.z=(a[2]*r+a[6]*t+a[10]*A+a[14])*o,this}applyQuaternion(i){const r=this.x,t=this.y,A=this.z,a=i.x,o=i.y,s=i.z,V=i.w,m=2*(o*A-s*t),q=2*(s*r-a*A),c=2*(a*t-o*r);return this.x=r+V*m+o*c-s*q,this.y=t+V*q+s*m-a*c,this.z=A+V*c+a*q-o*m,this}project(i){return this.applyMatrix4(i.matrixWorldInverse).applyMatrix4(i.projectionMatrix)}unproject(i){return this.applyMatrix4(i.projectionMatrixInverse).applyMatrix4(i.matrixWorld)}transformDirection(i){const r=this.x,t=this.y,A=this.z,a=i.elements;return this.x=a[0]*r+a[4]*t+a[8]*A,this.y=a[1]*r+a[5]*t+a[9]*A,this.z=a[2]*r+a[6]*t+a[10]*A,this.normalize()}divide(i){return this.x/=i.x,this.y/=i.y,this.z/=i.z,this}divideScalar(i){return this.multiplyScalar(1/i)}min(i){return this.x=Math.min(this.x,i.x),this.y=Math.min(this.y,i.y),this.z=Math.min(this.z,i.z),this}max(i){return this.x=Math.max(this.x,i.x),this.y=Math.max(this.y,i.y),this.z=Math.max(this.z,i.z),this}clamp(i,r){return this.x=Math.max(i.x,Math.min(r.x,this.x)),this.y=Math.max(i.y,Math.min(r.y,this.y)),this.z=Math.max(i.z,Math.min(r.z,this.z)),this}clampScalar(i,r){return this.x=Math.max(i,Math.min(r,this.x)),this.y=Math.max(i,Math.min(r,this.y)),this.z=Math.max(i,Math.min(r,this.z)),this}clampLength(i,r){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(i,Math.min(r,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(i){return this.normalize().multiplyScalar(i)}lerp(i,r){return this.x+=(i.x-this.x)*r,this.y+=(i.y-this.y)*r,this.z+=(i.z-this.z)*r,this}lerpVectors(i,r,t){return this.x=i.x+(r.x-i.x)*t,this.y=i.y+(r.y-i.y)*t,this.z=i.z+(r.z-i.z)*t,this}cross(i){return this.crossVectors(this,i)}crossVectors(i,r){const t=i.x,A=i.y,a=i.z,o=r.x,s=r.y,V=r.z;return this.x=A*V-a*s,this.y=a*o-t*V,this.z=t*s-A*o,this}projectOnVector(i){const r=i.lengthSq();if(r===0)return this.set(0,0,0);const t=i.dot(this)/r;return this.copy(i).multiplyScalar(t)}projectOnPlane(i){return VV.copy(this).projectOnVector(i),this.sub(VV)}reflect(i){return this.sub(VV.copy(i).multiplyScalar(2*this.dot(i)))}angleTo(i){const r=Math.sqrt(this.lengthSq()*i.lengthSq());if(r===0)return Math.PI/2;const t=this.dot(i)/r;return Math.acos(pt(t,-1,1))}distanceTo(i){return Math.sqrt(this.distanceToSquared(i))}distanceToSquared(i){const r=this.x-i.x,t=this.y-i.y,A=this.z-i.z;return r*r+t*t+A*A}manhattanDistanceTo(i){return Math.abs(this.x-i.x)+Math.abs(this.y-i.y)+Math.abs(this.z-i.z)}setFromSpherical(i){return this.setFromSphericalCoords(i.radius,i.phi,i.theta)}setFromSphericalCoords(i,r,t){const A=Math.sin(r)*i;return this.x=A*Math.sin(t),this.y=Math.cos(r)*i,this.z=A*Math.cos(t),this}setFromCylindrical(i){return this.setFromCylindricalCoords(i.radius,i.theta,i.y)}setFromCylindricalCoords(i,r,t){return this.x=i*Math.sin(r),this.y=t,this.z=i*Math.cos(r),this}setFromMatrixPosition(i){const r=i.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(i){const r=this.setFromMatrixColumn(i,0).length(),t=this.setFromMatrixColumn(i,1).length(),A=this.setFromMatrixColumn(i,2).length();return this.x=r,this.y=t,this.z=A,this}setFromMatrixColumn(i,r){return this.fromArray(i.elements,r*4)}setFromMatrix3Column(i,r){return this.fromArray(i.elements,r*3)}setFromEuler(i){return this.x=i._x,this.y=i._y,this.z=i._z,this}setFromColor(i){return this.x=i.r,this.y=i.g,this.z=i.b,this}equals(i){return i.x===this.x&&i.y===this.y&&i.z===this.z}fromArray(i,r=0){return this.x=i[r],this.y=i[r+1],this.z=i[r+2],this}toArray(i=[],r=0){return i[r]=this.x,i[r+1]=this.y,i[r+2]=this.z,i}fromBufferAttribute(i,r){return this.x=i.getX(r),this.y=i.getY(r),this.z=i.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const i=Math.random()*Math.PI*2,r=Math.random()*2-1,t=Math.sqrt(1-r*r);return this.x=t*Math.cos(i),this.y=r,this.z=t*Math.sin(i),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const VV=new _,ln=new hs;class Es{constructor(i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=i,this.max=r}set(i,r){return this.min.copy(i),this.max.copy(r),this}setFromArray(i){this.makeEmpty();for(let r=0,t=i.length;r<t;r+=3)this.expandByPoint(VA.fromArray(i,r));return this}setFromBufferAttribute(i){this.makeEmpty();for(let r=0,t=i.count;r<t;r++)this.expandByPoint(VA.fromBufferAttribute(i,r));return this}setFromPoints(i){this.makeEmpty();for(let r=0,t=i.length;r<t;r++)this.expandByPoint(i[r]);return this}setFromCenterAndSize(i,r){const t=VA.copy(r).multiplyScalar(.5);return this.min.copy(i).sub(t),this.max.copy(i).add(t),this}setFromObject(i,r=!1){return this.makeEmpty(),this.expandByObject(i,r)}clone(){return new this.constructor().copy(this)}copy(i){return this.min.copy(i.min),this.max.copy(i.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(i){return this.isEmpty()?i.set(0,0,0):i.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(i){return this.isEmpty()?i.set(0,0,0):i.subVectors(this.max,this.min)}expandByPoint(i){return this.min.min(i),this.max.max(i),this}expandByVector(i){return this.min.sub(i),this.max.add(i),this}expandByScalar(i){return this.min.addScalar(-i),this.max.addScalar(i),this}expandByObject(i,r=!1){i.updateWorldMatrix(!1,!1);const t=i.geometry;if(t!==void 0){const a=t.getAttribute("position");if(r===!0&&a!==void 0&&i.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)i.isMesh===!0?i.getVertexPosition(o,VA):VA.fromBufferAttribute(a,o),VA.applyMatrix4(i.matrixWorld),this.expandByPoint(VA);else i.boundingBox!==void 0?(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)),ds.applyMatrix4(i.matrixWorld),this.union(ds)}const A=i.children;for(let a=0,o=A.length;a<o;a++)this.expandByObject(A[a],r);return this}containsPoint(i){return i.x>=this.min.x&&i.x<=this.max.x&&i.y>=this.min.y&&i.y<=this.max.y&&i.z>=this.min.z&&i.z<=this.max.z}containsBox(i){return this.min.x<=i.min.x&&i.max.x<=this.max.x&&this.min.y<=i.min.y&&i.max.y<=this.max.y&&this.min.z<=i.min.z&&i.max.z<=this.max.z}getParameter(i,r){return r.set((i.x-this.min.x)/(this.max.x-this.min.x),(i.y-this.min.y)/(this.max.y-this.min.y),(i.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(i){return i.max.x>=this.min.x&&i.min.x<=this.max.x&&i.max.y>=this.min.y&&i.min.y<=this.max.y&&i.max.z>=this.min.z&&i.min.z<=this.max.z}intersectsSphere(i){return this.clampPoint(i.center,VA),VA.distanceToSquared(i.center)<=i.radius*i.radius}intersectsPlane(i){let r,t;return i.normal.x>0?(r=i.normal.x*this.min.x,t=i.normal.x*this.max.x):(r=i.normal.x*this.max.x,t=i.normal.x*this.min.x),i.normal.y>0?(r+=i.normal.y*this.min.y,t+=i.normal.y*this.max.y):(r+=i.normal.y*this.max.y,t+=i.normal.y*this.min.y),i.normal.z>0?(r+=i.normal.z*this.min.z,t+=i.normal.z*this.max.z):(r+=i.normal.z*this.max.z,t+=i.normal.z*this.min.z),r<=-i.constant&&t>=-i.constant}intersectsTriangle(i){if(this.isEmpty())return!1;this.getCenter(Eo),ws.subVectors(this.max,Eo),xa.subVectors(i.a,Eo),Fa.subVectors(i.b,Eo),ha.subVectors(i.c,Eo),te.subVectors(Fa,xa),Ae.subVectors(ha,Fa),Ze.subVectors(xa,ha);let r=[0,-te.z,te.y,0,-Ae.z,Ae.y,0,-Ze.z,Ze.y,te.z,0,-te.x,Ae.z,0,-Ae.x,Ze.z,0,-Ze.x,-te.y,te.x,0,-Ae.y,Ae.x,0,-Ze.y,Ze.x,0];return!mV(r,xa,Fa,ha,ws)||(r=[1,0,0,0,1,0,0,0,1],!mV(r,xa,Fa,ha,ws))?!1:(Ns.crossVectors(te,Ae),r=[Ns.x,Ns.y,Ns.z],mV(r,xa,Fa,ha,ws))}clampPoint(i,r){return r.copy(i).clamp(this.min,this.max)}distanceToPoint(i){return this.clampPoint(i,VA).distanceTo(i)}getBoundingSphere(i){return this.isEmpty()?i.makeEmpty():(this.getCenter(i.center),i.radius=this.getSize(VA).length()*.5),i}intersect(i){return this.min.max(i.min),this.max.min(i.max),this.isEmpty()&&this.makeEmpty(),this}union(i){return this.min.min(i.min),this.max.max(i.max),this}applyMatrix4(i){return this.isEmpty()?this:(XA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(i),XA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(i),XA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(i),XA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(i),XA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(i),XA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(i),XA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(i),XA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(i),this.setFromPoints(XA),this)}translate(i){return this.min.add(i),this.max.add(i),this}equals(i){return i.min.equals(this.min)&&i.max.equals(this.max)}}const XA=[new _,new _,new _,new _,new _,new _,new _,new _],VA=new _,ds=new Es,xa=new _,Fa=new _,ha=new _,te=new _,Ae=new _,Ze=new _,Eo=new _,ws=new _,Ns=new _,Ge=new _;function mV(e,i,r,t,A){for(let a=0,o=e.length-3;a<=o;a+=3){Ge.fromArray(e,a);const s=A.x*Math.abs(Ge.x)+A.y*Math.abs(Ge.y)+A.z*Math.abs(Ge.z),V=i.dot(Ge),m=r.dot(Ge),q=t.dot(Ge);if(Math.max(-Math.max(V,m,q),Math.min(V,m,q))>s)return!1}return!0}const hx=new Es,Mo=new _,qV=new _;class xq{constructor(i=new _,r=-1){this.isSphere=!0,this.center=i,this.radius=r}set(i,r){return this.center.copy(i),this.radius=r,this}setFromPoints(i,r){const t=this.center;r!==void 0?t.copy(r):hx.setFromPoints(i).getCenter(t);let A=0;for(let a=0,o=i.length;a<o;a++)A=Math.max(A,t.distanceToSquared(i[a]));return this.radius=Math.sqrt(A),this}copy(i){return this.center.copy(i.center),this.radius=i.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(i){return i.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(i){return i.distanceTo(this.center)-this.radius}intersectsSphere(i){const r=this.radius+i.radius;return i.center.distanceToSquared(this.center)<=r*r}intersectsBox(i){return i.intersectsSphere(this)}intersectsPlane(i){return Math.abs(i.distanceToPoint(this.center))<=this.radius}clampPoint(i,r){const t=this.center.distanceToSquared(i);return r.copy(i),t>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(i){return this.isEmpty()?(i.makeEmpty(),i):(i.set(this.center,this.center),i.expandByScalar(this.radius),i)}applyMatrix4(i){return this.center.applyMatrix4(i),this.radius=this.radius*i.getMaxScaleOnAxis(),this}translate(i){return this.center.add(i),this}expandByPoint(i){if(this.isEmpty())return this.center.copy(i),this.radius=0,this;Mo.subVectors(i,this.center);const r=Mo.lengthSq();if(r>this.radius*this.radius){const t=Math.sqrt(r),A=(t-this.radius)*.5;this.center.addScaledVector(Mo,A/t),this.radius+=A}return this}union(i){return i.isEmpty()?this:this.isEmpty()?(this.copy(i),this):(this.center.equals(i.center)===!0?this.radius=Math.max(this.radius,i.radius):(qV.subVectors(i.center,this.center).setLength(i.radius),this.expandByPoint(Mo.copy(i.center).add(qV)),this.expandByPoint(Mo.copy(i.center).sub(qV))),this)}equals(i){return i.center.equals(this.center)&&i.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ZA=new _,nV=new _,Rs=new _,ee=new _,cV=new _,Cs=new _,uV=new _;class Ex{constructor(i=new _,r=new _(0,0,-1)){this.origin=i,this.direction=r}set(i,r){return this.origin.copy(i),this.direction.copy(r),this}copy(i){return this.origin.copy(i.origin),this.direction.copy(i.direction),this}at(i,r){return r.copy(this.origin).addScaledVector(this.direction,i)}lookAt(i){return this.direction.copy(i).sub(this.origin).normalize(),this}recast(i){return this.origin.copy(this.at(i,ZA)),this}closestPointToPoint(i,r){r.subVectors(i,this.origin);const t=r.dot(this.direction);return t<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(i){return Math.sqrt(this.distanceSqToPoint(i))}distanceSqToPoint(i){const r=ZA.subVectors(i,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(i):(ZA.copy(this.origin).addScaledVector(this.direction,r),ZA.distanceToSquared(i))}distanceSqToSegment(i,r,t,A){nV.copy(i).add(r).multiplyScalar(.5),Rs.copy(r).sub(i).normalize(),ee.copy(this.origin).sub(nV);const a=i.distanceTo(r)*.5,o=-this.direction.dot(Rs),s=ee.dot(this.direction),V=-ee.dot(Rs),m=ee.lengthSq(),q=Math.abs(1-o*o);let c,n,l,x;if(q>0)if(c=o*V-s,n=o*s-V,x=a*q,c>=0)if(n>=-x)if(n<=x){const K=1/q;c*=K,n*=K,l=c*(c+o*n+2*s)+n*(o*c+n+2*V)+m}else n=a,c=Math.max(0,-(o*n+s)),l=-c*c+n*(n+2*V)+m;else n=-a,c=Math.max(0,-(o*n+s)),l=-c*c+n*(n+2*V)+m;else n<=-x?(c=Math.max(0,-(-o*a+s)),n=c>0?-a:Math.min(Math.max(-a,-V),a),l=-c*c+n*(n+2*V)+m):n<=x?(c=0,n=Math.min(Math.max(-a,-V),a),l=n*(n+2*V)+m):(c=Math.max(0,-(o*a+s)),n=c>0?a:Math.min(Math.max(-a,-V),a),l=-c*c+n*(n+2*V)+m);else n=o>0?-a:a,c=Math.max(0,-(o*n+s)),l=-c*c+n*(n+2*V)+m;return t&&t.copy(this.origin).addScaledVector(this.direction,c),A&&A.copy(nV).addScaledVector(Rs,n),l}intersectSphere(i,r){ZA.subVectors(i.center,this.origin);const t=ZA.dot(this.direction),A=ZA.dot(ZA)-t*t,a=i.radius*i.radius;if(A>a)return null;const o=Math.sqrt(a-A),s=t-o,V=t+o;return V<0?null:s<0?this.at(V,r):this.at(s,r)}intersectsSphere(i){return this.distanceSqToPoint(i.center)<=i.radius*i.radius}distanceToPlane(i){const r=i.normal.dot(this.direction);if(r===0)return i.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(i.normal)+i.constant)/r;return t>=0?t:null}intersectPlane(i,r){const t=this.distanceToPlane(i);return t===null?null:this.at(t,r)}intersectsPlane(i){const r=i.distanceToPoint(this.origin);return r===0||i.normal.dot(this.direction)*r<0}intersectBox(i,r){let t,A,a,o,s,V;const m=1/this.direction.x,q=1/this.direction.y,c=1/this.direction.z,n=this.origin;return m>=0?(t=(i.min.x-n.x)*m,A=(i.max.x-n.x)*m):(t=(i.max.x-n.x)*m,A=(i.min.x-n.x)*m),q>=0?(a=(i.min.y-n.y)*q,o=(i.max.y-n.y)*q):(a=(i.max.y-n.y)*q,o=(i.min.y-n.y)*q),t>o||a>A||((a>t||isNaN(t))&&(t=a),(o<A||isNaN(A))&&(A=o),c>=0?(s=(i.min.z-n.z)*c,V=(i.max.z-n.z)*c):(s=(i.max.z-n.z)*c,V=(i.min.z-n.z)*c),t>V||s>A)||((s>t||t!==t)&&(t=s),(V<A||A!==A)&&(A=V),A<0)?null:this.at(t>=0?t:A,r)}intersectsBox(i){return this.intersectBox(i,ZA)!==null}intersectTriangle(i,r,t,A,a){cV.subVectors(r,i),Cs.subVectors(t,i),uV.crossVectors(cV,Cs);let o=this.direction.dot(uV),s;if(o>0){if(A)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ee.subVectors(this.origin,i);const V=s*this.direction.dot(Cs.crossVectors(ee,Cs));if(V<0)return null;const m=s*this.direction.dot(cV.cross(ee));if(m<0||V+m>o)return null;const q=-s*ee.dot(uV);return q<0?null:this.at(q/o,a)}applyMatrix4(i){return this.origin.applyMatrix4(i),this.direction.transformDirection(i),this}equals(i){return i.origin.equals(this.origin)&&i.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr{constructor(i,r,t,A,a,o,s,V,m,q,c,n,l,x,K,u){Hr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i!==void 0&&this.set(i,r,t,A,a,o,s,V,m,q,c,n,l,x,K,u)}set(i,r,t,A,a,o,s,V,m,q,c,n,l,x,K,u){const W=this.elements;return W[0]=i,W[4]=r,W[8]=t,W[12]=A,W[1]=a,W[5]=o,W[9]=s,W[13]=V,W[2]=m,W[6]=q,W[10]=c,W[14]=n,W[3]=l,W[7]=x,W[11]=K,W[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hr().fromArray(this.elements)}copy(i){const r=this.elements,t=i.elements;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],this}copyPosition(i){const r=this.elements,t=i.elements;return r[12]=t[12],r[13]=t[13],r[14]=t[14],this}setFromMatrix3(i){const r=i.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(i,r,t){return i.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(i,r,t){return this.set(i.x,r.x,t.x,0,i.y,r.y,t.y,0,i.z,r.z,t.z,0,0,0,0,1),this}extractRotation(i){const r=this.elements,t=i.elements,A=1/Ea.setFromMatrixColumn(i,0).length(),a=1/Ea.setFromMatrixColumn(i,1).length(),o=1/Ea.setFromMatrixColumn(i,2).length();return r[0]=t[0]*A,r[1]=t[1]*A,r[2]=t[2]*A,r[3]=0,r[4]=t[4]*a,r[5]=t[5]*a,r[6]=t[6]*a,r[7]=0,r[8]=t[8]*o,r[9]=t[9]*o,r[10]=t[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(i){const r=this.elements,t=i.x,A=i.y,a=i.z,o=Math.cos(t),s=Math.sin(t),V=Math.cos(A),m=Math.sin(A),q=Math.cos(a),c=Math.sin(a);if(i.order==="XYZ"){const n=o*q,l=o*c,x=s*q,K=s*c;r[0]=V*q,r[4]=-V*c,r[8]=m,r[1]=l+x*m,r[5]=n-K*m,r[9]=-s*V,r[2]=K-n*m,r[6]=x+l*m,r[10]=o*V}else if(i.order==="YXZ"){const n=V*q,l=V*c,x=m*q,K=m*c;r[0]=n+K*s,r[4]=x*s-l,r[8]=o*m,r[1]=o*c,r[5]=o*q,r[9]=-s,r[2]=l*s-x,r[6]=K+n*s,r[10]=o*V}else if(i.order==="ZXY"){const n=V*q,l=V*c,x=m*q,K=m*c;r[0]=n-K*s,r[4]=-o*c,r[8]=x+l*s,r[1]=l+x*s,r[5]=o*q,r[9]=K-n*s,r[2]=-o*m,r[6]=s,r[10]=o*V}else if(i.order==="ZYX"){const n=o*q,l=o*c,x=s*q,K=s*c;r[0]=V*q,r[4]=x*m-l,r[8]=n*m+K,r[1]=V*c,r[5]=K*m+n,r[9]=l*m-x,r[2]=-m,r[6]=s*V,r[10]=o*V}else if(i.order==="YZX"){const n=o*V,l=o*m,x=s*V,K=s*m;r[0]=V*q,r[4]=K-n*c,r[8]=x*c+l,r[1]=c,r[5]=o*q,r[9]=-s*q,r[2]=-m*q,r[6]=l*c+x,r[10]=n-K*c}else if(i.order==="XZY"){const n=o*V,l=o*m,x=s*V,K=s*m;r[0]=V*q,r[4]=-c,r[8]=m*q,r[1]=n*c+K,r[5]=o*q,r[9]=l*c-x,r[2]=x*c-l,r[6]=s*q,r[10]=K*c+n}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(i){return this.compose(Mx,i,Ux)}lookAt(i,r,t){const A=this.elements;return zt.subVectors(i,r),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),ae.crossVectors(t,zt),ae.lengthSq()===0&&(Math.abs(t.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),ae.crossVectors(t,zt)),ae.normalize(),Ys.crossVectors(zt,ae),A[0]=ae.x,A[4]=Ys.x,A[8]=zt.x,A[1]=ae.y,A[5]=Ys.y,A[9]=zt.y,A[2]=ae.z,A[6]=Ys.z,A[10]=zt.z,this}multiply(i){return this.multiplyMatrices(this,i)}premultiply(i){return this.multiplyMatrices(i,this)}multiplyMatrices(i,r){const t=i.elements,A=r.elements,a=this.elements,o=t[0],s=t[4],V=t[8],m=t[12],q=t[1],c=t[5],n=t[9],l=t[13],x=t[2],K=t[6],u=t[10],W=t[14],E=t[3],h=t[7],U=t[11],N=t[15],w=A[0],p=A[4],C=A[8],M=A[12],F=A[1],R=A[5],z=A[9],D=A[13],j=A[2],f=A[6],T=A[10],S=A[14],I=A[3],mi=A[7],X=A[11],ai=A[15];return a[0]=o*w+s*F+V*j+m*I,a[4]=o*p+s*R+V*f+m*mi,a[8]=o*C+s*z+V*T+m*X,a[12]=o*M+s*D+V*S+m*ai,a[1]=q*w+c*F+n*j+l*I,a[5]=q*p+c*R+n*f+l*mi,a[9]=q*C+c*z+n*T+l*X,a[13]=q*M+c*D+n*S+l*ai,a[2]=x*w+K*F+u*j+W*I,a[6]=x*p+K*R+u*f+W*mi,a[10]=x*C+K*z+u*T+W*X,a[14]=x*M+K*D+u*S+W*ai,a[3]=E*w+h*F+U*j+N*I,a[7]=E*p+h*R+U*f+N*mi,a[11]=E*C+h*z+U*T+N*X,a[15]=E*M+h*D+U*S+N*ai,this}multiplyScalar(i){const r=this.elements;return r[0]*=i,r[4]*=i,r[8]*=i,r[12]*=i,r[1]*=i,r[5]*=i,r[9]*=i,r[13]*=i,r[2]*=i,r[6]*=i,r[10]*=i,r[14]*=i,r[3]*=i,r[7]*=i,r[11]*=i,r[15]*=i,this}determinant(){const i=this.elements,r=i[0],t=i[4],A=i[8],a=i[12],o=i[1],s=i[5],V=i[9],m=i[13],q=i[2],c=i[6],n=i[10],l=i[14],x=i[3],K=i[7],u=i[11],W=i[15];return x*(+a*V*c-A*m*c-a*s*n+t*m*n+A*s*l-t*V*l)+K*(+r*V*l-r*m*n+a*o*n-A*o*l+A*m*q-a*V*q)+u*(+r*m*c-r*s*l-a*o*c+t*o*l+a*s*q-t*m*q)+W*(-A*s*q-r*V*c+r*s*n+A*o*c-t*o*n+t*V*q)}transpose(){const i=this.elements;let r;return r=i[1],i[1]=i[4],i[4]=r,r=i[2],i[2]=i[8],i[8]=r,r=i[6],i[6]=i[9],i[9]=r,r=i[3],i[3]=i[12],i[12]=r,r=i[7],i[7]=i[13],i[13]=r,r=i[11],i[11]=i[14],i[14]=r,this}setPosition(i,r,t){const A=this.elements;return i.isVector3?(A[12]=i.x,A[13]=i.y,A[14]=i.z):(A[12]=i,A[13]=r,A[14]=t),this}invert(){const i=this.elements,r=i[0],t=i[1],A=i[2],a=i[3],o=i[4],s=i[5],V=i[6],m=i[7],q=i[8],c=i[9],n=i[10],l=i[11],x=i[12],K=i[13],u=i[14],W=i[15],E=c*u*m-K*n*m+K*V*l-s*u*l-c*V*W+s*n*W,h=x*n*m-q*u*m-x*V*l+o*u*l+q*V*W-o*n*W,U=q*K*m-x*c*m+x*s*l-o*K*l-q*s*W+o*c*W,N=x*c*V-q*K*V-x*s*n+o*K*n+q*s*u-o*c*u,w=r*E+t*h+A*U+a*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const p=1/w;return i[0]=E*p,i[1]=(K*n*a-c*u*a-K*A*l+t*u*l+c*A*W-t*n*W)*p,i[2]=(s*u*a-K*V*a+K*A*m-t*u*m-s*A*W+t*V*W)*p,i[3]=(c*V*a-s*n*a-c*A*m+t*n*m+s*A*l-t*V*l)*p,i[4]=h*p,i[5]=(q*u*a-x*n*a+x*A*l-r*u*l-q*A*W+r*n*W)*p,i[6]=(x*V*a-o*u*a-x*A*m+r*u*m+o*A*W-r*V*W)*p,i[7]=(o*n*a-q*V*a+q*A*m-r*n*m-o*A*l+r*V*l)*p,i[8]=U*p,i[9]=(x*c*a-q*K*a-x*t*l+r*K*l+q*t*W-r*c*W)*p,i[10]=(o*K*a-x*s*a+x*t*m-r*K*m-o*t*W+r*s*W)*p,i[11]=(q*s*a-o*c*a-q*t*m+r*c*m+o*t*l-r*s*l)*p,i[12]=N*p,i[13]=(q*K*A-x*c*A+x*t*n-r*K*n-q*t*u+r*c*u)*p,i[14]=(x*s*A-o*K*A-x*t*V+r*K*V+o*t*u-r*s*u)*p,i[15]=(o*c*A-q*s*A+q*t*V-r*c*V-o*t*n+r*s*n)*p,this}scale(i){const r=this.elements,t=i.x,A=i.y,a=i.z;return r[0]*=t,r[4]*=A,r[8]*=a,r[1]*=t,r[5]*=A,r[9]*=a,r[2]*=t,r[6]*=A,r[10]*=a,r[3]*=t,r[7]*=A,r[11]*=a,this}getMaxScaleOnAxis(){const i=this.elements,r=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],t=i[4]*i[4]+i[5]*i[5]+i[6]*i[6],A=i[8]*i[8]+i[9]*i[9]+i[10]*i[10];return Math.sqrt(Math.max(r,t,A))}makeTranslation(i,r,t){return i.isVector3?this.set(1,0,0,i.x,0,1,0,i.y,0,0,1,i.z,0,0,0,1):this.set(1,0,0,i,0,1,0,r,0,0,1,t,0,0,0,1),this}makeRotationX(i){const r=Math.cos(i),t=Math.sin(i);return this.set(1,0,0,0,0,r,-t,0,0,t,r,0,0,0,0,1),this}makeRotationY(i){const r=Math.cos(i),t=Math.sin(i);return this.set(r,0,t,0,0,1,0,0,-t,0,r,0,0,0,0,1),this}makeRotationZ(i){const r=Math.cos(i),t=Math.sin(i);return this.set(r,-t,0,0,t,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(i,r){const t=Math.cos(r),A=Math.sin(r),a=1-t,o=i.x,s=i.y,V=i.z,m=a*o,q=a*s;return this.set(m*o+t,m*s-A*V,m*V+A*s,0,m*s+A*V,q*s+t,q*V-A*o,0,m*V-A*s,q*V+A*o,a*V*V+t,0,0,0,0,1),this}makeScale(i,r,t){return this.set(i,0,0,0,0,r,0,0,0,0,t,0,0,0,0,1),this}makeShear(i,r,t,A,a,o){return this.set(1,t,a,0,i,1,o,0,r,A,1,0,0,0,0,1),this}compose(i,r,t){const A=this.elements,a=r._x,o=r._y,s=r._z,V=r._w,m=a+a,q=o+o,c=s+s,n=a*m,l=a*q,x=a*c,K=o*q,u=o*c,W=s*c,E=V*m,h=V*q,U=V*c,N=t.x,w=t.y,p=t.z;return A[0]=(1-(K+W))*N,A[1]=(l+U)*N,A[2]=(x-h)*N,A[3]=0,A[4]=(l-U)*w,A[5]=(1-(n+W))*w,A[6]=(u+E)*w,A[7]=0,A[8]=(x+h)*p,A[9]=(u-E)*p,A[10]=(1-(n+K))*p,A[11]=0,A[12]=i.x,A[13]=i.y,A[14]=i.z,A[15]=1,this}decompose(i,r,t){const A=this.elements;let a=Ea.set(A[0],A[1],A[2]).length();const o=Ea.set(A[4],A[5],A[6]).length(),s=Ea.set(A[8],A[9],A[10]).length();this.determinant()<0&&(a=-a),i.x=A[12],i.y=A[13],i.z=A[14],mA.copy(this);const m=1/a,q=1/o,c=1/s;return mA.elements[0]*=m,mA.elements[1]*=m,mA.elements[2]*=m,mA.elements[4]*=q,mA.elements[5]*=q,mA.elements[6]*=q,mA.elements[8]*=c,mA.elements[9]*=c,mA.elements[10]*=c,r.setFromRotationMatrix(mA),t.x=a,t.y=o,t.z=s,this}makePerspective(i,r,t,A,a,o,s=IA){const V=this.elements,m=2*a/(r-i),q=2*a/(t-A),c=(r+i)/(r-i),n=(t+A)/(t-A);let l,x;if(s===IA)l=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===Yl)l=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return V[0]=m,V[4]=0,V[8]=c,V[12]=0,V[1]=0,V[5]=q,V[9]=n,V[13]=0,V[2]=0,V[6]=0,V[10]=l,V[14]=x,V[3]=0,V[7]=0,V[11]=-1,V[15]=0,this}makeOrthographic(i,r,t,A,a,o,s=IA){const V=this.elements,m=1/(r-i),q=1/(t-A),c=1/(o-a),n=(r+i)*m,l=(t+A)*q;let x,K;if(s===IA)x=(o+a)*c,K=-2*c;else if(s===Yl)x=a*c,K=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return V[0]=2*m,V[4]=0,V[8]=0,V[12]=-n,V[1]=0,V[5]=2*q,V[9]=0,V[13]=-l,V[2]=0,V[6]=0,V[10]=K,V[14]=-x,V[3]=0,V[7]=0,V[11]=0,V[15]=1,this}equals(i){const r=this.elements,t=i.elements;for(let A=0;A<16;A++)if(r[A]!==t[A])return!1;return!0}fromArray(i,r=0){for(let t=0;t<16;t++)this.elements[t]=i[t+r];return this}toArray(i=[],r=0){const t=this.elements;return i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2],i[r+3]=t[3],i[r+4]=t[4],i[r+5]=t[5],i[r+6]=t[6],i[r+7]=t[7],i[r+8]=t[8],i[r+9]=t[9],i[r+10]=t[10],i[r+11]=t[11],i[r+12]=t[12],i[r+13]=t[13],i[r+14]=t[14],i[r+15]=t[15],i}}const Ea=new _,mA=new Hr,Mx=new _(0,0,0),Ux=new _(1,1,1),ae=new _,Ys=new _,zt=new _,Vn=new Hr,mn=new hs;class _A{constructor(i=0,r=0,t=0,A=_A.DEFAULT_ORDER){this.isEuler=!0,this._x=i,this._y=r,this._z=t,this._order=A}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get order(){return this._order}set order(i){this._order=i,this._onChangeCallback()}set(i,r,t,A=this._order){return this._x=i,this._y=r,this._z=t,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(i){return this._x=i._x,this._y=i._y,this._z=i._z,this._order=i._order,this._onChangeCallback(),this}setFromRotationMatrix(i,r=this._order,t=!0){const A=i.elements,a=A[0],o=A[4],s=A[8],V=A[1],m=A[5],q=A[9],c=A[2],n=A[6],l=A[10];switch(r){case"XYZ":this._y=Math.asin(pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-q,l),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(n,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(q,-1,1)),Math.abs(q)<.9999999?(this._y=Math.atan2(s,l),this._z=Math.atan2(V,m)):(this._y=Math.atan2(-c,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(-c,l),this._z=Math.atan2(-o,m)):(this._y=0,this._z=Math.atan2(V,a));break;case"ZYX":this._y=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(n,l),this._z=Math.atan2(V,a)):(this._x=0,this._z=Math.atan2(-o,m));break;case"YZX":this._z=Math.asin(pt(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(-q,m),this._y=Math.atan2(-c,a)):(this._x=0,this._y=Math.atan2(s,l));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(n,m),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-q,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,t===!0&&this._onChangeCallback(),this}setFromQuaternion(i,r,t){return Vn.makeRotationFromQuaternion(i),this.setFromRotationMatrix(Vn,r,t)}setFromVector3(i,r=this._order){return this.set(i.x,i.y,i.z,r)}reorder(i){return mn.setFromEuler(this),this.setFromQuaternion(mn,i)}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._order===this._order}fromArray(i){return this._x=i[0],this._y=i[1],this._z=i[2],i[3]!==void 0&&(this._order=i[3]),this._onChangeCallback(),this}toArray(i=[],r=0){return i[r]=this._x,i[r+1]=this._y,i[r+2]=this._z,i[r+3]=this._order,i}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_A.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(i){this.mask=(1<<i|0)>>>0}enable(i){this.mask|=1<<i|0}enableAll(){this.mask=-1}toggle(i){this.mask^=1<<i|0}disable(i){this.mask&=~(1<<i|0)}disableAll(){this.mask=0}test(i){return(this.mask&i.mask)!==0}isEnabled(i){return(this.mask&(1<<i|0))!==0}}let Lx=0;const qn=new _,Ma=new hs,GA=new Hr,Xs=new _,Uo=new _,px=new _,dx=new hs,nn=new _(1,0,0),cn=new _(0,1,0),un=new _(0,0,1),Wn={type:"added"},wx={type:"removed"},Ua={type:"childadded",child:null},WV={type:"childremoved",child:null};class ft extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const i=new _,r=new _A,t=new hs,A=new _(1,1,1);function a(){t.setFromEuler(r,!1)}function o(){r.setFromQuaternion(t,void 0,!1)}r._onChange(a),t._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:i},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new Hr},normalMatrix:{value:new er}}),this.matrix=new Hr,this.matrixWorld=new Hr,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(i){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(i),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(i){return this.quaternion.premultiply(i),this}setRotationFromAxisAngle(i,r){this.quaternion.setFromAxisAngle(i,r)}setRotationFromEuler(i){this.quaternion.setFromEuler(i,!0)}setRotationFromMatrix(i){this.quaternion.setFromRotationMatrix(i)}setRotationFromQuaternion(i){this.quaternion.copy(i)}rotateOnAxis(i,r){return Ma.setFromAxisAngle(i,r),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(i,r){return Ma.setFromAxisAngle(i,r),this.quaternion.premultiply(Ma),this}rotateX(i){return this.rotateOnAxis(nn,i)}rotateY(i){return this.rotateOnAxis(cn,i)}rotateZ(i){return this.rotateOnAxis(un,i)}translateOnAxis(i,r){return qn.copy(i).applyQuaternion(this.quaternion),this.position.add(qn.multiplyScalar(r)),this}translateX(i){return this.translateOnAxis(nn,i)}translateY(i){return this.translateOnAxis(cn,i)}translateZ(i){return this.translateOnAxis(un,i)}localToWorld(i){return this.updateWorldMatrix(!0,!1),i.applyMatrix4(this.matrixWorld)}worldToLocal(i){return this.updateWorldMatrix(!0,!1),i.applyMatrix4(GA.copy(this.matrixWorld).invert())}lookAt(i,r,t){i.isVector3?Xs.copy(i):Xs.set(i,r,t);const A=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?GA.lookAt(Uo,Xs,this.up):GA.lookAt(Xs,Uo,this.up),this.quaternion.setFromRotationMatrix(GA),A&&(GA.extractRotation(A.matrixWorld),Ma.setFromRotationMatrix(GA),this.quaternion.premultiply(Ma.invert()))}add(i){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return i===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",i),this):(i&&i.isObject3D?(i.removeFromParent(),i.parent=this,this.children.push(i),i.dispatchEvent(Wn),Ua.child=i,this.dispatchEvent(Ua),Ua.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",i),this)}remove(i){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const r=this.children.indexOf(i);return r!==-1&&(i.parent=null,this.children.splice(r,1),i.dispatchEvent(wx),WV.child=i,this.dispatchEvent(WV),WV.child=null),this}removeFromParent(){const i=this.parent;return i!==null&&i.remove(this),this}clear(){return this.remove(...this.children)}attach(i){return this.updateWorldMatrix(!0,!1),GA.copy(this.matrixWorld).invert(),i.parent!==null&&(i.parent.updateWorldMatrix(!0,!1),GA.multiply(i.parent.matrixWorld)),i.applyMatrix4(GA),i.removeFromParent(),i.parent=this,this.children.push(i),i.updateWorldMatrix(!1,!0),i.dispatchEvent(Wn),Ua.child=i,this.dispatchEvent(Ua),Ua.child=null,this}getObjectById(i){return this.getObjectByProperty("id",i)}getObjectByName(i){return this.getObjectByProperty("name",i)}getObjectByProperty(i,r){if(this[i]===r)return this;for(let t=0,A=this.children.length;t<A;t++){const o=this.children[t].getObjectByProperty(i,r);if(o!==void 0)return o}}getObjectsByProperty(i,r,t=[]){this[i]===r&&t.push(this);const A=this.children;for(let a=0,o=A.length;a<o;a++)A[a].getObjectsByProperty(i,r,t);return t}getWorldPosition(i){return this.updateWorldMatrix(!0,!1),i.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(i){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,i,px),i}getWorldScale(i){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,dx,i),i}getWorldDirection(i){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return i.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(i){i(this);const r=this.children;for(let t=0,A=r.length;t<A;t++)r[t].traverse(i)}traverseVisible(i){if(this.visible===!1)return;i(this);const r=this.children;for(let t=0,A=r.length;t<A;t++)r[t].traverseVisible(i)}traverseAncestors(i){const r=this.parent;r!==null&&(i(r),r.traverseAncestors(i))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(i){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0);const r=this.children;for(let t=0,A=r.length;t<A;t++)r[t].updateMatrixWorld(i)}updateWorldMatrix(i,r){const t=this.parent;if(i===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const A=this.children;for(let a=0,o=A.length;a<o;a++)A[a].updateWorldMatrix(!1,!0)}}toJSON(i){const r=i===void 0||typeof i=="string",t={};r&&(i={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.visibility=this._visibility,A.active=this._active,A.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.geometryCount=this._geometryCount,A.matricesTexture=this._matricesTexture.toJSON(i),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(i)),this.boundingSphere!==null&&(A.boundingSphere={center:A.boundingSphere.center.toArray(),radius:A.boundingSphere.radius}),this.boundingBox!==null&&(A.boundingBox={min:A.boundingBox.min.toArray(),max:A.boundingBox.max.toArray()}));function a(s,V){return s[V.uuid]===void 0&&(s[V.uuid]=V.toJSON(i)),V.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(i).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(i).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=a(i.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const V=s.shapes;if(Array.isArray(V))for(let m=0,q=V.length;m<q;m++){const c=V[m];a(i.shapes,c)}else a(i.shapes,V)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(i.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let V=0,m=this.material.length;V<m;V++)s.push(a(i.materials,this.material[V]));A.material=s}else A.material=a(i.materials,this.material);if(this.children.length>0){A.children=[];for(let s=0;s<this.children.length;s++)A.children.push(this.children[s].toJSON(i).object)}if(this.animations.length>0){A.animations=[];for(let s=0;s<this.animations.length;s++){const V=this.animations[s];A.animations.push(a(i.animations,V))}}if(r){const s=o(i.geometries),V=o(i.materials),m=o(i.textures),q=o(i.images),c=o(i.shapes),n=o(i.skeletons),l=o(i.animations),x=o(i.nodes);s.length>0&&(t.geometries=s),V.length>0&&(t.materials=V),m.length>0&&(t.textures=m),q.length>0&&(t.images=q),c.length>0&&(t.shapes=c),n.length>0&&(t.skeletons=n),l.length>0&&(t.animations=l),x.length>0&&(t.nodes=x)}return t.object=A,t;function o(s){const V=[];for(const m in s){const q=s[m];delete q.metadata,V.push(q)}return V}}clone(i){return new this.constructor().copy(this,i)}copy(i,r=!0){if(this.name=i.name,this.up.copy(i.up),this.position.copy(i.position),this.rotation.order=i.rotation.order,this.quaternion.copy(i.quaternion),this.scale.copy(i.scale),this.matrix.copy(i.matrix),this.matrixWorld.copy(i.matrixWorld),this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrixWorldAutoUpdate=i.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=i.matrixWorldNeedsUpdate,this.layers.mask=i.layers.mask,this.visible=i.visible,this.castShadow=i.castShadow,this.receiveShadow=i.receiveShadow,this.frustumCulled=i.frustumCulled,this.renderOrder=i.renderOrder,this.animations=i.animations.slice(),this.userData=JSON.parse(JSON.stringify(i.userData)),r===!0)for(let t=0;t<i.children.length;t++){const A=i.children[t];this.add(A.clone())}return this}}ft.DEFAULT_UP=new _(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qA=new _,zA=new _,KV=new _,DA=new _,La=new _,pa=new _,Kn=new _,xV=new _,FV=new _,hV=new _;class LA{constructor(i=new _,r=new _,t=new _){this.a=i,this.b=r,this.c=t}static getNormal(i,r,t,A){A.subVectors(t,r),qA.subVectors(i,r),A.cross(qA);const a=A.lengthSq();return a>0?A.multiplyScalar(1/Math.sqrt(a)):A.set(0,0,0)}static getBarycoord(i,r,t,A,a){qA.subVectors(A,r),zA.subVectors(t,r),KV.subVectors(i,r);const o=qA.dot(qA),s=qA.dot(zA),V=qA.dot(KV),m=zA.dot(zA),q=zA.dot(KV),c=o*m-s*s;if(c===0)return a.set(0,0,0),null;const n=1/c,l=(m*V-s*q)*n,x=(o*q-s*V)*n;return a.set(1-l-x,x,l)}static containsPoint(i,r,t,A){return this.getBarycoord(i,r,t,A,DA)===null?!1:DA.x>=0&&DA.y>=0&&DA.x+DA.y<=1}static getInterpolation(i,r,t,A,a,o,s,V){return this.getBarycoord(i,r,t,A,DA)===null?(V.x=0,V.y=0,"z"in V&&(V.z=0),"w"in V&&(V.w=0),null):(V.setScalar(0),V.addScaledVector(a,DA.x),V.addScaledVector(o,DA.y),V.addScaledVector(s,DA.z),V)}static isFrontFacing(i,r,t,A){return qA.subVectors(t,r),zA.subVectors(i,r),qA.cross(zA).dot(A)<0}set(i,r,t){return this.a.copy(i),this.b.copy(r),this.c.copy(t),this}setFromPointsAndIndices(i,r,t,A){return this.a.copy(i[r]),this.b.copy(i[t]),this.c.copy(i[A]),this}setFromAttributeAndIndices(i,r,t,A){return this.a.fromBufferAttribute(i,r),this.b.fromBufferAttribute(i,t),this.c.fromBufferAttribute(i,A),this}clone(){return new this.constructor().copy(this)}copy(i){return this.a.copy(i.a),this.b.copy(i.b),this.c.copy(i.c),this}getArea(){return qA.subVectors(this.c,this.b),zA.subVectors(this.a,this.b),qA.cross(zA).length()*.5}getMidpoint(i){return i.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(i){return LA.getNormal(this.a,this.b,this.c,i)}getPlane(i){return i.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(i,r){return LA.getBarycoord(i,this.a,this.b,this.c,r)}getInterpolation(i,r,t,A,a){return LA.getInterpolation(i,this.a,this.b,this.c,r,t,A,a)}containsPoint(i){return LA.containsPoint(i,this.a,this.b,this.c)}isFrontFacing(i){return LA.isFrontFacing(this.a,this.b,this.c,i)}intersectsBox(i){return i.intersectsTriangle(this)}closestPointToPoint(i,r){const t=this.a,A=this.b,a=this.c;let o,s;La.subVectors(A,t),pa.subVectors(a,t),xV.subVectors(i,t);const V=La.dot(xV),m=pa.dot(xV);if(V<=0&&m<=0)return r.copy(t);FV.subVectors(i,A);const q=La.dot(FV),c=pa.dot(FV);if(q>=0&&c<=q)return r.copy(A);const n=V*c-q*m;if(n<=0&&V>=0&&q<=0)return o=V/(V-q),r.copy(t).addScaledVector(La,o);hV.subVectors(i,a);const l=La.dot(hV),x=pa.dot(hV);if(x>=0&&l<=x)return r.copy(a);const K=l*m-V*x;if(K<=0&&m>=0&&x<=0)return s=m/(m-x),r.copy(t).addScaledVector(pa,s);const u=q*x-l*c;if(u<=0&&c-q>=0&&l-x>=0)return Kn.subVectors(a,A),s=(c-q)/(c-q+(l-x)),r.copy(A).addScaledVector(Kn,s);const W=1/(u+K+n);return o=K*W,s=n*W,r.copy(t).addScaledVector(La,o).addScaledVector(pa,s)}equals(i){return i.a.equals(this.a)&&i.b.equals(this.b)&&i.c.equals(this.c)}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oe={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function EV(e,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(i-e)*6*r:r<1/2?i:r<2/3?e+(i-e)*6*(2/3-r):e}class dr{constructor(i,r,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(i,r,t)}set(i,r,t){if(r===void 0&&t===void 0){const A=i;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(i,r,t);return this}setScalar(i){return this.r=i,this.g=i,this.b=i,this}setHex(i,r=hA){return i=Math.floor(i),this.r=(i>>16&255)/255,this.g=(i>>8&255)/255,this.b=(i&255)/255,Ur.toWorkingColorSpace(this,r),this}setRGB(i,r,t,A=Ur.workingColorSpace){return this.r=i,this.g=r,this.b=t,Ur.toWorkingColorSpace(this,A),this}setHSL(i,r,t,A=Ur.workingColorSpace){if(i=mx(i,1),r=pt(r,0,1),t=pt(t,0,1),r===0)this.r=this.g=this.b=t;else{const a=t<=.5?t*(1+r):t+r-t*r,o=2*t-a;this.r=EV(o,a,i+1/3),this.g=EV(o,a,i),this.b=EV(o,a,i-1/3)}return Ur.toWorkingColorSpace(this,A),this}setStyle(i,r=hA){function t(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+i+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(i)){let a;const o=A[1],s=A[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+i)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(i)){const a=A[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+i)}else if(i&&i.length>0)return this.setColorName(i,r);return this}setColorName(i,r=hA){const t=Wu[i.toLowerCase()];return t!==void 0?this.setHex(t,r):console.warn("THREE.Color: Unknown color "+i),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(i){return this.r=i.r,this.g=i.g,this.b=i.b,this}copySRGBToLinear(i){return this.r=va(i.r),this.g=va(i.g),this.b=va(i.b),this}copyLinearToSRGB(i){return this.r=sV(i.r),this.g=sV(i.g),this.b=sV(i.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(i=hA){return Ur.fromWorkingColorSpace(st.copy(this),i),Math.round(pt(st.r*255,0,255))*65536+Math.round(pt(st.g*255,0,255))*256+Math.round(pt(st.b*255,0,255))}getHexString(i=hA){return("000000"+this.getHex(i).toString(16)).slice(-6)}getHSL(i,r=Ur.workingColorSpace){Ur.fromWorkingColorSpace(st.copy(this),r);const t=st.r,A=st.g,a=st.b,o=Math.max(t,A,a),s=Math.min(t,A,a);let V,m;const q=(s+o)/2;if(s===o)V=0,m=0;else{const c=o-s;switch(m=q<=.5?c/(o+s):c/(2-o-s),o){case t:V=(A-a)/c+(A<a?6:0);break;case A:V=(a-t)/c+2;break;case a:V=(t-A)/c+4;break}V/=6}return i.h=V,i.s=m,i.l=q,i}getRGB(i,r=Ur.workingColorSpace){return Ur.fromWorkingColorSpace(st.copy(this),r),i.r=st.r,i.g=st.g,i.b=st.b,i}getStyle(i=hA){Ur.fromWorkingColorSpace(st.copy(this),i);const r=st.r,t=st.g,A=st.b;return i!==hA?`color(${i} ${r.toFixed(3)} ${t.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(t*255)},${Math.round(A*255)})`}offsetHSL(i,r,t){return this.getHSL(oe),this.setHSL(oe.h+i,oe.s+r,oe.l+t)}add(i){return this.r+=i.r,this.g+=i.g,this.b+=i.b,this}addColors(i,r){return this.r=i.r+r.r,this.g=i.g+r.g,this.b=i.b+r.b,this}addScalar(i){return this.r+=i,this.g+=i,this.b+=i,this}sub(i){return this.r=Math.max(0,this.r-i.r),this.g=Math.max(0,this.g-i.g),this.b=Math.max(0,this.b-i.b),this}multiply(i){return this.r*=i.r,this.g*=i.g,this.b*=i.b,this}multiplyScalar(i){return this.r*=i,this.g*=i,this.b*=i,this}lerp(i,r){return this.r+=(i.r-this.r)*r,this.g+=(i.g-this.g)*r,this.b+=(i.b-this.b)*r,this}lerpColors(i,r,t){return this.r=i.r+(r.r-i.r)*t,this.g=i.g+(r.g-i.g)*t,this.b=i.b+(r.b-i.b)*t,this}lerpHSL(i,r){this.getHSL(oe),i.getHSL(Zs);const t=aV(oe.h,Zs.h,r),A=aV(oe.s,Zs.s,r),a=aV(oe.l,Zs.l,r);return this.setHSL(t,A,a),this}setFromVector3(i){return this.r=i.x,this.g=i.y,this.b=i.z,this}applyMatrix3(i){const r=this.r,t=this.g,A=this.b,a=i.elements;return this.r=a[0]*r+a[3]*t+a[6]*A,this.g=a[1]*r+a[4]*t+a[7]*A,this.b=a[2]*r+a[5]*t+a[8]*A,this}equals(i){return i.r===this.r&&i.g===this.g&&i.b===this.b}fromArray(i,r=0){return this.r=i[r],this.g=i[r+1],this.b=i[r+2],this}toArray(i=[],r=0){return i[r]=this.r,i[r+1]=this.g,i[r+2]=this.b,i}fromBufferAttribute(i,r){return this.r=i.getX(r),this.g=i.getY(r),this.b=i.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const st=new dr;dr.NAMES=Wu;let Nx=0;class Hl extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=ba,this.side=Le,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$V,this.blendDst=im,this.blendEquation=He,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dr(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(i){this._alphaTest>0!=i>0&&this.version++,this._alphaTest=i}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(i){if(i!==void 0)for(const r in i){const t=i[r];if(t===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const A=this[r];if(A===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(t):A&&A.isVector3&&t&&t.isVector3?A.copy(t):this[r]=t}}toJSON(i){const r=i===void 0||typeof i=="string";r&&(i={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(i).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(i).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(i).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(i).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(i).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(i).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(i).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(i).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(i).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(i).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(i).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(i).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(i).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(i).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(i).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(i).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(i).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(i).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(i).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(i).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(i).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(i).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(i).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(i).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(t.blending=this.blending),this.side!==Le&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==$V&&(t.blendSrc=this.blendSrc),this.blendDst!==im&&(t.blendDst=this.blendDst),this.blendEquation!==He&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tn&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function A(a){const o=[];for(const s in a){const V=a[s];delete V.metadata,o.push(V)}return o}if(r){const a=A(i.textures),o=A(i.images);a.length>0&&(t.textures=a),o.length>0&&(t.images=o)}return t}clone(){return new this.constructor().copy(this)}copy(i){this.name=i.name,this.blending=i.blending,this.side=i.side,this.vertexColors=i.vertexColors,this.opacity=i.opacity,this.transparent=i.transparent,this.blendSrc=i.blendSrc,this.blendDst=i.blendDst,this.blendEquation=i.blendEquation,this.blendSrcAlpha=i.blendSrcAlpha,this.blendDstAlpha=i.blendDstAlpha,this.blendEquationAlpha=i.blendEquationAlpha,this.blendColor.copy(i.blendColor),this.blendAlpha=i.blendAlpha,this.depthFunc=i.depthFunc,this.depthTest=i.depthTest,this.depthWrite=i.depthWrite,this.stencilWriteMask=i.stencilWriteMask,this.stencilFunc=i.stencilFunc,this.stencilRef=i.stencilRef,this.stencilFuncMask=i.stencilFuncMask,this.stencilFail=i.stencilFail,this.stencilZFail=i.stencilZFail,this.stencilZPass=i.stencilZPass,this.stencilWrite=i.stencilWrite;const r=i.clippingPlanes;let t=null;if(r!==null){const A=r.length;t=new Array(A);for(let a=0;a!==A;++a)t[a]=r[a].clone()}return this.clippingPlanes=t,this.clipIntersection=i.clipIntersection,this.clipShadows=i.clipShadows,this.shadowSide=i.shadowSide,this.colorWrite=i.colorWrite,this.precision=i.precision,this.polygonOffset=i.polygonOffset,this.polygonOffsetFactor=i.polygonOffsetFactor,this.polygonOffsetUnits=i.polygonOffsetUnits,this.dithering=i.dithering,this.alphaTest=i.alphaTest,this.alphaHash=i.alphaHash,this.alphaToCoverage=i.alphaToCoverage,this.premultipliedAlpha=i.premultipliedAlpha,this.forceSinglePass=i.forceSinglePass,this.visible=i.visible,this.toneMapped=i.toneMapped,this.userData=JSON.parse(JSON.stringify(i.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(i){i===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ku extends Hl{constructor(i){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _A,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(i)}copy(i){return super.copy(i),this.color.copy(i.color),this.map=i.map,this.lightMap=i.lightMap,this.lightMapIntensity=i.lightMapIntensity,this.aoMap=i.aoMap,this.aoMapIntensity=i.aoMapIntensity,this.specularMap=i.specularMap,this.alphaMap=i.alphaMap,this.envMap=i.envMap,this.envMapRotation.copy(i.envMapRotation),this.combine=i.combine,this.reflectivity=i.reflectivity,this.refractionRatio=i.refractionRatio,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.wireframeLinecap=i.wireframeLinecap,this.wireframeLinejoin=i.wireframeLinejoin,this.fog=i.fog,this}}const gr=new _,Gs=new qr;class NA{constructor(i,r,t=!1){if(Array.isArray(i))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=i,this.itemSize=r,this.count=i!==void 0?i.length/r:0,this.normalized=t,this.usage=An,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=WA,this.version=0}onUploadCallback(){}set needsUpdate(i){i===!0&&this.version++}get updateRange(){return Oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(i){return this.usage=i,this}addUpdateRange(i,r){this.updateRanges.push({start:i,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(i){return this.name=i.name,this.array=new i.array.constructor(i.array),this.itemSize=i.itemSize,this.count=i.count,this.normalized=i.normalized,this.usage=i.usage,this.gpuType=i.gpuType,this}copyAt(i,r,t){i*=this.itemSize,t*=r.itemSize;for(let A=0,a=this.itemSize;A<a;A++)this.array[i+A]=r.array[t+A];return this}copyArray(i){return this.array.set(i),this}applyMatrix3(i){if(this.itemSize===2)for(let r=0,t=this.count;r<t;r++)Gs.fromBufferAttribute(this,r),Gs.applyMatrix3(i),this.setXY(r,Gs.x,Gs.y);else if(this.itemSize===3)for(let r=0,t=this.count;r<t;r++)gr.fromBufferAttribute(this,r),gr.applyMatrix3(i),this.setXYZ(r,gr.x,gr.y,gr.z);return this}applyMatrix4(i){for(let r=0,t=this.count;r<t;r++)gr.fromBufferAttribute(this,r),gr.applyMatrix4(i),this.setXYZ(r,gr.x,gr.y,gr.z);return this}applyNormalMatrix(i){for(let r=0,t=this.count;r<t;r++)gr.fromBufferAttribute(this,r),gr.applyNormalMatrix(i),this.setXYZ(r,gr.x,gr.y,gr.z);return this}transformDirection(i){for(let r=0,t=this.count;r<t;r++)gr.fromBufferAttribute(this,r),gr.transformDirection(i),this.setXYZ(r,gr.x,gr.y,gr.z);return this}set(i,r=0){return this.array.set(i,r),this}getComponent(i,r){let t=this.array[i*this.itemSize+r];return this.normalized&&(t=Fo(t,this.array)),t}setComponent(i,r,t){return this.normalized&&(t=Ut(t,this.array)),this.array[i*this.itemSize+r]=t,this}getX(i){let r=this.array[i*this.itemSize];return this.normalized&&(r=Fo(r,this.array)),r}setX(i,r){return this.normalized&&(r=Ut(r,this.array)),this.array[i*this.itemSize]=r,this}getY(i){let r=this.array[i*this.itemSize+1];return this.normalized&&(r=Fo(r,this.array)),r}setY(i,r){return this.normalized&&(r=Ut(r,this.array)),this.array[i*this.itemSize+1]=r,this}getZ(i){let r=this.array[i*this.itemSize+2];return this.normalized&&(r=Fo(r,this.array)),r}setZ(i,r){return this.normalized&&(r=Ut(r,this.array)),this.array[i*this.itemSize+2]=r,this}getW(i){let r=this.array[i*this.itemSize+3];return this.normalized&&(r=Fo(r,this.array)),r}setW(i,r){return this.normalized&&(r=Ut(r,this.array)),this.array[i*this.itemSize+3]=r,this}setXY(i,r,t){return i*=this.itemSize,this.normalized&&(r=Ut(r,this.array),t=Ut(t,this.array)),this.array[i+0]=r,this.array[i+1]=t,this}setXYZ(i,r,t,A){return i*=this.itemSize,this.normalized&&(r=Ut(r,this.array),t=Ut(t,this.array),A=Ut(A,this.array)),this.array[i+0]=r,this.array[i+1]=t,this.array[i+2]=A,this}setXYZW(i,r,t,A,a){return i*=this.itemSize,this.normalized&&(r=Ut(r,this.array),t=Ut(t,this.array),A=Ut(A,this.array),a=Ut(a,this.array)),this.array[i+0]=r,this.array[i+1]=t,this.array[i+2]=A,this.array[i+3]=a,this}onUpload(i){return this.onUploadCallback=i,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const i={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(i.name=this.name),this.usage!==An&&(i.usage=this.usage),i}}class xu extends NA{constructor(i,r,t){super(new Uint16Array(i),r,t)}}class Fu extends NA{constructor(i,r,t){super(new Uint32Array(i),r,t)}}class JA extends NA{constructor(i,r,t){super(new Float32Array(i),r,t)}}let Rx=0;const $t=new Hr,MV=new ft,da=new _,Dt=new Es,Lo=new Es,Pr=new _;class Ye extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(i){return Array.isArray(i)?this.index=new(qu(i)?Fu:xu)(i,1):this.index=i,this}getAttribute(i){return this.attributes[i]}setAttribute(i,r){return this.attributes[i]=r,this}deleteAttribute(i){return delete this.attributes[i],this}hasAttribute(i){return this.attributes[i]!==void 0}addGroup(i,r,t=0){this.groups.push({start:i,count:r,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(i,r){this.drawRange.start=i,this.drawRange.count=r}applyMatrix4(i){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(i),r.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const a=new er().getNormalMatrix(i);t.applyNormalMatrix(a),t.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(i),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(i){return $t.makeRotationFromQuaternion(i),this.applyMatrix4($t),this}rotateX(i){return $t.makeRotationX(i),this.applyMatrix4($t),this}rotateY(i){return $t.makeRotationY(i),this.applyMatrix4($t),this}rotateZ(i){return $t.makeRotationZ(i),this.applyMatrix4($t),this}translate(i,r,t){return $t.makeTranslation(i,r,t),this.applyMatrix4($t),this}scale(i,r,t){return $t.makeScale(i,r,t),this.applyMatrix4($t),this}lookAt(i){return MV.lookAt(i),MV.updateMatrix(),this.applyMatrix4(MV.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(i){const r=[];for(let t=0,A=i.length;t<A;t++){const a=i[t];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new JA(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const i=this.attributes.position,r=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(i!==void 0){if(this.boundingBox.setFromBufferAttribute(i),r)for(let t=0,A=r.length;t<A;t++){const a=r[t];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(Pr.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(Pr),Pr.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(Pr)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xq);const i=this.attributes.position,r=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(i){const t=this.boundingSphere.center;if(Dt.setFromBufferAttribute(i),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];Lo.setFromBufferAttribute(s),this.morphTargetsRelative?(Pr.addVectors(Dt.min,Lo.min),Dt.expandByPoint(Pr),Pr.addVectors(Dt.max,Lo.max),Dt.expandByPoint(Pr)):(Dt.expandByPoint(Lo.min),Dt.expandByPoint(Lo.max))}Dt.getCenter(t);let A=0;for(let a=0,o=i.count;a<o;a++)Pr.fromBufferAttribute(i,a),A=Math.max(A,t.distanceToSquared(Pr));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],V=this.morphTargetsRelative;for(let m=0,q=s.count;m<q;m++)Pr.fromBufferAttribute(s,m),V&&(da.fromBufferAttribute(i,m),Pr.add(da)),A=Math.max(A,t.distanceToSquared(Pr))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const i=this.index,r=this.attributes;if(i===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=r.position,A=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new NA(new Float32Array(4*t.count),4));const o=this.getAttribute("tangent"),s=[],V=[];for(let C=0;C<t.count;C++)s[C]=new _,V[C]=new _;const m=new _,q=new _,c=new _,n=new qr,l=new qr,x=new qr,K=new _,u=new _;function W(C,M,F){m.fromBufferAttribute(t,C),q.fromBufferAttribute(t,M),c.fromBufferAttribute(t,F),n.fromBufferAttribute(a,C),l.fromBufferAttribute(a,M),x.fromBufferAttribute(a,F),q.sub(m),c.sub(m),l.sub(n),x.sub(n);const R=1/(l.x*x.y-x.x*l.y);isFinite(R)&&(K.copy(q).multiplyScalar(x.y).addScaledVector(c,-l.y).multiplyScalar(R),u.copy(c).multiplyScalar(l.x).addScaledVector(q,-x.x).multiplyScalar(R),s[C].add(K),s[M].add(K),s[F].add(K),V[C].add(u),V[M].add(u),V[F].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.count}]);for(let C=0,M=E.length;C<M;++C){const F=E[C],R=F.start,z=F.count;for(let D=R,j=R+z;D<j;D+=3)W(i.getX(D+0),i.getX(D+1),i.getX(D+2))}const h=new _,U=new _,N=new _,w=new _;function p(C){N.fromBufferAttribute(A,C),w.copy(N);const M=s[C];h.copy(M),h.sub(N.multiplyScalar(N.dot(M))).normalize(),U.crossVectors(w,M);const R=U.dot(V[C])<0?-1:1;o.setXYZW(C,h.x,h.y,h.z,R)}for(let C=0,M=E.length;C<M;++C){const F=E[C],R=F.start,z=F.count;for(let D=R,j=R+z;D<j;D+=3)p(i.getX(D+0)),p(i.getX(D+1)),p(i.getX(D+2))}}computeVertexNormals(){const i=this.index,r=this.getAttribute("position");if(r!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new NA(new Float32Array(r.count*3),3),this.setAttribute("normal",t);else for(let n=0,l=t.count;n<l;n++)t.setXYZ(n,0,0,0);const A=new _,a=new _,o=new _,s=new _,V=new _,m=new _,q=new _,c=new _;if(i)for(let n=0,l=i.count;n<l;n+=3){const x=i.getX(n+0),K=i.getX(n+1),u=i.getX(n+2);A.fromBufferAttribute(r,x),a.fromBufferAttribute(r,K),o.fromBufferAttribute(r,u),q.subVectors(o,a),c.subVectors(A,a),q.cross(c),s.fromBufferAttribute(t,x),V.fromBufferAttribute(t,K),m.fromBufferAttribute(t,u),s.add(q),V.add(q),m.add(q),t.setXYZ(x,s.x,s.y,s.z),t.setXYZ(K,V.x,V.y,V.z),t.setXYZ(u,m.x,m.y,m.z)}else for(let n=0,l=r.count;n<l;n+=3)A.fromBufferAttribute(r,n+0),a.fromBufferAttribute(r,n+1),o.fromBufferAttribute(r,n+2),q.subVectors(o,a),c.subVectors(A,a),q.cross(c),t.setXYZ(n+0,q.x,q.y,q.z),t.setXYZ(n+1,q.x,q.y,q.z),t.setXYZ(n+2,q.x,q.y,q.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const i=this.attributes.normal;for(let r=0,t=i.count;r<t;r++)Pr.fromBufferAttribute(i,r),Pr.normalize(),i.setXYZ(r,Pr.x,Pr.y,Pr.z)}toNonIndexed(){function i(s,V){const m=s.array,q=s.itemSize,c=s.normalized,n=new m.constructor(V.length*q);let l=0,x=0;for(let K=0,u=V.length;K<u;K++){s.isInterleavedBufferAttribute?l=V[K]*s.data.stride+s.offset:l=V[K]*q;for(let W=0;W<q;W++)n[x++]=m[l++]}return new NA(n,q,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Ye,t=this.index.array,A=this.attributes;for(const s in A){const V=A[s],m=i(V,t);r.setAttribute(s,m)}const a=this.morphAttributes;for(const s in a){const V=[],m=a[s];for(let q=0,c=m.length;q<c;q++){const n=m[q],l=i(n,t);V.push(l)}r.morphAttributes[s]=V}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,V=o.length;s<V;s++){const m=o[s];r.addGroup(m.start,m.count,m.materialIndex)}return r}toJSON(){const i={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),Object.keys(this.userData).length>0&&(i.userData=this.userData),this.parameters!==void 0){const V=this.parameters;for(const m in V)V[m]!==void 0&&(i[m]=V[m]);return i}i.data={attributes:{}};const r=this.index;r!==null&&(i.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const t=this.attributes;for(const V in t){const m=t[V];i.data.attributes[V]=m.toJSON(i.data)}const A={};let a=!1;for(const V in this.morphAttributes){const m=this.morphAttributes[V],q=[];for(let c=0,n=m.length;c<n;c++){const l=m[c];q.push(l.toJSON(i.data))}q.length>0&&(A[V]=q,a=!0)}a&&(i.data.morphAttributes=A,i.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(i.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(i.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),i}clone(){return new this.constructor().copy(this)}copy(i){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=i.name;const t=i.index;t!==null&&this.setIndex(t.clone(r));const A=i.attributes;for(const m in A){const q=A[m];this.setAttribute(m,q.clone(r))}const a=i.morphAttributes;for(const m in a){const q=[],c=a[m];for(let n=0,l=c.length;n<l;n++)q.push(c[n].clone(r));this.morphAttributes[m]=q}this.morphTargetsRelative=i.morphTargetsRelative;const o=i.groups;for(let m=0,q=o.length;m<q;m++){const c=o[m];this.addGroup(c.start,c.count,c.materialIndex)}const s=i.boundingBox;s!==null&&(this.boundingBox=s.clone());const V=i.boundingSphere;return V!==null&&(this.boundingSphere=V.clone()),this.drawRange.start=i.drawRange.start,this.drawRange.count=i.drawRange.count,this.userData=i.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xn=new Hr,ze=new Ex,zs=new xq,Fn=new _,wa=new _,Na=new _,Ra=new _,UV=new _,Ds=new _,ys=new qr,Qs=new qr,Bs=new qr,hn=new _,En=new _,Mn=new _,gs=new _,Ss=new _;class KA extends ft{constructor(i=new Ye,r=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=i,this.material=r,this.updateMorphTargets()}copy(i,r){return super.copy(i,r),i.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=i.morphTargetInfluences.slice()),i.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},i.morphTargetDictionary)),this.material=Array.isArray(i.material)?i.material.slice():i.material,this.geometry=i.geometry,this}updateMorphTargets(){const r=this.geometry.morphAttributes,t=Object.keys(r);if(t.length>0){const A=r[t[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=A.length;a<o;a++){const s=A[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(i,r){const t=this.geometry,A=t.attributes.position,a=t.morphAttributes.position,o=t.morphTargetsRelative;r.fromBufferAttribute(A,i);const s=this.morphTargetInfluences;if(a&&s){Ds.set(0,0,0);for(let V=0,m=a.length;V<m;V++){const q=s[V],c=a[V];q!==0&&(UV.fromBufferAttribute(c,i),o?Ds.addScaledVector(UV,q):Ds.addScaledVector(UV.sub(r),q))}r.add(Ds)}return r}raycast(i,r){const t=this.geometry,A=this.material,a=this.matrixWorld;A!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere),zs.applyMatrix4(a),ze.copy(i.ray).recast(i.near),!(zs.containsPoint(ze.origin)===!1&&(ze.intersectSphere(zs,Fn)===null||ze.origin.distanceToSquared(Fn)>(i.far-i.near)**2))&&(xn.copy(a).invert(),ze.copy(i.ray).applyMatrix4(xn),!(t.boundingBox!==null&&ze.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(i,r,ze)))}_computeIntersections(i,r,t){let A;const a=this.geometry,o=this.material,s=a.index,V=a.attributes.position,m=a.attributes.uv,q=a.attributes.uv1,c=a.attributes.normal,n=a.groups,l=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,K=n.length;x<K;x++){const u=n[x],W=o[u.materialIndex],E=Math.max(u.start,l.start),h=Math.min(s.count,Math.min(u.start+u.count,l.start+l.count));for(let U=E,N=h;U<N;U+=3){const w=s.getX(U),p=s.getX(U+1),C=s.getX(U+2);A=Ts(this,W,i,t,m,q,c,w,p,C),A&&(A.faceIndex=Math.floor(U/3),A.face.materialIndex=u.materialIndex,r.push(A))}}else{const x=Math.max(0,l.start),K=Math.min(s.count,l.start+l.count);for(let u=x,W=K;u<W;u+=3){const E=s.getX(u),h=s.getX(u+1),U=s.getX(u+2);A=Ts(this,o,i,t,m,q,c,E,h,U),A&&(A.faceIndex=Math.floor(u/3),r.push(A))}}else if(V!==void 0)if(Array.isArray(o))for(let x=0,K=n.length;x<K;x++){const u=n[x],W=o[u.materialIndex],E=Math.max(u.start,l.start),h=Math.min(V.count,Math.min(u.start+u.count,l.start+l.count));for(let U=E,N=h;U<N;U+=3){const w=U,p=U+1,C=U+2;A=Ts(this,W,i,t,m,q,c,w,p,C),A&&(A.faceIndex=Math.floor(U/3),A.face.materialIndex=u.materialIndex,r.push(A))}}else{const x=Math.max(0,l.start),K=Math.min(V.count,l.start+l.count);for(let u=x,W=K;u<W;u+=3){const E=u,h=u+1,U=u+2;A=Ts(this,o,i,t,m,q,c,E,h,U),A&&(A.faceIndex=Math.floor(u/3),r.push(A))}}}}function Cx(e,i,r,t,A,a,o,s){let V;if(i.side===Nt?V=t.intersectTriangle(o,a,A,!0,s):V=t.intersectTriangle(A,a,o,i.side===Le,s),V===null)return null;Ss.copy(s),Ss.applyMatrix4(e.matrixWorld);const m=r.ray.origin.distanceTo(Ss);return m<r.near||m>r.far?null:{distance:m,point:Ss.clone(),object:e}}function Ts(e,i,r,t,A,a,o,s,V,m){e.getVertexPosition(s,wa),e.getVertexPosition(V,Na),e.getVertexPosition(m,Ra);const q=Cx(e,i,r,t,wa,Na,Ra,gs);if(q){A&&(ys.fromBufferAttribute(A,s),Qs.fromBufferAttribute(A,V),Bs.fromBufferAttribute(A,m),q.uv=LA.getInterpolation(gs,wa,Na,Ra,ys,Qs,Bs,new qr)),a&&(ys.fromBufferAttribute(a,s),Qs.fromBufferAttribute(a,V),Bs.fromBufferAttribute(a,m),q.uv1=LA.getInterpolation(gs,wa,Na,Ra,ys,Qs,Bs,new qr)),o&&(hn.fromBufferAttribute(o,s),En.fromBufferAttribute(o,V),Mn.fromBufferAttribute(o,m),q.normal=LA.getInterpolation(gs,wa,Na,Ra,hn,En,Mn,new _),q.normal.dot(t.direction)>0&&q.normal.multiplyScalar(-1));const c={a:s,b:V,c:m,normal:new _,materialIndex:0};LA.getNormal(wa,Na,Ra,c.normal),q.face=c}return q}class Ms extends Ye{constructor(i=1,r=1,t=1,A=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:i,height:r,depth:t,widthSegments:A,heightSegments:a,depthSegments:o};const s=this;A=Math.floor(A),a=Math.floor(a),o=Math.floor(o);const V=[],m=[],q=[],c=[];let n=0,l=0;x("z","y","x",-1,-1,t,r,i,o,a,0),x("z","y","x",1,-1,t,r,-i,o,a,1),x("x","z","y",1,1,i,t,r,A,o,2),x("x","z","y",1,-1,i,t,-r,A,o,3),x("x","y","z",1,-1,i,r,t,A,a,4),x("x","y","z",-1,-1,i,r,-t,A,a,5),this.setIndex(V),this.setAttribute("position",new JA(m,3)),this.setAttribute("normal",new JA(q,3)),this.setAttribute("uv",new JA(c,2));function x(K,u,W,E,h,U,N,w,p,C,M){const F=U/p,R=N/C,z=U/2,D=N/2,j=w/2,f=p+1,T=C+1;let S=0,I=0;const mi=new _;for(let X=0;X<T;X++){const ai=X*R-D;for(let Ni=0;Ni<f;Ni++){const Si=Ni*F-z;mi[K]=Si*E,mi[u]=ai*h,mi[W]=j,m.push(mi.x,mi.y,mi.z),mi[K]=0,mi[u]=0,mi[W]=w>0?1:-1,q.push(mi.x,mi.y,mi.z),c.push(Ni/p),c.push(1-X/C),S+=1}}for(let X=0;X<C;X++)for(let ai=0;ai<p;ai++){const Ni=n+ai+f*X,Si=n+ai+f*(X+1),J=n+(ai+1)+f*(X+1),oi=n+(ai+1)+f*X;V.push(Ni,Si,oi),V.push(Si,J,oi),I+=6}s.addGroup(l,I,M),l+=I,n+=S}}copy(i){return super.copy(i),this.parameters=Object.assign({},i.parameters),this}static fromJSON(i){return new Ms(i.width,i.height,i.depth,i.widthSegments,i.heightSegments,i.depthSegments)}}function so(e){const i={};for(const r in e){i[r]={};for(const t in e[r]){const A=e[r][t];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),i[r][t]=null):i[r][t]=A.clone():Array.isArray(A)?i[r][t]=A.slice():i[r][t]=A}}return i}function xt(e){const i={};for(let r=0;r<e.length;r++){const t=so(e[r]);for(const A in t)i[A]=t[A]}return i}function Yx(e){const i=[];for(let r=0;r<e.length;r++)i.push(e[r].clone());return i}function hu(e){const i=e.getRenderTarget();return i===null?e.outputColorSpace:i.isXRRenderTarget===!0?i.texture.colorSpace:Ur.workingColorSpace}const Xx={clone:so,merge:xt};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class CA extends Hl{constructor(i){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,i!==void 0&&this.setValues(i)}copy(i){return super.copy(i),this.fragmentShader=i.fragmentShader,this.vertexShader=i.vertexShader,this.uniforms=so(i.uniforms),this.uniformsGroups=Yx(i.uniformsGroups),this.defines=Object.assign({},i.defines),this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.fog=i.fog,this.lights=i.lights,this.clipping=i.clipping,this.extensions=Object.assign({},i.extensions),this.glslVersion=i.glslVersion,this}toJSON(i){const r=super.toJSON(i);r.glslVersion=this.glslVersion,r.uniforms={};for(const A in this.uniforms){const o=this.uniforms[A].value;o&&o.isTexture?r.uniforms[A]={type:"t",value:o.toJSON(i).uuid}:o&&o.isColor?r.uniforms[A]={type:"c",value:o.getHex()}:o&&o.isVector2?r.uniforms[A]={type:"v2",value:o.toArray()}:o&&o.isVector3?r.uniforms[A]={type:"v3",value:o.toArray()}:o&&o.isVector4?r.uniforms[A]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?r.uniforms[A]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?r.uniforms[A]={type:"m4",value:o.toArray()}:r.uniforms[A]={value:o}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const t={};for(const A in this.extensions)this.extensions[A]===!0&&(t[A]=!0);return Object.keys(t).length>0&&(r.extensions=t),r}}class Eu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Hr,this.projectionMatrix=new Hr,this.projectionMatrixInverse=new Hr,this.coordinateSystem=IA}copy(i,r){return super.copy(i,r),this.matrixWorldInverse.copy(i.matrixWorldInverse),this.projectionMatrix.copy(i.projectionMatrix),this.projectionMatrixInverse.copy(i.projectionMatrixInverse),this.coordinateSystem=i.coordinateSystem,this}getWorldDirection(i){return super.getWorldDirection(i).negate()}updateMatrixWorld(i){super.updateMatrixWorld(i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(i,r){super.updateWorldMatrix(i,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const se=new _,Un=new qr,Ln=new qr;class cA extends Eu{constructor(i=50,r=1,t=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=i,this.zoom=1,this.near=t,this.far=A,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(i,r){return super.copy(i,r),this.fov=i.fov,this.zoom=i.zoom,this.near=i.near,this.far=i.far,this.focus=i.focus,this.aspect=i.aspect,this.view=i.view===null?null:Object.assign({},i.view),this.filmGauge=i.filmGauge,this.filmOffset=i.filmOffset,this}setFocalLength(i){const r=.5*this.getFilmHeight()/i;this.fov=Xm*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const i=Math.tan(eV*.5*this.fov);return .5*this.getFilmHeight()/i}getEffectiveFOV(){return Xm*2*Math.atan(Math.tan(eV*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(i,r,t){se.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(se.x,se.y).multiplyScalar(-i/se.z),se.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(se.x,se.y).multiplyScalar(-i/se.z)}getViewSize(i,r){return this.getViewBounds(i,Un,Ln),r.subVectors(Ln,Un)}setViewOffset(i,r,t,A,a,o){this.aspect=i/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=r,this.view.offsetX=t,this.view.offsetY=A,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let r=i*Math.tan(eV*.5*this.fov)/this.zoom,t=2*r,A=this.aspect*t,a=-.5*A;const o=this.view;if(this.view!==null&&this.view.enabled){const V=o.fullWidth,m=o.fullHeight;a+=o.offsetX*A/V,r-=o.offsetY*t/m,A*=o.width/V,t*=o.height/m}const s=this.filmOffset;s!==0&&(a+=i*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+A,r,r-t,i,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(i){const r=super.toJSON(i);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Ca=-90,Ya=1;class zx extends ft{constructor(i,r,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new cA(Ca,Ya,i,r);A.layers=this.layers,this.add(A);const a=new cA(Ca,Ya,i,r);a.layers=this.layers,this.add(a);const o=new cA(Ca,Ya,i,r);o.layers=this.layers,this.add(o);const s=new cA(Ca,Ya,i,r);s.layers=this.layers,this.add(s);const V=new cA(Ca,Ya,i,r);V.layers=this.layers,this.add(V);const m=new cA(Ca,Ya,i,r);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const i=this.coordinateSystem,r=this.children.concat(),[t,A,a,o,s,V]=r;for(const m of r)this.remove(m);if(i===IA)t.up.set(0,1,0),t.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),V.up.set(0,1,0),V.lookAt(0,0,-1);else if(i===Yl)t.up.set(0,-1,0),t.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),V.up.set(0,-1,0),V.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+i);for(const m of r)this.add(m),m.updateMatrixWorld()}update(i,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:A}=this;this.coordinateSystem!==i.coordinateSystem&&(this.coordinateSystem=i.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,V,m,q]=this.children,c=i.getRenderTarget(),n=i.getActiveCubeFace(),l=i.getActiveMipmapLevel(),x=i.xr.enabled;i.xr.enabled=!1;const K=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,i.setRenderTarget(t,0,A),i.render(r,a),i.setRenderTarget(t,1,A),i.render(r,o),i.setRenderTarget(t,2,A),i.render(r,s),i.setRenderTarget(t,3,A),i.render(r,V),i.setRenderTarget(t,4,A),i.render(r,m),t.texture.generateMipmaps=K,i.setRenderTarget(t,5,A),i.render(r,q),i.setRenderTarget(c,n,l),i.xr.enabled=x,t.texture.needsPMREMUpdate=!0}}class Mu extends nt{constructor(i,r,t,A,a,o,s,V,m,q){i=i!==void 0?i:[],r=r!==void 0?r:Ao,super(i,r,t,A,a,o,s,V,m,q),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(i){this.image=i}}class Dx extends pe{constructor(i=1,r={}){super(i,i,r),this.isWebGLCubeRenderTarget=!0;const t={width:i,height:i,depth:1},A=[t,t,t,t,t,t];this.texture=new Mu(A,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Ot}fromEquirectangularTexture(i,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},A=new Ms(5,5,5),a=new CA({name:"CubemapFromEquirect",uniforms:so(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Nt,blending:Fe});a.uniforms.tEquirect.value=r;const o=new KA(A,a),s=r.minFilter;return r.minFilter===Pe&&(r.minFilter=Ot),new zx(1,10,this).update(i,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(i,r,t,A){const a=i.getRenderTarget();for(let o=0;o<6;o++)i.setRenderTarget(this,o),i.clear(r,t,A);i.setRenderTarget(a)}}const LV=new _,yx=new _,Qx=new er;class Oe{constructor(i=new _(1,0,0),r=0){this.isPlane=!0,this.normal=i,this.constant=r}set(i,r){return this.normal.copy(i),this.constant=r,this}setComponents(i,r,t,A){return this.normal.set(i,r,t),this.constant=A,this}setFromNormalAndCoplanarPoint(i,r){return this.normal.copy(i),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(i,r,t){const A=LV.subVectors(t,r).cross(yx.subVectors(i,r)).normalize();return this.setFromNormalAndCoplanarPoint(A,i),this}copy(i){return this.normal.copy(i.normal),this.constant=i.constant,this}normalize(){const i=1/this.normal.length();return this.normal.multiplyScalar(i),this.constant*=i,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(i){return this.normal.dot(i)+this.constant}distanceToSphere(i){return this.distanceToPoint(i.center)-i.radius}projectPoint(i,r){return r.copy(i).addScaledVector(this.normal,-this.distanceToPoint(i))}intersectLine(i,r){const t=i.delta(LV),A=this.normal.dot(t);if(A===0)return this.distanceToPoint(i.start)===0?r.copy(i.start):null;const a=-(i.start.dot(this.normal)+this.constant)/A;return a<0||a>1?null:r.copy(i.start).addScaledVector(t,a)}intersectsLine(i){const r=this.distanceToPoint(i.start),t=this.distanceToPoint(i.end);return r<0&&t>0||t<0&&r>0}intersectsBox(i){return i.intersectsPlane(this)}intersectsSphere(i){return i.intersectsPlane(this)}coplanarPoint(i){return i.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(i,r){const t=r||Qx.getNormalMatrix(i),A=this.coplanarPoint(LV).applyMatrix4(i),a=this.normal.applyMatrix3(t).normalize();return this.constant=-A.dot(a),this}translate(i){return this.constant-=i.dot(this.normal),this}equals(i){return i.normal.equals(this.normal)&&i.constant===this.constant}clone(){return new this.constructor().copy(this)}}const De=new xq,Os=new _;class Uu{constructor(i=new Oe,r=new Oe,t=new Oe,A=new Oe,a=new Oe,o=new Oe){this.planes=[i,r,t,A,a,o]}set(i,r,t,A,a,o){const s=this.planes;return s[0].copy(i),s[1].copy(r),s[2].copy(t),s[3].copy(A),s[4].copy(a),s[5].copy(o),this}copy(i){const r=this.planes;for(let t=0;t<6;t++)r[t].copy(i.planes[t]);return this}setFromProjectionMatrix(i,r=IA){const t=this.planes,A=i.elements,a=A[0],o=A[1],s=A[2],V=A[3],m=A[4],q=A[5],c=A[6],n=A[7],l=A[8],x=A[9],K=A[10],u=A[11],W=A[12],E=A[13],h=A[14],U=A[15];if(t[0].setComponents(V-a,n-m,u-l,U-W).normalize(),t[1].setComponents(V+a,n+m,u+l,U+W).normalize(),t[2].setComponents(V+o,n+q,u+x,U+E).normalize(),t[3].setComponents(V-o,n-q,u-x,U-E).normalize(),t[4].setComponents(V-s,n-c,u-K,U-h).normalize(),r===IA)t[5].setComponents(V+s,n+c,u+K,U+h).normalize();else if(r===Yl)t[5].setComponents(s,c,K,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(i){if(i.boundingSphere!==void 0)i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere).applyMatrix4(i.matrixWorld);else{const r=i.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),De.copy(r.boundingSphere).applyMatrix4(i.matrixWorld)}return this.intersectsSphere(De)}intersectsSprite(i){return De.center.set(0,0,0),De.radius=.7071067811865476,De.applyMatrix4(i.matrixWorld),this.intersectsSphere(De)}intersectsSphere(i){const r=this.planes,t=i.center,A=-i.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(t)<A)return!1;return!0}intersectsBox(i){const r=this.planes;for(let t=0;t<6;t++){const A=r[t];if(Os.x=A.normal.x>0?i.max.x:i.min.x,Os.y=A.normal.y>0?i.max.y:i.min.y,Os.z=A.normal.z>0?i.max.z:i.min.z,A.distanceToPoint(Os)<0)return!1}return!0}containsPoint(i){const r=this.planes;for(let t=0;t<6;t++)if(r[t].distanceToPoint(i)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lu(){let e=null,i=!1,r=null,t=null;function A(a,o){r(a,o),t=e.requestAnimationFrame(A)}return{start:function(){i!==!0&&r!==null&&(t=e.requestAnimationFrame(A),i=!0)},stop:function(){e.cancelAnimationFrame(t),i=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function Bx(e){const i=new WeakMap;function r(s,V){const m=s.array,q=s.usage,c=m.byteLength,n=e.createBuffer();e.bindBuffer(V,n),e.bufferData(V,m,q),s.onUploadCallback();let l;if(m instanceof Float32Array)l=e.FLOAT;else if(m instanceof Uint16Array)s.isFloat16BufferAttribute?l=e.HALF_FLOAT:l=e.UNSIGNED_SHORT;else if(m instanceof Int16Array)l=e.SHORT;else if(m instanceof Uint32Array)l=e.UNSIGNED_INT;else if(m instanceof Int32Array)l=e.INT;else if(m instanceof Int8Array)l=e.BYTE;else if(m instanceof Uint8Array)l=e.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)l=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:n,type:l,bytesPerElement:m.BYTES_PER_ELEMENT,version:s.version,size:c}}function t(s,V,m){const q=V.array,c=V._updateRange,n=V.updateRanges;if(e.bindBuffer(m,s),c.count===-1&&n.length===0&&e.bufferSubData(m,0,q),n.length!==0){for(let l=0,x=n.length;l<x;l++){const K=n[l];e.bufferSubData(m,K.start*q.BYTES_PER_ELEMENT,q,K.start,K.count)}V.clearUpdateRanges()}c.count!==-1&&(e.bufferSubData(m,c.offset*q.BYTES_PER_ELEMENT,q,c.offset,c.count),c.count=-1),V.onUploadCallback()}function A(s){return s.isInterleavedBufferAttribute&&(s=s.data),i.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const V=i.get(s);V&&(e.deleteBuffer(V.buffer),i.delete(s))}function o(s,V){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const q=i.get(s);(!q||q.version<s.version)&&i.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const m=i.get(s);if(m===void 0)i.set(s,r(s,V));else if(m.version<s.version){if(m.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");t(m.buffer,s,V),m.version=s.version}}return{get:A,remove:a,update:o}}class Us extends Ye{constructor(i=1,r=1,t=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:i,height:r,widthSegments:t,heightSegments:A};const a=i/2,o=r/2,s=Math.floor(t),V=Math.floor(A),m=s+1,q=V+1,c=i/s,n=r/V,l=[],x=[],K=[],u=[];for(let W=0;W<q;W++){const E=W*n-o;for(let h=0;h<m;h++){const U=h*c-a;x.push(U,-E,0),K.push(0,0,1),u.push(h/s),u.push(1-W/V)}}for(let W=0;W<V;W++)for(let E=0;E<s;E++){const h=E+m*W,U=E+m*(W+1),N=E+1+m*(W+1),w=E+1+m*W;l.push(h,U,w),l.push(U,N,w)}this.setIndex(l),this.setAttribute("position",new JA(x,3)),this.setAttribute("normal",new JA(K,3)),this.setAttribute("uv",new JA(u,2))}copy(i){return super.copy(i),this.parameters=Object.assign({},i.parameters),this}static fromJSON(i){return new Us(i.width,i.height,i.widthSegments,i.heightSegments)}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WF="gl_FragColor = linearToOutputTexel( gl_FragColor );",KF=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CF=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YF=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GF=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DF=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QF=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BF=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TF=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OF=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jF=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bF=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fF=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_F=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$F=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ih=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ah=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ph=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ih=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ar={alphahash_fragment:gx,alphahash_pars_fragment:Sx,alphamap_fragment:Tx,alphamap_pars_fragment:Ox,alphatest_fragment:jx,alphatest_pars_fragment:bx,aomap_fragment:Ix,aomap_pars_fragment:vx,batching_pars_vertex:Hx,batching_vertex:fx,begin_vertex:Jx,beginnormal_vertex:Px,bsdfs:kx,iridescence_fragment:_x,bumpmap_pars_fragment:$x,clipping_planes_fragment:iF,clipping_planes_pars_fragment:rF,clipping_planes_pars_vertex:tF,clipping_planes_vertex:AF,color_fragment:eF,color_pars_fragment:aF,color_pars_vertex:oF,color_vertex:sF,common:lF,cube_uv_reflection_fragment:VF,defaultnormal_vertex:mF,displacementmap_pars_vertex:qF,displacementmap_vertex:nF,emissivemap_fragment:cF,emissivemap_pars_fragment:uF,colorspace_fragment:WF,colorspace_pars_fragment:KF,envmap_fragment:xF,envmap_common_pars_fragment:FF,envmap_pars_fragment:hF,envmap_pars_vertex:EF,envmap_physical_pars_fragment:XF,envmap_vertex:MF,fog_vertex:UF,fog_pars_vertex:LF,fog_fragment:pF,fog_pars_fragment:dF,gradientmap_pars_fragment:wF,lightmap_pars_fragment:NF,lights_lambert_fragment:RF,lights_lambert_pars_fragment:CF,lights_pars_begin:YF,lights_toon_fragment:ZF,lights_toon_pars_fragment:GF,lights_phong_fragment:zF,lights_phong_pars_fragment:DF,lights_physical_fragment:yF,lights_physical_pars_fragment:QF,lights_fragment_begin:BF,lights_fragment_maps:gF,lights_fragment_end:SF,logdepthbuf_fragment:TF,logdepthbuf_pars_fragment:OF,logdepthbuf_pars_vertex:jF,logdepthbuf_vertex:bF,map_fragment:IF,map_pars_fragment:vF,map_particle_fragment:HF,map_particle_pars_fragment:fF,metalnessmap_fragment:JF,metalnessmap_pars_fragment:PF,morphinstance_vertex:kF,morphcolor_vertex:_F,morphnormal_vertex:$F,morphtarget_pars_vertex:ih,morphtarget_vertex:rh,normal_fragment_begin:th,normal_fragment_maps:Ah,normal_pars_fragment:eh,normal_pars_vertex:ah,normal_vertex:oh,normalmap_pars_fragment:sh,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:Vh,clearcoat_pars_fragment:mh,iridescence_pars_fragment:qh,opaque_fragment:nh,packing:ch,premultiplied_alpha_fragment:uh,project_vertex:Wh,dithering_fragment:Kh,dithering_pars_fragment:xh,roughnessmap_fragment:Fh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:Eh,shadowmap_pars_vertex:Mh,shadowmap_vertex:Uh,shadowmask_pars_fragment:Lh,skinbase_vertex:ph,skinning_pars_vertex:dh,skinning_vertex:wh,skinnormal_vertex:Nh,specularmap_fragment:Rh,specularmap_pars_fragment:Ch,tonemapping_fragment:Yh,tonemapping_pars_fragment:Xh,transmission_fragment:Zh,transmission_pars_fragment:Gh,uv_pars_fragment:zh,uv_pars_vertex:Dh,uv_vertex:yh,worldpos_vertex:Qh,background_vert:Bh,background_frag:gh,backgroundCube_vert:Sh,backgroundCube_frag:Th,cube_vert:Oh,cube_frag:jh,depth_vert:bh,depth_frag:Ih,distanceRGBA_vert:vh,distanceRGBA_frag:Hh,equirect_vert:fh,equirect_frag:Jh,linedashed_vert:Ph,linedashed_frag:kh,meshbasic_vert:_h,meshbasic_frag:$h,meshlambert_vert:iE,meshlambert_frag:rE,meshmatcap_vert:tE,meshmatcap_frag:AE,meshnormal_vert:eE,meshnormal_frag:aE,meshphong_vert:oE,meshphong_frag:sE,meshphysical_vert:lE,meshphysical_frag:VE,meshtoon_vert:mE,meshtoon_frag:qE,points_vert:nE,points_frag:cE,shadow_vert:uE,shadow_frag:WE,sprite_vert:KE,sprite_frag:xE},wi={common:{diffuse:{value:new dr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new er},alphaMap:{value:null},alphaMapTransform:{value:new er},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new er}},envmap:{envMap:{value:null},envMapRotation:{value:new er},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new er}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new er}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new er},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new er},normalScale:{value:new qr(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new er},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new er}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new er}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new er}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new er},alphaTest:{value:0},uvTransform:{value:new er}},sprite:{diffuse:{value:new dr(16777215)},opacity:{value:1},center:{value:new qr(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new er},alphaMap:{value:null},alphaMapTransform:{value:new er},alphaTest:{value:0}}},UA={basic:{uniforms:xt([wi.common,wi.specularmap,wi.envmap,wi.aomap,wi.lightmap,wi.fog]),vertexShader:Ar.meshbasic_vert,fragmentShader:Ar.meshbasic_frag},lambert:{uniforms:xt([wi.common,wi.specularmap,wi.envmap,wi.aomap,wi.lightmap,wi.emissivemap,wi.bumpmap,wi.normalmap,wi.displacementmap,wi.fog,wi.lights,{emissive:{value:new dr(0)}}]),vertexShader:Ar.meshlambert_vert,fragmentShader:Ar.meshlambert_frag},phong:{uniforms:xt([wi.common,wi.specularmap,wi.envmap,wi.aomap,wi.lightmap,wi.emissivemap,wi.bumpmap,wi.normalmap,wi.displacementmap,wi.fog,wi.lights,{emissive:{value:new dr(0)},specular:{value:new dr(1118481)},shininess:{value:30}}]),vertexShader:Ar.meshphong_vert,fragmentShader:Ar.meshphong_frag},standard:{uniforms:xt([wi.common,wi.envmap,wi.aomap,wi.lightmap,wi.emissivemap,wi.bumpmap,wi.normalmap,wi.displacementmap,wi.roughnessmap,wi.metalnessmap,wi.fog,wi.lights,{emissive:{value:new dr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ar.meshphysical_vert,fragmentShader:Ar.meshphysical_frag},toon:{uniforms:xt([wi.common,wi.aomap,wi.lightmap,wi.emissivemap,wi.bumpmap,wi.normalmap,wi.displacementmap,wi.gradientmap,wi.fog,wi.lights,{emissive:{value:new dr(0)}}]),vertexShader:Ar.meshtoon_vert,fragmentShader:Ar.meshtoon_frag},matcap:{uniforms:xt([wi.common,wi.bumpmap,wi.normalmap,wi.displacementmap,wi.fog,{matcap:{value:null}}]),vertexShader:Ar.meshmatcap_vert,fragmentShader:Ar.meshmatcap_frag},points:{uniforms:xt([wi.points,wi.fog]),vertexShader:Ar.points_vert,fragmentShader:Ar.points_frag},dashed:{uniforms:xt([wi.common,wi.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ar.linedashed_vert,fragmentShader:Ar.linedashed_frag},depth:{uniforms:xt([wi.common,wi.displacementmap]),vertexShader:Ar.depth_vert,fragmentShader:Ar.depth_frag},normal:{uniforms:xt([wi.common,wi.bumpmap,wi.normalmap,wi.displacementmap,{opacity:{value:1}}]),vertexShader:Ar.meshnormal_vert,fragmentShader:Ar.meshnormal_frag},sprite:{uniforms:xt([wi.sprite,wi.fog]),vertexShader:Ar.sprite_vert,fragmentShader:Ar.sprite_frag},background:{uniforms:{uvTransform:{value:new er},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ar.background_vert,fragmentShader:Ar.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new er}},vertexShader:Ar.backgroundCube_vert,fragmentShader:Ar.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ar.cube_vert,fragmentShader:Ar.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ar.equirect_vert,fragmentShader:Ar.equirect_frag},distanceRGBA:{uniforms:xt([wi.common,wi.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ar.distanceRGBA_vert,fragmentShader:Ar.distanceRGBA_frag},shadow:{uniforms:xt([wi.lights,wi.fog,{color:{value:new dr(0)},opacity:{value:1}}]),vertexShader:Ar.shadow_vert,fragmentShader:Ar.shadow_frag}};UA.physical={uniforms:xt([UA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new er},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new er},clearcoatNormalScale:{value:new qr(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new er},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new er},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new er},sheen:{value:0},sheenColor:{value:new dr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new er},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new er},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new er},transmissionSamplerSize:{value:new qr},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new er},attenuationDistance:{value:0},attenuationColor:{value:new dr(0)},specularColor:{value:new dr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new er},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new er},anisotropyVector:{value:new qr},anisotropyMap:{value:null},anisotropyMapTransform:{value:new er}}]),vertexShader:Ar.meshphysical_vert,fragmentShader:Ar.meshphysical_frag};const js={r:0,b:0,g:0},ye=new _A,FE=new Hr;function hE(e,i,r,t,A,a,o){const s=new dr(0);let V=a===!0?0:1,m,q,c=null,n=0,l=null;function x(E){let h=E.isScene===!0?E.background:null;return h&&h.isTexture&&(h=(E.backgroundBlurriness>0?r:i).get(h)),h}function K(E){let h=!1;const U=x(E);U===null?W(s,V):U&&U.isColor&&(W(U,1),h=!0);const N=e.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(e.autoClear||h)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function u(E,h){const U=x(h);U&&(U.isCubeTexture||U.mapping===Il)?(q===void 0&&(q=new KA(new Ms(1,1,1),new CA({name:"BackgroundCubeMaterial",uniforms:so(UA.backgroundCube.uniforms),vertexShader:UA.backgroundCube.vertexShader,fragmentShader:UA.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(N,w,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(q)),ye.copy(h.backgroundRotation),ye.x*=-1,ye.y*=-1,ye.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ye.y*=-1,ye.z*=-1),q.material.uniforms.envMap.value=U,q.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,q.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(ye)),q.material.toneMapped=Ur.getTransfer(U.colorSpace)!==Cr,(c!==U||n!==U.version||l!==e.toneMapping)&&(q.material.needsUpdate=!0,c=U,n=U.version,l=e.toneMapping),q.layers.enableAll(),E.unshift(q,q.geometry,q.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new KA(new Us(2,2),new CA({name:"BackgroundMaterial",uniforms:so(UA.background.uniforms),vertexShader:UA.background.vertexShader,fragmentShader:UA.background.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,m.material.toneMapped=Ur.getTransfer(U.colorSpace)!==Cr,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(c!==U||n!==U.version||l!==e.toneMapping)&&(m.material.needsUpdate=!0,c=U,n=U.version,l=e.toneMapping),m.layers.enableAll(),E.unshift(m,m.geometry,m.material,0,0,null))}function W(E,h){E.getRGB(js,hu(e)),t.buffers.color.setClear(js.r,js.g,js.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(E,h=1){s.set(E),V=h,W(s,V)},getClearAlpha:function(){return V},setClearAlpha:function(E){V=E,W(s,V)},render:K,addToRenderList:u}}function EE(e,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),t={},A=n(null);let a=A,o=!1;function s(F,R,z,D,j){let f=!1;const T=c(D,z,R);a!==T&&(a=T,m(a.object)),f=l(F,D,z,j),f&&x(F,D,z,j),j!==null&&i.update(j,e.ELEMENT_ARRAY_BUFFER),(f||o)&&(o=!1,U(F,R,z,D),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(j).buffer))}function V(){return e.createVertexArray()}function m(F){return e.bindVertexArray(F)}function q(F){return e.deleteVertexArray(F)}function c(F,R,z){const D=z.wireframe===!0;let j=t[F.id];j===void 0&&(j={},t[F.id]=j);let f=j[R.id];f===void 0&&(f={},j[R.id]=f);let T=f[D];return T===void 0&&(T=n(V()),f[D]=T),T}function n(F){const R=[],z=[],D=[];for(let j=0;j<r;j++)R[j]=0,z[j]=0,D[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:D,object:F,attributes:{},index:null}}function l(F,R,z,D){const j=a.attributes,f=R.attributes;let T=0;const S=z.getAttributes();for(const I in S)if(S[I].location>=0){const X=j[I];let ai=f[I];if(ai===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(ai=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(ai=F.instanceColor)),X===void 0||X.attribute!==ai||ai&&X.data!==ai.data)return!0;T++}return a.attributesNum!==T||a.index!==D}function x(F,R,z,D){const j={},f=R.attributes;let T=0;const S=z.getAttributes();for(const I in S)if(S[I].location>=0){let X=f[I];X===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(X=F.instanceColor));const ai={};ai.attribute=X,X&&X.data&&(ai.data=X.data),j[I]=ai,T++}a.attributes=j,a.attributesNum=T,a.index=D}function K(){const F=a.newAttributes;for(let R=0,z=F.length;R<z;R++)F[R]=0}function u(F){W(F,0)}function W(F,R){const z=a.newAttributes,D=a.enabledAttributes,j=a.attributeDivisors;z[F]=1,D[F]===0&&(e.enableVertexAttribArray(F),D[F]=1),j[F]!==R&&(e.vertexAttribDivisor(F,R),j[F]=R)}function E(){const F=a.newAttributes,R=a.enabledAttributes;for(let z=0,D=R.length;z<D;z++)R[z]!==F[z]&&(e.disableVertexAttribArray(z),R[z]=0)}function h(F,R,z,D,j,f,T){T===!0?e.vertexAttribIPointer(F,R,z,j,f):e.vertexAttribPointer(F,R,z,D,j,f)}function U(F,R,z,D){K();const j=D.attributes,f=z.getAttributes(),T=R.defaultAttributeValues;for(const S in f){const I=f[S];if(I.location>=0){let mi=j[S];if(mi===void 0&&(S==="instanceMatrix"&&F.instanceMatrix&&(mi=F.instanceMatrix),S==="instanceColor"&&F.instanceColor&&(mi=F.instanceColor)),mi!==void 0){const X=mi.normalized,ai=mi.itemSize,Ni=i.get(mi);if(Ni===void 0)continue;const Si=Ni.buffer,J=Ni.type,oi=Ni.bytesPerElement,Wi=J===e.INT||J===e.UNSIGNED_INT||mi.gpuType===mq;if(mi.isInterleavedBufferAttribute){const Ki=mi.data,Li=Ki.stride,Oi=mi.offset;if(Ki.isInstancedInterleavedBuffer){for(let Ji=0;Ji<I.locationSize;Ji++)W(I.location+Ji,Ki.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ki.meshPerAttribute*Ki.count)}else for(let Ji=0;Ji<I.locationSize;Ji++)u(I.location+Ji);e.bindBuffer(e.ARRAY_BUFFER,Si);for(let Ji=0;Ji<I.locationSize;Ji++)h(I.location+Ji,ai/I.locationSize,J,X,Li*oi,(Oi+ai/I.locationSize*Ji)*oi,Wi)}else{if(mi.isInstancedBufferAttribute){for(let Ki=0;Ki<I.locationSize;Ki++)W(I.location+Ki,mi.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mi.meshPerAttribute*mi.count)}else for(let Ki=0;Ki<I.locationSize;Ki++)u(I.location+Ki);e.bindBuffer(e.ARRAY_BUFFER,Si);for(let Ki=0;Ki<I.locationSize;Ki++)h(I.location+Ki,ai/I.locationSize,J,X,ai*oi,ai/I.locationSize*Ki*oi,Wi)}}else if(T!==void 0){const X=T[S];if(X!==void 0)switch(X.length){case 2:e.vertexAttrib2fv(I.location,X);break;case 3:e.vertexAttrib3fv(I.location,X);break;case 4:e.vertexAttrib4fv(I.location,X);break;default:e.vertexAttrib1fv(I.location,X)}}}}E()}function N(){C();for(const F in t){const R=t[F];for(const z in R){const D=R[z];for(const j in D)q(D[j].object),delete D[j];delete R[z]}delete t[F]}}function w(F){if(t[F.id]===void 0)return;const R=t[F.id];for(const z in R){const D=R[z];for(const j in D)q(D[j].object),delete D[j];delete R[z]}delete t[F.id]}function p(F){for(const R in t){const z=t[R];if(z[F.id]===void 0)continue;const D=z[F.id];for(const j in D)q(D[j].object),delete D[j];delete z[F.id]}}function C(){M(),o=!0,a!==A&&(a=A,m(a.object))}function M(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:s,reset:C,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:p,initAttributes:K,enableAttribute:u,disableUnusedAttributes:E}}function ME(e,i,r){let t;function A(m){t=m}function a(m,q){e.drawArrays(t,m,q),r.update(q,t,1)}function o(m,q,c){c!==0&&(e.drawArraysInstanced(t,m,q,c),r.update(q,t,c))}function s(m,q,c){if(c===0)return;i.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t,m,0,q,0,c);let l=0;for(let x=0;x<c;x++)l+=q[x];r.update(l,t,1)}function V(m,q,c,n){if(c===0)return;const l=i.get("WEBGL_multi_draw");if(l===null)for(let x=0;x<m.length;x++)o(m[x],q[x],n[x]);else{l.multiDrawArraysInstancedWEBGL(t,m,0,q,0,n,0,c);let x=0;for(let K=0;K<c;K++)x+=q[K];for(let K=0;K<n.length;K++)r.update(x,t,n[K])}}this.setMode=A,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=V}function UE(e,i,r,t){let A;function a(){if(A!==void 0)return A;if(i.has("EXT_texture_filter_anisotropic")===!0){const w=i.get("EXT_texture_filter_anisotropic");A=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function o(w){return!(w!==wt&&t.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(w){const p=w===xs&&(i.has("EXT_color_buffer_half_float")||i.has("EXT_color_buffer_float"));return!(w!==kA&&t.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==WA&&!p)}function V(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=r.precision!==void 0?r.precision:"highp";const q=V(m);q!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",q,"instead."),m=q);const c=r.logarithmicDepthBuffer===!0,n=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),l=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),K=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),W=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),h=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=l>0,N=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:V,textureFormatReadable:o,textureTypeReadable:s,precision:m,logarithmicDepthBuffer:c,maxTextures:n,maxVertexTextures:l,maxTextureSize:x,maxCubemapSize:K,maxAttributes:u,maxVertexUniforms:W,maxVaryings:E,maxFragmentUniforms:h,vertexTextures:U,maxSamples:N}}function LE(e){const i=this;let r=null,t=0,A=!1,a=!1;const o=new Oe,s=new er,V={value:null,needsUpdate:!1};this.uniform=V,this.numPlanes=0,this.numIntersection=0,this.init=function(c,n){const l=c.length!==0||n||t!==0||A;return A=n,t=c.length,l},this.beginShadows=function(){a=!0,q(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,n){r=q(c,n,0)},this.setState=function(c,n,l){const x=c.clippingPlanes,K=c.clipIntersection,u=c.clipShadows,W=e.get(c);if(!A||x===null||x.length===0||a&&!u)a?q(null):m();else{const E=a?0:t,h=E*4;let U=W.clippingState||null;V.value=U,U=q(x,n,h,l);for(let N=0;N!==h;++N)U[N]=r[N];W.clippingState=U,this.numIntersection=K?this.numPlanes:0,this.numPlanes+=E}};function m(){V.value!==r&&(V.value=r,V.needsUpdate=t>0),i.numPlanes=t,i.numIntersection=0}function q(c,n,l,x){const K=c!==null?c.length:0;let u=null;if(K!==0){if(u=V.value,x!==!0||u===null){const W=l+K*4,E=n.matrixWorldInverse;s.getNormalMatrix(E),(u===null||u.length<W)&&(u=new Float32Array(W));for(let h=0,U=l;h!==K;++h,U+=4)o.copy(c[h]).applyMatrix4(E,s),o.normal.toArray(u,U),u[U+3]=o.constant}V.value=u,V.needsUpdate=!0}return i.numPlanes=K,i.numIntersection=0,u}}function pE(e){let i=new WeakMap;function r(o,s){return s===rm?o.mapping=Ao:s===tm&&(o.mapping=eo),o}function t(o){if(o&&o.isTexture){const s=o.mapping;if(s===rm||s===tm)if(i.has(o)){const V=i.get(o).texture;return r(V,o.mapping)}else{const V=o.image;if(V&&V.height>0){const m=new Dx(V.height);return m.fromEquirectangularTexture(e,o),i.set(o,m),o.addEventListener("dispose",A),r(m.texture,o.mapping)}else return null}}return o}function A(o){const s=o.target;s.removeEventListener("dispose",A);const V=i.get(s);V!==void 0&&(i.delete(s),V.dispose())}function a(){i=new WeakMap}return{get:t,dispose:a}}class Fq extends Eu{constructor(i=-1,r=1,t=1,A=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=i,this.right=r,this.top=t,this.bottom=A,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(i,r){return super.copy(i,r),this.left=i.left,this.right=i.right,this.top=i.top,this.bottom=i.bottom,this.near=i.near,this.far=i.far,this.zoom=i.zoom,this.view=i.view===null?null:Object.assign({},i.view),this}setViewOffset(i,r,t,A,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=r,this.view.offsetX=t,this.view.offsetY=A,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let a=t-i,o=t+i,s=A+r,V=A-r;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,q=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,o=a+m*this.view.width,s-=q*this.view.offsetY,V=s-q*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,V,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(i){const r=super.toJSON(i);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Sa=4,pn=[.125,.215,.35,.446,.526,.582],fe=20,pV=new Fq,dn=new dr;let dV=null,wV=0,NV=0,RV=!1;const je=(1+Math.sqrt(5))/2,Xa=1/je,wn=[new _(-je,Xa,0),new _(je,Xa,0),new _(-Xa,0,je),new _(Xa,0,je),new _(0,je,-Xa),new _(0,je,Xa),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];class Nn{constructor(i){this._renderer=i,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(i,r=0,t=.1,A=100){dV=this._renderer.getRenderTarget(),wV=this._renderer.getActiveCubeFace(),NV=this._renderer.getActiveMipmapLevel(),RV=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(i,t,A,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(i,r=null){return this._fromTexture(i,r)}fromCubemap(i,r=null){return this._fromTexture(i,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(i){this._lodMax=Math.floor(Math.log2(i)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let i=0;i<this._lodPlanes.length;i++)this._lodPlanes[i].dispose()}_cleanup(i){this._renderer.setRenderTarget(dV,wV,NV),this._renderer.xr.enabled=RV,i.scissorTest=!1,bs(i,0,0,i.width,i.height)}_fromTexture(i,r){i.mapping===Ao||i.mapping===eo?this._setSize(i.image.length===0?16:i.image[0].width||i.image[0].image.width):this._setSize(i.image.width/4),dV=this._renderer.getRenderTarget(),wV=this._renderer.getActiveCubeFace(),NV=this._renderer.getActiveMipmapLevel(),RV=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const t=r||this._allocateTargets();return this._textureToCubeUV(i,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const i=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,t={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:xs,format:wt,colorSpace:Ce,depthBuffer:!1},A=Rn(i,r,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==i||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rn(i,r,t);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(a)),this._blurMaterial=wE(a,i,r)}return A}_compileMaterial(i){const r=new KA(this._lodPlanes[0],i);this._renderer.compile(r,pV)}_sceneToCubeUV(i,r,t,A){const s=new cA(90,1,r,t),V=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],q=this._renderer,c=q.autoClear,n=q.toneMapping;q.getClearColor(dn),q.toneMapping=he,q.autoClear=!1;const l=new Ku({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),x=new KA(new Ms,l);let K=!1;const u=i.background;u?u.isColor&&(l.color.copy(u),i.background=null,K=!0):(l.color.copy(dn),K=!0);for(let W=0;W<6;W++){const E=W%3;E===0?(s.up.set(0,V[W],0),s.lookAt(m[W],0,0)):E===1?(s.up.set(0,0,V[W]),s.lookAt(0,m[W],0)):(s.up.set(0,V[W],0),s.lookAt(0,0,m[W]));const h=this._cubeSize;bs(A,E*h,W>2?h:0,h,h),q.setRenderTarget(A),K&&q.render(x,s),q.render(i,s)}x.geometry.dispose(),x.material.dispose(),q.toneMapping=n,q.autoClear=c,i.background=u}_textureToCubeUV(i,r){const t=this._renderer,A=i.mapping===Ao||i.mapping===eo;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yn()),this._cubemapMaterial.uniforms.flipEnvMap.value=i.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cn());const a=A?this._cubemapMaterial:this._equirectMaterial,o=new KA(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=i;const V=this._cubeSize;bs(r,0,0,3*V,2*V),t.setRenderTarget(r),t.render(o,pV)}_applyPMREM(i){const r=this._renderer,t=r.autoClear;r.autoClear=!1;const A=this._lodPlanes.length;for(let a=1;a<A;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=wn[(A-a-1)%wn.length];this._blur(i,a-1,a,o,s)}r.autoClear=t}_blur(i,r,t,A,a){const o=this._pingPongRenderTarget;this._halfBlur(i,o,r,t,A,"latitudinal",a),this._halfBlur(o,i,t,t,A,"longitudinal",a)}_halfBlur(i,r,t,A,a,o,s){const V=this._renderer,m=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const q=3,c=new KA(this._lodPlanes[A],m),n=m.uniforms,l=this._sizeLods[t]-1,x=isFinite(a)?Math.PI/(2*l):2*Math.PI/(2*fe-1),K=a/x,u=isFinite(a)?1+Math.floor(q*K):fe;u>fe&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${fe}`);const W=[];let E=0;for(let p=0;p<fe;++p){const C=p/K,M=Math.exp(-C*C/2);W.push(M),p===0?E+=M:p<u&&(E+=2*M)}for(let p=0;p<W.length;p++)W[p]=W[p]/E;n.envMap.value=i.texture,n.samples.value=u,n.weights.value=W,n.latitudinal.value=o==="latitudinal",s&&(n.poleAxis.value=s);const{_lodMax:h}=this;n.dTheta.value=x,n.mipInt.value=h-t;const U=this._sizeLods[A],N=3*U*(A>h-Sa?A-h+Sa:0),w=4*(this._cubeSize-U);bs(r,N,w,3*U,2*U),V.setRenderTarget(r),V.render(c,pV)}}function dE(e){const i=[],r=[],t=[];let A=e;const a=e-Sa+1+pn.length;for(let o=0;o<a;o++){const s=Math.pow(2,A);r.push(s);let V=1/s;o>e-Sa?V=pn[o-e+Sa-1]:o===0&&(V=0),t.push(V);const m=1/(s-2),q=-m,c=1+m,n=[q,q,c,q,c,c,q,q,c,c,q,c],l=6,x=6,K=3,u=2,W=1,E=new Float32Array(K*x*l),h=new Float32Array(u*x*l),U=new Float32Array(W*x*l);for(let w=0;w<l;w++){const p=w%3*2/3-1,C=w>2?0:-1,M=[p,C,0,p+2/3,C,0,p+2/3,C+1,0,p,C,0,p+2/3,C+1,0,p,C+1,0];E.set(M,K*x*w),h.set(n,u*x*w);const F=[w,w,w,w,w,w];U.set(F,W*x*w)}const N=new Ye;N.setAttribute("position",new NA(E,K)),N.setAttribute("uv",new NA(h,u)),N.setAttribute("faceIndex",new NA(U,W)),i.push(N),A>Sa&&A--}return{lodPlanes:i,sizeLods:r,sigmas:t}}function Rn(e,i,r){const t=new pe(e,i,r);return t.texture.mapping=Il,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function bs(e,i,r,t,A){e.viewport.set(i,r,t,A),e.scissor.set(i,r,t,A)}function wE(e,i,r){const t=new Float32Array(fe),A=new _(0,1,0);return new CA({name:"SphericalGaussianBlur",defines:{n:fe,CUBEUV_TEXEL_WIDTH:1/i,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:hq(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Cn(){return new CA({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hq(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Yn(){return new CA({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hq(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function hq(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NE(e){let i=new WeakMap,r=null;function t(s){if(s&&s.isTexture){const V=s.mapping,m=V===rm||V===tm,q=V===Ao||V===eo;if(m||q){let c=i.get(s);const n=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==n)return r===null&&(r=new Nn(e)),c=m?r.fromEquirectangular(s,c):r.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,i.set(s,c),c.texture;if(c!==void 0)return c.texture;{const l=s.image;return m&&l&&l.height>0||q&&l&&A(l)?(r===null&&(r=new Nn(e)),c=m?r.fromEquirectangular(s):r.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,i.set(s,c),s.addEventListener("dispose",a),c.texture):null}}}return s}function A(s){let V=0;const m=6;for(let q=0;q<m;q++)s[q]!==void 0&&V++;return V===m}function a(s){const V=s.target;V.removeEventListener("dispose",a);const m=i.get(V);m!==void 0&&(i.delete(V),m.dispose())}function o(){i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:t,dispose:o}}function RE(e){const i={};function r(t){if(i[t]!==void 0)return i[t];let A;switch(t){case"WEBGL_depth_texture":A=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=e.getExtension(t)}return i[t]=A,A}return{has:function(t){return r(t)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(t){const A=r(t);return A===null&&Oo("THREE.WebGLRenderer: "+t+" extension not supported."),A}}}function CE(e,i,r,t){const A={},a=new WeakMap;function o(c){const n=c.target;n.index!==null&&i.remove(n.index);for(const x in n.attributes)i.remove(n.attributes[x]);for(const x in n.morphAttributes){const K=n.morphAttributes[x];for(let u=0,W=K.length;u<W;u++)i.remove(K[u])}n.removeEventListener("dispose",o),delete A[n.id];const l=a.get(n);l&&(i.remove(l),a.delete(n)),t.releaseStatesOfGeometry(n),n.isInstancedBufferGeometry===!0&&delete n._maxInstanceCount,r.memory.geometries--}function s(c,n){return A[n.id]===!0||(n.addEventListener("dispose",o),A[n.id]=!0,r.memory.geometries++),n}function V(c){const n=c.attributes;for(const x in n)i.update(n[x],e.ARRAY_BUFFER);const l=c.morphAttributes;for(const x in l){const K=l[x];for(let u=0,W=K.length;u<W;u++)i.update(K[u],e.ARRAY_BUFFER)}}function m(c){const n=[],l=c.index,x=c.attributes.position;let K=0;if(l!==null){const E=l.array;K=l.version;for(let h=0,U=E.length;h<U;h+=3){const N=E[h+0],w=E[h+1],p=E[h+2];n.push(N,w,w,p,p,N)}}else if(x!==void 0){const E=x.array;K=x.version;for(let h=0,U=E.length/3-1;h<U;h+=3){const N=h+0,w=h+1,p=h+2;n.push(N,w,w,p,p,N)}}else return;const u=new(qu(n)?Fu:xu)(n,1);u.version=K;const W=a.get(c);W&&i.remove(W),a.set(c,u)}function q(c){const n=a.get(c);if(n){const l=c.index;l!==null&&n.version<l.version&&m(c)}else m(c);return a.get(c)}return{get:s,update:V,getWireframeAttribute:q}}function YE(e,i,r){let t;function A(n){t=n}let a,o;function s(n){a=n.type,o=n.bytesPerElement}function V(n,l){e.drawElements(t,l,a,n*o),r.update(l,t,1)}function m(n,l,x){x!==0&&(e.drawElementsInstanced(t,l,a,n*o,x),r.update(l,t,x))}function q(n,l,x){if(x===0)return;i.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t,l,0,a,n,0,x);let u=0;for(let W=0;W<x;W++)u+=l[W];r.update(u,t,1)}function c(n,l,x,K){if(x===0)return;const u=i.get("WEBGL_multi_draw");if(u===null)for(let W=0;W<n.length;W++)m(n[W]/o,l[W],K[W]);else{u.multiDrawElementsInstancedWEBGL(t,l,0,a,n,0,K,0,x);let W=0;for(let E=0;E<x;E++)W+=l[E];for(let E=0;E<K.length;E++)r.update(W,t,K[E])}}this.setMode=A,this.setIndex=s,this.render=V,this.renderInstances=m,this.renderMultiDraw=q,this.renderMultiDrawInstances=c}function XE(e){const i={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function t(a,o,s){switch(r.calls++,o){case e.TRIANGLES:r.triangles+=s*(a/3);break;case e.LINES:r.lines+=s*(a/2);break;case e.LINE_STRIP:r.lines+=s*(a-1);break;case e.LINE_LOOP:r.lines+=s*a;break;case e.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function A(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:i,render:r,programs:null,autoReset:!0,reset:A,update:t}}function ZE(e,i,r){const t=new WeakMap,A=new $r;function a(o,s,V){const m=o.morphTargetInfluences,q=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,c=q!==void 0?q.length:0;let n=t.get(s);if(n===void 0||n.count!==c){let F=function(){C.dispose(),t.delete(s),s.removeEventListener("dispose",F)};var l=F;n!==void 0&&n.texture.dispose();const x=s.morphAttributes.position!==void 0,K=s.morphAttributes.normal!==void 0,u=s.morphAttributes.color!==void 0,W=s.morphAttributes.position||[],E=s.morphAttributes.normal||[],h=s.morphAttributes.color||[];let U=0;x===!0&&(U=1),K===!0&&(U=2),u===!0&&(U=3);let N=s.attributes.position.count*U,w=1;N>i.maxTextureSize&&(w=Math.ceil(N/i.maxTextureSize),N=i.maxTextureSize);const p=new Float32Array(N*w*4*c),C=new cu(p,N,w,c);C.type=WA,C.needsUpdate=!0;const M=U*4;for(let R=0;R<c;R++){const z=W[R],D=E[R],j=h[R],f=N*w*4*R;for(let T=0;T<z.count;T++){const S=T*M;x===!0&&(A.fromBufferAttribute(z,T),p[f+S+0]=A.x,p[f+S+1]=A.y,p[f+S+2]=A.z,p[f+S+3]=0),K===!0&&(A.fromBufferAttribute(D,T),p[f+S+4]=A.x,p[f+S+5]=A.y,p[f+S+6]=A.z,p[f+S+7]=0),u===!0&&(A.fromBufferAttribute(j,T),p[f+S+8]=A.x,p[f+S+9]=A.y,p[f+S+10]=A.z,p[f+S+11]=j.itemSize===4?A.w:1)}}n={count:c,texture:C,size:new qr(N,w)},t.set(s,n),s.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)V.getUniforms().setValue(e,"morphTexture",o.morphTexture,r);else{let x=0;for(let u=0;u<m.length;u++)x+=m[u];const K=s.morphTargetsRelative?1:1-x;V.getUniforms().setValue(e,"morphTargetBaseInfluence",K),V.getUniforms().setValue(e,"morphTargetInfluences",m)}V.getUniforms().setValue(e,"morphTargetsTexture",n.texture,r),V.getUniforms().setValue(e,"morphTargetsTextureSize",n.size)}return{update:a}}function GE(e,i,r,t){let A=new WeakMap;function a(V){const m=t.render.frame,q=V.geometry,c=i.get(V,q);if(A.get(c)!==m&&(i.update(c),A.set(c,m)),V.isInstancedMesh&&(V.hasEventListener("dispose",s)===!1&&V.addEventListener("dispose",s),A.get(V)!==m&&(r.update(V.instanceMatrix,e.ARRAY_BUFFER),V.instanceColor!==null&&r.update(V.instanceColor,e.ARRAY_BUFFER),A.set(V,m))),V.isSkinnedMesh){const n=V.skeleton;A.get(n)!==m&&(n.update(),A.set(n,m))}return c}function o(){A=new WeakMap}function s(V){const m=V.target;m.removeEventListener("dispose",s),r.remove(m.instanceMatrix),m.instanceColor!==null&&r.remove(m.instanceColor)}return{update:a,dispose:o}}class pu extends nt{constructor(i,r,t,A,a,o,s,V,m,q=Ia){if(q!==Ia&&q!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&q===Ia&&(t=la),t===void 0&&q===oo&&(t=ao),super(null,A,a,o,s,V,q,t,m),this.isDepthTexture=!0,this.image={width:i,height:r},this.magFilter=s!==void 0?s:it,this.minFilter=V!==void 0?V:it,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(i){return super.copy(i),this.compareFunction=i.compareFunction,this}toJSON(i){const r=super.toJSON(i);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const du=new nt,Xn=new pu(1,1),wu=new cu,Nu=new Fx,Ru=new Mu,Zn=[],Gn=[],zn=new Float32Array(16),Dn=new Float32Array(9),yn=new Float32Array(4);function Ko(e,i,r){const t=e[0];if(t<=0||t>0)return e;const A=i*r;let a=Zn[A];if(a===void 0&&(a=new Float32Array(A),Zn[A]=a),i!==0){t.toArray(a,0);for(let o=1,s=0;o!==i;++o)s+=r,e[o].toArray(a,s)}return a}function fr(e,i){if(e.length!==i.length)return!1;for(let r=0,t=e.length;r<t;r++)if(e[r]!==i[r])return!1;return!0}function Jr(e,i){for(let r=0,t=i.length;r<t;r++)e[r]=i[r]}function fl(e,i){let r=Gn[i];r===void 0&&(r=new Int32Array(i),Gn[i]=r);for(let t=0;t!==i;++t)r[t]=e.allocateTextureUnit();return r}function zE(e,i){const r=this.cache;r[0]!==i&&(e.uniform1f(this.addr,i),r[0]=i)}function DE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y)&&(e.uniform2f(this.addr,i.x,i.y),r[0]=i.x,r[1]=i.y);else{if(fr(r,i))return;e.uniform2fv(this.addr,i),Jr(r,i)}}function yE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z)&&(e.uniform3f(this.addr,i.x,i.y,i.z),r[0]=i.x,r[1]=i.y,r[2]=i.z);else if(i.r!==void 0)(r[0]!==i.r||r[1]!==i.g||r[2]!==i.b)&&(e.uniform3f(this.addr,i.r,i.g,i.b),r[0]=i.r,r[1]=i.g,r[2]=i.b);else{if(fr(r,i))return;e.uniform3fv(this.addr,i),Jr(r,i)}}function QE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z||r[3]!==i.w)&&(e.uniform4f(this.addr,i.x,i.y,i.z,i.w),r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=i.w);else{if(fr(r,i))return;e.uniform4fv(this.addr,i),Jr(r,i)}}function BE(e,i){const r=this.cache,t=i.elements;if(t===void 0){if(fr(r,i))return;e.uniformMatrix2fv(this.addr,!1,i),Jr(r,i)}else{if(fr(r,t))return;yn.set(t),e.uniformMatrix2fv(this.addr,!1,yn),Jr(r,t)}}function gE(e,i){const r=this.cache,t=i.elements;if(t===void 0){if(fr(r,i))return;e.uniformMatrix3fv(this.addr,!1,i),Jr(r,i)}else{if(fr(r,t))return;Dn.set(t),e.uniformMatrix3fv(this.addr,!1,Dn),Jr(r,t)}}function SE(e,i){const r=this.cache,t=i.elements;if(t===void 0){if(fr(r,i))return;e.uniformMatrix4fv(this.addr,!1,i),Jr(r,i)}else{if(fr(r,t))return;zn.set(t),e.uniformMatrix4fv(this.addr,!1,zn),Jr(r,t)}}function TE(e,i){const r=this.cache;r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i)}function OE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y)&&(e.uniform2i(this.addr,i.x,i.y),r[0]=i.x,r[1]=i.y);else{if(fr(r,i))return;e.uniform2iv(this.addr,i),Jr(r,i)}}function jE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z)&&(e.uniform3i(this.addr,i.x,i.y,i.z),r[0]=i.x,r[1]=i.y,r[2]=i.z);else{if(fr(r,i))return;e.uniform3iv(this.addr,i),Jr(r,i)}}function bE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z||r[3]!==i.w)&&(e.uniform4i(this.addr,i.x,i.y,i.z,i.w),r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=i.w);else{if(fr(r,i))return;e.uniform4iv(this.addr,i),Jr(r,i)}}function IE(e,i){const r=this.cache;r[0]!==i&&(e.uniform1ui(this.addr,i),r[0]=i)}function vE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y)&&(e.uniform2ui(this.addr,i.x,i.y),r[0]=i.x,r[1]=i.y);else{if(fr(r,i))return;e.uniform2uiv(this.addr,i),Jr(r,i)}}function HE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z)&&(e.uniform3ui(this.addr,i.x,i.y,i.z),r[0]=i.x,r[1]=i.y,r[2]=i.z);else{if(fr(r,i))return;e.uniform3uiv(this.addr,i),Jr(r,i)}}function fE(e,i){const r=this.cache;if(i.x!==void 0)(r[0]!==i.x||r[1]!==i.y||r[2]!==i.z||r[3]!==i.w)&&(e.uniform4ui(this.addr,i.x,i.y,i.z,i.w),r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=i.w);else{if(fr(r,i))return;e.uniform4uiv(this.addr,i),Jr(r,i)}}function JE(e,i,r){const t=this.cache,A=r.allocateTextureUnit();t[0]!==A&&(e.uniform1i(this.addr,A),t[0]=A);let a;this.type===e.SAMPLER_2D_SHADOW?(Xn.compareFunction=mu,a=Xn):a=du,r.setTexture2D(i||a,A)}function PE(e,i,r){const t=this.cache,A=r.allocateTextureUnit();t[0]!==A&&(e.uniform1i(this.addr,A),t[0]=A),r.setTexture3D(i||Nu,A)}function kE(e,i,r){const t=this.cache,A=r.allocateTextureUnit();t[0]!==A&&(e.uniform1i(this.addr,A),t[0]=A),r.setTextureCube(i||Ru,A)}function _E(e,i,r){const t=this.cache,A=r.allocateTextureUnit();t[0]!==A&&(e.uniform1i(this.addr,A),t[0]=A),r.setTexture2DArray(i||wu,A)}function $E(e){switch(e){case 5126:return zE;case 35664:return DE;case 35665:return yE;case 35666:return QE;case 35674:return BE;case 35675:return gE;case 35676:return SE;case 5124:case 35670:return TE;case 35667:case 35671:return OE;case 35668:case 35672:return jE;case 35669:case 35673:return bE;case 5125:return IE;case 36294:return vE;case 36295:return HE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return _E}}function iM(e,i){e.uniform1fv(this.addr,i)}function rM(e,i){const r=Ko(i,this.size,2);e.uniform2fv(this.addr,r)}function tM(e,i){const r=Ko(i,this.size,3);e.uniform3fv(this.addr,r)}function AM(e,i){const r=Ko(i,this.size,4);e.uniform4fv(this.addr,r)}function eM(e,i){const r=Ko(i,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function aM(e,i){const r=Ko(i,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function oM(e,i){const r=Ko(i,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function sM(e,i){e.uniform1iv(this.addr,i)}function lM(e,i){e.uniform2iv(this.addr,i)}function VM(e,i){e.uniform3iv(this.addr,i)}function mM(e,i){e.uniform4iv(this.addr,i)}function qM(e,i){e.uniform1uiv(this.addr,i)}function nM(e,i){e.uniform2uiv(this.addr,i)}function cM(e,i){e.uniform3uiv(this.addr,i)}function uM(e,i){e.uniform4uiv(this.addr,i)}function WM(e,i,r){const t=this.cache,A=i.length,a=fl(r,A);fr(t,a)||(e.uniform1iv(this.addr,a),Jr(t,a));for(let o=0;o!==A;++o)r.setTexture2D(i[o]||du,a[o])}function KM(e,i,r){const t=this.cache,A=i.length,a=fl(r,A);fr(t,a)||(e.uniform1iv(this.addr,a),Jr(t,a));for(let o=0;o!==A;++o)r.setTexture3D(i[o]||Nu,a[o])}function xM(e,i,r){const t=this.cache,A=i.length,a=fl(r,A);fr(t,a)||(e.uniform1iv(this.addr,a),Jr(t,a));for(let o=0;o!==A;++o)r.setTextureCube(i[o]||Ru,a[o])}function FM(e,i,r){const t=this.cache,A=i.length,a=fl(r,A);fr(t,a)||(e.uniform1iv(this.addr,a),Jr(t,a));for(let o=0;o!==A;++o)r.setTexture2DArray(i[o]||wu,a[o])}function hM(e){switch(e){case 5126:return iM;case 35664:return rM;case 35665:return tM;case 35666:return AM;case 35674:return eM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return sM;case 35667:case 35671:return lM;case 35668:case 35672:return VM;case 35669:case 35673:return mM;case 5125:return qM;case 36294:return nM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return FM}}class EM{constructor(i,r,t){this.id=i,this.addr=t,this.cache=[],this.type=r.type,this.setValue=$E(r.type)}}class MM{constructor(i,r,t){this.id=i,this.addr=t,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=hM(r.type)}}class UM{constructor(i){this.id=i,this.seq=[],this.map={}}setValue(i,r,t){const A=this.seq;for(let a=0,o=A.length;a!==o;++a){const s=A[a];s.setValue(i,r[s.id],t)}}}const CV=/(\w+)(\])?(\[|\.)?/g;function Qn(e,i){e.seq.push(i),e.map[i.id]=i}function LM(e,i,r){const t=e.name,A=t.length;for(CV.lastIndex=0;;){const a=CV.exec(t),o=CV.lastIndex;let s=a[1];const V=a[2]==="]",m=a[3];if(V&&(s=s|0),m===void 0||m==="["&&o+2===A){Qn(r,m===void 0?new EM(s,e,i):new MM(s,e,i));break}else{let c=r.map[s];c===void 0&&(c=new UM(s),Qn(r,c)),r=c}}}class cl{constructor(i,r){this.seq=[],this.map={};const t=i.getProgramParameter(r,i.ACTIVE_UNIFORMS);for(let A=0;A<t;++A){const a=i.getActiveUniform(r,A),o=i.getUniformLocation(r,a.name);LM(a,o,this)}}setValue(i,r,t,A){const a=this.map[r];a!==void 0&&a.setValue(i,t,A)}setOptional(i,r,t){const A=r[t];A!==void 0&&this.setValue(i,t,A)}static upload(i,r,t,A){for(let a=0,o=r.length;a!==o;++a){const s=r[a],V=t[s.id];V.needsUpdate!==!1&&s.setValue(i,V.value,A)}}static seqWithValue(i,r){const t=[];for(let A=0,a=i.length;A!==a;++A){const o=i[A];o.id in r&&t.push(o)}return t}}function Bn(e,i,r){const t=e.createShader(i);return e.shaderSource(t,r),e.compileShader(t),t}const pM=37297;let dM=0;function wM(e,i){const r=e.split(`
`),t=[],A=Math.max(i-6,0),a=Math.min(i+6,r.length);for(let o=A;o<a;o++){const s=o+1;t.push(`${s===i?">":" "} ${s}: ${r[o]}`)}return t.join(`
`)}function NM(e){const i=Ur.getPrimaries(Ur.workingColorSpace),r=Ur.getPrimaries(e);let t;switch(i===r?t="":i===Cl&&r===Rl?t="LinearDisplayP3ToLinearSRGB":i===Rl&&r===Cl&&(t="LinearSRGBToLinearDisplayP3"),e){case Ce:case vl:return[t,"LinearTransferOETF"];case hA:case Kq:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[t,"LinearTransferOETF"]}}function gn(e,i,r){const t=e.getShaderParameter(i,e.COMPILE_STATUS),A=e.getShaderInfoLog(i).trim();if(t&&A==="")return"";const a=/ERROR: 0:(\d+)/.exec(A);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+A+`

`+wM(e.getShaderSource(i),o)}else return A}function RM(e,i){const r=NM(i);return`vec4 ${e}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function CM(e,i){let r;switch(i){case IK:r="Linear";break;case vK:r="Reinhard";break;case HK:r="OptimizedCineon";break;case fK:r="ACESFilmic";break;case PK:r="AgX";break;case kK:r="Neutral";break;case JK:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",i),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Is=new _;function YM(){Ur.getLuminanceCoefficients(Is);const e=Is.x.toFixed(4),i=Is.y.toFixed(4),r=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${i}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function ZM(e){const i=[];for(const r in e){const t=e[r];t!==!1&&i.push("#define "+r+" "+t)}return i.join(`
`)}function GM(e,i){const r={},t=e.getProgramParameter(i,e.ACTIVE_ATTRIBUTES);for(let A=0;A<t;A++){const a=e.getActiveAttrib(i,A),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:e.getAttribLocation(i,o),locationSize:s}}return r}function Yo(e){return e!==""}function Sn(e,i){const r=i.numSpotLightShadows+i.numSpotLightMaps-i.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,i.numDirLights).replace(/NUM_SPOT_LIGHTS/g,i.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,i.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,i.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,i.numPointLights).replace(/NUM_HEMI_LIGHTS/g,i.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,i.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,i.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,i.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,i.numPointLightShadows)}function Tn(e,i){return e.replace(/NUM_CLIPPING_PLANES/g,i.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,i.numClippingPlanes-i.numClipIntersection)}const zM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zm(e){return e.replace(zM,yM)}const DM=new Map;function yM(e,i){let r=Ar[i];if(r===void 0){const t=DM.get(i);if(t!==void 0)r=Ar[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',i,t);else throw new Error("Can not resolve #include <"+i+">")}return Zm(r)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function On(e){return e.replace(QM,BM)}function BM(e,i,r,t){let A="";for(let a=parseInt(i);a<parseInt(r);a++)A+=t.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return A}function jn(e){let i=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?i+=`
#define HIGH_PRECISION`:e.precision==="mediump"?i+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(i+=`
#define LOW_PRECISION`),i}function gM(e){let i="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===kc?i="SHADOWMAP_TYPE_PCF":e.shadowMapType===xK?i="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yA&&(i="SHADOWMAP_TYPE_VSM"),i}function SM(e){let i="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ao:case eo:i="ENVMAP_TYPE_CUBE";break;case Il:i="ENVMAP_TYPE_CUBE_UV";break}return i}function TM(e){let i="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case eo:i="ENVMAP_MODE_REFRACTION";break}return i}function OM(e){let i="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case _c:i="ENVMAP_BLENDING_MULTIPLY";break;case jK:i="ENVMAP_BLENDING_MIX";break;case bK:i="ENVMAP_BLENDING_ADD";break}return i}function jM(e){const i=e.envMapCubeUVHeight;if(i===null)return null;const r=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:t,maxMip:r}}function bM(e,i,r,t){const A=e.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const V=gM(r),m=SM(r),q=TM(r),c=OM(r),n=jM(r),l=XM(r),x=ZM(a),K=A.createProgram();let u,W,E=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Yo).join(`
`),u.length>0&&(u+=`
`),W=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(Yo).join(`
`),W.length>0&&(W+=`
`)):(u=[jn(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+q:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+V:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),W=[jn(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+m:"",r.envMap?"#define "+q:"",r.envMap?"#define "+c:"",n?"#define CUBEUV_TEXEL_WIDTH "+n.texelWidth:"",n?"#define CUBEUV_TEXEL_HEIGHT "+n.texelHeight:"",n?"#define CUBEUV_MAX_MIP "+n.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+V:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==he?"#define TONE_MAPPING":"",r.toneMapping!==he?Ar.tonemapping_pars_fragment:"",r.toneMapping!==he?CM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ar.colorspace_pars_fragment,RM("linearToOutputTexel",r.outputColorSpace),YM(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Zm(o),o=Sn(o,r),o=Tn(o,r),s=Zm(s),s=Sn(s,r),s=Tn(s,r),o=On(o),s=On(s),r.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,W=["#define varying in",r.glslVersion===en?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===en?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+W);const h=E+u+o,U=E+W+s,N=Bn(A,A.VERTEX_SHADER,h),w=Bn(A,A.FRAGMENT_SHADER,U);A.attachShader(K,N),A.attachShader(K,w),r.index0AttributeName!==void 0?A.bindAttribLocation(K,0,r.index0AttributeName):r.morphTargets===!0&&A.bindAttribLocation(K,0,"position"),A.linkProgram(K);function p(R){if(e.debug.checkShaderErrors){const z=A.getProgramInfoLog(K).trim(),D=A.getShaderInfoLog(N).trim(),j=A.getShaderInfoLog(w).trim();let f=!0,T=!0;if(A.getProgramParameter(K,A.LINK_STATUS)===!1)if(f=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(A,K,N,w);else{const S=gn(A,N,"vertex"),I=gn(A,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(K,A.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+S+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||j==="")&&(T=!1);T&&(R.diagnostics={runnable:f,programLog:z,vertexShader:{log:D,prefix:u},fragmentShader:{log:j,prefix:W}})}A.deleteShader(N),A.deleteShader(w),C=new cl(A,K),M=GM(A,K)}let C;this.getUniforms=function(){return C===void 0&&p(this),C};let M;this.getAttributes=function(){return M===void 0&&p(this),M};let F=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=A.getProgramParameter(K,pM)),F},this.destroy=function(){t.releaseStatesOfProgram(this),A.deleteProgram(K),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=dM++,this.cacheKey=i,this.usedTimes=1,this.program=K,this.vertexShader=N,this.fragmentShader=w,this}let IM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(i){const r=i.vertexShader,t=i.fragmentShader,A=this._getShaderStage(r),a=this._getShaderStage(t),o=this._getShaderCacheForMaterial(i);return o.has(A)===!1&&(o.add(A),A.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(i){const r=this.materialCache.get(i);for(const t of r)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(i),this}getVertexShaderID(i){return this._getShaderStage(i.vertexShader).id}getFragmentShaderID(i){return this._getShaderStage(i.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(i){const r=this.materialCache;let t=r.get(i);return t===void 0&&(t=new Set,r.set(i,t)),t}_getShaderStage(i){const r=this.shaderCache;let t=r.get(i);return t===void 0&&(t=new HM(i),r.set(i,t)),t}}class HM{constructor(i){this.id=IM++,this.code=i,this.usedTimes=0}}function fM(e,i,r,t,A,a,o){const s=new uu,V=new vM,m=new Set,q=[],c=A.logarithmicDepthBuffer,n=A.vertexTextures;let l=A.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function K(M){return m.add(M),M===0?"uv":`uv${M}`}function u(M,F,R,z,D){const j=z.fog,f=D.geometry,T=M.isMeshStandardMaterial?z.environment:null,S=(M.isMeshStandardMaterial?r:i).get(M.envMap||T),I=S&&S.mapping===Il?S.image.height:null,mi=x[M.type];M.precision!==null&&(l=A.getMaxPrecision(M.precision),l!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",l,"instead."));const X=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,ai=X!==void 0?X.length:0;let Ni=0;f.morphAttributes.position!==void 0&&(Ni=1),f.morphAttributes.normal!==void 0&&(Ni=2),f.morphAttributes.color!==void 0&&(Ni=3);let Si,J,oi,Wi;if(mi){const $=UA[mi];Si=$.vertexShader,J=$.fragmentShader}else Si=M.vertexShader,J=M.fragmentShader,V.update(M),oi=V.getVertexShaderID(M),Wi=V.getFragmentShaderID(M);const Ki=e.getRenderTarget(),Li=D.isInstancedMesh===!0,Oi=D.isBatchedMesh===!0,Ji=!!M.map,ir=!!M.matcap,Z=!!S,Ti=!!M.aoMap,Xi=!!M.lightMap,hi=!!M.bumpMap,Ci=!!M.normalMap,b=!!M.displacementMap,Zi=!!M.emissiveMap,vi=!!M.metalnessMap,Y=!!M.roughnessMap,L=M.anisotropy>0,v=M.clearcoat>0,li=M.dispersion>0,Vi=M.iridescence>0,Ai=M.sheen>0,Yi=M.transmission>0,qi=L&&!!M.anisotropyMap,Ei=v&&!!M.clearcoatMap,Hi=v&&!!M.clearcoatNormalMap,ci=v&&!!M.clearcoatRoughnessMap,Ri=Vi&&!!M.iridescenceMap,bi=Vi&&!!M.iridescenceThicknessMap,Pi=Ai&&!!M.sheenColorMap,pi=Ai&&!!M.sheenRoughnessMap,fi=!!M.specularMap,_i=!!M.specularColorMap,Kr=!!M.specularIntensityMap,y=Yi&&!!M.transmissionMap,ii=Yi&&!!M.thicknessMap,ti=!!M.gradientMap,ri=!!M.alphaMap,ui=M.alphaTest>0,gi=!!M.alphaHash,rr=!!M.extensions;let Fi=he;M.toneMapped&&(Ki===null||Ki.isXRRenderTarget===!0)&&(Fi=e.toneMapping);const G={shaderID:mi,shaderType:M.type,shaderName:M.name,vertexShader:Si,fragmentShader:J,defines:M.defines,customVertexShaderID:oi,customFragmentShaderID:Wi,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:l,batching:Oi,batchingColor:Oi&&D._colorsTexture!==null,instancing:Li,instancingColor:Li&&D.instanceColor!==null,instancingMorph:Li&&D.morphTexture!==null,supportsVertexTextures:n,outputColorSpace:Ki===null?e.outputColorSpace:Ki.isXRRenderTarget===!0?Ki.texture.colorSpace:Ce,alphaToCoverage:!!M.alphaToCoverage,map:Ji,matcap:ir,envMap:Z,envMapMode:Z&&S.mapping,envMapCubeUVHeight:I,aoMap:Ti,lightMap:Xi,bumpMap:hi,normalMap:Ci,displacementMap:n&&b,emissiveMap:Zi,normalMapObjectSpace:Ci&&M.normalMapType===tx,normalMapTangentSpace:Ci&&M.normalMapType===rx,metalnessMap:vi,roughnessMap:Y,anisotropy:L,anisotropyMap:qi,clearcoat:v,clearcoatMap:Ei,clearcoatNormalMap:Hi,clearcoatRoughnessMap:ci,dispersion:li,iridescence:Vi,iridescenceMap:Ri,iridescenceThicknessMap:bi,sheen:Ai,sheenColorMap:Pi,sheenRoughnessMap:pi,specularMap:fi,specularColorMap:_i,specularIntensityMap:Kr,transmission:Yi,transmissionMap:y,thicknessMap:ii,gradientMap:ti,opaque:M.transparent===!1&&M.blending===ba&&M.alphaToCoverage===!1,alphaMap:ri,alphaTest:ui,alphaHash:gi,combine:M.combine,mapUv:Ji&&K(M.map.channel),aoMapUv:Ti&&K(M.aoMap.channel),lightMapUv:Xi&&K(M.lightMap.channel),bumpMapUv:hi&&K(M.bumpMap.channel),normalMapUv:Ci&&K(M.normalMap.channel),displacementMapUv:b&&K(M.displacementMap.channel),emissiveMapUv:Zi&&K(M.emissiveMap.channel),metalnessMapUv:vi&&K(M.metalnessMap.channel),roughnessMapUv:Y&&K(M.roughnessMap.channel),anisotropyMapUv:qi&&K(M.anisotropyMap.channel),clearcoatMapUv:Ei&&K(M.clearcoatMap.channel),clearcoatNormalMapUv:Hi&&K(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ci&&K(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ri&&K(M.iridescenceMap.channel),iridescenceThicknessMapUv:bi&&K(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pi&&K(M.sheenColorMap.channel),sheenRoughnessMapUv:pi&&K(M.sheenRoughnessMap.channel),specularMapUv:fi&&K(M.specularMap.channel),specularColorMapUv:_i&&K(M.specularColorMap.channel),specularIntensityMapUv:Kr&&K(M.specularIntensityMap.channel),transmissionMapUv:y&&K(M.transmissionMap.channel),thicknessMapUv:ii&&K(M.thicknessMap.channel),alphaMapUv:ri&&K(M.alphaMap.channel),vertexTangents:!!f.attributes.tangent&&(Ci||L),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!f.attributes.uv&&(Ji||ri),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:D.isSkinnedMesh===!0,morphTargets:f.morphAttributes.position!==void 0,morphNormals:f.morphAttributes.normal!==void 0,morphColors:f.morphAttributes.color!==void 0,morphTargetsCount:ai,morphTextureStride:Ni,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fi,decodeVideoTexture:Ji&&M.map.isVideoTexture===!0&&Ur.getTransfer(M.map.colorSpace)===Cr,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===TA,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rr&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rr&&M.extensions.multiDraw===!0||Oi)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return G.vertexUv1s=m.has(1),G.vertexUv2s=m.has(2),G.vertexUv3s=m.has(3),m.clear(),G}function W(M){const F=[];if(M.shaderID?F.push(M.shaderID):(F.push(M.customVertexShaderID),F.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)F.push(R),F.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(F,M),h(F,M),F.push(e.outputColorSpace)),F.push(M.customProgramCacheKey),F.join()}function E(M,F){M.push(F.precision),M.push(F.outputColorSpace),M.push(F.envMapMode),M.push(F.envMapCubeUVHeight),M.push(F.mapUv),M.push(F.alphaMapUv),M.push(F.lightMapUv),M.push(F.aoMapUv),M.push(F.bumpMapUv),M.push(F.normalMapUv),M.push(F.displacementMapUv),M.push(F.emissiveMapUv),M.push(F.metalnessMapUv),M.push(F.roughnessMapUv),M.push(F.anisotropyMapUv),M.push(F.clearcoatMapUv),M.push(F.clearcoatNormalMapUv),M.push(F.clearcoatRoughnessMapUv),M.push(F.iridescenceMapUv),M.push(F.iridescenceThicknessMapUv),M.push(F.sheenColorMapUv),M.push(F.sheenRoughnessMapUv),M.push(F.specularMapUv),M.push(F.specularColorMapUv),M.push(F.specularIntensityMapUv),M.push(F.transmissionMapUv),M.push(F.thicknessMapUv),M.push(F.combine),M.push(F.fogExp2),M.push(F.sizeAttenuation),M.push(F.morphTargetsCount),M.push(F.morphAttributeCount),M.push(F.numDirLights),M.push(F.numPointLights),M.push(F.numSpotLights),M.push(F.numSpotLightMaps),M.push(F.numHemiLights),M.push(F.numRectAreaLights),M.push(F.numDirLightShadows),M.push(F.numPointLightShadows),M.push(F.numSpotLightShadows),M.push(F.numSpotLightShadowsWithMaps),M.push(F.numLightProbes),M.push(F.shadowMapType),M.push(F.toneMapping),M.push(F.numClippingPlanes),M.push(F.numClipIntersection),M.push(F.depthPacking)}function h(M,F){s.disableAll(),F.supportsVertexTextures&&s.enable(0),F.instancing&&s.enable(1),F.instancingColor&&s.enable(2),F.instancingMorph&&s.enable(3),F.matcap&&s.enable(4),F.envMap&&s.enable(5),F.normalMapObjectSpace&&s.enable(6),F.normalMapTangentSpace&&s.enable(7),F.clearcoat&&s.enable(8),F.iridescence&&s.enable(9),F.alphaTest&&s.enable(10),F.vertexColors&&s.enable(11),F.vertexAlphas&&s.enable(12),F.vertexUv1s&&s.enable(13),F.vertexUv2s&&s.enable(14),F.vertexUv3s&&s.enable(15),F.vertexTangents&&s.enable(16),F.anisotropy&&s.enable(17),F.alphaHash&&s.enable(18),F.batching&&s.enable(19),F.dispersion&&s.enable(20),F.batchingColor&&s.enable(21),M.push(s.mask),s.disableAll(),F.fog&&s.enable(0),F.useFog&&s.enable(1),F.flatShading&&s.enable(2),F.logarithmicDepthBuffer&&s.enable(3),F.skinning&&s.enable(4),F.morphTargets&&s.enable(5),F.morphNormals&&s.enable(6),F.morphColors&&s.enable(7),F.premultipliedAlpha&&s.enable(8),F.shadowMapEnabled&&s.enable(9),F.doubleSided&&s.enable(10),F.flipSided&&s.enable(11),F.useDepthPacking&&s.enable(12),F.dithering&&s.enable(13),F.transmission&&s.enable(14),F.sheen&&s.enable(15),F.opaque&&s.enable(16),F.pointsUvs&&s.enable(17),F.decodeVideoTexture&&s.enable(18),F.alphaToCoverage&&s.enable(19),M.push(s.mask)}function U(M){const F=x[M.type];let R;if(F){const z=UA[F];R=Xx.clone(z.uniforms)}else R=M.uniforms;return R}function N(M,F){let R;for(let z=0,D=q.length;z<D;z++){const j=q[z];if(j.cacheKey===F){R=j,++R.usedTimes;break}}return R===void 0&&(R=new bM(e,F,M,a),q.push(R)),R}function w(M){if(--M.usedTimes===0){const F=q.indexOf(M);q[F]=q[q.length-1],q.pop(),M.destroy()}}function p(M){V.remove(M)}function C(){V.dispose()}return{getParameters:u,getProgramCacheKey:W,getUniforms:U,acquireProgram:N,releaseProgram:w,releaseShaderCache:p,programs:q,dispose:C}}function JM(){let e=new WeakMap;function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function r(a){e.delete(a)}function t(a,o,s){e.get(a)[o]=s}function A(){e=new WeakMap}return{get:i,remove:r,update:t,dispose:A}}function PM(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.material.id!==i.material.id?e.material.id-i.material.id:e.z!==i.z?e.z-i.z:e.id-i.id}function bn(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.z!==i.z?i.z-e.z:e.id-i.id}function In(){const e=[];let i=0;const r=[],t=[],A=[];function a(){i=0,r.length=0,t.length=0,A.length=0}function o(c,n,l,x,K,u){let W=e[i];return W===void 0?(W={id:c.id,object:c,geometry:n,material:l,groupOrder:x,renderOrder:c.renderOrder,z:K,group:u},e[i]=W):(W.id=c.id,W.object=c,W.geometry=n,W.material=l,W.groupOrder=x,W.renderOrder=c.renderOrder,W.z=K,W.group=u),i++,W}function s(c,n,l,x,K,u){const W=o(c,n,l,x,K,u);l.transmission>0?t.push(W):l.transparent===!0?A.push(W):r.push(W)}function V(c,n,l,x,K,u){const W=o(c,n,l,x,K,u);l.transmission>0?t.unshift(W):l.transparent===!0?A.unshift(W):r.unshift(W)}function m(c,n){r.length>1&&r.sort(c||PM),t.length>1&&t.sort(n||bn),A.length>1&&A.sort(n||bn)}function q(){for(let c=i,n=e.length;c<n;c++){const l=e[c];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:r,transmissive:t,transparent:A,init:a,push:s,unshift:V,finish:q,sort:m}}function kM(){let e=new WeakMap;function i(t,A){const a=e.get(t);let o;return a===void 0?(o=new In,e.set(t,[o])):A>=a.length?(o=new In,a.push(o)):o=a[A],o}function r(){e=new WeakMap}return{get:i,dispose:r}}function _M(){const e={};return{get:function(i){if(e[i.id]!==void 0)return e[i.id];let r;switch(i.type){case"DirectionalLight":r={direction:new _,color:new dr};break;case"SpotLight":r={position:new _,direction:new _,color:new dr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new _,color:new dr,distance:0,decay:0};break;case"HemisphereLight":r={direction:new _,skyColor:new dr,groundColor:new dr};break;case"RectAreaLight":r={color:new dr,position:new _,halfWidth:new _,halfHeight:new _};break}return e[i.id]=r,r}}}function $M(){const e={};return{get:function(i){if(e[i.id]!==void 0)return e[i.id];let r;switch(i.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qr};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qr};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qr,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[i.id]=r,r}}}let iU=0;function rU(e,i){return(i.castShadow?2:0)-(e.castShadow?2:0)+(i.map?1:0)-(e.map?1:0)}function tU(e){const i=new _M,r=$M(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)t.probe.push(new _);const A=new _,a=new Hr,o=new Hr;function s(m){let q=0,c=0,n=0;for(let M=0;M<9;M++)t.probe[M].set(0,0,0);let l=0,x=0,K=0,u=0,W=0,E=0,h=0,U=0,N=0,w=0,p=0;m.sort(rU);for(let M=0,F=m.length;M<F;M++){const R=m[M],z=R.color,D=R.intensity,j=R.distance,f=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)q+=z.r*D,c+=z.g*D,n+=z.b*D;else if(R.isLightProbe){for(let T=0;T<9;T++)t.probe[T].addScaledVector(R.sh.coefficients[T],D);p++}else if(R.isDirectionalLight){const T=i.get(R);if(T.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const S=R.shadow,I=r.get(R);I.shadowIntensity=S.intensity,I.shadowBias=S.bias,I.shadowNormalBias=S.normalBias,I.shadowRadius=S.radius,I.shadowMapSize=S.mapSize,t.directionalShadow[l]=I,t.directionalShadowMap[l]=f,t.directionalShadowMatrix[l]=R.shadow.matrix,E++}t.directional[l]=T,l++}else if(R.isSpotLight){const T=i.get(R);T.position.setFromMatrixPosition(R.matrixWorld),T.color.copy(z).multiplyScalar(D),T.distance=j,T.coneCos=Math.cos(R.angle),T.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),T.decay=R.decay,t.spot[K]=T;const S=R.shadow;if(R.map&&(t.spotLightMap[N]=R.map,N++,S.updateMatrices(R),R.castShadow&&w++),t.spotLightMatrix[K]=S.matrix,R.castShadow){const I=r.get(R);I.shadowIntensity=S.intensity,I.shadowBias=S.bias,I.shadowNormalBias=S.normalBias,I.shadowRadius=S.radius,I.shadowMapSize=S.mapSize,t.spotShadow[K]=I,t.spotShadowMap[K]=f,U++}K++}else if(R.isRectAreaLight){const T=i.get(R);T.color.copy(z).multiplyScalar(D),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),t.rectArea[u]=T,u++}else if(R.isPointLight){const T=i.get(R);if(T.color.copy(R.color).multiplyScalar(R.intensity),T.distance=R.distance,T.decay=R.decay,R.castShadow){const S=R.shadow,I=r.get(R);I.shadowIntensity=S.intensity,I.shadowBias=S.bias,I.shadowNormalBias=S.normalBias,I.shadowRadius=S.radius,I.shadowMapSize=S.mapSize,I.shadowCameraNear=S.camera.near,I.shadowCameraFar=S.camera.far,t.pointShadow[x]=I,t.pointShadowMap[x]=f,t.pointShadowMatrix[x]=R.shadow.matrix,h++}t.point[x]=T,x++}else if(R.isHemisphereLight){const T=i.get(R);T.skyColor.copy(R.color).multiplyScalar(D),T.groundColor.copy(R.groundColor).multiplyScalar(D),t.hemi[W]=T,W++}}u>0&&(e.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=wi.LTC_FLOAT_1,t.rectAreaLTC2=wi.LTC_FLOAT_2):(t.rectAreaLTC1=wi.LTC_HALF_1,t.rectAreaLTC2=wi.LTC_HALF_2)),t.ambient[0]=q,t.ambient[1]=c,t.ambient[2]=n;const C=t.hash;(C.directionalLength!==l||C.pointLength!==x||C.spotLength!==K||C.rectAreaLength!==u||C.hemiLength!==W||C.numDirectionalShadows!==E||C.numPointShadows!==h||C.numSpotShadows!==U||C.numSpotMaps!==N||C.numLightProbes!==p)&&(t.directional.length=l,t.spot.length=K,t.rectArea.length=u,t.point.length=x,t.hemi.length=W,t.directionalShadow.length=E,t.directionalShadowMap.length=E,t.pointShadow.length=h,t.pointShadowMap.length=h,t.spotShadow.length=U,t.spotShadowMap.length=U,t.directionalShadowMatrix.length=E,t.pointShadowMatrix.length=h,t.spotLightMatrix.length=U+N-w,t.spotLightMap.length=N,t.numSpotLightShadowsWithMaps=w,t.numLightProbes=p,C.directionalLength=l,C.pointLength=x,C.spotLength=K,C.rectAreaLength=u,C.hemiLength=W,C.numDirectionalShadows=E,C.numPointShadows=h,C.numSpotShadows=U,C.numSpotMaps=N,C.numLightProbes=p,t.version=iU++)}function V(m,q){let c=0,n=0,l=0,x=0,K=0;const u=q.matrixWorldInverse;for(let W=0,E=m.length;W<E;W++){const h=m[W];if(h.isDirectionalLight){const U=t.directional[c];U.direction.setFromMatrixPosition(h.matrixWorld),A.setFromMatrixPosition(h.target.matrixWorld),U.direction.sub(A),U.direction.transformDirection(u),c++}else if(h.isSpotLight){const U=t.spot[l];U.position.setFromMatrixPosition(h.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(h.matrixWorld),A.setFromMatrixPosition(h.target.matrixWorld),U.direction.sub(A),U.direction.transformDirection(u),l++}else if(h.isRectAreaLight){const U=t.rectArea[x];U.position.setFromMatrixPosition(h.matrixWorld),U.position.applyMatrix4(u),o.identity(),a.copy(h.matrixWorld),a.premultiply(u),o.extractRotation(a),U.halfWidth.set(h.width*.5,0,0),U.halfHeight.set(0,h.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),x++}else if(h.isPointLight){const U=t.point[n];U.position.setFromMatrixPosition(h.matrixWorld),U.position.applyMatrix4(u),n++}else if(h.isHemisphereLight){const U=t.hemi[K];U.direction.setFromMatrixPosition(h.matrixWorld),U.direction.transformDirection(u),K++}}}return{setup:s,setupView:V,state:t}}function vn(e){const i=new tU(e),r=[],t=[];function A(q){m.camera=q,r.length=0,t.length=0}function a(q){r.push(q)}function o(q){t.push(q)}function s(){i.setup(r)}function V(q){i.setupView(r,q)}const m={lightsArray:r,shadowsArray:t,camera:null,lights:i,transmissionRenderTarget:{}};return{init:A,state:m,setupLights:s,setupLightsView:V,pushLight:a,pushShadow:o}}function AU(e){let i=new WeakMap;function r(A,a=0){const o=i.get(A);let s;return o===void 0?(s=new vn(e),i.set(A,[s])):a>=o.length?(s=new vn(e),o.push(s)):s=o[a],s}function t(){i=new WeakMap}return{get:r,dispose:t}}class eU extends Hl{constructor(i){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$K,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(i)}copy(i){return super.copy(i),this.depthPacking=i.depthPacking,this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this}}class aU extends Hl{constructor(i){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(i)}copy(i){return super.copy(i),this.map=i.map,this.alphaMap=i.alphaMap,this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this}}const oU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lU(e,i,r){let t=new Uu;const A=new qr,a=new qr,o=new $r,s=new eU({depthPacking:ix}),V=new aU,m={},q=r.maxTextureSize,c={[Le]:Nt,[Nt]:Le,[TA]:TA},n=new CA({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qr},radius:{value:4}},vertexShader:oU,fragmentShader:sU}),l=n.clone();l.defines.HORIZONTAL_PASS=1;const x=new Ye;x.setAttribute("position",new NA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const K=new KA(x,n),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let W=this.type;this.render=function(w,p,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;const M=e.getRenderTarget(),F=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Fe),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=W!==yA&&this.type===yA,j=W===yA&&this.type!==yA;for(let f=0,T=w.length;f<T;f++){const S=w[f],I=S.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;A.copy(I.mapSize);const mi=I.getFrameExtents();if(A.multiply(mi),a.copy(I.mapSize),(A.x>q||A.y>q)&&(A.x>q&&(a.x=Math.floor(q/mi.x),A.x=a.x*mi.x,I.mapSize.x=a.x),A.y>q&&(a.y=Math.floor(q/mi.y),A.y=a.y*mi.y,I.mapSize.y=a.y)),I.map===null||D===!0||j===!0){const ai=this.type!==yA?{minFilter:it,magFilter:it}:{};I.map!==null&&I.map.dispose(),I.map=new pe(A.x,A.y,ai),I.map.texture.name=S.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const X=I.getViewportCount();for(let ai=0;ai<X;ai++){const Ni=I.getViewport(ai);o.set(a.x*Ni.x,a.y*Ni.y,a.x*Ni.z,a.y*Ni.w),z.viewport(o),I.updateMatrices(S,ai),t=I.getFrustum(),U(p,C,I.camera,S,this.type)}I.isPointLightShadow!==!0&&this.type===yA&&E(I,C),I.needsUpdate=!1}W=this.type,u.needsUpdate=!1,e.setRenderTarget(M,F,R)};function E(w,p){const C=i.update(K);n.defines.VSM_SAMPLES!==w.blurSamples&&(n.defines.VSM_SAMPLES=w.blurSamples,l.defines.VSM_SAMPLES=w.blurSamples,n.needsUpdate=!0,l.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pe(A.x,A.y)),n.uniforms.shadow_pass.value=w.map.texture,n.uniforms.resolution.value=w.mapSize,n.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(p,null,C,n,K,null),l.uniforms.shadow_pass.value=w.mapPass.texture,l.uniforms.resolution.value=w.mapSize,l.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(p,null,C,l,K,null)}function h(w,p,C,M){let F=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)F=R;else if(F=C.isPointLight===!0?V:s,e.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0){const z=F.uuid,D=p.uuid;let j=m[z];j===void 0&&(j={},m[z]=j);let f=j[D];f===void 0&&(f=F.clone(),j[D]=f,p.addEventListener("dispose",N)),F=f}if(F.visible=p.visible,F.wireframe=p.wireframe,M===yA?F.side=p.shadowSide!==null?p.shadowSide:p.side:F.side=p.shadowSide!==null?p.shadowSide:c[p.side],F.alphaMap=p.alphaMap,F.alphaTest=p.alphaTest,F.map=p.map,F.clipShadows=p.clipShadows,F.clippingPlanes=p.clippingPlanes,F.clipIntersection=p.clipIntersection,F.displacementMap=p.displacementMap,F.displacementScale=p.displacementScale,F.displacementBias=p.displacementBias,F.wireframeLinewidth=p.wireframeLinewidth,F.linewidth=p.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=e.properties.get(F);z.light=C}return F}function U(w,p,C,M,F){if(w.visible===!1)return;if(w.layers.test(p.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===yA)&&(!w.frustumCulled||t.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=i.update(w),j=w.material;if(Array.isArray(j)){const f=D.groups;for(let T=0,S=f.length;T<S;T++){const I=f[T],mi=j[I.materialIndex];if(mi&&mi.visible){const X=h(w,mi,M,F);w.onBeforeShadow(e,w,p,C,D,X,I),e.renderBufferDirect(C,null,D,X,w,I),w.onAfterShadow(e,w,p,C,D,X,I)}}}else if(j.visible){const f=h(w,j,M,F);w.onBeforeShadow(e,w,p,C,D,f,null),e.renderBufferDirect(C,null,D,f,w,null),w.onAfterShadow(e,w,p,C,D,f,null)}}const z=w.children;for(let D=0,j=z.length;D<j;D++)U(z[D],p,C,M,F)}function N(w){w.target.removeEventListener("dispose",N);for(const C in m){const M=m[C],F=w.target.uuid;F in M&&(M[F].dispose(),delete M[F])}}}function VU(e){function i(){let y=!1;const ii=new $r;let ti=null;const ri=new $r(0,0,0,0);return{setMask:function(ui){ti!==ui&&!y&&(e.colorMask(ui,ui,ui,ui),ti=ui)},setLocked:function(ui){y=ui},setClear:function(ui,gi,rr,Fi,G){G===!0&&(ui*=Fi,gi*=Fi,rr*=Fi),ii.set(ui,gi,rr,Fi),ri.equals(ii)===!1&&(e.clearColor(ui,gi,rr,Fi),ri.copy(ii))},reset:function(){y=!1,ti=null,ri.set(-1,0,0,0)}}}function r(){let y=!1,ii=null,ti=null,ri=null;return{setTest:function(ui){ui?Wi(e.DEPTH_TEST):Ki(e.DEPTH_TEST)},setMask:function(ui){ii!==ui&&!y&&(e.depthMask(ui),ii=ui)},setFunc:function(ui){if(ti!==ui){switch(ui){case yK:e.depthFunc(e.NEVER);break;case QK:e.depthFunc(e.ALWAYS);break;case BK:e.depthFunc(e.LESS);break;case wl:e.depthFunc(e.LEQUAL);break;case gK:e.depthFunc(e.EQUAL);break;case SK:e.depthFunc(e.GEQUAL);break;case TK:e.depthFunc(e.GREATER);break;case OK:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ti=ui}},setLocked:function(ui){y=ui},setClear:function(ui){ri!==ui&&(e.clearDepth(ui),ri=ui)},reset:function(){y=!1,ii=null,ti=null,ri=null}}}function t(){let y=!1,ii=null,ti=null,ri=null,ui=null,gi=null,rr=null,Fi=null,G=null;return{setTest:function($){y||($?Wi(e.STENCIL_TEST):Ki(e.STENCIL_TEST))},setMask:function($){ii!==$&&!y&&(e.stencilMask($),ii=$)},setFunc:function($,B,P){(ti!==$||ri!==B||ui!==P)&&(e.stencilFunc($,B,P),ti=$,ri=B,ui=P)},setOp:function($,B,P){(gi!==$||rr!==B||Fi!==P)&&(e.stencilOp($,B,P),gi=$,rr=B,Fi=P)},setLocked:function($){y=$},setClear:function($){G!==$&&(e.clearStencil($),G=$)},reset:function(){y=!1,ii=null,ti=null,ri=null,ui=null,gi=null,rr=null,Fi=null,G=null}}}const A=new i,a=new r,o=new t,s=new WeakMap,V=new WeakMap;let m={},q={},c=new WeakMap,n=[],l=null,x=!1,K=null,u=null,W=null,E=null,h=null,U=null,N=null,w=new dr(0,0,0),p=0,C=!1,M=null,F=null,R=null,z=null,D=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let f=!1,T=0;const S=e.getParameter(e.VERSION);S.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(S)[1]),f=T>=1):S.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(S)[1]),f=T>=2);let I=null,mi={};const X=e.getParameter(e.SCISSOR_BOX),ai=e.getParameter(e.VIEWPORT),Ni=new $r().fromArray(X),Si=new $r().fromArray(ai);function J(y,ii,ti,ri){const ui=new Uint8Array(4),gi=e.createTexture();e.bindTexture(y,gi),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let rr=0;rr<ti;rr++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(ii,0,e.RGBA,1,1,ri,0,e.RGBA,e.UNSIGNED_BYTE,ui):e.texImage2D(ii+rr,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ui);return gi}const oi={};oi[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),oi[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oi[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oi[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),A.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Wi(e.DEPTH_TEST),a.setFunc(wl),hi(!1),Ci(kq),Wi(e.CULL_FACE),Ti(Fe);function Wi(y){m[y]!==!0&&(e.enable(y),m[y]=!0)}function Ki(y){m[y]!==!1&&(e.disable(y),m[y]=!1)}function Li(y,ii){return q[y]!==ii?(e.bindFramebuffer(y,ii),q[y]=ii,y===e.DRAW_FRAMEBUFFER&&(q[e.FRAMEBUFFER]=ii),y===e.FRAMEBUFFER&&(q[e.DRAW_FRAMEBUFFER]=ii),!0):!1}function Oi(y,ii){let ti=n,ri=!1;if(y){ti=c.get(ii),ti===void 0&&(ti=[],c.set(ii,ti));const ui=y.textures;if(ti.length!==ui.length||ti[0]!==e.COLOR_ATTACHMENT0){for(let gi=0,rr=ui.length;gi<rr;gi++)ti[gi]=e.COLOR_ATTACHMENT0+gi;ti.length=ui.length,ri=!0}}else ti[0]!==e.BACK&&(ti[0]=e.BACK,ri=!0);ri&&e.drawBuffers(ti)}function Ji(y){return l!==y?(e.useProgram(y),l=y,!0):!1}const ir={[He]:e.FUNC_ADD,[hK]:e.FUNC_SUBTRACT,[EK]:e.FUNC_REVERSE_SUBTRACT};ir[MK]=e.MIN,ir[UK]=e.MAX;const Z={[LK]:e.ZERO,[pK]:e.ONE,[dK]:e.SRC_COLOR,[$V]:e.SRC_ALPHA,[XK]:e.SRC_ALPHA_SATURATE,[CK]:e.DST_COLOR,[NK]:e.DST_ALPHA,[wK]:e.ONE_MINUS_SRC_COLOR,[im]:e.ONE_MINUS_SRC_ALPHA,[YK]:e.ONE_MINUS_DST_COLOR,[RK]:e.ONE_MINUS_DST_ALPHA,[ZK]:e.CONSTANT_COLOR,[GK]:e.ONE_MINUS_CONSTANT_COLOR,[zK]:e.CONSTANT_ALPHA,[DK]:e.ONE_MINUS_CONSTANT_ALPHA};function Ti(y,ii,ti,ri,ui,gi,rr,Fi,G,$){if(y===Fe){x===!0&&(Ki(e.BLEND),x=!1);return}if(x===!1&&(Wi(e.BLEND),x=!0),y!==FK){if(y!==K||$!==C){if((u!==He||h!==He)&&(e.blendEquation(e.FUNC_ADD),u=He,h=He),$)switch(y){case ba:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _q:e.blendFunc(e.ONE,e.ONE);break;case $q:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case rn:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case _q:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case $q:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case rn:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}W=null,E=null,U=null,N=null,w.set(0,0,0),p=0,K=y,C=$}return}ui=ui||ii,gi=gi||ti,rr=rr||ri,(ii!==u||ui!==h)&&(e.blendEquationSeparate(ir[ii],ir[ui]),u=ii,h=ui),(ti!==W||ri!==E||gi!==U||rr!==N)&&(e.blendFuncSeparate(Z[ti],Z[ri],Z[gi],Z[rr]),W=ti,E=ri,U=gi,N=rr),(Fi.equals(w)===!1||G!==p)&&(e.blendColor(Fi.r,Fi.g,Fi.b,G),w.copy(Fi),p=G),K=y,C=!1}function Xi(y,ii){y.side===TA?Ki(e.CULL_FACE):Wi(e.CULL_FACE);let ti=y.side===Nt;ii&&(ti=!ti),hi(ti),y.blending===ba&&y.transparent===!1?Ti(Fe):Ti(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),a.setFunc(y.depthFunc),a.setTest(y.depthTest),a.setMask(y.depthWrite),A.setMask(y.colorWrite);const ri=y.stencilWrite;o.setTest(ri),ri&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Zi(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Wi(e.SAMPLE_ALPHA_TO_COVERAGE):Ki(e.SAMPLE_ALPHA_TO_COVERAGE)}function hi(y){M!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),M=y)}function Ci(y){y!==WK?(Wi(e.CULL_FACE),y!==F&&(y===kq?e.cullFace(e.BACK):y===KK?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ki(e.CULL_FACE),F=y}function b(y){y!==R&&(f&&e.lineWidth(y),R=y)}function Zi(y,ii,ti){y?(Wi(e.POLYGON_OFFSET_FILL),(z!==ii||D!==ti)&&(e.polygonOffset(ii,ti),z=ii,D=ti)):Ki(e.POLYGON_OFFSET_FILL)}function vi(y){y?Wi(e.SCISSOR_TEST):Ki(e.SCISSOR_TEST)}function Y(y){y===void 0&&(y=e.TEXTURE0+j-1),I!==y&&(e.activeTexture(y),I=y)}function L(y,ii,ti){ti===void 0&&(I===null?ti=e.TEXTURE0+j-1:ti=I);let ri=mi[ti];ri===void 0&&(ri={type:void 0,texture:void 0},mi[ti]=ri),(ri.type!==y||ri.texture!==ii)&&(I!==ti&&(e.activeTexture(ti),I=ti),e.bindTexture(y,ii||oi[y]),ri.type=y,ri.texture=ii)}function v(){const y=mi[I];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function li(){try{e.compressedTexImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Vi(){try{e.compressedTexImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ai(){try{e.texSubImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Yi(){try{e.texSubImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function qi(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ei(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Hi(){try{e.texStorage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ci(){try{e.texStorage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ri(){try{e.texImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function bi(){try{e.texImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Pi(y){Ni.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),Ni.copy(y))}function pi(y){Si.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),Si.copy(y))}function fi(y,ii){let ti=V.get(ii);ti===void 0&&(ti=new WeakMap,V.set(ii,ti));let ri=ti.get(y);ri===void 0&&(ri=e.getUniformBlockIndex(ii,y.name),ti.set(y,ri))}function _i(y,ii){const ri=V.get(ii).get(y);s.get(ii)!==ri&&(e.uniformBlockBinding(ii,ri,y.__bindingPointIndex),s.set(ii,ri))}function Kr(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},I=null,mi={},q={},c=new WeakMap,n=[],l=null,x=!1,K=null,u=null,W=null,E=null,h=null,U=null,N=null,w=new dr(0,0,0),p=0,C=!1,M=null,F=null,R=null,z=null,D=null,Ni.set(0,0,e.canvas.width,e.canvas.height),Si.set(0,0,e.canvas.width,e.canvas.height),A.reset(),a.reset(),o.reset()}return{buffers:{color:A,depth:a,stencil:o},enable:Wi,disable:Ki,bindFramebuffer:Li,drawBuffers:Oi,useProgram:Ji,setBlending:Ti,setMaterial:Xi,setFlipSided:hi,setCullFace:Ci,setLineWidth:b,setPolygonOffset:Zi,setScissorTest:vi,activeTexture:Y,bindTexture:L,unbindTexture:v,compressedTexImage2D:li,compressedTexImage3D:Vi,texImage2D:Ri,texImage3D:bi,updateUBOMapping:fi,uniformBlockBinding:_i,texStorage2D:Hi,texStorage3D:ci,texSubImage2D:Ai,texSubImage3D:Yi,compressedTexSubImage2D:qi,compressedTexSubImage3D:Ei,scissor:Pi,viewport:pi,reset:Kr}}function Hn(e,i,r,t){const A=mU(t);switch(r){case Au:return e*i;case au:return e*i;case ou:return e*i*2;case su:return e*i/A.components*A.byteLength;case cq:return e*i/A.components*A.byteLength;case lu:return e*i*2/A.components*A.byteLength;case uq:return e*i*2/A.components*A.byteLength;case eu:return e*i*3/A.components*A.byteLength;case wt:return e*i*4/A.components*A.byteLength;case Wq:return e*i*4/A.components*A.byteLength;case ll:case Vl:return Math.floor((e+3)/4)*Math.floor((i+3)/4)*8;case ml:case ql:return Math.floor((e+3)/4)*Math.floor((i+3)/4)*16;case om:case lm:return Math.max(e,16)*Math.max(i,8)/4;case am:case sm:return Math.max(e,8)*Math.max(i,8)/2;case Vm:case mm:return Math.floor((e+3)/4)*Math.floor((i+3)/4)*8;case qm:return Math.floor((e+3)/4)*Math.floor((i+3)/4)*16;case nm:return Math.floor((e+3)/4)*Math.floor((i+3)/4)*16;case cm:return Math.floor((e+4)/5)*Math.floor((i+3)/4)*16;case um:return Math.floor((e+4)/5)*Math.floor((i+4)/5)*16;case Wm:return Math.floor((e+5)/6)*Math.floor((i+4)/5)*16;case Km:return Math.floor((e+5)/6)*Math.floor((i+5)/6)*16;case xm:return Math.floor((e+7)/8)*Math.floor((i+4)/5)*16;case Fm:return Math.floor((e+7)/8)*Math.floor((i+5)/6)*16;case hm:return Math.floor((e+7)/8)*Math.floor((i+7)/8)*16;case Em:return Math.floor((e+9)/10)*Math.floor((i+4)/5)*16;case Mm:return Math.floor((e+9)/10)*Math.floor((i+5)/6)*16;case Um:return Math.floor((e+9)/10)*Math.floor((i+7)/8)*16;case Lm:return Math.floor((e+9)/10)*Math.floor((i+9)/10)*16;case pm:return Math.floor((e+11)/12)*Math.floor((i+9)/10)*16;case dm:return Math.floor((e+11)/12)*Math.floor((i+11)/12)*16;case nl:case wm:case Nm:return Math.ceil(e/4)*Math.ceil(i/4)*16;case Vu:case Rm:return Math.ceil(e/4)*Math.ceil(i/4)*8;case Cm:case Ym:return Math.ceil(e/4)*Math.ceil(i/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function mU(e){switch(e){case kA:case iu:return{byteLength:1,components:1};case es:case ru:case xs:return{byteLength:2,components:1};case qq:case nq:return{byteLength:2,components:4};case la:case mq:case WA:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function qU(e,i,r,t,A,a,o){const s=i.has("WEBGL_multisampled_render_to_texture")?i.get("WEBGL_multisampled_render_to_texture"):null,V=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new qr,q=new WeakMap;let c;const n=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(Y,L){return l?new OffscreenCanvas(Y,L):Xl("canvas")}function K(Y,L,v){let li=1;const Vi=vi(Y);if((Vi.width>v||Vi.height>v)&&(li=v/Math.max(Vi.width,Vi.height)),li<1)if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap||typeof VideoFrame<"u"&&Y instanceof VideoFrame){const Ai=Math.floor(li*Vi.width),Yi=Math.floor(li*Vi.height);c===void 0&&(c=x(Ai,Yi));const qi=L?x(Ai,Yi):c;return qi.width=Ai,qi.height=Yi,qi.getContext("2d").drawImage(Y,0,0,Ai,Yi),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Vi.width+"x"+Vi.height+") to ("+Ai+"x"+Yi+")."),qi}else return"data"in Y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Vi.width+"x"+Vi.height+")."),Y;return Y}function u(Y){return Y.generateMipmaps&&Y.minFilter!==it&&Y.minFilter!==Ot}function W(Y){e.generateMipmap(Y)}function E(Y,L,v,li,Vi=!1){if(Y!==null){if(e[Y]!==void 0)return e[Y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Y+"'")}let Ai=L;if(L===e.RED&&(v===e.FLOAT&&(Ai=e.R32F),v===e.HALF_FLOAT&&(Ai=e.R16F),v===e.UNSIGNED_BYTE&&(Ai=e.R8)),L===e.RED_INTEGER&&(v===e.UNSIGNED_BYTE&&(Ai=e.R8UI),v===e.UNSIGNED_SHORT&&(Ai=e.R16UI),v===e.UNSIGNED_INT&&(Ai=e.R32UI),v===e.BYTE&&(Ai=e.R8I),v===e.SHORT&&(Ai=e.R16I),v===e.INT&&(Ai=e.R32I)),L===e.RG&&(v===e.FLOAT&&(Ai=e.RG32F),v===e.HALF_FLOAT&&(Ai=e.RG16F),v===e.UNSIGNED_BYTE&&(Ai=e.RG8)),L===e.RG_INTEGER&&(v===e.UNSIGNED_BYTE&&(Ai=e.RG8UI),v===e.UNSIGNED_SHORT&&(Ai=e.RG16UI),v===e.UNSIGNED_INT&&(Ai=e.RG32UI),v===e.BYTE&&(Ai=e.RG8I),v===e.SHORT&&(Ai=e.RG16I),v===e.INT&&(Ai=e.RG32I)),L===e.RGB&&v===e.UNSIGNED_INT_5_9_9_9_REV&&(Ai=e.RGB9_E5),L===e.RGBA){const Yi=Vi?Nl:Ur.getTransfer(li);v===e.FLOAT&&(Ai=e.RGBA32F),v===e.HALF_FLOAT&&(Ai=e.RGBA16F),v===e.UNSIGNED_BYTE&&(Ai=Yi===Cr?e.SRGB8_ALPHA8:e.RGBA8),v===e.UNSIGNED_SHORT_4_4_4_4&&(Ai=e.RGBA4),v===e.UNSIGNED_SHORT_5_5_5_1&&(Ai=e.RGB5_A1)}return(Ai===e.R16F||Ai===e.R32F||Ai===e.RG16F||Ai===e.RG32F||Ai===e.RGBA16F||Ai===e.RGBA32F)&&i.get("EXT_color_buffer_float"),Ai}function h(Y,L){let v;return Y?L===null||L===la||L===ao?v=e.DEPTH24_STENCIL8:L===WA?v=e.DEPTH32F_STENCIL8:L===es&&(v=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===la||L===ao?v=e.DEPTH_COMPONENT24:L===WA?v=e.DEPTH_COMPONENT32F:L===es&&(v=e.DEPTH_COMPONENT16),v}function U(Y,L){return u(Y)===!0||Y.isFramebufferTexture&&Y.minFilter!==it&&Y.minFilter!==Ot?Math.log2(Math.max(L.width,L.height))+1:Y.mipmaps!==void 0&&Y.mipmaps.length>0?Y.mipmaps.length:Y.isCompressedTexture&&Array.isArray(Y.image)?L.mipmaps.length:1}function N(Y){const L=Y.target;L.removeEventListener("dispose",N),p(L),L.isVideoTexture&&q.delete(L)}function w(Y){const L=Y.target;L.removeEventListener("dispose",w),M(L)}function p(Y){const L=t.get(Y);if(L.__webglInit===void 0)return;const v=Y.source,li=n.get(v);if(li){const Vi=li[L.__cacheKey];Vi.usedTimes--,Vi.usedTimes===0&&C(Y),Object.keys(li).length===0&&n.delete(v)}t.remove(Y)}function C(Y){const L=t.get(Y);e.deleteTexture(L.__webglTexture);const v=Y.source,li=n.get(v);delete li[L.__cacheKey],o.memory.textures--}function M(Y){const L=t.get(Y);if(Y.depthTexture&&Y.depthTexture.dispose(),Y.isWebGLCubeRenderTarget)for(let li=0;li<6;li++){if(Array.isArray(L.__webglFramebuffer[li]))for(let Vi=0;Vi<L.__webglFramebuffer[li].length;Vi++)e.deleteFramebuffer(L.__webglFramebuffer[li][Vi]);else e.deleteFramebuffer(L.__webglFramebuffer[li]);L.__webglDepthbuffer&&e.deleteRenderbuffer(L.__webglDepthbuffer[li])}else{if(Array.isArray(L.__webglFramebuffer))for(let li=0;li<L.__webglFramebuffer.length;li++)e.deleteFramebuffer(L.__webglFramebuffer[li]);else e.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&e.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&e.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let li=0;li<L.__webglColorRenderbuffer.length;li++)L.__webglColorRenderbuffer[li]&&e.deleteRenderbuffer(L.__webglColorRenderbuffer[li]);L.__webglDepthRenderbuffer&&e.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const v=Y.textures;for(let li=0,Vi=v.length;li<Vi;li++){const Ai=t.get(v[li]);Ai.__webglTexture&&(e.deleteTexture(Ai.__webglTexture),o.memory.textures--),t.remove(v[li])}t.remove(Y)}let F=0;function R(){F=0}function z(){const Y=F;return Y>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Y+" texture units while this GPU supports only "+A.maxTextures),F+=1,Y}function D(Y){const L=[];return L.push(Y.wrapS),L.push(Y.wrapT),L.push(Y.wrapR||0),L.push(Y.magFilter),L.push(Y.minFilter),L.push(Y.anisotropy),L.push(Y.internalFormat),L.push(Y.format),L.push(Y.type),L.push(Y.generateMipmaps),L.push(Y.premultiplyAlpha),L.push(Y.flipY),L.push(Y.unpackAlignment),L.push(Y.colorSpace),L.join()}function j(Y,L){const v=t.get(Y);if(Y.isVideoTexture&&b(Y),Y.isRenderTargetTexture===!1&&Y.version>0&&v.__version!==Y.version){const li=Y.image;if(li===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(li.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Si(v,Y,L);return}}r.bindTexture(e.TEXTURE_2D,v.__webglTexture,e.TEXTURE0+L)}function f(Y,L){const v=t.get(Y);if(Y.version>0&&v.__version!==Y.version){Si(v,Y,L);return}r.bindTexture(e.TEXTURE_2D_ARRAY,v.__webglTexture,e.TEXTURE0+L)}function T(Y,L){const v=t.get(Y);if(Y.version>0&&v.__version!==Y.version){Si(v,Y,L);return}r.bindTexture(e.TEXTURE_3D,v.__webglTexture,e.TEXTURE0+L)}function S(Y,L){const v=t.get(Y);if(Y.version>0&&v.__version!==Y.version){J(v,Y,L);return}r.bindTexture(e.TEXTURE_CUBE_MAP,v.__webglTexture,e.TEXTURE0+L)}const I={[Am]:e.REPEAT,[bA]:e.CLAMP_TO_EDGE,[em]:e.MIRRORED_REPEAT},mi={[it]:e.NEAREST,[_K]:e.NEAREST_MIPMAP_NEAREST,[ps]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[AV]:e.LINEAR_MIPMAP_NEAREST,[Pe]:e.LINEAR_MIPMAP_LINEAR},X={[Ax]:e.NEVER,[Vx]:e.ALWAYS,[ex]:e.LESS,[mu]:e.LEQUAL,[ax]:e.EQUAL,[lx]:e.GEQUAL,[ox]:e.GREATER,[sx]:e.NOTEQUAL};function ai(Y,L){if(L.type===WA&&i.has("OES_texture_float_linear")===!1&&(L.magFilter===Ot||L.magFilter===AV||L.magFilter===ps||L.magFilter===Pe||L.minFilter===Ot||L.minFilter===AV||L.minFilter===ps||L.minFilter===Pe)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(Y,e.TEXTURE_WRAP_S,I[L.wrapS]),e.texParameteri(Y,e.TEXTURE_WRAP_T,I[L.wrapT]),(Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(Y,e.TEXTURE_WRAP_R,I[L.wrapR]),e.texParameteri(Y,e.TEXTURE_MAG_FILTER,mi[L.magFilter]),e.texParameteri(Y,e.TEXTURE_MIN_FILTER,mi[L.minFilter]),L.compareFunction&&(e.texParameteri(Y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(Y,e.TEXTURE_COMPARE_FUNC,X[L.compareFunction])),i.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===it||L.minFilter!==ps&&L.minFilter!==Pe||L.type===WA&&i.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||t.get(L).__currentAnisotropy){const v=i.get("EXT_texture_filter_anisotropic");e.texParameterf(Y,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,A.getMaxAnisotropy())),t.get(L).__currentAnisotropy=L.anisotropy}}}function Ni(Y,L){let v=!1;Y.__webglInit===void 0&&(Y.__webglInit=!0,L.addEventListener("dispose",N));const li=L.source;let Vi=n.get(li);Vi===void 0&&(Vi={},n.set(li,Vi));const Ai=D(L);if(Ai!==Y.__cacheKey){Vi[Ai]===void 0&&(Vi[Ai]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,v=!0),Vi[Ai].usedTimes++;const Yi=Vi[Y.__cacheKey];Yi!==void 0&&(Vi[Y.__cacheKey].usedTimes--,Yi.usedTimes===0&&C(L)),Y.__cacheKey=Ai,Y.__webglTexture=Vi[Ai].texture}return v}function Si(Y,L,v){let li=e.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(li=e.TEXTURE_2D_ARRAY),L.isData3DTexture&&(li=e.TEXTURE_3D);const Vi=Ni(Y,L),Ai=L.source;r.bindTexture(li,Y.__webglTexture,e.TEXTURE0+v);const Yi=t.get(Ai);if(Ai.version!==Yi.__version||Vi===!0){r.activeTexture(e.TEXTURE0+v);const qi=Ur.getPrimaries(Ur.workingColorSpace),Ei=L.colorSpace===OA?null:Ur.getPrimaries(L.colorSpace),Hi=L.colorSpace===OA||qi===Ei?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Hi);let ci=K(L.image,!1,A.maxTextureSize);ci=Zi(L,ci);const Ri=a.convert(L.format,L.colorSpace),bi=a.convert(L.type);let Pi=E(L.internalFormat,Ri,bi,L.colorSpace,L.isVideoTexture);ai(li,L);let pi;const fi=L.mipmaps,_i=L.isVideoTexture!==!0,Kr=Yi.__version===void 0||Vi===!0,y=Ai.dataReady,ii=U(L,ci);if(L.isDepthTexture)Pi=h(L.format===oo,L.type),Kr&&(_i?r.texStorage2D(e.TEXTURE_2D,1,Pi,ci.width,ci.height):r.texImage2D(e.TEXTURE_2D,0,Pi,ci.width,ci.height,0,Ri,bi,null));else if(L.isDataTexture)if(fi.length>0){_i&&Kr&&r.texStorage2D(e.TEXTURE_2D,ii,Pi,fi[0].width,fi[0].height);for(let ti=0,ri=fi.length;ti<ri;ti++)pi=fi[ti],_i?y&&r.texSubImage2D(e.TEXTURE_2D,ti,0,0,pi.width,pi.height,Ri,bi,pi.data):r.texImage2D(e.TEXTURE_2D,ti,Pi,pi.width,pi.height,0,Ri,bi,pi.data);L.generateMipmaps=!1}else _i?(Kr&&r.texStorage2D(e.TEXTURE_2D,ii,Pi,ci.width,ci.height),y&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,ci.width,ci.height,Ri,bi,ci.data)):r.texImage2D(e.TEXTURE_2D,0,Pi,ci.width,ci.height,0,Ri,bi,ci.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){_i&&Kr&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ii,Pi,fi[0].width,fi[0].height,ci.depth);for(let ti=0,ri=fi.length;ti<ri;ti++)if(pi=fi[ti],L.format!==wt)if(Ri!==null)if(_i){if(y)if(L.layerUpdates.size>0){const ui=Hn(pi.width,pi.height,L.format,L.type);for(const gi of L.layerUpdates){const rr=pi.data.subarray(gi*ui/pi.data.BYTES_PER_ELEMENT,(gi+1)*ui/pi.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ti,0,0,gi,pi.width,pi.height,1,Ri,rr,0,0)}L.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ti,0,0,0,pi.width,pi.height,ci.depth,Ri,pi.data,0,0)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ti,Pi,pi.width,pi.height,ci.depth,0,pi.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _i?y&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,ti,0,0,0,pi.width,pi.height,ci.depth,Ri,bi,pi.data):r.texImage3D(e.TEXTURE_2D_ARRAY,ti,Pi,pi.width,pi.height,ci.depth,0,Ri,bi,pi.data)}else{_i&&Kr&&r.texStorage2D(e.TEXTURE_2D,ii,Pi,fi[0].width,fi[0].height);for(let ti=0,ri=fi.length;ti<ri;ti++)pi=fi[ti],L.format!==wt?Ri!==null?_i?y&&r.compressedTexSubImage2D(e.TEXTURE_2D,ti,0,0,pi.width,pi.height,Ri,pi.data):r.compressedTexImage2D(e.TEXTURE_2D,ti,Pi,pi.width,pi.height,0,pi.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_i?y&&r.texSubImage2D(e.TEXTURE_2D,ti,0,0,pi.width,pi.height,Ri,bi,pi.data):r.texImage2D(e.TEXTURE_2D,ti,Pi,pi.width,pi.height,0,Ri,bi,pi.data)}else if(L.isDataArrayTexture)if(_i){if(Kr&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ii,Pi,ci.width,ci.height,ci.depth),y)if(L.layerUpdates.size>0){const ti=Hn(ci.width,ci.height,L.format,L.type);for(const ri of L.layerUpdates){const ui=ci.data.subarray(ri*ti/ci.data.BYTES_PER_ELEMENT,(ri+1)*ti/ci.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ri,ci.width,ci.height,1,Ri,bi,ui)}L.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ci.width,ci.height,ci.depth,Ri,bi,ci.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Pi,ci.width,ci.height,ci.depth,0,Ri,bi,ci.data);else if(L.isData3DTexture)_i?(Kr&&r.texStorage3D(e.TEXTURE_3D,ii,Pi,ci.width,ci.height,ci.depth),y&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ci.width,ci.height,ci.depth,Ri,bi,ci.data)):r.texImage3D(e.TEXTURE_3D,0,Pi,ci.width,ci.height,ci.depth,0,Ri,bi,ci.data);else if(L.isFramebufferTexture){if(Kr)if(_i)r.texStorage2D(e.TEXTURE_2D,ii,Pi,ci.width,ci.height);else{let ti=ci.width,ri=ci.height;for(let ui=0;ui<ii;ui++)r.texImage2D(e.TEXTURE_2D,ui,Pi,ti,ri,0,Ri,bi,null),ti>>=1,ri>>=1}}else if(fi.length>0){if(_i&&Kr){const ti=vi(fi[0]);r.texStorage2D(e.TEXTURE_2D,ii,Pi,ti.width,ti.height)}for(let ti=0,ri=fi.length;ti<ri;ti++)pi=fi[ti],_i?y&&r.texSubImage2D(e.TEXTURE_2D,ti,0,0,Ri,bi,pi):r.texImage2D(e.TEXTURE_2D,ti,Pi,Ri,bi,pi);L.generateMipmaps=!1}else if(_i){if(Kr){const ti=vi(ci);r.texStorage2D(e.TEXTURE_2D,ii,Pi,ti.width,ti.height)}y&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ri,bi,ci)}else r.texImage2D(e.TEXTURE_2D,0,Pi,Ri,bi,ci);u(L)&&W(li),Yi.__version=Ai.version,L.onUpdate&&L.onUpdate(L)}Y.__version=L.version}function J(Y,L,v){if(L.image.length!==6)return;const li=Ni(Y,L),Vi=L.source;r.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture,e.TEXTURE0+v);const Ai=t.get(Vi);if(Vi.version!==Ai.__version||li===!0){r.activeTexture(e.TEXTURE0+v);const Yi=Ur.getPrimaries(Ur.workingColorSpace),qi=L.colorSpace===OA?null:Ur.getPrimaries(L.colorSpace),Ei=L.colorSpace===OA||Yi===qi?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ei);const Hi=L.isCompressedTexture||L.image[0].isCompressedTexture,ci=L.image[0]&&L.image[0].isDataTexture,Ri=[];for(let ri=0;ri<6;ri++)!Hi&&!ci?Ri[ri]=K(L.image[ri],!0,A.maxCubemapSize):Ri[ri]=ci?L.image[ri].image:L.image[ri],Ri[ri]=Zi(L,Ri[ri]);const bi=Ri[0],Pi=a.convert(L.format,L.colorSpace),pi=a.convert(L.type),fi=E(L.internalFormat,Pi,pi,L.colorSpace),_i=L.isVideoTexture!==!0,Kr=Ai.__version===void 0||li===!0,y=Vi.dataReady;let ii=U(L,bi);ai(e.TEXTURE_CUBE_MAP,L);let ti;if(Hi){_i&&Kr&&r.texStorage2D(e.TEXTURE_CUBE_MAP,ii,fi,bi.width,bi.height);for(let ri=0;ri<6;ri++){ti=Ri[ri].mipmaps;for(let ui=0;ui<ti.length;ui++){const gi=ti[ui];L.format!==wt?Pi!==null?_i?y&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui,0,0,gi.width,gi.height,Pi,gi.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui,fi,gi.width,gi.height,0,gi.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_i?y&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui,0,0,gi.width,gi.height,Pi,pi,gi.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui,fi,gi.width,gi.height,0,Pi,pi,gi.data)}}}else{if(ti=L.mipmaps,_i&&Kr){ti.length>0&&ii++;const ri=vi(Ri[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,ii,fi,ri.width,ri.height)}for(let ri=0;ri<6;ri++)if(ci){_i?y&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,0,0,0,Ri[ri].width,Ri[ri].height,Pi,pi,Ri[ri].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,0,fi,Ri[ri].width,Ri[ri].height,0,Pi,pi,Ri[ri].data);for(let ui=0;ui<ti.length;ui++){const rr=ti[ui].image[ri].image;_i?y&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui+1,0,0,rr.width,rr.height,Pi,pi,rr.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui+1,fi,rr.width,rr.height,0,Pi,pi,rr.data)}}else{_i?y&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,0,0,0,Pi,pi,Ri[ri]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,0,fi,Pi,pi,Ri[ri]);for(let ui=0;ui<ti.length;ui++){const gi=ti[ui];_i?y&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui+1,0,0,Pi,pi,gi.image[ri]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ri,ui+1,fi,Pi,pi,gi.image[ri])}}}u(L)&&W(e.TEXTURE_CUBE_MAP),Ai.__version=Vi.version,L.onUpdate&&L.onUpdate(L)}Y.__version=L.version}function oi(Y,L,v,li,Vi,Ai){const Yi=a.convert(v.format,v.colorSpace),qi=a.convert(v.type),Ei=E(v.internalFormat,Yi,qi,v.colorSpace);if(!t.get(L).__hasExternalTextures){const ci=Math.max(1,L.width>>Ai),Ri=Math.max(1,L.height>>Ai);Vi===e.TEXTURE_3D||Vi===e.TEXTURE_2D_ARRAY?r.texImage3D(Vi,Ai,Ei,ci,Ri,L.depth,0,Yi,qi,null):r.texImage2D(Vi,Ai,Ei,ci,Ri,0,Yi,qi,null)}r.bindFramebuffer(e.FRAMEBUFFER,Y),Ci(L)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,li,Vi,t.get(v).__webglTexture,0,hi(L)):(Vi===e.TEXTURE_2D||Vi>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Vi<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,li,Vi,t.get(v).__webglTexture,Ai),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Wi(Y,L,v){if(e.bindRenderbuffer(e.RENDERBUFFER,Y),L.depthBuffer){const li=L.depthTexture,Vi=li&&li.isDepthTexture?li.type:null,Ai=h(L.stencilBuffer,Vi),Yi=L.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,qi=hi(L);Ci(L)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qi,Ai,L.width,L.height):v?e.renderbufferStorageMultisample(e.RENDERBUFFER,qi,Ai,L.width,L.height):e.renderbufferStorage(e.RENDERBUFFER,Ai,L.width,L.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Yi,e.RENDERBUFFER,Y)}else{const li=L.textures;for(let Vi=0;Vi<li.length;Vi++){const Ai=li[Vi],Yi=a.convert(Ai.format,Ai.colorSpace),qi=a.convert(Ai.type),Ei=E(Ai.internalFormat,Yi,qi,Ai.colorSpace),Hi=hi(L);v&&Ci(L)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Hi,Ei,L.width,L.height):Ci(L)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Hi,Ei,L.width,L.height):e.renderbufferStorage(e.RENDERBUFFER,Ei,L.width,L.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ki(Y,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,Y),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),j(L.depthTexture,0);const li=t.get(L.depthTexture).__webglTexture,Vi=hi(L);if(L.depthTexture.format===Ia)Ci(L)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,li,0,Vi):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,li,0);else if(L.depthTexture.format===oo)Ci(L)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,li,0,Vi):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,li,0);else throw new Error("Unknown depthTexture format")}function Li(Y){const L=t.get(Y),v=Y.isWebGLCubeRenderTarget===!0;if(Y.depthTexture&&!L.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");Ki(L.__webglFramebuffer,Y)}else if(v){L.__webglDepthbuffer=[];for(let li=0;li<6;li++)r.bindFramebuffer(e.FRAMEBUFFER,L.__webglFramebuffer[li]),L.__webglDepthbuffer[li]=e.createRenderbuffer(),Wi(L.__webglDepthbuffer[li],Y,!1)}else r.bindFramebuffer(e.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=e.createRenderbuffer(),Wi(L.__webglDepthbuffer,Y,!1);r.bindFramebuffer(e.FRAMEBUFFER,null)}function Oi(Y,L,v){const li=t.get(Y);L!==void 0&&oi(li.__webglFramebuffer,Y,Y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),v!==void 0&&Li(Y)}function Ji(Y){const L=Y.texture,v=t.get(Y),li=t.get(L);Y.addEventListener("dispose",w);const Vi=Y.textures,Ai=Y.isWebGLCubeRenderTarget===!0,Yi=Vi.length>1;if(Yi||(li.__webglTexture===void 0&&(li.__webglTexture=e.createTexture()),li.__version=L.version,o.memory.textures++),Ai){v.__webglFramebuffer=[];for(let qi=0;qi<6;qi++)if(L.mipmaps&&L.mipmaps.length>0){v.__webglFramebuffer[qi]=[];for(let Ei=0;Ei<L.mipmaps.length;Ei++)v.__webglFramebuffer[qi][Ei]=e.createFramebuffer()}else v.__webglFramebuffer[qi]=e.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){v.__webglFramebuffer=[];for(let qi=0;qi<L.mipmaps.length;qi++)v.__webglFramebuffer[qi]=e.createFramebuffer()}else v.__webglFramebuffer=e.createFramebuffer();if(Yi)for(let qi=0,Ei=Vi.length;qi<Ei;qi++){const Hi=t.get(Vi[qi]);Hi.__webglTexture===void 0&&(Hi.__webglTexture=e.createTexture(),o.memory.textures++)}if(Y.samples>0&&Ci(Y)===!1){v.__webglMultisampledFramebuffer=e.createFramebuffer(),v.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let qi=0;qi<Vi.length;qi++){const Ei=Vi[qi];v.__webglColorRenderbuffer[qi]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,v.__webglColorRenderbuffer[qi]);const Hi=a.convert(Ei.format,Ei.colorSpace),ci=a.convert(Ei.type),Ri=E(Ei.internalFormat,Hi,ci,Ei.colorSpace,Y.isXRRenderTarget===!0),bi=hi(Y);e.renderbufferStorageMultisample(e.RENDERBUFFER,bi,Ri,Y.width,Y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+qi,e.RENDERBUFFER,v.__webglColorRenderbuffer[qi])}e.bindRenderbuffer(e.RENDERBUFFER,null),Y.depthBuffer&&(v.__webglDepthRenderbuffer=e.createRenderbuffer(),Wi(v.__webglDepthRenderbuffer,Y,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Ai){r.bindTexture(e.TEXTURE_CUBE_MAP,li.__webglTexture),ai(e.TEXTURE_CUBE_MAP,L);for(let qi=0;qi<6;qi++)if(L.mipmaps&&L.mipmaps.length>0)for(let Ei=0;Ei<L.mipmaps.length;Ei++)oi(v.__webglFramebuffer[qi][Ei],Y,L,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+qi,Ei);else oi(v.__webglFramebuffer[qi],Y,L,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+qi,0);u(L)&&W(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Yi){for(let qi=0,Ei=Vi.length;qi<Ei;qi++){const Hi=Vi[qi],ci=t.get(Hi);r.bindTexture(e.TEXTURE_2D,ci.__webglTexture),ai(e.TEXTURE_2D,Hi),oi(v.__webglFramebuffer,Y,Hi,e.COLOR_ATTACHMENT0+qi,e.TEXTURE_2D,0),u(Hi)&&W(e.TEXTURE_2D)}r.unbindTexture()}else{let qi=e.TEXTURE_2D;if((Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(qi=Y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(qi,li.__webglTexture),ai(qi,L),L.mipmaps&&L.mipmaps.length>0)for(let Ei=0;Ei<L.mipmaps.length;Ei++)oi(v.__webglFramebuffer[Ei],Y,L,e.COLOR_ATTACHMENT0,qi,Ei);else oi(v.__webglFramebuffer,Y,L,e.COLOR_ATTACHMENT0,qi,0);u(L)&&W(qi),r.unbindTexture()}Y.depthBuffer&&Li(Y)}function ir(Y){const L=Y.textures;for(let v=0,li=L.length;v<li;v++){const Vi=L[v];if(u(Vi)){const Ai=Y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Yi=t.get(Vi).__webglTexture;r.bindTexture(Ai,Yi),W(Ai),r.unbindTexture()}}}const Z=[],Ti=[];function Xi(Y){if(Y.samples>0){if(Ci(Y)===!1){const L=Y.textures,v=Y.width,li=Y.height;let Vi=e.COLOR_BUFFER_BIT;const Ai=Y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Yi=t.get(Y),qi=L.length>1;if(qi)for(let Ei=0;Ei<L.length;Ei++)r.bindFramebuffer(e.FRAMEBUFFER,Yi.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ei,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Yi.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ei,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Yi.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Ei=0;Ei<L.length;Ei++){if(Y.resolveDepthBuffer&&(Y.depthBuffer&&(Vi|=e.DEPTH_BUFFER_BIT),Y.stencilBuffer&&Y.resolveStencilBuffer&&(Vi|=e.STENCIL_BUFFER_BIT)),qi){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Yi.__webglColorRenderbuffer[Ei]);const Hi=t.get(L[Ei]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Hi,0)}e.blitFramebuffer(0,0,v,li,0,0,v,li,Vi,e.NEAREST),V===!0&&(Z.length=0,Ti.length=0,Z.push(e.COLOR_ATTACHMENT0+Ei),Y.depthBuffer&&Y.resolveDepthBuffer===!1&&(Z.push(Ai),Ti.push(Ai),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ti)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Z))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),qi)for(let Ei=0;Ei<L.length;Ei++){r.bindFramebuffer(e.FRAMEBUFFER,Yi.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ei,e.RENDERBUFFER,Yi.__webglColorRenderbuffer[Ei]);const Hi=t.get(L[Ei]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Yi.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ei,e.TEXTURE_2D,Hi,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Yi.__webglMultisampledFramebuffer)}else if(Y.depthBuffer&&Y.resolveDepthBuffer===!1&&V){const L=Y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[L])}}}function hi(Y){return Math.min(A.maxSamples,Y.samples)}function Ci(Y){const L=t.get(Y);return Y.samples>0&&i.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function b(Y){const L=o.render.frame;q.get(Y)!==L&&(q.set(Y,L),Y.update())}function Zi(Y,L){const v=Y.colorSpace,li=Y.format,Vi=Y.type;return Y.isCompressedTexture===!0||Y.isVideoTexture===!0||v!==Ce&&v!==OA&&(Ur.getTransfer(v)===Cr?(li!==wt||Vi!==kA)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v)),L}function vi(Y){return typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement?(m.width=Y.naturalWidth||Y.width,m.height=Y.naturalHeight||Y.height):typeof VideoFrame<"u"&&Y instanceof VideoFrame?(m.width=Y.displayWidth,m.height=Y.displayHeight):(m.width=Y.width,m.height=Y.height),m}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=f,this.setTexture3D=T,this.setTextureCube=S,this.rebindTextures=Oi,this.setupRenderTarget=Ji,this.updateRenderTargetMipmap=ir,this.updateMultisampleRenderTarget=Xi,this.setupDepthRenderbuffer=Li,this.setupFrameBufferTexture=oi,this.useMultisampledRTT=Ci}function nU(e,i){function r(t,A=OA){let a;const o=Ur.getTransfer(A);if(t===kA)return e.UNSIGNED_BYTE;if(t===qq)return e.UNSIGNED_SHORT_4_4_4_4;if(t===nq)return e.UNSIGNED_SHORT_5_5_5_1;if(t===tu)return e.UNSIGNED_INT_5_9_9_9_REV;if(t===iu)return e.BYTE;if(t===ru)return e.SHORT;if(t===es)return e.UNSIGNED_SHORT;if(t===mq)return e.INT;if(t===la)return e.UNSIGNED_INT;if(t===WA)return e.FLOAT;if(t===xs)return e.HALF_FLOAT;if(t===Au)return e.ALPHA;if(t===eu)return e.RGB;if(t===wt)return e.RGBA;if(t===au)return e.LUMINANCE;if(t===ou)return e.LUMINANCE_ALPHA;if(t===Ia)return e.DEPTH_COMPONENT;if(t===oo)return e.DEPTH_STENCIL;if(t===su)return e.RED;if(t===cq)return e.RED_INTEGER;if(t===lu)return e.RG;if(t===uq)return e.RG_INTEGER;if(t===Wq)return e.RGBA_INTEGER;if(t===ll||t===Vl||t===ml||t===ql)if(o===Cr)if(a=i.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(t===ll)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=i.get("WEBGL_compressed_texture_s3tc"),a!==null){if(t===ll)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Vl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(t===am||t===om||t===sm||t===lm)if(a=i.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(t===am)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===om)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===lm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(t===Vm||t===mm||t===qm)if(a=i.get("WEBGL_compressed_texture_etc"),a!==null){if(t===Vm||t===mm)return o===Cr?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(t===qm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(t===nm||t===cm||t===um||t===Wm||t===Km||t===xm||t===Fm||t===hm||t===Em||t===Mm||t===Um||t===Lm||t===pm||t===dm)if(a=i.get("WEBGL_compressed_texture_astc"),a!==null){if(t===nm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===cm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===um)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Wm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Km)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===xm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Fm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===hm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Em)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Mm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Um)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Lm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===pm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===dm)return o===Cr?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(t===nl||t===wm||t===Nm)if(a=i.get("EXT_texture_compression_bptc"),a!==null){if(t===nl)return o===Cr?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===wm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Nm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(t===Vu||t===Rm||t===Cm||t===Ym)if(a=i.get("EXT_texture_compression_rgtc"),a!==null){if(t===nl)return a.COMPRESSED_RED_RGTC1_EXT;if(t===Rm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ym)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return t===ao?e.UNSIGNED_INT_24_8:e[t]!==void 0?e[t]:null}return{convert:r}}class cU extends cA{constructor(i=[]){super(),this.isArrayCamera=!0,this.cameras=i}}class vs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uU={type:"move"};class YV{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(i){return this._targetRay!==null&&this._targetRay.dispatchEvent(i),this._grip!==null&&this._grip.dispatchEvent(i),this._hand!==null&&this._hand.dispatchEvent(i),this}connect(i){if(i&&i.hand){const r=this._hand;if(r)for(const t of i.hand.values())this._getHandJoint(r,t)}return this.dispatchEvent({type:"connected",data:i}),this}disconnect(i){return this.dispatchEvent({type:"disconnected",data:i}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(i,r,t){let A=null,a=null,o=null;const s=this._targetRay,V=this._grip,m=this._hand;if(i&&r.session.visibilityState!=="visible-blurred"){if(m&&i.hand){o=!0;for(const K of i.hand.values()){const u=r.getJointPose(K,t),W=this._getHandJoint(m,K);u!==null&&(W.matrix.fromArray(u.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,W.jointRadius=u.radius),W.visible=u!==null}const q=m.joints["index-finger-tip"],c=m.joints["thumb-tip"],n=q.position.distanceTo(c.position),l=.02,x=.005;m.inputState.pinching&&n>l+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:i.handedness,target:this})):!m.inputState.pinching&&n<=l-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:i.handedness,target:this}))}else V!==null&&i.gripSpace&&(a=r.getPose(i.gripSpace,t),a!==null&&(V.matrix.fromArray(a.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,a.linearVelocity?(V.hasLinearVelocity=!0,V.linearVelocity.copy(a.linearVelocity)):V.hasLinearVelocity=!1,a.angularVelocity?(V.hasAngularVelocity=!0,V.angularVelocity.copy(a.angularVelocity)):V.hasAngularVelocity=!1));s!==null&&(A=r.getPose(i.targetRaySpace,t),A===null&&a!==null&&(A=a),A!==null&&(s.matrix.fromArray(A.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,A.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(A.linearVelocity)):s.hasLinearVelocity=!1,A.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(A.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(uU)))}return s!==null&&(s.visible=A!==null),V!==null&&(V.visible=a!==null),m!==null&&(m.visible=o!==null),this}_getHandJoint(i,r){if(i.joints[r.jointName]===void 0){const t=new vs;t.matrixAutoUpdate=!1,t.visible=!1,i.joints[r.jointName]=t,i.add(t)}return i.joints[r.jointName]}}const WU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(i,r,t){if(this.texture===null){const A=new nt,a=i.properties.get(A);a.__webglTexture=r.texture,(r.depthNear!=t.depthNear||r.depthFar!=t.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=A}}getMesh(i){if(this.texture!==null&&this.mesh===null){const r=i.cameras[0].viewport,t=new CA({vertexShader:WU,fragmentShader:KU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new KA(new Us(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FU extends Wo{constructor(i,r){super();const t=this;let A=null,a=1,o=null,s="local-floor",V=1,m=null,q=null,c=null,n=null,l=null,x=null;const K=new xU,u=r.getContextAttributes();let W=null,E=null;const h=[],U=[],N=new qr;let w=null;const p=new cA;p.layers.enable(1),p.viewport=new $r;const C=new cA;C.layers.enable(2),C.viewport=new $r;const M=[p,C],F=new cU;F.layers.enable(1),F.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oi=h[J];return oi===void 0&&(oi=new YV,h[J]=oi),oi.getTargetRaySpace()},this.getControllerGrip=function(J){let oi=h[J];return oi===void 0&&(oi=new YV,h[J]=oi),oi.getGripSpace()},this.getHand=function(J){let oi=h[J];return oi===void 0&&(oi=new YV,h[J]=oi),oi.getHandSpace()};function D(J){const oi=U.indexOf(J.inputSource);if(oi===-1)return;const Wi=h[oi];Wi!==void 0&&(Wi.update(J.inputSource,J.frame,m||o),Wi.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){A.removeEventListener("select",D),A.removeEventListener("selectstart",D),A.removeEventListener("selectend",D),A.removeEventListener("squeeze",D),A.removeEventListener("squeezestart",D),A.removeEventListener("squeezeend",D),A.removeEventListener("end",j),A.removeEventListener("inputsourceschange",f);for(let J=0;J<h.length;J++){const oi=U[J];oi!==null&&(U[J]=null,h[J].disconnect(oi))}R=null,z=null,K.reset(),i.setRenderTarget(W),l=null,n=null,c=null,A=null,E=null,Si.stop(),t.isPresenting=!1,i.setPixelRatio(w),i.setSize(N.width,N.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){s=J,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||o},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return n!==null?n:l},this.getBinding=function(){return c},this.getFrame=function(){return x},this.getSession=function(){return A},this.setSession=async function(J){if(A=J,A!==null){if(W=i.getRenderTarget(),A.addEventListener("select",D),A.addEventListener("selectstart",D),A.addEventListener("selectend",D),A.addEventListener("squeeze",D),A.addEventListener("squeezestart",D),A.addEventListener("squeezeend",D),A.addEventListener("end",j),A.addEventListener("inputsourceschange",f),u.xrCompatible!==!0&&await r.makeXRCompatible(),w=i.getPixelRatio(),i.getSize(N),A.renderState.layers===void 0){const oi={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};l=new XRWebGLLayer(A,r,oi),A.updateRenderState({baseLayer:l}),i.setPixelRatio(1),i.setSize(l.framebufferWidth,l.framebufferHeight,!1),E=new pe(l.framebufferWidth,l.framebufferHeight,{format:wt,type:kA,colorSpace:i.outputColorSpace,stencilBuffer:u.stencil})}else{let oi=null,Wi=null,Ki=null;u.depth&&(Ki=u.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,oi=u.stencil?oo:Ia,Wi=u.stencil?ao:la);const Li={colorFormat:r.RGBA8,depthFormat:Ki,scaleFactor:a};c=new XRWebGLBinding(A,r),n=c.createProjectionLayer(Li),A.updateRenderState({layers:[n]}),i.setPixelRatio(1),i.setSize(n.textureWidth,n.textureHeight,!1),E=new pe(n.textureWidth,n.textureHeight,{format:wt,type:kA,depthTexture:new pu(n.textureWidth,n.textureHeight,Wi,void 0,void 0,void 0,void 0,void 0,void 0,oi),stencilBuffer:u.stencil,colorSpace:i.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:n.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(V),m=null,o=await A.requestReferenceSpace(s),Si.setContext(A),Si.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return K.getDepthTexture()};function f(J){for(let oi=0;oi<J.removed.length;oi++){const Wi=J.removed[oi],Ki=U.indexOf(Wi);Ki>=0&&(U[Ki]=null,h[Ki].disconnect(Wi))}for(let oi=0;oi<J.added.length;oi++){const Wi=J.added[oi];let Ki=U.indexOf(Wi);if(Ki===-1){for(let Oi=0;Oi<h.length;Oi++)if(Oi>=U.length){U.push(Wi),Ki=Oi;break}else if(U[Oi]===null){U[Oi]=Wi,Ki=Oi;break}if(Ki===-1)break}const Li=h[Ki];Li&&Li.connect(Wi)}}const T=new _,S=new _;function I(J,oi,Wi){T.setFromMatrixPosition(oi.matrixWorld),S.setFromMatrixPosition(Wi.matrixWorld);const Ki=T.distanceTo(S),Li=oi.projectionMatrix.elements,Oi=Wi.projectionMatrix.elements,Ji=Li[14]/(Li[10]-1),ir=Li[14]/(Li[10]+1),Z=(Li[9]+1)/Li[5],Ti=(Li[9]-1)/Li[5],Xi=(Li[8]-1)/Li[0],hi=(Oi[8]+1)/Oi[0],Ci=Ji*Xi,b=Ji*hi,Zi=Ki/(-Xi+hi),vi=Zi*-Xi;oi.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vi),J.translateZ(Zi),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const Y=Ji+Zi,L=ir+Zi,v=Ci-vi,li=b+(Ki-vi),Vi=Z*ir/L*Y,Ai=Ti*ir/L*Y;J.projectionMatrix.makePerspective(v,li,Vi,Ai,Y,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function mi(J,oi){oi===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oi.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(A===null)return;K.texture!==null&&(J.near=K.depthNear,J.far=K.depthFar),F.near=C.near=p.near=J.near,F.far=C.far=p.far=J.far,(R!==F.near||z!==F.far)&&(A.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,z=F.far,p.near=R,p.far=z,C.near=R,C.far=z,p.updateProjectionMatrix(),C.updateProjectionMatrix(),J.updateProjectionMatrix());const oi=J.parent,Wi=F.cameras;mi(F,oi);for(let Ki=0;Ki<Wi.length;Ki++)mi(Wi[Ki],oi);Wi.length===2?I(F,p,C):F.projectionMatrix.copy(p.projectionMatrix),X(J,F,oi)};function X(J,oi,Wi){Wi===null?J.matrix.copy(oi.matrixWorld):(J.matrix.copy(Wi.matrixWorld),J.matrix.invert(),J.matrix.multiply(oi.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oi.projectionMatrix),J.projectionMatrixInverse.copy(oi.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xm*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(n===null&&l===null))return V},this.setFoveation=function(J){V=J,n!==null&&(n.fixedFoveation=J),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=J)},this.hasDepthSensing=function(){return K.texture!==null},this.getDepthSensingMesh=function(){return K.getMesh(F)};let ai=null;function Ni(J,oi){if(q=oi.getViewerPose(m||o),x=oi,q!==null){const Wi=q.views;l!==null&&(i.setRenderTargetFramebuffer(E,l.framebuffer),i.setRenderTarget(E));let Ki=!1;Wi.length!==F.cameras.length&&(F.cameras.length=0,Ki=!0);for(let Oi=0;Oi<Wi.length;Oi++){const Ji=Wi[Oi];let ir=null;if(l!==null)ir=l.getViewport(Ji);else{const Ti=c.getViewSubImage(n,Ji);ir=Ti.viewport,Oi===0&&(i.setRenderTargetTextures(E,Ti.colorTexture,n.ignoreDepthValues?void 0:Ti.depthStencilTexture),i.setRenderTarget(E))}let Z=M[Oi];Z===void 0&&(Z=new cA,Z.layers.enable(Oi),Z.viewport=new $r,M[Oi]=Z),Z.matrix.fromArray(Ji.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ji.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ir.x,ir.y,ir.width,ir.height),Oi===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ki===!0&&F.cameras.push(Z)}const Li=A.enabledFeatures;if(Li&&Li.includes("depth-sensing")){const Oi=c.getDepthInformation(Wi[0]);Oi&&Oi.isValid&&Oi.texture&&K.init(i,Oi,A.renderState)}}for(let Wi=0;Wi<h.length;Wi++){const Ki=U[Wi],Li=h[Wi];Ki!==null&&Li!==void 0&&Li.update(Ki,oi,m||o)}ai&&ai(J,oi),oi.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:oi}),x=null}const Si=new Lu;Si.setAnimationLoop(Ni),this.setAnimationLoop=function(J){ai=J},this.dispose=function(){}}}const Qe=new _A,hU=new Hr;function EU(e,i){function r(u,W){u.matrixAutoUpdate===!0&&u.updateMatrix(),W.value.copy(u.matrix)}function t(u,W){W.color.getRGB(u.fogColor.value,hu(e)),W.isFog?(u.fogNear.value=W.near,u.fogFar.value=W.far):W.isFogExp2&&(u.fogDensity.value=W.density)}function A(u,W,E,h,U){W.isMeshBasicMaterial||W.isMeshLambertMaterial?a(u,W):W.isMeshToonMaterial?(a(u,W),c(u,W)):W.isMeshPhongMaterial?(a(u,W),q(u,W)):W.isMeshStandardMaterial?(a(u,W),n(u,W),W.isMeshPhysicalMaterial&&l(u,W,U)):W.isMeshMatcapMaterial?(a(u,W),x(u,W)):W.isMeshDepthMaterial?a(u,W):W.isMeshDistanceMaterial?(a(u,W),K(u,W)):W.isMeshNormalMaterial?a(u,W):W.isLineBasicMaterial?(o(u,W),W.isLineDashedMaterial&&s(u,W)):W.isPointsMaterial?V(u,W,E,h):W.isSpriteMaterial?m(u,W):W.isShadowMaterial?(u.color.value.copy(W.color),u.opacity.value=W.opacity):W.isShaderMaterial&&(W.uniformsNeedUpdate=!1)}function a(u,W){u.opacity.value=W.opacity,W.color&&u.diffuse.value.copy(W.color),W.emissive&&u.emissive.value.copy(W.emissive).multiplyScalar(W.emissiveIntensity),W.map&&(u.map.value=W.map,r(W.map,u.mapTransform)),W.alphaMap&&(u.alphaMap.value=W.alphaMap,r(W.alphaMap,u.alphaMapTransform)),W.bumpMap&&(u.bumpMap.value=W.bumpMap,r(W.bumpMap,u.bumpMapTransform),u.bumpScale.value=W.bumpScale,W.side===Nt&&(u.bumpScale.value*=-1)),W.normalMap&&(u.normalMap.value=W.normalMap,r(W.normalMap,u.normalMapTransform),u.normalScale.value.copy(W.normalScale),W.side===Nt&&u.normalScale.value.negate()),W.displacementMap&&(u.displacementMap.value=W.displacementMap,r(W.displacementMap,u.displacementMapTransform),u.displacementScale.value=W.displacementScale,u.displacementBias.value=W.displacementBias),W.emissiveMap&&(u.emissiveMap.value=W.emissiveMap,r(W.emissiveMap,u.emissiveMapTransform)),W.specularMap&&(u.specularMap.value=W.specularMap,r(W.specularMap,u.specularMapTransform)),W.alphaTest>0&&(u.alphaTest.value=W.alphaTest);const E=i.get(W),h=E.envMap,U=E.envMapRotation;h&&(u.envMap.value=h,Qe.copy(U),Qe.x*=-1,Qe.y*=-1,Qe.z*=-1,h.isCubeTexture&&h.isRenderTargetTexture===!1&&(Qe.y*=-1,Qe.z*=-1),u.envMapRotation.value.setFromMatrix4(hU.makeRotationFromEuler(Qe)),u.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=W.reflectivity,u.ior.value=W.ior,u.refractionRatio.value=W.refractionRatio),W.lightMap&&(u.lightMap.value=W.lightMap,u.lightMapIntensity.value=W.lightMapIntensity,r(W.lightMap,u.lightMapTransform)),W.aoMap&&(u.aoMap.value=W.aoMap,u.aoMapIntensity.value=W.aoMapIntensity,r(W.aoMap,u.aoMapTransform))}function o(u,W){u.diffuse.value.copy(W.color),u.opacity.value=W.opacity,W.map&&(u.map.value=W.map,r(W.map,u.mapTransform))}function s(u,W){u.dashSize.value=W.dashSize,u.totalSize.value=W.dashSize+W.gapSize,u.scale.value=W.scale}function V(u,W,E,h){u.diffuse.value.copy(W.color),u.opacity.value=W.opacity,u.size.value=W.size*E,u.scale.value=h*.5,W.map&&(u.map.value=W.map,r(W.map,u.uvTransform)),W.alphaMap&&(u.alphaMap.value=W.alphaMap,r(W.alphaMap,u.alphaMapTransform)),W.alphaTest>0&&(u.alphaTest.value=W.alphaTest)}function m(u,W){u.diffuse.value.copy(W.color),u.opacity.value=W.opacity,u.rotation.value=W.rotation,W.map&&(u.map.value=W.map,r(W.map,u.mapTransform)),W.alphaMap&&(u.alphaMap.value=W.alphaMap,r(W.alphaMap,u.alphaMapTransform)),W.alphaTest>0&&(u.alphaTest.value=W.alphaTest)}function q(u,W){u.specular.value.copy(W.specular),u.shininess.value=Math.max(W.shininess,1e-4)}function c(u,W){W.gradientMap&&(u.gradientMap.value=W.gradientMap)}function n(u,W){u.metalness.value=W.metalness,W.metalnessMap&&(u.metalnessMap.value=W.metalnessMap,r(W.metalnessMap,u.metalnessMapTransform)),u.roughness.value=W.roughness,W.roughnessMap&&(u.roughnessMap.value=W.roughnessMap,r(W.roughnessMap,u.roughnessMapTransform)),W.envMap&&(u.envMapIntensity.value=W.envMapIntensity)}function l(u,W,E){u.ior.value=W.ior,W.sheen>0&&(u.sheenColor.value.copy(W.sheenColor).multiplyScalar(W.sheen),u.sheenRoughness.value=W.sheenRoughness,W.sheenColorMap&&(u.sheenColorMap.value=W.sheenColorMap,r(W.sheenColorMap,u.sheenColorMapTransform)),W.sheenRoughnessMap&&(u.sheenRoughnessMap.value=W.sheenRoughnessMap,r(W.sheenRoughnessMap,u.sheenRoughnessMapTransform))),W.clearcoat>0&&(u.clearcoat.value=W.clearcoat,u.clearcoatRoughness.value=W.clearcoatRoughness,W.clearcoatMap&&(u.clearcoatMap.value=W.clearcoatMap,r(W.clearcoatMap,u.clearcoatMapTransform)),W.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=W.clearcoatRoughnessMap,r(W.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),W.clearcoatNormalMap&&(u.clearcoatNormalMap.value=W.clearcoatNormalMap,r(W.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(W.clearcoatNormalScale),W.side===Nt&&u.clearcoatNormalScale.value.negate())),W.dispersion>0&&(u.dispersion.value=W.dispersion),W.iridescence>0&&(u.iridescence.value=W.iridescence,u.iridescenceIOR.value=W.iridescenceIOR,u.iridescenceThicknessMinimum.value=W.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=W.iridescenceThicknessRange[1],W.iridescenceMap&&(u.iridescenceMap.value=W.iridescenceMap,r(W.iridescenceMap,u.iridescenceMapTransform)),W.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=W.iridescenceThicknessMap,r(W.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),W.transmission>0&&(u.transmission.value=W.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),W.transmissionMap&&(u.transmissionMap.value=W.transmissionMap,r(W.transmissionMap,u.transmissionMapTransform)),u.thickness.value=W.thickness,W.thicknessMap&&(u.thicknessMap.value=W.thicknessMap,r(W.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=W.attenuationDistance,u.attenuationColor.value.copy(W.attenuationColor)),W.anisotropy>0&&(u.anisotropyVector.value.set(W.anisotropy*Math.cos(W.anisotropyRotation),W.anisotropy*Math.sin(W.anisotropyRotation)),W.anisotropyMap&&(u.anisotropyMap.value=W.anisotropyMap,r(W.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=W.specularIntensity,u.specularColor.value.copy(W.specularColor),W.specularColorMap&&(u.specularColorMap.value=W.specularColorMap,r(W.specularColorMap,u.specularColorMapTransform)),W.specularIntensityMap&&(u.specularIntensityMap.value=W.specularIntensityMap,r(W.specularIntensityMap,u.specularIntensityMapTransform))}function x(u,W){W.matcap&&(u.matcap.value=W.matcap)}function K(u,W){const E=i.get(W).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:A}}function MU(e,i,r,t){let A={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function V(E,h){const U=h.program;t.uniformBlockBinding(E,U)}function m(E,h){let U=A[E.id];U===void 0&&(x(E),U=q(E),A[E.id]=U,E.addEventListener("dispose",u));const N=h.program;t.updateUBOMapping(E,N);const w=i.render.frame;a[E.id]!==w&&(n(E),a[E.id]=w)}function q(E){const h=c();E.__bindingPointIndex=h;const U=e.createBuffer(),N=E.__size,w=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,U),e.bufferData(e.UNIFORM_BUFFER,N,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,h,U),U}function c(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function n(E){const h=A[E.id],U=E.uniforms,N=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,h);for(let w=0,p=U.length;w<p;w++){const C=Array.isArray(U[w])?U[w]:[U[w]];for(let M=0,F=C.length;M<F;M++){const R=C[M];if(l(R,w,M,N)===!0){const z=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let f=0;f<D.length;f++){const T=D[f],S=K(T);typeof T=="number"||typeof T=="boolean"?(R.__data[0]=T,e.bufferSubData(e.UNIFORM_BUFFER,z+j,R.__data)):T.isMatrix3?(R.__data[0]=T.elements[0],R.__data[1]=T.elements[1],R.__data[2]=T.elements[2],R.__data[3]=0,R.__data[4]=T.elements[3],R.__data[5]=T.elements[4],R.__data[6]=T.elements[5],R.__data[7]=0,R.__data[8]=T.elements[6],R.__data[9]=T.elements[7],R.__data[10]=T.elements[8],R.__data[11]=0):(T.toArray(R.__data,j),j+=S.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function l(E,h,U,N){const w=E.value,p=h+"_"+U;if(N[p]===void 0)return typeof w=="number"||typeof w=="boolean"?N[p]=w:N[p]=w.clone(),!0;{const C=N[p];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return N[p]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function x(E){const h=E.uniforms;let U=0;const N=16;for(let p=0,C=h.length;p<C;p++){const M=Array.isArray(h[p])?h[p]:[h[p]];for(let F=0,R=M.length;F<R;F++){const z=M[F],D=Array.isArray(z.value)?z.value:[z.value];for(let j=0,f=D.length;j<f;j++){const T=D[j],S=K(T),I=U%N,mi=I%S.boundary,X=I+mi;U+=mi,X!==0&&N-X<S.storage&&(U+=N-X),z.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=U,U+=S.storage}}}const w=U%N;return w>0&&(U+=N-w),E.__size=U,E.__cache={},this}function K(E){const h={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(h.boundary=4,h.storage=4):E.isVector2?(h.boundary=8,h.storage=8):E.isVector3||E.isColor?(h.boundary=16,h.storage=12):E.isVector4?(h.boundary=16,h.storage=16):E.isMatrix3?(h.boundary=48,h.storage=48):E.isMatrix4?(h.boundary=64,h.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),h}function u(E){const h=E.target;h.removeEventListener("dispose",u);const U=o.indexOf(h.__bindingPointIndex);o.splice(U,1),e.deleteBuffer(A[h.id]),delete A[h.id],delete a[h.id]}function W(){for(const E in A)e.deleteBuffer(A[E]);o=[],A={},a={}}return{bind:V,update:m,dispose:W}}class UU{constructor(i={}){const{canvas:r=qx(),context:t=null,depth:A=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:V=!0,preserveDrawingBuffer:m=!1,powerPreference:q="default",failIfMajorPerformanceCaveat:c=!1}=i;this.isWebGLRenderer=!0;let n;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");n=t.getContextAttributes().alpha}else n=o;const l=new Uint32Array(4),x=new Int32Array(4);let K=null,u=null;const W=[],E=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hA,this.toneMapping=he,this.toneMappingExposure=1;const h=this;let U=!1,N=0,w=0,p=null,C=-1,M=null;const F=new $r,R=new $r;let z=null;const D=new dr(0);let j=0,f=r.width,T=r.height,S=1,I=null,mi=null;const X=new $r(0,0,f,T),ai=new $r(0,0,f,T);let Ni=!1;const Si=new Uu;let J=!1,oi=!1;const Wi=new Hr,Ki=new _,Li=new $r,Oi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ji=!1;function ir(){return p===null?S:1}let Z=t;function Ti(d,Q){return r.getContext(d,Q)}try{const d={alpha:!0,depth:A,stencil:a,antialias:s,premultipliedAlpha:V,preserveDrawingBuffer:m,powerPreference:q,failIfMajorPerformanceCaveat:c};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Vq}`),r.addEventListener("webglcontextlost",ti,!1),r.addEventListener("webglcontextrestored",ri,!1),r.addEventListener("webglcontextcreationerror",ui,!1),Z===null){const Q="webgl2";if(Z=Ti(Q,d),Z===null)throw Ti(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let Xi,hi,Ci,b,Zi,vi,Y,L,v,li,Vi,Ai,Yi,qi,Ei,Hi,ci,Ri,bi,Pi,pi,fi,_i,Kr;function y(){Xi=new RE(Z),Xi.init(),fi=new nU(Z,Xi),hi=new UE(Z,Xi,i,fi),Ci=new VU(Z),b=new XE(Z),Zi=new JM,vi=new qU(Z,Xi,Ci,Zi,hi,fi,b),Y=new pE(h),L=new NE(h),v=new Bx(Z),_i=new EE(Z,v),li=new CE(Z,v,b,_i),Vi=new GE(Z,li,v,b),bi=new ZE(Z,hi,vi),Hi=new LE(Zi),Ai=new fM(h,Y,L,Xi,hi,_i,Hi),Yi=new EU(h,Zi),qi=new kM,Ei=new AU(Xi),Ri=new hE(h,Y,L,Ci,Vi,n,V),ci=new lU(h,Vi,hi),Kr=new MU(Z,b,hi,Ci),Pi=new ME(Z,Xi,b),pi=new YE(Z,Xi,b),b.programs=Ai.programs,h.capabilities=hi,h.extensions=Xi,h.properties=Zi,h.renderLists=qi,h.shadowMap=ci,h.state=Ci,h.info=b}y();const ii=new FU(h,Z);this.xr=ii,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const d=Xi.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=Xi.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(d){d!==void 0&&(S=d,this.setSize(f,T,!1))},this.getSize=function(d){return d.set(f,T)},this.setSize=function(d,Q,O=!0){if(ii.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}f=d,T=Q,r.width=Math.floor(d*S),r.height=Math.floor(Q*S),O===!0&&(r.style.width=d+"px",r.style.height=Q+"px"),this.setViewport(0,0,d,Q)},this.getDrawingBufferSize=function(d){return d.set(f*S,T*S).floor()},this.setDrawingBufferSize=function(d,Q,O){f=d,T=Q,S=O,r.width=Math.floor(d*O),r.height=Math.floor(Q*O),this.setViewport(0,0,d,Q)},this.getCurrentViewport=function(d){return d.copy(F)},this.getViewport=function(d){return d.copy(X)},this.setViewport=function(d,Q,O,H){d.isVector4?X.set(d.x,d.y,d.z,d.w):X.set(d,Q,O,H),Ci.viewport(F.copy(X).multiplyScalar(S).round())},this.getScissor=function(d){return d.copy(ai)},this.setScissor=function(d,Q,O,H){d.isVector4?ai.set(d.x,d.y,d.z,d.w):ai.set(d,Q,O,H),Ci.scissor(R.copy(ai).multiplyScalar(S).round())},this.getScissorTest=function(){return Ni},this.setScissorTest=function(d){Ci.setScissorTest(Ni=d)},this.setOpaqueSort=function(d){I=d},this.setTransparentSort=function(d){mi=d},this.getClearColor=function(d){return d.copy(Ri.getClearColor())},this.setClearColor=function(){Ri.setClearColor.apply(Ri,arguments)},this.getClearAlpha=function(){return Ri.getClearAlpha()},this.setClearAlpha=function(){Ri.setClearAlpha.apply(Ri,arguments)},this.clear=function(d=!0,Q=!0,O=!0){let H=0;if(d){let g=!1;if(p!==null){const ni=p.texture.format;g=ni===Wq||ni===uq||ni===cq}if(g){const ni=p.texture.type,Mi=ni===kA||ni===la||ni===es||ni===ao||ni===qq||ni===nq,yi=Ri.getClearColor(),Ui=Ri.getClearAlpha(),Di=yi.r,Ii=yi.g,ki=yi.b;Mi?(l[0]=Di,l[1]=Ii,l[2]=ki,l[3]=Ui,Z.clearBufferuiv(Z.COLOR,0,l)):(x[0]=Di,x[1]=Ii,x[2]=ki,x[3]=Ui,Z.clearBufferiv(Z.COLOR,0,x))}else H|=Z.COLOR_BUFFER_BIT}Q&&(H|=Z.DEPTH_BUFFER_BIT),O&&(H|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",ti,!1),r.removeEventListener("webglcontextrestored",ri,!1),r.removeEventListener("webglcontextcreationerror",ui,!1),qi.dispose(),Ei.dispose(),Zi.dispose(),Y.dispose(),L.dispose(),Vi.dispose(),_i.dispose(),Kr.dispose(),Ai.dispose(),ii.dispose(),ii.removeEventListener("sessionstart",P),ii.removeEventListener("sessionend",si),k.stop()};function ti(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ri(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const d=b.autoReset,Q=ci.enabled,O=ci.autoUpdate,H=ci.needsUpdate,g=ci.type;y(),b.autoReset=d,ci.enabled=Q,ci.autoUpdate=O,ci.needsUpdate=H,ci.type=g}function ui(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function gi(d){const Q=d.target;Q.removeEventListener("dispose",gi),rr(Q)}function rr(d){Fi(d),Zi.remove(d)}function Fi(d){const Q=Zi.get(d).programs;Q!==void 0&&(Q.forEach(function(O){Ai.releaseProgram(O)}),d.isShaderMaterial&&Ai.releaseShaderCache(d))}this.renderBufferDirect=function(d,Q,O,H,g,ni){Q===null&&(Q=Oi);const Mi=g.isMesh&&g.matrixWorld.determinant()<0,yi=ar(d,Q,O,H,g);Ci.setMaterial(H,Mi);let Ui=O.index,Di=1;if(H.wireframe===!0){if(Ui=li.getWireframeAttribute(O),Ui===void 0)return;Di=2}const Ii=O.drawRange,ki=O.attributes.position;let xr=Ii.start*Di,pr=(Ii.start+Ii.count)*Di;ni!==null&&(xr=Math.max(xr,ni.start*Di),pr=Math.min(pr,(ni.start+ni.count)*Di)),Ui!==null?(xr=Math.max(xr,0),pr=Math.min(pr,Ui.count)):ki!=null&&(xr=Math.max(xr,0),pr=Math.min(pr,ki.count));const Fr=pr-xr;if(Fr<0||Fr===1/0)return;_i.setup(g,H,yi,O,Ui);let jr,cr=Pi;if(Ui!==null&&(jr=v.get(Ui),cr=pi,cr.setIndex(jr)),g.isMesh)H.wireframe===!0?(Ci.setLineWidth(H.wireframeLinewidth*ir()),cr.setMode(Z.LINES)):cr.setMode(Z.TRIANGLES);else if(g.isLine){let Bi=H.linewidth;Bi===void 0&&(Bi=1),Ci.setLineWidth(Bi*ir()),g.isLineSegments?cr.setMode(Z.LINES):g.isLineLoop?cr.setMode(Z.LINE_LOOP):cr.setMode(Z.LINE_STRIP)}else g.isPoints?cr.setMode(Z.POINTS):g.isSprite&&cr.setMode(Z.TRIANGLES);if(g.isBatchedMesh)if(g._multiDrawInstances!==null)cr.renderMultiDrawInstances(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount,g._multiDrawInstances);else if(Xi.get("WEBGL_multi_draw"))cr.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else{const Bi=g._multiDrawStarts,tt=g._multiDrawCounts,Er=g._multiDrawCount,lA=Ui?v.get(Ui).bytesPerElement:1,ua=Zi.get(H).currentProgram.getUniforms();for(let Gt=0;Gt<Er;Gt++)ua.setValue(Z,"_gl_DrawID",Gt),cr.render(Bi[Gt]/lA,tt[Gt])}else if(g.isInstancedMesh)cr.renderInstances(xr,Fr,g.count);else if(O.isInstancedBufferGeometry){const Bi=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,tt=Math.min(O.instanceCount,Bi);cr.renderInstances(xr,Fr,tt)}else cr.render(xr,Fr)};function G(d,Q,O){d.transparent===!0&&d.side===TA&&d.forceSinglePass===!1?(d.side=Nt,d.needsUpdate=!0,$i(d,Q,O),d.side=Le,d.needsUpdate=!0,$i(d,Q,O),d.side=TA):$i(d,Q,O)}this.compile=function(d,Q,O=null){O===null&&(O=d),u=Ei.get(O),u.init(Q),E.push(u),O.traverseVisible(function(g){g.isLight&&g.layers.test(Q.layers)&&(u.pushLight(g),g.castShadow&&u.pushShadow(g))}),d!==O&&d.traverseVisible(function(g){g.isLight&&g.layers.test(Q.layers)&&(u.pushLight(g),g.castShadow&&u.pushShadow(g))}),u.setupLights();const H=new Set;return d.traverse(function(g){const ni=g.material;if(ni)if(Array.isArray(ni))for(let Mi=0;Mi<ni.length;Mi++){const yi=ni[Mi];G(yi,O,g),H.add(yi)}else G(ni,O,g),H.add(ni)}),E.pop(),u=null,H},this.compileAsync=function(d,Q,O=null){const H=this.compile(d,Q,O);return new Promise(g=>{function ni(){if(H.forEach(function(Mi){Zi.get(Mi).currentProgram.isReady()&&H.delete(Mi)}),H.size===0){g(d);return}setTimeout(ni,10)}Xi.get("KHR_parallel_shader_compile")!==null?ni():setTimeout(ni,10)})};let $=null;function B(d){$&&$(d)}function P(){k.stop()}function si(){k.start()}const k=new Lu;k.setAnimationLoop(B),typeof self<"u"&&k.setContext(self),this.setAnimationLoop=function(d){$=d,ii.setAnimationLoop(d),d===null?k.stop():k.start()},ii.addEventListener("sessionstart",P),ii.addEventListener("sessionend",si),this.render=function(d,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ii.enabled===!0&&ii.isPresenting===!0&&(ii.cameraAutoUpdate===!0&&ii.updateCamera(Q),Q=ii.getCamera()),d.isScene===!0&&d.onBeforeRender(h,d,Q,p),u=Ei.get(d,E.length),u.init(Q),E.push(u),Wi.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Si.setFromProjectionMatrix(Wi),oi=this.localClippingEnabled,J=Hi.init(this.clippingPlanes,oi),K=qi.get(d,W.length),K.init(),W.push(K),ii.enabled===!0&&ii.isPresenting===!0){const ni=h.xr.getDepthSensingMesh();ni!==null&&xi(ni,Q,-1/0,h.sortObjects)}xi(d,Q,0,h.sortObjects),K.finish(),h.sortObjects===!0&&K.sort(I,mi),Ji=ii.enabled===!1||ii.isPresenting===!1||ii.hasDepthSensing()===!1,Ji&&Ri.addToRenderList(K,d),this.info.render.frame++,J===!0&&Hi.beginShadows();const O=u.state.shadowsArray;ci.render(O,d,Q),J===!0&&Hi.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=K.opaque,g=K.transmissive;if(u.setupLights(),Q.isArrayCamera){const ni=Q.cameras;if(g.length>0)for(let Mi=0,yi=ni.length;Mi<yi;Mi++){const Ui=ni[Mi];di(H,g,d,Ui)}Ji&&Ri.render(d);for(let Mi=0,yi=ni.length;Mi<yi;Mi++){const Ui=ni[Mi];ei(K,d,Ui,Ui.viewport)}}else g.length>0&&di(H,g,d,Q),Ji&&Ri.render(d),ei(K,d,Q);p!==null&&(vi.updateMultisampleRenderTarget(p),vi.updateRenderTargetMipmap(p)),d.isScene===!0&&d.onAfterRender(h,d,Q),_i.resetDefaultState(),C=-1,M=null,E.pop(),E.length>0?(u=E[E.length-1],J===!0&&Hi.setGlobalState(h.clippingPlanes,u.state.camera)):u=null,W.pop(),W.length>0?K=W[W.length-1]:K=null};function xi(d,Q,O,H){if(d.visible===!1)return;if(d.layers.test(Q.layers)){if(d.isGroup)O=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(Q);else if(d.isLight)u.pushLight(d),d.castShadow&&u.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||Si.intersectsSprite(d)){H&&Li.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Wi);const Mi=Vi.update(d),yi=d.material;yi.visible&&K.push(d,Mi,yi,O,Li.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||Si.intersectsObject(d))){const Mi=Vi.update(d),yi=d.material;if(H&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Li.copy(d.boundingSphere.center)):(Mi.boundingSphere===null&&Mi.computeBoundingSphere(),Li.copy(Mi.boundingSphere.center)),Li.applyMatrix4(d.matrixWorld).applyMatrix4(Wi)),Array.isArray(yi)){const Ui=Mi.groups;for(let Di=0,Ii=Ui.length;Di<Ii;Di++){const ki=Ui[Di],xr=yi[ki.materialIndex];xr&&xr.visible&&K.push(d,Mi,xr,O,Li.z,ki)}}else yi.visible&&K.push(d,Mi,yi,O,Li.z,null)}}const ni=d.children;for(let Mi=0,yi=ni.length;Mi<yi;Mi++)xi(ni[Mi],Q,O,H)}function ei(d,Q,O,H){const g=d.opaque,ni=d.transmissive,Mi=d.transparent;u.setupLightsView(O),J===!0&&Hi.setGlobalState(h.clippingPlanes,O),H&&Ci.viewport(F.copy(H)),g.length>0&&ji(g,Q,O),ni.length>0&&ji(ni,Q,O),Mi.length>0&&ji(Mi,Q,O),Ci.buffers.depth.setTest(!0),Ci.buffers.depth.setMask(!0),Ci.buffers.color.setMask(!0),Ci.setPolygonOffset(!1)}function di(d,Q,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new pe(1,1,{generateMipmaps:!0,type:Xi.has("EXT_color_buffer_half_float")||Xi.has("EXT_color_buffer_float")?xs:kA,minFilter:Pe,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ur.workingColorSpace}));const ni=u.state.transmissionRenderTarget[H.id],Mi=H.viewport||F;ni.setSize(Mi.z,Mi.w);const yi=h.getRenderTarget();h.setRenderTarget(ni),h.getClearColor(D),j=h.getClearAlpha(),j<1&&h.setClearColor(16777215,.5),h.clear(),Ji&&Ri.render(O);const Ui=h.toneMapping;h.toneMapping=he;const Di=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),J===!0&&Hi.setGlobalState(h.clippingPlanes,H),ji(d,O,H),vi.updateMultisampleRenderTarget(ni),vi.updateRenderTargetMipmap(ni),Xi.has("WEBGL_multisampled_render_to_texture")===!1){let Ii=!1;for(let ki=0,xr=Q.length;ki<xr;ki++){const pr=Q[ki],Fr=pr.object,jr=pr.geometry,cr=pr.material,Bi=pr.group;if(cr.side===TA&&Fr.layers.test(H.layers)){const tt=cr.side;cr.side=Nt,cr.needsUpdate=!0,zi(Fr,O,H,jr,cr,Bi),cr.side=tt,cr.needsUpdate=!0,Ii=!0}}Ii===!0&&(vi.updateMultisampleRenderTarget(ni),vi.updateRenderTargetMipmap(ni))}h.setRenderTarget(yi),h.setClearColor(D,j),Di!==void 0&&(H.viewport=Di),h.toneMapping=Ui}function ji(d,Q,O){const H=Q.isScene===!0?Q.overrideMaterial:null;for(let g=0,ni=d.length;g<ni;g++){const Mi=d[g],yi=Mi.object,Ui=Mi.geometry,Di=H===null?Mi.material:H,Ii=Mi.group;yi.layers.test(O.layers)&&zi(yi,Q,O,Ui,Di,Ii)}}function zi(d,Q,O,H,g,ni){d.onBeforeRender(h,Q,O,H,g,ni),d.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),g.transparent===!0&&g.side===TA&&g.forceSinglePass===!1?(g.side=Nt,g.needsUpdate=!0,h.renderBufferDirect(O,Q,H,g,d,ni),g.side=Le,g.needsUpdate=!0,h.renderBufferDirect(O,Q,H,g,d,ni),g.side=TA):h.renderBufferDirect(O,Q,H,g,d,ni),d.onAfterRender(h,Q,O,H,g,ni)}function $i(d,Q,O){Q.isScene!==!0&&(Q=Oi);const H=Zi.get(d),g=u.state.lights,ni=u.state.shadowsArray,Mi=g.state.version,yi=Ai.getParameters(d,g.state,ni,Q,O),Ui=Ai.getProgramCacheKey(yi);let Di=H.programs;H.environment=d.isMeshStandardMaterial?Q.environment:null,H.fog=Q.fog,H.envMap=(d.isMeshStandardMaterial?L:Y).get(d.envMap||H.environment),H.envMapRotation=H.environment!==null&&d.envMap===null?Q.environmentRotation:d.envMapRotation,Di===void 0&&(d.addEventListener("dispose",gi),Di=new Map,H.programs=Di);let Ii=Di.get(Ui);if(Ii!==void 0){if(H.currentProgram===Ii&&H.lightsStateVersion===Mi)return nr(d,yi),Ii}else yi.uniforms=Ai.getUniforms(d),d.onBeforeCompile(yi,h),Ii=Ai.acquireProgram(yi,Ui),Di.set(Ui,Ii),H.uniforms=yi.uniforms;const ki=H.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ki.clippingPlanes=Hi.uniform),nr(d,yi),H.needsLights=hr(d),H.lightsStateVersion=Mi,H.needsLights&&(ki.ambientLightColor.value=g.state.ambient,ki.lightProbe.value=g.state.probe,ki.directionalLights.value=g.state.directional,ki.directionalLightShadows.value=g.state.directionalShadow,ki.spotLights.value=g.state.spot,ki.spotLightShadows.value=g.state.spotShadow,ki.rectAreaLights.value=g.state.rectArea,ki.ltc_1.value=g.state.rectAreaLTC1,ki.ltc_2.value=g.state.rectAreaLTC2,ki.pointLights.value=g.state.point,ki.pointLightShadows.value=g.state.pointShadow,ki.hemisphereLights.value=g.state.hemi,ki.directionalShadowMap.value=g.state.directionalShadowMap,ki.directionalShadowMatrix.value=g.state.directionalShadowMatrix,ki.spotShadowMap.value=g.state.spotShadowMap,ki.spotLightMatrix.value=g.state.spotLightMatrix,ki.spotLightMap.value=g.state.spotLightMap,ki.pointShadowMap.value=g.state.pointShadowMap,ki.pointShadowMatrix.value=g.state.pointShadowMatrix),H.currentProgram=Ii,H.uniformsList=null,Ii}function mr(d){if(d.uniformsList===null){const Q=d.currentProgram.getUniforms();d.uniformsList=cl.seqWithValue(Q.seq,d.uniforms)}return d.uniformsList}function nr(d,Q){const O=Zi.get(d);O.outputColorSpace=Q.outputColorSpace,O.batching=Q.batching,O.batchingColor=Q.batchingColor,O.instancing=Q.instancing,O.instancingColor=Q.instancingColor,O.instancingMorph=Q.instancingMorph,O.skinning=Q.skinning,O.morphTargets=Q.morphTargets,O.morphNormals=Q.morphNormals,O.morphColors=Q.morphColors,O.morphTargetsCount=Q.morphTargetsCount,O.numClippingPlanes=Q.numClippingPlanes,O.numIntersection=Q.numClipIntersection,O.vertexAlphas=Q.vertexAlphas,O.vertexTangents=Q.vertexTangents,O.toneMapping=Q.toneMapping}function ar(d,Q,O,H,g){Q.isScene!==!0&&(Q=Oi),vi.resetTextureUnits();const ni=Q.fog,Mi=H.isMeshStandardMaterial?Q.environment:null,yi=p===null?h.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:Ce,Ui=(H.isMeshStandardMaterial?L:Y).get(H.envMap||Mi),Di=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ii=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ki=!!O.morphAttributes.position,xr=!!O.morphAttributes.normal,pr=!!O.morphAttributes.color;let Fr=he;H.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(Fr=h.toneMapping);const jr=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,cr=jr!==void 0?jr.length:0,Bi=Zi.get(H),tt=u.state.lights;if(J===!0&&(oi===!0||d!==M)){const _t=d===M&&H.id===C;Hi.setState(H,d,_t)}let Er=!1;H.version===Bi.__version?(Bi.needsLights&&Bi.lightsStateVersion!==tt.state.version||Bi.outputColorSpace!==yi||g.isBatchedMesh&&Bi.batching===!1||!g.isBatchedMesh&&Bi.batching===!0||g.isBatchedMesh&&Bi.batchingColor===!0&&g.colorTexture===null||g.isBatchedMesh&&Bi.batchingColor===!1&&g.colorTexture!==null||g.isInstancedMesh&&Bi.instancing===!1||!g.isInstancedMesh&&Bi.instancing===!0||g.isSkinnedMesh&&Bi.skinning===!1||!g.isSkinnedMesh&&Bi.skinning===!0||g.isInstancedMesh&&Bi.instancingColor===!0&&g.instanceColor===null||g.isInstancedMesh&&Bi.instancingColor===!1&&g.instanceColor!==null||g.isInstancedMesh&&Bi.instancingMorph===!0&&g.morphTexture===null||g.isInstancedMesh&&Bi.instancingMorph===!1&&g.morphTexture!==null||Bi.envMap!==Ui||H.fog===!0&&Bi.fog!==ni||Bi.numClippingPlanes!==void 0&&(Bi.numClippingPlanes!==Hi.numPlanes||Bi.numIntersection!==Hi.numIntersection)||Bi.vertexAlphas!==Di||Bi.vertexTangents!==Ii||Bi.morphTargets!==ki||Bi.morphNormals!==xr||Bi.morphColors!==pr||Bi.toneMapping!==Fr||Bi.morphTargetsCount!==cr)&&(Er=!0):(Er=!0,Bi.__version=H.version);let lA=Bi.currentProgram;Er===!0&&(lA=$i(H,Q,g));let ua=!1,Gt=!1,iV=!1;const Br=lA.getUniforms(),re=Bi.uniforms;if(Ci.useProgram(lA.program)&&(ua=!0,Gt=!0,iV=!0),H.id!==C&&(C=H.id,Gt=!0),ua||M!==d){Br.setValue(Z,"projectionMatrix",d.projectionMatrix),Br.setValue(Z,"viewMatrix",d.matrixWorldInverse);const _t=Br.map.cameraPosition;_t!==void 0&&_t.setValue(Z,Ki.setFromMatrixPosition(d.matrixWorld)),hi.logarithmicDepthBuffer&&Br.setValue(Z,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Br.setValue(Z,"isOrthographic",d.isOrthographicCamera===!0),M!==d&&(M=d,Gt=!0,iV=!0)}if(g.isSkinnedMesh){Br.setOptional(Z,g,"bindMatrix"),Br.setOptional(Z,g,"bindMatrixInverse");const _t=g.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Br.setValue(Z,"boneTexture",_t.boneTexture,vi))}g.isBatchedMesh&&(Br.setOptional(Z,g,"batchingTexture"),Br.setValue(Z,"batchingTexture",g._matricesTexture,vi),Br.setOptional(Z,g,"batchingIdTexture"),Br.setValue(Z,"batchingIdTexture",g._indirectTexture,vi),Br.setOptional(Z,g,"batchingColorTexture"),g._colorsTexture!==null&&Br.setValue(Z,"batchingColorTexture",g._colorsTexture,vi));const rV=O.morphAttributes;if((rV.position!==void 0||rV.normal!==void 0||rV.color!==void 0)&&bi.update(g,O,lA),(Gt||Bi.receiveShadow!==g.receiveShadow)&&(Bi.receiveShadow=g.receiveShadow,Br.setValue(Z,"receiveShadow",g.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(re.envMap.value=Ui,re.flipEnvMap.value=Ui.isCubeTexture&&Ui.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&Q.environment!==null&&(re.envMapIntensity.value=Q.environmentIntensity),Gt&&(Br.setValue(Z,"toneMappingExposure",h.toneMappingExposure),Bi.needsLights&&sr(re,iV),ni&&H.fog===!0&&Yi.refreshFogUniforms(re,ni),Yi.refreshMaterialUniforms(re,H,S,T,u.state.transmissionRenderTarget[d.id]),cl.upload(Z,mr(Bi),re,vi)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cl.upload(Z,mr(Bi),re,vi),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Br.setValue(Z,"center",g.center),Br.setValue(Z,"modelViewMatrix",g.modelViewMatrix),Br.setValue(Z,"normalMatrix",g.normalMatrix),Br.setValue(Z,"modelMatrix",g.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const _t=H.uniformsGroups;for(let tV=0,nK=_t.length;tV<nK;tV++){const Pq=_t[tV];Kr.update(Pq,lA),Kr.bind(Pq,lA)}}return lA}function sr(d,Q){d.ambientLightColor.needsUpdate=Q,d.lightProbe.needsUpdate=Q,d.directionalLights.needsUpdate=Q,d.directionalLightShadows.needsUpdate=Q,d.pointLights.needsUpdate=Q,d.pointLightShadows.needsUpdate=Q,d.spotLights.needsUpdate=Q,d.spotLightShadows.needsUpdate=Q,d.rectAreaLights.needsUpdate=Q,d.hemisphereLights.needsUpdate=Q}function hr(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(d,Q,O){Zi.get(d.texture).__webglTexture=Q,Zi.get(d.depthTexture).__webglTexture=O;const H=Zi.get(d);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||Xi.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,Q){const O=Zi.get(d);O.__webglFramebuffer=Q,O.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(d,Q=0,O=0){p=d,N=Q,w=O;let H=!0,g=null,ni=!1,Mi=!1;if(d){const Ui=Zi.get(d);Ui.__useDefaultFramebuffer!==void 0?(Ci.bindFramebuffer(Z.FRAMEBUFFER,null),H=!1):Ui.__webglFramebuffer===void 0?vi.setupRenderTarget(d):Ui.__hasExternalTextures&&vi.rebindTextures(d,Zi.get(d.texture).__webglTexture,Zi.get(d.depthTexture).__webglTexture);const Di=d.texture;(Di.isData3DTexture||Di.isDataArrayTexture||Di.isCompressedArrayTexture)&&(Mi=!0);const Ii=Zi.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(Ii[Q])?g=Ii[Q][O]:g=Ii[Q],ni=!0):d.samples>0&&vi.useMultisampledRTT(d)===!1?g=Zi.get(d).__webglMultisampledFramebuffer:Array.isArray(Ii)?g=Ii[O]:g=Ii,F.copy(d.viewport),R.copy(d.scissor),z=d.scissorTest}else F.copy(X).multiplyScalar(S).floor(),R.copy(ai).multiplyScalar(S).floor(),z=Ni;if(Ci.bindFramebuffer(Z.FRAMEBUFFER,g)&&H&&Ci.drawBuffers(d,g),Ci.viewport(F),Ci.scissor(R),Ci.setScissorTest(z),ni){const Ui=Zi.get(d.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ui.__webglTexture,O)}else if(Mi){const Ui=Zi.get(d.texture),Di=Q||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ui.__webglTexture,O||0,Di)}C=-1},this.readRenderTargetPixels=function(d,Q,O,H,g,ni,Mi){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yi=Zi.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Mi!==void 0&&(yi=yi[Mi]),yi){Ci.bindFramebuffer(Z.FRAMEBUFFER,yi);try{const Ui=d.texture,Di=Ui.format,Ii=Ui.type;if(!hi.textureFormatReadable(Di)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!hi.textureTypeReadable(Ii)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=d.width-H&&O>=0&&O<=d.height-g&&Z.readPixels(Q,O,H,g,fi.convert(Di),fi.convert(Ii),ni)}finally{const Ui=p!==null?Zi.get(p).__webglFramebuffer:null;Ci.bindFramebuffer(Z.FRAMEBUFFER,Ui)}}},this.readRenderTargetPixelsAsync=async function(d,Q,O,H,g,ni,Mi){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yi=Zi.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Mi!==void 0&&(yi=yi[Mi]),yi){Ci.bindFramebuffer(Z.FRAMEBUFFER,yi);try{const Ui=d.texture,Di=Ui.format,Ii=Ui.type;if(!hi.textureFormatReadable(Di))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!hi.textureTypeReadable(Ii))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=d.width-H&&O>=0&&O<=d.height-g){const ki=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ki),Z.bufferData(Z.PIXEL_PACK_BUFFER,ni.byteLength,Z.STREAM_READ),Z.readPixels(Q,O,H,g,fi.convert(Di),fi.convert(Ii),0),Z.flush();const xr=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);await nx(Z,xr,4);try{Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ki),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,ni)}finally{Z.deleteBuffer(ki),Z.deleteSync(xr)}return ni}}finally{const Ui=p!==null?Zi.get(p).__webglFramebuffer:null;Ci.bindFramebuffer(Z.FRAMEBUFFER,Ui)}}},this.copyFramebufferToTexture=function(d,Q=null,O=0){d.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,d=arguments[1]);const H=Math.pow(2,-O),g=Math.floor(d.image.width*H),ni=Math.floor(d.image.height*H),Mi=Q!==null?Q.x:0,yi=Q!==null?Q.y:0;vi.setTexture2D(d,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,O,0,0,Mi,yi,g,ni),Ci.unbindTexture()},this.copyTextureToTexture=function(d,Q,O=null,H=null,g=0){d.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,d=arguments[1],Q=arguments[2],g=arguments[3]||0,O=null);let ni,Mi,yi,Ui,Di,Ii;O!==null?(ni=O.max.x-O.min.x,Mi=O.max.y-O.min.y,yi=O.min.x,Ui=O.min.y):(ni=d.image.width,Mi=d.image.height,yi=0,Ui=0),H!==null?(Di=H.x,Ii=H.y):(Di=0,Ii=0);const ki=fi.convert(Q.format),xr=fi.convert(Q.type);vi.setTexture2D(Q,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const pr=Z.getParameter(Z.UNPACK_ROW_LENGTH),Fr=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),jr=Z.getParameter(Z.UNPACK_SKIP_PIXELS),cr=Z.getParameter(Z.UNPACK_SKIP_ROWS),Bi=Z.getParameter(Z.UNPACK_SKIP_IMAGES),tt=d.isCompressedTexture?d.mipmaps[g]:d.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,tt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,tt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,yi),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ui),d.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,g,Di,Ii,ni,Mi,ki,xr,tt.data):d.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,g,Di,Ii,tt.width,tt.height,ki,tt.data):Z.texSubImage2D(Z.TEXTURE_2D,g,Di,Ii,ni,Mi,ki,xr,tt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,pr),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Fr),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,jr),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,cr),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Bi),g===0&&Q.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ci.unbindTexture()},this.copyTextureToTexture3D=function(d,Q,O=null,H=null,g=0){d.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,d=arguments[2],Q=arguments[3],g=arguments[4]||0);let ni,Mi,yi,Ui,Di,Ii,ki,xr,pr;const Fr=d.isCompressedTexture?d.mipmaps[g]:d.image;O!==null?(ni=O.max.x-O.min.x,Mi=O.max.y-O.min.y,yi=O.max.z-O.min.z,Ui=O.min.x,Di=O.min.y,Ii=O.min.z):(ni=Fr.width,Mi=Fr.height,yi=Fr.depth,Ui=0,Di=0,Ii=0),H!==null?(ki=H.x,xr=H.y,pr=H.z):(ki=0,xr=0,pr=0);const jr=fi.convert(Q.format),cr=fi.convert(Q.type);let Bi;if(Q.isData3DTexture)vi.setTexture3D(Q,0),Bi=Z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)vi.setTexture2DArray(Q,0),Bi=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const tt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Er=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),lA=Z.getParameter(Z.UNPACK_SKIP_PIXELS),ua=Z.getParameter(Z.UNPACK_SKIP_ROWS),Gt=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Fr.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Fr.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ui),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Di),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ii),d.isDataTexture||d.isData3DTexture?Z.texSubImage3D(Bi,g,ki,xr,pr,ni,Mi,yi,jr,cr,Fr.data):Q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Bi,g,ki,xr,pr,ni,Mi,yi,jr,Fr.data):Z.texSubImage3D(Bi,g,ki,xr,pr,ni,Mi,yi,jr,cr,Fr),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,tt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Er),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,lA),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ua),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Gt),g===0&&Q.generateMipmaps&&Z.generateMipmap(Bi),Ci.unbindTexture()},this.initRenderTarget=function(d){Zi.get(d).__webglFramebuffer===void 0&&vi.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?vi.setTextureCube(d,0):d.isData3DTexture?vi.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?vi.setTexture2DArray(d,0):vi.setTexture2D(d,0),Ci.unbindTexture()},this.resetState=function(){N=0,w=0,p=null,Ci.reset(),_i.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return IA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i;const r=this.getContext();r.drawingBufferColorSpace=i===Kq?"display-p3":"srgb",r.unpackColorSpace=Ur.workingColorSpace===vl?"display-p3":"srgb"}}class LU extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _A,this.environmentIntensity=1,this.environmentRotation=new _A,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(i,r){return super.copy(i,r),i.background!==null&&(this.background=i.background.clone()),i.environment!==null&&(this.environment=i.environment.clone()),i.fog!==null&&(this.fog=i.fog.clone()),this.backgroundBlurriness=i.backgroundBlurriness,this.backgroundIntensity=i.backgroundIntensity,this.backgroundRotation.copy(i.backgroundRotation),this.environmentIntensity=i.environmentIntensity,this.environmentRotation.copy(i.environmentRotation),i.overrideMaterial!==null&&(this.overrideMaterial=i.overrideMaterial.clone()),this.matrixAutoUpdate=i.matrixAutoUpdate,this}toJSON(i){const r=super.toJSON(i);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class pU extends nt{constructor(i=null,r=1,t=1,A,a,o,s,V,m=it,q=it,c,n){super(null,o,s,V,m,q,A,a,c,n),this.isDataTexture=!0,this.image={data:i,width:r,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dU{constructor(i=!0){this.autoStart=i,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fn(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let i=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const r=fn();i=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=i}return i}}function fn(){return(typeof performance>"u"?Date:performance).now()}class gt{constructor(i){this.value=i}clone(){return new gt(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vq}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vq);const wU=new Fq(-1,1,1,-1,0,1);class NU extends Ye{constructor(){super(),this.setAttribute("position",new JA([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new JA([0,2,0,0,2,0],2))}}const RU=new NU;class CU{constructor(i){this._mesh=new KA(RU,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,wU)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class YU{constructor(i,r,t){this.variables=[],this.currentTextureIndex=0;let A=WA;const a={passThruTexture:{value:null}},o=m(c(),a),s=new CU(o);this.setDataType=function(n){return A=n,this},this.addVariable=function(n,l,x){const K=this.createShaderMaterial(l),u={name:n,initialValueTexture:x,material:K,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:it,magFilter:it};return this.variables.push(u),u},this.setVariableDependencies=function(n,l){n.dependencies=l},this.init=function(){if(t.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let n=0;n<this.variables.length;n++){const l=this.variables[n];l.renderTargets[0]=this.createRenderTarget(i,r,l.wrapS,l.wrapT,l.minFilter,l.magFilter),l.renderTargets[1]=this.createRenderTarget(i,r,l.wrapS,l.wrapT,l.minFilter,l.magFilter),this.renderTexture(l.initialValueTexture,l.renderTargets[0]),this.renderTexture(l.initialValueTexture,l.renderTargets[1]);const x=l.material,K=x.uniforms;if(l.dependencies!==null)for(let u=0;u<l.dependencies.length;u++){const W=l.dependencies[u];if(W.name!==l.name){let E=!1;for(let h=0;h<this.variables.length;h++)if(W.name===this.variables[h].name){E=!0;break}if(!E)return"Variable dependency not found. Variable="+l.name+", dependency="+W.name}K[W.name]={value:null},x.fragmentShader=`
uniform sampler2D `+W.name+`;
`+x.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const n=this.currentTextureIndex,l=this.currentTextureIndex===0?1:0;for(let x=0,K=this.variables.length;x<K;x++){const u=this.variables[x];if(u.dependencies!==null){const W=u.material.uniforms;for(let E=0,h=u.dependencies.length;E<h;E++){const U=u.dependencies[E];W[U.name].value=U.renderTargets[n].texture}}this.doRenderTarget(u.material,u.renderTargets[l])}this.currentTextureIndex=l},this.getCurrentRenderTarget=function(n){return n.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(n){return n.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){s.dispose();const n=this.variables;for(let l=0;l<n.length;l++){const x=n[l];x.initialValueTexture&&x.initialValueTexture.dispose();const K=x.renderTargets;for(let u=0;u<K.length;u++)K[u].dispose()}};function V(n){n.defines.resolution="vec2( "+i.toFixed(1)+", "+r.toFixed(1)+" )"}this.addResolutionDefine=V;function m(n,l){l=l||{};const x=new CA({name:"GPUComputationShader",uniforms:l,vertexShader:q(),fragmentShader:n});return V(x),x}this.createShaderMaterial=m,this.createRenderTarget=function(n,l,x,K,u,W){return n=n||i,l=l||r,x=x||bA,K=K||bA,u=u||it,W=W||it,new pe(n,l,{wrapS:x,wrapT:K,minFilter:u,magFilter:W,format:wt,type:A,depthBuffer:!1})},this.createTexture=function(){const n=new Float32Array(i*r*4),l=new pU(n,i,r,wt,WA);return l.needsUpdate=!0,l},this.renderTexture=function(n,l){a.passThruTexture.value=n,this.doRenderTarget(o,l),a.passThruTexture.value=null},this.doRenderTarget=function(n,l){const x=t.getRenderTarget(),K=t.xr.enabled,u=t.shadowMap.autoUpdate;t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,s.material=n,t.setRenderTarget(l),s.render(t),s.material=o,t.xr.enabled=K,t.shadowMap.autoUpdate=u,t.setRenderTarget(x)};function q(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function c(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}var XU=`uniform vec2 uMouse;
uniform vec2 uDeltaMouse;
uniform float uMouseMove;
uniform float uGridSize;
uniform float uRelaxation;
uniform float uDistance;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;

    vec4 color = texture(uGrid, uv);

    float dist = distance(uv, uMouse);
    dist = 1.0 - smoothstep(0.0, uDistance / uGridSize, dist);

    vec2 delta = uDeltaMouse;

    color.rg += delta * dist;
    color.rg *= min(uRelaxation, uMouseMove);

    gl_FragColor = color;
}`;const Jn=.965,ZU=700,GU=.6,zU=.8;class DU{constructor(i){Gi(this,"gpgpuRenderer");Gi(this,"variable");Gi(this,"size");Gi(this,"_delta",new qr);this.size=Math.ceil(Math.sqrt(ZU)),this.gpgpuRenderer=new YU(this.size,this.size,i);const r=this.gpgpuRenderer.createTexture();this.variable=this.gpgpuRenderer.addVariable("uGrid",XU,r),this.variable.material.uniforms.uTime=new gt(0),this.variable.material.uniforms.uRelaxation=new gt(Jn),this.variable.material.uniforms.uGridSize=new gt(this.size),this.variable.material.uniforms.uMouse=new gt(new qr(0,0)),this.variable.material.uniforms.uDeltaMouse=new gt(new qr(0,0)),this.variable.material.uniforms.uMouseMove=new gt(0),this.variable.material.uniforms.uDistance=new gt(GU*10),this.gpgpuRenderer.setVariableDependencies(this.variable,[this.variable]),this.gpgpuRenderer.init()}updateMouse(i){this.variable.material.uniforms.uMouseMove.value=1;const r=this.variable.material.uniforms.uMouse.value;this._delta.subVectors(i,r).multiplyScalar(zU*100),this.variable.material.uniforms.uDeltaMouse.value.copy(this._delta),this.variable.material.uniforms.uMouse.value.copy(i)}render(i){this.variable.material.uniforms.uTime.value=i,this.variable.material.uniforms.uMouseMove.value*=.95,this.variable.material.uniforms.uDeltaMouse.value.multiplyScalar(Jn),this.gpgpuRenderer.compute()}getTexture(){const i=this.gpgpuRenderer.getCurrentRenderTarget(this.variable);return(i.textures&&i.textures[0])??i.texture}dispose(){this.gpgpuRenderer.getCurrentRenderTarget(this.variable).dispose()}}var yU=`varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,QU=`uniform sampler2D uTexture;
uniform sampler2D uGrid;
varying vec2 vUv;

uniform vec2 uContainerResolution;
uniform vec2 uImageResolution;

vec2 coverUvs(vec2 imageRes, vec2 containerRes, bool applyPositionBias) {
    float imageAspectX = imageRes.x / imageRes.y;
    float imageAspectY = imageRes.y / imageRes.x;
    float containerAspectX = containerRes.x / containerRes.y;
    float containerAspectY = containerRes.y / containerRes.x;

    vec2 ratio = vec2(
        min(containerAspectX / imageAspectX, 1.0),
        min(containerAspectY / imageAspectY, 1.0)
    );

    float offsetY = applyPositionBias ? 0.18 * (1.0 - ratio.y) : 0.0;

    return vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5 + offsetY
    );
}

void main() {
    vec2 imageUvs = coverUvs(uImageResolution, uContainerResolution, true);
    vec2 gridUvs  = coverUvs(vec2(1.0, 1.0),  uContainerResolution, false);

    vec4 displacement = texture2D(uGrid, gridUvs);

    vec2 displacedUvs = imageUvs - displacement.rg * 0.01;

    float displacementStrength = clamp(length(displacement.rg), 0.0, 2.0);
    vec2 shift = displacement.rg * 0.001;

    vec2 redUvs   = displacedUvs + shift * (1.0 + displacementStrength * 0.25);
    vec2 greenUvs = displacedUvs + shift * (1.0 + displacementStrength * 2.0);
    vec2 blueUvs  = displacedUvs + shift * (1.0 + displacementStrength * 1.5);

    vec4 finalImage;
    finalImage.r = texture2D(uTexture, redUvs).r;
    finalImage.g = texture2D(uTexture, greenUvs).g;
    finalImage.b = texture2D(uTexture, blueUvs).b;
    finalImage.a = 1.0;

    gl_FragColor = finalImage;
}`;class BU{constructor(i,r,t,A,a,o){Gi(this,"scene");Gi(this,"camera");Gi(this,"geometry");Gi(this,"material");Gi(this,"mesh");this.scene=i,this.camera=new Fq(-.5,.5,.5,-.5,.001,10),this.camera.position.z=1,this.geometry=new Us(1,1),this.material=new CA({vertexShader:yU,fragmentShader:QU,uniforms:{uTexture:new gt(r),uGrid:new gt(null),uContainerResolution:new gt(new qr(a,o)),uImageResolution:new gt(new qr(t,A))}}),this.mesh=new KA(this.geometry,this.material),this.scene.add(this.mesh)}setGridTexture(i){this.material.uniforms.uGrid.value=i}onResize(i,r){this.material.uniforms.uContainerResolution.value.set(i,r)}dispose(){this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose()}}function gU(e,i){const r=i.scrollGate??4;if(window.innerWidth<768||!window.matchMedia("(hover: hover)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=document.getElementById("hero");if(t)try{let A=function(){return[e.clientWidth||e.offsetWidth,e.clientHeight||e.offsetHeight]},a=function(c){let[n,l]=A();if(n===0||l===0){requestAnimationFrame(()=>a(c));return}const x=new UU({canvas:e,antialias:!1,alpha:!1});x.setPixelRatio(Math.min(devicePixelRatio,2)),x.setSize(n,l),x.setClearColor(16250871,1);const K=new LU,u=new nt(c);u.minFilter=Ot,u.magFilter=Ot,u.colorSpace=OA,u.format=wt,u.needsUpdate=!0;const W=new DU(x),E=new BU(K,u,c.naturalWidth,c.naturalHeight,n,l);let h=t.getBoundingClientRect();const U=new qr;function N(R){U.set((R.clientX-h.left)/h.width,1-(R.clientY-h.top)/h.height),W.updateMouse(U)}function w(){const[R,z]=A();h=t.getBoundingClientRect(),x.setSize(R,z),E.onResize(R,z)}function p(){if(s)return;s=!0,cancelAnimationFrame(o),t.classList.remove("gl-on"),e.classList.remove("live"),window.removeEventListener("scroll",C),t.removeEventListener("mousemove",N),window.removeEventListener("resize",w),W.dispose(),E.dispose(),u.dispose(),x.dispose();const z=x.getContext().getExtension("WEBGL_lose_context");z&&z.loseContext()}function C(){window.scrollY>r&&p()}if(window.scrollY>r)return;t.addEventListener("mousemove",N),window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("resize",w);let M=0;function F(){if(s)return;const R=m.getElapsedTime();W.render(R),E.setGridTexture(W.getTexture()),x.render(K,E.camera),M++,!V&&M>=2&&(V=!0,t.classList.add("gl-on"),e.classList.add("live")),o=requestAnimationFrame(F)}o=requestAnimationFrame(F)},o=0,s=!1,V=!1;const m=new dU,q=new Image;q.crossOrigin="anonymous",q.onerror=()=>{},q.onload=()=>{try{a(q)}catch{}},q.src=i.imageSrc}catch{}}const SU="assets/img/frame-01.jpg",TU="assets/img/frame-02.jpg",OU="assets/img/frame-03.jpg",jU="assets/img/frame-04.jpg",bU="assets/img/frame-05.jpg",IU="assets/img/frame-06.jpg",vU="assets/img/frame-07.jpg",HU="assets/img/frame-08.jpg",fU="assets/img/frame-09.jpg",JU="assets/img/frame-10.jpg",PU="assets/img/frame-11.jpg",kU="assets/img/frame-12.jpg",_U="assets/img/frame-13.jpg",$U="assets/img/frame-14.jpg",iL="assets/img/frame-15.jpg",rL="assets/img/frame-16.jpg",tL="assets/img/frame-17.jpg",AL="assets/img/frame-18.jpg",eL="assets/img/frame-19.jpg",aL="assets/img/frame-20.jpg",oL="assets/img/frame-21.jpg",sL="assets/img/frame-22.jpg",lL="assets/img/frame-23.jpg",VL="assets/img/frame-24.jpg",mL="assets/img/frame-25.jpg",qL="assets/img/frame-26.jpg",nL="assets/img/frame-27.jpg",cL="assets/img/frame-28.jpg",uL="assets/img/frame-29.jpg",WL="assets/img/frame-30.jpg",KL="assets/img/frame-31.jpg",xL="assets/img/frame-32.jpg",FL="assets/img/frame-33.jpg",hL="assets/img/frame-34.jpg",EL="assets/img/frame-35.jpg",ML="assets/img/frame-36.jpg",UL="assets/img/frame-37.jpg",LL="assets/img/frame-38.jpg",pL="assets/img/frame-39.jpg",dL="assets/img/frame-40.jpg",wL="assets/img/frame-41.jpg",NL="assets/img/frame-42.jpg",RL="assets/img/frame-43.jpg",CL="assets/img/frame-44.jpg",YL="assets/img/frame-45.jpg",XL="assets/img/frame-46.jpg",ZL="assets/img/frame-47.jpg",GL="assets/img/frame-48.jpg",zL="assets/img/frame-49.jpg",DL="assets/img/frame-50.jpg",yL="assets/img/frame-51.jpg",QL="assets/img/frame-52.jpg",BL="assets/img/frame-53.jpg",gL="assets/img/frame-54.jpg",SL="assets/img/frame-55.jpg",TL="assets/img/frame-56.jpg",OL="assets/img/frame-57.jpg",jL="assets/img/frame-58.jpg",bL="assets/img/frame-59.jpg",IL="assets/img/frame-60.jpg",vL="assets/img/frame-61.jpg",HL="assets/img/frame-62.jpg",fL="assets/img/frame-63.jpg",JL="assets/img/frame-64.jpg",PL="assets/img/frame-65.jpg",kL="assets/img/frame-66.jpg",_L="assets/img/frame-67.jpg",$L="assets/img/frame-68.jpg",ip="assets/img/frame-69.jpg",rp="assets/img/frame-70.jpg",tp="assets/img/frame-71.jpg",Ap="assets/img/frame-72.jpg",ep="assets/img/frame-73.jpg",ap="assets/img/frame-74.jpg",op="assets/img/frame-75.jpg",sp="assets/img/frame-76.jpg",lp="assets/img/frame-77.jpg",Vp="assets/img/frame-78.jpg",mp="assets/img/frame-79.jpg",qp="assets/img/frame-80.jpg";function BA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cu(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},as={duration:.5,overwrite:!1,delay:0},Eq,at,Yr,aA=1e8,Rr=1/aA,Gm=Math.PI*2,np=Gm/4,cp=0,Yu=Math.sqrt,up=Math.cos,Wp=Math.sin,rt=function(i){return typeof i=="string"},zr=function(i){return typeof i=="function"},$A=function(i){return typeof i=="number"},Mq=function(i){return typeof i>"u"},YA=function(i){return typeof i=="object"},Rt=function(i){return i!==!1},Uq=function(){return typeof window<"u"},Hs=function(i){return zr(i)||rt(i)},Xu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ct=Array.isArray,Kp=/random\([^)]+\)/g,xp=/,\s*/g,Pn=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,XV=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gu=/[+-]=-?[.\d]+/,Fp=/[^,'"\[\]\s]+/gi,hp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zr,EA,zm,Lq,Pt={},Zl={},zu,Du=function(i){return(Zl=lo(i,Pt))&&Zt},pq=function(i,r){return console.warn("Invalid property",i,"set to",r,"Missing plugin? gsap.registerPlugin()")},os=function(i,r){return!r&&console.warn(i)},yu=function(i,r){return i&&(Pt[i]=r)&&Zl&&(Zl[i]=r)||Pt},ss=function(){return 0},Ep={suppressEvents:!0,isStart:!0,kill:!1},ul={suppressEvents:!0,kill:!1},Mp={suppressEvents:!0},dq={},Ee=[],Dm={},Qu,St={},ZV={},kn=30,Wl=[],wq="",Nq=function(i){var r=i[0],t,A;if(YA(r)||zr(r)||(i=[i]),!(t=(r._gsap||{}).harness)){for(A=Wl.length;A--&&!Wl[A].targetTest(r););t=Wl[A]}for(A=i.length;A--;)i[A]&&(i[A]._gsap||(i[A]._gsap=new aW(i[A],t)))||i.splice(A,1);return i},$e=function(i){return i._gsap||Nq(oA(i))[0]._gsap},Bu=function(i,r,t){return(t=i[r])&&zr(t)?i[r]():Mq(t)&&i.getAttribute&&i.getAttribute(r)||t},Ct=function(i,r){return(i=i.split(",")).forEach(r)||i},yr=function(i){return Math.round(i*1e5)/1e5||0},Xr=function(i){return Math.round(i*1e7)/1e7||0},Ha=function(i,r){var t=r.charAt(0),A=parseFloat(r.substr(2));return i=parseFloat(i),t==="+"?i+A:t==="-"?i-A:t==="*"?i*A:i/A},Up=function(i,r){for(var t=r.length,A=0;i.indexOf(r[A])<0&&++A<t;);return A<t},Gl=function(){var i=Ee.length,r=Ee.slice(0),t,A;for(Dm={},Ee.length=0,t=0;t<i;t++)A=r[t],A&&A._lazy&&(A.render(A._lazy[0],A._lazy[1],!0)._lazy=0)},Rq=function(i){return!!(i._initted||i._startAt||i.add)},gu=function(i,r,t,A){Ee.length&&!at&&Gl(),i.render(r,t,!!(at&&r<0&&Rq(i))),Ee.length&&!at&&Gl()},Su=function(i){var r=parseFloat(i);return(r||r===0)&&(i+"").match(Fp).length<2?r:rt(i)?i.trim():i},Tu=function(i){return i},kt=function(i,r){for(var t in r)t in i||(i[t]=r[t]);return i},Lp=function(i){return function(r,t){for(var A in t)A in r||A==="duration"&&i||A==="ease"||(r[A]=t[A])}},lo=function(i,r){for(var t in r)i[t]=r[t];return i},_n=function e(i,r){for(var t in r)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(i[t]=YA(r[t])?e(i[t]||(i[t]={}),r[t]):r[t]);return i},zl=function(i,r){var t={},A;for(A in i)A in r||(t[A]=i[A]);return t},jo=function(i){var r=i.parent||Zr,t=i.keyframes?Lp(ct(i.keyframes)):kt;if(Rt(i.inherit))for(;r;)t(i,r.vars.defaults),r=r.parent||r._dp;return i},pp=function(i,r){for(var t=i.length,A=t===r.length;A&&t--&&i[t]===r[t];);return t<0},Ou=function(i,r,t,A,a){var o=i[A],s;if(a)for(s=r[a];o&&o[a]>s;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=i[t],i[t]=r),r._next?r._next._prev=r:i[A]=r,r._prev=o,r.parent=r._dp=i,r},Jl=function(i,r,t,A){t===void 0&&(t="_first"),A===void 0&&(A="_last");var a=r._prev,o=r._next;a?a._next=o:i[t]===r&&(i[t]=o),o?o._prev=a:i[A]===r&&(i[A]=a),r._next=r._prev=r.parent=null},de=function(i,r){i.parent&&(!r||i.parent.autoRemoveChildren)&&i.parent.remove&&i.parent.remove(i),i._act=0},ia=function(i,r){if(i&&(!r||r._end>i._dur||r._start<0))for(var t=i;t;)t._dirty=1,t=t.parent;return i},dp=function(i){for(var r=i.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return i},ym=function(i,r,t,A){return i._startAt&&(at?i._startAt.revert(ul):i.vars.immediateRender&&!i.vars.autoRevert||i._startAt.render(r,!0,A))},wp=function e(i){return!i||i._ts&&e(i.parent)},$n=function(i){return i._repeat?Vo(i._tTime,i=i.duration()+i._rDelay)*i:0},Vo=function(i,r){var t=Math.floor(i=Xr(i/r));return i&&t===i?t-1:t},Dl=function(i,r){return(i-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Pl=function(i){return i._end=Xr(i._start+(i._tDur/Math.abs(i._ts||i._rts||Rr)||0))},kl=function(i,r){var t=i._dp;return t&&t.smoothChildTiming&&i._ts&&(i._start=Xr(t._time-(i._ts>0?r/i._ts:((i._dirty?i.totalDuration():i._tDur)-r)/-i._ts)),Pl(i),t._dirty||ia(t,i)),i},ju=function(i,r){var t;if((r._time||!r._dur&&r._initted||r._start<i._time&&(r._dur||!r.add))&&(t=Dl(i.rawTime(),r),(!r._dur||Ls(0,r.totalDuration(),t)-r._tTime>Rr)&&r.render(t,!0)),ia(i,r)._dp&&i._initted&&i._time>=i._dur&&i._ts){if(i._dur<i.duration())for(t=i;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;i._zTime=-Rr}},pA=function(i,r,t,A){return r.parent&&de(r),r._start=Xr(($A(t)?t:t||i!==Zr?tA(i,t,r):i._time)+r._delay),r._end=Xr(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Ou(i,r,"_first","_last",i._sort?"_start":0),Qm(r)||(i._recent=r),A||ju(i,r),i._ts<0&&kl(i,i._tTime),i},bu=function(i,r){return(Pt.ScrollTrigger||pq("scrollTrigger",r))&&Pt.ScrollTrigger.create(r,i)},Iu=function(i,r,t,A,a){if(Yq(i,r,a),!i._initted)return 1;if(!t&&i._pt&&!at&&(i._dur&&i.vars.lazy!==!1||!i._dur&&i.vars.lazy)&&Qu!==jt.frame)return Ee.push(i),i._lazy=[a,A],1},Np=function e(i){var r=i.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||e(r))},Qm=function(i){var r=i.data;return r==="isFromStart"||r==="isStart"},Rp=function(i,r,t,A){var a=i.ratio,o=r<0||!r&&(!i._start&&Np(i)&&!(!i._initted&&Qm(i))||(i._ts<0||i._dp._ts<0)&&!Qm(i))?0:1,s=i._rDelay,V=0,m,q,c;if(s&&i._repeat&&(V=Ls(0,i._tDur,r),q=Vo(V,s),i._yoyo&&q&1&&(o=1-o),q!==Vo(i._tTime,s)&&(a=1-o,i.vars.repeatRefresh&&i._initted&&i.invalidate())),o!==a||at||A||i._zTime===Rr||!r&&i._zTime){if(!i._initted&&Iu(i,r,A,t,V))return;for(c=i._zTime,i._zTime=r||(t?Rr:0),t||(t=r&&!c),i.ratio=o,i._from&&(o=1-o),i._time=0,i._tTime=V,m=i._pt;m;)m.r(o,m.d),m=m._next;r<0&&ym(i,r,t,!0),i._onUpdate&&!t&&vt(i,"onUpdate"),V&&i._repeat&&!t&&i.parent&&vt(i,"onRepeat"),(r>=i._tDur||r<0)&&i.ratio===o&&(o&&de(i,1),!t&&!at&&(vt(i,o?"onComplete":"onReverseComplete",!0),i._prom&&i._prom()))}else i._zTime||(i._zTime=r)},Cp=function(i,r,t){var A;if(t>r)for(A=i._first;A&&A._start<=t;){if(A.data==="isPause"&&A._start>r)return A;A=A._next}else for(A=i._last;A&&A._start>=t;){if(A.data==="isPause"&&A._start<r)return A;A=A._prev}},mo=function(i,r,t,A){var a=i._repeat,o=Xr(r)||0,s=i._tTime/i._tDur;return s&&!A&&(i._time*=o/i._dur),i._dur=o,i._tDur=a?a<0?1e10:Xr(o*(a+1)+i._rDelay*a):o,s>0&&!A&&kl(i,i._tTime=i._tDur*s),i.parent&&Pl(i),t||ia(i.parent,i),i},ic=function(i){return i instanceof dt?ia(i):mo(i,i._dur)},Yp={_start:0,endTime:ss,totalDuration:ss},tA=function e(i,r,t){var A=i.labels,a=i._recent||Yp,o=i.duration()>=aA?a.endTime(!1):i._dur,s,V,m;return rt(r)&&(isNaN(r)||r in A)?(V=r.charAt(0),m=r.substr(-1)==="%",s=r.indexOf("="),V==="<"||V===">"?(s>=0&&(r=r.replace(/=/,"")),(V==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(r.substr(1))||0)*(m?(s<0?a:t).totalDuration()/100:1)):s<0?(r in A||(A[r]=o),A[r]):(V=parseFloat(r.charAt(s-1)+r.substr(s+1)),m&&t&&(V=V/100*(ct(t)?t[0]:t).totalDuration()),s>1?e(i,r.substr(0,s-1),t)+V:o+V)):r==null?o:+r},bo=function(i,r,t){var A=$A(r[1]),a=(A?2:1)+(i<2?0:1),o=r[a],s,V;if(A&&(o.duration=r[1]),o.parent=t,i){for(s=o,V=t;V&&!("immediateRender"in s);)s=V.vars.defaults||{},V=Rt(V.vars.inherit)&&V.parent;o.immediateRender=Rt(s.immediateRender),i<2?o.runBackwards=1:o.startAt=r[a-1]}return new Or(r[0],o,r[a+1])},Xe=function(i,r){return i||i===0?r(i):r},Ls=function(i,r,t){return t<i?i:t>r?r:t},mt=function(i,r){return!rt(i)||!(r=hp.exec(i))?"":r[1]},Xp=function(i,r,t){return Xe(t,function(A){return Ls(i,r,A)})},Bm=[].slice,vu=function(i,r){return i&&YA(i)&&"length"in i&&(!r&&!i.length||i.length-1 in i&&YA(i[0]))&&!i.nodeType&&i!==EA},Zp=function(i,r,t){return t===void 0&&(t=[]),i.forEach(function(A){var a;return rt(A)&&!r||vu(A,1)?(a=t).push.apply(a,oA(A)):t.push(A)})||t},oA=function(i,r,t){return Yr&&!r&&Yr.selector?Yr.selector(i):rt(i)&&!t&&(zm||!qo())?Bm.call((r||Lq).querySelectorAll(i),0):ct(i)?Zp(i,t):vu(i)?Bm.call(i,0):i?[i]:[]},gm=function(i){return i=oA(i)[0]||os("Invalid scope")||{},function(r){var t=i.current||i.nativeElement||i;return oA(r,t.querySelectorAll?t:t===i?os("Invalid scope")||Lq.createElement("div"):i)}},Hu=function(i){return i.sort(function(){return .5-Math.random()})},fu=function(i){if(zr(i))return i;var r=YA(i)?i:{each:i},t=ra(r.ease),A=r.from||0,a=parseFloat(r.base)||0,o={},s=A>0&&A<1,V=isNaN(A)||s,m=r.axis,q=A,c=A;return rt(A)?q=c={center:.5,edges:.5,end:1}[A]||0:!s&&V&&(q=A[0],c=A[1]),function(n,l,x){var K=(x||r).length,u=o[K],W,E,h,U,N,w,p,C,M;if(!u){if(M=r.grid==="auto"?0:(r.grid||[1,aA])[1],!M){for(p=-aA;p<(p=x[M++].getBoundingClientRect().left)&&M<K;);M<K&&M--}for(u=o[K]=[],W=V?Math.min(M,K)*q-.5:A%M,E=M===aA?0:V?K*c/M-.5:A/M|0,p=0,C=aA,w=0;w<K;w++)h=w%M-W,U=E-(w/M|0),u[w]=N=m?Math.abs(m==="y"?U:h):Yu(h*h+U*U),N>p&&(p=N),N<C&&(C=N);A==="random"&&Hu(u),u.max=p-C,u.min=C,u.v=K=(parseFloat(r.amount)||parseFloat(r.each)*(M>K?K-1:m?m==="y"?K/M:M:Math.max(M,K/M))||0)*(A==="edges"?-1:1),u.b=K<0?a-K:a,u.u=mt(r.amount||r.each)||0,t=t&&K<0?Ip(t):t}return K=(u[n]-u.min)/u.max||0,Xr(u.b+(t?t(K):K)*u.v)+u.u}},Sm=function(i){var r=Math.pow(10,((i+"").split(".")[1]||"").length);return function(t){var A=Xr(Math.round(parseFloat(t)/i)*i*r);return(A-A%1)/r+($A(t)?0:mt(t))}},Ju=function(i,r){var t=ct(i),A,a;return!t&&YA(i)&&(A=t=i.radius||aA,i.values?(i=oA(i.values),(a=!$A(i[0]))&&(A*=A)):i=Sm(i.increment)),Xe(r,t?zr(i)?function(o){return a=i(o),Math.abs(a-o)<=A?a:o}:function(o){for(var s=parseFloat(a?o.x:o),V=parseFloat(a?o.y:0),m=aA,q=0,c=i.length,n,l;c--;)a?(n=i[c].x-s,l=i[c].y-V,n=n*n+l*l):n=Math.abs(i[c]-s),n<m&&(m=n,q=c);return q=!A||m<=A?i[q]:o,a||q===o||$A(o)?q:q+mt(o)}:Sm(i))},Pu=function(i,r,t,A){return Xe(ct(i)?!r:t===!0?!!(t=0):!A,function(){return ct(i)?i[~~(Math.random()*i.length)]:(t=t||1e-5)&&(A=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((i-t/2+Math.random()*(r-i+t*.99))/t)*t*A)/A})},Gp=function(){for(var i=arguments.length,r=new Array(i),t=0;t<i;t++)r[t]=arguments[t];return function(A){return r.reduce(function(a,o){return o(a)},A)}},zp=function(i,r){return function(t){return i(parseFloat(t))+(r||mt(t))}},Dp=function(i,r,t){return _u(i,r,0,1,t)},ku=function(i,r,t){return Xe(t,function(A){return i[~~r(A)]})},yp=function e(i,r,t){var A=r-i;return ct(i)?ku(i,e(0,i.length),r):Xe(t,function(a){return(A+(a-i)%A)%A+i})},Qp=function e(i,r,t){var A=r-i,a=A*2;return ct(i)?ku(i,e(0,i.length-1),r):Xe(t,function(o){return o=(a+(o-i)%a)%a||0,i+(o>A?a-o:o)})},ls=function(i){return i.replace(Kp,function(r){var t=r.indexOf("[")+1,A=r.substring(t||7,t?r.indexOf("]"):r.length-1).split(xp);return Pu(t?A:+A[0],t?0:+A[1],+A[2]||1e-5)})},_u=function(i,r,t,A,a){var o=r-i,s=A-t;return Xe(a,function(V){return t+((V-i)/o*s||0)})},Bp=function e(i,r,t,A){var a=isNaN(i+r)?0:function(l){return(1-l)*i+l*r};if(!a){var o=rt(i),s={},V,m,q,c,n;if(t===!0&&(A=1)&&(t=null),o)i={p:i},r={p:r};else if(ct(i)&&!ct(r)){for(q=[],c=i.length,n=c-2,m=1;m<c;m++)q.push(e(i[m-1],i[m]));c--,a=function(x){x*=c;var K=Math.min(n,~~x);return q[K](x-K)},t=r}else A||(i=lo(ct(i)?[]:{},i));if(!q){for(V in r)Cq.call(s,i,V,"get",r[V]);a=function(x){return Gq(x,s)||(o?i.p:i)}}}return Xe(t,a)},rc=function(i,r,t){var A=i.labels,a=aA,o,s,V;for(o in A)s=A[o]-r,s<0==!!t&&s&&a>(s=Math.abs(s))&&(V=o,a=s);return V},vt=function(i,r,t){var A=i.vars,a=A[r],o=Yr,s=i._ctx,V,m,q;if(a)return V=A[r+"Params"],m=A.callbackScope||i,t&&Ee.length&&Gl(),s&&(Yr=s),q=V?a.apply(m,V):a.call(m),Yr=o,q},Xo=function(i){return de(i),i.scrollTrigger&&i.scrollTrigger.kill(!!at),i.progress()<1&&vt(i,"onInterrupt"),i},Oa,$u=[],iW=function(i){if(i)if(i=!i.name&&i.default||i,Uq()||i.headless){var r=i.name,t=zr(i),A=r&&!t&&i.init?function(){this._props=[]}:i,a={init:ss,render:Gq,add:Cq,kill:r1,modifier:i1,rawVars:0},o={targetTest:0,get:0,getSetter:Zq,aliases:{},register:0};if(qo(),i!==A){if(St[r])return;kt(A,kt(zl(i,a),o)),lo(A.prototype,lo(a,zl(i,o))),St[A.prop=r]=A,i.targetTest&&(Wl.push(A),dq[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}yu(r,A),i.register&&i.register(Zt,A,Yt)}else $u.push(i)},wr=255,Zo={aqua:[0,wr,wr],lime:[0,wr,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wr],navy:[0,0,128],white:[wr,wr,wr],olive:[128,128,0],yellow:[wr,wr,0],orange:[wr,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wr,0,0],pink:[wr,192,203],cyan:[0,wr,wr],transparent:[wr,wr,wr,0]},GV=function(i,r,t){return i+=i<0?1:i>1?-1:0,(i*6<1?r+(t-r)*i*6:i<.5?t:i*3<2?r+(t-r)*(2/3-i)*6:r)*wr+.5|0},rW=function(i,r,t){var A=i?$A(i)?[i>>16,i>>8&wr,i&wr]:0:Zo.black,a,o,s,V,m,q,c,n,l,x;if(!A){if(i.substr(-1)===","&&(i=i.substr(0,i.length-1)),Zo[i])A=Zo[i];else if(i.charAt(0)==="#"){if(i.length<6&&(a=i.charAt(1),o=i.charAt(2),s=i.charAt(3),i="#"+a+a+o+o+s+s+(i.length===5?i.charAt(4)+i.charAt(4):"")),i.length===9)return A=parseInt(i.substr(1,6),16),[A>>16,A>>8&wr,A&wr,parseInt(i.substr(7),16)/255];i=parseInt(i.substr(1),16),A=[i>>16,i>>8&wr,i&wr]}else if(i.substr(0,3)==="hsl"){if(A=x=i.match(Pn),!r)V=+A[0]%360/360,m=+A[1]/100,q=+A[2]/100,o=q<=.5?q*(m+1):q+m-q*m,a=q*2-o,A.length>3&&(A[3]*=1),A[0]=GV(V+1/3,a,o),A[1]=GV(V,a,o),A[2]=GV(V-1/3,a,o);else if(~i.indexOf("="))return A=i.match(Zu),t&&A.length<4&&(A[3]=1),A}else A=i.match(Pn)||Zo.transparent;A=A.map(Number)}return r&&!x&&(a=A[0]/wr,o=A[1]/wr,s=A[2]/wr,c=Math.max(a,o,s),n=Math.min(a,o,s),q=(c+n)/2,c===n?V=m=0:(l=c-n,m=q>.5?l/(2-c-n):l/(c+n),V=c===a?(o-s)/l+(o<s?6:0):c===o?(s-a)/l+2:(a-o)/l+4,V*=60),A[0]=~~(V+.5),A[1]=~~(m*100+.5),A[2]=~~(q*100+.5)),t&&A.length<4&&(A[3]=1),A},tW=function(i){var r=[],t=[],A=-1;return i.split(Me).forEach(function(a){var o=a.match(Ta)||[];r.push.apply(r,o),t.push(A+=o.length+1)}),r.c=t,r},tc=function(i,r,t){var A="",a=(i+A).match(Me),o=r?"hsla(":"rgba(",s=0,V,m,q,c;if(!a)return i;if(a=a.map(function(n){return(n=rW(n,r,1))&&o+(r?n[0]+","+n[1]+"%,"+n[2]+"%,"+n[3]:n.join(","))+")"}),t&&(q=tW(i),V=t.c,V.join(A)!==q.c.join(A)))for(m=i.replace(Me,"1").split(Ta),c=m.length-1;s<c;s++)A+=m[s]+(~V.indexOf(s)?a.shift()||o+"0,0,0,0)":(q.length?q:a.length?a:t).shift());if(!m)for(m=i.split(Me),c=m.length-1;s<c;s++)A+=m[s]+a[s];return A+m[c]},Me=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",i;for(i in Zo)e+="|"+i+"\\b";return new RegExp(e+")","gi")}(),gp=/hsl[a]?\(/,AW=function(i){var r=i.join(" "),t;if(Me.lastIndex=0,Me.test(r))return t=gp.test(r),i[1]=tc(i[1],t),i[0]=tc(i[0],t,tW(i[1])),!0},Vs,jt=function(){var e=Date.now,i=500,r=33,t=e(),A=t,a=1e3/240,o=a,s=[],V,m,q,c,n,l,x=function K(u){var W=e()-A,E=u===!0,h,U,N,w;if((W>i||W<0)&&(t+=W-r),A+=W,N=A-t,h=N-o,(h>0||E)&&(w=++c.frame,n=N-c.time*1e3,c.time=N=N/1e3,o+=h+(h>=a?4:a-h),U=1),E||(V=m(K)),U)for(l=0;l<s.length;l++)s[l](N,n,w,u)};return c={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(u){return n/(1e3/(u||60))},wake:function(){zu&&(!zm&&Uq()&&(EA=zm=window,Lq=EA.document||{},Pt.gsap=Zt,(EA.gsapVersions||(EA.gsapVersions=[])).push(Zt.version),Du(Zl||EA.GreenSockGlobals||!EA.gsap&&EA||{}),$u.forEach(iW)),q=typeof requestAnimationFrame<"u"&&requestAnimationFrame,V&&c.sleep(),m=q||function(u){return setTimeout(u,o-c.time*1e3+1|0)},Vs=1,x(2))},sleep:function(){(q?cancelAnimationFrame:clearTimeout)(V),Vs=0,m=ss},lagSmoothing:function(u,W){i=u||1/0,r=Math.min(W||33,i)},fps:function(u){a=1e3/(u||240),o=c.time*1e3+a},add:function(u,W,E){var h=W?function(U,N,w,p){u(U,N,w,p),c.remove(h)}:u;return c.remove(u),s[E?"unshift":"push"](h),qo(),h},remove:function(u,W){~(W=s.indexOf(u))&&s.splice(W,1)&&l>=W&&l--},_listeners:s},c}(),qo=function(){return!Vs&&jt.wake()},Wr={},Sp=/^[\d.\-M][\d.\-,\s]/,Tp=/["']/g,Op=function(i){for(var r={},t=i.substr(1,i.length-3).split(":"),A=t[0],a=1,o=t.length,s,V,m;a<o;a++)V=t[a],s=a!==o-1?V.lastIndexOf(","):V.length,m=V.substr(0,s),r[A]=isNaN(m)?m.replace(Tp,"").trim():+m,A=V.substr(s+1).trim();return r},jp=function(i){var r=i.indexOf("(")+1,t=i.indexOf(")"),A=i.indexOf("(",r);return i.substring(r,~A&&A<t?i.indexOf(")",t+1):t)},bp=function(i){var r=(i+"").split("("),t=Wr[r[0]];return t&&r.length>1&&t.config?t.config.apply(null,~i.indexOf("{")?[Op(r[1])]:jp(i).split(",").map(Su)):Wr._CE&&Sp.test(i)?Wr._CE("",i):t},Ip=function(i){return function(r){return 1-i(1-r)}},ra=function(i,r){return i&&(zr(i)?i:Wr[i]||bp(i))||r},ca=function(i,r,t,A){t===void 0&&(t=function(V){return 1-r(1-V)}),A===void 0&&(A=function(V){return V<.5?r(V*2)/2:1-r((1-V)*2)/2});var a={easeIn:r,easeOut:t,easeInOut:A},o;return Ct(i,function(s){Wr[s]=Pt[s]=a,Wr[o=s.toLowerCase()]=t;for(var V in a)Wr[o+(V==="easeIn"?".in":V==="easeOut"?".out":".inOut")]=Wr[s+"."+V]=a[V]}),a},eW=function(i){return function(r){return r<.5?(1-i(1-r*2))/2:.5+i((r-.5)*2)/2}},zV=function e(i,r,t){var A=r>=1?r:1,a=(t||(i?.3:.45))/(r<1?r:1),o=a/Gm*(Math.asin(1/A)||0),s=function(q){return q===1?1:A*Math.pow(2,-10*q)*Wp((q-o)*a)+1},V=i==="out"?s:i==="in"?function(m){return 1-s(1-m)}:eW(s);return a=Gm/a,V.config=function(m,q){return e(i,m,q)},V},DV=function e(i,r){r===void 0&&(r=1.70158);var t=function(o){return o?--o*o*((r+1)*o+r)+1:0},A=i==="out"?t:i==="in"?function(a){return 1-t(1-a)}:eW(t);return A.config=function(a){return e(i,a)},A};Ct("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,i){var r=i<5?i+1:i;ca(e+",Power"+(r-1),i?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(t*2,r)/2:1-Math.pow((1-t)*2,r)/2})});Wr.Linear.easeNone=Wr.none=Wr.Linear.easeIn;ca("Elastic",zV("in"),zV("out"),zV());(function(e,i){var r=1/i,t=2*r,A=2.5*r,a=function(s){return s<r?e*s*s:s<t?e*Math.pow(s-1.5/i,2)+.75:s<A?e*(s-=2.25/i)*s+.9375:e*Math.pow(s-2.625/i,2)+.984375};ca("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);ca("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});ca("Circ",function(e){return-(Yu(1-e*e)-1)});ca("Sine",function(e){return e===1?1:-up(e*np)+1});ca("Back",DV("in"),DV("out"),DV());Wr.SteppedEase=Wr.steps=Pt.SteppedEase={config:function(i,r){i===void 0&&(i=1);var t=1/i,A=i+(r?0:1),a=r?1:0,o=1-Rr;return function(s){return((A*Ls(0,o,s)|0)+a)*t}}};as.ease=Wr["quad.out"];Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return wq+=e+","+e+"Params,"});var aW=function(i,r){this.id=cp++,i._gsap=this,this.target=i,this.harness=r,this.get=r?r.get:Bu,this.set=r?r.getSetter:Zq},ms=function(){function e(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,mo(this,+r.duration,1,1),this.data=r.data,Yr&&(this._ctx=Yr,Yr.data.push(this)),Vs||jt.wake()}var i=e.prototype;return i.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},i.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},i.totalDuration=function(t){return arguments.length?(this._dirty=0,mo(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},i.totalTime=function(t,A){if(qo(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(kl(this,t),!a._dp||a.parent||ju(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&pA(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!A||this._initted&&Math.abs(this._zTime)===Rr||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),gu(this,t,A)),this},i.time=function(t,A){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+$n(this))%(this._dur+this._rDelay)||(t?this._dur:0),A):this._time},i.totalProgress=function(t,A){return arguments.length?this.totalTime(this.totalDuration()*t,A):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},i.progress=function(t,A){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+$n(this),A):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},i.iteration=function(t,A){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*a,A):this._repeat?Vo(this._tTime,a)+1:1},i.timeScale=function(t,A){if(!arguments.length)return this._rts===-Rr?0:this._rts;if(this._rts===t)return this;var a=this.parent&&this._ts?Dl(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Rr?0:this._rts,this.totalTime(Ls(-Math.abs(this._delay),this.totalDuration(),a),A!==!1),Pl(this),dp(this)},i.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rr&&(this._tTime-=Rr)))),this):this._ps},i.startTime=function(t){if(arguments.length){this._start=Xr(t);var A=this.parent||this._dp;return A&&(A._sort||!this.parent)&&pA(A,this,this._start-this._delay),this}return this._start},i.endTime=function(t){return this._start+(Rt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},i.rawTime=function(t){var A=this.parent||this._dp;return A?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dl(A.rawTime(t),this):this._tTime:this._tTime},i.revert=function(t){t===void 0&&(t=Mp);var A=at;return at=t,Rq(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),at=A,this},i.globalTime=function(t){for(var A=this,a=arguments.length?t:A.rawTime();A;)a=A._start+a/(Math.abs(A._ts)||1),A=A._dp;return!this.parent&&this._sat?this._sat.globalTime(t):a},i.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,ic(this)):this._repeat===-2?1/0:this._repeat},i.repeatDelay=function(t){if(arguments.length){var A=this._time;return this._rDelay=t,ic(this),A?this.time(A):this}return this._rDelay},i.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},i.seek=function(t,A){return this.totalTime(tA(this,t),Rt(A))},i.restart=function(t,A){return this.play().totalTime(t?-this._delay:0,Rt(A)),this._dur||(this._zTime=-Rr),this},i.play=function(t,A){return t!=null&&this.seek(t,A),this.reversed(!1).paused(!1)},i.reverse=function(t,A){return t!=null&&this.seek(t||this.totalDuration(),A),this.reversed(!0).paused(!1)},i.pause=function(t,A){return t!=null&&this.seek(t,A),this.paused(!0)},i.resume=function(){return this.paused(!1)},i.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Rr:0)),this):this._rts<0},i.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rr,this},i.isActive=function(){var t=this.parent||this._dp,A=this._start,a;return!!(!t||this._ts&&this._initted&&t.isActive()&&(a=t.rawTime(!0))>=A&&a<this.endTime(!0)-Rr)},i.eventCallback=function(t,A,a){var o=this.vars;return arguments.length>1?(A?(o[t]=A,a&&(o[t+"Params"]=a),t==="onUpdate"&&(this._onUpdate=A)):delete o[t],this):o[t]},i.then=function(t){var A=this,a=A._prom;return new Promise(function(o){var s=zr(t)?t:Tu,V=function(){var q=A.then;A.then=null,a&&a(),zr(s)&&(s=s(A))&&(s.then||s===A)&&(A.then=q),o(s),A.then=q};A._initted&&A.totalProgress()===1&&A._ts>=0||!A._tTime&&A._ts<0?V():A._prom=V})},i.kill=function(){Xo(this)},e}();kt(ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rr,_prom:0,_ps:!1,_rts:1});var dt=function(e){Cu(i,e);function i(t,A){var a;return t===void 0&&(t={}),a=e.call(this,t)||this,a.labels={},a.smoothChildTiming=!!t.smoothChildTiming,a.autoRemoveChildren=!!t.autoRemoveChildren,a._sort=Rt(t.sortChildren),Zr&&pA(t.parent||Zr,BA(a),A),t.reversed&&a.reverse(),t.paused&&a.paused(!0),t.scrollTrigger&&bu(BA(a),t.scrollTrigger),a}var r=i.prototype;return r.to=function(A,a,o){return bo(0,arguments,this),this},r.from=function(A,a,o){return bo(1,arguments,this),this},r.fromTo=function(A,a,o,s){return bo(2,arguments,this),this},r.set=function(A,a,o){return a.duration=0,a.parent=this,jo(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Or(A,a,tA(this,o),1),this},r.call=function(A,a,o){return pA(this,Or.delayedCall(0,A,a),o)},r.staggerTo=function(A,a,o,s,V,m,q){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=m,o.onCompleteParams=q,o.parent=this,new Or(A,o,tA(this,V)),this},r.staggerFrom=function(A,a,o,s,V,m,q){return o.runBackwards=1,jo(o).immediateRender=Rt(o.immediateRender),this.staggerTo(A,a,o,s,V,m,q)},r.staggerFromTo=function(A,a,o,s,V,m,q,c){return s.startAt=o,jo(s).immediateRender=Rt(s.immediateRender),this.staggerTo(A,a,s,V,m,q,c)},r.render=function(A,a,o){var s=this._time,V=this._dirty?this.totalDuration():this._tDur,m=this._dur,q=A<=0?0:Xr(A),c=this._zTime<0!=A<0&&(this._initted||!m),n,l,x,K,u,W,E,h,U,N,w,p;if(this!==Zr&&q>V&&A>=0&&(q=V),q!==this._tTime||o||c){if(s!==this._time&&m&&(q+=this._time-s,A+=this._time-s),n=q,U=this._start,h=this._ts,W=!h,c&&(m||(s=this._zTime),(A||!a)&&(this._zTime=A)),this._repeat){if(w=this._yoyo,u=m+this._rDelay,this._repeat<-1&&A<0)return this.totalTime(u*100+A,a,o);if(n=Xr(q%u),q===V?(K=this._repeat,n=m):(N=Xr(q/u),K=~~N,K&&K===N&&(n=m,K--),n>m&&(n=m)),N=Vo(this._tTime,u),!s&&this._tTime&&N!==K&&this._tTime-N*u-this._dur<=0&&(N=K),w&&K&1&&(n=m-n,p=1),K!==N&&!this._lock){var C=w&&N&1,M=C===(w&&K&1);if(K<N&&(C=!C),s=C?0:q%m?m:q,this._lock=1,this.render(s||(p?0:Xr(K*u)),a,!m)._lock=0,this._tTime=q,!a&&this.parent&&vt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1,N=K),s&&s!==this._time||W!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,V=this._tDur,M&&(this._lock=2,s=C?m:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!W)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Cp(this,Xr(s),Xr(n)),E&&(q-=n-(n=E._start))),this._tTime=q,this._time=n,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=A,s=0),!s&&q&&m&&!a&&!N&&(vt(this,"onStart"),this._tTime!==q))return this;if(n>=s&&A>=0)for(l=this._first;l;){if(x=l._next,(l._act||n>=l._start)&&l._ts&&E!==l){if(l.parent!==this)return this.render(A,a,o);if(l.render(l._ts>0?(n-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(n-l._start)*l._ts,a,o),n!==this._time||!this._ts&&!W){E=0,x&&(q+=this._zTime=-Rr);break}}l=x}else{l=this._last;for(var F=A<0?A:n;l;){if(x=l._prev,(l._act||F<=l._end)&&l._ts&&E!==l){if(l.parent!==this)return this.render(A,a,o);if(l.render(l._ts>0?(F-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(F-l._start)*l._ts,a,o||at&&Rq(l)),n!==this._time||!this._ts&&!W){E=0,x&&(q+=this._zTime=F?-Rr:Rr);break}}l=x}}if(E&&!a&&(this.pause(),E.render(n>=s?0:-Rr)._zTime=n>=s?1:-1,this._ts))return this._start=U,Pl(this),this.render(A,a,o);this._onUpdate&&!a&&vt(this,"onUpdate",!0),(q===V&&this._tTime>=this.totalDuration()||!q&&s)&&(U===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((A||!m)&&(q===V&&this._ts>0||!q&&this._ts<0)&&de(this,1),!a&&!(A<0&&!s)&&(q||s||!V)&&(vt(this,q===V&&A>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(q<V&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(A,a){var o=this;if($A(a)||(a=tA(this,a,A)),!(A instanceof ms)){if(ct(A))return A.forEach(function(s){return o.add(s,a)}),this;if(rt(A))return this.addLabel(A,a);if(zr(A))A=Or.delayedCall(0,A);else return this}return this!==A?pA(this,A,a):this},r.getChildren=function(A,a,o,s){A===void 0&&(A=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-aA);for(var V=[],m=this._first;m;)m._start>=s&&(m instanceof Or?a&&V.push(m):(o&&V.push(m),A&&V.push.apply(V,m.getChildren(!0,a,o)))),m=m._next;return V},r.getById=function(A){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===A)return a[o]},r.remove=function(A){return rt(A)?this.removeLabel(A):zr(A)?this.killTweensOf(A):(A.parent===this&&Jl(this,A),A===this._recent&&(this._recent=this._last),ia(this))},r.totalTime=function(A,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xr(jt.time-(this._ts>0?A/this._ts:(this.totalDuration()-A)/-this._ts))),e.prototype.totalTime.call(this,A,a),this._forcing=0,this):this._tTime},r.addLabel=function(A,a){return this.labels[A]=tA(this,a),this},r.removeLabel=function(A){return delete this.labels[A],this},r.addPause=function(A,a,o){var s=Or.delayedCall(0,a||ss,o);return s.data="isPause",this._hasPause=1,pA(this,s,tA(this,A))},r.removePause=function(A){var a=this._first;for(A=tA(this,A);a;)a._start===A&&a.data==="isPause"&&de(a),a=a._next},r.killTweensOf=function(A,a,o){for(var s=this.getTweensOf(A,o),V=s.length;V--;)ne!==s[V]&&s[V].kill(A,a);return this},r.getTweensOf=function(A,a){for(var o=[],s=oA(A),V=this._first,m=$A(a),q;V;)V instanceof Or?Up(V._targets,s)&&(m?(!ne||V._initted&&V._ts)&&V.globalTime(0)<=a&&V.globalTime(V.totalDuration())>a:!a||V.isActive())&&o.push(V):(q=V.getTweensOf(s,a)).length&&o.push.apply(o,q),V=V._next;return o},r.tweenTo=function(A,a){a=a||{};var o=this,s=tA(o,A),V=a,m=V.startAt,q=V.onStart,c=V.onStartParams,n=V.immediateRender,l,x=Or.to(o,kt({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(m&&"time"in m?m.time:o._time))/o.timeScale())||Rr,onStart:function(){if(o.pause(),!l){var u=a.duration||Math.abs((s-(m&&"time"in m?m.time:o._time))/o.timeScale());x._dur!==u&&mo(x,u,0,1).render(x._time,!0,!0),l=1}q&&q.apply(x,c||[])}},a));return n?x.render(0):x},r.tweenFromTo=function(A,a,o){return this.tweenTo(a,kt({startAt:{time:tA(this,A)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(A){return A===void 0&&(A=this._time),rc(this,tA(this,A))},r.previousLabel=function(A){return A===void 0&&(A=this._time),rc(this,tA(this,A),1)},r.currentLabel=function(A){return arguments.length?this.seek(A,!0):this.previousLabel(this._time+Rr)},r.shiftChildren=function(A,a,o){o===void 0&&(o=0);var s=this._first,V=this.labels,m;for(A=Xr(A);s;)s._start>=o&&(s._start+=A,s._end+=A),s=s._next;if(a)for(m in V)V[m]>=o&&(V[m]+=A);return ia(this)},r.invalidate=function(A){var a=this._first;for(this._lock=0;a;)a.invalidate(A),a=a._next;return e.prototype.invalidate.call(this,A)},r.clear=function(A){A===void 0&&(A=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),A&&(this.labels={}),ia(this)},r.totalDuration=function(A){var a=0,o=this,s=o._last,V=aA,m,q,c;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-A:A));if(o._dirty){for(c=o.parent;s;)m=s._prev,s._dirty&&s.totalDuration(),q=s._start,q>V&&o._sort&&s._ts&&!o._lock?(o._lock=1,pA(o,s,q-s._delay,1)._lock=0):V=q,q<0&&s._ts&&(a-=q,(!c&&!o._dp||c&&c.smoothChildTiming)&&(o._start+=Xr(q/o._ts),o._time-=q,o._tTime-=q),o.shiftChildren(-q,!1,-1/0),V=0),s._end>a&&s._ts&&(a=s._end),s=m;mo(o,o===Zr&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},i.updateRoot=function(A){if(Zr._ts&&(gu(Zr,Dl(A,Zr)),Qu=jt.frame),jt.frame>=kn){kn+=Jt.autoSleep||120;var a=Zr._first;if((!a||!a._ts)&&Jt.autoSleep&&jt._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||jt.sleep()}}},i}(ms);kt(dt.prototype,{_lock:0,_hasPause:0,_forcing:0});var vp=function(i,r,t,A,a,o,s){var V=new Yt(this._pt,i,r,0,1,qW,null,a),m=0,q=0,c,n,l,x,K,u,W,E;for(V.b=t,V.e=A,t+="",A+="",(W=~A.indexOf("random("))&&(A=ls(A)),o&&(E=[t,A],o(E,i,r),t=E[0],A=E[1]),n=t.match(XV)||[];c=XV.exec(A);)x=c[0],K=A.substring(m,c.index),l?l=(l+1)%5:K.substr(-5)==="rgba("&&(l=1),x!==n[q++]&&(u=parseFloat(n[q-1])||0,V._pt={_next:V._pt,p:K||q===1?K:",",s:u,c:x.charAt(1)==="="?Ha(u,x)-u:parseFloat(x)-u,m:l&&l<4?Math.round:0},m=XV.lastIndex);return V.c=m<A.length?A.substring(m,A.length):"",V.fp=s,(Gu.test(A)||W)&&(V.e=0),this._pt=V,V},Cq=function(i,r,t,A,a,o,s,V,m,q){zr(A)&&(A=A(a||0,i,o));var c=i[r],n=t!=="get"?t:zr(c)?m?i[r.indexOf("set")||!zr(i["get"+r.substr(3)])?r:"get"+r.substr(3)](m):i[r]():c,l=zr(c)?m?kp:VW:Xq,x;if(rt(A)&&(~A.indexOf("random(")&&(A=ls(A)),A.charAt(1)==="="&&(x=Ha(n,A)+(mt(n)||0),(x||x===0)&&(A=x))),!q||n!==A||Tm)return!isNaN(n*A)&&A!==""?(x=new Yt(this._pt,i,r,+n||0,A-(n||0),typeof c=="boolean"?$p:mW,0,l),m&&(x.fp=m),s&&x.modifier(s,this,i),this._pt=x):(!c&&!(r in i)&&pq(r,A),vp.call(this,i,r,n,A,l,V||Jt.stringFilter,m))},Hp=function(i,r,t,A,a){if(zr(i)&&(i=Io(i,a,r,t,A)),!YA(i)||i.style&&i.nodeType||ct(i)||Xu(i))return rt(i)?Io(i,a,r,t,A):i;var o={},s;for(s in i)o[s]=Io(i[s],a,r,t,A);return o},oW=function(i,r,t,A,a,o){var s,V,m,q;if(St[i]&&(s=new St[i]).init(a,s.rawVars?r[i]:Hp(r[i],A,a,o,t),t,A,o)!==!1&&(t._pt=V=new Yt(t._pt,a,i,0,1,s.render,s,0,s.priority),t!==Oa))for(m=t._ptLookup[t._targets.indexOf(a)],q=s._props.length;q--;)m[s._props[q]]=V;return s},ne,Tm,Yq=function e(i,r,t){var A=i.vars,a=A.ease,o=A.startAt,s=A.immediateRender,V=A.lazy,m=A.onUpdate,q=A.runBackwards,c=A.yoyoEase,n=A.keyframes,l=A.autoRevert,x=i._dur,K=i._startAt,u=i._targets,W=i.parent,E=W&&W.data==="nested"?W.vars.targets:u,h=i._overwrite==="auto"&&!Eq,U=i.timeline,N=A.easeReverse||c,w,p,C,M,F,R,z,D,j,f,T,S,I;if(U&&(!n||!a)&&(a="none"),i._ease=ra(a,as.ease),i._rEase=N&&(ra(N)||i._ease),i._from=!U&&!!A.runBackwards,i._from&&(i.ratio=1),!U||n&&!A.stagger){if(D=u[0]?$e(u[0]).harness:0,S=D&&A[D.prop],w=zl(A,dq),K&&(K._zTime<0&&K.progress(1),r<0&&q&&s&&!l?K.render(-1,!0):K.revert(q&&x?ul:Ep),K._lazy=0),o){if(de(i._startAt=Or.set(u,kt({data:"isStart",overwrite:!1,parent:W,immediateRender:!0,lazy:!K&&Rt(V),startAt:null,delay:0,onUpdate:m&&function(){return vt(i,"onUpdate")},stagger:0},o))),i._startAt._dp=0,i._startAt._sat=i,r<0&&(at||!s&&!l)&&i._startAt.revert(ul),s&&x&&r<=0&&t<=0){r&&(i._zTime=r);return}}else if(q&&x&&!K){if(r&&(s=!1),C=kt({overwrite:!1,data:"isFromStart",lazy:s&&!K&&Rt(V),immediateRender:s,stagger:0,parent:W},w),S&&(C[D.prop]=S),de(i._startAt=Or.set(u,C)),i._startAt._dp=0,i._startAt._sat=i,r<0&&(at?i._startAt.revert(ul):i._startAt.render(-1,!0)),i._zTime=r,!s)e(i._startAt,Rr,Rr);else if(!r)return}for(i._pt=i._ptCache=0,V=x&&Rt(V)||V&&!x,p=0;p<u.length;p++){if(F=u[p],z=F._gsap||Nq(u)[p]._gsap,i._ptLookup[p]=f={},Dm[z.id]&&Ee.length&&Gl(),T=E===u?p:E.indexOf(F),D&&(j=new D).init(F,S||w,i,T,E)!==!1&&(i._pt=M=new Yt(i._pt,F,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(mi){f[mi]=M}),j.priority&&(R=1)),!D||S)for(C in w)St[C]&&(j=oW(C,w,i,T,F,E))?j.priority&&(R=1):f[C]=M=Cq.call(i,F,C,"get",w[C],T,E,0,A.stringFilter);i._op&&i._op[p]&&i.kill(F,i._op[p]),h&&i._pt&&(ne=i,Zr.killTweensOf(F,f,i.globalTime(r)),I=!i.parent,ne=0),i._pt&&V&&(Dm[z.id]=1)}R&&nW(i),i._onInit&&i._onInit(i)}i._onUpdate=m,i._initted=(!i._op||i._pt)&&!I,n&&r<=0&&U.render(aA,!0,!0)},fp=function(i,r,t,A,a,o,s,V){var m=(i._pt&&i._ptCache||(i._ptCache={}))[r],q,c,n,l;if(!m)for(m=i._ptCache[r]=[],n=i._ptLookup,l=i._targets.length;l--;){if(q=n[l][r],q&&q.d&&q.d._pt)for(q=q.d._pt;q&&q.p!==r&&q.fp!==r;)q=q._next;if(!q)return Tm=1,i.vars[r]="+=0",Yq(i,s),Tm=0,V?os(r+" not eligible for reset. Try splitting into individual properties"):1;m.push(q)}for(l=m.length;l--;)c=m[l],q=c._pt||c,q.s=(A||A===0)&&!a?A:q.s+(A||0)+o*q.c,q.c=t-q.s,c.e&&(c.e=yr(t)+mt(c.e)),c.b&&(c.b=q.s+mt(c.b))},Jp=function(i,r){var t=i[0]?$e(i[0]).harness:0,A=t&&t.aliases,a,o,s,V;if(!A)return r;a=lo({},r);for(o in A)if(o in a)for(V=A[o].split(","),s=V.length;s--;)a[V[s]]=a[o];return a},Pp=function(i,r,t,A){var a=r.ease||A||"power1.inOut",o,s;if(ct(r))s=t[i]||(t[i]=[]),r.forEach(function(V,m){return s.push({t:m/(r.length-1)*100,v:V,e:a})});else for(o in r)s=t[o]||(t[o]=[]),o==="ease"||s.push({t:parseFloat(i),v:r[o],e:a})},Io=function(i,r,t,A,a){return zr(i)?i.call(r,t,A,a):rt(i)&&~i.indexOf("random(")?ls(i):i},sW=wq+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",lW={};Ct(sW+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return lW[e]=1});var Or=function(e){Cu(i,e);function i(t,A,a,o){var s;typeof A=="number"&&(a.duration=A,A=a,a=null),s=e.call(this,o?A:jo(A))||this;var V=s.vars,m=V.duration,q=V.delay,c=V.immediateRender,n=V.stagger,l=V.overwrite,x=V.keyframes,K=V.defaults,u=V.scrollTrigger,W=A.parent||Zr,E=(ct(t)||Xu(t)?$A(t[0]):"length"in A)?[t]:oA(t),h,U,N,w,p,C,M,F;if(s._targets=E.length?Nq(E):os("GSAP target "+t+" not found. https://gsap.com",!Jt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=l,x||n||Hs(m)||Hs(q)){A=s.vars;var R=A.easeReverse||A.yoyoEase;if(h=s.timeline=new dt({data:"nested",defaults:K||{},targets:W&&W.data==="nested"?W.vars.targets:E}),h.kill(),h.parent=h._dp=BA(s),h._start=0,n||Hs(m)||Hs(q)){if(w=E.length,M=n&&fu(n),YA(n))for(p in n)~sW.indexOf(p)&&(F||(F={}),F[p]=n[p]);for(U=0;U<w;U++)N=zl(A,lW),N.stagger=0,R&&(N.easeReverse=R),F&&lo(N,F),C=E[U],N.duration=+Io(m,BA(s),U,C,E),N.delay=(+Io(q,BA(s),U,C,E)||0)-s._delay,!n&&w===1&&N.delay&&(s._delay=q=N.delay,s._start+=q,N.delay=0),h.to(C,N,M?M(U,C,E):0),h._ease=Wr.none;h.duration()?m=q=0:s.timeline=0}else if(x){jo(kt(h.vars.defaults,{ease:"none"})),h._ease=ra(x.ease||A.ease||"none");var z=0,D,j,f;if(ct(x))x.forEach(function(T){return h.to(E,T,">")}),h.duration();else{N={};for(p in x)p==="ease"||p==="easeEach"||Pp(p,x[p],N,x.easeEach);for(p in N)for(D=N[p].sort(function(T,S){return T.t-S.t}),z=0,U=0;U<D.length;U++)j=D[U],f={ease:j.e,duration:(j.t-(U?D[U-1].t:0))/100*m},f[p]=j.v,h.to(E,f,z),z+=f.duration;h.duration()<m&&h.to({},{duration:m-h.duration()})}}m||s.duration(m=h.duration())}else s.timeline=0;return l===!0&&!Eq&&(ne=BA(s),Zr.killTweensOf(E),ne=0),pA(W,BA(s),a),A.reversed&&s.reverse(),A.paused&&s.paused(!0),(c||!m&&!x&&s._start===Xr(W._time)&&Rt(c)&&wp(BA(s))&&W.data!=="nested")&&(s._tTime=-Rr,s.render(Math.max(0,-q)||0)),u&&bu(BA(s),u),s}var r=i.prototype;return r.render=function(A,a,o){var s=this._time,V=this._tDur,m=this._dur,q=A<0,c=A>V-Rr&&!q?V:A<Rr?0:A,n,l,x,K,u,W,E,h;if(!m)Rp(this,A,a,o);else if(c!==this._tTime||!A||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==q||this._lazy){if(n=c,h=this.timeline,this._repeat){if(K=m+this._rDelay,this._repeat<-1&&q)return this.totalTime(K*100+A,a,o);if(n=Xr(c%K),c===V?(x=this._repeat,n=m):(u=Xr(c/K),x=~~u,x&&x===u?(n=m,x--):n>m&&(n=m)),W=this._yoyo&&x&1,W&&(n=m-n),u=Vo(this._tTime,K),n===s&&!o&&this._initted&&x===u)return this._tTime=c,this;x!==u&&this.vars.repeatRefresh&&!W&&!this._lock&&n!==K&&this._initted&&(this._lock=o=1,this.render(Xr(K*x),!0).invalidate()._lock=0)}if(!this._initted){if(Iu(this,q?A:n,o,a,c))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&x!==u))return this;if(m!==this._dur)return this.render(A,a,o)}if(this._rEase){var U=n<s;if(U!==this._inv){var N=U?s:m-s;this._inv=U,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=N?(U?-1:1)/N:0,this._invScale=U?-this.ratio:1-this.ratio,this._invEase=U?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((n-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(n/m);if(this._from&&(this.ratio=E=1-E),this._tTime=c,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&c&&!a&&!u&&(vt(this,"onStart"),this._tTime!==c))return this;for(l=this._pt;l;)l.r(E,l.d),l=l._next;h&&h.render(A<0?A:h._dur*h._ease(n/this._dur),a,o)||this._startAt&&(this._zTime=A),this._onUpdate&&!a&&(q&&ym(this,A,a,o),vt(this,"onUpdate")),this._repeat&&x!==u&&this.vars.onRepeat&&!a&&this.parent&&vt(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(q&&!this._onUpdate&&ym(this,A,!0,!0),(A||!m)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&de(this,1),!a&&!(q&&!s)&&(c||s||W)&&(vt(this,c===V?"onComplete":"onReverseComplete",!0),this._prom&&!(c<V&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(A){return(!A||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(A),e.prototype.invalidate.call(this,A)},r.resetTo=function(A,a,o,s,V){Vs||jt.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),q;return this._initted||Yq(this,m),q=this._ease(m/this._dur),fp(this,A,a,o,s,q,m,V)?this.resetTo(A,a,o,s,1):(kl(this,0),this.parent||Ou(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(A,a){if(a===void 0&&(a="all"),!A&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!at),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(A,a,ne&&ne.vars.overwrite!==!0)._first||Xo(this),this.parent&&o!==this.timeline.totalDuration()&&mo(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,V=A?oA(A):s,m=this._ptLookup,q=this._pt,c,n,l,x,K,u,W;if((!a||a==="all")&&pp(s,V))return a==="all"&&(this._pt=0),Xo(this);for(c=this._op=this._op||[],a!=="all"&&(rt(a)&&(K={},Ct(a,function(E){return K[E]=1}),a=K),a=Jp(s,a)),W=s.length;W--;)if(~V.indexOf(s[W])){n=m[W],a==="all"?(c[W]=a,x=n,l={}):(l=c[W]=c[W]||{},x=a);for(K in x)u=n&&n[K],u&&((!("kill"in u.d)||u.d.kill(K)===!0)&&Jl(this,u,"_pt"),delete n[K]),l!=="all"&&(l[K]=1)}return this._initted&&!this._pt&&q&&Xo(this),this},i.to=function(A,a){return new i(A,a,arguments[2])},i.from=function(A,a){return bo(1,arguments)},i.delayedCall=function(A,a,o,s){return new i(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:A,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},i.fromTo=function(A,a,o){return bo(2,arguments)},i.set=function(A,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new i(A,a)},i.killTweensOf=function(A,a,o){return Zr.killTweensOf(A,a,o)},i}(ms);kt(Or.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ct("staggerTo,staggerFrom,staggerFromTo",function(e){Or[e]=function(){var i=new dt,r=Bm.call(arguments,0);return r.splice(e==="staggerFromTo"?5:4,0,0),i[e].apply(i,r)}});var Xq=function(i,r,t){return i[r]=t},VW=function(i,r,t){return i[r](t)},kp=function(i,r,t,A){return i[r](A.fp,t)},_p=function(i,r,t){return i.setAttribute(r,t)},Zq=function(i,r){return zr(i[r])?VW:Mq(i[r])&&i.setAttribute?_p:Xq},mW=function(i,r){return r.set(r.t,r.p,Math.round((r.s+r.c*i)*1e6)/1e6,r)},$p=function(i,r){return r.set(r.t,r.p,!!(r.s+r.c*i),r)},qW=function(i,r){var t=r._pt,A="";if(!i&&r.b)A=r.b;else if(i===1&&r.e)A=r.e;else{for(;t;)A=t.p+(t.m?t.m(t.s+t.c*i):Math.round((t.s+t.c*i)*1e4)/1e4)+A,t=t._next;A+=r.c}r.set(r.t,r.p,A,r)},Gq=function(i,r){for(var t=r._pt;t;)t.r(i,t.d),t=t._next},i1=function(i,r,t,A){for(var a=this._pt,o;a;)o=a._next,a.p===A&&a.modifier(i,r,t),a=o},r1=function(i){for(var r=this._pt,t,A;r;)A=r._next,r.p===i&&!r.op||r.op===i?Jl(this,r,"_pt"):r.dep||(t=1),r=A;return!t},t1=function(i,r,t,A){A.mSet(i,r,A.m.call(A.tween,t,A.mt),A)},nW=function(i){for(var r=i._pt,t,A,a,o;r;){for(t=r._next,A=a;A&&A.pr>r.pr;)A=A._next;(r._prev=A?A._prev:o)?r._prev._next=r:a=r,(r._next=A)?A._prev=r:o=r,r=t}i._pt=a},Yt=function(){function e(r,t,A,a,o,s,V,m,q){this.t=t,this.s=a,this.c=o,this.p=A,this.r=s||mW,this.d=V||this,this.set=m||Xq,this.pr=q||0,this._next=r,r&&(r._prev=this)}var i=e.prototype;return i.modifier=function(t,A,a){this.mSet=this.mSet||this.set,this.set=t1,this.m=t,this.mt=a,this.tween=A},e}();Ct(wq+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return dq[e]=1});Pt.TweenMax=Pt.TweenLite=Or;Pt.TimelineLite=Pt.TimelineMax=dt;Zr=new dt({sortChildren:!1,defaults:as,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jt.stringFilter=AW;var ta=[],Kl={},A1=[],Ac=0,e1=0,yV=function(i){return(Kl[i]||A1).map(function(r){return r()})},Om=function(){var i=Date.now(),r=[];i-Ac>2&&(yV("matchMediaInit"),ta.forEach(function(t){var A=t.queries,a=t.conditions,o,s,V,m;for(s in A)o=EA.matchMedia(A[s]).matches,o&&(V=1),o!==a[s]&&(a[s]=o,m=1);m&&(t.revert(),V&&r.push(t))}),yV("matchMediaRevert"),r.forEach(function(t){return t.onMatch(t,function(A){return t.add(null,A)})}),Ac=i,yV("matchMedia"))},cW=function(){function e(r,t){this.selector=t&&gm(t),this.data=[],this._r=[],this.isReverted=!1,this.id=e1++,r&&this.add(r)}var i=e.prototype;return i.add=function(t,A,a){zr(t)&&(a=A,A=t,t=zr);var o=this,s=function(){var m=Yr,q=o.selector,c;return m&&m!==o&&m.data.push(o),a&&(o.selector=gm(a)),Yr=o,c=A.apply(o,arguments),zr(c)&&o._r.push(c),Yr=m,o.selector=q,o.isReverted=!1,c};return o.last=s,t===zr?s(o,function(V){return o.add(null,V)}):t?o[t]=s:s},i.ignore=function(t){var A=Yr;Yr=null,t(this),Yr=A},i.getTweens=function(){var t=[];return this.data.forEach(function(A){return A instanceof e?t.push.apply(t,A.getTweens()):A instanceof Or&&!(A.parent&&A.parent.data==="nested")&&t.push(A)}),t},i.clear=function(){this._r.length=this.data.length=0},i.kill=function(t,A){var a=this;if(t?function(){for(var s=a.getTweens(),V=a.data.length,m;V--;)m=a.data[V],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(q){return s.splice(s.indexOf(q),1)}));for(s.map(function(q){return{g:q._dur||q._delay||q._sat&&!q._sat.vars.immediateRender?q.globalTime(0):-1/0,t:q}}).sort(function(q,c){return c.g-q.g||-1/0}).forEach(function(q){return q.t.revert(t)}),V=a.data.length;V--;)m=a.data[V],m instanceof dt?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof Or)&&m.revert&&m.revert(t);a._r.forEach(function(q){return q(t,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),A)for(var o=ta.length;o--;)ta[o].id===this.id&&ta.splice(o,1)},i.revert=function(t){this.kill(t||{})},e}(),a1=function(){function e(r){this.contexts=[],this.scope=r,Yr&&Yr.data.push(this)}var i=e.prototype;return i.add=function(t,A,a){YA(t)||(t={matches:t});var o=new cW(0,a||this.scope),s=o.conditions={},V,m,q;Yr&&!o.selector&&(o.selector=Yr.selector),this.contexts.push(o),A=o.add("onMatch",A),o.queries=t;for(m in t)m==="all"?q=1:(V=EA.matchMedia(t[m]),V&&(ta.indexOf(o)<0&&ta.push(o),(s[m]=V.matches)&&(q=1),V.addListener?V.addListener(Om):V.addEventListener("change",Om)));return q&&A(o,function(c){return o.add(null,c)}),this},i.revert=function(t){this.kill(t||{})},i.kill=function(t){this.contexts.forEach(function(A){return A.kill(t,!0)})},e}(),yl={registerPlugin:function(){for(var i=arguments.length,r=new Array(i),t=0;t<i;t++)r[t]=arguments[t];r.forEach(function(A){return iW(A)})},timeline:function(i){return new dt(i)},getTweensOf:function(i,r){return Zr.getTweensOf(i,r)},getProperty:function(i,r,t,A){rt(i)&&(i=oA(i)[0]);var a=$e(i||{}).get,o=t?Tu:Su;return t==="native"&&(t=""),i&&(r?o((St[r]&&St[r].get||a)(i,r,t,A)):function(s,V,m){return o((St[s]&&St[s].get||a)(i,s,V,m))})},quickSetter:function(i,r,t){if(i=oA(i),i.length>1){var A=i.map(function(q){return Zt.quickSetter(q,r,t)}),a=A.length;return function(q){for(var c=a;c--;)A[c](q)}}i=i[0]||{};var o=St[r],s=$e(i),V=s.harness&&(s.harness.aliases||{})[r]||r,m=o?function(q){var c=new o;Oa._pt=0,c.init(i,t?q+t:q,Oa,0,[i]),c.render(1,c),Oa._pt&&Gq(1,Oa)}:s.set(i,V);return o?m:function(q){return m(i,V,t?q+t:q,s,1)}},quickTo:function(i,r,t){var A,a=Zt.to(i,kt((A={},A[r]="+=0.1",A.paused=!0,A.stagger=0,A),t||{})),o=function(V,m,q){return a.resetTo(r,V,m,q)};return o.tween=a,o},isTweening:function(i){return Zr.getTweensOf(i,!0).length>0},defaults:function(i){return i&&i.ease&&(i.ease=ra(i.ease,as.ease)),_n(as,i||{})},config:function(i){return _n(Jt,i||{})},registerEffect:function(i){var r=i.name,t=i.effect,A=i.plugins,a=i.defaults,o=i.extendTimeline;(A||"").split(",").forEach(function(s){return s&&!St[s]&&!Pt[s]&&os(r+" effect requires "+s+" plugin.")}),ZV[r]=function(s,V,m){return t(oA(s),kt(V||{},a),m)},o&&(dt.prototype[r]=function(s,V,m){return this.add(ZV[r](s,YA(V)?V:(m=V)&&{},this),m)})},registerEase:function(i,r){Wr[i]=ra(r)},parseEase:function(i,r){return arguments.length?ra(i,r):Wr},getById:function(i){return Zr.getById(i)},exportRoot:function(i,r){i===void 0&&(i={});var t=new dt(i),A,a;for(t.smoothChildTiming=Rt(i.smoothChildTiming),Zr.remove(t),t._dp=0,t._time=t._tTime=Zr._time,A=Zr._first;A;)a=A._next,(r||!(!A._dur&&A instanceof Or&&A.vars.onComplete===A._targets[0]))&&pA(t,A,A._start-A._delay),A=a;return pA(Zr,t,0),t},context:function(i,r){return i?new cW(i,r):Yr},matchMedia:function(i){return new a1(i)},matchMediaRefresh:function(){return ta.forEach(function(i){var r=i.conditions,t,A;for(A in r)r[A]&&(r[A]=!1,t=1);t&&i.revert()})||Om()},addEventListener:function(i,r){var t=Kl[i]||(Kl[i]=[]);~t.indexOf(r)||t.push(r)},removeEventListener:function(i,r){var t=Kl[i],A=t&&t.indexOf(r);A>=0&&t.splice(A,1)},utils:{wrap:yp,wrapYoyo:Qp,distribute:fu,random:Pu,snap:Ju,normalize:Dp,getUnit:mt,clamp:Xp,splitColor:rW,toArray:oA,selector:gm,mapRange:_u,pipe:Gp,unitize:zp,interpolate:Bp,shuffle:Hu},install:Du,effects:ZV,ticker:jt,updateRoot:dt.updateRoot,plugins:St,globalTimeline:Zr,core:{PropTween:Yt,globals:yu,Tween:Or,Timeline:dt,Animation:ms,getCache:$e,_removeLinkedListItem:Jl,reverting:function(){return at},context:function(i){return i&&Yr&&(Yr.data.push(i),i._ctx=Yr),Yr},suppressOverwrites:function(i){return Eq=i}}};Ct("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return yl[e]=Or[e]});jt.add(dt.updateRoot);Oa=yl.to({},{duration:0});var o1=function(i,r){for(var t=i._pt;t&&t.p!==r&&t.op!==r&&t.fp!==r;)t=t._next;return t},s1=function(i,r){var t=i._targets,A,a,o;for(A in r)for(a=t.length;a--;)o=i._ptLookup[a][A],o&&(o=o.d)&&(o._pt&&(o=o1(o,A)),o&&o.modifier&&o.modifier(r[A],i,t[a],A))},QV=function(i,r){return{name:i,headless:1,rawVars:1,init:function(A,a,o){o._onInit=function(s){var V,m;if(rt(a)&&(V={},Ct(a,function(q){return V[q]=1}),a=V),r){V={};for(m in a)V[m]=r(a[m]);a=V}s1(s,a)}}}},Zt=yl.registerPlugin({name:"attr",init:function(i,r,t,A,a){var o,s,V;this.tween=t;for(o in r)V=i.getAttribute(o)||"",s=this.add(i,"setAttribute",(V||0)+"",r[o],A,a,0,0,o),s.op=o,s.b=V,this._props.push(o)},render:function(i,r){for(var t=r._pt;t;)at?t.set(t.t,t.p,t.b,t):t.r(i,t.d),t=t._next}},{name:"endArray",headless:1,init:function(i,r){for(var t=r.length;t--;)this.add(i,t,i[t]||0,r[t],0,0,0,0,0,1)}},QV("roundProps",Sm),QV("modifiers"),QV("snap",Ju))||yl;Or.version=dt.version=Zt.version="3.15.0";zu=1;Uq()&&qo();Wr.Power0;Wr.Power1;Wr.Power2;Wr.Power3;Wr.Power4;Wr.Linear;Wr.Quad;Wr.Cubic;Wr.Quart;Wr.Quint;Wr.Strong;Wr.Elastic;Wr.Back;Wr.SteppedEase;Wr.Bounce;Wr.Sine;Wr.Expo;Wr.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ec,ce,fa,zq,ke,ac,Dq,l1=function(){return typeof window<"u"},ie={},be=180/Math.PI,Ja=Math.PI/180,Za=Math.atan2,oc=1e8,yq=/([A-Z])/g,V1=/(left|right|width|margin|padding|x)/i,m1=/[\s,\(]\S/,dA={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jm=function(i,r){return r.set(r.t,r.p,Math.round((r.s+r.c*i)*1e4)/1e4+r.u,r)},q1=function(i,r){return r.set(r.t,r.p,i===1?r.e:Math.round((r.s+r.c*i)*1e4)/1e4+r.u,r)},n1=function(i,r){return r.set(r.t,r.p,i?Math.round((r.s+r.c*i)*1e4)/1e4+r.u:r.b,r)},c1=function(i,r){return r.set(r.t,r.p,i===1?r.e:i?Math.round((r.s+r.c*i)*1e4)/1e4+r.u:r.b,r)},u1=function(i,r){var t=r.s+r.c*i;r.set(r.t,r.p,~~(t+(t<0?-.5:.5))+r.u,r)},uW=function(i,r){return r.set(r.t,r.p,i?r.e:r.b,r)},WW=function(i,r){return r.set(r.t,r.p,i!==1?r.b:r.e,r)},W1=function(i,r,t){return i.style[r]=t},K1=function(i,r,t){return i.style.setProperty(r,t)},x1=function(i,r,t){return i._gsap[r]=t},F1=function(i,r,t){return i._gsap.scaleX=i._gsap.scaleY=t},h1=function(i,r,t,A,a){var o=i._gsap;o.scaleX=o.scaleY=t,o.renderTransform(a,o)},E1=function(i,r,t,A,a){var o=i._gsap;o[r]=t,o.renderTransform(a,o)},Gr="transform",Xt=Gr+"Origin",M1=function e(i,r){var t=this,A=this.target,a=A.style,o=A._gsap;if(i in ie&&a){if(this.tfm=this.tfm||{},i!=="transform")i=dA[i]||i,~i.indexOf(",")?i.split(",").forEach(function(s){return t.tfm[s]=gA(A,s)}):this.tfm[i]=o.x?o[i]:gA(A,i),i===Xt&&(this.tfm.zOrigin=o.zOrigin);else return dA.transform.split(",").forEach(function(s){return e.call(t,s,r)});if(this.props.indexOf(Gr)>=0)return;o.svg&&(this.svgo=A.getAttribute("data-svg-origin"),this.props.push(Xt,r,"")),i=Gr}(a||r)&&this.props.push(i,r,a[i])},KW=function(i){i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},U1=function(){var i=this.props,r=this.target,t=r.style,A=r._gsap,a,o;for(a=0;a<i.length;a+=3)i[a+1]?i[a+1]===2?r[i[a]](i[a+2]):r[i[a]]=i[a+2]:i[a+2]?t[i[a]]=i[a+2]:t.removeProperty(i[a].substr(0,2)==="--"?i[a]:i[a].replace(yq,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)A[o]=this.tfm[o];A.svg&&(A.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),a=Dq(),(!a||!a.isStart)&&!t[Gr]&&(KW(t),A.zOrigin&&t[Xt]&&(t[Xt]+=" "+A.zOrigin+"px",A.zOrigin=0,A.renderTransform()),A.uncache=1)}},xW=function(i,r){var t={target:i,props:[],revert:U1,save:M1};return i._gsap||Zt.core.getCache(i),r&&i.style&&i.nodeType&&r.split(",").forEach(function(A){return t.save(A)}),t},FW,bm=function(i,r){var t=ce.createElementNS?ce.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),i):ce.createElement(i);return t&&t.style?t:ce.createElement(i)},Ht=function e(i,r,t){var A=getComputedStyle(i);return A[r]||A.getPropertyValue(r.replace(yq,"-$1").toLowerCase())||A.getPropertyValue(r)||!t&&e(i,no(r)||r,1)||""},sc="O,Moz,ms,Ms,Webkit".split(","),no=function(i,r,t){var A=r||ke,a=A.style,o=5;if(i in a&&!t)return i;for(i=i.charAt(0).toUpperCase()+i.substr(1);o--&&!(sc[o]+i in a););return o<0?null:(o===3?"ms":o>=0?sc[o]:"")+i},Im=function(){l1()&&window.document&&(ec=window,ce=ec.document,fa=ce.documentElement,ke=bm("div")||{style:{}},bm("div"),Gr=no(Gr),Xt=Gr+"Origin",ke.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",FW=!!no("perspective"),Dq=Zt.core.reverting,zq=1)},lc=function(i){var r=i.ownerSVGElement,t=bm("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),A=i.cloneNode(!0),a;A.style.display="block",t.appendChild(A),fa.appendChild(t);try{a=A.getBBox()}catch{}return t.removeChild(A),fa.removeChild(t),a},Vc=function(i,r){for(var t=r.length;t--;)if(i.hasAttribute(r[t]))return i.getAttribute(r[t])},hW=function(i){var r,t;try{r=i.getBBox()}catch{r=lc(i),t=1}return r&&(r.width||r.height)||t||(r=lc(i)),r&&!r.width&&!r.x&&!r.y?{x:+Vc(i,["x","cx","x1"])||0,y:+Vc(i,["y","cy","y1"])||0,width:0,height:0}:r},EW=function(i){return!!(i.getCTM&&(!i.parentNode||i.ownerSVGElement)&&hW(i))},we=function(i,r){if(r){var t=i.style,A;r in ie&&r!==Xt&&(r=Gr),t.removeProperty?(A=r.substr(0,2),(A==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),t.removeProperty(A==="--"?r:r.replace(yq,"-$1").toLowerCase())):t.removeAttribute(r)}},ue=function(i,r,t,A,a,o){var s=new Yt(i._pt,r,t,0,1,o?WW:uW);return i._pt=s,s.b=A,s.e=a,i._props.push(t),s},mc={deg:1,rad:1,turn:1},L1={grid:1,flex:1},Ne=function e(i,r,t,A){var a=parseFloat(t)||0,o=(t+"").trim().substr((a+"").length)||"px",s=ke.style,V=V1.test(r),m=i.tagName.toLowerCase()==="svg",q=(m?"client":"offset")+(V?"Width":"Height"),c=100,n=A==="px",l=A==="%",x,K,u,W;if(A===o||!a||mc[A]||mc[o])return a;if(o!=="px"&&!n&&(a=e(i,r,t,"px")),W=i.getCTM&&EW(i),(l||o==="%")&&(ie[r]||~r.indexOf("adius")))return x=W?i.getBBox()[V?"width":"height"]:i[q],yr(l?a/x*c:a/100*x);if(s[V?"width":"height"]=c+(n?o:A),K=A!=="rem"&&~r.indexOf("adius")||A==="em"&&i.appendChild&&!m?i:i.parentNode,W&&(K=(i.ownerSVGElement||{}).parentNode),(!K||K===ce||!K.appendChild)&&(K=ce.body),u=K._gsap,u&&l&&u.width&&V&&u.time===jt.time&&!u.uncache)return yr(a/u.width*c);if(l&&(r==="height"||r==="width")){var E=i.style[r];i.style[r]=c+A,x=i[q],E?i.style[r]=E:we(i,r)}else(l||o==="%")&&!L1[Ht(K,"display")]&&(s.position=Ht(i,"position")),K===i&&(s.position="static"),K.appendChild(ke),x=ke[q],K.removeChild(ke),s.position="absolute";return V&&l&&(u=$e(K),u.time=jt.time,u.width=K[q]),yr(n?x*a/c:x&&a?c/x*a:0)},gA=function(i,r,t,A){var a;return zq||Im(),r in dA&&r!=="transform"&&(r=dA[r],~r.indexOf(",")&&(r=r.split(",")[0])),ie[r]&&r!=="transform"?(a=ns(i,A),a=r!=="transformOrigin"?a[r]:a.svg?a.origin:Bl(Ht(i,Xt))+" "+a.zOrigin+"px"):(a=i.style[r],(!a||a==="auto"||A||~(a+"").indexOf("calc("))&&(a=Ql[r]&&Ql[r](i,r,t)||Ht(i,r)||Bu(i,r)||(r==="opacity"?1:0))),t&&!~(a+"").trim().indexOf(" ")?Ne(i,r,a,t)+t:a},p1=function(i,r,t,A){if(!t||t==="none"){var a=no(r,i,1),o=a&&Ht(i,a,1);o&&o!==t?(r=a,t=o):r==="borderColor"&&(t=Ht(i,"borderTopColor"))}var s=new Yt(this._pt,i.style,r,0,1,qW),V=0,m=0,q,c,n,l,x,K,u,W,E,h,U,N;if(s.b=t,s.e=A,t+="",A+="",A.substring(0,6)==="var(--"&&(A=Ht(i,A.substring(4,A.indexOf(")")))),A==="auto"&&(K=i.style[r],i.style[r]=A,A=Ht(i,r)||A,K?i.style[r]=K:we(i,r)),q=[t,A],AW(q),t=q[0],A=q[1],n=t.match(Ta)||[],N=A.match(Ta)||[],N.length){for(;c=Ta.exec(A);)u=c[0],E=A.substring(V,c.index),x?x=(x+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(x=1),u!==(K=n[m++]||"")&&(l=parseFloat(K)||0,U=K.substr((l+"").length),u.charAt(1)==="="&&(u=Ha(l,u)+U),W=parseFloat(u),h=u.substr((W+"").length),V=Ta.lastIndex-h.length,h||(h=h||Jt.units[r]||U,V===A.length&&(A+=h,s.e+=h)),U!==h&&(l=Ne(i,r,K,h)||0),s._pt={_next:s._pt,p:E||m===1?E:",",s:l,c:W-l,m:x&&x<4||r==="zIndex"?Math.round:0});s.c=V<A.length?A.substring(V,A.length):""}else s.r=r==="display"&&A==="none"?WW:uW;return Gu.test(A)&&(s.e=0),this._pt=s,s},qc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},d1=function(i){var r=i.split(" "),t=r[0],A=r[1]||"50%";return(t==="top"||t==="bottom"||A==="left"||A==="right")&&(i=t,t=A,A=i),r[0]=qc[t]||t,r[1]=qc[A]||A,r.join(" ")},w1=function(i,r){if(r.tween&&r.tween._time===r.tween._dur){var t=r.t,A=t.style,a=r.u,o=t._gsap,s,V,m;if(a==="all"||a===!0)A.cssText="",V=1;else for(a=a.split(","),m=a.length;--m>-1;)s=a[m],ie[s]&&(V=1,s=s==="transformOrigin"?Xt:Gr),we(t,s);V&&(we(t,Gr),o&&(o.svg&&t.removeAttribute("transform"),A.scale=A.rotate=A.translate="none",ns(t,1),o.uncache=1,KW(A)))}},Ql={clearProps:function(i,r,t,A,a){if(a.data!=="isFromStart"){var o=i._pt=new Yt(i._pt,r,t,0,0,w1);return o.u=A,o.pr=-10,o.tween=a,i._props.push(t),1}}},qs=[1,0,0,1,0,0],MW={},UW=function(i){return i==="matrix(1, 0, 0, 1, 0, 0)"||i==="none"||!i},nc=function(i){var r=Ht(i,Gr);return UW(r)?qs:r.substr(7).match(Zu).map(yr)},Qq=function(i,r){var t=i._gsap||$e(i),A=i.style,a=nc(i),o,s,V,m;return t.svg&&i.getAttribute("transform")?(V=i.transform.baseVal.consolidate().matrix,a=[V.a,V.b,V.c,V.d,V.e,V.f],a.join(",")==="1,0,0,1,0,0"?qs:a):(a===qs&&!i.offsetParent&&i!==fa&&!t.svg&&(V=A.display,A.display="block",o=i.parentNode,(!o||!i.offsetParent&&!i.getBoundingClientRect().width)&&(m=1,s=i.nextElementSibling,fa.appendChild(i)),a=nc(i),V?A.display=V:we(i,"display"),m&&(s?o.insertBefore(i,s):o?o.appendChild(i):fa.removeChild(i))),r&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},vm=function(i,r,t,A,a,o){var s=i._gsap,V=a||Qq(i,!0),m=s.xOrigin||0,q=s.yOrigin||0,c=s.xOffset||0,n=s.yOffset||0,l=V[0],x=V[1],K=V[2],u=V[3],W=V[4],E=V[5],h=r.split(" "),U=parseFloat(h[0])||0,N=parseFloat(h[1])||0,w,p,C,M;t?V!==qs&&(p=l*u-x*K)&&(C=U*(u/p)+N*(-K/p)+(K*E-u*W)/p,M=U*(-x/p)+N*(l/p)-(l*E-x*W)/p,U=C,N=M):(w=hW(i),U=w.x+(~h[0].indexOf("%")?U/100*w.width:U),N=w.y+(~(h[1]||h[0]).indexOf("%")?N/100*w.height:N)),A||A!==!1&&s.smooth?(W=U-m,E=N-q,s.xOffset=c+(W*l+E*K)-W,s.yOffset=n+(W*x+E*u)-E):s.xOffset=s.yOffset=0,s.xOrigin=U,s.yOrigin=N,s.smooth=!!A,s.origin=r,s.originIsAbsolute=!!t,i.style[Xt]="0px 0px",o&&(ue(o,s,"xOrigin",m,U),ue(o,s,"yOrigin",q,N),ue(o,s,"xOffset",c,s.xOffset),ue(o,s,"yOffset",n,s.yOffset)),i.setAttribute("data-svg-origin",U+" "+N)},ns=function(i,r){var t=i._gsap||new aW(i);if("x"in t&&!r&&!t.uncache)return t;var A=i.style,a=t.scaleX<0,o="px",s="deg",V=getComputedStyle(i),m=Ht(i,Xt)||"0",q,c,n,l,x,K,u,W,E,h,U,N,w,p,C,M,F,R,z,D,j,f,T,S,I,mi,X,ai,Ni,Si,J,oi;return q=c=n=K=u=W=E=h=U=0,l=x=1,t.svg=!!(i.getCTM&&EW(i)),V.translate&&((V.translate!=="none"||V.scale!=="none"||V.rotate!=="none")&&(A[Gr]=(V.translate!=="none"?"translate3d("+(V.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(V.rotate!=="none"?"rotate("+V.rotate+") ":"")+(V.scale!=="none"?"scale("+V.scale.split(" ").join(",")+") ":"")+(V[Gr]!=="none"?V[Gr]:"")),A.scale=A.rotate=A.translate="none"),p=Qq(i,t.svg),t.svg&&(t.uncache?(I=i.getBBox(),m=t.xOrigin-I.x+"px "+(t.yOrigin-I.y)+"px",S=""):S=!r&&i.getAttribute("data-svg-origin"),vm(i,S||m,!!S||t.originIsAbsolute,t.smooth!==!1,p)),N=t.xOrigin||0,w=t.yOrigin||0,p!==qs&&(R=p[0],z=p[1],D=p[2],j=p[3],q=f=p[4],c=T=p[5],p.length===6?(l=Math.sqrt(R*R+z*z),x=Math.sqrt(j*j+D*D),K=R||z?Za(z,R)*be:0,E=D||j?Za(D,j)*be+K:0,E&&(x*=Math.abs(Math.cos(E*Ja))),t.svg&&(q-=N-(N*R+w*D),c-=w-(N*z+w*j))):(oi=p[6],Si=p[7],X=p[8],ai=p[9],Ni=p[10],J=p[11],q=p[12],c=p[13],n=p[14],C=Za(oi,Ni),u=C*be,C&&(M=Math.cos(-C),F=Math.sin(-C),S=f*M+X*F,I=T*M+ai*F,mi=oi*M+Ni*F,X=f*-F+X*M,ai=T*-F+ai*M,Ni=oi*-F+Ni*M,J=Si*-F+J*M,f=S,T=I,oi=mi),C=Za(-D,Ni),W=C*be,C&&(M=Math.cos(-C),F=Math.sin(-C),S=R*M-X*F,I=z*M-ai*F,mi=D*M-Ni*F,J=j*F+J*M,R=S,z=I,D=mi),C=Za(z,R),K=C*be,C&&(M=Math.cos(C),F=Math.sin(C),S=R*M+z*F,I=f*M+T*F,z=z*M-R*F,T=T*M-f*F,R=S,f=I),u&&Math.abs(u)+Math.abs(K)>359.9&&(u=K=0,W=180-W),l=yr(Math.sqrt(R*R+z*z+D*D)),x=yr(Math.sqrt(T*T+oi*oi)),C=Za(f,T),E=Math.abs(C)>2e-4?C*be:0,U=J?1/(J<0?-J:J):0),t.svg&&(S=i.getAttribute("transform"),t.forceCSS=i.setAttribute("transform","")||!UW(Ht(i,Gr)),S&&i.setAttribute("transform",S))),Math.abs(E)>90&&Math.abs(E)<270&&(a?(l*=-1,E+=K<=0?180:-180,K+=K<=0?180:-180):(x*=-1,E+=E<=0?180:-180)),r=r||t.uncache,t.x=q-((t.xPercent=q&&(!r&&t.xPercent||(Math.round(i.offsetWidth/2)===Math.round(-q)?-50:0)))?i.offsetWidth*t.xPercent/100:0)+o,t.y=c-((t.yPercent=c&&(!r&&t.yPercent||(Math.round(i.offsetHeight/2)===Math.round(-c)?-50:0)))?i.offsetHeight*t.yPercent/100:0)+o,t.z=n+o,t.scaleX=yr(l),t.scaleY=yr(x),t.rotation=yr(K)+s,t.rotationX=yr(u)+s,t.rotationY=yr(W)+s,t.skewX=E+s,t.skewY=h+s,t.transformPerspective=U+o,(t.zOrigin=parseFloat(m.split(" ")[2])||!r&&t.zOrigin||0)&&(A[Xt]=Bl(m)),t.xOffset=t.yOffset=0,t.force3D=Jt.force3D,t.renderTransform=t.svg?R1:FW?LW:N1,t.uncache=0,t},Bl=function(i){return(i=i.split(" "))[0]+" "+i[1]},BV=function(i,r,t){var A=mt(r);return yr(parseFloat(r)+parseFloat(Ne(i,"x",t+"px",A)))+A},N1=function(i,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,LW(i,r)},Be="0deg",po="0px",ge=") ",LW=function(i,r){var t=r||this,A=t.xPercent,a=t.yPercent,o=t.x,s=t.y,V=t.z,m=t.rotation,q=t.rotationY,c=t.rotationX,n=t.skewX,l=t.skewY,x=t.scaleX,K=t.scaleY,u=t.transformPerspective,W=t.force3D,E=t.target,h=t.zOrigin,U="",N=W==="auto"&&i&&i!==1||W===!0;if(h&&(c!==Be||q!==Be)){var w=parseFloat(q)*Ja,p=Math.sin(w),C=Math.cos(w),M;w=parseFloat(c)*Ja,M=Math.cos(w),o=BV(E,o,p*M*-h),s=BV(E,s,-Math.sin(w)*-h),V=BV(E,V,C*M*-h+h)}u!==po&&(U+="perspective("+u+ge),(A||a)&&(U+="translate("+A+"%, "+a+"%) "),(N||o!==po||s!==po||V!==po)&&(U+=V!==po||N?"translate3d("+o+", "+s+", "+V+") ":"translate("+o+", "+s+ge),m!==Be&&(U+="rotate("+m+ge),q!==Be&&(U+="rotateY("+q+ge),c!==Be&&(U+="rotateX("+c+ge),(n!==Be||l!==Be)&&(U+="skew("+n+", "+l+ge),(x!==1||K!==1)&&(U+="scale("+x+", "+K+ge),E.style[Gr]=U||"translate(0, 0)"},R1=function(i,r){var t=r||this,A=t.xPercent,a=t.yPercent,o=t.x,s=t.y,V=t.rotation,m=t.skewX,q=t.skewY,c=t.scaleX,n=t.scaleY,l=t.target,x=t.xOrigin,K=t.yOrigin,u=t.xOffset,W=t.yOffset,E=t.forceCSS,h=parseFloat(o),U=parseFloat(s),N,w,p,C,M;V=parseFloat(V),m=parseFloat(m),q=parseFloat(q),q&&(q=parseFloat(q),m+=q,V+=q),V||m?(V*=Ja,m*=Ja,N=Math.cos(V)*c,w=Math.sin(V)*c,p=Math.sin(V-m)*-n,C=Math.cos(V-m)*n,m&&(q*=Ja,M=Math.tan(m-q),M=Math.sqrt(1+M*M),p*=M,C*=M,q&&(M=Math.tan(q),M=Math.sqrt(1+M*M),N*=M,w*=M)),N=yr(N),w=yr(w),p=yr(p),C=yr(C)):(N=c,C=n,w=p=0),(h&&!~(o+"").indexOf("px")||U&&!~(s+"").indexOf("px"))&&(h=Ne(l,"x",o,"px"),U=Ne(l,"y",s,"px")),(x||K||u||W)&&(h=yr(h+x-(x*N+K*p)+u),U=yr(U+K-(x*w+K*C)+W)),(A||a)&&(M=l.getBBox(),h=yr(h+A/100*M.width),U=yr(U+a/100*M.height)),M="matrix("+N+","+w+","+p+","+C+","+h+","+U+")",l.setAttribute("transform",M),E&&(l.style[Gr]=M)},C1=function(i,r,t,A,a){var o=360,s=rt(a),V=parseFloat(a)*(s&&~a.indexOf("rad")?be:1),m=V-A,q=A+m+"deg",c,n;return s&&(c=a.split("_")[1],c==="short"&&(m%=o,m!==m%(o/2)&&(m+=m<0?o:-o)),c==="cw"&&m<0?m=(m+o*oc)%o-~~(m/o)*o:c==="ccw"&&m>0&&(m=(m-o*oc)%o-~~(m/o)*o)),i._pt=n=new Yt(i._pt,r,t,A,m,q1),n.e=q,n.u="deg",i._props.push(t),n},cc=function(i,r){for(var t in r)i[t]=r[t];return i},Y1=function(i,r,t){var A=cc({},t._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=t.style,s,V,m,q,c,n,l,x;A.svg?(m=t.getAttribute("transform"),t.setAttribute("transform",""),o[Gr]=r,s=ns(t,1),we(t,Gr),t.setAttribute("transform",m)):(m=getComputedStyle(t)[Gr],o[Gr]=r,s=ns(t,1),o[Gr]=m);for(V in ie)m=A[V],q=s[V],m!==q&&a.indexOf(V)<0&&(l=mt(m),x=mt(q),c=l!==x?Ne(t,V,m,x):parseFloat(m),n=parseFloat(q),i._pt=new Yt(i._pt,s,V,c,n-c,jm),i._pt.u=x||0,i._props.push(V));cc(s,A)};Ct("padding,margin,Width,Radius",function(e,i){var r="Top",t="Right",A="Bottom",a="Left",o=(i<3?[r,t,A,a]:[r+a,r+t,A+t,A+a]).map(function(s){return i<2?e+s:"border"+s+e});Ql[i>1?"border"+e:e]=function(s,V,m,q,c){var n,l;if(arguments.length<4)return n=o.map(function(x){return gA(s,x,m)}),l=n.join(" "),l.split(n[0]).length===5?n[0]:l;n=(q+"").split(" "),l={},o.forEach(function(x,K){return l[x]=n[K]=n[K]||n[(K-1)/2|0]}),s.init(V,l,c)}});var pW={name:"css",register:Im,targetTest:function(i){return i.style&&i.nodeType},init:function(i,r,t,A,a){var o=this._props,s=i.style,V=t.vars.startAt,m,q,c,n,l,x,K,u,W,E,h,U,N,w,p,C,M;zq||Im(),this.styles=this.styles||xW(i),C=this.styles.props,this.tween=t;for(K in r)if(K!=="autoRound"&&(q=r[K],!(St[K]&&oW(K,r,t,A,i,a)))){if(l=typeof q,x=Ql[K],l==="function"&&(q=q.call(t,A,i,a),l=typeof q),l==="string"&&~q.indexOf("random(")&&(q=ls(q)),x)x(this,i,K,q,t)&&(p=1);else if(K.substr(0,2)==="--")m=(getComputedStyle(i).getPropertyValue(K)+"").trim(),q+="",Me.lastIndex=0,Me.test(m)||(u=mt(m),W=mt(q),W?u!==W&&(m=Ne(i,K,m,W)+W):u&&(q+=u)),this.add(s,"setProperty",m,q,A,a,0,0,K),o.push(K),C.push(K,0,s[K]);else if(l!=="undefined"){if(V&&K in V?(m=typeof V[K]=="function"?V[K].call(t,A,i,a):V[K],rt(m)&&~m.indexOf("random(")&&(m=ls(m)),mt(m+"")||m==="auto"||(m+=Jt.units[K]||mt(gA(i,K))||""),(m+"").charAt(1)==="="&&(m=gA(i,K))):m=gA(i,K),n=parseFloat(m),E=l==="string"&&q.charAt(1)==="="&&q.substr(0,2),E&&(q=q.substr(2)),c=parseFloat(q),K in dA&&(K==="autoAlpha"&&(n===1&&gA(i,"visibility")==="hidden"&&c&&(n=0),C.push("visibility",0,s.visibility),ue(this,s,"visibility",n?"inherit":"hidden",c?"inherit":"hidden",!c)),K!=="scale"&&K!=="transform"&&(K=dA[K],~K.indexOf(",")&&(K=K.split(",")[0]))),h=K in ie,h){if(this.styles.save(K),M=q,l==="string"&&q.substring(0,6)==="var(--"){if(q=Ht(i,q.substring(4,q.indexOf(")"))),q.substring(0,5)==="calc("){var F=i.style.perspective;i.style.perspective=q,q=Ht(i,"perspective"),F?i.style.perspective=F:we(i,"perspective")}c=parseFloat(q)}if(U||(N=i._gsap,N.renderTransform&&!r.parseTransform||ns(i,r.parseTransform),w=r.smoothOrigin!==!1&&N.smooth,U=this._pt=new Yt(this._pt,s,Gr,0,1,N.renderTransform,N,0,-1),U.dep=1),K==="scale")this._pt=new Yt(this._pt,N,"scaleY",N.scaleY,(E?Ha(N.scaleY,E+c):c)-N.scaleY||0,jm),this._pt.u=0,o.push("scaleY",K),K+="X";else if(K==="transformOrigin"){C.push(Xt,0,s[Xt]),q=d1(q),N.svg?vm(i,q,0,w,0,this):(W=parseFloat(q.split(" ")[2])||0,W!==N.zOrigin&&ue(this,N,"zOrigin",N.zOrigin,W),ue(this,s,K,Bl(m),Bl(q)));continue}else if(K==="svgOrigin"){vm(i,q,1,w,0,this);continue}else if(K in MW){C1(this,N,K,n,E?Ha(n,E+q):q);continue}else if(K==="smoothOrigin"){ue(this,N,"smooth",N.smooth,q);continue}else if(K==="force3D"){N[K]=q;continue}else if(K==="transform"){Y1(this,q,i);continue}}else K in s||(K=no(K)||K);if(h||(c||c===0)&&(n||n===0)&&!m1.test(q)&&K in s)u=(m+"").substr((n+"").length),c||(c=0),W=mt(q)||(K in Jt.units?Jt.units[K]:u),u!==W&&(n=Ne(i,K,m,W)),this._pt=new Yt(this._pt,h?N:s,K,n,(E?Ha(n,E+c):c)-n,!h&&(W==="px"||K==="zIndex")&&r.autoRound!==!1?u1:jm),this._pt.u=W||0,h&&M!==q?(this._pt.b=m,this._pt.e=M,this._pt.r=c1):u!==W&&W!=="%"&&(this._pt.b=m,this._pt.r=n1);else if(K in s)p1.call(this,i,K,m,E?E+q:q);else if(K in i)this.add(i,K,m||i[K],E?E+q:q,A,a);else if(K!=="parseTransform"){pq(K,q);continue}h||(K in s?C.push(K,0,s[K]):typeof i[K]=="function"?C.push(K,2,i[K]()):C.push(K,1,m||i[K])),o.push(K)}}p&&nW(this)},render:function(i,r){if(r.tween._time||!Dq())for(var t=r._pt;t;)t.r(i,t.d),t=t._next;else r.styles.revert()},get:gA,aliases:dA,getSetter:function(i,r,t){var A=dA[r];return A&&A.indexOf(",")<0&&(r=A),r in ie&&r!==Xt&&(i._gsap.x||gA(i,"x"))?t&&ac===t?r==="scale"?F1:x1:(ac=t||{})&&(r==="scale"?h1:E1):i.style&&!Mq(i.style[r])?W1:~r.indexOf("-")?K1:Zq(i,r)},core:{_removeProperty:we,_getMatrix:Qq}};Zt.utils.checkPrefix=no;Zt.core.getStyleSaver=xW;(function(e,i,r,t){var A=Ct(e+","+i+","+r,function(a){ie[a]=1});Ct(i,function(a){Jt.units[a]="deg",MW[a]=1}),dA[A[13]]=e+","+i,Ct(t,function(a){var o=a.split(":");dA[o[1]]=A[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Jt.units[e]="px"});Zt.registerPlugin(pW);var At=Zt.registerPlugin(pW)||Zt;At.core.Tween;/*!
 * matrix 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vA,Aa,Bq,_l,Go,xl,gl,vo,xA="transform",Hm=xA+"Origin",dW,wW=function(i){var r=i.ownerDocument||i;for(!(xA in i.style)&&("msTransform"in i.style)&&(xA="msTransform",Hm=xA+"Origin");r.parentNode&&(r=r.parentNode););if(Aa=window,gl=new Va,r){vA=r,Bq=r.documentElement,_l=r.body,vo=vA.createElementNS("http://www.w3.org/2000/svg","g"),vo.style.transform="none";var t=r.createElement("div"),A=r.createElement("div"),a=r&&(r.body||r.firstElementChild);a&&a.appendChild&&(a.appendChild(t),t.appendChild(A),t.style.position="static",t.style.transform="translate3d(0,0,1px)",dW=A.offsetParent!==t,a.removeChild(t))}return r},X1=function(i){for(var r,t;i&&i!==_l;)t=i._gsap,t&&t.uncache&&t.get(i,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),r?r.push(t):r=[t]),i=i.parentNode;return r},NW=[],RW=[],Z1=function(){return Aa.pageYOffset||vA.scrollTop||Bq.scrollTop||_l.scrollTop||0},G1=function(){return Aa.pageXOffset||vA.scrollLeft||Bq.scrollLeft||_l.scrollLeft||0},gq=function(i){return i.ownerSVGElement||((i.tagName+"").toLowerCase()==="svg"?i:null)},z1=function e(i){if(Aa.getComputedStyle(i).position==="fixed")return!0;if(i=i.parentNode,i&&i.nodeType===1)return e(i)},gV=function e(i,r){if(i.parentNode&&(vA||wW(i))){var t=gq(i),A=t?t.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=t?r?"rect":"g":"div",o=r!==2?0:100,s=r===3?100:0,V={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},m=vA.createElementNS?vA.createElementNS(A.replace(/^https/,"http"),a):vA.createElement(a);return r&&(t?(xl||(xl=e(i)),m.setAttribute("width",.01),m.setAttribute("height",.01),m.setAttribute("transform","translate("+o+","+s+")"),m.setAttribute("fill","transparent"),xl.appendChild(m)):(Go||(Go=e(i),Object.assign(Go.style,V)),Object.assign(m.style,V,{width:"0.1px",height:"0.1px",top:s+"px",left:o+"px"}),Go.appendChild(m))),m}throw"Need document and parent."},D1=function(i){for(var r=new Va,t=0;t<i.numberOfItems;t++)r.multiply(i.getItem(t).matrix);return r},y1=function(i){var r=i.getCTM(),t;return r||(t=i.style[xA],i.style[xA]="none",i.appendChild(vo),r=vo.getCTM(),i.removeChild(vo),t?i.style[xA]=t:i.style.removeProperty(xA.replace(/([A-Z])/g,"-$1").toLowerCase())),r||gl.clone()},Q1=function(i,r){var t=gq(i),A=i===t,a=t?NW:RW,o=i.parentNode,s=o&&!t&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,V,m,q,c,n,l;if(i===Aa)return i;if(a.length||a.push(gV(i,1),gV(i,2),gV(i,3)),V=t?xl:Go,t)A?(q=y1(i),c=-q.e/q.a,n=-q.f/q.d,m=gl):i.getBBox?(q=i.getBBox(),m=i.transform?i.transform.baseVal:{},m=m.numberOfItems?m.numberOfItems>1?D1(m):m.getItem(0).matrix:gl,c=m.a*q.x+m.c*q.y,n=m.b*q.x+m.d*q.y):(m=new Va,c=n=0),(A||!i.getBoundingClientRect().width?t:o).appendChild(V),V.setAttribute("transform","matrix("+m.a+","+m.b+","+m.c+","+m.d+","+(m.e+c)+","+(m.f+n)+")");else{if(c=n=0,dW)for(m=i.offsetParent,q=i;q&&(q=q.parentNode)&&q!==m&&q.parentNode;)(Aa.getComputedStyle(q)[xA]+"").length>4&&(c=q.offsetLeft,n=q.offsetTop,q=0);if(l=Aa.getComputedStyle(i),l.position!=="absolute"&&l.position!=="fixed")for(m=i.offsetParent;o&&o!==m;)c+=o.scrollLeft||0,n+=o.scrollTop||0,o=o.parentNode;q=V.style,q.top=i.offsetTop-n+"px",q.left=i.offsetLeft-c+"px",q[xA]=l[xA],q[Hm]=l[Hm],q.position=l.position==="fixed"?"fixed":"absolute",s.appendChild(V)}return V},SV=function(i,r,t,A,a,o,s){return i.a=r,i.b=t,i.c=A,i.d=a,i.e=o,i.f=s,i},Va=function(){function e(r,t,A,a,o,s){r===void 0&&(r=1),t===void 0&&(t=0),A===void 0&&(A=0),a===void 0&&(a=1),o===void 0&&(o=0),s===void 0&&(s=0),SV(this,r,t,A,a,o,s)}var i=e.prototype;return i.inverse=function(){var t=this.a,A=this.b,a=this.c,o=this.d,s=this.e,V=this.f,m=t*o-A*a||1e-10;return SV(this,o/m,-A/m,-a/m,t/m,(a*V-o*s)/m,-(t*V-A*s)/m)},i.multiply=function(t){var A=this.a,a=this.b,o=this.c,s=this.d,V=this.e,m=this.f,q=t.a,c=t.c,n=t.b,l=t.d,x=t.e,K=t.f;return SV(this,q*A+n*o,q*a+n*s,c*A+l*o,c*a+l*s,V+x*A+K*o,m+x*a+K*s)},i.clone=function(){return new e(this.a,this.b,this.c,this.d,this.e,this.f)},i.equals=function(t){var A=this.a,a=this.b,o=this.c,s=this.d,V=this.e,m=this.f;return A===t.a&&a===t.b&&o===t.c&&s===t.d&&V===t.e&&m===t.f},i.apply=function(t,A){A===void 0&&(A={});var a=t.x,o=t.y,s=this.a,V=this.b,m=this.c,q=this.d,c=this.e,n=this.f;return A.x=a*s+o*m+c||0,A.y=a*V+o*q+n||0,A},e}();function Je(e,i,r,t){if(!e||!e.parentNode||(vA||wW(e)).documentElement===e)return new Va;var A=X1(e),a=gq(e),o=a?NW:RW,s=Q1(e),V=o[0].getBoundingClientRect(),m=o[1].getBoundingClientRect(),q=o[2].getBoundingClientRect(),c=s.parentNode,n=z1(e),l=new Va((m.left-V.left)/100,(m.top-V.top)/100,(q.left-V.left)/100,(q.top-V.top)/100,V.left+(n?0:G1()),V.top+(n?0:Z1()));if(c.removeChild(s),A)for(V=A.length;V--;)m=A[V],m.scaleX=m.scaleY=0,m.renderTransform(1,m);return i?l.inverse():l}function uc(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B1(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i}var ur,Nr,bt,FA,HA,TV,SA,fm,zo,We,CW,Jm,cs,Sq,Do,yt,yo,Fl,YW,Pm,Sl=0,XW=function(){return typeof window<"u"},ZW=function(){return ur||XW()&&(ur=window.gsap)&&ur.registerPlugin&&ur},qe=function(i){return typeof i=="function"},Ho=function(i){return typeof i=="object"},uA=function(i){return typeof i>"u"},hl=function(){return!1},fo="transform",km="transformOrigin",ut=function(i){return Math.round(i*1e4)/1e4},wo=Array.isArray,fs=function(i,r){var t=bt.createElementNS?bt.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),i):bt.createElement(i);return t.style?t:bt.createElement(i)},Wc=180/Math.PI,Se=1e20,g1=new Va,le=Date.now||function(){return new Date().getTime()},ea=[],Pa={},S1=0,T1=/^(?:a|input|textarea|button|select)$/i,Kc=0,Ga={},QA={},GW=function(i,r){var t={},A;for(A in i)t[A]=r?i[A]*r:i[A];return t},O1=function(i,r){for(var t in r)t in i||(i[t]=r[t]);return i},xc=function e(i,r){for(var t=i.length,A;t--;)r?i[t].style.touchAction=r:i[t].style.removeProperty("touch-action"),A=i[t].children,A&&A.length&&e(A,r)},zW=function(){return ea.forEach(function(i){return i()})},j1=function(i){ea.push(i),ea.length===1&&ur.ticker.add(zW)},Fc=function(){return!ea.length&&ur.ticker.remove(zW)},hc=function(i){for(var r=ea.length;r--;)ea[r]===i&&ea.splice(r,1);ur.to(Fc,{overwrite:!0,delay:15,duration:0,onComplete:Fc,data:"_draggable"})},b1=function(i,r){for(var t in r)t in i||(i[t]=r[t]);return i},Ir=function(i,r,t,A){if(i.addEventListener){var a=cs[r];A=A||(CW?{passive:!1}:null),i.addEventListener(a||r,t,A),a&&r!==a&&i.addEventListener(r,t,A)}},Sr=function(i,r,t,A){if(i.removeEventListener){var a=cs[r];i.removeEventListener(a||r,t,A),a&&r!==a&&i.removeEventListener(r,t,A)}},iA=function(i){i.preventDefault&&i.preventDefault(),i.preventManipulation&&i.preventManipulation()},I1=function(i,r){for(var t=i.length;t--;)if(i[t].identifier===r)return!0},v1=function e(i){Sq=i.touches&&Sl<i.touches.length,Sr(i.target,"touchend",e)},Ec=function(i){Sq=i.touches&&Sl<i.touches.length,Ir(i.target,"touchend",v1)},ka=function(i){return Nr.pageYOffset||i.scrollTop||i.documentElement.scrollTop||i.body.scrollTop||0},_a=function(i){return Nr.pageXOffset||i.scrollLeft||i.documentElement.scrollLeft||i.body.scrollLeft||0},Mc=function e(i,r){Ir(i,"scroll",r),co(i.parentNode)||e(i.parentNode,r)},Uc=function e(i,r){Sr(i,"scroll",r),co(i.parentNode)||e(i.parentNode,r)},co=function(i){return!i||i===FA||i.nodeType===9||i===bt.body||i===Nr||!i.nodeType||!i.parentNode},Lc=function(i,r){var t=r==="x"?"Width":"Height",A="scroll"+t,a="client"+t;return Math.max(0,co(i)?Math.max(FA[A],HA[A])-(Nr["inner"+t]||FA[a]||HA[a]):i[A]-i[a])},OV=function e(i,r){var t=Lc(i,"x"),A=Lc(i,"y");co(i)?i=QA:e(i.parentNode,r),i._gsMaxScrollX=t,i._gsMaxScrollY=A,r||(i._gsScrollX=i.scrollLeft||0,i._gsScrollY=i.scrollTop||0)},jV=function(i,r,t){var A=i.style;A&&(uA(A[r])&&(r=zo(r,i)||r),t==null?A.removeProperty&&A.removeProperty(r.replace(/([A-Z])/g,"-$1").toLowerCase()):A[r]=t)},us=function(i){return Nr.getComputedStyle(i instanceof Element?i:i.host||(i.parentNode||{}).host||i)},Te={},za=function(i){if(i===Nr)return Te.left=Te.top=0,Te.width=Te.right=FA.clientWidth||i.innerWidth||HA.clientWidth||0,Te.height=Te.bottom=(i.innerHeight||0)-20<FA.clientHeight?FA.clientHeight:i.innerHeight||HA.clientHeight||0,Te;var r=i.ownerDocument||bt,t=uA(i.pageX)?!i.nodeType&&!uA(i.left)&&!uA(i.top)?i:We(i)[0].getBoundingClientRect():{left:i.pageX-_a(r),top:i.pageY-ka(r),right:i.pageX-_a(r)+1,bottom:i.pageY-ka(r)+1};return uA(t.right)&&!uA(t.width)?(t.right=t.left+t.width,t.bottom=t.top+t.height):uA(t.width)&&(t={width:t.right-t.left,height:t.bottom-t.top,right:t.right,left:t.left,bottom:t.bottom,top:t.top}),t},Dr=function(i,r,t){var A=i.vars,a=A[t],o=i._listeners[r],s;return qe(a)&&(s=a.apply(A.callbackScope||i,A[t+"Params"]||[i.pointerEvent])),o&&i.dispatchEvent(r)===!1&&(s=!1),s},pc=function(i,r){var t=We(i)[0],A,a,o;return!t.nodeType&&t!==Nr?uA(i.left)?(a=i.min||i.minX||i.minRotation||0,A=i.min||i.minY||0,{left:a,top:A,width:(i.max||i.maxX||i.maxRotation||0)-a,height:(i.max||i.maxY||0)-A}):(o={x:0,y:0},{left:i.left-o.x,top:i.top-o.y,width:i.width,height:i.height}):H1(t,r)},rA={},H1=function(i,r){r=We(r)[0];var t=i.getBBox&&i.ownerSVGElement,A=i.ownerDocument||bt,a,o,s,V,m,q,c,n,l,x,K,u,W;if(i===Nr)s=ka(A),a=_a(A),o=a+(A.documentElement.clientWidth||i.innerWidth||A.body.clientWidth||0),V=s+((i.innerHeight||0)-20<A.documentElement.clientHeight?A.documentElement.clientHeight:i.innerHeight||A.body.clientHeight||0);else{if(r===Nr||uA(r))return i.getBoundingClientRect();a=s=0,t?(x=i.getBBox(),K=x.width,u=x.height):(i.viewBox&&(x=i.viewBox.baseVal)&&(a=x.x||0,s=x.y||0,K=x.width,u=x.height),K||(W=us(i),x=W.boxSizing==="border-box",K=(parseFloat(W.width)||i.clientWidth||0)+(x?0:parseFloat(W.borderLeftWidth)+parseFloat(W.borderRightWidth)),u=(parseFloat(W.height)||i.clientHeight||0)+(x?0:parseFloat(W.borderTopWidth)+parseFloat(W.borderBottomWidth)))),o=K,V=u}return i===r?{left:a,top:s,width:o-a,height:V-s}:(m=Je(r,!0).multiply(Je(i)),q=m.apply({x:a,y:s}),c=m.apply({x:o,y:s}),n=m.apply({x:o,y:V}),l=m.apply({x:a,y:V}),a=Math.min(q.x,c.x,n.x,l.x),s=Math.min(q.y,c.y,n.y,l.y),{left:a,top:s,width:Math.max(q.x,c.x,n.x,l.x)-a,height:Math.max(q.y,c.y,n.y,l.y)-s})},bV=function(i,r,t,A,a,o){var s={},V,m,q;if(r)if(a!==1&&r instanceof Array){if(s.end=V=[],q=r.length,Ho(r[0]))for(m=0;m<q;m++)V[m]=GW(r[m],a);else for(m=0;m<q;m++)V[m]=r[m]*a;t+=1.1,A-=1.1}else qe(r)?s.end=function(c){var n=r.call(i,c),l,x;if(a!==1)if(Ho(n)){l={};for(x in n)l[x]=n[x]*a;n=l}else n*=a;return n}:s.end=r;return(t||t===0)&&(s.max=t),(A||A===0)&&(s.min=A),o&&(s.velocity=0),s},f1=function e(i){var r;return!i||!i.getAttribute||i===HA?!1:(r=i.getAttribute("data-clickable"))==="true"||r!=="false"&&(T1.test(i.nodeName+"")||i.getAttribute("contentEditable")==="true")?!0:e(i.parentNode)},Js=function(i,r){for(var t=i.length,A;t--;)A=i[t],A.ondragstart=A.onselectstart=r?null:hl,ur.set(A,{lazy:!0,userSelect:r?"text":"none"})},J1=function e(i){if(us(i).position==="fixed")return!0;if(i=i.parentNode,i&&i.nodeType===1)return e(i)},DW,_m,P1=function(i,r){i=ur.utils.toArray(i)[0],r=r||{};var t=document.createElement("div"),A=t.style,a=i.firstChild,o=0,s=0,V=i.scrollTop,m=i.scrollLeft,q=i.scrollWidth,c=i.scrollHeight,n=0,l=0,x=0,K,u,W,E,h,U;DW&&r.force3D!==!1?(h="translate3d(",U="px,0px)"):fo&&(h="translate(",U="px)"),this.scrollTop=function(N,w){if(!arguments.length)return-this.top();this.top(-N,w)},this.scrollLeft=function(N,w){if(!arguments.length)return-this.left();this.left(-N,w)},this.left=function(N,w){if(!arguments.length)return-(i.scrollLeft+s);var p=i.scrollLeft-m,C=s;if((p>2||p<-2)&&!w){m=i.scrollLeft,ur.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-m),r.onKill&&r.onKill();return}N=-N,N<0?(s=N-.5|0,N=0):N>l?(s=N-l|0,N=l):s=0,(s||C)&&(this._skip||(A[fo]=h+-s+"px,"+-o+U),s+n>=0&&(A.paddingRight=s+n+"px")),i.scrollLeft=N|0,m=i.scrollLeft},this.top=function(N,w){if(!arguments.length)return-(i.scrollTop+o);var p=i.scrollTop-V,C=o;if((p>2||p<-2)&&!w){V=i.scrollTop,ur.killTweensOf(this,{top:1,scrollTop:1}),this.top(-V),r.onKill&&r.onKill();return}N=-N,N<0?(o=N-.5|0,N=0):N>x?(o=N-x|0,N=x):o=0,(o||C)&&(this._skip||(A[fo]=h+-s+"px,"+-o+U)),i.scrollTop=N|0,V=i.scrollTop},this.maxScrollTop=function(){return x},this.maxScrollLeft=function(){return l},this.disable=function(){for(a=t.firstChild;a;)E=a.nextSibling,i.appendChild(a),a=E;i===t.parentNode&&i.removeChild(t)},this.enable=function(){if(a=i.firstChild,a!==t){for(;a;)E=a.nextSibling,t.appendChild(a),a=E;i.appendChild(t),this.calibrate()}},this.calibrate=function(N){var w=i.clientWidth===K,p,C,M;V=i.scrollTop,m=i.scrollLeft,!(w&&i.clientHeight===u&&t.offsetHeight===W&&q===i.scrollWidth&&c===i.scrollHeight&&!N)&&((o||s)&&(C=this.left(),M=this.top(),this.left(-i.scrollLeft),this.top(-i.scrollTop)),p=us(i),(!w||N)&&(A.display="block",A.width="auto",A.paddingRight="0px",n=Math.max(0,i.scrollWidth-i.clientWidth),n&&(n+=parseFloat(p.paddingLeft)+(_m?parseFloat(p.paddingRight):0))),A.display="inline-block",A.position="relative",A.overflow="visible",A.verticalAlign="top",A.boxSizing="content-box",A.width="100%",A.paddingRight=n+"px",_m&&(A.paddingBottom=p.paddingBottom),K=i.clientWidth,u=i.clientHeight,q=i.scrollWidth,c=i.scrollHeight,l=i.scrollWidth-K,x=i.scrollHeight-u,W=t.offsetHeight,A.display="block",(C||M)&&(this.left(C),this.top(M)))},this.content=t,this.element=i,this._skip=!1,this.enable()},IV=function(i){if(XW()&&document.body){var r=window&&window.navigator;Nr=window,bt=document,FA=bt.documentElement,HA=bt.body,TV=fs("div"),Fl=!!window.PointerEvent,SA=fs("div"),SA.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",yo=SA.style.cursor==="grab"?"grab":"move",Do=r&&r.userAgent.toLowerCase().indexOf("android")!==-1,Jm="ontouchstart"in FA&&"orientation"in Nr||r&&(r.MaxTouchPoints>0||r.msMaxTouchPoints>0),_m=function(){var t=fs("div"),A=fs("div"),a=A.style,o=HA,s;return a.display="inline-block",a.position="relative",t.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",t.appendChild(A),o.appendChild(t),s=A.offsetHeight+18>t.scrollHeight,o.removeChild(t),s}(),cs=function(t){for(var A=t.split(","),a=("onpointerdown"in TV?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in TV?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),o={},s=4;--s>-1;)o[A[s]]=a[s],o[a[s]]=A[s];try{FA.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){CW=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Ir(bt,"touchcancel",hl),Ir(Nr,"touchmove",hl),HA&&HA.addEventListener("touchstart",hl),Ir(bt,"contextmenu",function(){for(var t in Pa)Pa[t].isPressed&&Pa[t].endDrag()}),ur=fm=ZW()}ur?(yt=ur.plugins.inertia,YW=ur.core.context||function(){},zo=ur.utils.checkPrefix,fo=zo(fo),km=zo(km),We=ur.utils.toArray,Pm=ur.core.getStyleSaver,DW=!!zo("perspective")):i&&console.warn("Please gsap.registerPlugin(Draggable)")},k1=function(){function e(r){this._listeners={},this.target=r||this}var i=e.prototype;return i.addEventListener=function(t,A){var a=this._listeners[t]||(this._listeners[t]=[]);~a.indexOf(A)||a.push(A)},i.removeEventListener=function(t,A){var a=this._listeners[t],o=a&&a.indexOf(A);o>=0&&a.splice(o,1)},i.dispatchEvent=function(t){var A=this,a;return(this._listeners[t]||[]).forEach(function(o){return o.call(A,{type:t,target:A.target})===!1&&(a=!1)}),a},e}(),xo=function(e){B1(i,e);function i(r,t){var A;A=e.call(this)||this,fm||IV(1),r=We(r)[0],A.styles=Pm&&Pm(r,"transform,left,top"),yt||(yt=ur.plugins.inertia),A.vars=t=GW(t||{}),A.target=r,A.x=A.y=A.rotation=0,A.dragResistance=parseFloat(t.dragResistance)||0,A.edgeResistance=isNaN(t.edgeResistance)?1:parseFloat(t.edgeResistance)||0,A.lockAxis=t.lockAxis,A.autoScroll=t.autoScroll||0,A.lockedAxis=null,A.allowEventDefault=!!t.allowEventDefault,ur.getProperty(r,"x");var a=(t.type||"x,y").toLowerCase(),o=~a.indexOf("x")||~a.indexOf("y"),s=a.indexOf("rotation")!==-1,V=s?"rotation":o?"x":"left",m=o?"y":"top",q=!!(~a.indexOf("x")||~a.indexOf("left")||a==="scroll"),c=!!(~a.indexOf("y")||~a.indexOf("top")||a==="scroll"),n=t.minimumMovement||2,l=uc(A),x=We(t.trigger||t.handle||r),K={},u=0,W=!1,E=t.autoScrollMarginTop||40,h=t.autoScrollMarginRight||40,U=t.autoScrollMarginBottom||40,N=t.autoScrollMarginLeft||40,w=t.clickableTest||f1,p=0,C=r._gsap||ur.core.getCache(r),M=J1(r),F=function(G,$){return parseFloat(C.get(r,G,$))},R=r.ownerDocument||bt,z,D,j,f,T,S,I,mi,X,ai,Ni,Si,J,oi,Wi,Ki,Li,Oi,Ji,ir,Z,Ti,Xi,hi,Ci,b,Zi,vi,Y,L,v,li,Vi,Ai=function(G){return iA(G),G.stopImmediatePropagation&&G.stopImmediatePropagation(),!1},Yi=function Fi(G){if(l.autoScroll&&l.isDragging&&(W||Li)){var $=r,B=l.autoScroll*15,P,si,k,xi,ei,di,ji,zi;for(W=!1,QA.scrollTop=Nr.pageYOffset!=null?Nr.pageYOffset:R.documentElement.scrollTop!=null?R.documentElement.scrollTop:R.body.scrollTop,QA.scrollLeft=Nr.pageXOffset!=null?Nr.pageXOffset:R.documentElement.scrollLeft!=null?R.documentElement.scrollLeft:R.body.scrollLeft,xi=l.pointerX-QA.scrollLeft,ei=l.pointerY-QA.scrollTop;$&&!si;)si=co($.parentNode),P=si?QA:$.parentNode,k=si?{bottom:Math.max(FA.clientHeight,Nr.innerHeight||0),right:Math.max(FA.clientWidth,Nr.innerWidth||0),left:0,top:0}:P.getBoundingClientRect(),di=ji=0,c&&(zi=P._gsMaxScrollY-P.scrollTop,zi<0?ji=zi:ei>k.bottom-U&&zi?(W=!0,ji=Math.min(zi,B*(1-Math.max(0,k.bottom-ei)/U)|0)):ei<k.top+E&&P.scrollTop&&(W=!0,ji=-Math.min(P.scrollTop,B*(1-Math.max(0,ei-k.top)/E)|0)),ji&&(P.scrollTop+=ji)),q&&(zi=P._gsMaxScrollX-P.scrollLeft,zi<0?di=zi:xi>k.right-h&&zi?(W=!0,di=Math.min(zi,B*(1-Math.max(0,k.right-xi)/h)|0)):xi<k.left+N&&P.scrollLeft&&(W=!0,di=-Math.min(P.scrollLeft,B*(1-Math.max(0,xi-k.left)/N)|0)),di&&(P.scrollLeft+=di)),si&&(di||ji)&&(Nr.scrollTo(P.scrollLeft,P.scrollTop),ti(l.pointerX+di,l.pointerY+ji)),$=P}if(Li){var $i=l.x,mr=l.y;s?(l.deltaX=$i-parseFloat(C.rotation),l.rotation=$i,C.rotation=$i+"deg",C.renderTransform(1,C)):D?(c&&(l.deltaY=mr-D.top(),D.top(mr)),q&&(l.deltaX=$i-D.left(),D.left($i))):o?(c&&(l.deltaY=mr-parseFloat(C.y),C.y=mr+"px"),q&&(l.deltaX=$i-parseFloat(C.x),C.x=$i+"px"),C.renderTransform(1,C)):(c&&(l.deltaY=mr-parseFloat(r.style.top||0),r.style.top=mr+"px"),q&&(l.deltaX=$i-parseFloat(r.style.left||0),r.style.left=$i+"px")),mi&&!G&&!vi&&(vi=!0,Dr(l,"drag","onDrag")===!1&&(q&&(l.x-=l.deltaX),c&&(l.y-=l.deltaY),Fi(!0)),vi=!1)}Li=!1},qi=function(G,$){var B=l.x,P=l.y,si,k;r._gsap||(C=ur.core.getCache(r)),C.uncache&&ur.getProperty(r,"x"),o?(l.x=parseFloat(C.x),l.y=parseFloat(C.y)):s?l.x=l.rotation=ut(parseFloat(C.rotation)):D?(l.y=D.top(),l.x=D.left()):(l.y=parseFloat(r.style.top||(k=us(r))&&k.top)||0,l.x=parseFloat(r.style.left||(k||{}).left)||0),(Ji||ir||Z)&&!$&&(l.isDragging||l.isThrowing)&&(Z&&(Ga.x=l.x,Ga.y=l.y,si=Z(Ga),si.x!==l.x&&(l.x=si.x,Li=!0),si.y!==l.y&&(l.y=si.y,Li=!0)),Ji&&(si=Ji(l.x),si!==l.x&&(l.x=si,s&&(l.rotation=si),Li=!0)),ir&&(si=ir(l.y),si!==l.y&&(l.y=si),Li=!0)),Li&&Yi(!0),G||(l.deltaX=l.x-B,l.deltaY=l.y-P,Dr(l,"throwupdate","onThrowUpdate"))},Ei=function(G,$,B,P){return $==null&&($=-Se),B==null&&(B=Se),qe(G)?function(si){var k=l.isPressed?1-l.edgeResistance:1;return G.call(l,(si>B?B+(si-B)*k:si<$?$+(si-$)*k:si)*P)*P}:wo(G)?function(si){for(var k=G.length,xi=0,ei=Se,di,ji;--k>-1;)di=G[k],ji=di-si,ji<0&&(ji=-ji),ji<ei&&di>=$&&di<=B&&(xi=k,ei=ji);return G[xi]}:isNaN(G)?function(si){return si}:function(){return G*P}},Hi=function(G,$,B,P,si,k,xi){return k=k&&k<Se?k*k:Se,qe(G)?function(ei){var di=l.isPressed?1-l.edgeResistance:1,ji=ei.x,zi=ei.y,$i,mr,nr;return ei.x=ji=ji>B?B+(ji-B)*di:ji<$?$+(ji-$)*di:ji,ei.y=zi=zi>si?si+(zi-si)*di:zi<P?P+(zi-P)*di:zi,$i=G.call(l,ei),$i!==ei&&(ei.x=$i.x,ei.y=$i.y),xi!==1&&(ei.x*=xi,ei.y*=xi),k<Se&&(mr=ei.x-ji,nr=ei.y-zi,mr*mr+nr*nr>k&&(ei.x=ji,ei.y=zi)),ei}:wo(G)?function(ei){for(var di=G.length,ji=0,zi=Se,$i,mr,nr,ar;--di>-1;)nr=G[di],$i=nr.x-ei.x,mr=nr.y-ei.y,ar=$i*$i+mr*mr,ar<zi&&(ji=di,zi=ar);return zi<=k?G[ji]:ei}:function(ei){return ei}},ci=function(){var G,$,B,P;I=!1,D?(D.calibrate(),l.minX=Ni=-D.maxScrollLeft(),l.minY=J=-D.maxScrollTop(),l.maxX=ai=l.maxY=Si=0,I=!0):t.bounds&&(G=pc(t.bounds,r.parentNode),s?(l.minX=Ni=G.left,l.maxX=ai=G.left+G.width,l.minY=J=l.maxY=Si=0):!uA(t.bounds.maxX)||!uA(t.bounds.maxY)?(G=t.bounds,l.minX=Ni=G.minX,l.minY=J=G.minY,l.maxX=ai=G.maxX,l.maxY=Si=G.maxY):($=pc(r,r.parentNode),l.minX=Ni=Math.round(F(V,"px")+G.left-$.left),l.minY=J=Math.round(F(m,"px")+G.top-$.top),l.maxX=ai=Math.round(Ni+(G.width-$.width)),l.maxY=Si=Math.round(J+(G.height-$.height))),Ni>ai&&(l.minX=ai,l.maxX=ai=Ni,Ni=l.minX),J>Si&&(l.minY=Si,l.maxY=Si=J,J=l.minY),s&&(l.minRotation=Ni,l.maxRotation=ai),I=!0),t.liveSnap&&(B=t.liveSnap===!0?t.snap||{}:t.liveSnap,P=wo(B)||qe(B),s?(Ji=Ei(P?B:B.rotation,Ni,ai,1),ir=null):B.points?Z=Hi(P?B:B.points,Ni,ai,J,Si,B.radius,D?-1:1):(q&&(Ji=Ei(P?B:B.x||B.left||B.scrollLeft,Ni,ai,D?-1:1)),c&&(ir=Ei(P?B:B.y||B.top||B.scrollTop,J,Si,D?-1:1))))},Ri=function(){l.isThrowing=!1,Dr(l,"throwcomplete","onThrowComplete")},bi=function(){l.isThrowing=!1},Pi=function(G,$){var B,P,si,k;G&&yt?(G===!0&&(B=t.snap||t.liveSnap||{},P=wo(B)||qe(B),G={resistance:(t.throwResistance||t.resistance||1e3)/(s?10:1)},s?G.rotation=bV(l,P?B:B.rotation,ai,Ni,1,$):(q&&(G[V]=bV(l,P?B:B.points||B.x||B.left,ai,Ni,D?-1:1,$||l.lockedAxis==="x")),c&&(G[m]=bV(l,P?B:B.points||B.y||B.top,Si,J,D?-1:1,$||l.lockedAxis==="y")),(B.points||wo(B)&&Ho(B[0]))&&(G.linkedProps=V+","+m,G.radius=B.radius))),l.isThrowing=!0,k=isNaN(t.overshootTolerance)?t.edgeResistance===1?0:1-l.edgeResistance+.2:t.overshootTolerance,G.duration||(G.duration={max:Math.max(t.minDuration||0,"maxDuration"in t?t.maxDuration:2),min:isNaN(t.minDuration)?k===0||Ho(G)&&G.resistance>1e3?0:.5:t.minDuration,overshoot:k}),l.tween=si=ur.to(D||r,{inertia:G,data:"_draggable",inherit:!1,onComplete:Ri,onInterrupt:bi,onUpdate:t.fastMode?Dr:qi,onUpdateParams:t.fastMode?[l,"onthrowupdate","onThrowUpdate"]:B&&B.radius?[!1,!0]:[]}),t.fastMode||(D&&(D._skip=!0),si.render(1e9,!0,!0),qi(!0,!0),l.endX=l.x,l.endY=l.y,s&&(l.endRotation=l.x),si.play(0),qi(!0,!0),D&&(D._skip=!1))):I&&l.applyBounds()},pi=function(G){var $=hi,B;hi=Je(r.parentNode,!0),G&&l.isPressed&&!hi.equals($||new Va)&&(B=$.inverse().apply({x:j,y:f}),hi.apply(B,B),j=B.x,f=B.y),hi.equals(g1)&&(hi=null)},fi=function(){var G=1-l.edgeResistance,$=M?_a(R):0,B=M?ka(R):0,P,si,k;o&&(C.x=F(V,"px")+"px",C.y=F(m,"px")+"px",C.renderTransform()),pi(!1),rA.x=l.pointerX-$,rA.y=l.pointerY-B,hi&&hi.apply(rA,rA),j=rA.x,f=rA.y,Li&&(ti(l.pointerX,l.pointerY),Yi(!0)),li=Je(r),D?(ci(),S=D.top(),T=D.left()):(_i()?(qi(!0,!0),ci()):l.applyBounds(),s?(P=r.ownerSVGElement?[C.xOrigin-r.getBBox().x,C.yOrigin-r.getBBox().y]:(us(r)[km]||"0 0").split(" "),Ki=l.rotationOrigin=Je(r).apply({x:parseFloat(P[0])||0,y:parseFloat(P[1])||0}),qi(!0,!0),si=l.pointerX-Ki.x-$,k=Ki.y-l.pointerY+B,T=l.x,S=l.y=Math.atan2(k,si)*Wc):(S=F(m,"px"),T=F(V,"px"))),I&&G&&(T>ai?T=ai+(T-ai)/G:T<Ni&&(T=Ni-(Ni-T)/G),s||(S>Si?S=Si+(S-Si)/G:S<J&&(S=J-(J-S)/G))),l.startX=T=ut(T),l.startY=S=ut(S)},_i=function(){return l.tween&&l.tween.isActive()},Kr=function(){SA.parentNode&&!_i()&&!l.isDragging&&SA.parentNode.removeChild(SA)},y=function(G,$){var B;if(!z||l.isPressed||!G||(G.type==="mousedown"||G.type==="pointerdown")&&!$&&le()-p<30&&cs[l.pointerEvent.type]){v&&G&&z&&iA(G);return}if(Ci=_i(),Vi=!1,l.pointerEvent=G,cs[G.type]?(Xi=~G.type.indexOf("touch")?G.currentTarget||G.target:R,Ir(Xi,"touchend",ri),Ir(Xi,"touchmove",ii),Ir(Xi,"touchcancel",ri),Ir(R,"touchstart",Ec)):(Xi=null,Ir(R,"mousemove",ii)),Zi=null,(!Fl||!Xi)&&(Ir(R,"mouseup",ri),G&&G.target&&Ir(G.target,"mouseup",ri)),Ti=w.call(l,G.target)&&t.dragClickables===!1&&!$,Ti){Ir(G.target,"change",ri),Dr(l,"pressInit","onPressInit"),Dr(l,"press","onPress"),Js(x,!0),v=!1;return}if(b=!Xi||q===c||l.vars.allowNativeTouchScrolling===!1||l.vars.allowContextMenu&&G&&(G.ctrlKey||G.which>2)?!1:q?"y":"x",v=!b&&!l.allowEventDefault,v&&(iA(G),Ir(Nr,"touchforcechange",iA)),G.changedTouches?(G=oi=G.changedTouches[0],Wi=G.identifier):G.pointerId?Wi=G.pointerId:oi=Wi=null,Sl++,j1(Yi),f=l.pointerY=G.pageY,j=l.pointerX=G.pageX,Dr(l,"pressInit","onPressInit"),(b||l.autoScroll)&&OV(r.parentNode),r.parentNode&&l.autoScroll&&!D&&!s&&r.parentNode._gsMaxScrollX&&!SA.parentNode&&!r.getBBox&&(SA.style.width=r.parentNode.scrollWidth+"px",r.parentNode.appendChild(SA)),fi(),l.tween&&l.tween.kill(),l.isThrowing=!1,ur.killTweensOf(D||r,K,!0),D&&ur.killTweensOf(r,{scrollTo:1},!0),l.tween=l.lockedAxis=null,(t.zIndexBoost||!s&&!D&&t.zIndexBoost!==!1)&&(r.style.zIndex=i.zIndex++),l.isPressed=!0,mi=!!(t.onDrag||l._listeners.drag),X=!!(t.onMove||l._listeners.move),t.cursor!==!1||t.activeCursor)for(B=x.length;--B>-1;)ur.set(x[B],{cursor:t.activeCursor||t.cursor||(yo==="grab"?"grabbing":yo)});Dr(l,"press","onPress"),yt&&yt.track(D||r,o?"x,y":s?"rotation":"top,left")},ii=function(G){var $=G,B,P,si,k,xi,ei;if(!z||Sq||!l.isPressed||!G){v&&G&&z&&iA(G);return}if(l.pointerEvent=G,B=G.changedTouches,B){if(G=B[0],G!==oi&&G.identifier!==Wi){for(k=B.length;--k>-1&&(G=B[k]).identifier!==Wi&&G.target!==r;);if(k<0)return}}else if(G.pointerId&&Wi&&G.pointerId!==Wi)return;if(Xi&&b&&!Zi&&(rA.x=G.pageX-(M?_a(R):0),rA.y=G.pageY-(M?ka(R):0),hi&&hi.apply(rA,rA),P=rA.x,si=rA.y,xi=Math.abs(P-j),ei=Math.abs(si-f),(xi!==ei&&(xi>n||ei>n)||Do&&b===Zi)&&(Zi=xi>ei&&q?"x":"y",b&&Zi!==b&&Ir(Nr,"touchforcechange",iA),l.vars.lockAxisOnTouchScroll!==!1&&q&&c&&(l.lockedAxis=Zi==="x"?"y":"x",qe(l.vars.onLockAxis)&&l.vars.onLockAxis.call(l,$)),Do&&b===Zi))){ri($);return}!l.allowEventDefault&&(!b||Zi&&b!==Zi)&&$.cancelable!==!1?(iA($),v=!0):v&&(v=!1),l.autoScroll&&(W=!0),ti(G.pageX,G.pageY,X)},ti=function(G,$,B){var P=1-l.dragResistance,si=1-l.edgeResistance,k=l.pointerX,xi=l.pointerY,ei=S,di=l.x,ji=l.y,zi=l.endX,$i=l.endY,mr=l.endRotation,nr=Li,ar,sr,hr,d,Q,O;l.pointerX=G,l.pointerY=$,M&&(G-=_a(R),$-=ka(R)),s?(d=ut(Math.atan2(Ki.y-$,G-Ki.x)*Wc),Q=l.y-d,Q>180?(S-=360,l.y=d):Q<-180&&(S+=360,l.y=d),hi&&(O=G*hi.a+$*hi.c+hi.e,$=G*hi.b+$*hi.d+hi.f,G=O),l.x!==T||Math.max(Math.abs(j-G),Math.abs(f-$))>n?(l.y=d,hr=ut(T+(S-d)*P)):hr=T):(hi&&(O=G*hi.a+$*hi.c+hi.e,$=G*hi.b+$*hi.d+hi.f,G=O),sr=$-f,ar=G-j,sr<n&&sr>-n&&(sr=0),ar<n&&ar>-n&&(ar=0),(l.lockAxis||l.lockedAxis)&&(ar||sr)&&(O=l.lockedAxis,O||(l.lockedAxis=O=q&&Math.abs(ar)>Math.abs(sr)?"y":c?"x":null,O&&qe(l.vars.onLockAxis)&&l.vars.onLockAxis.call(l,l.pointerEvent)),O==="y"?sr=0:O==="x"&&(ar=0)),hr=ut(T+ar*P),d=ut(S+sr*P)),(Ji||ir||Z)&&(l.x!==hr||l.y!==d&&!s)&&(Z&&(Ga.x=hr,Ga.y=d,O=Z(Ga),hr=ut(O.x),d=ut(O.y)),Ji&&(hr=ut(Ji(hr))),ir&&(d=ut(ir(d)))),I&&(hr>ai?hr=ai+Math.round((hr-ai)*si):hr<Ni&&(hr=Ni+Math.round((hr-Ni)*si)),s||(d>Si?d=Math.round(Si+(d-Si)*si):d<J&&(d=Math.round(J+(d-J)*si)))),(l.x!==hr||l.y!==d&&!s)&&(s?(l.endRotation=l.x=l.endX=ut(hr),Li=!0):(c&&(l.y=l.endY=d,Li=!0),q&&(l.x=l.endX=hr,Li=!0)),!B||Dr(l,"move","onMove")!==!1?!l.isDragging&&l.isPressed&&(l.isDragging=Vi=!0,Dr(l,"dragstart","onDragStart")):(l.pointerX=k,l.pointerY=xi,S=ei,l.x=di,l.y=ji,l.endX=zi,l.endY=$i,l.endRotation=mr,Li=nr))},ri=function Fi(G,$){if(!z||!l.isPressed||G&&Wi!=null&&!$&&(G.pointerId&&G.pointerId!==Wi&&G.target!==r||G.changedTouches&&!I1(G.changedTouches,Wi))){v&&G&&z&&iA(G);return}l.isPressed=!1;var B=G,P=l.isDragging,si=l.vars.allowContextMenu&&G&&(G.ctrlKey||G.which>2),k=ur.delayedCall(.001,Kr),xi,ei,di,ji,zi;if(Xi?(Sr(Xi,"touchend",Fi),Sr(Xi,"touchmove",ii),Sr(Xi,"touchcancel",Fi),Sr(R,"touchstart",Ec)):Sr(R,"mousemove",ii),Sr(Nr,"touchforcechange",iA),(!Fl||!Xi)&&(Sr(R,"mouseup",Fi),G&&G.target&&Sr(G.target,"mouseup",Fi)),Li=!1,P&&(u=Kc=le(),l.isDragging=!1),hc(Yi),Ti&&!si){G&&(Sr(G.target,"change",Fi),l.pointerEvent=B),Js(x,!1),Dr(l,"release","onRelease"),Dr(l,"click","onClick"),Ti=!1;return}for(ei=x.length;--ei>-1;)jV(x[ei],"cursor",t.cursor||(t.cursor!==!1?yo:null));if(Sl--,G){if(xi=G.changedTouches,xi&&(G=xi[0],G!==oi&&G.identifier!==Wi)){for(ei=xi.length;--ei>-1&&(G=xi[ei]).identifier!==Wi&&G.target!==r;);if(ei<0&&!$)return}l.pointerEvent=B,l.pointerX=G.pageX,l.pointerY=G.pageY}return si&&B?(iA(B),v=!0,Dr(l,"release","onRelease")):B&&!P?(v=!1,Ci&&(t.snap||t.bounds)&&Pi(t.inertia||t.throwProps),Dr(l,"release","onRelease"),(!Do||B.type!=="touchmove")&&B.type.indexOf("cancel")===-1&&(Dr(l,"click","onClick"),le()-p<300&&Dr(l,"doubleclick","onDoubleClick"),ji=B.target||r,p=le(),zi=function(){p!==Y&&l.enabled()&&!l.isPressed&&!B.defaultPrevented&&(ji.click?ji.click():R.createEvent&&(di=R.createEvent("MouseEvents"),di.initMouseEvent("click",!0,!0,Nr,1,l.pointerEvent.screenX,l.pointerEvent.screenY,l.pointerX,l.pointerY,!1,!1,!1,!1,0,null),ji.dispatchEvent(di)))},!Do&&!B.defaultPrevented&&ur.delayedCall(.05,zi))):(Pi(t.inertia||t.throwProps),!l.allowEventDefault&&B&&(t.dragClickables!==!1||!w.call(l,B.target))&&P&&(!b||Zi&&b===Zi)&&B.cancelable!==!1?(v=!0,iA(B)):v=!1,Dr(l,"release","onRelease")),_i()&&k.duration(l.tween.duration()),P&&Dr(l,"dragend","onDragEnd"),!0},ui=function(G){if(G&&l.isDragging&&!D){var $=G.target||r.parentNode,B=$.scrollLeft-$._gsScrollX,P=$.scrollTop-$._gsScrollY;(B||P)&&(hi?(j-=B*hi.a+P*hi.c,f-=P*hi.d+B*hi.b):(j-=B,f-=P),$._gsScrollX+=B,$._gsScrollY+=P,ti(l.pointerX,l.pointerY))}},gi=function(G){var $=le(),B=$-p<100,P=$-u<50,si=B&&Y===p,k=l.pointerEvent&&l.pointerEvent.defaultPrevented,xi=B&&L===p,ei=G.isTrusted||G.isTrusted==null&&B&&si;if((si||P&&l.vars.suppressClickOnDrag!==!1)&&G.stopImmediatePropagation&&G.stopImmediatePropagation(),B&&!(l.pointerEvent&&l.pointerEvent.defaultPrevented)&&(!si||ei&&!xi)){ei&&si&&(L=p),Y=p;return}(l.isPressed||P||B)&&(!ei||!G.detail||!B||k)&&iA(G),!B&&!P&&!Vi&&(G&&G.target&&(l.pointerEvent=G),Dr(l,"click","onClick"))},rr=function(G){return hi?{x:G.x*hi.a+G.y*hi.c+hi.e,y:G.x*hi.b+G.y*hi.d+hi.f}:{x:G.x,y:G.y}};return Oi=i.get(r),Oi&&Oi.kill(),A.startDrag=function(Fi,G){var $,B,P,si;y(Fi||l.pointerEvent,!0),G&&!l.hitTest(Fi||l.pointerEvent)&&($=za(Fi||l.pointerEvent),B=za(r),P=rr({x:$.left+$.width/2,y:$.top+$.height/2}),si=rr({x:B.left+B.width/2,y:B.top+B.height/2}),j-=P.x-si.x,f-=P.y-si.y),l.isDragging||(l.isDragging=Vi=!0,Dr(l,"dragstart","onDragStart"))},A.drag=ii,A.endDrag=function(Fi){return ri(Fi||l.pointerEvent,!0)},A.timeSinceDrag=function(){return l.isDragging?0:(le()-u)/1e3},A.timeSinceClick=function(){return(le()-p)/1e3},A.hitTest=function(Fi,G){return i.hitTest(l.target,Fi,G)},A.getDirection=function(Fi,G){var $=Fi==="velocity"&&yt?Fi:Ho(Fi)&&!s?"element":"start",B,P,si,k,xi,ei;return $==="element"&&(xi=za(l.target),ei=za(Fi)),B=$==="start"?l.x-T:$==="velocity"?yt.getVelocity(r,V):xi.left+xi.width/2-(ei.left+ei.width/2),s?B<0?"counter-clockwise":"clockwise":(G=G||2,P=$==="start"?l.y-S:$==="velocity"?yt.getVelocity(r,m):xi.top+xi.height/2-(ei.top+ei.height/2),si=Math.abs(B/P),k=si<1/G?"":B<0?"left":"right",si<G&&(k!==""&&(k+="-"),k+=P<0?"up":"down"),k)},A.applyBounds=function(Fi,G){var $,B,P,si,k,xi;if(Fi&&t.bounds!==Fi)return t.bounds=Fi,l.update(!0,G);if(qi(!0),ci(),I&&!_i()){if($=l.x,B=l.y,$>ai?$=ai:$<Ni&&($=Ni),B>Si?B=Si:B<J&&(B=J),(l.x!==$||l.y!==B)&&(P=!0,l.x=l.endX=$,s?l.endRotation=$:l.y=l.endY=B,Li=!0,Yi(!0),l.autoScroll&&!l.isDragging))for(OV(r.parentNode),si=r,QA.scrollTop=Nr.pageYOffset!=null?Nr.pageYOffset:R.documentElement.scrollTop!=null?R.documentElement.scrollTop:R.body.scrollTop,QA.scrollLeft=Nr.pageXOffset!=null?Nr.pageXOffset:R.documentElement.scrollLeft!=null?R.documentElement.scrollLeft:R.body.scrollLeft;si&&!xi;)xi=co(si.parentNode),k=xi?QA:si.parentNode,c&&k.scrollTop>k._gsMaxScrollY&&(k.scrollTop=k._gsMaxScrollY),q&&k.scrollLeft>k._gsMaxScrollX&&(k.scrollLeft=k._gsMaxScrollX),si=k;l.isThrowing&&(P||l.endX>ai||l.endX<Ni||l.endY>Si||l.endY<J)&&Pi(t.inertia||t.throwProps,P)}return l},A.update=function(Fi,G,$){if(G&&l.isPressed){if(s)l.x=l.y=ut(parseFloat(C.rotation));else{var B=Je(r),P=li.apply({x:l.x-T,y:l.y-S}),si=Je(r.parentNode,!0);si.apply({x:B.e-P.x,y:B.f-P.y},P),l.x=ut(l.x-(P.x-si.e)),l.y=ut(l.y-(P.y-si.f))}Yi(!0),fi()}var k=l.x,xi=l.y;return pi(!G),Fi?l.applyBounds():(Li&&$&&Yi(!0),qi(!0)),G&&(ti(l.pointerX,l.pointerY),Li&&Yi(!0)),l.isPressed&&!G&&(q&&Math.abs(k-l.x)>.01||c&&Math.abs(xi-l.y)>.01&&!s)&&fi(),l.autoScroll&&(OV(r.parentNode,l.isDragging),W=l.isDragging,Yi(!0),Uc(r,ui),Mc(r,ui)),l},A.enable=function(Fi){var G={lazy:!0},$,B,P;if(t.cursor!==!1&&(G.cursor=t.cursor||yo),ur.utils.checkPrefix("touchCallout")&&(G.touchCallout="none"),Fi!=="soft"){for(xc(x,q===c?"none":t.allowNativeTouchScrolling&&r.scrollHeight===r.clientHeight==(r.scrollWidth===r.clientHeight)||t.allowEventDefault?"manipulation":q?"pan-y":"pan-x"),B=x.length;--B>-1;)P=x[B],Fl||Ir(P,"mousedown",y),Ir(P,"touchstart",y),Ir(P,"click",gi,!0),ur.set(P,G),P.getBBox&&P.ownerSVGElement&&q!==c&&ur.set(P.ownerSVGElement,{touchAction:t.allowNativeTouchScrolling||t.allowEventDefault?"manipulation":q?"pan-y":"pan-x"}),t.allowContextMenu||Ir(P,"contextmenu",Ai);Js(x,!1)}return Mc(r,ui),z=!0,yt&&Fi!=="soft"&&yt.track(D||r,o?"x,y":s?"rotation":"top,left"),r._gsDragID=$=r._gsDragID||"d"+S1++,Pa[$]=l,D&&(D.enable(),D.element._gsDragID=$),(t.bounds||s)&&fi(),t.bounds&&l.applyBounds(),l},A.disable=function(Fi){for(var G=l.isDragging,$=x.length,B;--$>-1;)jV(x[$],"cursor",null);if(Fi!=="soft"){for(xc(x,null),$=x.length;--$>-1;)B=x[$],jV(B,"touchCallout",null),Sr(B,"mousedown",y),Sr(B,"touchstart",y),Sr(B,"click",gi,!0),Sr(B,"contextmenu",Ai);Js(x,!0),Xi&&(Sr(Xi,"touchcancel",ri),Sr(Xi,"touchend",ri),Sr(Xi,"touchmove",ii)),Sr(R,"mouseup",ri),Sr(R,"mousemove",ii)}return Uc(r,ui),z=!1,yt&&Fi!=="soft"&&(yt.untrack(D||r,o?"x,y":s?"rotation":"top,left"),l.tween&&l.tween.kill()),D&&D.disable(),hc(Yi),l.isDragging=l.isPressed=Ti=!1,G&&Dr(l,"dragend","onDragEnd"),l},A.enabled=function(Fi,G){return arguments.length?Fi?l.enable(G):l.disable(G):z},A.kill=function(){return l.isThrowing=!1,l.tween&&l.tween.kill(),l.disable(),ur.set(x,{clearProps:"userSelect"}),delete Pa[r._gsDragID],l},A.revert=function(){this.kill(),this.styles&&this.styles.revert()},~a.indexOf("scroll")&&(D=A.scrollProxy=new P1(r,O1({onKill:function(){l.isPressed&&ri(null)}},t)),r.style.overflowY=c&&!Jm?"auto":"hidden",r.style.overflowX=q&&!Jm?"auto":"hidden",r=D.content),s?K.rotation=1:(q&&(K[V]=1),c&&(K[m]=1)),C.force3D="force3D"in t?t.force3D:!0,YW(uc(A)),A.enable(),A}return i.register=function(t){ur=t,IV()},i.create=function(t,A){return fm||IV(!0),We(t).map(function(a){return new i(a,A)})},i.get=function(t){return Pa[(We(t)[0]||{})._gsDragID]},i.timeSinceDrag=function(){return(le()-Kc)/1e3},i.hitTest=function(t,A,a){if(t===A)return!1;var o=za(t),s=za(A),V=o.top,m=o.left,q=o.right,c=o.bottom,n=o.width,l=o.height,x=s.left>q||s.right<m||s.top>c||s.bottom<V,K,u,W;return x||!a?!x:(W=(a+"").indexOf("%")!==-1,a=parseFloat(a)||0,K={left:Math.max(m,s.left),top:Math.max(V,s.top)},K.width=Math.min(q,s.right)-K.left,K.height=Math.min(c,s.bottom)-K.top,K.width<0||K.height<0?!1:W?(a*=.01,u=K.width*K.height,u>=n*l*a||u>=s.width*s.height*a):K.width>a&&K.height>a)},i}(k1);b1(xo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});xo.zIndex=1e3;xo.version="3.15.0";ZW()&&ur.registerPlugin(xo);At.registerPlugin(xo);const dc=Object.assign({"../assets/cards/autopsy-340.jpg":SU,"../assets/cards/autopsy-480.jpg":TU,"../assets/cards/autopsy-680.jpg":OU,"../assets/cards/autopsy.jpg":jU,"../assets/cards/covenant-340.jpg":bU,"../assets/cards/covenant-480.jpg":IU,"../assets/cards/covenant-680.jpg":vU,"../assets/cards/covenant.jpg":HU,"../assets/cards/doppelganger-340.jpg":fU,"../assets/cards/doppelganger-480.jpg":JU,"../assets/cards/doppelganger-680.jpg":PU,"../assets/cards/doppelganger.jpg":kU,"../assets/cards/embalmer-340.jpg":_U,"../assets/cards/embalmer-480.jpg":$U,"../assets/cards/embalmer-680.jpg":iL,"../assets/cards/embalmer.jpg":rL,"../assets/cards/enshroud-340.jpg":tL,"../assets/cards/enshroud-480.jpg":AL,"../assets/cards/enshroud-680.jpg":eL,"../assets/cards/enshroud.jpg":aL,"../assets/cards/exhumed-340.jpg":oL,"../assets/cards/exhumed-480.jpg":sL,"../assets/cards/exhumed-680.jpg":lL,"../assets/cards/exhumed.jpg":VL,"../assets/cards/ferryman-340.jpg":mL,"../assets/cards/ferryman-480.jpg":qL,"../assets/cards/ferryman-680.jpg":nL,"../assets/cards/ferryman.jpg":cL,"../assets/cards/graverobber-340.jpg":uL,"../assets/cards/graverobber-480.jpg":WL,"../assets/cards/graverobber-680.jpg":KL,"../assets/cards/graverobber.jpg":xL,"../assets/cards/hellhound-340.jpg":FL,"../assets/cards/hellhound-480.jpg":hL,"../assets/cards/hellhound-680.jpg":EL,"../assets/cards/hellhound.jpg":ML,"../assets/cards/mangle-340.jpg":UL,"../assets/cards/mangle-480.jpg":LL,"../assets/cards/mangle-680.jpg":pL,"../assets/cards/mangle.jpg":dL,"../assets/cards/omen-340.jpg":wL,"../assets/cards/omen-480.jpg":NL,"../assets/cards/omen-680.jpg":RL,"../assets/cards/omen.jpg":CL,"../assets/cards/oracle-340.jpg":YL,"../assets/cards/oracle-480.jpg":XL,"../assets/cards/oracle-680.jpg":ZL,"../assets/cards/oracle.jpg":GL,"../assets/cards/ossuary-340.jpg":zL,"../assets/cards/ossuary-480.jpg":DL,"../assets/cards/ossuary-680.jpg":yL,"../assets/cards/ossuary.jpg":QL,"../assets/cards/ouija-340.jpg":BL,"../assets/cards/ouija-480.jpg":gL,"../assets/cards/ouija-680.jpg":SL,"../assets/cards/ouija.jpg":TL,"../assets/cards/possession-340.jpg":OL,"../assets/cards/possession-480.jpg":jL,"../assets/cards/possession-680.jpg":bL,"../assets/cards/possession.jpg":IL,"../assets/cards/reaper-340.jpg":vL,"../assets/cards/reaper-480.jpg":HL,"../assets/cards/reaper-680.jpg":fL,"../assets/cards/reaper.jpg":JL,"../assets/cards/seance-340.jpg":PL,"../assets/cards/seance-480.jpg":kL,"../assets/cards/seance-680.jpg":_L,"../assets/cards/seance.jpg":$L,"../assets/cards/tombstone-340.jpg":ip,"../assets/cards/tombstone-480.jpg":rp,"../assets/cards/tombstone-680.jpg":tp,"../assets/cards/tombstone.jpg":Ap,"../assets/cards/unearth-340.jpg":ep,"../assets/cards/unearth-480.jpg":ap,"../assets/cards/unearth-680.jpg":op,"../assets/cards/unearth.jpg":sp,"../assets/cards/wraith-340.jpg":lp,"../assets/cards/wraith-480.jpg":Vp,"../assets/cards/wraith-680.jpg":mp,"../assets/cards/wraith.jpg":qp});function No(e){const i=Object.keys(dc).find(r=>r.endsWith("/"+e));return i?dc[i]:`/cards/${e}`}const _1=["autopsy","covenant","doppelganger","embalmer","enshroud","exhumed","ferryman","graverobber","hellhound","mangle","omen","oracle","ossuary","ouija","possession","reaper","seance","tombstone","unearth","wraith"].map(e=>({name:e,repo:`https://github.com/Vorlixx/${e}`}));function $1(){const e=document.getElementById("carousel"),i=document.getElementById("carouselItems");if(!e||!i)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;_1.forEach(K=>{const u=document.createElement("div");u.className="carousel__item",u.innerHTML=`<a class="carousel__card" href="${K.repo}" target="_blank" rel="noopener" draggable="false">
         <img class="carousel__img" src="${No(`${K.name}.jpg`)}"
              srcset="${No(`${K.name}-340.jpg`)} 340w, ${No(`${K.name}-480.jpg`)} 480w, ${No(`${K.name}-680.jpg`)} 680w, ${No(`${K.name}.jpg`)} 848w"
              sizes="(max-width: 700px) 240px, (max-width: 1000px) 300px, 340px"
              alt="${K.name}" draggable="false" loading="lazy" decoding="async" />
       </a>`,i.appendChild(u)});const t=At.utils.toArray(".carousel__item"),A=t.length,a=360/A;let o=!1;t.forEach(K=>{K.querySelector("a").addEventListener("click",W=>{o&&W.preventDefault()})});const s=At.timeline({paused:!0}),V=.15*(A/2-1)+1;t.forEach((K,u)=>{const W=Math.floor(u/2%2)?1:-1,E=Math.floor((u+4)/4)*4,h=u>A-3?0:W*E;At.set(K,{rotation:h,scale:.5}),s.from(K,{x:()=>u%2?window.innerWidth+K.clientWidth*4:-window.innerWidth-K.clientWidth*4,y:()=>window.innerHeight-K.clientHeight,rotation:u%2?200:-200,scale:4,opacity:1,ease:"power4.out",duration:1,delay:.15*Math.floor(u/2)},0);const U=u*a;s.to(K,{scale:1,duration:0},V),s.to(K,{transformOrigin:"center 200vh",rotation:u>A/2?-a*(A-u):U,duration:1,ease:"power1.out"},V)});let m=-1,q=null;function c(K){const u=document.getElementById("liquidDisp");u&&(q&&q!==K&&(q.style.filter=""),q=K,At.killTweensOf(u),K.style.filter="url(#liquid)",At.fromTo(u,{attr:{scale:26}},{attr:{scale:0},duration:.6,ease:"power2.out",onComplete(){K.style.filter="",q===K&&(q=null)}}))}function n(){const K=At.getProperty(i,"rotation")||0;let u=0,W=1/0;if(t.forEach((E,h)=>{let N=(((At.getProperty(E,"rotation")||0)+K)%360+360)%360;N>180&&(N-=360);const w=Math.abs(N);w<W&&(W=w,u=h)}),t.forEach((E,h)=>E.classList.toggle("is-dim",h!==u)),u!==m&&(m=u,!r)){const E=t[u].querySelector(".carousel__img");E&&c(E)}}xo.create(i,{type:"rotation",inertia:!1,onPress(){o=!1},onDragStart(){o=!0},onDrag:n,onDragEnd(){const K=Math.round(this.rotation/a)*a;At.to(i,{rotation:K,onUpdate:n}),setTimeout(()=>{o=!1},0)}});let l=!1;new IntersectionObserver(K=>{K.forEach(u=>{u.isIntersecting&&!l&&(l=!0,r?(s.progress(1),n()):(s.play(),s.eventCallback("onComplete",n)))})},{threshold:.35}).observe(e)}function id(){const e=document.getElementById("ufo"),i=e==null?void 0:e.parentElement;if(!e||!i)return;const r=20,t=Math.max(r,i.clientWidth-e.offsetWidth-r);e.style.left=`${Math.round(r+Math.random()*(t-r))}px`}var wc="1.3.25";function yW(e,i,r){return Math.max(e,Math.min(i,r))}function rd(e,i,r){return(1-r)*e+r*i}function td(e,i,r,t){return rd(e,i,1-Math.exp(-r*t))}function Ad(e,i){return(e%i+i)%i}var ed=class{constructor(){Gi(this,"isRunning",!1);Gi(this,"value",0);Gi(this,"from",0);Gi(this,"to",0);Gi(this,"currentTime",0);Gi(this,"lerp");Gi(this,"duration");Gi(this,"easing");Gi(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let i=!1;if(this.duration&&this.easing){this.currentTime+=e;const t=yW(0,this.currentTime/this.duration,1);i=t>=1;const A=i?1:this.easing(t);this.value=this.from+(this.to-this.from)*A}else this.lerp?(this.value=td(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,i=!0)):(this.value=this.to,i=!0);i&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,i)}stop(){this.isRunning=!1}fromTo(e,i,{lerp:r,duration:t,easing:A,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=i,this.lerp=r,this.duration=t,this.easing=A,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=o}};function ad(e,i){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(this,t)},i)}}var od=class{constructor(e,i,{autoResize:r=!0,debounce:t=250}={}){Gi(this,"width",0);Gi(this,"height",0);Gi(this,"scrollHeight",0);Gi(this,"scrollWidth",0);Gi(this,"debouncedResize");Gi(this,"wrapperResizeObserver");Gi(this,"contentResizeObserver");Gi(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gi(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gi(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=i,r&&(this.debouncedResize=ad(this.resize,t),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,i;(e=this.wrapperResizeObserver)==null||e.disconnect(),(i=this.contentResizeObserver)==null||i.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},QW=class{constructor(){Gi(this,"events",{})}emit(e,...i){var t;const r=this.events[e]||[];for(let A=0,a=r.length;A<a;A++)(t=r[A])==null||t.call(r,...i)}on(e,i){return this.events[e]?this.events[e].push(i):this.events[e]=[i],()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(t=>i!==t)}}off(e,i){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(t=>i!==t)}destroy(){this.events={}}};const sd=100/6,Ve={passive:!1};function Nc(e,i){return e===1?sd:e===2?i:1}var ld=class{constructor(e,i={wheelMultiplier:1,touchMultiplier:1}){Gi(this,"touchStart",{x:0,y:0});Gi(this,"lastDelta",{x:0,y:0});Gi(this,"window",{width:0,height:0});Gi(this,"emitter",new QW);Gi(this,"onTouchStart",e=>{const{clientX:i,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Gi(this,"onTouchMove",e=>{const{clientX:i,clientY:r}=e.targetTouches?e.targetTouches[0]:e,t=-(i-this.touchStart.x)*this.options.touchMultiplier,A=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:t,y:A},this.emitter.emit("scroll",{deltaX:t,deltaY:A,event:e})});Gi(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Gi(this,"onWheel",e=>{let{deltaX:i,deltaY:r,deltaMode:t}=e;const A=Nc(t,this.window.width),a=Nc(t,this.window.height);i*=A,r*=a,i*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:e})});Gi(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=i,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ve),this.element.addEventListener("touchstart",this.onTouchStart,Ve),this.element.addEventListener("touchmove",this.onTouchMove,Ve),this.element.addEventListener("touchend",this.onTouchEnd,Ve)}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ve),this.element.removeEventListener("touchstart",this.onTouchStart,Ve),this.element.removeEventListener("touchmove",this.onTouchMove,Ve),this.element.removeEventListener("touchend",this.onTouchEnd,Ve)}};const Rc=e=>Math.min(1,1.001-2**(-10*e));var Vd=class{constructor({wrapper:e=window,content:i=document.documentElement,eventsTarget:r=e,smoothWheel:t=!0,syncTouch:A=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:V,lerp:m=.1,infinite:q=!1,orientation:c="vertical",gestureOrientation:n=c==="horizontal"?"both":"vertical",touchMultiplier:l=1,wheelMultiplier:x=1,autoResize:K=!0,prevent:u,virtualScroll:W,overscroll:E=!0,autoRaf:h=!1,anchors:U=!1,autoToggle:N=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:p=!1,naiveDimensions:C=p,stopInertiaOnNavigate:M=!1}={}){Gi(this,"_isScrolling",!1);Gi(this,"_isStopped",!1);Gi(this,"_isLocked",!1);Gi(this,"_preventNextNativeScrollEvent",!1);Gi(this,"_resetVelocityTimeout",null);Gi(this,"_rafId",null);Gi(this,"_isDraggingSelection",!1);Gi(this,"isTouching");Gi(this,"isIos");Gi(this,"time",0);Gi(this,"userData",{});Gi(this,"lastVelocity",0);Gi(this,"velocity",0);Gi(this,"direction",0);Gi(this,"options");Gi(this,"targetScroll");Gi(this,"animatedScroll");Gi(this,"animate",new ed);Gi(this,"emitter",new QW);Gi(this,"dimensions");Gi(this,"virtualScroll");Gi(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Gi(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gi(this,"onTransitionEnd",e=>{var i;(i=e.propertyName)!=null&&i.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()});Gi(this,"onClick",e=>{const i=e.composedPath().filter(t=>t instanceof HTMLAnchorElement&&t.href).map(t=>new URL(t.href)),r=new URL(window.location.href);if(this.options.anchors){const t=i.find(A=>r.host===A.host&&r.pathname===A.pathname&&A.hash);if(t){const A=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(t.hash);this.scrollTo(a,A);return}}if(this.options.stopInertiaOnNavigate&&i.some(t=>r.host===t.host&&r.pathname!==t.pathname)){this.reset();return}});Gi(this,"onPointerDown",e=>{e.button===1&&this.reset()});Gi(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:i,deltaY:r,event:t}=e;if(this.emitter.emit("virtual-scroll",{deltaX:i,deltaY:r,event:t}),t.ctrlKey||t.lenisStopPropagation)return;const A=t.type.includes("touch"),a=t.type.includes("wheel");if(A&&this.isIos&&(t.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(t)),this._isDraggingSelection)){t.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=t.type==="touchstart"||t.type==="touchmove";const o=i===0&&r===0;if(this.options.syncTouch&&A&&t.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const s=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&i===0;if(o||s)return;let V=t.composedPath();V=V.slice(0,V.indexOf(this.rootElement));const m=this.options.prevent,q=Math.abs(i)>=Math.abs(r)?"horizontal":"vertical";if(V.find(x=>{var K,u,W,E,h;return x instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(x))||((K=x.hasAttribute)==null?void 0:K.call(x,"data-lenis-prevent"))||q==="vertical"&&((u=x.hasAttribute)==null?void 0:u.call(x,"data-lenis-prevent-vertical"))||q==="horizontal"&&((W=x.hasAttribute)==null?void 0:W.call(x,"data-lenis-prevent-horizontal"))||A&&((E=x.hasAttribute)==null?void 0:E.call(x,"data-lenis-prevent-touch"))||a&&((h=x.hasAttribute)==null?void 0:h.call(x,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(x,{deltaX:i,deltaY:r}))}))return;if(this.isStopped||this.isLocked){t.cancelable&&t.preventDefault();return}if(!(this.options.syncTouch&&A||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),t.lenisStopPropagation=!0;return}let c=r;this.options.gestureOrientation==="both"?c=Math.abs(r)>Math.abs(i)?r:i:this.options.gestureOrientation==="horizontal"&&(c=i),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(t.lenisStopPropagation=!0),t.cancelable&&t.preventDefault();const n=A&&this.options.syncTouch,l=A&&t.type==="touchend";l&&(c=Math.sign(c)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+c,{programmatic:!1,...n?{lerp:l?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gi(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gi(this,"raf",e=>{const i=e-(this.time||e);this.time=e,this.animate.advance(i*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wc,window.lenis||(window.lenis={}),window.lenis.version=wc,c==="horizontal"&&(window.lenis.horizontal=!0),A===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s=="number"&&typeof V!="function"?V=Rc:typeof V=="function"&&typeof s!="number"&&(s=1),this.options={wrapper:e,content:i,eventsTarget:r,smoothWheel:t,syncTouch:A,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:V,lerp:m,infinite:q,gestureOrientation:n,orientation:c,touchMultiplier:l,wheelMultiplier:x,autoResize:K,prevent:u,virtualScroll:W,overscroll:E,autoRaf:h,anchors:U,autoToggle:N,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:M},this.dimensions=new od(e,i,{autoResize:K}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ld(r,{touchMultiplier:l,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,i){return this.emitter.on(e,i)}off(e,i){return this.emitter.off(e,i)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}isTouchOnSelectionHandle(e){const i=window.getSelection();if(!i||i.isCollapsed||i.rangeCount===0)return!1;const r=e.targetTouches[0]??e.changedTouches[0];if(!r)return!1;const t=i.getRangeAt(0).getClientRects();if(t.length===0)return!1;const A=t[0],a=t[t.length-1],o=40,s=Math.hypot(r.clientX-A.left,r.clientY-A.top)<=o,V=Math.hypot(r.clientX-a.right,r.clientY-a.bottom)<=o;return s||V}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:i=0,immediate:r=!1,lock:t=!1,programmatic:A=!0,lerp:a=A?this.options.lerp:void 0,duration:o=A?this.options.duration:void 0,easing:s=A?this.options.easing:void 0,onStart:V,onComplete:m,force:q=!1,userData:c}={}){if((this.isStopped||this.isLocked)&&!q)return;let n=e,l=i;if(typeof n=="string"&&["top","left","start","#"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let x=null;if(typeof n=="string"?(x=n.startsWith("#")?document.getElementById(n.slice(1)):document.querySelector(n),x||(n==="#top"?n=0:console.warn("Lenis: Target not found",n))):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(x=n),x){if(this.options.wrapper!==window){const U=this.rootElement.getBoundingClientRect();l-=this.isHorizontal?U.left:U.top}const K=x.getBoundingClientRect(),u=getComputedStyle(x),W=this.isHorizontal?Number.parseFloat(u.scrollMarginLeft):Number.parseFloat(u.scrollMarginTop),E=getComputedStyle(this.rootElement),h=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);n=(this.isHorizontal?K.left:K.top)+this.animatedScroll-(Number.isNaN(W)?0:W)-(Number.isNaN(h)?0:h)}}if(typeof n=="number"){if(n+=l,this.options.infinite){if(A){this.targetScroll=this.animatedScroll=this.scroll;const x=n-this.animatedScroll;x>this.limit/2?n-=this.limit:x<-this.limit/2&&(n+=this.limit)}}else n=yW(0,n,this.limit);if(n===this.targetScroll){V==null||V(this),m==null||m(this);return}if(this.userData=c??{},r){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}A||(this.targetScroll=n),typeof o=="number"&&typeof s!="function"?s=Rc:typeof s=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,n,{duration:o,easing:s,lerp:a,onStart:()=>{t&&(this.isLocked=!0),this.isScrolling="smooth",V==null||V(this)},onUpdate:(x,K)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),A&&(this.targetScroll=x),K||this.emit(),K&&(this.reset(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:i,deltaY:r}){const t=Date.now();e._lenis||(e._lenis={});const A=e._lenis;let a,o,s,V,m,q,c,n,l,x;if(t-(A.time??0)>2e3){A.time=Date.now();const w=window.getComputedStyle(e);if(A.computedStyle=w,a=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),m=["auto"].includes(w.overscrollBehaviorX),q=["auto"].includes(w.overscrollBehaviorY),A.hasOverflowX=a,A.hasOverflowY=o,!(a||o))return!1;c=e.scrollWidth,n=e.scrollHeight,l=e.clientWidth,x=e.clientHeight,s=c>l,V=n>x,A.isScrollableX=s,A.isScrollableY=V,A.scrollWidth=c,A.scrollHeight=n,A.clientWidth=l,A.clientHeight=x,A.hasOverscrollBehaviorX=m,A.hasOverscrollBehaviorY=q}else s=A.isScrollableX,V=A.isScrollableY,a=A.hasOverflowX,o=A.hasOverflowY,c=A.scrollWidth,n=A.scrollHeight,l=A.clientWidth,x=A.clientHeight,m=A.hasOverscrollBehaviorX,q=A.hasOverscrollBehaviorY;if(!(a&&s||o&&V))return!1;const K=Math.abs(i)>=Math.abs(r)?"horizontal":"vertical";let u,W,E,h,U,N;if(K==="horizontal")u=Math.round(e.scrollLeft),W=c-l,E=i,h=a,U=s,N=m;else if(K==="vertical")u=Math.round(e.scrollTop),W=n-x,E=r,h=o,U=V,N=q;else return!1;return!N&&(u>=W||u<=0)?!0:(E>0?u<W:u>0)&&h&&U}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Ad(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(const e of Array.from(this.rootElement.classList))(e==="lenis"||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}};function md(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;const e=new Vd({duration:1.05,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!0});document.documentElement.style.scrollBehavior="auto";function i(r){e.raf(r),requestAnimationFrame(i)}return requestAnimationFrame(i),document.querySelectorAll(".nav__links a, .nav__mark").forEach(r=>{r.addEventListener("click",t=>{const A=r.getAttribute("href");if(!A||!A.startsWith("#"))return;const a=document.querySelector(A);a&&(t.preventDefault(),e.scrollTo(a))})}),e}function BW(e,i=6,r=.35){const t=o=>Math.max(-i,Math.min(i,o*r));let A=null,a=null;e.addEventListener("mouseenter",()=>{A=At.quickTo(e,"x",{duration:.3,ease:"power2.out"}),a=At.quickTo(e,"y",{duration:.3,ease:"power2.out"})}),e.addEventListener("mousemove",o=>{if(!A||!a)return;const s=e.getBoundingClientRect();A(t(o.clientX-(s.left+s.width/2))),a(t(o.clientY-(s.top+s.height/2)))}),e.addEventListener("mouseleave",()=>{A=a=null,At.to(e,{x:0,y:0,duration:.35,ease:"power2.out",overwrite:"auto",clearProps:"transform"})})}const qd=".nav__links a, .inspect, .nav__mark";function nd(){window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll(qd).forEach(e=>BW(e)))}const cd=1.5,ud=24,Cc=6;function Yc(e,i,r){return{x:Math.random()*e,y:r?i+Math.random()*20:Math.random()*i,vy:10+Math.random()*16,amp:6+Math.random()*14,freq:.3+Math.random()*.7,phase:Math.random()*Math.PI*2,size:1+Math.random(),alpha:.15+Math.random()*.35,warm:Math.random()<.5}}const Wd=[{sx:.2,sy:.11,px:0,py:1.7,r:.55,rgb:"116,134,121",a:.07},{sx:.13,sy:.17,px:2.1,py:.6,r:.65,rgb:"68,86,75",a:.1},{sx:.09,sy:.14,px:4,py:3.2,r:.5,rgb:"135,146,123",a:.05},{sx:.16,sy:.08,px:5.3,py:4.4,r:.7,rgb:"27,35,30",a:.1}];function Kd(e){const i=document.createElement("canvas");i.className="veil",i.setAttribute("aria-hidden","true"),e.prepend(i);const r=i.getContext("2d");if(!r)return;const t=document.createElement("canvas"),A=t.getContext("2d");if(!A)return;let a=0,o=0,s=1;function V(){s=Math.min(window.devicePixelRatio||1,cd),a=e.clientWidth,o=e.clientHeight,i.width=Math.max(2,Math.round(a*s)),i.height=Math.max(2,Math.round(o*s)),t.width=Math.max(2,Math.round(a/Cc)),t.height=Math.max(2,Math.round(o/Cc))}V(),new ResizeObserver(V).observe(e);const m=Array.from({length:ud},()=>Yc(a,o,!1));let q=0;function c(u){const W=q?Math.min((u-q)/1e3,.05):.016;q=u;const E=u/1e3;A.clearRect(0,0,t.width,t.height),Wd.forEach(h=>{const U=t.width*(.5+.38*Math.sin(E*h.sx+h.px)),N=t.height*(.5+.34*Math.sin(E*h.sy+h.py)),w=Math.max(t.width,t.height)*h.r,p=A.createRadialGradient(U,N,0,U,N,w);p.addColorStop(0,`rgba(${h.rgb},${h.a})`),p.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=p,A.fillRect(0,0,t.width,t.height)}),r.setTransform(s,0,0,s,0,0),r.clearRect(0,0,a,o),r.drawImage(t,0,0,a,o);for(let h=0;h<m.length;h++){let U=m[h];U.y-=U.vy*W,U.y<-6&&(m[h]=U=Yc(a,o,!0));const N=U.x+Math.sin(E*U.freq*Math.PI*2+U.phase)*U.amp,w=.6+.4*Math.sin(E*7+U.phase*3);r.globalAlpha=Math.min(.5,U.alpha*w),r.fillStyle=U.warm?"#7a4a1a":"#9c3636",r.fillRect(N,U.y,U.size,U.size)}r.globalAlpha=1}let n=0,l=!1;function x(u){c(u),n=requestAnimationFrame(x)}new IntersectionObserver(u=>{u.forEach(W=>{W.isIntersecting&&!l?(l=!0,q=0,n=requestAnimationFrame(x)):!W.isIntersecting&&l&&(l=!1,cancelAnimationFrame(n))})}).observe(e)}function xd(){window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll("#grimoire").forEach(Kd)}const Fd="ABCDEFGHJKLMNPQRSTUVWXYZ#%&/<>*+=$!?23456789",vV=new WeakMap;function hd(e,i,r={}){const t=r.frames??10,A=r.glyphs??Fd,a=vV.get(e);a!==void 0&&window.clearInterval(a);let o=0;const s=window.setInterval(()=>{o++;const V=Math.floor(o/t*i.length);let m="";for(let q=0;q<i.length;q++){const c=i.charAt(q);m+=c===" "||q<V?c:A.charAt(Math.floor(Math.random()*A.length))}e.textContent=m,o>=t&&(e.textContent=i,window.clearInterval(s),vV.delete(e))},40);vV.set(e,s)}function Ed(){document.querySelectorAll(".nav__links a").forEach(e=>{const i=e.textContent||"";e.addEventListener("mouseenter",()=>hd(e,i))})}function Md(e,i){for(var r=0;r<i.length;r++){var t=i[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function Ud(e,i,r){return i&&Md(e.prototype,i),e}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var et,El,It,Ke,xe,$a,gW,Ie,io,SW,fA,nA,TW,OW=function(){return et||typeof window<"u"&&(et=window.gsap)&&et.registerPlugin&&et},jW=1,ja=[],Vr=[],RA=[],Jo=Date.now,$m=function(i,r){return r},Ld=function(){var i=io.core,r=i.bridge||{},t=i._scrollers,A=i._proxies;t.push.apply(t,Vr),A.push.apply(A,RA),Vr=t,RA=A,$m=function(o,s){return r[o](s)}},Ue=function(i,r){return~RA.indexOf(i)&&RA[RA.indexOf(i)+1][r]},Po=function(i){return!!~SW.indexOf(i)},Kt=function(i,r,t,A,a){return i.addEventListener(r,t,{passive:A!==!1,capture:!!a})},Wt=function(i,r,t,A){return i.removeEventListener(r,t,!!A)},Ps="scrollLeft",ks="scrollTop",iq=function(){return fA&&fA.isPressed||Vr.cache++},Tl=function(i,r){var t=function A(a){if(a||a===0){jW&&(It.history.scrollRestoration="manual");var o=fA&&fA.isPressed;a=A.v=Math.round(a)||(fA&&fA.iOS?1:0),i(a),A.cacheID=Vr.cache,o&&$m("ss",a)}else(r||Vr.cache!==A.cacheID||$m("ref"))&&(A.cacheID=Vr.cache,A.v=i());return A.v+A.offset};return t.offset=0,i&&t},Mt={s:Ps,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Tl(function(e){return arguments.length?It.scrollTo(e,vr.sc()):It.pageXOffset||Ke[Ps]||xe[Ps]||$a[Ps]||0})},vr={s:ks,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mt,sc:Tl(function(e){return arguments.length?It.scrollTo(Mt.sc(),e):It.pageYOffset||Ke[ks]||xe[ks]||$a[ks]||0})},Lt=function(i,r){return(r&&r._ctx&&r._ctx.selector||et.utils.toArray)(i)[0]||(typeof i=="string"&&et.config().nullTargetWarn!==!1?console.warn("Element not found:",i):null)},pd=function(i,r){for(var t=r.length;t--;)if(r[t]===i||r[t].contains(i))return!0;return!1},Re=function(i,r){var t=r.s,A=r.sc;Po(i)&&(i=Ke.scrollingElement||xe);var a=Vr.indexOf(i),o=A===vr.sc?1:2;!~a&&(a=Vr.push(i)-1),Vr[a+o]||Kt(i,"scroll",iq);var s=Vr[a+o],V=s||(Vr[a+o]=Tl(Ue(i,t),!0)||(Po(i)?A:Tl(function(m){return arguments.length?i[t]=m:i[t]})));return V.target=i,s||(V.smooth=et.getProperty(i,"scrollBehavior")==="smooth"),V},rq=function(i,r,t){var A=i,a=i,o=Jo(),s=o,V=r||50,m=Math.max(500,V*3),q=function(x,K){var u=Jo();K||u-o>V?(a=A,A=x,s=o,o=u):t?A+=x:A=a+(x-a)/(u-s)*(o-s)},c=function(){a=A=t?0:A,s=o=0},n=function(x){var K=s,u=a,W=Jo();return(x||x===0)&&x!==A&&q(x),o===s||W-s>m?0:(A+(t?u:-u))/((t?W:o)-K)*1e3};return{update:q,reset:c,getVelocity:n}},Ro=function(i,r){return r&&!i._gsapAllow&&i.cancelable!==!1&&i.preventDefault(),i.changedTouches?i.changedTouches[0]:i},Xc=function(i){var r=Math.max.apply(Math,i),t=Math.min.apply(Math,i);return Math.abs(r)>=Math.abs(t)?r:t},bW=function(){io=et.core.globals().ScrollTrigger,io&&io.core&&Ld()},IW=function(i){return et=i||OW(),!El&&et&&typeof document<"u"&&document.body&&(It=window,Ke=document,xe=Ke.documentElement,$a=Ke.body,SW=[It,Ke,xe,$a],et.utils.clamp,TW=et.core.context||function(){},Ie="onpointerenter"in $a?"pointer":"mouse",gW=Qr.isTouch=It.matchMedia&&It.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in It||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nA=Qr.eventTypes=("ontouchstart"in xe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jW=0},500),El=1),io||bW(),El};Mt.op=vr;Vr.cache=0;var Qr=function(){function e(r){this.init(r)}var i=e.prototype;return i.init=function(t){El||IW(et)||console.warn("Please gsap.registerPlugin(Observer)"),io||bW();var A=t.tolerance,a=t.dragMinimum,o=t.type,s=t.target,V=t.lineHeight,m=t.debounce,q=t.preventDefault,c=t.onStop,n=t.onStopDelay,l=t.ignore,x=t.wheelSpeed,K=t.event,u=t.onDragStart,W=t.onDragEnd,E=t.onDrag,h=t.onPress,U=t.onRelease,N=t.onRight,w=t.onLeft,p=t.onUp,C=t.onDown,M=t.onChangeX,F=t.onChangeY,R=t.onChange,z=t.onToggleX,D=t.onToggleY,j=t.onHover,f=t.onHoverEnd,T=t.onMove,S=t.ignoreCheck,I=t.isNormalizer,mi=t.onGestureStart,X=t.onGestureEnd,ai=t.onWheel,Ni=t.onEnable,Si=t.onDisable,J=t.onClick,oi=t.scrollSpeed,Wi=t.capture,Ki=t.allowClicks,Li=t.lockAxis,Oi=t.onLockAxis;this.target=s=Lt(s)||xe,this.vars=t,l&&(l=et.utils.toArray(l)),A=A||1e-9,a=a||0,x=x||1,oi=oi||1,o=o||"wheel,touch,pointer",m=m!==!1,V||(V=parseFloat(It.getComputedStyle($a).lineHeight)||22);var Ji,ir,Z,Ti,Xi,hi,Ci,b=this,Zi=0,vi=0,Y=t.passive||!q&&t.passive!==!1,L=Re(s,Mt),v=Re(s,vr),li=L(),Vi=v(),Ai=~o.indexOf("touch")&&!~o.indexOf("pointer")&&nA[0]==="pointerdown",Yi=Po(s),qi=s.ownerDocument||Ke,Ei=[0,0,0],Hi=[0,0,0],ci=0,Ri=function(){return ci=Jo()},bi=function(P,si){return(b.event=P)&&l&&pd(P.target,l)||si&&Ai&&P.pointerType!=="touch"||S&&S(P,si)},Pi=function(){b._vx.reset(),b._vy.reset(),ir.pause(),c&&c(b)},pi=function(){var P=b.deltaX=Xc(Ei),si=b.deltaY=Xc(Hi),k=Math.abs(P)>=A,xi=Math.abs(si)>=A;R&&(k||xi)&&R(b,P,si,Ei,Hi),k&&(N&&b.deltaX>0&&N(b),w&&b.deltaX<0&&w(b),M&&M(b),z&&b.deltaX<0!=Zi<0&&z(b),Zi=b.deltaX,Ei[0]=Ei[1]=Ei[2]=0),xi&&(C&&b.deltaY>0&&C(b),p&&b.deltaY<0&&p(b),F&&F(b),D&&b.deltaY<0!=vi<0&&D(b),vi=b.deltaY,Hi[0]=Hi[1]=Hi[2]=0),(Ti||Z)&&(T&&T(b),Z&&(u&&Z===1&&u(b),E&&E(b),Z=0),Ti=!1),hi&&!(hi=!1)&&Oi&&Oi(b),Xi&&(ai(b),Xi=!1),Ji=0},fi=function(P,si,k){Ei[k]+=P,Hi[k]+=si,b._vx.update(P),b._vy.update(si),m?Ji||(Ji=requestAnimationFrame(pi)):pi()},_i=function(P,si){Li&&!Ci&&(b.axis=Ci=Math.abs(P)>Math.abs(si)?"x":"y",hi=!0),Ci!=="y"&&(Ei[2]+=P,b._vx.update(P,!0)),Ci!=="x"&&(Hi[2]+=si,b._vy.update(si,!0)),m?Ji||(Ji=requestAnimationFrame(pi)):pi()},Kr=function(P){if(!bi(P,1)){P=Ro(P,q);var si=P.clientX,k=P.clientY,xi=si-b.x,ei=k-b.y,di=b.isDragging;b.x=si,b.y=k,(di||(xi||ei)&&(Math.abs(b.startX-si)>=a||Math.abs(b.startY-k)>=a))&&(Z||(Z=di?2:1),di||(b.isDragging=!0),_i(xi,ei))}},y=b.onPress=function(B){bi(B,1)||B&&B.button||(b.axis=Ci=null,ir.pause(),b.isPressed=!0,B=Ro(B),Zi=vi=0,b.startX=b.x=B.clientX,b.startY=b.y=B.clientY,b._vx.reset(),b._vy.reset(),Kt(I?s:qi,nA[1],Kr,Y,!0),b.deltaX=b.deltaY=0,h&&h(b))},ii=b.onRelease=function(B){if(!bi(B,1)){Wt(I?s:qi,nA[1],Kr,!0);var P=!isNaN(b.y-b.startY),si=b.isDragging,k=si&&(Math.abs(b.x-b.startX)>3||Math.abs(b.y-b.startY)>3),xi=Ro(B);!k&&P&&(b._vx.reset(),b._vy.reset(),q&&Ki&&et.delayedCall(.08,function(){if(Jo()-ci>300&&!B.defaultPrevented){if(B.target.click)B.target.click();else if(qi.createEvent){var ei=qi.createEvent("MouseEvents");ei.initMouseEvent("click",!0,!0,It,1,xi.screenX,xi.screenY,xi.clientX,xi.clientY,!1,!1,!1,!1,0,null),B.target.dispatchEvent(ei)}}})),b.isDragging=b.isGesturing=b.isPressed=!1,c&&si&&!I&&ir.restart(!0),Z&&pi(),W&&si&&W(b),U&&U(b,k)}},ti=function(P){return P.touches&&P.touches.length>1&&(b.isGesturing=!0)&&mi(P,b.isDragging)},ri=function(){return(b.isGesturing=!1)||X(b)},ui=function(P){if(!bi(P)){var si=L(),k=v();fi((si-li)*oi,(k-Vi)*oi,1),li=si,Vi=k,c&&ir.restart(!0)}},gi=function(P){if(!bi(P)){P=Ro(P,q),ai&&(Xi=!0);var si=(P.deltaMode===1?V:P.deltaMode===2?It.innerHeight:1)*x;fi(P.deltaX*si,P.deltaY*si,0),c&&!I&&ir.restart(!0)}},rr=function(P){if(!bi(P)){var si=P.clientX,k=P.clientY,xi=si-b.x,ei=k-b.y;b.x=si,b.y=k,Ti=!0,c&&ir.restart(!0),(xi||ei)&&_i(xi,ei)}},Fi=function(P){b.event=P,j(b)},G=function(P){b.event=P,f(b)},$=function(P){return bi(P)||Ro(P,q)&&J(b)};ir=b._dc=et.delayedCall(n||.25,Pi).pause(),b.deltaX=b.deltaY=0,b._vx=rq(0,50,!0),b._vy=rq(0,50,!0),b.scrollX=L,b.scrollY=v,b.isDragging=b.isGesturing=b.isPressed=!1,TW(this),b.enable=function(B){return b.isEnabled||(Kt(Yi?qi:s,"scroll",iq),o.indexOf("scroll")>=0&&Kt(Yi?qi:s,"scroll",ui,Y,Wi),o.indexOf("wheel")>=0&&Kt(s,"wheel",gi,Y,Wi),(o.indexOf("touch")>=0&&gW||o.indexOf("pointer")>=0)&&(Kt(s,nA[0],y,Y,Wi),Kt(qi,nA[2],ii),Kt(qi,nA[3],ii),Ki&&Kt(s,"click",Ri,!0,!0),J&&Kt(s,"click",$),mi&&Kt(qi,"gesturestart",ti),X&&Kt(qi,"gestureend",ri),j&&Kt(s,Ie+"enter",Fi),f&&Kt(s,Ie+"leave",G),T&&Kt(s,Ie+"move",rr)),b.isEnabled=!0,b.isDragging=b.isGesturing=b.isPressed=Ti=Z=!1,b._vx.reset(),b._vy.reset(),li=L(),Vi=v(),B&&B.type&&y(B),Ni&&Ni(b)),b},b.disable=function(){b.isEnabled&&(ja.filter(function(B){return B!==b&&Po(B.target)}).length||Wt(Yi?qi:s,"scroll",iq),b.isPressed&&(b._vx.reset(),b._vy.reset(),Wt(I?s:qi,nA[1],Kr,!0)),Wt(Yi?qi:s,"scroll",ui,Wi),Wt(s,"wheel",gi,Wi),Wt(s,nA[0],y,Wi),Wt(qi,nA[2],ii),Wt(qi,nA[3],ii),Wt(s,"click",Ri,!0),Wt(s,"click",$),Wt(qi,"gesturestart",ti),Wt(qi,"gestureend",ri),Wt(s,Ie+"enter",Fi),Wt(s,Ie+"leave",G),Wt(s,Ie+"move",rr),b.isEnabled=b.isPressed=b.isDragging=!1,Si&&Si(b))},b.kill=b.revert=function(){b.disable();var B=ja.indexOf(b);B>=0&&ja.splice(B,1),fA===b&&(fA=0)},ja.push(b),I&&Po(s)&&(fA=b),b.enable(K)},Ud(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e}();Qr.version="3.15.0";Qr.create=function(e){return new Qr(e)};Qr.register=IW;Qr.getAll=function(){return ja.slice()};Qr.getById=function(e){return ja.filter(function(i){return i.vars.id===e})[0]};OW()&&et.registerPlugin(Qr);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qi,Ba,lr,Lr,Tt,Mr,Tq,Ol,Ws,ko,Qo,_s,lt,$l,tq,ht,Zc,Gc,ga,vW,HV,HW,Ft,Aq,fW,JW,me,eq,Oq,ro,jq,_o,aq,fV,$s=1,Vt=Date.now,JV=Vt(),sA=0,Bo=0,zc=function(i,r,t){var A=Bt(i)&&(i.substr(0,6)==="clamp("||i.indexOf("max")>-1);return t["_"+r+"Clamp"]=A,A?i.substr(6,i.length-7):i},Dc=function(i,r){return r&&(!Bt(i)||i.substr(0,6)!=="clamp(")?"clamp("+i+")":i},dd=function e(){return Bo&&requestAnimationFrame(e)},yc=function(){return $l=1},Qc=function(){return $l=0},MA=function(i){return i},go=function(i){return Math.round(i*1e5)/1e5||0},PW=function(){return typeof window<"u"},kW=function(){return Qi||PW()&&(Qi=window.gsap)&&Qi.registerPlugin&&Qi},ma=function(i){return!!~Tq.indexOf(i)},_W=function(i){return(i==="Height"?jq:lr["inner"+i])||Tt["client"+i]||Mr["client"+i]},$W=function(i){return Ue(i,"getBoundingClientRect")||(ma(i)?function(){return dl.width=lr.innerWidth,dl.height=jq,dl}:function(){return jA(i)})},wd=function(i,r,t){var A=t.d,a=t.d2,o=t.a;return(o=Ue(i,"getBoundingClientRect"))?function(){return o()[A]}:function(){return(r?_W(a):i["client"+a])||0}},Nd=function(i,r){return!r||~RA.indexOf(i)?$W(i):function(){return dl}},wA=function(i,r){var t=r.s,A=r.d2,a=r.d,o=r.a;return Math.max(0,(t="scroll"+A)&&(o=Ue(i,t))?o()-$W(i)()[a]:ma(i)?(Tt[t]||Mr[t])-_W(A):i[t]-i["offset"+A])},il=function(i,r){for(var t=0;t<ga.length;t+=3)(!r||~r.indexOf(ga[t+1]))&&i(ga[t],ga[t+1],ga[t+2])},Bt=function(i){return typeof i=="string"},qt=function(i){return typeof i=="function"},So=function(i){return typeof i=="number"},ve=function(i){return typeof i=="object"},Co=function(i,r,t){return i&&i.progress(r?0:1)&&t&&i.pause()},Da=function(i,r,t){if(i.enabled){var A=i._ctx?i._ctx.add(function(){return r(i,t)}):r(i,t);A&&A.totalTime&&(i.callbackAnimation=A)}},ya=Math.abs,iK="left",rK="top",bq="right",Iq="bottom",aa="width",oa="height",$o="Right",is="Left",rs="Top",ts="Bottom",Tr="padding",AA="margin",uo="Width",vq="Height",br="px",eA=function(i){return lr.getComputedStyle(i.nodeType===Node.DOCUMENT_NODE?i.scrollingElement:i)},Rd=function(i){var r=eA(i).position;i.style.position=r==="absolute"||r==="fixed"?r:"relative"},Bc=function(i,r){for(var t in r)t in i||(i[t]=r[t]);return i},jA=function(i,r){var t=r&&eA(i)[tq]!=="matrix(1, 0, 0, 1, 0, 0)"&&Qi.to(i,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),A=i.getBoundingClientRect?i.getBoundingClientRect():i.scrollingElement.getBoundingClientRect();return t&&t.progress(0).kill(),A},jl=function(i,r){var t=r.d2;return i["offset"+t]||i["client"+t]||0},tK=function(i){var r=[],t=i.labels,A=i.duration(),a;for(a in t)r.push(t[a]/A);return r},Cd=function(i){return function(r){return Qi.utils.snap(tK(i),r)}},Hq=function(i){var r=Qi.utils.snap(i),t=Array.isArray(i)&&i.slice(0).sort(function(A,a){return A-a});return t?function(A,a,o){o===void 0&&(o=.001);var s;if(!a)return r(A);if(a>0){for(A-=o,s=0;s<t.length;s++)if(t[s]>=A)return t[s];return t[s-1]}else for(s=t.length,A+=o;s--;)if(t[s]<=A)return t[s];return t[0]}:function(A,a,o){o===void 0&&(o=.001);var s=r(A);return!a||Math.abs(s-A)<o||s-A<0==a<0?s:r(a<0?A-i:A+i)}},Yd=function(i){return function(r,t){return Hq(tK(i))(r,t.direction)}},rl=function(i,r,t,A){return t.split(",").forEach(function(a){return i(r,a,A)})},_r=function(i,r,t,A,a){return i.addEventListener(r,t,{passive:!A,capture:!!a})},kr=function(i,r,t,A){return i.removeEventListener(r,t,!!A)},tl=function(i,r,t){t=t&&t.wheelHandler,t&&(i(r,"wheel",t),i(r,"touchmove",t))},gc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Al={toggleActions:"play",anticipatePin:0},bl={top:0,left:0,center:.5,bottom:1,right:1},Ml=function(i,r){if(Bt(i)){var t=i.indexOf("="),A=~t?+(i.charAt(t-1)+1)*parseFloat(i.substr(t+1)):0;~t&&(i.indexOf("%")>t&&(A*=r/100),i=i.substr(0,t-1)),i=A+(i in bl?bl[i]*r:~i.indexOf("%")?parseFloat(i)*r/100:parseFloat(i)||0)}return i},el=function(i,r,t,A,a,o,s,V){var m=a.startColor,q=a.endColor,c=a.fontSize,n=a.indent,l=a.fontWeight,x=Lr.createElement("div"),K=ma(t)||Ue(t,"pinType")==="fixed",u=i.indexOf("scroller")!==-1,W=K?Mr:t.tagName==="IFRAME"?t.contentDocument.body:t,E=i.indexOf("start")!==-1,h=E?m:q,U="border-color:"+h+";font-size:"+c+";color:"+h+";font-weight:"+l+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return U+="position:"+((u||V)&&K?"fixed;":"absolute;"),(u||V||!K)&&(U+=(A===vr?bq:Iq)+":"+(o+parseFloat(n))+"px;"),s&&(U+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),x._isStart=E,x.setAttribute("class","gsap-marker-"+i+(r?" marker-"+r:"")),x.style.cssText=U,x.innerText=r||r===0?i+"-"+r:i,W.children[0]?W.insertBefore(x,W.children[0]):W.appendChild(x),x._offset=x["offset"+A.op.d2],Ul(x,0,A,E),x},Ul=function(i,r,t,A){var a={display:"block"},o=t[A?"os2":"p2"],s=t[A?"p2":"os2"];i._isFlipped=A,a[t.a+"Percent"]=A?-100:0,a[t.a]=A?"1px":0,a["border"+o+uo]=1,a["border"+s+uo]=0,a[t.p]=r+"px",Qi.set(i,a)},or=[],oq={},Ks,Sc=function(){return Vt()-sA>34&&(Ks||(Ks=requestAnimationFrame(PA)))},Qa=function(){(!Ft||!Ft.isPressed||Ft.startX>Mr.clientWidth)&&(Vr.cache++,Ft?Ks||(Ks=requestAnimationFrame(PA)):PA(),sA||na("scrollStart"),sA=Vt())},PV=function(){JW=lr.innerWidth,fW=lr.innerHeight},To=function(i){Vr.cache++,(i===!0||!lt&&!HW&&!Lr.fullscreenElement&&!Lr.webkitFullscreenElement&&(!Aq||JW!==lr.innerWidth||Math.abs(lr.innerHeight-fW)>lr.innerHeight*.25))&&Ol.restart(!0)},qa={},Xd=[],AK=function e(){return kr(tr,"scrollEnd",e)||_e(!0)},na=function(i){return qa[i]&&qa[i].map(function(r){return r()})||Xd},Qt=[],eK=function(i){for(var r=0;r<Qt.length;r+=5)(!i||Qt[r+4]&&Qt[r+4].query===i)&&(Qt[r].style.cssText=Qt[r+1],Qt[r].getBBox&&Qt[r].setAttribute("transform",Qt[r+2]||""),Qt[r+3].uncache=1)},aK=function(){return Vr.forEach(function(i){return qt(i)&&++i.cacheID&&(i.rec=i())})},fq=function(i,r){var t;for(ht=0;ht<or.length;ht++)t=or[ht],t&&(!r||t._ctx===r)&&(i?t.kill(1):t.revert(!0,!0));_o=!0,r&&eK(r),r||na("revert")},oK=function(i,r){Vr.cache++,(r||!Et)&&Vr.forEach(function(t){return qt(t)&&t.cacheID++&&(t.rec=0)}),Bt(i)&&(lr.history.scrollRestoration=Oq=i)},Et,sa=0,Tc,Zd=function(){if(Tc!==sa){var i=Tc=sa;requestAnimationFrame(function(){return i===sa&&_e(!0)})}},sK=function(){Mr.appendChild(ro),jq=!Ft&&ro.offsetHeight||lr.innerHeight,Mr.removeChild(ro)},Oc=function(i){return Ws(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=i?"none":"block"})},_e=function(i,r){if(Tt=Lr.documentElement,Mr=Lr.body,Tq=[lr,Lr,Tt,Mr],sA&&!i&&!_o){_r(tr,"scrollEnd",AK);return}sK(),Et=tr.isRefreshing=!0,_o||aK();var t=na("refreshInit");vW&&tr.sort(),r||fq(),Vr.forEach(function(A){qt(A)&&(A.smooth&&(A.target.style.scrollBehavior="auto"),A(0))}),or.slice(0).forEach(function(A){return A.refresh()}),_o=!1,or.forEach(function(A){if(A._subPinOffset&&A.pin){var a=A.vars.horizontal?"offsetWidth":"offsetHeight",o=A.pin[a];A.revert(!0,1),A.adjustPinSpacing(A.pin[a]-o),A.refresh()}}),aq=1,Oc(!0),or.forEach(function(A){var a=wA(A.scroller,A._dir),o=A.vars.end==="max"||A._endClamp&&A.end>a,s=A._startClamp&&A.start>=a;(o||s)&&A.setPositions(s?a-1:A.start,o?Math.max(s?a:A.start+1,a):A.end,!0)}),Oc(!1),aq=0,t.forEach(function(A){return A&&A.render&&A.render(-1)}),Vr.forEach(function(A){qt(A)&&(A.smooth&&requestAnimationFrame(function(){return A.target.style.scrollBehavior="smooth"}),A.rec&&A(A.rec))}),oK(Oq,1),Ol.pause(),sa++,Et=2,PA(2),or.forEach(function(A){return qt(A.vars.onRefresh)&&A.vars.onRefresh(A)}),Et=tr.isRefreshing=!1,na("refresh")},sq=0,Ll=1,As,PA=function(i){if(i===2||!Et&&!_o){tr.isUpdating=!0,As&&As.update(0);var r=or.length,t=Vt(),A=t-JV>=50,a=r&&or[0].scroll();if(Ll=sq>a?-1:1,Et||(sq=a),A&&(sA&&!$l&&t-sA>200&&(sA=0,na("scrollEnd")),Qo=JV,JV=t),Ll<0){for(ht=r;ht-- >0;)or[ht]&&or[ht].update(0,A);Ll=1}else for(ht=0;ht<r;ht++)or[ht]&&or[ht].update(0,A);tr.isUpdating=!1}Ks=0},lq=[iK,rK,Iq,bq,AA+ts,AA+$o,AA+rs,AA+is,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],pl=lq.concat([aa,oa,"boxSizing","max"+uo,"max"+vq,"position",AA,Tr,Tr+rs,Tr+$o,Tr+ts,Tr+is]),Gd=function(i,r,t){to(t);var A=i._gsap;if(A.spacerIsNative)to(A.spacerState);else if(i._gsap.swappedIn){var a=r.parentNode;a&&(a.insertBefore(i,r),a.removeChild(r))}i._gsap.swappedIn=!1},kV=function(i,r,t,A){if(!i._gsap.swappedIn){for(var a=lq.length,o=r.style,s=i.style,V;a--;)V=lq[a],o[V]=t[V];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),s[Iq]=s[bq]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[aa]=jl(i,Mt)+br,o[oa]=jl(i,vr)+br,o[Tr]=s[AA]=s[rK]=s[iK]="0",to(A),s[aa]=s["max"+uo]=t[aa],s[oa]=s["max"+vq]=t[oa],s[Tr]=t[Tr],i.parentNode!==r&&(i.parentNode.insertBefore(r,i),r.appendChild(i)),i._gsap.swappedIn=!0}},zd=/([A-Z])/g,to=function(i){if(i){var r=i.t.style,t=i.length,A=0,a,o;for((i.t._gsap||Qi.core.getCache(i.t)).uncache=1;A<t;A+=2)o=i[A+1],a=i[A],o?r[a]=o:r[a]&&r.removeProperty(a.replace(zd,"-$1").toLowerCase())}},al=function(i){for(var r=pl.length,t=i.style,A=[],a=0;a<r;a++)A.push(pl[a],t[pl[a]]);return A.t=i,A},Dd=function(i,r,t){for(var A=[],a=i.length,o=t?8:0,s;o<a;o+=2)s=i[o],A.push(s,s in r?r[s]:i[o+1]);return A.t=i.t,A},dl={left:0,top:0},jc=function(i,r,t,A,a,o,s,V,m,q,c,n,l,x){qt(i)&&(i=i(V)),Bt(i)&&i.substr(0,3)==="max"&&(i=n+(i.charAt(4)==="="?Ml("0"+i.substr(3),t):0));var K=l?l.time():0,u,W,E;if(l&&l.seek(0),isNaN(i)||(i=+i),So(i))l&&(i=Qi.utils.mapRange(l.scrollTrigger.start,l.scrollTrigger.end,0,n,i)),s&&Ul(s,t,A,!0);else{qt(r)&&(r=r(V));var h=(i||"0").split(" "),U,N,w,p;E=Lt(r,V)||Mr,U=jA(E)||{},(!U||!U.left&&!U.top)&&eA(E).display==="none"&&(p=E.style.display,E.style.display="block",U=jA(E),p?E.style.display=p:E.style.removeProperty("display")),N=Ml(h[0],U[A.d]),w=Ml(h[1]||"0",t),i=U[A.p]-m[A.p]-q+N+a-w,s&&Ul(s,w,A,t-w<20||s._isStart&&w>20),t-=t-w}if(x&&(V[x]=i||-.001,i<0&&(i=0)),o){var C=i+t,M=o._isStart;u="scroll"+A.d2,Ul(o,C,A,M&&C>20||!M&&(c?Math.max(Mr[u],Tt[u]):o.parentNode[u])<=C+1),c&&(m=jA(s),c&&(o.style[A.op.p]=m[A.op.p]-A.op.m-o._offset+br))}return l&&E&&(u=jA(E),l.seek(n),W=jA(E),l._caScrollDist=u[A.p]-W[A.p],i=i/l._caScrollDist*n),l&&l.seek(K),l?i:Math.round(i)},yd=/(webkit|moz|length|cssText|inset)/i,bc=function(i,r,t,A){if(i.parentNode!==r){var a=i.style,o,s;if(r===Mr){i._stOrig=a.cssText,s=eA(i);for(o in s)!+o&&!yd.test(o)&&s[o]&&typeof a[o]=="string"&&o!=="0"&&(a[o]=s[o]);a.top=t,a.left=A}else a.cssText=i._stOrig;Qi.core.getCache(i).uncache=1,r.appendChild(i)}},lK=function(i,r,t){var A=r,a=A;return function(o){var s=Math.round(i());return s!==A&&s!==a&&Math.abs(s-A)>3&&Math.abs(s-a)>3&&(o=s,t&&t()),a=A,A=Math.round(o),A}},ol=function(i,r,t){var A={};A[r.p]="+="+t,Qi.set(i,A)},Ic=function(i,r){var t=Re(i,r),A="_scroll"+r.p2,a=function o(s,V,m,q,c){var n=o.tween,l=V.onComplete,x={};m=m||t();var K=lK(t,m,function(){n.kill(),o.tween=0});return c=q&&c||0,q=q||s-m,n&&n.kill(),V[A]=s,V.inherit=!1,V.modifiers=x,x[A]=function(){return K(m+q*n.ratio+c*n.ratio*n.ratio)},V.onUpdate=function(){Vr.cache++,o.tween&&PA()},V.onComplete=function(){o.tween=0,l&&l.call(n)},n=o.tween=Qi.to(i,V),n};return i[A]=t,t.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},_r(i,"wheel",t.wheelHandler),tr.isTouch&&_r(i,"touchmove",t.wheelHandler),a},tr=function(){function e(r,t){Ba||e.register(Qi)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eq(this),this.init(r,t)}var i=e.prototype;return i.init=function(t,A){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bo){this.update=this.refresh=this.kill=MA;return}t=Bc(Bt(t)||So(t)||t.nodeType?{trigger:t}:t,Al);var a=t,o=a.onUpdate,s=a.toggleClass,V=a.id,m=a.onToggle,q=a.onRefresh,c=a.scrub,n=a.trigger,l=a.pin,x=a.pinSpacing,K=a.invalidateOnRefresh,u=a.anticipatePin,W=a.onScrubComplete,E=a.onSnapComplete,h=a.once,U=a.snap,N=a.pinReparent,w=a.pinSpacer,p=a.containerAnimation,C=a.fastScrollEnd,M=a.preventOverlaps,F=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Mt:vr,R=!c&&c!==0,z=Lt(t.scroller||lr),D=Qi.core.getCache(z),j=ma(z),f=("pinType"in t?t.pinType:Ue(z,"pinType")||j&&"fixed")==="fixed",T=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],S=R&&t.toggleActions.split(" "),I="markers"in t?t.markers:Al.markers,mi=j?0:parseFloat(eA(z)["border"+F.p2+uo])||0,X=this,ai=t.onRefreshInit&&function(){return t.onRefreshInit(X)},Ni=wd(z,j,F),Si=Nd(z,j),J=0,oi=0,Wi=0,Ki=Re(z,F),Li,Oi,Ji,ir,Z,Ti,Xi,hi,Ci,b,Zi,vi,Y,L,v,li,Vi,Ai,Yi,qi,Ei,Hi,ci,Ri,bi,Pi,pi,fi,_i,Kr,y,ii,ti,ri,ui,gi,rr,Fi,G;if(X._startClamp=X._endClamp=!1,X._dir=F,u*=45,X.scroller=z,X.scroll=p?p.time.bind(p):Ki,ir=Ki(),X.vars=t,A=A||t.animation,"refreshPriority"in t&&(vW=1,t.refreshPriority===-9999&&(As=X)),D.tweenScroll=D.tweenScroll||{top:Ic(z,vr),left:Ic(z,Mt)},X.tweenTo=Li=D.tweenScroll[F.p],X.scrubDuration=function(k){ti=So(k)&&k,ti?ii?ii.duration(k):ii=Qi.to(A,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ti,paused:!0,onComplete:function(){return W&&W(X)}}):(ii&&ii.progress(1).kill(),ii=0)},A&&(A.vars.lazy=!1,A._initted&&!X.isReverted||A.vars.immediateRender!==!1&&t.immediateRender!==!1&&A.duration()&&A.render(0,!0,!0),X.animation=A.pause(),A.scrollTrigger=X,X.scrubDuration(c),Kr=0,V||(V=A.vars.id)),U&&((!ve(U)||U.push)&&(U={snapTo:U}),"scrollBehavior"in Mr.style&&Qi.set(j?[Mr,Tt]:z,{scrollBehavior:"auto"}),Vr.forEach(function(k){return qt(k)&&k.target===(j?Lr.scrollingElement||Tt:z)&&(k.smooth=!1)}),Ji=qt(U.snapTo)?U.snapTo:U.snapTo==="labels"?Cd(A):U.snapTo==="labelsDirectional"?Yd(A):U.directional!==!1?function(k,xi){return Hq(U.snapTo)(k,Vt()-oi<500?0:xi.direction)}:Qi.utils.snap(U.snapTo),ri=U.duration||{min:.1,max:2},ri=ve(ri)?ko(ri.min,ri.max):ko(ri,ri),ui=Qi.delayedCall(U.delay||ti/2||.1,function(){var k=Ki(),xi=Vt()-oi<500,ei=Li.tween;if((xi||Math.abs(X.getVelocity())<10)&&!ei&&!$l&&J!==k){var di=(k-Ti)/L,ji=A&&!R?A.totalProgress():di,zi=xi?0:(ji-y)/(Vt()-Qo)*1e3||0,$i=Qi.utils.clamp(-di,1-di,ya(zi/2)*zi/.185),mr=di+(U.inertia===!1?0:$i),nr,ar,sr=U,hr=sr.onStart,d=sr.onInterrupt,Q=sr.onComplete;if(nr=Ji(mr,X),So(nr)||(nr=mr),ar=Math.max(0,Math.round(Ti+nr*L)),k<=Xi&&k>=Ti&&ar!==k){if(ei&&!ei._initted&&ei.data<=ya(ar-k))return;U.inertia===!1&&($i=nr-di),Li(ar,{duration:ri(ya(Math.max(ya(mr-ji),ya(nr-ji))*.185/zi/.05||0)),ease:U.ease||"power3",data:ya(ar-k),onInterrupt:function(){return ui.restart(!0)&&d&&Da(X,d)},onComplete:function(){X.update(),J=Ki(),A&&!R&&(ii?ii.resetTo("totalProgress",nr,A._tTime/A._tDur):A.progress(nr)),Kr=y=A&&!R?A.totalProgress():X.progress,E&&E(X),Q&&Da(X,Q)}},k,$i*L,ar-k-$i*L),hr&&Da(X,hr,Li.tween)}}else X.isActive&&J!==k&&ui.restart(!0)}).pause()),V&&(oq[V]=X),n=X.trigger=Lt(n||l!==!0&&l),G=n&&n._gsap&&n._gsap.stRevert,G&&(G=G(X)),l=l===!0?n:Lt(l),Bt(s)&&(s={targets:n,className:s}),l&&(x===!1||x===AA||(x=!x&&l.parentNode&&l.parentNode.style&&eA(l.parentNode).display==="flex"?!1:Tr),X.pin=l,Oi=Qi.core.getCache(l),Oi.spacer?v=Oi.pinState:(w&&(w=Lt(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oi.spacerIsNative=!!w,w&&(Oi.spacerState=al(w))),Oi.spacer=Ai=w||Lr.createElement("div"),Ai.classList.add("pin-spacer"),V&&Ai.classList.add("pin-spacer-"+V),Oi.pinState=v=al(l)),t.force3D!==!1&&Qi.set(l,{force3D:!0}),X.spacer=Ai=Oi.spacer,_i=eA(l),Ri=_i[x+F.os2],qi=Qi.getProperty(l),Ei=Qi.quickSetter(l,F.a,br),kV(l,Ai,_i),Vi=al(l)),I){vi=ve(I)?Bc(I,gc):gc,b=el("scroller-start",V,z,F,vi,0),Zi=el("scroller-end",V,z,F,vi,0,b),Yi=b["offset"+F.op.d2];var $=Lt(Ue(z,"content")||z);hi=this.markerStart=el("start",V,$,F,vi,Yi,0,p),Ci=this.markerEnd=el("end",V,$,F,vi,Yi,0,p),p&&(Fi=Qi.quickSetter([hi,Ci],F.a,br)),!f&&!(RA.length&&Ue(z,"fixedMarkers")===!0)&&(Rd(j?Mr:z),Qi.set([b,Zi],{force3D:!0}),Pi=Qi.quickSetter(b,F.a,br),fi=Qi.quickSetter(Zi,F.a,br))}if(p){var B=p.vars.onUpdate,P=p.vars.onUpdateParams;p.eventCallback("onUpdate",function(){X.update(0,0,1),B&&B.apply(p,P||[])})}if(X.previous=function(){return or[or.indexOf(X)-1]},X.next=function(){return or[or.indexOf(X)+1]},X.revert=function(k,xi){if(!xi)return X.kill(!0);var ei=k!==!1||!X.enabled,di=lt;ei!==X.isReverted&&(ei&&(gi=Math.max(Ki(),X.scroll.rec||0),Wi=X.progress,rr=A&&A.progress()),hi&&[hi,Ci,b,Zi].forEach(function(ji){return ji.style.display=ei?"none":"block"}),ei&&(lt=X,X.update(ei)),l&&(!N||!X.isActive)&&(ei?Gd(l,Ai,v):kV(l,Ai,eA(l),bi)),ei||X.update(ei),lt=di,X.isReverted=ei)},X.refresh=function(k,xi,ei,di){if(!((lt||!X.enabled)&&!xi)){if(l&&k&&sA){_r(e,"scrollEnd",AK);return}!Et&&ai&&ai(X),lt=X,Li.tween&&!ei&&(Li.tween.kill(),Li.tween=0),ii&&ii.pause(),K&&A&&(A.revert({kill:!1}).invalidate(),A.getChildren?A.getChildren(!0,!0,!1).forEach(function(Bi){return Bi.vars.immediateRender&&Bi.render(0,!0,!0)}):A.vars.immediateRender&&A.render(0,!0,!0)),X.isReverted||X.revert(!0,!0),X._subPinOffset=!1;var ji=Ni(),zi=Si(),$i=p?p.duration():wA(z,F),mr=L<=.01||!L,nr=0,ar=di||0,sr=ve(ei)?ei.end:t.end,hr=t.endTrigger||n,d=ve(ei)?ei.start:t.start||(t.start===0||!n?0:l?"0 0":"0 100%"),Q=X.pinnedContainer=t.pinnedContainer&&Lt(t.pinnedContainer,X),O=n&&Math.max(0,or.indexOf(X))||0,H=O,g,ni,Mi,yi,Ui,Di,Ii,ki,xr,pr,Fr,jr,cr;for(I&&ve(ei)&&(jr=Qi.getProperty(b,F.p),cr=Qi.getProperty(Zi,F.p));H-- >0;)Di=or[H],Di.end||Di.refresh(0,1)||(lt=X),Ii=Di.pin,Ii&&(Ii===n||Ii===l||Ii===Q)&&!Di.isReverted&&(pr||(pr=[]),pr.unshift(Di),Di.revert(!0,!0)),Di!==or[H]&&(O--,H--);for(qt(d)&&(d=d(X)),d=zc(d,"start",X),Ti=jc(d,n,ji,F,Ki(),hi,b,X,zi,mi,f,$i,p,X._startClamp&&"_startClamp")||(l?-.001:0),qt(sr)&&(sr=sr(X)),Bt(sr)&&!sr.indexOf("+=")&&(~sr.indexOf(" ")?sr=(Bt(d)?d.split(" ")[0]:"")+sr:(nr=Ml(sr.substr(2),ji),sr=Bt(d)?d:(p?Qi.utils.mapRange(0,p.duration(),p.scrollTrigger.start,p.scrollTrigger.end,Ti):Ti)+nr,hr=n)),sr=zc(sr,"end",X),Xi=Math.max(Ti,jc(sr||(hr?"100% 0":$i),hr,ji,F,Ki()+nr,Ci,Zi,X,zi,mi,f,$i,p,X._endClamp&&"_endClamp"))||-.001,nr=0,H=O;H--;)Di=or[H]||{},Ii=Di.pin,Ii&&Di.start-Di._pinPush<=Ti&&!p&&Di.end>0&&(g=Di.end-(X._startClamp?Math.max(0,Di.start):Di.start),(Ii===n&&Di.start-Di._pinPush<Ti||Ii===Q)&&isNaN(d)&&(nr+=g*(1-Di.progress)),Ii===l&&(ar+=g));if(Ti+=nr,Xi+=nr,X._startClamp&&(X._startClamp+=nr),X._endClamp&&!Et&&(X._endClamp=Xi||-.001,Xi=Math.min(Xi,wA(z,F))),L=Xi-Ti||(Ti-=.01)&&.001,mr&&(Wi=Qi.utils.clamp(0,1,Qi.utils.normalize(Ti,Xi,gi))),X._pinPush=ar,hi&&nr&&(g={},g[F.a]="+="+nr,Q&&(g[F.p]="-="+Ki()),Qi.set([hi,Ci],g)),l&&!(aq&&X.end>=wA(z,F)))g=eA(l),yi=F===vr,Mi=Ki(),Hi=parseFloat(qi(F.a))+ar,!$i&&Xi>1&&(Fr=(j?Lr.scrollingElement||Tt:z).style,Fr={style:Fr,value:Fr["overflow"+F.a.toUpperCase()]},j&&eA(Mr)["overflow"+F.a.toUpperCase()]!=="scroll"&&(Fr.style["overflow"+F.a.toUpperCase()]="scroll")),kV(l,Ai,g),Vi=al(l),ni=jA(l,!0),ki=f&&Re(z,yi?Mt:vr)(),x?(bi=[x+F.os2,L+ar+br],bi.t=Ai,H=x===Tr?jl(l,F)+L+ar:0,H&&(bi.push(F.d,H+br),Ai.style.flexBasis!=="auto"&&(Ai.style.flexBasis=H+br)),to(bi),Q&&or.forEach(function(Bi){Bi.pin===Q&&Bi.vars.pinSpacing!==!1&&(Bi._subPinOffset=!0)}),f&&Ki(gi)):(H=jl(l,F),H&&Ai.style.flexBasis!=="auto"&&(Ai.style.flexBasis=H+br)),f&&(Ui={top:ni.top+(yi?Mi-Ti:ki)+br,left:ni.left+(yi?ki:Mi-Ti)+br,boxSizing:"border-box",position:"fixed"},Ui[aa]=Ui["max"+uo]=Math.ceil(ni.width)+br,Ui[oa]=Ui["max"+vq]=Math.ceil(ni.height)+br,Ui[AA]=Ui[AA+rs]=Ui[AA+$o]=Ui[AA+ts]=Ui[AA+is]="0",Ui[Tr]=g[Tr],Ui[Tr+rs]=g[Tr+rs],Ui[Tr+$o]=g[Tr+$o],Ui[Tr+ts]=g[Tr+ts],Ui[Tr+is]=g[Tr+is],li=Dd(v,Ui,N),Et&&Ki(0)),A?(xr=A._initted,HV(1),A.render(A.duration(),!0,!0),ci=qi(F.a)-Hi+L+ar,pi=Math.abs(L-ci)>1,f&&pi&&li.splice(li.length-2,2),A.render(0,!0,!0),xr||A.invalidate(!0),A.parent||A.totalTime(A.totalTime()),HV(0)):ci=L,Fr&&(Fr.value?Fr.style["overflow"+F.a.toUpperCase()]=Fr.value:Fr.style.removeProperty("overflow-"+F.a));else if(n&&Ki()&&!p)for(ni=n.parentNode;ni&&ni!==Mr;)ni._pinOffset&&(Ti-=ni._pinOffset,Xi-=ni._pinOffset),ni=ni.parentNode;pr&&pr.forEach(function(Bi){return Bi.revert(!1,!0)}),X.start=Ti,X.end=Xi,ir=Z=Et?gi:Ki(),!p&&!Et&&(ir<gi&&Ki(gi),X.scroll.rec=0),X.revert(!1,!0),oi=Vt(),ui&&(J=-1,ui.restart(!0)),lt=0,A&&R&&(A._initted||rr)&&A.progress()!==rr&&A.progress(rr||0,!0).render(A.time(),!0,!0),(mr||Wi!==X.progress||p||K||A&&!A._initted)&&(A&&!R&&(A._initted||Wi||A.vars.immediateRender!==!1)&&A.totalProgress(p&&Ti<-.001&&!Wi?Qi.utils.normalize(Ti,Xi,0):Wi,!0),X.progress=mr||(ir-Ti)/L===Wi?0:Wi),l&&x&&(Ai._pinOffset=Math.round(X.progress*ci)),ii&&ii.invalidate(),isNaN(jr)||(jr-=Qi.getProperty(b,F.p),cr-=Qi.getProperty(Zi,F.p),ol(b,F,jr),ol(hi,F,jr-(di||0)),ol(Zi,F,cr),ol(Ci,F,cr-(di||0))),mr&&!Et&&X.update(),q&&!Et&&!Y&&(Y=!0,q(X),Y=!1)}},X.getVelocity=function(){return(Ki()-Z)/(Vt()-Qo)*1e3||0},X.endAnimation=function(){Co(X.callbackAnimation),A&&(ii?ii.progress(1):A.paused()?R||Co(A,X.direction<0,1):Co(A,A.reversed()))},X.labelToScroll=function(k){return A&&A.labels&&(Ti||X.refresh()||Ti)+A.labels[k]/A.duration()*L||0},X.getTrailing=function(k){var xi=or.indexOf(X),ei=X.direction>0?or.slice(0,xi).reverse():or.slice(xi+1);return(Bt(k)?ei.filter(function(di){return di.vars.preventOverlaps===k}):ei).filter(function(di){return X.direction>0?di.end<=Ti:di.start>=Xi})},X.update=function(k,xi,ei){if(!(p&&!ei&&!k)){var di=Et===!0?gi:X.scroll(),ji=k?0:(di-Ti)/L,zi=ji<0?0:ji>1?1:ji||0,$i=X.progress,mr,nr,ar,sr,hr,d,Q,O;if(xi&&(Z=ir,ir=p?Ki():di,U&&(y=Kr,Kr=A&&!R?A.totalProgress():zi)),u&&l&&!lt&&!$s&&sA&&(!zi&&Ti<di+(di-Z)/(Vt()-Qo)*u?zi=1e-4:zi===1&&Xi>di+(di-Z)/(Vt()-Qo)*u&&(zi=.9999)),zi!==$i&&X.enabled){if(mr=X.isActive=!!zi&&zi<1,nr=!!$i&&$i<1,d=mr!==nr,hr=d||!!zi!=!!$i,X.direction=zi>$i?1:-1,X.progress=zi,hr&&!lt&&(ar=zi&&!$i?0:zi===1?1:$i===1?2:3,R&&(sr=!d&&S[ar+1]!=="none"&&S[ar+1]||S[ar],O=A&&(sr==="complete"||sr==="reset"||sr in A))),M&&(d||O)&&(O||c||!A)&&(qt(M)?M(X):X.getTrailing(M).forEach(function(Mi){return Mi.endAnimation()})),R||(ii&&!lt&&!$s?(ii._dp._time-ii._start!==ii._time&&ii.render(ii._dp._time-ii._start),ii.resetTo?ii.resetTo("totalProgress",zi,A._tTime/A._tDur):(ii.vars.totalProgress=zi,ii.invalidate().restart())):A&&A.totalProgress(zi,!!(lt&&(oi||k)))),l){if(k&&x&&(Ai.style[x+F.os2]=Ri),!f)Ei(go(Hi+ci*zi));else if(hr){if(Q=!k&&zi>$i&&Xi+1>di&&di+1>=wA(z,F),N)if(!k&&(mr||Q)){var H=jA(l,!0),g=di-Ti;bc(l,Mr,H.top+(F===vr?g:0)+br,H.left+(F===vr?0:g)+br)}else bc(l,Ai);to(mr||Q?li:Vi),pi&&zi<1&&mr||Ei(Hi+(zi===1&&!Q?ci:0))}}U&&!Li.tween&&!lt&&!$s&&ui.restart(!0),s&&(d||h&&zi&&(zi<1||!fV))&&Ws(s.targets).forEach(function(Mi){return Mi.classList[mr||h?"add":"remove"](s.className)}),o&&!R&&!k&&o(X),hr&&!lt?(R&&(O&&(sr==="complete"?A.pause().totalProgress(1):sr==="reset"?A.restart(!0).pause():sr==="restart"?A.restart(!0):A[sr]()),o&&o(X)),(d||!fV)&&(m&&d&&Da(X,m),T[ar]&&Da(X,T[ar]),h&&(zi===1?X.kill(!1,1):T[ar]=0),d||(ar=zi===1?1:3,T[ar]&&Da(X,T[ar]))),C&&!mr&&Math.abs(X.getVelocity())>(So(C)?C:2500)&&(Co(X.callbackAnimation),ii?ii.progress(1):Co(A,sr==="reverse"?1:!zi,1))):R&&o&&!lt&&o(X)}if(fi){var ni=p?di/p.duration()*(p._caScrollDist||0):di;Pi(ni+(b._isFlipped?1:0)),fi(ni)}Fi&&Fi(-di/p.duration()*(p._caScrollDist||0))}},X.enable=function(k,xi){X.enabled||(X.enabled=!0,_r(z,"resize",To),j||_r(z,"scroll",Qa),ai&&_r(e,"refreshInit",ai),k!==!1&&(X.progress=Wi=0,ir=Z=J=Ki()),xi!==!1&&X.refresh())},X.getTween=function(k){return k&&Li?Li.tween:ii},X.setPositions=function(k,xi,ei,di){if(p){var ji=p.scrollTrigger,zi=p.duration(),$i=ji.end-ji.start;k=ji.start+$i*k/zi,xi=ji.start+$i*xi/zi}X.refresh(!1,!1,{start:Dc(k,ei&&!!X._startClamp),end:Dc(xi,ei&&!!X._endClamp)},di),X.update()},X.adjustPinSpacing=function(k){if(bi&&k){var xi=bi.indexOf(F.d)+1;bi[xi]=parseFloat(bi[xi])+k+br,bi[1]=parseFloat(bi[1])+k+br,to(bi)}},X.disable=function(k,xi){if(k!==!1&&X.revert(!0,!0),X.enabled&&(X.enabled=X.isActive=!1,xi||ii&&ii.pause(),gi=0,Oi&&(Oi.uncache=1),ai&&kr(e,"refreshInit",ai),ui&&(ui.pause(),Li.tween&&Li.tween.kill()&&(Li.tween=0)),!j)){for(var ei=or.length;ei--;)if(or[ei].scroller===z&&or[ei]!==X)return;kr(z,"resize",To),j||kr(z,"scroll",Qa)}},X.kill=function(k,xi){X.disable(k,xi),ii&&!xi&&ii.kill(),V&&delete oq[V];var ei=or.indexOf(X);ei>=0&&or.splice(ei,1),ei===ht&&Ll>0&&ht--,ei=0,or.forEach(function(di){return di.scroller===X.scroller&&(ei=1)}),ei||Et||(X.scroll.rec=0),A&&(A.scrollTrigger=null,k&&A.revert({kill:!1}),xi||A.kill()),hi&&[hi,Ci,b,Zi].forEach(function(di){return di.parentNode&&di.parentNode.removeChild(di)}),As===X&&(As=0),l&&(Oi&&(Oi.uncache=1),ei=0,or.forEach(function(di){return di.pin===l&&ei++}),ei||(Oi.spacer=0)),t.onKill&&t.onKill(X)},or.push(X),X.enable(!1,!1),G&&G(X),A&&A.add&&!L){var si=X.update;X.update=function(){X.update=si,Vr.cache++,Ti||Xi||X.refresh()},Qi.delayedCall(.01,X.update),L=.01,Ti=Xi=0}else X.refresh();l&&Zd()},e.register=function(t){return Ba||(Qi=t||kW(),PW()&&window.document&&e.enable(),Ba=Bo),Ba},e.defaults=function(t){if(t)for(var A in t)Al[A]=t[A];return Al},e.disable=function(t,A){Bo=0,or.forEach(function(o){return o[A?"kill":"disable"](t)}),kr(lr,"wheel",Qa),kr(Lr,"scroll",Qa),clearInterval(_s),kr(Lr,"touchcancel",MA),kr(Mr,"touchstart",MA),rl(kr,Lr,"pointerdown,touchstart,mousedown",yc),rl(kr,Lr,"pointerup,touchend,mouseup",Qc),Ol.kill(),il(kr);for(var a=0;a<Vr.length;a+=3)tl(kr,Vr[a],Vr[a+1]),tl(kr,Vr[a],Vr[a+2])},e.enable=function(){if(lr=window,Lr=document,Tt=Lr.documentElement,Mr=Lr.body,Qi){if(Ws=Qi.utils.toArray,ko=Qi.utils.clamp,eq=Qi.core.context||MA,HV=Qi.core.suppressOverwrites||MA,Oq=lr.history.scrollRestoration||"auto",sq=lr.pageYOffset||0,Qi.core.globals("ScrollTrigger",e),Mr){Bo=1,ro=document.createElement("div"),ro.style.height="100vh",ro.style.position="absolute",sK(),dd(),Qr.register(Qi),e.isTouch=Qr.isTouch,me=Qr.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Aq=Qr.isTouch===1,_r(lr,"wheel",Qa),Tq=[lr,Lr,Tt,Mr],Qi.matchMedia?(e.matchMedia=function(q){var c=Qi.matchMedia(),n;for(n in q)c.add(n,q[n]);return c},Qi.addEventListener("matchMediaInit",function(){aK(),fq()}),Qi.addEventListener("matchMediaRevert",function(){return eK()}),Qi.addEventListener("matchMedia",function(){_e(0,1),na("matchMedia")}),Qi.matchMedia().add("(orientation: portrait)",function(){return PV(),PV})):console.warn("Requires GSAP 3.11.0 or later"),PV(),_r(Lr,"scroll",Qa);var t=Mr.hasAttribute("style"),A=Mr.style,a=A.borderTopStyle,o=Qi.core.Animation.prototype,s,V;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),A.borderTopStyle="solid",s=jA(Mr),vr.m=Math.round(s.top+vr.sc())||0,Mt.m=Math.round(s.left+Mt.sc())||0,a?A.borderTopStyle=a:A.removeProperty("border-top-style"),t||(Mr.setAttribute("style",""),Mr.removeAttribute("style")),_s=setInterval(Sc,250),Qi.delayedCall(.5,function(){return $s=0}),_r(Lr,"touchcancel",MA),_r(Mr,"touchstart",MA),rl(_r,Lr,"pointerdown,touchstart,mousedown",yc),rl(_r,Lr,"pointerup,touchend,mouseup",Qc),tq=Qi.utils.checkPrefix("transform"),pl.push(tq),Ba=Vt(),Ol=Qi.delayedCall(.2,_e).pause(),ga=[Lr,"visibilitychange",function(){var q=lr.innerWidth,c=lr.innerHeight;Lr.hidden?(Zc=q,Gc=c):(Zc!==q||Gc!==c)&&To()},Lr,"DOMContentLoaded",_e,lr,"load",_e,lr,"resize",To],il(_r),or.forEach(function(q){return q.enable(0,1)}),V=0;V<Vr.length;V+=3)tl(kr,Vr[V],Vr[V+1]),tl(kr,Vr[V],Vr[V+2])}else if(Lr){var m=function q(){e.enable(),Lr.removeEventListener("DOMContentLoaded",q)};Lr.addEventListener("DOMContentLoaded",m)}}},e.config=function(t){"limitCallbacks"in t&&(fV=!!t.limitCallbacks);var A=t.syncInterval;A&&clearInterval(_s)||(_s=A)&&setInterval(Sc,A),"ignoreMobileResize"in t&&(Aq=e.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(il(kr)||il(_r,t.autoRefreshEvents||"none"),HW=(t.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(t,A){var a=Lt(t),o=Vr.indexOf(a),s=ma(a);~o&&Vr.splice(o,s?6:2),A&&(s?RA.unshift(lr,A,Mr,A,Tt,A):RA.unshift(a,A))},e.clearMatchMedia=function(t){or.forEach(function(A){return A._ctx&&A._ctx.query===t&&A._ctx.kill(!0,!0)})},e.isInViewport=function(t,A,a){var o=(Bt(t)?Lt(t):t).getBoundingClientRect(),s=o[a?aa:oa]*A||0;return a?o.right-s>0&&o.left+s<lr.innerWidth:o.bottom-s>0&&o.top+s<lr.innerHeight},e.positionInViewport=function(t,A,a){Bt(t)&&(t=Lt(t));var o=t.getBoundingClientRect(),s=o[a?aa:oa],V=A==null?s/2:A in bl?bl[A]*s:~A.indexOf("%")?parseFloat(A)*s/100:parseFloat(A)||0;return a?(o.left+V)/lr.innerWidth:(o.top+V)/lr.innerHeight},e.killAll=function(t){if(or.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),t!==!0){var A=qa.killAll||[];qa={},A.forEach(function(a){return a()})}},e}();tr.version="3.15.0";tr.saveStyles=function(e){return e?Ws(e).forEach(function(i){if(i&&i.style){var r=Qt.indexOf(i);r>=0&&Qt.splice(r,5),Qt.push(i,i.style.cssText,i.getBBox&&i.getAttribute("transform"),Qi.core.getCache(i),eq())}}):Qt};tr.revert=function(e,i){return fq(!e,i)};tr.create=function(e,i){return new tr(e,i)};tr.refresh=function(e){return e?To(!0):(Ba||tr.register())&&_e(!0)};tr.update=function(e){return++Vr.cache&&PA(e===!0?2:0)};tr.clearScrollMemory=oK;tr.maxScroll=function(e,i){return wA(e,i?Mt:vr)};tr.getScrollFunc=function(e,i){return Re(Lt(e),i?Mt:vr)};tr.getById=function(e){return oq[e]};tr.getAll=function(){return or.filter(function(e){return e.vars.id!=="ScrollSmoother"})};tr.isScrolling=function(){return!!sA};tr.snapDirectional=Hq;tr.addEventListener=function(e,i){var r=qa[e]||(qa[e]=[]);~r.indexOf(i)||r.push(i)};tr.removeEventListener=function(e,i){var r=qa[e],t=r&&r.indexOf(i);t>=0&&r.splice(t,1)};tr.batch=function(e,i){var r=[],t={},A=i.interval||.016,a=i.batchMax||1e9,o=function(m,q){var c=[],n=[],l=Qi.delayedCall(A,function(){q(c,n),c=[],n=[]}).pause();return function(x){c.length||l.restart(!0),c.push(x.trigger),n.push(x),a<=c.length&&l.progress(1)}},s;for(s in i)t[s]=s.substr(0,2)==="on"&&qt(i[s])&&s!=="onRefreshInit"?o(s,i[s]):i[s];return qt(a)&&(a=a(),_r(tr,"refresh",function(){return a=i.batchMax()})),Ws(e).forEach(function(V){var m={};for(s in t)m[s]=t[s];m.trigger=V,r.push(tr.create(m))}),r};var vc=function(i,r,t,A){return r>A?i(A):r<0&&i(0),t>A?(A-r)/(t-r):t<0?r/(r-t):1},_V=function e(i,r){r===!0?i.style.removeProperty("touch-action"):i.style.touchAction=r===!0?"auto":r?"pan-"+r+(Qr.isTouch?" pinch-zoom":""):"none",i===Tt&&e(Mr,r)},sl={auto:1,scroll:1},Qd=function(i){var r=i.event,t=i.target,A=i.axis,a=(r.changedTouches?r.changedTouches[0]:r).target,o=a._gsap||Qi.core.getCache(a),s=Vt(),V;if(!o._isScrollT||s-o._isScrollT>2e3){for(;a&&a!==Mr&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(sl[(V=eA(a)).overflowY]||sl[V.overflowX]));)a=a.parentNode;o._isScroll=a&&a!==t&&!ma(a)&&(sl[(V=eA(a)).overflowY]||sl[V.overflowX]),o._isScrollT=s}(o._isScroll||A==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},VK=function(i,r,t,A){return Qr.create({target:i,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:A=A&&Qd,onPress:A,onDrag:A,onScroll:A,onEnable:function(){return t&&_r(Lr,Qr.eventTypes[0],fc,!1,!0)},onDisable:function(){return kr(Lr,Qr.eventTypes[0],fc,!0)}})},Bd=/(input|label|select|textarea)/i,Hc,fc=function(i){var r=Bd.test(i.target.tagName);(r||Hc)&&(i._gsapAllow=!0,Hc=r)},gd=function(i){ve(i)||(i={}),i.preventDefault=i.isNormalizer=i.allowClicks=!0,i.type||(i.type="wheel,touch"),i.debounce=!!i.debounce,i.id=i.id||"normalizer";var r=i,t=r.normalizeScrollX,A=r.momentum,a=r.allowNestedScroll,o=r.onRelease,s,V,m=Lt(i.target)||Tt,q=Qi.core.globals().ScrollSmoother,c=q&&q.get(),n=me&&(i.content&&Lt(i.content)||c&&i.content!==!1&&!c.smooth()&&c.content()),l=Re(m,vr),x=Re(m,Mt),K=1,u=(Qr.isTouch&&lr.visualViewport?lr.visualViewport.scale*lr.visualViewport.width:lr.outerWidth)/lr.innerWidth,W=0,E=qt(A)?function(){return A(s)}:function(){return A||2.8},h,U,N=VK(m,i.type,!0,a),w=function(){return U=!1},p=MA,C=MA,M=function(){V=wA(m,vr),C=ko(me?1:0,V),t&&(p=ko(0,wA(m,Mt))),h=sa},F=function(){n._gsap.y=go(parseFloat(n._gsap.y)+l.offset)+"px",n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(n._gsap.y)+", 0, 1)",l.offset=l.cacheID=0},R=function(){if(U){requestAnimationFrame(w);var I=go(s.deltaY/2),mi=C(l.v-I);if(n&&mi!==l.v+l.offset){l.offset=mi-l.v;var X=go((parseFloat(n&&n._gsap.y)||0)-l.offset);n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+X+", 0, 1)",n._gsap.y=X+"px",l.cacheID=Vr.cache,PA()}return!0}l.offset&&F(),U=!0},z,D,j,f,T=function(){M(),z.isActive()&&z.vars.scrollY>V&&(l()>V?z.progress(1)&&l(V):z.resetTo("scrollY",V))};return n&&Qi.set(n,{y:"+=0"}),i.ignoreCheck=function(S){return me&&S.type==="touchmove"&&R()||K>1.05&&S.type!=="touchstart"||s.isGesturing||S.touches&&S.touches.length>1},i.onPress=function(){U=!1;var S=K;K=go((lr.visualViewport&&lr.visualViewport.scale||1)/u),z.pause(),S!==K&&_V(m,K>1.01?!0:t?!1:"x"),D=x(),j=l(),M(),h=sa},i.onRelease=i.onGestureStart=function(S,I){if(l.offset&&F(),!I)f.restart(!0);else{Vr.cache++;var mi=E(),X,ai;t&&(X=x(),ai=X+mi*.05*-S.velocityX/.227,mi*=vc(x,X,ai,wA(m,Mt)),z.vars.scrollX=p(ai)),X=l(),ai=X+mi*.05*-S.velocityY/.227,mi*=vc(l,X,ai,wA(m,vr)),z.vars.scrollY=C(ai),z.invalidate().duration(mi).play(.01),(me&&z.vars.scrollY>=V||X>=V-1)&&Qi.to({},{onUpdate:T,duration:mi})}o&&o(S)},i.onWheel=function(){z._ts&&z.pause(),Vt()-W>1e3&&(h=0,W=Vt())},i.onChange=function(S,I,mi,X,ai){if(sa!==h&&M(),I&&t&&x(p(X[2]===I?D+(S.startX-S.x):x()+I-X[1])),mi){l.offset&&F();var Ni=ai[2]===mi,Si=Ni?j+S.startY-S.y:l()+mi-ai[1],J=C(Si);Ni&&Si!==J&&(j+=J-Si),l(J)}(mi||I)&&PA()},i.onEnable=function(){_V(m,t?!1:"x"),tr.addEventListener("refresh",T),_r(lr,"resize",T),l.smooth&&(l.target.style.scrollBehavior="auto",l.smooth=x.smooth=!1),N.enable()},i.onDisable=function(){_V(m,!0),kr(lr,"resize",T),tr.removeEventListener("refresh",T),N.kill()},i.lockAxis=i.lockAxis!==!1,s=new Qr(i),s.iOS=me,me&&!l()&&l(1),me&&Qi.ticker.add(MA),f=s._dc,z=Qi.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lK(l,l(),function(){return z.pause()})},onUpdate:PA,onComplete:f.vars.onComplete}),s};tr.sort=function(e){if(qt(e))return or.sort(e);var i=lr.pageYOffset||0;return tr.getAll().forEach(function(r){return r._sortY=r.trigger?i+r.trigger.getBoundingClientRect().top:r.start+lr.innerHeight}),or.sort(e||function(r,t){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};tr.observe=function(e){return new Qr(e)};tr.normalizeScroll=function(e){if(typeof e>"u")return Ft;if(e===!0&&Ft)return Ft.enable();if(e===!1){Ft&&Ft.kill(),Ft=e;return}var i=e instanceof Qr?e:gd(e);return Ft&&Ft.target===i.target&&Ft.kill(),ma(i.target)&&(Ft=i),i};tr.core={_getVelocityProp:rq,_inputObserver:VK,_scrollers:Vr,_proxies:RA,bridge:{ss:function(){sA||na("scrollStart"),sA=Vt()},ref:function(){return lt}}};kW()&&Qi.registerPlugin(tr);At.registerPlugin(tr);function Sd(){const e=document.getElementById("specsPin"),i=document.getElementById("specsTrack"),r=document.getElementById("specsProgress");if(!e||!i)return;const t=i.children.length;e.style.setProperty("--n",String(t));const A=-100*(t-1)/t,a=.9;tr.matchMedia({"(min-width: 768px) and (prefers-reduced-motion: no-preference)":()=>{const o=At.quickTo(i,"xPercent",{duration:.5,ease:"power3.out"}),s=tr.create({trigger:e,start:"top top",end:()=>"+="+i.scrollWidth,pin:!0,scrub:!0,invalidateOnRefresh:!0,anticipatePin:1,onUpdate:V=>{o(A*Math.min(1,V.progress/a)),r&&(r.style.transform="scaleX("+(1+(t-1)*V.progress)+")")},onRefreshInit:()=>At.set(i,{xPercent:0})});return()=>{s.kill(),At.set(i,{xPercent:0}),r&&(r.style.transform="")}}}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>tr.refresh()),window.addEventListener("load",()=>tr.refresh())}function mK(e,i,r="200px"){let t=!1;const A=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&!t&&(t=!0,A.disconnect(),i())})},{rootMargin:r});A.observe(e)}function qK(){const e=document.createElement("span");return e.className="term-cursor",e.setAttribute("aria-hidden","true"),e}function Td(){const e=document.querySelector(".loadout");if(!e)return;e.classList.add("is-terminal");const i=qK(),r=e.querySelectorAll(".tcol"),t=document.createElement("div");t.className="term-rest",t.innerHTML=`<span class="p">></span> loadout compiled &mdash; ${r.length} modules `,e.insertAdjacentElement("afterend",t);const A=[];if(r.forEach(s=>{const V=s.querySelector(".tcol__head");V&&A.push(V),s.querySelectorAll("li").forEach(m=>A.push(m))}),window.matchMedia("(prefers-reduced-motion: reduce)").matches){A.forEach(s=>s.classList.add("printed")),t.appendChild(i);return}A.forEach(s=>s.classList.add("pending")),mK(e,o);function o(){let s=0;(function V(){if(s>=A.length){t.appendChild(i);return}const m=A[s];m.classList.remove("pending"),m.classList.add("printed"),m.appendChild(i),s++,window.setTimeout(V,m.classList.contains("tcol__head")?130:55)})()}}function Od(){var m;const e=document.getElementById("seance"),i=document.getElementById("seanceBody");if(!e||!i)return;const r=Array.from(i.querySelectorAll("[data-line]")),t=i.querySelector("[data-last]"),A=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=window.matchMedia("(hover: hover) and (pointer: fine)").matches,o=qK(),s=i.querySelector("#discordCopy");if(s){const q=s.querySelector(".chan__v"),c=q&&q.textContent||"";let n=0;s.addEventListener("click",l=>{l.preventDefault();try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}q&&(q.textContent="copied ✓",window.clearTimeout(n),n=window.setTimeout(()=>{q.textContent=c},1600))})}if(a&&!A&&i.querySelectorAll(".chan").forEach(q=>BW(q,8,.3)),A){(m=t||r[r.length-1])==null||m.appendChild(o);return}e.classList.add("is-live"),mK(e,V);function V(){let q=0;(function c(){if(q>=r.length){(t||r[r.length-1]).appendChild(o);return}const n=r[q];n.classList.add("printed"),n.appendChild(o),q++,window.setTimeout(c,n.hasAttribute("data-last")?260:150)})()}}const Jq=window.matchMedia("(prefers-reduced-motion: reduce)").matches,jd=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Jc=Jq?null:md();(function(){var e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function i(M,F,R){return M<F?F:M>R?R:M}function r(M,F,R){return Math.round(M+(F-M)*R)}var t=document.getElementById("hero"),A=document.getElementById("heroInner"),a=document.getElementById("heroPhoto"),o=document.getElementById("heroScrim"),s=document.getElementById("heroContent"),V=document.getElementById("heroCue"),m=document.getElementById("nav"),q=document.getElementById("spine"),c=!1;function n(){var M=t.getBoundingClientRect(),F=t.offsetHeight-window.innerHeight,R=i(-M.top/F,0,1),z=e?0:18,D=i(1-R,0,1),j=i(1-R*2.2,0,1);a.style.transform="scale("+(1+.18*R).toFixed(4)+")",a.style.filter="blur("+(R*z).toFixed(2)+"px)",a.style.opacity=D.toFixed(3),o.style.opacity=j.toFixed(3);var f=i(R*1.9,0,1);s.style.opacity=(1-f).toFixed(3),s.style.transform="translateY("+(-R*70).toFixed(1)+"px)",V.style.opacity=i(1-R*3.6,0,1).toFixed(3);var T=i(R*1.6,0,1);A.style.background="rgb("+r(247,0,T)+","+r(247,0,T)+","+r(247,0,T)+")";var S=window.scrollY>window.innerHeight*.8;m.classList.toggle("show",S),q.classList.toggle("show",S),c=!1}function l(){c||(requestAnimationFrame(n),c=!0)}window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),n();var x=new IntersectionObserver(function(M){M.forEach(function(F){F.isIntersecting&&(F.target.classList.add("in"),x.unobserve(F.target))})},{threshold:.16,rootMargin:"0px 0px -7% 0px"});document.querySelectorAll(".reveal, .reveal-blur").forEach(function(M){x.observe(M)});var K=Array.prototype.slice.call(document.querySelectorAll(".nav__links a")),u=new IntersectionObserver(function(M){M.forEach(function(F){F.isIntersecting&&K.forEach(function(R){R.classList.toggle("active",R.getAttribute("href")==="#"+F.target.id)})})},{threshold:.42});document.querySelectorAll("section[id]").forEach(function(M){u.observe(M)});var W=document.getElementById("manifesto");if(W){let M=function(F,R,z){F.innerHTML=z?R+'<span class="cur"></span>':R};var E=Array.prototype.slice.call(W.querySelectorAll(".iline")),h=E[E.length-1],U="ABCDEFGHJKLMNPQRSTUVWXYZ#%&/<>*+=$!?23456789",N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(N)E.forEach(function(F){M(F,F.dataset.text,!1)});else{let F=function(){E.forEach(function(z,D){var j=z.dataset.text,f=0,T=z===h;setTimeout(function(){var S=setInterval(function(){for(var I=Math.floor(f/2),mi="",X=0;X<j.length;X++){var ai=j.charAt(X);ai===" "?mi+=" ":X<I?mi+=ai:mi+=U.charAt(Math.floor(Math.random()*U.length))}M(z,mi,T),f++,I>j.length&&(M(z,j,T),clearInterval(S))},42)},D*170)})},R=function(){var z=0;(function D(){if(z>=E.length){M(h,h.dataset.text,!0),setInterval(function(){p&&F()},5e3);return}var j=E[z],f=j.dataset.text,T=0,S=setInterval(function(){T++,M(j,f.slice(0,T),!0),T>=f.length&&(clearInterval(S),j.textContent=f,z++,setTimeout(D,260))},48)})()};E.forEach(function(z){z.textContent=""});var w=!1,p=!1,C=new IntersectionObserver(function(z){z.forEach(function(D){p=D.isIntersecting,D.isIntersecting&&!w&&(w=!0,R())})},{threshold:.4});C.observe(W)}}})();const Pc=document.getElementById("heroGL");if(Pc)try{gU(Pc,{imageSrc:"assets/img/hero.png"})}catch(e){console.warn("[hero-fx] init threw, ignoring:",e)}$1();id();jd&&!Jq&&(nd(),Ed());Jq||xd();Jc&&bd(Jc);Sd();Td();Od();function bd(e){const i=document.querySelector(".marquee");if(!i)return;let r=0;(function t(){const A=Math.max(-7,Math.min(7,(e.velocity||0)*.35));r+=(A-r)*.12,Math.abs(r)<.02&&Math.abs(A)<.02?i.style.transform&&(i.style.transform=""):i.style.transform="skewX("+r.toFixed(2)+"deg)",requestAnimationFrame(t)})()}
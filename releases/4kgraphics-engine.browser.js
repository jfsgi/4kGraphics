var Ja="182",Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ld=0,Mh=1,cd=2;var go=1,lr=2,cr=3,Gn=0,Kt=1,pn=2,zt=0,hs=1,bh=2,Sh=3,wh=4,Qa=5,Wn=100,hd=101,ud=102,fd=103,dd=104,xo=200,pd=201,md=202,gd=203,Aa=204,Ra=205,el=206,xd=207,tl=208,_d=209,vd=210,yd=211,Md=212,bd=213,Sd=214,nl=0,il=1,sl=2,us=3,rl=4,ol=5,al=6,ll=7,_o=0,wd=1,Td=2,jn=0,vo=1,yo=2,Mo=3,bs=4,bo=5,So=6,wo=7,oh="attached",Ed="detached",Th=300,Zi=301,Ss=302,hr=303,cl=304,To=306,kt=1e3,nn=1001,Hi=1002,wt=1003,hl=1004;var ws=1005;var Pt=1006,ur=1007;var Zn=1008;var mn=1009,Eh=1010,Ah=1011,fr=1012,ul=1013,Kn=1014,on=1015,an=1016,fl=1017,dl=1018,Ki=1020,Rh=35902,Ch=35899,Ph=1021,Ih=1022,wn=1023,si=1026,hi=1027,dr=1028,pl=1029,Ts=1030,ml=1031;var gl=1033,Eo=33776,Ao=33777,Ro=33778,Co=33779,xl=35840,_l=35841,vl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,wl=37488,Tl=37489,El=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Dl=37812,Ll=37813,Fl=37814,Nl=37815,Ul=37816,Ol=37817,Bl=37818,kl=37819,zl=37820,Vl=37821,Hl=36492,Gl=36494,Wl=36495,Xl=36283,ql=36284,Yl=36285,jl=36286;var fs=2300,ds=2301,Ea=2302,ah=2400,lh=2401,ch=2402,Ad=2500;var Dh=0,Po=1,pr=2,Rd=3200;var mr=0,Cd=1,$n="",Ke="srgb",jt="srgb-linear",Br="linear",ht="srgb";var cs=7680;var hh=519,Pd=512,Id=513,Dd=514,Zl=515,Ld=516,Fd=517,Kl=518,Nd=519,Ca=35044;var Lh="300 es",Hn=2e3,kr=2001;function Fh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ud(){let s=js("canvas");return s.style.display="block",s}var Sf={},Zs=null;function zr(...s){let e="THREE."+s.shift();Zs?Zs("log",e,...s):console.log(e,...s)}function ze(...s){let e="THREE."+s.shift();Zs?Zs("warn",e,...s):console.warn(e,...s)}function qe(...s){let e="THREE."+s.shift();Zs?Zs("error",e,...s):console.error(e,...s)}function Ks(...s){let e=s.join(" ");e in Sf||(Sf[e]=!0,ze(...s))}function Od(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=1234567,Fr=Math.PI/180,ps=180/Math.PI;function Cn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function Nh(s,e){return(s%e+e)%e}function bm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sm(s,e,t){return s!==e?(t-s)/(e-s):0}function Nr(s,e,t){return(1-t)*s+t*e}function wm(s,e,t,n){return Nr(s,e,1-Math.exp(-t*n))}function Tm(s,e=1){return e-Math.abs(Nh(s,e*2)-e)}function Em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cm(s,e){return s+Math.random()*(e-s)}function Pm(s){return s*(.5-Math.random())}function Im(s){s!==void 0&&(wf=s);let e=wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(s){return s*Fr}function Lm(s){return s*ps}function Fm(s){return(s&s-1)===0&&s!==0}function Nm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Om(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xt={DEG2RAD:Fr,RAD2DEG:ps,generateUUID:Cn,clamp:tt,euclideanModulo:Nh,mapLinear:bm,inverseLerp:Sm,lerp:Nr,damp:wm,pingpong:Tm,smoothstep:Em,smootherstep:Am,randInt:Rm,randFloat:Cm,randFloatSpread:Pm,seededRandom:Im,degToRad:Dm,radToDeg:Lm,isPowerOfTwo:Fm,ceilPowerOfTwo:Nm,floorPowerOfTwo:Um,setQuaternionFromProperEuler:Om,normalize:pt,denormalize:Vn},X=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),_=Math.sin(M);m=Math.sin(m*M)/_,a=Math.sin(a*M)/_,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new I,Tf=new St,Je=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],_=i[4],v=i[7],T=i[2],S=i[5],A=i[8];return r[0]=o*x+a*M+l*T,r[3]=o*g+a*_+l*S,r[6]=o*m+a*v+l*A,r[1]=c*x+h*M+u*T,r[4]=c*g+h*_+u*S,r[7]=c*m+h*v+u*A,r[2]=f*x+d*M+p*T,r[5]=f*g+d*_+p*S,r[8]=f*m+d*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new Je,Ef=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){let s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?Br:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:Ef,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ef,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),s}var je=Bm();function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ls,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=js("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},km=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lc(i[o].image)):r.push(Lc(i[o]))}else r=Lc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var zm=0,Fc=new I,It=class s extends ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=nn,i=nn,r=Pt,o=Zn,a=wn,l=mn,c=s.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Cn(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kt:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Hi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kt:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Hi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Th;It.DEFAULT_ANISOTROPY=1;var at=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(d+1)/2,T=(m+1)/2,S=(h+f)/4,A=(u+x)/4,D=(p+g)/4;return _>v&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=A/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=D/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new It(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Ia{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),ea.subVectors(this.max,Er),Fs.subVectors(e.a,Er),Ns.subVectors(e.b,Er),Us.subVectors(e.c,Er),Ni.subVectors(Ns,Fs),Ui.subVectors(Us,Ns),rs.subVectors(Fs,Us);let t=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-rs.z,rs.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,rs.z,0,-rs.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-rs.y,rs.x,0];return!Nc(t,Fs,Ns,Us,ea)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Fs,Ns,Us,ea))?!1:(ta.crossVectors(Ni,Ui),t=[ta.x,ta.y,ta.z],Nc(t,Fs,Ns,Us,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new I,new I,new I,new I,new I,new I,new I,new I],Bn=new I,Qo=new Bt,Fs=new I,Ns=new I,Us=new I,Ni=new I,Ui=new I,rs=new I,Er=new I,ea=new I,ta=new I,os=new I;function Nc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){os.fromArray(s,r);let a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vm=new Bt,Ar=new I,Uc=new I,qt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Uc)),this.expandByPoint(Ar.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xi=new I,Oc=new I,na=new I,Oi=new I,Bc=new I,ia=new I,kc=new I,wi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oc.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=Oi.dot(this.direction),l=-Oi.dot(na),c=Oi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oc).addScaledVector(na,f),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,r){Bc.subVectors(t,e),ia.subVectors(n,e),kc.crossVectors(Bc,ia);let o=this.direction.dot(kc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(ia.crossVectors(Oi,ia));if(l<0)return null;let c=a*this.direction.dot(Bc.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Gm)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Bi.crossVectors(n,yn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Bi.crossVectors(n,yn)),Bi.normalize(),sa.crossVectors(yn,Bi),i[0]=Bi.x,i[4]=sa.x,i[8]=yn.x,i[1]=Bi.y,i[5]=sa.y,i[9]=yn.y,i[2]=Bi.z,i[6]=sa.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],_=n[7],v=n[11],T=n[15],S=i[0],A=i[4],D=i[8],b=i[12],w=i[1],P=i[5],F=i[9],L=i[13],B=i[2],V=i[6],O=i[10],k=i[14],W=i[3],Y=i[7],ne=i[11],re=i[15];return r[0]=o*S+a*w+l*B+c*W,r[4]=o*A+a*P+l*V+c*Y,r[8]=o*D+a*F+l*O+c*ne,r[12]=o*b+a*L+l*k+c*re,r[1]=h*S+u*w+f*B+d*W,r[5]=h*A+u*P+f*V+d*Y,r[9]=h*D+u*F+f*O+d*ne,r[13]=h*b+u*L+f*k+d*re,r[2]=p*S+x*w+g*B+m*W,r[6]=p*A+x*P+g*V+m*Y,r[10]=p*D+x*F+g*O+m*ne,r[14]=p*b+x*L+g*k+m*re,r[3]=M*S+_*w+v*B+T*W,r[7]=M*A+_*P+v*V+T*Y,r[11]=M*D+_*F+v*O+T*ne,r[15]=M*b+_*L+v*k+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],M=l*d-c*f,_=a*d-c*u,v=a*f-l*u,T=o*d-c*h,S=o*f-l*h,A=o*u-a*h;return t*(x*M-g*_+m*v)-n*(p*M-g*T+m*S)+i*(p*_-x*T+m*A)-r*(p*v-x*S+g*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],M=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,_=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,v=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,T=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,S=t*M+n*_+i*v+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=M*A,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*A,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*m+n*l*m)*A,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=_*A,e[5]=(h*g*r-p*f*r+p*i*d-t*g*d-h*i*m+t*f*m)*A,e[6]=(p*l*r-o*g*r-p*i*c+t*g*c+o*i*m-t*l*m)*A,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=v*A,e[9]=(p*u*r-h*x*r-p*n*d+t*x*d+h*n*m-t*u*m)*A,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*A,e[12]=T*A,e[13]=(h*x*i-p*u*i+p*n*f-t*x*f-h*n*g+t*u*g)*A,e[14]=(p*a*i-o*x*i-p*n*l+t*x*l+o*n*g-t*a*g)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,M=l*c,_=l*h,v=l*u,T=n.x,S=n.y,A=n.z;return i[0]=(1-(x+m))*T,i[1]=(d+v)*T,i[2]=(p-_)*T,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+m))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(p+_)*A,i[9]=(g-M)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Os.set(i[0],i[1],i[2]).length(),o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),kn.copy(this);let c=1/r,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Hn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===kr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Hn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===kr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Os=new I,kn=new De,Hm=new I(0,0,0),Gm=new I(1,1,1),Bi=new I,sa=new I,yn=new I,Rf=new De,Cf=new St,Dt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dt.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,Pf=new I,Bs=new St,_i=new De,ra=new I,Rr=new I,Xm=new I,qm=new St,If=new I(1,0,0),Df=new I(0,1,0),Lf=new I(0,0,1),Ff={type:"added"},Ym={type:"removed"},ks={type:"childadded",child:null},zc={type:"childremoved",child:null},mt=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Dt,n=new St,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Je}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Df,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Pf.copy(e).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Df,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Rr,ra,this.up):_i.lookAt(ra,Rr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(_i),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),ks.child=e,this.dispatchEvent(ks),ks.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new I,vi=new I,Vc=new I,yi=new I,zs=new I,Vs=new I,Nf=new I,Hc=new I,Gc=new I,Wc=new I,Xc=new at,qc=new at,Yc=new at,Vi=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),vi.subVectors(n,t),Vc.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(vi),l=zn.dot(Vc),c=vi.dot(vi),h=vi.dot(Vc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),vi.subVectors(e,t),zn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;zs.subVectors(i,n),Vs.subVectors(r,n),Hc.subVectors(e,n);let l=zs.dot(Hc),c=Vs.dot(Hc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,i);let h=zs.dot(Gc),u=Vs.dot(Gc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(zs,o);Wc.subVectors(e,r);let d=zs.dot(Wc),p=Vs.dot(Wc);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Vs,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Nf.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Nf,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(zs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},oa={h:0,s:0,l:0};function jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Nh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return je.workingToColorSpace(Jt.copy(this),e),Math.round(tt(Jt.r*255,0,255))*65536+Math.round(tt(Jt.g*255,0,255))*256+Math.round(tt(Jt.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,i=Jt.g,r=Jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ke){je.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,i=Jt.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(oa);let n=Nr(ki.h,oa.h,t),i=Nr(ki.s,oa.s,t),r=Nr(ki.l,oa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Se;Se.NAMES=Bd;var jm=0,Lt=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=hs,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new I,aa=new X,Zm=0,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ca,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),e}};var ms=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gr=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},Km=0,An=new De,Zc=new mt,Hs=new I,Mn=new Bt,Cr=new Bt,Wt=new I,et=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Gr:ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Cr.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Cr.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Cr.min),Mn.expandByPoint(Cr.max))}Mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Wt.add(Hs)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new I,l[D]=new I;let c=new I,h=new I,u=new I,f=new X,d=new X,p=new X,x=new I,g=new I;function m(D,b,w){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[D].add(x),a[b].add(x),a[w].add(x),l[D].add(g),l[b].add(g),l[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,b=M.length;D<b;++D){let w=M[D],P=w.start,F=w.count;for(let L=P,B=P+F;L<B;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new I,v=new I,T=new I,S=new I;function A(D){T.fromBufferAttribute(i,D),S.copy(T);let b=a[D];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(S,b);let P=v.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,b=M.length;D<b;++D){let w=M[D],P=w.start,F=w.count;for(let L=P,B=P+F;L<B;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new He(f,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uf=new De,as=new wi,la=new qt,Of=new I,ca=new I,ha=new I,ua=new I,Kc=new I,fa=new I,Bf=new I,da=new I,it=class extends mt{constructor(e=new et,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,e),o?fa.addScaledVector(Kc,h):fa.addScaledVector(Kc.sub(t),h))}t.add(fa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(la.containsPoint(as.origin)===!1&&(as.intersectSphere(la,Of)===null||as.origin.distanceToSquared(Of)>(e.far-e.near)**2))&&(Uf.copy(r).invert(),as.copy(e.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=_;v<T;v+=3){let S=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);i=pa(this,m,e,n,c,h,u,S,A,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);i=pa(this,o,e,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=_;v<T;v+=3){let S=v,A=v+1,D=v+2;i=pa(this,m,e,n,c,h,u,S,A,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=g,_=g+1,v=g+2;i=pa(this,o,e,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function $m(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Gn,a),l===null)return null;da.copy(a),da.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:s}}function pa(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ca),s.getVertexPosition(l,ha),s.getVertexPosition(c,ua);let h=$m(s,e,t,n,ca,ha,ua,Bf);if(h){let u=new I;Vi.getBarycoord(Bf,ca,ha,ua,u),i&&(h.uv=Vi.getInterpolatedAttribute(i,a,l,c,u,new X)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,a,l,c,u,new X)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Vi.getNormal(ca,ha,ua,f.normal),h.face=f,h.barycoord=u}return h}var Zt=class s extends et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function p(x,g,m,M,_,v,T,S,A,D,b){let w=v/A,P=T/D,F=v/2,L=T/2,B=S/2,V=A+1,O=D+1,k=0,W=0,Y=new I;for(let ne=0;ne<O;ne++){let re=ne*P-L;for(let ie=0;ie<V;ie++){let ue=ie*w-F;Y[x]=ue*M,Y[g]=re*_,Y[m]=B,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ie/A),u.push(1-ne/D),k+=1}}for(let ne=0;ne<D;ne++)for(let re=0;re<A;re++){let ie=f+re+V*ne,ue=f+re+V*(ne+1),Ae=f+(re+1)+V*(ne+1),Oe=f+(re+1)+V*ne;l.push(ie,ue,Oe),l.push(ue,Ae,Oe),W+=6}a.addGroup(d,W,b),d+=W,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function Jm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Jn={clone:Es,merge:Qt},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wr=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new I,kf=new X,zf=new X,Rt=class extends Wr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,kf,zf),t.subVectors(zf,kf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,La=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Rt(Gs,Ws,e,t);i.layers=this.layers,this.add(i);let r=new Rt(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new Rt(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new Rt(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new Rt(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xr=class extends It{constructor(e=[],t=Zi,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qr=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zt(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:zt});r.uniforms.tEquirect.value=t;let o=new it(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Pt),new La(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ct=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tg={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Qs=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dt,this.environmentIntensity=1,this.environmentRotation=new Dt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ca,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new I,tr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Vf=new I,Hf=new at,Gf=new at,ng=new I,Wf=new De,ma=new I,$c=new qt,Xf=new De,Jc=new wi,gs=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingBox.expandByPoint(ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingSphere.expandByPoint(ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(i),e.ray.intersectsSphere($c)!==!1&&(Xf.copy(i).invert(),Jc.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&Jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hf.fromBufferAttribute(i.attributes.skinIndex,e),Gf.fromBufferAttribute(i.attributes.skinWeight,e),Vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Gf.getComponent(r);if(o!==0){let a=Hf.getComponent(r);Wf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ng.copy(Vf).applyMatrix4(Wf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ti=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gi=class extends It{constructor(e=null,t=1,n=1,i,r,o,a,l,c=wt,h=wt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qf=new De,ig=new De,xs=class s{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ig;qf.multiplyMatrices(a,t[r]),qf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gi(t,e,e,wn,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ze("Skeleton: No bone found with UUID:",r),o=new Ti),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Wi=class extends He{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new De,Yf=new De,ga=[],jf=new Bt,sg=new De,Pr=new it,Ir=new qt,Yr=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),jf.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(jf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Ir.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),Yf.multiplyMatrices(n,Xs),Pr.matrixWorld=Yf,Pr.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){let l=ga[o];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(i*this.count),i,this.count,dr,on));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qc=new I,rg=new I,og=new Je,Rn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Qc.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||og.getNormalMatrix(e),i=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new qt,ag=new X(.5,.5),xa=new I,nr=class{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],_=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,d-h,m-p,T-M).normalize(),i[1].setComponents(c+o,d+h,m+p,T+M).normalize(),i[2].setComponents(c+a,d+u,m+x,T+_).normalize(),i[3].setComponents(c-a,d-u,m-x,T-_).normalize(),n)i[4].setComponents(l,f,g,v).normalize(),i[5].setComponents(c-l,d-f,m-g,T-v).normalize();else if(i[4].setComponents(c-l,d-f,m-g,T-v).normalize(),t===Hn)i[5].setComponents(c+l,d+f,m+g,T+v).normalize();else if(t===kr)i[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=ag.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pn=class extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fa=new I,Na=new I,Zf=new De,Dr=new wi,_a=new qt,eh=new I,Kf=new I,Ei=class extends mt{constructor(e=new et,t=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fa.fromBufferAttribute(t,i-1),Na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Na);e.setAttribute("lineDistance",new Qe(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Zf.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(Zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),_=va(this,e,Dr,l,m,M,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=va(this,e,Dr,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=va(this,e,Dr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=va(this,e,Dr,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function va(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Fa.fromBufferAttribute(a,i),Na.fromBufferAttribute(a,r),t.distanceSqToSegment(Fa,Na,eh,Kf)>n)return;eh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(eh);if(!(c<e.near||c>e.far))return{distance:c,point:Kf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var $f=new I,Jf=new I,Xi=class extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$f.fromBufferAttribute(t,i),Jf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$f.distanceTo(Jf);e.setAttribute("lineDistance",new Qe(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jr=class extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xn=class extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new De,uh=new wi,ya=new qt,Ma=new I,Ai=class extends mt{constructor(e=new et,t=new Xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Qf.copy(i).invert(),uh.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Ma.fromBufferAttribute(u,g),ed(Ma,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Ma.fromBufferAttribute(u,p),ed(Ma,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ed(s,e,t,n,i,r,o){let a=uh.distanceSqToPoint(s);if(a<t){let l=new I;uh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _s=class extends It{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class extends It{constructor(e,t,n=Kn,i,r,o,a=wt,l=wt,c,h=si,u=1){if(h!==si&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ua=class extends oi{constructor(e,t=Kn,n=Zi,i,r,o=wt,a=wt,l,c=si){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Kr=class s extends et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new X;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ir=class s extends et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function M(){let v=new I,T=new I,S=0,A=(t-e)/n;for(let D=0;D<=r;D++){let b=[],w=D/r,P=w*(t-e)+e;for(let F=0;F<=i;F++){let L=F/i,B=L*l+a,V=Math.sin(B),O=Math.cos(B);T.x=P*V,T.y=-w*n+g,T.z=P*O,u.push(T.x,T.y,T.z),v.set(V,A,O).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-w),b.push(p++)}x.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){let w=x[b][D],P=x[b+1][D],F=x[b+1][D+1],L=x[b][D+1];(e>0||b!==0)&&(h.push(w,P,L),S+=3),(t>0||b!==r-1)&&(h.push(P,F,L),S+=3)}c.addGroup(m,S,0),m+=S}function _(v){let T=p,S=new X,A=new I,D=0,b=v===!0?e:t,w=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),p++;let P=p;for(let F=0;F<=i;F++){let B=F/i*l+a,V=Math.cos(B),O=Math.sin(B);A.x=b*O,A.y=g*w,A.z=b*V,u.push(A.x,A.y,A.z),f.push(0,w,0),S.x=V*.5+.5,S.y=O*.5*w+.5,d.push(S.x,S.y),p++}for(let F=0;F<i;F++){let L=T+F,B=P+F;v===!0?h.push(B,B+1,L):h.push(B+1,B,L),D+=3}c.addGroup(m,D,v===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new X:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],o=[],a=new I,l=new De;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(tt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new X){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oa=class extends sr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ba=new I,th=new Oh,nh=new Oh,ih=new Oh,Ba=class extends rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ba.subVectors(i[0],i[1]).add(i[0]),c=ba);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),th.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),nh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),ih.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(th.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),nh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ih.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(th.calc(l),nh.calc(l),ih.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function td(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function lg(s,e){let t=1-s;return t*t*e}function cg(s,e){return 2*(1-s)*s*e}function hg(s,e){return s*s*e}function Ur(s,e,t,n){return lg(s,e)+cg(s,t)+hg(s,n)}function ug(s,e){let t=1-s;return t*t*t*e}function fg(s,e){let t=1-s;return 3*t*t*s*e}function dg(s,e){return 3*(1-s)*s*s*e}function pg(s,e){return s*s*s*e}function Or(s,e,t,n,i){return ug(s,e)+fg(s,t)+dg(s,n)+pg(s,i)}var $r=class extends rn{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,i.x,r.x,o.x,a.x),Or(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends rn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,i.x,r.x,o.x,a.x),Or(e,i.y,r.y,o.y,a.y),Or(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jr=class extends rn{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends rn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends rn{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,i.x,r.x,o.x),Ur(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends rn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,i.x,r.x,o.x),Ur(e,i.y,r.y,o.y),Ur(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new X){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(td(a,l.x,c.x,h.x,u.x),td(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new X().fromArray(i))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:$r,CubicBezierCurve3:ka,EllipseCurve:sr,LineCurve:Jr,LineCurve3:za,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Va,SplineCurve:eo}),Ha=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new fh[i.type]().fromJSON(i))}return this}},to=class extends Ha{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jr(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Qr(this.currentPoint.clone(),new X(e,t),new X(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new $r(this.currentPoint.clone(),new X(e,t),new X(n,i),new X(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new sr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},un=class extends to{constructor(e){super(e),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new to().fromJSON(i))}return this}};function mg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=kd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=yg(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return no(r,o,t,a,l,c,0),o}function kd(s,e,t,n,i){let r;if(i===Ig(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=nd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=nd(o/n|0,s[o],s[o+1],r);return r&&rr(r,r.next)&&(so(r),r=r.next),r}function vs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(rr(t,t.next)||Tt(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Tg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?xg(s,n,i,r):gg(s)){e.push(l.i,s.i,c.i),so(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=_g(vs(s),e),no(s,e,t,n,i,r,2)):o===2&&vg(s,e,t,n,i,r):no(vs(s),e,t,n,i,r,1);break}}}function gg(s){let e=s.prev,t=s,n=s.next;if(Tt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Lr(i,a,r,l,o,c,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function xg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Tt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=dh(d,p,e,t,n),M=dh(x,g,e,t,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Lr(a,h,l,u,c,f,_.x,_.y)&&Tt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Lr(a,h,l,u,c,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Lr(a,h,l,u,c,f,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Lr(a,h,l,u,c,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _g(s,e){let t=s;do{let n=t.prev,i=t.next.next;!rr(n,i)&&Vd(n,t,t.next,i)&&io(n,i)&&io(i,n)&&(e.push(n.i,t.i,i.i),so(t),so(t.next),t=s=i),t=t.next}while(t!==s);return vs(t)}function vg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rg(o,a)){let l=Hd(o,a);o=vs(o,o.next),l=vs(l,l.next),no(o,e,t,n,i,r,0),no(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function yg(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=kd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ag(c))}i.sort(Mg);for(let r=0;r<i.length;r++)t=bg(i[r],t);return t}function Mg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function bg(s,e){let t=Sg(s,e);if(!t)return e;let n=Hd(t,s);return vs(n,n.next),vs(t,t.next)}function Sg(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(rr(s,t))return t;do{if(rr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);io(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&wg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function wg(s,e){return Tt(s.prev,s,e.prev)<0&&Tt(e.next,s,s.next)<0}function Tg(s,e,t,n){let i=s;do i.z===0&&(i.z=dh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Eg(i)}function Eg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function dh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ag(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Lr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&zd(s,e,t,n,i,r,o,a)}function Rg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Cg(s,e)&&(io(s,e)&&io(e,s)&&Pg(s,e)&&(Tt(s.prev,s,e.prev)||Tt(s,e.prev,e))||rr(s,e)&&Tt(s.prev,s,s.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function rr(s,e){return s.x===e.x&&s.y===e.y}function Vd(s,e,t,n){let i=wa(Tt(s,e,t)),r=wa(Tt(s,e,n)),o=wa(Tt(t,n,s)),a=wa(Tt(t,n,e));return!!(i!==r&&o!==a||i===0&&Sa(s,t,e)||r===0&&Sa(s,n,e)||o===0&&Sa(t,s,n)||a===0&&Sa(t,e,n))}function Sa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function wa(s){return s>0?1:s<0?-1:0}function Cg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function io(s,e){return Tt(s.prev,s,s.next)<0?Tt(s,e,s.next)>=0&&Tt(s,s.prev,e)>=0:Tt(s,e,s.prev)<0||Tt(s,s.next,e)<0}function Pg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Hd(s,e){let t=ph(s.i,s.x,s.y),n=ph(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nd(s,e,t,n){let i=ph(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function so(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ph(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ig(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var mh=class{static triangulate(e,t,n=2){return mg(e,t,n)}},bi=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];id(e),sd(n,e);let o=e.length;t.forEach(id);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,sd(n,t[l]);let a=mh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function id(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function sd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var bn=class s extends et{constructor(e=new un([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Dg,_,v=!1,T,S,A,D;if(m){_=m.getSpacedPoints(h),v=!0,f=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,Q),S=new I,A=new I,D=new I}f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(c),w=b.shape,P=b.holes;if(!bi.isClockWise(w)){w=w.reverse();for(let Q=0,te=P.length;Q<te;Q++){let ee=P[Q];bi.isClockWise(ee)&&(P[Q]=ee.reverse())}}function L(Q){let ee=10000000000000001e-36,fe=Q[0];for(let C=1;C<=Q.length;C++){let _e=C%Q.length,ce=Q[_e],Le=ce.x-fe.x,ae=ce.y-fe.y,R=Le*Le+ae*ae,y=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(fe.x),Math.abs(fe.y)),N=ee*y*y;if(R<=N){Q.splice(_e,1),C--;continue}fe=ce}}L(w),P.forEach(L);let B=P.length,V=w;for(let Q=0;Q<B;Q++){let te=P[Q];w=w.concat(te)}function O(Q,te,ee){return te||qe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(te,ee)}let k=w.length;function W(Q,te,ee){let fe,C,_e,ce=Q.x-te.x,Le=Q.y-te.y,ae=ee.x-Q.x,R=ee.y-Q.y,y=ce*ce+Le*Le,N=ce*R-Le*ae;if(Math.abs(N)>Number.EPSILON){let G=Math.sqrt(y),J=Math.sqrt(ae*ae+R*R),q=te.x-Le/G,Ie=te.y+ce/G,ge=ee.x-R/J,Ce=ee.y+ae/J,Ge=((ge-q)*R-(Ce-Ie)*ae)/(ce*R-Le*ae);fe=q+ce*Ge-Q.x,C=Ie+Le*Ge-Q.y;let he=fe*fe+C*C;if(he<=2)return new X(fe,C);_e=Math.sqrt(he/2)}else{let G=!1;ce>Number.EPSILON?ae>Number.EPSILON&&(G=!0):ce<-Number.EPSILON?ae<-Number.EPSILON&&(G=!0):Math.sign(Le)===Math.sign(R)&&(G=!0),G?(fe=-Le,C=ce,_e=Math.sqrt(y)):(fe=ce,C=Le,_e=Math.sqrt(y/2))}return new X(fe/_e,C/_e)}let Y=[];for(let Q=0,te=V.length,ee=te-1,fe=Q+1;Q<te;Q++,ee++,fe++)ee===te&&(ee=0),fe===te&&(fe=0),Y[Q]=W(V[Q],V[ee],V[fe]);let ne=[],re,ie=Y.concat();for(let Q=0,te=B;Q<te;Q++){let ee=P[Q];re=[];for(let fe=0,C=ee.length,_e=C-1,ce=fe+1;fe<C;fe++,_e++,ce++)_e===C&&(_e=0),ce===C&&(ce=0),re[fe]=W(ee[fe],ee[_e],ee[ce]);ne.push(re),ie=ie.concat(re)}let ue;if(g===0)ue=bi.triangulateShape(V,P);else{let Q=[],te=[];for(let ee=0;ee<g;ee++){let fe=ee/g,C=d*Math.cos(fe*Math.PI/2),_e=p*Math.sin(fe*Math.PI/2)+x;for(let ce=0,Le=V.length;ce<Le;ce++){let ae=O(V[ce],Y[ce],_e);me(ae.x,ae.y,-C),fe===0&&Q.push(ae)}for(let ce=0,Le=B;ce<Le;ce++){let ae=P[ce];re=ne[ce];let R=[];for(let y=0,N=ae.length;y<N;y++){let G=O(ae[y],re[y],_e);me(G.x,G.y,-C),fe===0&&R.push(G)}fe===0&&te.push(R)}}ue=bi.triangulateShape(Q,te)}let Ae=ue.length,Oe=p+x;for(let Q=0;Q<k;Q++){let te=f?O(w[Q],ie[Q],Oe):w[Q];v?(A.copy(T.normals[0]).multiplyScalar(te.x),S.copy(T.binormals[0]).multiplyScalar(te.y),D.copy(_[0]).add(A).add(S),me(D.x,D.y,D.z)):me(te.x,te.y,0)}for(let Q=1;Q<=h;Q++)for(let te=0;te<k;te++){let ee=f?O(w[te],ie[te],Oe):w[te];v?(A.copy(T.normals[Q]).multiplyScalar(ee.x),S.copy(T.binormals[Q]).multiplyScalar(ee.y),D.copy(_[Q]).add(A).add(S),me(D.x,D.y,D.z)):me(ee.x,ee.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let te=Q/g,ee=d*Math.cos(te*Math.PI/2),fe=p*Math.sin(te*Math.PI/2)+x;for(let C=0,_e=V.length;C<_e;C++){let ce=O(V[C],Y[C],fe);me(ce.x,ce.y,u+ee)}for(let C=0,_e=P.length;C<_e;C++){let ce=P[C];re=ne[C];for(let Le=0,ae=ce.length;Le<ae;Le++){let R=O(ce[Le],re[Le],fe);v?me(R.x,R.y+_[h-1].y,_[h-1].x+ee):me(R.x,R.y,u+ee)}}}j(),$();function j(){let Q=i.length/3;if(f){let te=0,ee=k*te;for(let fe=0;fe<Ae;fe++){let C=ue[fe];oe(C[2]+ee,C[1]+ee,C[0]+ee)}te=h+g*2,ee=k*te;for(let fe=0;fe<Ae;fe++){let C=ue[fe];oe(C[0]+ee,C[1]+ee,C[2]+ee)}}else{for(let te=0;te<Ae;te++){let ee=ue[te];oe(ee[2],ee[1],ee[0])}for(let te=0;te<Ae;te++){let ee=ue[te];oe(ee[0]+k*h,ee[1]+k*h,ee[2]+k*h)}}n.addGroup(Q,i.length/3-Q,0)}function $(){let Q=i.length/3,te=0;le(V,te),te+=V.length;for(let ee=0,fe=P.length;ee<fe;ee++){let C=P[ee];le(C,te),te+=C.length}n.addGroup(Q,i.length/3-Q,1)}function le(Q,te){let ee=Q.length;for(;--ee>=0;){let fe=ee,C=ee-1;C<0&&(C=Q.length-1);for(let _e=0,ce=h+g*2;_e<ce;_e++){let Le=k*_e,ae=k*(_e+1),R=te+fe+Le,y=te+C+Le,N=te+C+ae,G=te+fe+ae;ke(R,y,N,G)}}}function me(Q,te,ee){l.push(Q),l.push(te),l.push(ee)}function oe(Q,te,ee){Re(Q),Re(te),Re(ee);let fe=i.length/3,C=M.generateTopUV(n,i,fe-3,fe-2,fe-1);Te(C[0]),Te(C[1]),Te(C[2])}function ke(Q,te,ee,fe){Re(Q),Re(te),Re(fe),Re(te),Re(ee),Re(fe);let C=i.length/3,_e=M.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);Te(_e[0]),Te(_e[1]),Te(_e[3]),Te(_e[1]),Te(_e[2]),Te(_e[3])}function Re(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Te(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new fh[i.type]().fromJSON(i)),new s(n,e.options)}},Dg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new X(r,o),new X(a,l),new X(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new X(o,1-l),new X(c,1-u),new X(f,1-p),new X(x,1-m)]:[new X(a,1-l),new X(h,1-u),new X(d,1-p),new X(g,1-m)]}};function Lg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qn=class s extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let _=0;_<c;_++){let v=_*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let _=M+c*m,v=M+c*(m+1),T=M+1+c*(m+1),S=M+1+c*m;d.push(_,v,S),d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ro=class extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},or=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ys=class extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nt=class extends ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ai=class extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var oo=class extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ao=class extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ga=class extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wa=class extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Gd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends Ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:r=e,a=2*t-n;break;case ch:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:o=e,l=2*n-t;break;case ch:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+M*o[c+T]+_*o[l+T]+v*o[u+T];return r}},qa=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ya=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Mm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ds;var Ci=class extends fn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};lo.prototype.ValueTypeName="color";var In=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};In.prototype.ValueTypeName="number";var ja=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)St.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sn=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};Sn.prototype.ValueTypeName="quaternion";Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends fn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=fs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};Dn.prototype.ValueTypeName="vector";var Ms=class{constructor(e="",t=-1,n=[],i=Ad){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ug(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Fg(l);l=rd(l,1,h),c=rd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new In(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,x){if(d.length!==0){let g=[],m=[];Gd(d,g,m,p),g.length!==0&&x.push(new u(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let g=[],m=[];for(let M=0;M!==f[p].morphTargets.length;++M){let _=f[p];g.push(_.time),m.push(_.morphTarget===x?1:0)}i.push(new In(".morphTargetInfluence["+x+"]",g,m))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Dn,d+".position",f,"pos",i),n(Sn,d+".quaternion",f,"rot",i),n(Dn,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ng(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return In;case"vector":case"vector2":case"vector3":case"vector4":return Dn;case"color":return lo;case"quaternion":return Sn;case"bool":case"boolean":return Ci;case"string":return Pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ug(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ng(s.type);if(s.times===void 0){let t=[],n=[];Gd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Za=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new Za,Yt=class{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},gh=class extends Error{constructor(e,t){super(e),this.response=t}},Ln=class extends Yt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ii.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,g=new ReadableStream({start(m){M();function M(){u.read().then(({done:_,value:v})=>{if(_)m.close();else{x+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let S=0,A=h.length;S<A;S++){let D=h[S];D.onProgress&&D.onProgress(T)}m.enqueue(v),M()}},_=>{m.error(_)})}}});return new Response(g)}else throw new gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ii.add(`file:${e}`,c);let h=Mi[e];delete Mi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qs=new WeakMap,Ka=class extends Yt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=qs.get(o);u===void 0&&(u=[],qs.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=js("img");function l(){h(),t&&t(this);let u=qs.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ii.remove(`image:${e}`);let f=qs.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ii=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=new It,o=new Ka(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},li=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},co=class extends li{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sh=new De,od=new I,ad=new I,ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xh=class extends ho{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Di=class extends li{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_h=class extends ho{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},qi=class extends li{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ci=class extends Wr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vh=class extends ho{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dn=class extends li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},uo=class extends li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rh=new WeakMap,fo=class extends Yt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(rh.has(o)===!0)i&&i(rh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),rh.set(l,c),ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $a=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},po=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Bh="\\[\\]\\.:\\/",Og=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",Bg="[^"+Bh.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",kh),zg=/(WCOD+)?/.source.replace("WCOD",Bg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Gg=new RegExp("^"+kg+zg+Vg+Hg+"$"),Wg=["material","materials","bones","map"],yh=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Og,"")}static parseTrackName(e){let t=Gg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Wg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=yh;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mb=new Float32Array(1);var ar=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mo=class extends ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zh(s,e,t,n){let i=Xg(n);switch(t){case Ph:return s*e;case dr:return s*e/i.components*i.byteLength;case pl:return s*e/i.components*i.byteLength;case Ts:return s*e*2/i.components*i.byteLength;case ml:return s*e*2/i.components*i.byteLength;case Ih:return s*e*3/i.components*i.byteLength;case wn:return s*e*4/i.components*i.byteLength;case gl:return s*e*4/i.components*i.byteLength;case Eo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(s,16)*Math.max(e,8)/4;case xl:case vl:return Math.max(s,8)*Math.max(e,8)/2;case Ml:case bl:case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:case El:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Gl:case Wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yl:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(s){switch(s){case mn:case Eh:return{byteLength:1,components:1};case fr:case Ah:case an:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case Kn:case ul:case on:return{byteLength:4,components:1};case Rh:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);function dp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qg(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,k0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,X0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,d_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,g_=`#define STANDARD
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
}`,x_=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,__=`#define TOON
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
}`,v_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,y_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,S_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,w_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,T_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Yg,alphahash_pars_fragment:jg,alphamap_fragment:Zg,alphamap_pars_fragment:Kg,alphatest_fragment:$g,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:_0,displacementmap_pars_vertex:v0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:b0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:T0,envmap_common_pars_fragment:E0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:I0,fog_fragment:D0,fog_pars_fragment:L0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:N0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:z0,lights_toon_pars_fragment:V0,lights_phong_fragment:H0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:j0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:vx,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:bx,project_vertex:Sx,dithering_fragment:wx,dithering_pars_fragment:Tx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Ix,skinbase_vertex:Dx,skinning_pars_vertex:Lx,skinning_vertex:Fx,skinnormal_vertex:Nx,specularmap_fragment:Ux,specularmap_pars_fragment:Ox,tonemapping_fragment:Bx,tonemapping_pars_fragment:kx,transmission_fragment:zx,transmission_pars_fragment:Vx,uv_pars_fragment:Hx,uv_pars_vertex:Gx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:jx,backgroundCube_frag:Zx,cube_vert:Kx,cube_frag:$x,depth_vert:Jx,depth_frag:Qx,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:f_,meshnormal_frag:d_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:x_,meshtoon_vert:__,meshtoon_frag:v_,points_vert:y_,points_frag:M_,shadow_vert:b_,shadow_frag:S_,sprite_vert:w_,sprite_frag:T_},we={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fi={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};fi.physical={uniforms:Qt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var $l={r:0,b:0,g:0},As=new Dt,E_=new De;function A_(s,e,t,n,i,r,o){let a=new Se(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,T=p(_);T===null?m(a,l):T&&T.isColor&&(m(T,1),v=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let T=p(v);T&&(T.isCubeTexture||T.mapping===To)?(h===void 0&&(h=new it(new Zt(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Es(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),As.copy(v.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(As)),h.material.toneMapped=je.getTransfer(T.colorSpace)!==ht,(u!==T||f!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new it(new qn(2,2),new Ft({name:"BackgroundMaterial",uniforms:Es(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,v){_.getRGB($l,Uh(s)),n.buffers.color.setClear($l.r,$l.g,$l.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:x,addToRenderList:g,dispose:M}}function R_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(w,P,F,L,B){let V=!1,O=u(L,F,P);r!==O&&(r=O,c(r.object)),V=d(w,L,F,B),V&&p(w,L,F,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(w,P,F,L),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,P,F){let L=F.wireframe===!0,B=n[w.id];B===void 0&&(B={},n[w.id]=B);let V=B[P.id];V===void 0&&(V={},B[P.id]=V);let O=V[L];return O===void 0&&(O=f(l()),V[L]=O),O}function f(w){let P=[],F=[],L=[];for(let B=0;B<t;B++)P[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:L,object:w,attributes:{},index:null}}function d(w,P,F,L){let B=r.attributes,V=P.attributes,O=0,k=F.getAttributes();for(let W in k)if(k[W].location>=0){let ne=B[W],re=V[W];if(re===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function p(w,P,F,L){let B={},V=P.attributes,O=0,k=F.getAttributes();for(let W in k)if(k[W].location>=0){let ne=V[W];ne===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor));let re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),B[W]=re,O++}r.attributes=B,r.attributesNum=O,r.index=L}function x(){let w=r.newAttributes;for(let P=0,F=w.length;P<F;P++)w[P]=0}function g(w){m(w,0)}function m(w,P){let F=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;F[w]=1,L[w]===0&&(s.enableVertexAttribArray(w),L[w]=1),B[w]!==P&&(s.vertexAttribDivisor(w,P),B[w]=P)}function M(){let w=r.newAttributes,P=r.enabledAttributes;for(let F=0,L=P.length;F<L;F++)P[F]!==w[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function _(w,P,F,L,B,V,O){O===!0?s.vertexAttribIPointer(w,P,F,B,V):s.vertexAttribPointer(w,P,F,L,B,V)}function v(w,P,F,L){x();let B=L.attributes,V=F.getAttributes(),O=P.defaultAttributeValues;for(let k in V){let W=V[k];if(W.location>=0){let Y=B[k];if(Y===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){let ne=Y.normalized,re=Y.itemSize,ie=e.get(Y);if(ie===void 0)continue;let ue=ie.buffer,Ae=ie.type,Oe=ie.bytesPerElement,j=Ae===s.INT||Ae===s.UNSIGNED_INT||Y.gpuType===ul;if(Y.isInterleavedBufferAttribute){let $=Y.data,le=$.stride,me=Y.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,$.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<W.locationSize;oe++)g(W.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let oe=0;oe<W.locationSize;oe++)_(W.location+oe,re/W.locationSize,Ae,ne,le*Oe,(me+re/W.locationSize*oe)*Oe,j)}else{if(Y.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)m(W.location+$,Y.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let $=0;$<W.locationSize;$++)g(W.location+$);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let $=0;$<W.locationSize;$++)_(W.location+$,re/W.locationSize,Ae,ne,re*Oe,re/W.locationSize*$*Oe,j)}}else if(O!==void 0){let ne=O[k];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(W.location,ne);break;case 3:s.vertexAttrib3fv(W.location,ne);break;case 4:s.vertexAttrib4fv(W.location,ne);break;default:s.vertexAttrib1fv(W.location,ne)}}}}M()}function T(){D();for(let w in n){let P=n[w];for(let F in P){let L=P[F];for(let B in L)h(L[B].object),delete L[B];delete P[F]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let F in P){let L=P[F];for(let B in L)h(L[B].object),delete L[B];delete P[F]}delete n[w.id]}function A(w){for(let P in n){let F=n[P];if(F[w.id]===void 0)continue;let L=F[w.id];for(let B in L)h(L[B].object),delete L[B];delete F[w.id]}}function D(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function C_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let D=A===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!D)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,maxSamples:T,samples:S}}function I_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Rn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,v=m.clippingState||null;l.value=v,v=h(p,f,_,d);for(let T=0;T!==_;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function D_(s){let e=new WeakMap;function t(o,a){return a===hr?o.mapping=Zi:a===cl&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hr||a===cl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qr(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $i=4,Xd=[.125,.215,.35,.446,.526,.582],Cs=20,L_=256,Io=new ci,qd=new Se,Vh=null,Hh=0,Gh=0,Wh=!1,F_=new I,_r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=F_}=r;Vh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Hh,Gh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:an,format:wn,colorSpace:jt,depthBuffer:!1},i=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N_(r)),this._blurMaterial=O_(r,e,t),this._ggxMaterial=U_(r,e,t)}return i}_compileMaterial(e){let t=new it(new et,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,i,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(qd),u.toneMapping=jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Zt,new sn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(qd),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let T=this._cubeSize;gr(i,v*T,_>2?T:0,T,T),u.setRenderTarget(i),m&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Zi||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-$i?n-p+$i:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,gr(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,gr(e,g,m,3*x,2*x),i.setRenderTarget(e),i.render(a,Io)}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Cs-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Cs;g>Cs&&ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let m=[],M=0;for(let A=0;A<Cs;++A){let D=A/x,b=Math.exp(-D*D/2);m.push(b),A===0?M+=b:A<g&&(M+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=p,f.mipInt.value=_-n;let v=this._sizeLods[i],T=3*v*(i>_-$i?i-_+$i:0),S=4*(this._cubeSize-v);gr(t,T,S,3*v,2*v),l.setRenderTarget(t),l.render(u,Io)}};function N_(s){let e=[],t=[],n=[],i=s,r=s-$i+1+Xd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-$i?l=Xd[o-s+$i-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*d),_=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let S=0;S<d;S++){let A=S%3*2/3-1,D=S>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(b,x*p*S),_.set(f,g*p*S);let w=[S,S,S,S,S,S];v.set(w,m*p*S)}let T=new et;T.setAttribute("position",new He(M,x)),T.setAttribute("uv",new He(_,g)),T.setAttribute("faceIndex",new He(v,m)),n.push(new it(T,null)),i>$i&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yd(s,e,t){let n=new Xt(s,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function U_(s,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function O_(s,e,t){let n=new Float32Array(Cs),i=new I(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function jd(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Zd(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function B_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hr||l===cl,h=l===Zi||l===Ss;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _r(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new _r(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function k_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ks("WebGLRenderer: "+n+" extension not supported."),i}}}function z_(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){let T=M[_+0],S=M[_+1],A=M[_+2];f.push(T,S,S,A,A,T)}}else if(p!==void 0){let M=p.array;x=p.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let T=_+0,S=_+1,A=_+2;f.push(T,S,S,A,A,T)}}else return;let g=new(Fh(f)?Gr:ms)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V_(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*x[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function H_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G_(s,e,t){let n=new WeakMap,i=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*T*4*u),A=new Vr(S,v,T,u);A.type=on,A.needsUpdate=!0;let D=_*4;for(let w=0;w<u;w++){let P=g[w],F=m[w],L=M[w],B=v*T*4*w;for(let V=0;V<P.count;V++){let O=V*D;d===!0&&(i.fromBufferAttribute(P,V),S[B+O+0]=i.x,S[B+O+1]=i.y,S[B+O+2]=i.z,S[B+O+3]=0),p===!0&&(i.fromBufferAttribute(F,V),S[B+O+4]=i.x,S[B+O+5]=i.y,S[B+O+6]=i.z,S[B+O+7]=0),x===!0&&(i.fromBufferAttribute(L,V),S[B+O+8]=i.x,S[B+O+9]=i.y,S[B+O+10]=i.z,S[B+O+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new X(v,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function W_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var X_={[vo]:"LINEAR_TONE_MAPPING",[yo]:"REINHARD_TONE_MAPPING",[Mo]:"CINEON_TONE_MAPPING",[bs]:"ACES_FILMIC_TONE_MAPPING",[So]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};function q_(s,e,t,n,i){let r=new Xt(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Xt(e,t,{type:an,depthBuffer:!1,stencilBuffer:!1}),a=new et;a.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let l=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new it(a,l),h=new ci(-1,1,1,-1,0,1),u=null,f=null,d=!1,p,x=null,g=[],m=!1;this.setSize=function(M,_){r.setSize(M,_),o.setSize(M,_);for(let v=0;v<g.length;v++){let T=g[v];T.setSize&&T.setSize(M,_)}},this.setEffects=function(M){g=M,m=g.length>0&&g[0].isRenderPass===!0;let _=r.width,v=r.height;for(let T=0;T<g.length;T++){let S=g[T];S.setSize&&S.setSize(_,v)}},this.begin=function(M,_){if(d||M.toneMapping===jn&&g.length===0)return!1;if(x=_,_!==null){let v=_.width,T=_.height;(r.width!==v||r.height!==T)&&this.setSize(v,T)}return m===!1&&M.setRenderTarget(r),p=M.toneMapping,M.toneMapping=jn,!0},this.hasRenderPass=function(){return m},this.end=function(M,_){M.toneMapping=p,d=!0;let v=r,T=o;for(let S=0;S<g.length;S++){let A=g[S];if(A.enabled!==!1&&(A.render(M,T,v,_),A.needsSwap!==!1)){let D=v;v=T,T=D}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,l.defines={},je.getTransfer(u)===ht&&(l.defines.SRGB_TRANSFER="");let S=X_[f];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(x),M.render(c,h),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var pp=new It,Yh=new oi(1,1),mp=new Vr,gp=new Da,xp=new Xr,Kd=[],$d=[],Jd=new Float32Array(16),Qd=new Float32Array(9),ep=new Float32Array(4);function yr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Kd[i];if(r===void 0&&(r=new Float32Array(i),Kd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ec(s,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Y_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function j_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function Z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function K_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function $_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;ep.set(n),s.uniformMatrix2fv(this.addr,!1,ep),Ht(t,n)}}function J_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Qd.set(n),s.uniformMatrix3fv(this.addr,!1,Qd),Ht(t,n)}}function Q_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Jd.set(n),s.uniformMatrix4fv(this.addr,!1,Jd),Ht(t,n)}}function ev(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function sv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function lv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yh.compareFunction=t.isReversedDepthBuffer()?Kl:Zl,r=Yh):r=pp,t.setTexture2D(e||r,i)}function cv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gp,i)}function hv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function uv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mp,i)}function fv(s){switch(s){case 5126:return Y_;case 35664:return j_;case 35665:return Z_;case 35666:return K_;case 35674:return $_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function dv(s,e){s.uniform1fv(this.addr,e)}function pv(s,e){let t=yr(e,this.size,2);s.uniform2fv(this.addr,t)}function mv(s,e){let t=yr(e,this.size,3);s.uniform3fv(this.addr,t)}function gv(s,e){let t=yr(e,this.size,4);s.uniform4fv(this.addr,t)}function xv(s,e){let t=yr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _v(s,e){let t=yr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vv(s,e){let t=yr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yv(s,e){s.uniform1iv(this.addr,e)}function Mv(s,e){s.uniform2iv(this.addr,e)}function bv(s,e){s.uniform3iv(this.addr,e)}function Sv(s,e){s.uniform4iv(this.addr,e)}function wv(s,e){s.uniform1uiv(this.addr,e)}function Tv(s,e){s.uniform2uiv(this.addr,e)}function Ev(s,e){s.uniform3uiv(this.addr,e)}function Av(s,e){s.uniform4uiv(this.addr,e)}function Rv(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Yh:o=pp;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Cv(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gp,r[o])}function Pv(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xp,r[o])}function Iv(s,e,t){let n=this.cache,i=e.length,r=ec(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mp,r[o])}function Dv(s){switch(s){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return _v;case 35676:return vv;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return bv;case 35669:case 35673:return Sv;case 5125:return wv;case 36294:return Tv;case 36295:return Ev;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}var jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}},Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function tp(s,e){s.seq.push(e),s.map[e.id]=e}function Lv(s,e,t){let n=s.name,i=n.length;for(Xh.lastIndex=0;;){let r=Xh.exec(n),o=Xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tp(t,c===void 0?new jh(a,s,e):new Zh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Kh(a),tp(t,u)),t=u}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Lv(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function np(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Fv=37297,Nv=0;function Uv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ip=new Je;function Ov(s){je._getMatrix(ip,je.workingColorSpace,s);let e=`mat3( ${ip.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Br:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Uv(s.getShaderSource(e),a)}else return r}function Bv(s,e){let t=Ov(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var kv={[vo]:"Linear",[yo]:"Reinhard",[Mo]:"Cineon",[bs]:"ACESFilmic",[So]:"AgX",[wo]:"Neutral",[bo]:"Custom"};function zv(s,e){let t=kv[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jl=new I;function Vv(){je.getLuminanceCoefficients(Jl);let s=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Gv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Lo(s){return s!==""}function rp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(s){return s.replace(Xv,Yv)}var qv=new Map;function Yv(s,e){let t=nt[e];if(t===void 0){let n=qv.get(e);if(n!==void 0)t=nt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(s){return s.replace(jv,Zv)}function Zv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Kv={[go]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function $v(s){return Kv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[Zi]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function Qv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var ey={[Ss]:"ENVMAP_MODE_REFRACTION"};function ty(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ny={[_o]:"ENVMAP_BLENDING_MULTIPLY",[wd]:"ENVMAP_BLENDING_MIX",[Td]:"ENVMAP_BLENDING_ADD"};function iy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ny[s.combine]||"ENVMAP_BLENDING_NONE"}function sy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ry(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$v(t),c=Qv(t),h=ty(t),u=iy(t),f=sy(t),d=Hv(t),p=Gv(r),x=i.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Lo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(g=[lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?nt.tonemapping_pars_fragment:"",t.toneMapping!==jn?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=$h(o),o=rp(o,t),o=op(o,t),a=$h(a),a=rp(a,t),a=op(a,t),o=ap(o),a=ap(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+g+o,v=M+m+a,T=np(i,i.VERTEX_SHADER,_),S=np(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(T)||"",B=i.getShaderInfoLog(S)||"",V=F.trim(),O=L.trim(),k=B.trim(),W=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,S);else{let ne=sp(i,T,"vertex"),re=sp(i,S,"fragment");qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ne+`
`+re)}else V!==""?ze("WebGLProgram: Program Info Log:",V):(O===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:W,programLog:V,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(T),i.deleteShader(S),D=new xr(i,x),b=Wv(i,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Fv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}var oy=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qh(e),t.set(e,n)),n}},Qh=class{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}};function ay(s,e,t,n,i,r,o){let a=new Hr,l=new Jh,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,w,P,F,L){let B=F.fog,V=L.geometry,O=b.isMeshStandardMaterial?F.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),W=k&&k.mapping===To?k.image.height:null,Y=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ze("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=ne!==void 0?ne.length:0,ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let ue,Ae,Oe,j;if(Y){let ft=fi[Y];ue=ft.vertexShader,Ae=ft.fragmentShader}else ue=b.vertexShader,Ae=b.fragmentShader,l.update(b),Oe=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);let $=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),me=L.isInstancedMesh===!0,oe=L.isBatchedMesh===!0,ke=!!b.map,Re=!!b.matcap,Te=!!k,Q=!!b.aoMap,te=!!b.lightMap,ee=!!b.bumpMap,fe=!!b.normalMap,C=!!b.displacementMap,_e=!!b.emissiveMap,ce=!!b.metalnessMap,Le=!!b.roughnessMap,ae=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,N=b.iridescence>0,G=b.sheen>0,J=b.transmission>0,q=ae&&!!b.anisotropyMap,Ie=R&&!!b.clearcoatMap,ge=R&&!!b.clearcoatNormalMap,Ce=R&&!!b.clearcoatRoughnessMap,Ge=N&&!!b.iridescenceMap,he=N&&!!b.iridescenceThicknessMap,ve=G&&!!b.sheenColorMap,Ne=G&&!!b.sheenRoughnessMap,Be=!!b.specularMap,xe=!!b.specularColorMap,Ze=!!b.specularIntensityMap,U=J&&!!b.transmissionMap,Me=J&&!!b.thicknessMap,pe=!!b.gradientMap,Pe=!!b.alphaMap,de=b.alphaTest>0,se=!!b.alphaHash,ye=!!b.extensions,$e=jn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=s.toneMapping);let Mt={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ue,fragmentShader:Ae,defines:b.defines,customVertexShaderID:Oe,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:oe,batchingColor:oe&&L._colorsTexture!==null,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:jt,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:Re,envMap:Te,envMapMode:Te&&k.mapping,envMapCubeUVHeight:W,aoMap:Q,lightMap:te,bumpMap:ee,normalMap:fe,displacementMap:C,emissiveMap:_e,normalMapObjectSpace:fe&&b.normalMapType===Cd,normalMapTangentSpace:fe&&b.normalMapType===mr,metalnessMap:ce,roughnessMap:Le,anisotropy:ae,anisotropyMap:q,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ce,dispersion:y,iridescence:N,iridescenceMap:Ge,iridescenceThicknessMap:he,sheen:G,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:Be,specularColorMap:xe,specularIntensityMap:Ze,transmission:J,transmissionMap:U,thicknessMap:Me,gradientMap:pe,opaque:b.transparent===!1&&b.blending===hs&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:se,combine:b.combine,mapUv:ke&&x(b.map.channel),aoMapUv:Q&&x(b.aoMap.channel),lightMapUv:te&&x(b.lightMap.channel),bumpMapUv:ee&&x(b.bumpMap.channel),normalMapUv:fe&&x(b.normalMap.channel),displacementMapUv:C&&x(b.displacementMap.channel),emissiveMapUv:_e&&x(b.emissiveMap.channel),metalnessMapUv:ce&&x(b.metalnessMap.channel),roughnessMapUv:Le&&x(b.roughnessMap.channel),anisotropyMapUv:q&&x(b.anisotropyMap.channel),clearcoatMapUv:Ie&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(b.sheenRoughnessMap.channel),specularMapUv:Be&&x(b.specularMap.channel),specularColorMapUv:xe&&x(b.specularColorMap.channel),specularIntensityMapUv:Ze&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:Me&&x(b.thicknessMap.channel),alphaMapUv:Pe&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(fe||ae),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(ke||Pe),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===ht,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)w.push(P),w.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(M(w,b),_(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let w=p[b.type],P;if(w){let F=fi[w];P=Jn.clone(F.uniforms)}else P=b.uniforms;return P}function T(b,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new ry(s,w,b,r),h.push(P),u.set(w,P)),P}function S(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:D}}function ly(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function cy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,x,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||cy),n.length>1&&n.sort(f||cp),i.length>1&&i.sort(f||cp)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function hy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new hp,s.set(n,[o])):i>=r.length?(o=new hp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var dy=0;function py(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function my(s){let e=new uy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new De,o=new De;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,M=0,_=0,v=0,T=0,S=0,A=0;c.sort(py);for(let b=0,w=c.length;b<w;b++){let P=c[b],F=P.color,L=P.intensity,B=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ts?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*L,u+=F.g*L,f+=F.b*L;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],L);A++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=O,d++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(F).multiplyScalar(L),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[x]=O;let k=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=k.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,v++}x++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(F).multiplyScalar(L),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=O,g++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let k=P.shadow,W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=P.shadow.matrix,_++}n.point[p]=O,p++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(L),O.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[m]=O,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==T||D.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,D.directionalLength=d,D.pointLength=p,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=T,D.numLightProbes=A,n.version=dy++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let _=c[m];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function up(s){let e=new my(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new up(s),e.set(i,[a])):r>=o.length?(a=new up(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],yy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],fp=new De,Do=new I,qh=new I;function My(s,e,t){let n=new nr,i=new X,r=new X,o=new at,a=new Ga,l=new Wa,c={},h=t.maxTextureSize,u={[Gn]:Kt,[Kt]:Gn,[pn]:pn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:xy,fragmentShader:_y}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let m=this.type;this.render=function(S,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;S.type===lr&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=go);let b=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(zt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let L=m!==this.type;L&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=S.length;B<V;B++){let O=S[B],k=O.shadow;if(k===void 0){ze("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let W=k.getFrameExtents();if(i.multiply(W),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,k.mapSize.y=r.y)),k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===cr){if(O.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Xt(i.x,i.y,{format:Ts,type:an,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new oi(i.x,i.y,on),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=si,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt}else{O.isPointLight?(k.map=new qr(i.x),k.map.depthTexture=new Ua(i.x,Kn)):(k.map=new Xt(i.x,i.y),k.map.depthTexture=new oi(i.x,i.y,Kn)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=si;let ne=s.state.buffers.depth.getReversed();this.type===go?(k.map.depthTexture.compareFunction=ne?Kl:Zl,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wt,k.map.depthTexture.magFilter=wt)}k.camera.updateProjectionMatrix()}let Y=k.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Y;ne++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(k.map),s.clear());let re=k.getViewport(ne);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),F.viewport(o)}if(O.isPointLight){let re=k.camera,ie=k.matrix,ue=O.distance||re.far;ue!==re.far&&(re.far=ue,re.updateProjectionMatrix()),Do.setFromMatrixPosition(O.matrixWorld),re.position.copy(Do),qh.copy(re.position),qh.add(vy[ne]),re.up.copy(yy[ne]),re.lookAt(qh),re.updateMatrixWorld(),ie.makeTranslation(-Do.x,-Do.y,-Do.z),fp.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(fp,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(O);n=k.getFrustum(),v(A,D,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===cr&&M(k,D),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,w,P)};function M(S,A){let D=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xt(i.x,i.y,{format:Ts,type:an})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,D,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,D,d,x,null)}function _(S,A,D,b){let w=null,P=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)w=P;else if(w=D.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=w.uuid,L=A.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let V=B[L];V===void 0&&(V=w.clone(),B[L]=V,A.addEventListener("dispose",T)),w=V}if(w.visible=A.visible,w.wireframe=A.wireframe,b===cr?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=s.properties.get(w);F.light=D}return w}function v(S,A,D,b,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===cr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let L=e.update(S),B=S.material;if(Array.isArray(B)){let V=L.groups;for(let O=0,k=V.length;O<k;O++){let W=V[O],Y=B[W.materialIndex];if(Y&&Y.visible){let ne=_(S,Y,b,w);S.onBeforeShadow(s,S,A,D,L,ne,W),s.renderBufferDirect(D,null,L,ne,S,W),S.onAfterShadow(s,S,A,D,L,ne,W)}}}else if(B.visible){let V=_(S,B,b,w);S.onBeforeShadow(s,S,A,D,L,V,null),s.renderBufferDirect(D,null,L,V,S,null),S.onAfterShadow(s,S,A,D,L,V,null)}}let F=S.children;for(let L=0,B=F.length;L<B;L++)v(F[L],A,D,b,w)}function T(S){S.target.removeEventListener("dispose",T);for(let D in c){let b=c[D],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var by={[nl]:il,[sl]:al,[rl]:ll,[us]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:us};function Sy(s,e){function t(){let U=!1,Me=new at,pe=null,Pe=new at(0,0,0,0);return{setMask:function(de){pe!==de&&!U&&(s.colorMask(de,de,de,de),pe=de)},setLocked:function(de){U=de},setClear:function(de,se,ye,$e,Mt){Mt===!0&&(de*=$e,se*=$e,ye*=$e),Me.set(de,se,ye,$e),Pe.equals(Me)===!1&&(s.clearColor(de,se,ye,$e),Pe.copy(Me))},reset:function(){U=!1,pe=null,Pe.set(-1,0,0,0)}}}function n(){let U=!1,Me=!1,pe=null,Pe=null,de=null;return{setReversed:function(se){if(Me!==se){let ye=e.get("EXT_clip_control");se?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Me=se;let $e=de;de=null,this.setClear($e)}},getReversed:function(){return Me},setTest:function(se){se?$(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(se){pe!==se&&!U&&(s.depthMask(se),pe=se)},setFunc:function(se){if(Me&&(se=by[se]),Pe!==se){switch(se){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=se}},setLocked:function(se){U=se},setClear:function(se){de!==se&&(Me&&(se=1-se),s.clearDepth(se),de=se)},reset:function(){U=!1,pe=null,Pe=null,de=null,Me=!1}}}function i(){let U=!1,Me=null,pe=null,Pe=null,de=null,se=null,ye=null,$e=null,Mt=null;return{setTest:function(ft){U||(ft?$(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(ft){Me!==ft&&!U&&(s.stencilMask(ft),Me=ft)},setFunc:function(ft,ni,mi){(pe!==ft||Pe!==ni||de!==mi)&&(s.stencilFunc(ft,ni,mi),pe=ft,Pe=ni,de=mi)},setOp:function(ft,ni,mi){(se!==ft||ye!==ni||$e!==mi)&&(s.stencilOp(ft,ni,mi),se=ft,ye=ni,$e=mi)},setLocked:function(ft){U=ft},setClear:function(ft){Mt!==ft&&(s.clearStencil(ft),Mt=ft)},reset:function(){U=!1,Me=null,pe=null,Pe=null,de=null,se=null,ye=null,$e=null,Mt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,_=null,v=null,T=null,S=null,A=new Se(0,0,0),D=0,b=!1,w=null,P=null,F=null,L=null,B=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=k>=2);let Y=null,ne={},re=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),ue=new at().fromArray(re),Ae=new at().fromArray(ie);function Oe(U,Me,pe,Pe){let de=new Uint8Array(4),se=s.createTexture();s.bindTexture(U,se),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<pe;ye++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(Me+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return se}let j={};j[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(s.DEPTH_TEST),o.setFunc(us),ee(!1),fe(Mh),$(s.CULL_FACE),Q(zt);function $(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function le(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function me(U,Me){return u[U]!==Me?(s.bindFramebuffer(U,Me),u[U]=Me,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function oe(U,Me){let pe=d,Pe=!1;if(U){pe=f.get(Me),pe===void 0&&(pe=[],f.set(Me,pe));let de=U.textures;if(pe.length!==de.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let se=0,ye=de.length;se<ye;se++)pe[se]=s.COLOR_ATTACHMENT0+se;pe.length=de.length,Pe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(pe)}function ke(U){return p!==U?(s.useProgram(U),p=U,!0):!1}let Re={[Wn]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};Re[fd]=s.MIN,Re[dd]=s.MAX;let Te={[xo]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[vd]:s.SRC_ALPHA_SATURATE,[tl]:s.DST_COLOR,[el]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[Ra]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[xd]:s.ONE_MINUS_DST_ALPHA,[yd]:s.CONSTANT_COLOR,[Md]:s.ONE_MINUS_CONSTANT_COLOR,[bd]:s.CONSTANT_ALPHA,[Sd]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(U,Me,pe,Pe,de,se,ye,$e,Mt,ft){if(U===zt){x===!0&&(le(s.BLEND),x=!1);return}if(x===!1&&($(s.BLEND),x=!0),U!==Qa){if(U!==g||ft!==b){if((m!==Wn||v!==Wn)&&(s.blendEquation(s.FUNC_ADD),m=Wn,v=Wn),ft)switch(U){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bh:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",U);break}else switch(U){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",U);break}M=null,_=null,T=null,S=null,A.set(0,0,0),D=0,g=U,b=ft}return}de=de||Me,se=se||pe,ye=ye||Pe,(Me!==m||de!==v)&&(s.blendEquationSeparate(Re[Me],Re[de]),m=Me,v=de),(pe!==M||Pe!==_||se!==T||ye!==S)&&(s.blendFuncSeparate(Te[pe],Te[Pe],Te[se],Te[ye]),M=pe,_=Pe,T=se,S=ye),($e.equals(A)===!1||Mt!==D)&&(s.blendColor($e.r,$e.g,$e.b,Mt),A.copy($e),D=Mt),g=U,b=!1}function te(U,Me){U.side===pn?le(s.CULL_FACE):$(s.CULL_FACE);let pe=U.side===Kt;Me&&(pe=!pe),ee(pe),U.blending===hs&&U.transparent===!1?Q(zt):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Pe=U.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){w!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),w=U)}function fe(U){U!==ld?($(s.CULL_FACE),U!==P&&(U===Mh?s.cullFace(s.BACK):U===cd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),P=U}function C(U){U!==F&&(O&&s.lineWidth(U),F=U)}function _e(U,Me,pe){U?($(s.POLYGON_OFFSET_FILL),(L!==Me||B!==pe)&&(s.polygonOffset(Me,pe),L=Me,B=pe)):le(s.POLYGON_OFFSET_FILL)}function ce(U){U?$(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function Le(U){U===void 0&&(U=s.TEXTURE0+V-1),Y!==U&&(s.activeTexture(U),Y=U)}function ae(U,Me,pe){pe===void 0&&(Y===null?pe=s.TEXTURE0+V-1:pe=Y);let Pe=ne[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ne[pe]=Pe),(Pe.type!==U||Pe.texture!==Me)&&(Y!==pe&&(s.activeTexture(pe),Y=pe),s.bindTexture(U,Me||j[U]),Pe.type=U,Pe.texture=Me)}function R(){let U=ne[Y];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function G(){try{s.texSubImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function J(){try{s.texSubImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function ge(){try{s.texStorage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function Ce(){try{s.texStorage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function Ge(){try{s.texImage2D(...arguments)}catch(U){qe("WebGLState:",U)}}function he(){try{s.texImage3D(...arguments)}catch(U){qe("WebGLState:",U)}}function ve(U){ue.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Ne(U){Ae.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function Be(U,Me){let pe=c.get(Me);pe===void 0&&(pe=new WeakMap,c.set(Me,pe));let Pe=pe.get(U);Pe===void 0&&(Pe=s.getUniformBlockIndex(Me,U.name),pe.set(U,Pe))}function xe(U,Me){let Pe=c.get(Me).get(U);l.get(Me)!==Pe&&(s.uniformBlockBinding(Me,Pe,U.__bindingPointIndex),l.set(Me,Pe))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,ne={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,_=null,v=null,T=null,S=null,A=new Se(0,0,0),D=0,b=!1,w=null,P=null,F=null,L=null,B=null,ue.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:le,bindFramebuffer:me,drawBuffers:oe,useProgram:ke,setBlending:Q,setMaterial:te,setFlipSided:ee,setCullFace:fe,setLineWidth:C,setPolygonOffset:_e,setScissorTest:ce,activeTexture:Le,bindTexture:ae,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Ge,texImage3D:he,updateUBOMapping:Be,uniformBlockBinding:xe,texStorage2D:ge,texStorage3D:Ce,texSubImage2D:G,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Ie,scissor:ve,viewport:Ne,reset:Ze}}function wy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new X,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return d?new OffscreenCanvas(R,y):js("canvas")}function x(R,y,N){let G=1,J=ae(R);if((J.width>N||J.height>N)&&(G=N/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(G*J.width),Ie=Math.floor(G*J.height);u===void 0&&(u=p(q,Ie));let ge=y?p(q,Ie):u;return ge.width=q,ge.height=Ie,ge.getContext("2d").drawImage(R,0,0,q,Ie),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Ie+")."),ge}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,y,N,G,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=y;if(y===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),y===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),y===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),y===s.RGBA){let Ie=J?Br:je.getTransfer(G);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=Ie===ht?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,y){let N;return R?y===null||y===Kn||y===Ki?N=s.DEPTH24_STENCIL8:y===on?N=s.DEPTH32F_STENCIL8:y===fr&&(N=s.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===Ki?N=s.DEPTH_COMPONENT24:y===on?N=s.DEPTH_COMPONENT32F:y===fr&&(N=s.DEPTH_COMPONENT16),N}function T(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==wt&&R.minFilter!==Pt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function S(R){let y=R.target;y.removeEventListener("dispose",S),D(y),y.isVideoTexture&&h.delete(y)}function A(R){let y=R.target;y.removeEventListener("dispose",A),w(y)}function D(R){let y=n.get(R);if(y.__webglInit===void 0)return;let N=R.source,G=f.get(N);if(G){let J=G[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys(G).length===0&&f.delete(N)}n.remove(R)}function b(R){let y=n.get(R);s.deleteTexture(y.__webglTexture);let N=R.source,G=f.get(N);delete G[y.__cacheKey],o.memory.textures--}function w(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let J=0;J<y.__webglFramebuffer[G].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[G][J]);else s.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)s.deleteFramebuffer(y.__webglFramebuffer[G]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=R.textures;for(let G=0,J=N.length;G<J;G++){let q=n.get(N[G]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(N[G])}n.remove(R)}let P=0;function F(){P=0}function L(){let R=P;return R>=i.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function B(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function V(R,y){let N=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){let G=R.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,R,y);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+y)}function O(R,y){let N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){j(N,R,y);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+y)}function k(R,y){let N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){j(N,R,y);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+y)}function W(R,y){let N=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){$(N,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+y)}let Y={[kt]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[Hi]:s.MIRRORED_REPEAT},ne={[wt]:s.NEAREST,[hl]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},re={[Pd]:s.NEVER,[Nd]:s.ALWAYS,[Id]:s.LESS,[Zl]:s.LEQUAL,[Dd]:s.EQUAL,[Kl]:s.GEQUAL,[Ld]:s.GREATER,[Fd]:s.NOTEQUAL};function ie(R,y){if(y.type===on&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pt||y.magFilter===ur||y.magFilter===ws||y.magFilter===Zn||y.minFilter===Pt||y.minFilter===ur||y.minFilter===ws||y.minFilter===Zn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Y[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ne[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ne[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wt||y.minFilter!==ws&&y.minFilter!==Zn||y.type===on&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ue(R,y){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",S));let G=y.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let q=B(y);if(q!==R.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[q].usedTimes++;let Ie=J[R.__cacheKey];Ie!==void 0&&(J[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(y)),R.__cacheKey=q,R.__webglTexture=J[q].texture}return N}function Ae(R,y,N){return Math.floor(Math.floor(R/N)/y)}function Oe(R,y,N,G){let q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,N,G,y.data);else{q.sort((he,ve)=>he.start-ve.start);let Ie=0;for(let he=1;he<q.length;he++){let ve=q[Ie],Ne=q[he],Be=ve.start+ve.count,xe=Ae(Ne.start,y.width,4),Ze=Ae(ve.start,y.width,4);Ne.start<=Be+1&&xe===Ze&&Ae(Ne.start+Ne.count-1,y.width,4)===xe?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++Ie,q[Ie]=Ne)}q.length=Ie+1;let ge=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Ge=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let he=0,ve=q.length;he<ve;he++){let Ne=q[he],Be=Math.floor(Ne.start/4),xe=Math.ceil(Ne.count/4),Ze=Be%y.width,U=Math.floor(Be/y.width),Me=xe,pe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Ze,U,Me,pe,N,G,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ge),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ge)}}function j(R,y,N){let G=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=s.TEXTURE_3D);let J=ue(R,y),q=y.source;t.bindTexture(G,R.__webglTexture,s.TEXTURE0+N);let Ie=n.get(q);if(q.version!==Ie.__version||J===!0){t.activeTexture(s.TEXTURE0+N);let ge=je.getPrimaries(je.workingColorSpace),Ce=y.colorSpace===$n?null:je.getPrimaries(y.colorSpace),Ge=y.colorSpace===$n||ge===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let he=x(y.image,!1,i.maxTextureSize);he=Le(y,he);let ve=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),Be=_(y.internalFormat,ve,Ne,y.colorSpace,y.isVideoTexture);ie(G,y);let xe,Ze=y.mipmaps,U=y.isVideoTexture!==!0,Me=Ie.__version===void 0||J===!0,pe=q.dataReady,Pe=T(y,he);if(y.isDepthTexture)Be=v(y.format===hi,y.type),Me&&(U?t.texStorage2D(s.TEXTURE_2D,1,Be,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Be,he.width,he.height,0,ve,Ne,null));else if(y.isDataTexture)if(Ze.length>0){U&&Me&&t.texStorage2D(s.TEXTURE_2D,Pe,Be,Ze[0].width,Ze[0].height);for(let de=0,se=Ze.length;de<se;de++)xe=Ze[de],U?pe&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,de,Be,xe.width,xe.height,0,ve,Ne,xe.data);y.generateMipmaps=!1}else U?(Me&&t.texStorage2D(s.TEXTURE_2D,Pe,Be,he.width,he.height),pe&&Oe(y,he,ve,Ne)):t.texImage2D(s.TEXTURE_2D,0,Be,he.width,he.height,0,ve,Ne,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Be,Ze[0].width,Ze[0].height,he.depth);for(let de=0,se=Ze.length;de<se;de++)if(xe=Ze[de],y.format!==wn)if(ve!==null)if(U){if(pe)if(y.layerUpdates.size>0){let ye=zh(xe.width,xe.height,y.format,y.type);for(let $e of y.layerUpdates){let Mt=xe.data.subarray($e*ye/xe.data.BYTES_PER_ELEMENT,($e+1)*ye/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,$e,xe.width,xe.height,1,ve,Mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,he.depth,ve,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Be,xe.width,xe.height,he.depth,0,xe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,he.depth,ve,Ne,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Be,xe.width,xe.height,he.depth,0,ve,Ne,xe.data)}else{U&&Me&&t.texStorage2D(s.TEXTURE_2D,Pe,Be,Ze[0].width,Ze[0].height);for(let de=0,se=Ze.length;de<se;de++)xe=Ze[de],y.format!==wn?ve!==null?U?pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Be,xe.width,xe.height,0,xe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?pe&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,de,Be,xe.width,xe.height,0,ve,Ne,xe.data)}else if(y.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Be,he.width,he.height,he.depth),pe)if(y.layerUpdates.size>0){let de=zh(he.width,he.height,y.format,y.type);for(let se of y.layerUpdates){let ye=he.data.subarray(se*de/he.data.BYTES_PER_ELEMENT,(se+1)*de/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,ve,Ne,ye)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(y.isData3DTexture)U?(Me&&t.texStorage3D(s.TEXTURE_3D,Pe,Be,he.width,he.height,he.depth),pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)):t.texImage3D(s.TEXTURE_3D,0,Be,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(y.isFramebufferTexture){if(Me)if(U)t.texStorage2D(s.TEXTURE_2D,Pe,Be,he.width,he.height);else{let de=he.width,se=he.height;for(let ye=0;ye<Pe;ye++)t.texImage2D(s.TEXTURE_2D,ye,Be,de,se,0,ve,Ne,null),de>>=1,se>>=1}}else if(Ze.length>0){if(U&&Me){let de=ae(Ze[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Be,de.width,de.height)}for(let de=0,se=Ze.length;de<se;de++)xe=Ze[de],U?pe&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ve,Ne,xe):t.texImage2D(s.TEXTURE_2D,de,Be,ve,Ne,xe);y.generateMipmaps=!1}else if(U){if(Me){let de=ae(he);t.texStorage2D(s.TEXTURE_2D,Pe,Be,de.width,de.height)}pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ne,he)}else t.texImage2D(s.TEXTURE_2D,0,Be,ve,Ne,he);g(y)&&m(G),Ie.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function $(R,y,N){if(y.image.length!==6)return;let G=ue(R,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+N);let q=n.get(J);if(J.version!==q.__version||G===!0){t.activeTexture(s.TEXTURE0+N);let Ie=je.getPrimaries(je.workingColorSpace),ge=y.colorSpace===$n?null:je.getPrimaries(y.colorSpace),Ce=y.colorSpace===$n||Ie===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ge=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ge&&!he?ve[se]=x(y.image[se],!0,i.maxCubemapSize):ve[se]=he?y.image[se].image:y.image[se],ve[se]=Le(y,ve[se]);let Ne=ve[0],Be=r.convert(y.format,y.colorSpace),xe=r.convert(y.type),Ze=_(y.internalFormat,Be,xe,y.colorSpace),U=y.isVideoTexture!==!0,Me=q.__version===void 0||G===!0,pe=J.dataReady,Pe=T(y,Ne);ie(s.TEXTURE_CUBE_MAP,y);let de;if(Ge){U&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ze,Ne.width,Ne.height);for(let se=0;se<6;se++){de=ve[se].mipmaps;for(let ye=0;ye<de.length;ye++){let $e=de[ye];y.format!==wn?Be!==null?U?pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,$e.width,$e.height,Be,$e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,Ze,$e.width,$e.height,0,$e.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,$e.width,$e.height,Be,xe,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,Ze,$e.width,$e.height,0,Be,xe,$e.data)}}}else{if(de=y.mipmaps,U&&Me){de.length>0&&Pe++;let se=ae(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(he){U?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Be,xe,ve[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,ve[se].width,ve[se].height,0,Be,xe,ve[se].data);for(let ye=0;ye<de.length;ye++){let Mt=de[ye].image[se].image;U?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Mt.width,Mt.height,Be,xe,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,Ze,Mt.width,Mt.height,0,Be,xe,Mt.data)}}else{U?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,xe,ve[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Be,xe,ve[se]);for(let ye=0;ye<de.length;ye++){let $e=de[ye];U?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Be,xe,$e.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,Ze,Be,xe,$e.image[se])}}}g(y)&&m(s.TEXTURE_CUBE_MAP),q.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function le(R,y,N,G,J,q){let Ie=r.convert(N.format,N.colorSpace),ge=r.convert(N.type),Ce=_(N.internalFormat,Ie,ge,N.colorSpace),Ge=n.get(y),he=n.get(N);if(he.__renderTarget=y,!Ge.__hasExternalTextures){let ve=Math.max(1,y.width>>q),Ne=Math.max(1,y.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Ce,ve,Ne,y.depth,0,Ie,ge,null):t.texImage2D(J,q,Ce,ve,Ne,0,Ie,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),_e(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,J,he.__webglTexture,0,C(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,J,he.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(R,y,N){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){let G=y.depthTexture,J=G&&G.isDepthTexture?G.type:null,q=v(y.stencilBuffer,J),Ie=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,C(y),q,y.width,y.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,C(y),q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,R)}else{let G=y.textures;for(let J=0;J<G.length;J++){let q=G[J],Ie=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Ce=_(q.internalFormat,Ie,ge,q.colorSpace);_e(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,C(y),Ce,y.width,y.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,C(y),Ce,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(R,y,N){let G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",S)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ie(s.TEXTURE_CUBE_MAP,y.depthTexture);let Ge=r.convert(y.depthTexture.format),he=r.convert(y.depthTexture.type),ve;y.depthTexture.format===si?ve=s.DEPTH_COMPONENT24:y.depthTexture.format===hi&&(ve=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ve,y.width,y.height,0,Ge,he,null)}}else V(y.depthTexture,0);let q=J.__webglTexture,Ie=C(y),ge=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Ce=y.depthTexture.format===hi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)_e(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,ge,q,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,ge,q,0);else if(y.depthTexture.format===hi)_e(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,ge,q,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,ge,q,0);else throw new Error("Unknown depthTexture format")}function ke(R){let y=n.get(R),N=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=G}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)oe(y.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?oe(y.__webglFramebuffer[0],R,0):oe(y.__webglFramebuffer,R,0)}else if(N){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=s.createRenderbuffer(),me(y.__webglDepthbuffer[G],R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),me(y.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(R,y,N){let G=n.get(R);y!==void 0&&le(G.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&ke(R)}function Te(R){let y=R.texture,N=n.get(R),G=n.get(y);R.addEventListener("dispose",A);let J=R.textures,q=R.isWebGLCubeRenderTarget===!0,Ie=J.length>1;if(Ie||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=y.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ge]=[];for(let Ce=0;Ce<y.mipmaps.length;Ce++)N.__webglFramebuffer[ge][Ce]=s.createFramebuffer()}else N.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)N.__webglFramebuffer[ge]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let ge=0,Ce=J.length;ge<Ce;ge++){let Ge=n.get(J[ge]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&_e(R)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ge=0;ge<J.length;ge++){let Ce=J[ge];N.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ge]);let Ge=r.convert(Ce.format,Ce.colorSpace),he=r.convert(Ce.type),ve=_(Ce.internalFormat,Ge,he,Ce.colorSpace,R.isXRRenderTarget===!0),Ne=C(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ve,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,N.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),me(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),ie(s.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ce=0;Ce<y.mipmaps.length;Ce++)le(N.__webglFramebuffer[ge][Ce],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce);else le(N.__webglFramebuffer[ge],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Ce=J.length;ge<Ce;ge++){let Ge=J[ge],he=n.get(Ge),ve=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),ie(ve,Ge),le(N.__webglFramebuffer,R,Ge,s.COLOR_ATTACHMENT0+ge,ve,0),g(Ge)&&m(ve)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,G.__webglTexture),ie(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let Ce=0;Ce<y.mipmaps.length;Ce++)le(N.__webglFramebuffer[Ce],R,y,s.COLOR_ATTACHMENT0,ge,Ce);else le(N.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,ge,0);g(y)&&m(ge),t.unbindTexture()}R.depthBuffer&&ke(R)}function Q(R){let y=R.textures;for(let N=0,G=y.length;N<G;N++){let J=y[N];if(g(J)){let q=M(R),Ie=n.get(J).__webglTexture;t.bindTexture(q,Ie),m(q),t.unbindTexture()}}}let te=[],ee=[];function fe(R){if(R.samples>0){if(_e(R)===!1){let y=R.textures,N=R.width,G=R.height,J=s.COLOR_BUFFER_BIT,q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(R),ge=y.length>1;if(ge)for(let Ge=0;Ge<y.length;Ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ge=0;Ge<y.length;Ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);let he=n.get(y[Ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,N,G,0,0,N,G,J,s.NEAREST),l===!0&&(te.length=0,ee.length=0,te.push(s.COLOR_ATTACHMENT0+Ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(q),ee.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ge=0;Ge<y.length;Ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);let he=n.get(y[Ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function C(R){return Math.min(i.maxSamples,R.samples)}function _e(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ce(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Le(R,y){let N=R.colorSpace,G=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==jt&&N!==$n&&(je.getTransfer(N)===ht?(G!==wn||J!==mn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",N)),y}function ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ty(s,e){function t(n,i=$n){let r,o=je.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return s.BYTE;if(n===Ah)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===ul)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===Ph)return s.ALPHA;if(n===Ih)return s.RGB;if(n===wn)return s.RGBA;if(n===si)return s.DEPTH_COMPONENT;if(n===hi)return s.DEPTH_STENCIL;if(n===dr)return s.RED;if(n===pl)return s.RED_INTEGER;if(n===Ts)return s.RG;if(n===ml)return s.RG_INTEGER;if(n===gl)return s.RGBA_INTEGER;if(n===Eo||n===Ao||n===Ro||n===Co)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===_l||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl||n===wl||n===Tl||n===El||n===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===El)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Fl||n===Nl||n===Ul||n===Ol||n===Bl||n===kl||n===zl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hl)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends ri{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new eu,m={},M=t.getContextAttributes(),_=null,v=null,T=[],S=[],A=new X,D=null,b=new Rt;b.viewport=new at;let w=new Rt;w.viewport=new at;let P=[b,w],F=new $a,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=T[j];return $===void 0&&($=new Js,T[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=T[j];return $===void 0&&($=new Js,T[j]=$),$.getGripSpace()},this.getHand=function(j){let $=T[j];return $===void 0&&($=new Js,T[j]=$),$.getHandSpace()};function V(j){let $=S.indexOf(j.inputSource);if($===-1)return;let le=T[$];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",k);for(let j=0;j<T.length;j++){let $=S[j];$!==null&&(S[j]=null,T[j].disconnect($))}L=null,B=null,g.reset();for(let j in m)delete m[j];e.setRenderTarget(_),d=null,f=null,u=null,i=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,me=null,oe=null;M.depth&&(oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?hi:si,me=M.stencil?Ki:Kn);let ke={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Xt(f.textureWidth,f.textureHeight,{format:wn,type:mn,depthTexture:new oi(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Xt(d.framebufferWidth,d.framebufferHeight,{format:wn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let $=0;$<j.removed.length;$++){let le=j.removed[$],me=S.indexOf(le);me>=0&&(S[me]=null,T[me].disconnect(le))}for(let $=0;$<j.added.length;$++){let le=j.added[$],me=S.indexOf(le);if(me===-1){for(let ke=0;ke<T.length;ke++)if(ke>=S.length){S.push(le),me=ke;break}else if(S[ke]===null){S[ke]=le,me=ke;break}if(me===-1)break}let oe=T[me];oe&&oe.connect(le)}}let W=new I,Y=new I;function ne(j,$,le){W.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);let me=W.distanceTo(Y),oe=$.projectionMatrix.elements,ke=le.projectionMatrix.elements,Re=oe[14]/(oe[10]-1),Te=oe[14]/(oe[10]+1),Q=(oe[9]+1)/oe[5],te=(oe[9]-1)/oe[5],ee=(oe[8]-1)/oe[0],fe=(ke[8]+1)/ke[0],C=Re*ee,_e=Re*fe,ce=me/(-ee+fe),Le=ce*-ee;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Le),j.translateZ(ce),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),oe[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ae=Re+ce,R=Te+ce,y=C-Le,N=_e+(me-Le),G=Q*Te/R*ae,J=te*Te/R*ae;j.projectionMatrix.makePerspective(y,N,G,J,ae,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let $=j.near,le=j.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(le=g.depthFar)),F.near=w.near=b.near=$,F.far=w.far=b.far=le,(L!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,B=F.far),F.layers.mask=j.layers.mask|6,b.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;let me=j.parent,oe=F.cameras;re(F,me);for(let ke=0;ke<oe.length;ke++)re(oe[ke],me);oe.length===2?ne(F,b,w):F.projectionMatrix.copy(b.projectionMatrix),ie(j,F,me)};function ie(j,$,le){le===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(j){return m[j]};let ue=null;function Ae(j,$){if(h=$.getViewerPose(c||o),p=$,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let me=!1;le.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let Te=0;Te<le.length;Te++){let Q=le[Te],te=null;if(d!==null)te=d.getViewport(Q);else{let fe=u.getViewSubImage(f,Q);te=fe.viewport,Te===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let ee=P[Te];ee===void 0&&(ee=new Rt,ee.layers.enable(Te),ee.viewport=new at,P[Te]=ee),ee.matrix.fromArray(Q.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Q.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),Te===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(ee)}let oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Te=u.getDepthInformation(le[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,i.renderState)}if(oe&&oe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<le.length;Te++){let Q=le[Te].camera;if(Q){let te=m[Q];te||(te=new Zr,m[Q]=te);let ee=u.getCameraImage(Q);te.sourceTexture=ee}}}}for(let le=0;le<T.length;le++){let me=S[le],oe=T[le];me!==null&&oe!==void 0&&oe.update(me,$,c||o)}ue&&ue(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}let Oe=new dp;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(j){ue=j},this.dispose=function(){}}},Rs=new Dt,Ry=new De;function Cy(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Uh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Kt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Kt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Rs.copy(v),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(Rs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Py(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=i[M.id];v===void 0&&(p(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",g));let T=_.program;n.updateUBOMapping(M,T);let S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){let _=u();M.__bindingPointIndex=_;let v=s.createBuffer(),T=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=i[M.id],v=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,A=v.length;S<A;S++){let D=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,w=D.length;b<w;b++){let P=D[b];if(d(P,S,b,T)===!0){let F=P.__offset,L=Array.isArray(P.value)?P.value:[P.value],B=0;for(let V=0;V<L.length;V++){let O=L[V],k=x(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,F+B,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,_,v,T){let S=M.value,A=_+"_"+v;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{let D=T[A];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return T[A]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function p(M){let _=M.uniforms,v=0,T=16;for(let A=0,D=_.length;A<D;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,P=b.length;w<P;w++){let F=b[w],L=Array.isArray(F.value)?F.value:[F.value];for(let B=0,V=L.length;B<V;B++){let O=L[B],k=x(O),W=v%T,Y=W%k.boundary,ne=W+Y;v+=Y,ne!==0&&T-ne<k.storage&&(v+=T-ne),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=k.storage}}}let S=v%T;return S>0&&(v+=T-S),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Dy(){return ui===null&&(ui=new Gi(Iy,16,16,Ts,an),ui.name="DFG_LUT",ui.minFilter=Pt,ui.magFilter=Pt,ui.wrapS=nn,ui.wrapT=nn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var vr=class{constructor(e={}){let{canvas:t=Ud(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([gl,ml,pl]),m=new Set([mn,Kn,fr,Ki,fl,dl]),M=new Uint32Array(4),_=new Int32Array(4),v=null,T=null,S=[],A=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,w=!1;this._outputColorSpace=Ke;let P=0,F=0,L=null,B=-1,V=null,O=new at,k=new at,W=null,Y=new Se(0),ne=0,re=t.width,ie=t.height,ue=1,Ae=null,Oe=null,j=new at(0,0,re,ie),$=new at(0,0,re,ie),le=!1,me=new nr,oe=!1,ke=!1,Re=new De,Te=new I,Q=new at,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function fe(){return L===null?ue:1}let C=n;function _e(E,z){return t.getContext(E,z)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",ft,!1),C===null){let z="webgl2";if(C=_e(z,E),C===null)throw _e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw qe("WebGLRenderer: "+E.message),E}let ce,Le,ae,R,y,N,G,J,q,Ie,ge,Ce,Ge,he,ve,Ne,Be,xe,Ze,U,Me,pe,Pe,de;function se(){ce=new k_(C),ce.init(),pe=new Ty(C,ce),Le=new P_(C,ce,e,pe),ae=new Sy(C,ce),Le.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),R=new H_(C),y=new ly,N=new wy(C,ce,ae,y,Le,pe,R),G=new D_(b),J=new B_(b),q=new qg(C),Pe=new R_(C,q),Ie=new z_(C,q,R,Pe),ge=new W_(C,Ie,q,R),Ze=new G_(C,Le,N),Ne=new I_(y),Ce=new ay(b,G,J,ce,Le,Pe,Ne),Ge=new Cy(b,y),he=new hy,ve=new gy(ce),xe=new A_(b,G,J,ae,ge,p,l),Be=new My(b,ge,Le),de=new Py(C,R,Le,ae),U=new C_(C,ce,R),Me=new V_(C,ce,R),R.programs=Ce.programs,b.capabilities=Le,b.extensions=ce,b.properties=y,b.renderLists=he,b.shadowMap=Be,b.state=ae,b.info=R}se(),x!==mn&&(D=new q_(x,t.width,t.height,i,r));let ye=new tu(b,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(re,ie,!1))},this.getSize=function(E){return E.set(re,ie)},this.setSize=function(E,z,K=!0){if(ye.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,ie=z,t.width=Math.floor(E*ue),t.height=Math.floor(z*ue),K===!0&&(t.style.width=E+"px",t.style.height=z+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(re*ue,ie*ue).floor()},this.setDrawingBufferSize=function(E,z,K){re=E,ie=z,ue=K,t.width=Math.floor(E*K),t.height=Math.floor(z*K),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(x===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,z,K,Z){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,z,K,Z),ae.viewport(O.copy(j).multiplyScalar(ue).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,z,K,Z){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,z,K,Z),ae.scissor(k.copy($).multiplyScalar(ue).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){ae.setScissorTest(le=E)},this.setOpaqueSort=function(E){Ae=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,K=!0){let Z=0;if(E){let H=!1;if(L!==null){let be=L.texture.format;H=g.has(be)}if(H){let be=L.texture.type,Fe=m.has(be),Ee=xe.getClearColor(),Ue=xe.getClearAlpha(),Ve=Ee.r,Ye=Ee.g,We=Ee.b;Fe?(M[0]=Ve,M[1]=Ye,M[2]=We,M[3]=Ue,C.clearBufferuiv(C.COLOR,0,M)):(_[0]=Ve,_[1]=Ye,_[2]=We,_[3]=Ue,C.clearBufferiv(C.COLOR,0,_))}else Z|=C.COLOR_BUFFER_BIT}z&&(Z|=C.DEPTH_BUFFER_BIT),K&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),xe.dispose(),he.dispose(),ve.dispose(),y.dispose(),G.dispose(),J.dispose(),ge.dispose(),Pe.dispose(),de.dispose(),Ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",gf),ye.removeEventListener("sessionend",xf),is.stop()};function $e(E){E.preventDefault(),zr("WebGLRenderer: Context Lost."),w=!0}function Mt(){zr("WebGLRenderer: Context Restored."),w=!1;let E=R.autoReset,z=Be.enabled,K=Be.autoUpdate,Z=Be.needsUpdate,H=Be.type;se(),R.autoReset=E,Be.enabled=z,Be.autoUpdate=K,Be.needsUpdate=Z,Be.type=H}function ft(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ni(E){let z=E.target;z.removeEventListener("dispose",ni),mi(z)}function mi(E){dm(E),y.remove(E)}function dm(E){let z=y.get(E).programs;z!==void 0&&(z.forEach(function(K){Ce.releaseProgram(K)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,K,Z,H,be){z===null&&(z=te);let Fe=H.isMesh&&H.matrixWorld.determinant()<0,Ee=mm(E,z,K,Z,H);ae.setMaterial(Z,Fe);let Ue=K.index,Ve=1;if(Z.wireframe===!0){if(Ue=Ie.getWireframeAttribute(K),Ue===void 0)return;Ve=2}let Ye=K.drawRange,We=K.attributes.position,rt=Ye.start*Ve,gt=(Ye.start+Ye.count)*Ve;be!==null&&(rt=Math.max(rt,be.start*Ve),gt=Math.min(gt,(be.start+be.count)*Ve)),Ue!==null?(rt=Math.max(rt,0),gt=Math.min(gt,Ue.count)):We!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,We.count));let Et=gt-rt;if(Et<0||Et===1/0)return;Pe.setup(H,Z,Ee,K,Ue);let At,yt=U;if(Ue!==null&&(At=q.get(Ue),yt=Me,yt.setIndex(At)),H.isMesh)Z.wireframe===!0?(ae.setLineWidth(Z.wireframeLinewidth*fe()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(H.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),ae.setLineWidth(Xe*fe()),H.isLineSegments?yt.setMode(C.LINES):H.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else H.isPoints?yt.setMode(C.POINTS):H.isSprite&&yt.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ks("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xe=H._multiDrawStarts,dt=H._multiDrawCounts,lt=H._multiDrawCount,_n=Ue?q.get(Ue).bytesPerElement:1,Ds=y.get(Z).currentProgram.getUniforms();for(let vn=0;vn<lt;vn++)Ds.setValue(C,"_gl_DrawID",vn),yt.render(Xe[vn]/_n,dt[vn])}else if(H.isInstancedMesh)yt.renderInstances(rt,Et,H.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,dt=Math.min(K.instanceCount,Xe);yt.renderInstances(rt,Et,dt)}else yt.render(rt,Et)};function mf(E,z,K){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Jo(E,z,K),E.side=Gn,E.needsUpdate=!0,Jo(E,z,K),E.side=pn):Jo(E,z,K)}this.compile=function(E,z,K=null){K===null&&(K=E),T=ve.get(K),T.init(z),A.push(T),K.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==K&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();let Z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let be=H.material;if(be)if(Array.isArray(be))for(let Fe=0;Fe<be.length;Fe++){let Ee=be[Fe];mf(Ee,K,H),Z.add(Ee)}else mf(be,K,H),Z.add(be)}),T=A.pop(),Z},this.compileAsync=function(E,z,K=null){let Z=this.compile(E,z,K);return new Promise(H=>{function be(){if(Z.forEach(function(Fe){y.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){H(E);return}setTimeout(be,10)}ce.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Rc=null;function pm(E){Rc&&Rc(E)}function gf(){is.stop()}function xf(){is.start()}let is=new dp;is.setAnimationLoop(pm),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(E){Rc=E,ye.setAnimationLoop(E),E===null?is.stop():is.start()},ye.addEventListener("sessionstart",gf),ye.addEventListener("sessionend",xf),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;let K=ye.enabled===!0&&ye.isPresenting===!0,Z=D!==null&&(L===null||K)&&D.begin(b,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,z,L),T=ve.get(E,A.length),T.init(z),A.push(T),Re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(Re,Hn,z.reversedDepth),ke=this.localClippingEnabled,oe=Ne.init(this.clippingPlanes,ke),v=he.get(E,S.length),v.init(),S.push(v),ye.enabled===!0&&ye.isPresenting===!0){let Fe=b.xr.getDepthSensingMesh();Fe!==null&&Cc(Fe,z,-1/0,b.sortObjects)}Cc(E,z,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ae,Oe),ee=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ee&&xe.addToRenderList(v,E),this.info.render.frame++,oe===!0&&Ne.beginShadows();let H=T.state.shadowsArray;if(Be.render(H,E,z),oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&D.hasRenderPass())===!1){let Fe=v.opaque,Ee=v.transmissive;if(T.setupLights(),z.isArrayCamera){let Ue=z.cameras;if(Ee.length>0)for(let Ve=0,Ye=Ue.length;Ve<Ye;Ve++){let We=Ue[Ve];vf(Fe,Ee,E,We)}ee&&xe.render(E);for(let Ve=0,Ye=Ue.length;Ve<Ye;Ve++){let We=Ue[Ve];_f(v,E,We,We.viewport)}}else Ee.length>0&&vf(Fe,Ee,E,z),ee&&xe.render(E),_f(v,E,z)}L!==null&&F===0&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),Z&&D.end(b),E.isScene===!0&&E.onAfterRender(b,E,z),Pe.resetDefaultState(),B=-1,V=null,A.pop(),A.length>0?(T=A[A.length-1],oe===!0&&Ne.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function Cc(E,z,K,Z){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||me.intersectsSprite(E)){Z&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let Fe=ge.update(E),Ee=E.material;Ee.visible&&v.push(E,Fe,Ee,K,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||me.intersectsObject(E))){let Fe=ge.update(E),Ee=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Q.copy(Fe.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ee)){let Ue=Fe.groups;for(let Ve=0,Ye=Ue.length;Ve<Ye;Ve++){let We=Ue[Ve],rt=Ee[We.materialIndex];rt&&rt.visible&&v.push(E,Fe,rt,K,Q.z,We)}}else Ee.visible&&v.push(E,Fe,Ee,K,Q.z,null)}}let be=E.children;for(let Fe=0,Ee=be.length;Fe<Ee;Fe++)Cc(be[Fe],z,K,Z)}function _f(E,z,K,Z){let{opaque:H,transmissive:be,transparent:Fe}=E;T.setupLightsView(K),oe===!0&&Ne.setGlobalState(b.clippingPlanes,K),Z&&ae.viewport(O.copy(Z)),H.length>0&&$o(H,z,K),be.length>0&&$o(be,z,K),Fe.length>0&&$o(Fe,z,K),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function vf(E,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let rt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Xt(1,1,{generateMipmaps:!0,type:rt?an:mn,minFilter:Zn,samples:Le.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let be=T.state.transmissionRenderTarget[Z.id],Fe=Z.viewport||O;be.setSize(Fe.z*b.transmissionResolutionScale,Fe.w*b.transmissionResolutionScale);let Ee=b.getRenderTarget(),Ue=b.getActiveCubeFace(),Ve=b.getActiveMipmapLevel();b.setRenderTarget(be),b.getClearColor(Y),ne=b.getClearAlpha(),ne<1&&b.setClearColor(16777215,.5),b.clear(),ee&&xe.render(K);let Ye=b.toneMapping;b.toneMapping=jn;let We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),oe===!0&&Ne.setGlobalState(b.clippingPlanes,Z),$o(E,K,Z),N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be),ce.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let gt=0,Et=z.length;gt<Et;gt++){let At=z[gt],{object:yt,geometry:Xe,material:dt,group:lt}=At;if(dt.side===pn&&yt.layers.test(Z.layers)){let _n=dt.side;dt.side=Kt,dt.needsUpdate=!0,yf(yt,K,Z,Xe,dt,lt),dt.side=_n,dt.needsUpdate=!0,rt=!0}}rt===!0&&(N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be))}b.setRenderTarget(Ee,Ue,Ve),b.setClearColor(Y,ne),We!==void 0&&(Z.viewport=We),b.toneMapping=Ye}function $o(E,z,K){let Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,be=E.length;H<be;H++){let Fe=E[H],{object:Ee,geometry:Ue,group:Ve}=Fe,Ye=Fe.material;Ye.allowOverride===!0&&Z!==null&&(Ye=Z),Ee.layers.test(K.layers)&&yf(Ee,z,K,Ue,Ye,Ve)}}function yf(E,z,K,Z,H,be){E.onBeforeRender(b,z,K,Z,H,be),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,z,K,Z,E,be),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,b.renderBufferDirect(K,z,Z,H,E,be),H.side=Gn,H.needsUpdate=!0,b.renderBufferDirect(K,z,Z,H,E,be),H.side=pn):b.renderBufferDirect(K,z,Z,H,E,be),E.onAfterRender(b,z,K,Z,H,be)}function Jo(E,z,K){z.isScene!==!0&&(z=te);let Z=y.get(E),H=T.state.lights,be=T.state.shadowsArray,Fe=H.state.version,Ee=Ce.getParameters(E,H.state,be,z,K),Ue=Ce.getProgramCacheKey(Ee),Ve=Z.programs;Z.environment=E.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(E.isMeshStandardMaterial?J:G).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",ni),Ve=new Map,Z.programs=Ve);let Ye=Ve.get(Ue);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Fe)return bf(E,Ee),Ye}else Ee.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Ee,b),Ye=Ce.acquireProgram(Ee,Ue),Ve.set(Ue,Ye),Z.uniforms=Ee.uniforms;let We=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=Ne.uniform),bf(E,Ee),Z.needsLights=xm(E),Z.lightsStateVersion=Fe,Z.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function Mf(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=xr.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function bf(E,z){let K=y.get(E);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function mm(E,z,K,Z,H){z.isScene!==!0&&(z=te),N.resetTextureUnits();let be=z.fog,Fe=Z.isMeshStandardMaterial?z.environment:null,Ee=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:jt,Ue=(Z.isMeshStandardMaterial?J:G).get(Z.envMap||Fe),Ve=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!K.morphAttributes.position,rt=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color,Et=jn;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=b.toneMapping);let At=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=At!==void 0?At.length:0,Xe=y.get(Z),dt=T.state.lights;if(oe===!0&&(ke===!0||E!==V)){let en=E===V&&Z.id===B;Ne.setState(Z,E,en)}let lt=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==dt.state.version||Xe.outputColorSpace!==Ee||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==Ue||Z.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ne.numPlanes||Xe.numIntersection!==Ne.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==Ye||Xe.morphTargets!==We||Xe.morphNormals!==rt||Xe.morphColors!==gt||Xe.toneMapping!==Et||Xe.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,Xe.__version=Z.version);let _n=Xe.currentProgram;lt===!0&&(_n=Jo(Z,z,H));let Ds=!1,vn=!1,Tr=!1,bt=_n.getUniforms(),cn=Xe.uniforms;if(ae.useProgram(_n.program)&&(Ds=!0,vn=!0,Tr=!0),Z.id!==B&&(B=Z.id,vn=!0),Ds||V!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(C,"projectionMatrix",E.projectionMatrix),bt.setValue(C,"viewMatrix",E.matrixWorldInverse);let hn=bt.map.cameraPosition;hn!==void 0&&hn.setValue(C,Te.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&bt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&bt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,vn=!0,Tr=!0)}if(Xe.needsLights&&(dt.state.directionalShadowMap.length>0&&bt.setValue(C,"directionalShadowMap",dt.state.directionalShadowMap,N),dt.state.spotShadowMap.length>0&&bt.setValue(C,"spotShadowMap",dt.state.spotShadowMap,N),dt.state.pointShadowMap.length>0&&bt.setValue(C,"pointShadowMap",dt.state.pointShadowMap,N)),H.isSkinnedMesh){bt.setOptional(C,H,"bindMatrix"),bt.setOptional(C,H,"bindMatrixInverse");let en=H.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),bt.setValue(C,"boneTexture",en.boneTexture,N))}H.isBatchedMesh&&(bt.setOptional(C,H,"batchingTexture"),bt.setValue(C,"batchingTexture",H._matricesTexture,N),bt.setOptional(C,H,"batchingIdTexture"),bt.setValue(C,"batchingIdTexture",H._indirectTexture,N),bt.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(C,"batchingColorTexture",H._colorsTexture,N));let En=K.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ze.update(H,K,_n),(vn||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,bt.setValue(C,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(cn.envMap.value=Ue,cn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(cn.envMapIntensity.value=z.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Dy()),vn&&(bt.setValue(C,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&gm(cn,Tr),be&&Z.fog===!0&&Ge.refreshFogUniforms(cn,be),Ge.refreshMaterialUniforms(cn,Z,ue,ie,T.state.transmissionRenderTarget[E.id]),xr.upload(C,Mf(Xe),cn,N)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xr.upload(C,Mf(Xe),cn,N),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&bt.setValue(C,"center",H.center),bt.setValue(C,"modelViewMatrix",H.modelViewMatrix),bt.setValue(C,"normalMatrix",H.normalMatrix),bt.setValue(C,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let en=Z.uniformsGroups;for(let hn=0,Pc=en.length;hn<Pc;hn++){let ss=en[hn];de.update(ss,_n),de.bind(ss,_n)}}return _n}function gm(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function xm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,z,K){let Z=y.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=z,y.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let K=y.get(E);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};let _m=C.createFramebuffer();this.setRenderTarget=function(E,z=0,K=0){L=E,P=z,F=K;let Z=null,H=!1,be=!1;if(E){let Ee=y.get(E);if(Ee.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(C.FRAMEBUFFER,Ee.__webglFramebuffer),O.copy(E.viewport),k.copy(E.scissor),W=E.scissorTest,ae.viewport(O),ae.scissor(k),ae.setScissorTest(W),B=-1;return}else if(Ee.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(Ee.__hasExternalTextures)N.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ye=E.depthTexture;if(Ee.__boundDepthTexture!==Ye){if(Ye!==null&&y.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}let Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);let Ve=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?Z=Ve[z][K]:Z=Ve[z],H=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?Z=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[K]:Z=Ve,O.copy(E.viewport),k.copy(E.scissor),W=E.scissorTest}else O.copy(j).multiplyScalar(ue).floor(),k.copy($).multiplyScalar(ue).floor(),W=le;if(K!==0&&(Z=_m),ae.bindFramebuffer(C.FRAMEBUFFER,Z)&&ae.drawBuffers(E,Z),ae.viewport(O),ae.scissor(k),ae.setScissorTest(W),H){let Ee=y.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ee.__webglTexture,K)}else if(be){let Ee=z;for(let Ue=0;Ue<E.textures.length;Ue++){let Ve=y.get(E.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,Ve.__webglTexture,K,Ee)}}else if(E!==null&&K!==0){let Ee=y.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,K)}B=-1},this.readRenderTargetPixels=function(E,z,K,Z,H,be,Fe,Ee=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ue=Ue[Fe]),Ue){ae.bindFramebuffer(C.FRAMEBUFFER,Ue);try{let Ve=E.textures[Ee],Ye=Ve.format,We=Ve.type;if(!Le.textureFormatReadable(Ye)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(We)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Z&&K>=0&&K<=E.height-H&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(z,K,Z,H,pe.convert(Ye),pe.convert(We),be))}finally{let Ve=L!==null?y.get(L).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,z,K,Z,H,be,Fe,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ue=Ue[Fe]),Ue)if(z>=0&&z<=E.width-Z&&K>=0&&K<=E.height-H){ae.bindFramebuffer(C.FRAMEBUFFER,Ue);let Ve=E.textures[Ee],Ye=Ve.format,We=Ve.type;if(!Le.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.bufferData(C.PIXEL_PACK_BUFFER,be.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(z,K,Z,H,pe.convert(Ye),pe.convert(We),0);let gt=L!==null?y.get(L).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,gt);let Et=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Od(C,Et,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,be),C.deleteBuffer(rt),C.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,K=0){let Z=Math.pow(2,-K),H=Math.floor(E.image.width*Z),be=Math.floor(E.image.height*Z),Fe=z!==null?z.x:0,Ee=z!==null?z.y:0;N.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Fe,Ee,H,be),ae.unbindTexture()};let vm=C.createFramebuffer(),ym=C.createFramebuffer();this.copyTextureToTexture=function(E,z,K=null,Z=null,H=0,be=null){be===null&&(H!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=H,H=0):be=0);let Fe,Ee,Ue,Ve,Ye,We,rt,gt,Et,At=E.isCompressedTexture?E.mipmaps[be]:E.image;if(K!==null)Fe=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ve=K.min.x,Ye=K.min.y,We=K.isBox3?K.min.z:0;else{let En=Math.pow(2,-H);Fe=Math.floor(At.width*En),Ee=Math.floor(At.height*En),E.isDataArrayTexture?Ue=At.depth:E.isData3DTexture?Ue=Math.floor(At.depth*En):Ue=1,Ve=0,Ye=0,We=0}Z!==null?(rt=Z.x,gt=Z.y,Et=Z.z):(rt=0,gt=0,Et=0);let yt=pe.convert(z.format),Xe=pe.convert(z.type),dt;z.isData3DTexture?(N.setTexture3D(z,0),dt=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),dt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);let lt=C.getParameter(C.UNPACK_ROW_LENGTH),_n=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ds=C.getParameter(C.UNPACK_SKIP_PIXELS),vn=C.getParameter(C.UNPACK_SKIP_ROWS),Tr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ye),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We);let bt=E.isDataArrayTexture||E.isData3DTexture,cn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let En=y.get(E),en=y.get(z),hn=y.get(En.__renderTarget),Pc=y.get(en.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,hn.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pc.__webglFramebuffer);for(let ss=0;ss<Ue;ss++)bt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(E).__webglTexture,H,We+ss),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(z).__webglTexture,be,Et+ss)),C.blitFramebuffer(Ve,Ye,Fe,Ee,rt,gt,Fe,Ee,C.DEPTH_BUFFER_BIT,C.NEAREST);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||y.has(E)){let En=y.get(E),en=y.get(z);ae.bindFramebuffer(C.READ_FRAMEBUFFER,vm),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,ym);for(let hn=0;hn<Ue;hn++)bt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,H,We+hn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,H),cn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,en.__webglTexture,be,Et+hn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,en.__webglTexture,be),H!==0?C.blitFramebuffer(Ve,Ye,Fe,Ee,rt,gt,Fe,Ee,C.COLOR_BUFFER_BIT,C.NEAREST):cn?C.copyTexSubImage3D(dt,be,rt,gt,Et+hn,Ve,Ye,Fe,Ee):C.copyTexSubImage2D(dt,be,rt,gt,Ve,Ye,Fe,Ee);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(dt,be,rt,gt,Et,Fe,Ee,Ue,yt,Xe,At.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(dt,be,rt,gt,Et,Fe,Ee,Ue,yt,At.data):C.texSubImage3D(dt,be,rt,gt,Et,Fe,Ee,Ue,yt,Xe,At):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,be,rt,gt,Fe,Ee,yt,Xe,At.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,be,rt,gt,At.width,At.height,yt,At.data):C.texSubImage2D(C.TEXTURE_2D,be,rt,gt,Fe,Ee,yt,Xe,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_n),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ds),C.pixelStorei(C.UNPACK_SKIP_ROWS,vn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tr),be===0&&z.generateMipmaps&&C.generateMipmap(dt),ae.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){P=0,F=0,L=null,ae.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var _p={type:"change"},iu={type:"start"},yp={type:"end"},tc=new wi,vp=new Rn,Ly=Math.cos(70*xt.DEG2RAD),Gt=new I,xn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nu=1e-6,nc=class extends mo{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new St,this._lastTargetPosition=new I,this._quat=new St().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ar,this._sphericalDelta=new ar,this._scale=1,this._panOffset=new I,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new I,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ny.bind(this),this._onPointerDown=Fy.bind(this),this._onPointerUp=Uy.bind(this),this._onContextMenu=Gy.bind(this),this._onMouseWheel=ky.bind(this),this._onKeyDown=zy.bind(this),this._onTouchStart=Vy.bind(this),this._onTouchMove=Hy.bind(this),this._onMouseDown=Oy.bind(this),this._onMouseMove=By.bind(this),this._interceptControlDown=Wy.bind(this),this._interceptControlUp=Xy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_p),this.update(),this.state=_t.NONE}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Gt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<Ly?this.object.lookAt(this.target):(vp.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(vp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nu||this._lastTargetPosition.distanceToSquared(this.target)>nu?(this.dispatchEvent(_p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Gt.copy(i).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new X,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Fy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ny(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Uy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yp),this.state=_t.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Oy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=_t.DOLLY;break;case Yi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}break;case Yi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(iu)}function By(s){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ky(s){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(s.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(yp))}function zy(s){this.enabled!==!1&&this._handleKeyDown(s)}function Vy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=_t.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=_t.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(iu)}function Hy(s){switch(this._trackPointer(s),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=_t.NONE}}function Gy(s){this.enabled!==!1&&s.preventDefault()}function Wy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mp(){return{kind:"table",name:"Dining Table",widthMm:1800,depthMm:900,heightMm:750,topThicknessMm:32,legStyle:"tapered",legThicknessMm:70,legInsetMm:40,apron:!0,apronHeightMm:90}}function bp(){return{kind:"bookshelf",name:"Bookshelf",widthMm:900,heightMm:1800,depthMm:300,shelfCount:4,stockThicknessMm:18,backPanel:!0}}function Sp(){return{kind:"cabinet",name:"Sideboard Cabinet",widthMm:1400,heightMm:800,depthMm:450,doorCount:2,stockThicknessMm:18,legHeightMm:150}}function wp(){return{kind:"drawerbox",name:"Drawer Box",widthMm:500,depthMm:450,heightMm:150,stockThicknessMm:13,bottomThicknessMm:6,joinery:"halfblind"}}function Tp(){return{kind:"door",name:"Cabinet Door",widthMm:400,heightMm:720,thicknessMm:19,style:"shaker",railStileWidthMm:64,panelThicknessMm:6,hingeBoring:!0}}function Ep(){return{kind:"drawerfront",name:"Drawer Front",widthMm:600,heightMm:200,thicknessMm:19,style:"shaker",railStileWidthMm:50,panelThicknessMm:6}}function Ap(){return{kind:"drawerunit",name:"Drawer Unit",widthMm:600,heightMm:750,depthMm:500,drawerCount:3,columnCount:1,insideBevelMm:0,dividerRails:!1,openDrawer:0,openColumn:1,openAmountMm:300,stockThicknessMm:18,boxStockThicknessMm:13,frontStyle:"shaker"}}function qy(){return{kind:"endtable",name:"Coastal End Table",widthMm:500,depthMm:400,heightMm:560,stockThicknessMm:18,drawerHeightMm:130,boxStockThicknessMm:13,bottomShelfLiftMm:40,openMm:0}}function Yy(s){switch(s){case"table":return Mp();case"bookshelf":return bp();case"cabinet":return Sp();case"drawerbox":return wp();case"door":return Tp();case"drawerfront":return Ep();case"drawerunit":return Ap();case"endtable":return qy()}}function su(s){let e=(t,n)=>{if(!Number.isFinite(t)||t<=0)throw new Error(`${s.kind}: ${n} must be a positive number, got ${t}`)};switch(s.kind){case"table":{if(e(s.widthMm,"widthMm"),e(s.depthMm,"depthMm"),e(s.heightMm,"heightMm"),e(s.topThicknessMm,"topThicknessMm"),e(s.legThicknessMm,"legThicknessMm"),s.topThicknessMm>=s.heightMm)throw new Error("table: topThicknessMm must be less than heightMm");let t=2*(s.legInsetMm+s.legThicknessMm);if(s.widthMm<=t||s.depthMm<=t)throw new Error("table: legs do not fit \u2014 reduce legInsetMm or legThicknessMm");break}case"bookshelf":{if(e(s.widthMm,"widthMm"),e(s.heightMm,"heightMm"),e(s.depthMm,"depthMm"),e(s.stockThicknessMm,"stockThicknessMm"),!Number.isInteger(s.shelfCount)||s.shelfCount<0)throw new Error("bookshelf: shelfCount must be a non-negative integer");let t=s.heightMm-2*s.stockThicknessMm,n=(s.shelfCount+1)*100+s.shelfCount*s.stockThicknessMm;if(t<n)throw new Error("bookshelf: too many shelves for the given height (need \u2265100mm per opening)");break}case"cabinet":{if(e(s.widthMm,"widthMm"),e(s.heightMm,"heightMm"),e(s.depthMm,"depthMm"),e(s.stockThicknessMm,"stockThicknessMm"),!Number.isInteger(s.doorCount)||s.doorCount<1||s.doorCount>4)throw new Error("cabinet: doorCount must be an integer between 1 and 4");if(s.legHeightMm<0||s.legHeightMm>=s.heightMm)throw new Error("cabinet: legHeightMm must be \u2265 0 and less than heightMm");break}case"drawerbox":{if(e(s.widthMm,"widthMm"),e(s.depthMm,"depthMm"),e(s.heightMm,"heightMm"),e(s.stockThicknessMm,"stockThicknessMm"),e(s.bottomThicknessMm,"bottomThicknessMm"),s.widthMm<=2*s.stockThicknessMm+20)throw new Error("drawerbox: widthMm too small for the stock thickness");if(s.heightMm<40)throw new Error("drawerbox: heightMm must be at least 40mm");break}case"door":case"drawerfront":{if(e(s.widthMm,"widthMm"),e(s.heightMm,"heightMm"),e(s.thicknessMm,"thicknessMm"),s.style!=="slab"){if(e(s.railStileWidthMm,"railStileWidthMm"),e(s.panelThicknessMm,"panelThicknessMm"),s.style==="shaker"&&s.panelThicknessMm>=s.thicknessMm)throw new Error(`${s.kind}: panelThicknessMm must be less than thicknessMm`);if(2*s.railStileWidthMm+50>s.widthMm||2*s.railStileWidthMm+50>s.heightMm)throw new Error(`${s.kind}: railStileWidthMm too wide \u2014 no room for the center panel`);if(s.kind==="drawerfront"&&s.fingerPull)throw new Error(`${s.kind}: fingerPull is routed into slab fronts \u2014 set style to "slab"`);if(s.style==="raised"){let t=s.raiseWidthMm??38,n=Math.min(s.widthMm-2*s.railStileWidthMm,s.heightMm-2*s.railStileWidthMm);if(2*t+20>n)throw new Error(`${s.kind}: raiseWidthMm too wide \u2014 no flat field left on the panel`)}}break}case"drawerunit":{if(e(s.widthMm,"widthMm"),e(s.heightMm,"heightMm"),e(s.depthMm,"depthMm"),e(s.stockThicknessMm,"stockThicknessMm"),e(s.boxStockThicknessMm,"boxStockThicknessMm"),!Number.isInteger(s.drawerCount)||s.drawerCount<1||s.drawerCount>8)throw new Error("drawerunit: drawerCount must be an integer between 1 and 8");if((s.heightMm-2*s.stockThicknessMm)/s.drawerCount<80)throw new Error("drawerunit: too many drawers for the height (need \u226580mm per drawer)");if(s.widthMm<=2*s.stockThicknessMm+2*13+50)throw new Error("drawerunit: widthMm too small for slides and drawer boxes");if(s.fingerPull&&s.frontStyle!=="slab")throw new Error('drawerunit: fingerPull is routed into slab fronts \u2014 set frontStyle to "slab"');let n=s.columnCount??1;if(!Number.isInteger(n)||n<1||n>4)throw new Error("drawerunit: columnCount must be an integer between 1 and 4");if((s.widthMm-2*s.stockThicknessMm-(n-1)*s.stockThicknessMm)/n<=2*13+50)throw new Error("drawerunit: too many columns for the width \u2014 drawer boxes need room for slides");if(s.insideBevelMm){if(s.insideBevelMm<0||s.insideBevelMm>8)throw new Error("drawerunit: insideBevelMm must be between 0 and 8");if(s.frontMount!=="inset")throw new Error('drawerunit: insideBevelMm is an inset-front detail \u2014 set frontMount to "inset"')}if(s.openDrawer){if(!Number.isInteger(s.openDrawer)||s.openDrawer<0||s.openDrawer>s.drawerCount)throw new Error("drawerunit: openDrawer must be a row number between 0 (closed) and drawerCount");let r=s.openColumn??1;if(!Number.isInteger(r)||r<1||r>n)throw new Error("drawerunit: openColumn must be between 1 and columnCount")}break}case"endtable":{if(e(s.widthMm,"widthMm"),e(s.depthMm,"depthMm"),e(s.heightMm,"heightMm"),e(s.stockThicknessMm,"stockThicknessMm"),e(s.drawerHeightMm,"drawerHeightMm"),e(s.boxStockThicknessMm,"boxStockThicknessMm"),s.drawerHeightMm>s.heightMm*.5)throw new Error("endtable: drawerHeightMm too tall for the case");if(s.widthMm<=2*s.stockThicknessMm+2*13+50)throw new Error("endtable: widthMm too small for slides and a drawer box");if(s.heightMm<=s.drawerHeightMm+s.bottomShelfLiftMm+3*s.stockThicknessMm+120)throw new Error("endtable: not enough height for the drawer bay and shelves");break}}}var Ji=1.5875;function Fo(s){switch(su(s),s.kind){case"table":return jy(s);case"bookshelf":return Zy(s);case"cabinet":return Ky(s);case"drawerbox":return $y(s);case"door":case"drawerfront":return Jy(s);case"drawerunit":return eM(s);case"endtable":return Qy(s)}}function jy(s){let e=[],{widthMm:t,depthMm:n,heightMm:i}=s,r=i-s.topThicknessMm,o=s.legThicknessMm;e.push({name:"Tabletop",shape:"box",sizeMm:[t,s.topThicknessMm,n],positionMm:[0,i-s.topThicknessMm/2,0],role:"surface",grainAxis:"x"});let a=s.legStyle==="round"?"cylinder":s.legStyle==="tapered"?"taperedLeg":"box",l=t/2-s.legInsetMm-o/2,c=n/2-s.legInsetMm-o/2;for(let[h,u]of[[1,1],[1,-1],[-1,1],[-1,-1]])e.push({name:"Leg",shape:a,sizeMm:[o,r,o],positionMm:[h*l,r/2,u*c],role:"structure",grainAxis:"y"});if(s.apron){let u=i-s.topThicknessMm-s.apronHeightMm/2,f=t-2*s.legInsetMm-2*o,d=n-2*s.legInsetMm-2*o;for(let p of[1,-1])e.push({name:"Apron rail (long)",shape:"box",sizeMm:[f,s.apronHeightMm,22],positionMm:[0,u,p*(c+o/2-22/2)],role:"structure",grainAxis:"x"});for(let p of[1,-1])e.push({name:"Apron rail (short)",shape:"box",sizeMm:[22,s.apronHeightMm,d],positionMm:[p*(l+o/2-22/2),u,0],role:"structure",grainAxis:"z"})}return{spec:s,parts:e,overallMm:[t,i,n]}}function Zy(s){let e=[],{widthMm:t,heightMm:n,depthMm:i,stockThicknessMm:r}=s,o=s.backPanel?6:0,a=i-o;for(let f of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,n,a],positionMm:[f*(t/2-r/2),n/2,o/2],role:"structure",grainAxis:"y"});let l=t-2*r;e.push({name:"Top panel",shape:"box",sizeMm:[l,r,a],positionMm:[0,n-r/2,o/2],role:"structure",grainAxis:"x"}),e.push({name:"Bottom panel",shape:"box",sizeMm:[l,r,a],positionMm:[0,r/2,o/2],role:"structure",grainAxis:"x"});let c=n-2*r,h=s.shelfCount+1,u=(c-s.shelfCount*r)/h;for(let f=1;f<=s.shelfCount;f++){let d=r+f*u+(f-.5)*r;e.push({name:"Shelf",shape:"box",sizeMm:[l,r,a-20],positionMm:[0,d,o/2+10],role:"surface",grainAxis:"x"})}return s.backPanel&&e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t,n,o],positionMm:[0,n/2,-i/2+o/2],role:"panel",grainAxis:"y"}),{spec:s,parts:e,overallMm:[t,n,i]}}function Ky(s){let e=[],{widthMm:t,heightMm:n,depthMm:i,stockThicknessMm:r}=s,o=s.legHeightMm,a=n-o,l=6,c=18,h=i-l-c,u=(l-c)/2;for(let M of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,a,h],positionMm:[M*(t/2-r/2),o+a/2,u],role:"structure",grainAxis:"y"});let f=t-2*r,d=20;e.push({name:"Top",shape:"box",sizeMm:[t+2*d,r,i+d],positionMm:[0,n+r/2,d/2],role:"surface",grainAxis:"x"}),e.push({name:"Bottom panel",shape:"box",sizeMm:[f,r,h],positionMm:[0,o+r/2,u],role:"structure",grainAxis:"x"}),e.push({name:"Top stretcher",shape:"box",sizeMm:[f,r,h],positionMm:[0,o+a-r/2,u],role:"structure",grainAxis:"x"}),e.push({name:"Interior shelf",shape:"box",sizeMm:[f,r,h-20],positionMm:[0,o+a/2,u+10],role:"surface",grainAxis:"x"}),e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t,a,l],positionMm:[0,o+a/2,-i/2+l/2],role:"panel",grainAxis:"x"});let p=3,x=(t-p*(s.doorCount+1))/s.doorCount,g=a-2*p,m=i/2-c/2;for(let M=0;M<s.doorCount;M++){let _=-t/2+p+x/2+M*(x+p);e.push({name:"Door",shape:"box",sizeMm:[x,g,c],positionMm:[_,o+p+g/2,m],role:"panel",grainAxis:"y"});let v=_<=0?1:-1;e.push({name:"Handle",shape:"cylinder",sizeMm:[12,110,12],positionMm:[_+v*(x/2-35),o+a*.55,m+c/2+18],role:"hardware",grainAxis:"y"})}if(o>0)for(let[v,T]of[[1,1],[1,-1],[-1,1],[-1,-1]])e.push({name:"Leg",shape:"taperedLeg",sizeMm:[35,o,35],positionMm:[v*(t/2-25-35/2),o/2,T*(i/2-25-35/2)],role:"structure",grainAxis:"y"});return{spec:s,parts:e,overallMm:[t+2*d,n+r,i+d]}}function $y(s){let e=[],{widthMm:t,depthMm:n,heightMm:i,stockThicknessMm:r}=s,o=s.joinery==="halfblind",a=s.joinery==="dovetail"||s.joinery==="boxjoint",l=1.5875,c=s.scoop?{widthMm:Math.min(142,t*.38),depthMm:Math.min(19.05,i*.35)}:void 0;for(let h of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[r,i,o?n-2*l:n],positionMm:[h*(t/2-r/2),i/2,0],role:"structure",grainAxis:"z",joinery:a?{type:s.joinery,role:"tails",matingThicknessMm:r}:o?{type:"dovetail",role:"tails",matingThicknessMm:r,frontLipMm:l,backLipMm:l}:void 0});for(let h of[1,-1])e.push({name:h>0?"Drawer front (box)":"Drawer back (box)",shape:"box",sizeMm:[s.joinery==="dado"?t-2*r:t,i,r],positionMm:[0,i/2,h*(n/2-r/2)],role:"structure",grainAxis:"x",joinery:a?{type:s.joinery,role:"pins",matingThicknessMm:r,pinsOuterSign:h}:o?{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:h,lipMm:l}:void 0,scoop:h>0?c:void 0});return e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[t-2*r+12,s.bottomThicknessMm,n-2*r+12],positionMm:[0,12+s.bottomThicknessMm/2,0],role:"panel",grainAxis:"x"}),{spec:s,parts:e,overallMm:[t,i,n]}}function Rp(s,e){let{style:t,widthMm:n,heightMm:i,thicknessMm:r,railStileWidthMm:o}=e,{centerXMm:a,bottomYMm:l,centerZMm:c,namePrefix:h}=e,u=e.edgeProfile&&e.edgeProfile!=="square"?e.edgeProfile:void 0,f=e.outerEdgeProfile&&e.outerEdgeProfile!=="square"?e.outerEdgeProfile:void 0,d=e.frameJoint==="miter";if(t==="slab"){s.push({name:`${h}`,shape:"box",sizeMm:[n,i,r],positionMm:[a,l+i/2,c],role:"panel",grainAxis:e.slabGrain,fingerPullTop:e.fingerPull||void 0,edgeProfile:f?{outer:f,axis:"slab"}:void 0});return}for(let g of[1,-1])s.push({name:`${h} stile`,shape:"box",sizeMm:[o,i,r],positionMm:[a+g*(n/2-o/2),l+i/2,c],role:"structure",grainAxis:"y",edgeProfile:{inner:u,outer:f,innerSide:g>0?"x-":"x+",axis:"y",innerInsetMm:0,miterEnds:d,stickGroove:!d}});for(let g of[0,1])s.push({name:`${h} rail`,shape:"box",sizeMm:[d?n:n-2*o+20,o,r],positionMm:[a,l+(g?i-o/2:o/2),c],role:"structure",grainAxis:"x",edgeProfile:{inner:u,outer:f,innerSide:g?"y-":"y+",axis:"x",innerInsetMm:0,miterEnds:d,copeTenonMm:d?void 0:10}});if(e.glassPanel){s.push({name:`${h} glass`,shape:"box",sizeMm:[n-2*o+24,i-2*o+24,4],positionMm:[a,l+i/2,c+r/2-10],role:"glass",grainAxis:e.slabGrain,frameRecess:{overlapMm:12,reachMm:16}});return}let p=e.panelThicknessMm,x=t==="raised";s.push({name:`${h} panel`,shape:"box",sizeMm:[n-2*o+20,i-2*o+20,p],positionMm:[a,l+i/2,x?c+(r-p)/2:c+r/2-6-p/2],role:"panel",grainAxis:e.slabGrain,frameRecess:{overlapMm:10,reachMm:x?14:20},raisedPanel:x?{profile:e.raiseProfile??"cove",raiseWidthMm:e.raiseWidthMm??38,tongueThicknessMm:6}:void 0})}function Jy(s){let e=[];return Rp(e,{style:s.style,widthMm:s.widthMm,heightMm:s.heightMm,thicknessMm:s.thicknessMm,railStileWidthMm:s.railStileWidthMm,panelThicknessMm:s.panelThicknessMm,raiseProfile:s.raiseProfile,raiseWidthMm:s.raiseWidthMm,edgeProfile:s.edgeProfile,outerEdgeProfile:s.outerEdgeProfile,frameJoint:s.frameJoint,glassPanel:s.kind==="door"?s.glassPanel:void 0,fingerPull:s.kind==="drawerfront"?s.fingerPull:void 0,centerXMm:0,bottomYMm:0,centerZMm:0,namePrefix:s.kind==="door"?"Door":"Front",slabGrain:s.kind==="door"?"y":"x"}),{spec:s,parts:e,overallMm:[s.widthMm,s.heightMm,s.thicknessMm]}}function Qy(s){let e=[],{widthMm:t,depthMm:n,heightMm:i,stockThicknessMm:r}=s,o=2,a=19,l=13,c=i-r;for(let S of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,i,n],positionMm:[S*(t/2-r/2),i/2,0],role:"structure",grainAxis:"y",joinery:{type:"dovetail",role:"tails",matingThicknessMm:r,orient:"case",singleEnd:!0}});e.push({name:"Top",shape:"box",sizeMm:[t,r,n],positionMm:[0,i-r/2,0],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:1,orient:"case"}});let h=t-2*r,u=s.drawerHeightMm+2*o,f=n-10,d=c-u,p=(s.bottomShelfLiftMm+r+d)/2;for(let[S,A]of[["Middle shelf",p],["Bottom shelf",s.bottomShelfLiftMm+r/2]])e.push({name:S,shape:"box",sizeMm:[h,r,f],positionMm:[0,A,-5],role:"structure",grainAxis:"x"});e.push({name:"Rear rail",shape:"box",sizeMm:[h,60,r],positionMm:[0,c-30,-(n/2-r/2)],role:"structure",grainAxis:"x"});let x=Math.max(0,s.openMm??0);e.push({name:"Drawer front",shape:"box",sizeMm:[h-2*o,s.drawerHeightMm,a],positionMm:[0,d+o+s.drawerHeightMm/2,n/2-a/2+x],role:"panel",grainAxis:"x"});let g=s.boxStockThicknessMm,m=h-2*l,M=Math.max(150,Math.floor((n-60)/50)*50),_=Math.max(60,u-25),v=d+10,T=n/2-a-M/2-5+x;for(let S of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[g,_,M-2*Ji],positionMm:[S*(m/2-g/2),v+_/2,T],role:"structure",grainAxis:"z",joinery:{type:"dovetail",role:"tails",matingThicknessMm:g,frontLipMm:Ji,backLipMm:Ji}});for(let S of[1,-1])e.push({name:S>0?"Drawer box front":"Drawer box back",shape:"box",sizeMm:[m,_,g],positionMm:[0,v+_/2,T+S*(M/2-g/2)],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:g,pinsOuterSign:S,lipMm:Ji}});return e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[m-2*g+12,6,M-2*g+12],positionMm:[0,v+12+3,T],role:"panel",grainAxis:"x"}),{spec:s,parts:e,overallMm:[t,i,n]}}function eM(s){let e=[],{widthMm:t,heightMm:n,depthMm:i,stockThicknessMm:r}=s,o=6,a=19,l=s.frontMount==="inset",c=l?2:3,h=13,u=l?i:i-a,f=i/2,d=l?0:-a/2,p=6.35,x=u-o-p,g=s.caseJoinery==="halfblind",m=1.5875,M=l?s.insideBevelMm??0:0;for(let Y of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,g?n-2*m:n,u],positionMm:[Y*(t/2-r/2),n/2,d],role:"structure",grainAxis:"y",joinery:{type:"dovetail",role:"tails",matingThicknessMm:r,frontLipMm:g?m:void 0,frontBevelMm:M||void 0,bevelInnerSign:-Y,orient:"case"}});let _=t-2*r;for(let Y of[0,1])e.push({name:Y?"Top panel":"Bottom panel",shape:"box",sizeMm:[t,r,u],positionMm:[0,Y?n-r/2:r/2,d],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:Y?1:-1,lipMm:g?m:void 0,frontBevelMm:M||void 0,orient:"case"}});e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t-2*r+20,n-2*r+20,o],positionMm:[0,n/2,d-u/2+p+o/2],role:"panel",grainAxis:"y"});let v=s.drawerCount,T=s.slideType==="undermount",S=s.boxStockThicknessMm,A=Math.min(x-25,Math.floor((x-25)/50)*50),D=T?16:10,b=Math.max(1,s.columnCount??1),w=(s.columnDivider??"setback")==="setback",P=(_-(b-1)*r)/b;for(let Y=1;Y<b;Y++){let ne=-t/2+r+Y*(P+r)-r/2;e.push({name:"Column divider",shape:"box",sizeMm:[r,n-2*r,l&&w?u-a:u],positionMm:[ne,n/2,d-(l&&w?a/2:0)],role:"structure",grainAxis:"y",frontBevel:M&&!w?{bevelMm:M,sides:["x+","x-"]}:void 0})}let F=P-2*(T?5:h),L=l&&s.dividerRails?20:0,B=n-2*r,V=l?(B-(v-1)*L)/v:(n-4-3*(v-1))/v,O=(t-4-3*(b-1))/b,k=l?V-2*c:V,W=i/2-a/2-M;for(let Y=0;Y<b;Y++){let ne=-t/2+r+Y*(P+r),re=ne+P,ie=(ne+re)/2,ue=l?Y===0||!w?ne+c:ne-r/2+c/2:0,Ae=l?Y===b-1||!w?re-c:re+r/2-c/2:0,Oe=l?Ae-ue:O,j=l?(ue+Ae)/2:-t/2+2+O/2+Y*(O+3);for(let $=0;$<v;$++){let le=l?r+$*(V+L):2+$*(V+3),me=le+(l?c:0),ke=s.openDrawer===$+1&&(s.openColumn??1)===Y+1?Math.min(s.openAmountMm??A*.6,A-60):0;L>0&&$>0&&e.push({name:"Divider rail",shape:"box",sizeMm:[P,L,a],positionMm:[ie,le-L/2,f-a/2],role:"structure",grainAxis:"x",frontBevel:M?{bevelMm:M,sides:["y+","y-"]}:void 0}),Rp(e,{style:s.frontStyle,widthMm:Oe,heightMm:k,thicknessMm:a,railStileWidthMm:50,panelThicknessMm:s.frontStyle==="raised"?a:6,raiseProfile:s.raiseProfile,raiseWidthMm:32,edgeProfile:s.edgeProfile,outerEdgeProfile:s.outerEdgeProfile,frameJoint:s.frameJoint,fingerPull:s.fingerPull,centerXMm:j,bottomYMm:me,centerZMm:W+ke,namePrefix:"Drawer front",slabGrain:"x"});let Re=le+D,Te=Math.max(60,V-(T?38:30)),Q=i/2-M-a-A/2-5+ke;for(let te of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[S,Te,A-2*Ji],positionMm:[ie+te*(F/2-S/2),Re+Te/2,Q],role:"structure",grainAxis:"z",joinery:{type:"dovetail",role:"tails",matingThicknessMm:S,frontLipMm:Ji,backLipMm:Ji}});for(let te of[1,-1])e.push({name:te>0?"Drawer box front":"Drawer box back",shape:"box",sizeMm:[F,Te,S],positionMm:[ie,Re+Te/2,Q+te*(A/2-S/2)],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:S,pinsOuterSign:te,lipMm:Ji}});e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[F-2*S+12,6,A-2*S+12],positionMm:[ie,Re+12+3,Q],role:"panel",grainAxis:"x"})}}return{spec:s,parts:e,overallMm:[t,n,i]}}var tM=25.4;function nM(s){return s*25.4}function Cp(s){return s/25.4}function Qi(s,e=16){let t=Cp(Math.abs(s)),n=Math.floor(t),i=Math.round((t-n)*e),r=e;for(i===r&&(n+=1,i=0);i>0&&i%2===0&&r%2===0;)i/=2,r/=2;let o=s<0?"-":"";return i===0?`${o}${n}"`:n===0?`${o}${i}/${r}"`:`${o}${n}-${i}/${r}"`}function ou(s){let e=Fo(s),t=iM(e),[n,i,r]=e.overallMm;return{title:s.name??`Custom ${s.kind}`,overview:lM(e),overallDimensionsMm:{width:n,height:i,depth:r},overallDimensionsIn:{width:Qi(n),height:Qi(i),depth:Qi(r)},cutList:t,hardware:oM(e),tools:aM(e),steps:cM(e),boardFeet:rM(e),estimatedHours:hM(e)}}function iM(s){let e=new Map;for(let t of s.parts){if(t.role==="hardware")continue;let n=sM(t),i=`${t.name}|${n.join("x")}`,r=e.get(i);r?r.quantity+=1:e.set(i,{part:t.name,quantity:1,lengthMm:n[0],widthMm:n[1],thicknessMm:n[2],lengthIn:Qi(n[0]),widthIn:Qi(n[1]),thicknessIn:Qi(n[2]),notes:t.role==="glass"?"Glass \u2014 order tempered from supplier":t.fingerPullTop?`Finger-pull channel routed along the top edge (Freeborn 57-024 style)${t.edgeProfile?.outer?`; ${t.edgeProfile.outer} door-edge detail, sides and bottom`:""}`:t.scoop?`Finger scoop ${Math.round(t.scoop.widthMm)} \xD7 ${Math.round(t.scoop.depthMm)}mm in top edge`:t.raisedPanel?`Raised panel \u2014 ${t.raisedPanel.profile} profile, ${t.raisedPanel.raiseWidthMm}mm raise`:t.edgeProfile?[t.edgeProfile.miterEnds&&"45\xB0 mitered ends (long-point length)",t.edgeProfile.inner&&`${t.edgeProfile.inner} pattern, inner edge${t.edgeProfile.miterEnds?"":" (cope & pattern T&G)"}`,t.edgeProfile.copeTenonMm&&`coped ends \u2014 length includes ${t.edgeProfile.copeTenonMm}mm stub tenons`,t.edgeProfile.outer&&`${t.edgeProfile.outer} door-edge detail, outer edge`].filter(Boolean).join("; "):t.shape==="taperedLeg"?"Taper to 60% at the foot":t.shape==="cylinder"?"Turned round":void 0})}return[...e.values()].sort((t,n)=>n.lengthMm*n.widthMm-t.lengthMm*t.widthMm)}function sM(s){let[e,t,n]=s.sizeMm,i={x:[e,n,t],y:[t,e,n],z:[n,e,t]},[r,o,a]=i[s.grainAxis];return[ru(r),ru(Math.max(o,a)),ru(Math.min(o,a))]}function rM(s){let e=0;for(let n of s.parts){if(n.role==="hardware"||n.role==="glass")continue;let[i,r,o]=n.sizeMm;Math.min(i,r,o)<=6||(e+=i*r*o)}let t=e/16387.064;return Math.round(t/144*1.2*10)/10}function oM(s){let e=s.spec,t=[];switch(e.kind){case"table":t.push({item:"Figure-8 tabletop fasteners",quantity:8}),e.apron?(t.push({item:"Corner brackets with lag screws",quantity:4}),t.push({item:"8mm \xD7 40mm dowels (apron-to-leg joints)",quantity:16})):t.push({item:"Threaded leg-mounting plates",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break;case"bookshelf":{t.push({item:"8mm \xD7 40mm dowels or confirmat screws",quantity:16}),e.shelfCount>0&&t.push({item:"5mm shelf pins",quantity:e.shelfCount*4}),e.backPanel&&t.push({item:"16mm panel nails or staples",quantity:24}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"cabinet":{t.push({item:"Concealed euro hinges (pair per door)",quantity:e.doorCount*2}),t.push({item:"Door handles",quantity:e.doorCount}),t.push({item:"8mm \xD7 40mm dowels or confirmat screws",quantity:20}),t.push({item:"5mm shelf pins",quantity:4}),t.push({item:"16mm panel nails or staples",quantity:24}),e.legHeightMm>0&&t.push({item:"Threaded leg-mounting plates",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerbox":{e.joinery==="dado"&&t.push({item:"16mm brads (for dado joints)",quantity:16}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"door":{e.hingeBoring&&t.push({item:"Concealed euro hinges (pair)",quantity:2}),e.glassPanel&&e.style!=="slab"?(t.push({item:"Glass retainer strips (or glazing clips)",quantity:4}),t.push({item:"Clear silicone (small tube)",quantity:1})):e.style!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:8}),e.frameJoint==="miter"&&t.push({item:"Splines or biscuits (miter reinforcement)",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerfront":{t.push({item:"Drawer pull",quantity:1}),t.push({item:"M4 \xD7 25mm pull screws",quantity:2}),e.style!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:8}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerunit":{t.push({item:e.slideType==="undermount"?"Undermount soft-close slides (pair per drawer)":"Full-extension side-mount slides (pair per drawer)",quantity:e.drawerCount*(e.columnCount??1)}),t.push({item:"16mm panel nails or staples (back panel)",quantity:24}),t.push({item:"4 \xD7 30mm screws (front adjustment, 4 per drawer)",quantity:e.drawerCount*(e.columnCount??1)*4}),e.frontStyle!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:e.drawerCount*(e.columnCount??1)*8}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"endtable":{t.push({item:"Full-extension side-mount slides (pair)",quantity:1}),t.push({item:"4 \xD7 30mm screws (front adjustment)",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}}return t}function aM(s){let e=["Table saw or track saw","Drill/driver with brad-point bits","Random-orbit sander (120/180/240 grit)","Clamps (4+ bar or pipe clamps)","Square, tape measure, marking gauge"],t=s.spec;if(t.kind==="table"&&(e.push("Doweling jig (or domino/mortiser for the apron joinery)"),t.legStyle==="round"&&e.push("Lathe (for turned legs)"),t.legStyle==="tapered"&&e.push("Tapering jig for the table saw")),(t.kind==="bookshelf"||t.kind==="cabinet")&&(e.push("Shelf-pin drilling jig (5mm)"),e.push("Router with rabbeting bit (for the back panel)")),t.kind==="cabinet"&&e.push("35mm Forstner bit (hinge cups)"),t.kind==="drawerbox"&&(t.joinery==="dovetail"&&e.push("Dovetail jig with router (through template)"),t.joinery==="halfblind"&&e.push("Dovetail jig with router (half-blind template)"),t.joinery==="boxjoint"&&e.push("Box-joint jig for the table saw"),t.joinery==="dado"&&e.push("Dado stack or straight router bit"),t.scoop&&e.push("Scoop template with flush-trim bit (or spindle sander)"),e.push("6mm slot cutter or dado (bottom groove)")),t.kind==="door"||t.kind==="drawerfront"){if(t.style!=="slab"){let n=t.edgeProfile&&t.edgeProfile!=="square";t.frameJoint==="miter"?(e.push("Miter saw or sled with length stops (45\xB0 frame joints)"),n&&e.push(`Stick cutter for the ${t.edgeProfile} pattern (run before mitering)`)):e.push(n?`Cope & pattern cutter set (${t.edgeProfile} pattern, 1/4" \xD7 3/8" T&G)`:"Router table with rail-and-stile bits (or dado stack for grooves/tenons)")}t.style==="raised"&&e.push(`Shaper or router panel raiser (${t.raiseProfile??"cove"} profile insert cutter)`),t.outerEdgeProfile&&t.outerEdgeProfile!=="square"&&e.push(`Door-edge detail cutter (${t.outerEdgeProfile})`),t.kind==="door"&&t.hingeBoring&&e.push("35mm Forstner bit (hinge cups)")}return t.kind==="endtable"&&(e.push("Dovetail jig with router (case and drawer box)"),e.push("Dado stack or router (shelf dados)"),e.push("Drawer-slide mounting jig")),t.kind==="drawerunit"&&(e.push("Drawer-slide mounting jig"),e.push("Dovetail jig with router (carcass and drawer boxes)"),t.frontStyle!=="slab"&&e.push("Router table with rail-and-stile bits (fronts)"),t.frontStyle==="raised"&&e.push(`Shaper or router panel raiser (${t.raiseProfile??"cove"} profile insert cutter)`)),e}function lM(s){let[e,t,n]=s.overallMm,i=`${Math.round(e)} \xD7 ${Math.round(n)} \xD7 ${Math.round(t)}mm (W\xD7D\xD7H)`;switch(s.spec.kind){case"table":return`A ${i} table with ${s.spec.legStyle} legs${s.spec.apron?" and a glued apron frame for rigidity":""}. Build order: legs and apron first, then attach the top with movement-tolerant fasteners.`;case"bookshelf":return`A ${i} bookshelf with ${s.spec.shelfCount} adjustable shelves${s.spec.backPanel?" and a back panel that squares the carcass":""}. Build order: drill shelf-pin holes flat, assemble the carcass, then fit the back.`;case"cabinet":return`A ${i} ${s.spec.doorCount}-door cabinet on ${s.spec.legHeightMm>0?"tapered legs":"a plinth"}. Build order: carcass, back, top, then hang and align the doors last.`;case"drawerbox":{let r=s.spec.joinery,o=r==="dovetail"?"through-dovetailed":r==="halfblind"?"half-blind dovetailed (clean show face)":r==="boxjoint"?"box-jointed":"dadoed";return`A ${i} drawer box in ${s.spec.stockThicknessMm}mm stock with ${o} corners${s.spec.scoop?", a finger scoop in the front":""} and a ${s.spec.bottomThicknessMm}mm bottom captured in a groove. Cut the joinery before grooving so the groove hides inside a tail.`}case"door":return s.spec.style==="shaker"?`A ${i} five-piece shaker door: two stiles, two rails, and a floating center panel. Glue the frame only \u2014 the panel must float to allow seasonal movement.`:`A ${i} slab door. Flatness is everything: pick stable stock, finish both faces equally, and store it flat.`;case"drawerfront":return s.spec.style==="shaker"?`A ${i} five-piece shaker drawer front with a floating panel. Same construction as a door, sized for drawer proportions.`:`A ${i} slab drawer front with horizontal grain.`;case"drawerunit":return`A ${i} bank of ${s.spec.drawerCount} drawers on full-extension slides with ${s.spec.frontStyle} overlay fronts. Build order: carcass, slides, boxes, then fronts aligned last with adjustment screws.`;case"endtable":return`A ${i} coastal end table: a dovetailed case (tails on the floor-running sides, pins on the top), one inset drawer on side-mount slides, and two open shelves. Build order: case dovetails, shelf dados, glue-up, then the drawer.`}}function cM(s){let e=s.spec,t=[{title:"Mill and cut stock",detail:"Joint and plane stock flat and square, then cut every part to the dimensions in the cut list. Label each part in pencil as it comes off the saw."}];switch(e.kind){case"table":{e.legStyle==="tapered"&&t.push({title:"Taper the legs",detail:`Taper the two inside faces of each ${e.legThicknessMm}mm leg to ~60% at the foot using a tapering jig. Stop the taper ${e.apron?e.apronHeightMm+20:80}mm below the top so the joinery area stays square.`}),e.legStyle==="round"&&t.push({title:"Turn the legs",detail:`Turn each leg blank to a ${e.legThicknessMm}mm diameter cylinder, leaving the top 100mm square if you prefer stronger apron joinery.`}),e.apron&&t.push({title:"Join aprons to legs",detail:"Drill two 8mm dowel holes per joint (or cut mortise-and-tenon). Dry-fit the full base, check the diagonals for square, then glue and clamp in two stages: short rails first, then the long rails connecting both ends."},{title:"Reinforce the corners",detail:"Install a corner bracket at each leg, drawing the leg tight against both rails with the lag screw."}),t.push({title:"Glue up the top",detail:`Edge-glue boards to make the ${e.widthMm} \xD7 ${e.depthMm}mm top, alternating growth rings. Flatten with a sander or hand plane, then trim to final size and break the edges with a 2mm chamfer.`},{title:"Attach the top",detail:"Center the base upside-down on the top and fasten with figure-8 fasteners so the solid top can expand and contract across the grain."});break}case"bookshelf":{t.push({title:"Drill shelf-pin holes",detail:`With the side panels flat on the bench, drill two columns of 5mm shelf-pin holes (32mm spacing) on each side panel${e.backPanel?", then rout a 6mm rabbet along the back inside edge for the back panel":""}.`},{title:"Assemble the carcass",detail:"Join the top and bottom panels between the sides with glue and dowels (or confirmat screws). Clamp and compare the diagonals \u2014 they must match before the glue sets."}),e.backPanel&&t.push({title:"Fit the back panel",detail:"Slide the back into its rabbets while the carcass is still clamped; pin it every ~150mm. The back is what keeps the case square, so re-check the diagonals before nailing."}),t.push({title:"Finish and load",detail:`Sand to 180 grit, ease all edges, and apply finish. Insert the shelf pins and fit the ${e.shelfCount} shelves.`});break}case"drawerbox":{let n=e.joinery;t.push({title:"Cut the corner joinery",detail:n==="dovetail"?"Rout through dovetails on all four corners with the jig; test-fit a corner in scrap first and dial in the bit depth until the joint closes hand-tight.":n==="halfblind"?'Rout half-blind dovetails with the jig \u2014 tails in the sides, blind sockets stopped 1/16" shy of the front face so the show face stays clean. The back corners are through-dovetailed. Test-fit in scrap first.':n==="boxjoint"?"Cut box joints on all four corners at the table saw with the jig. The fit should need light mallet taps \u2014 too tight will split when glue swells the fingers.":"Cut a dado in each side to receive the front and back, sized for a snug push fit."},{title:"Groove for the bottom",detail:`Cut a ${e.bottomThicknessMm}mm groove 12mm up from the bottom edge on the inside of all four parts, positioned so it runs inside a ${n==="dado"?"dado":"tail"} \u2014 never through visible joinery.`},{title:"Assemble",detail:"Glue the corners, slide the bottom in dry (never glued \u2014 it floats), clamp, and compare diagonals before the glue sets. Wipe squeeze-out inside the box immediately."}),e.scoop&&t.push({title:"Cut the finger scoop",detail:"Before assembly, cut the scoop in the front\u2019s top edge with a template and flush-trim bit (or jigsaw + spindle sander), then ease the scoop edges thoroughly \u2014 fingers ride this edge every day."});break}case"door":case"drawerfront":{e.style!=="slab"?(e.frameJoint==="miter"?t.push({title:"Stick and miter the frame stock",detail:"Run the groove (and pattern profile, if any) along the inside edge of all frame stock, then miter both ends of every member at 45\xB0 \u2014 long-point lengths per the cut list, identical pairs cut against a stop."},{title:"Reinforce the miters",detail:"Slot each miter for a spline or biscuit \u2014 end-grain glue alone will not hold a door corner."}):t.push({title:"Mill rails and stiles",detail:`Cut stiles and rails to the cut list (${e.railStileWidthMm}mm wide), then cut the ${e.style==="raised"?6:e.panelThicknessMm}mm groove centered on every inside edge.`},{title:"Cut the rail tenons",detail:"Cope the rail ends (or cut stub tenons) to fill the stile grooves exactly \u2014 the shoulders set the frame square."}),e.style==="raised"&&t.push({title:"Raise the panel",detail:`Glue up the ${e.panelThicknessMm}mm panel blank, cut to the cut-list size, then raise all four edges with the ${e.raiseProfile??"cove"} cutter (${e.raiseWidthMm??38}mm raise) \u2014 end grain first, then long grain, sneaking up on a 6mm tongue that fits the groove.`}),e.kind==="door"&&e.glassPanel?t.push({title:"Glue the frame and rout the glass rabbet",detail:"Glue the frame without a panel, check the diagonals, then rout away the back side of the groove to leave an open rabbet. Square the rabbet corners with a chisel."},{title:"Fit the glass",detail:"After finishing, bed the tempered pane in the rabbet on a thin bead of clear silicone and fix the retainer strips with brads \u2014 never glue the glass hard."}):t.push({title:"Fit the panel and glue up",detail:"Cut the panel 1mm under groove depth all around, insert with panel spacers, and glue ONLY the frame joints. Clamp flat on a known-flat surface and check the diagonals."})):t.push({title:"Prepare the slab",detail:"Glue up (or cut) the slab to final size, then flatten both faces equally so internal stresses balance and the piece stays flat."}),e.kind==="door"&&e.hingeBoring&&t.push({title:"Bore for hinges",detail:"Drill the two 35mm hinge cups 12mm deep, centered 22.5mm from the hinge-side edge, ~80mm from each end."}),t.push({title:"Break the edges",detail:"Ease all arrises with a 1mm chamfer or light sanding \u2014 crisp but not sharp."});break}case"endtable":{t.push({title:"Dovetail the case",detail:"Cut the tails on the sides\u2019 top ends and the pins on the top panel \u2014 the pattern runs front to back. Dry-fit before moving on."},{title:"Dado the shelves and glue up",detail:"Cut stopped dados in the sides for the middle and bottom shelves, then glue the case square \u2014 check the diagonals while the rear rail goes in under the top."},{title:"Build and hang the drawer",detail:"Through-dovetail the drawer box, groove for the bottom, then mount the side slides level. Fit the inset front with an even 2mm reveal and fix it from inside."});break}case"drawerunit":{t.push({title:"Assemble the carcass",detail:e.caseJoinery==="halfblind"?'Dovetail the carcass together \u2014 tails on the sides, half-blind pins on the full-width top and bottom with 1/16" laps so the top and bottom faces stay clean. Glue up square against the back panel, then fasten the back.':"Dovetail the carcass together \u2014 tails on the sides, through pins on the full-width top and bottom. Glue up square against the back panel, then fasten the back."},{title:"Mount the slides",detail:`Lay out ${e.drawerCount*(e.columnCount??1)} slide positions with the jig and screw the cabinet members to the sides \u2014 identical heights left and right, or the drawers will rack.`},{title:"Build the drawer boxes",detail:"Build each box per the cut list (joinery, bottom groove, glue-up), then mount the drawer members of the slides centered on the box sides."},{title:"Fit the fronts",detail:e.frontMount==="inset"?"Fit each inset front to its opening with an even 2mm reveal all around \u2014 plane to fit, shimming off the divider rails, then fix from inside with the adjustment screws.":"With the boxes installed, attach each front using double-sided tape to position it, then fix from inside with the adjustment screws. Work bottom-up keeping an even 3mm reveal."});break}case"cabinet":{t.push({title:"Prepare the panels",detail:"Drill the shelf-pin holes in both side panels, rout the back-panel rabbets, and drill the 35mm hinge-cup holes in the doors (centered 22.5mm from the edge)."},{title:"Assemble the carcass",detail:"Join the bottom and top stretcher between the side panels with glue and dowels. Square the case against the back panel and fasten the back."},{title:"Attach the top and legs",detail:`Fasten the overhanging top from below through the stretcher${e.legHeightMm>0?`, then install the leg-mounting plates and thread on the four ${e.legHeightMm}mm legs`:""}.`},{title:"Hang the doors",detail:`Mount the euro hinges, hang the ${e.doorCount} doors, and adjust the hinge screws until the reveals are an even 3mm all around. Fit the handles last.`});break}}return t.push({title:"Final finish",detail:"Sand any glue squeeze-out, vacuum the piece, and apply three coats of hardwax oil or water-based polyurethane, sanding lightly at 320 grit between coats."}),t}function hM(s){let e=s.parts.filter(r=>r.role!=="hardware").length,i=({table:8,cabinet:12,bookshelf:6,drawerbox:2,door:3,drawerfront:2,drawerunit:10,endtable:7}[s.spec.kind]??6)+Math.round(e*.5);return{min:i,max:Math.round(i*1.8)}}function ru(s){return Math.round(s*10)/10}function Li(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new et,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Pp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Pp(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Pp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new He(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function au(s,e){if(e===Dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pr||e===Po){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===pr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ic=class extends Yt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Yn.extractUrlBase(e);o=Yn.resolveURL(c,this.path)}else o=Yn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ln(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Np){try{o[ot.KHR_BINARY_GLTF]=new Cu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new fu;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new Pu(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new Iu;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new Du;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function uM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qi(h),c.distance=u;break;case"spot":c=new Di(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},fu=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ke))}return Promise.all(i)}},du=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(a,a)}return Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ke)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ke)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Tu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Eu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Au=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ru=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new De,g=new I,m=new St,M=new I(1,1,1),_=new Yr(p.geometry,p.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(g,m,M));for(let v in l)if(v==="_COLOR_0"){let T=l[v];_.instanceColor=new Wi(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);mt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Np="glTF",No=12,Ip={JSON:1313821514,BIN:5130562},Cu=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,No),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Np)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-No,r=new DataView(e,No),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ip.JSON){let c=new Uint8Array(e,No+o,a);this.content=n.decode(c)}else if(l===Ip.BIN){let c=No+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Fu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Fu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Mr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}u(d)},a,c,jt,f)})})}},Iu=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},sc=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,g=-2*d+3*f,m=d-f,M=1-g,_=m-f+u;for(let v=0;v!==a;v++){let T=o[x+v+a],S=o[x+v+l]*h,A=o[p+v+a],D=o[p+v]*h;r[v]=M*T+_*S+g*A+m*D}return r}},fM=new St,Lu=class extends sc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return fM.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:wt,9729:Pt,9984:hl,9985:ur,9986:ws,9987:Zn},Lp={33071:nn,33648:Hi,10497:kt},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:ds,STEP:fs},cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),s.DefaultMaterial}function Ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function gM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xM(s){let e,t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=s.indices+":"+hu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hu(s.targets[n]);return e}function hu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Nu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _M(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var vM=new De,Uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ii(this.options.manager):this.textureLoader=new fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ln(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ps(r,a,i),di(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Yn.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=lu[i.type],a=Mr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new He(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lu[i.type],c=Mr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(d&&d!==u){let m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,_=t.cache.get(M);_||(x=new c(a,m*d,i.count*d/h),_=new er(x,d/h),t.cache.add(M,_)),g=new tr(_,l,f%d/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new He(x,l,p);if(i.sparse!==void 0){let m=lu.SCALAR,M=Mr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new M(o[1],_,i.sparse.count*m),S=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new He(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,D=T.length;A<D;A++){let b=T[A];if(g.setX(b,S[A*l]),l>=2&&g.setY(b,S[A*l+1]),l>=3&&g.setZ(b,S[A*l+2]),l>=4&&g.setW(b,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dp[f.magFilter]||Pt,h.minFilter=Dp[f.minFilter]||Zn,h.wrapS=Lp[f.wrapS]||kt,h.wrapT=Lp[f.wrapT]||kt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==Pt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let g=new It(x);g.needsUpdate=!0,f(g)}),t.load(Yn.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),di(u,o),u.userData.mimeType=o.mimeType||_M(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xn,Lt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Pn,Lt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ys}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let u=i[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ke)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);let h=r.alphaMode||cu.OPAQUE;if(h===cu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new X(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==sn){let u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&o!==sn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ke)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(i,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=xM(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Fp(new et,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?pM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],g=o[d],m,M=c[d];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new gs(x,M):new it(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Fn.TRIANGLE_STRIP?m.geometry=au(m.geometry,Po):g.mode===Fn.TRIANGLE_FAN&&(m.geometry=au(m.geometry,pr));else if(g.mode===Fn.LINES)m=new Xi(x,M);else if(g.mode===Fn.LINE_STRIP)m=new Ei(x,M);else if(g.mode===Fn.LINE_LOOP)m=new jr(x,M);else if(g.mode===Fn.POINTS)m=new Ai(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&gM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),di(m,r),g.extensions&&Ps(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ps(i,u[0],r),u[0];let f=new Ct;r.extensions&&Ps(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ci(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new De;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xs(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],x=d.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let _=0,v=f.length;_<v;_++){let T=f[_],S=d[_],A=p[_],D=x[_],b=g[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let w=n._createAnimationTracks(T,S,A,D,b);if(w)for(let P=0;P<w.length;P++)m.push(w[P])}let M=new Ms(r,void 0,m);return di(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,vM)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ti:c.length>1?h=new Ct:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),di(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ct;n.name&&(r.name=i.createUniqueName(n.name)),di(r,n),n.extensions&&Ps(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Lt||f instanceof It)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];es[r.path]===es.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(es[r.path]){case es.weights:c=In;break;case es.rotation:c=Sn;break;case es.translation:case es.scale:c=Dn;break;default:switch(n.itemSize){case 1:c=In;break;case 2:case 3:default:c=Dn;break}break}let h=i.interpolation!==void 0?dM[i.interpolation]:ds,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let p=new c(l[f]+"."+es[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Sn?Lu:sc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yM(s,e,t){let n=e.attributes,i=new Bt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=Nu(Mr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Nu(Mr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new qt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Fp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Fu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),di(s,e),yM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mM(s,e.targets,t):s})}var MM=/^[og]\s*(.+)?/,bM=/^mtllib /,SM=/^usemtl /,wM=/^usemap /,Up=/\s+/,Op=new I,Ou=new I,Bp=new I,kp=new I,Nn=new I,rc=new Se;function TM(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;Op.fromArray(i,e),Ou.fromArray(i,t),Bp.fromArray(i,n),Nn.subVectors(Bp,Ou),kp.subVectors(Op,Ou),Nn.cross(kp),Nn.normalize(),r.push(Nn.x,Nn.y,Nn.z),r.push(Nn.x,Nn.y,Nn.z),r.push(Nn.x,Nn.y,Nn.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){let p=this.normals.length;u=this.parseNormalIndex(a,p),f=this.parseNormalIndex(l,p),d=this.parseNormalIndex(c,p),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(i!==void 0&&i!==""){let p=this.uvs.length;u=this.parseUVIndex(i,p),f=this.parseUVIndex(r,p),d=this.parseUVIndex(o,p),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}var oc=class extends Yt{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,o=new Ln(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new TM;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let a=0,l=n.length;a<l;a++){let c=n[a].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(Up);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(rc.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Ke),t.colors.push(rc.r,rc.g,rc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=c.slice(1).trim().split(Up),d=[];for(let x=0,g=f.length;x<g;x++){let m=f[x];if(m.length>0){let M=m.split("/");d.push(M)}}let p=d[0];for(let x=1,g=d.length-1;x<g;x++){let m=d[x],M=d[x+1];t.addFace(p[0],m[0],M[0],p[1],m[1],M[1],p[2],m[2],M[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),f=[],d=[];if(c.indexOf("/")===-1)f=u;else for(let p=0,x=u.length;p<x;p++){let g=u[p].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(f,d)}else if(h==="p"){let f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=MM.exec(c))!==null){let u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(SM.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(bM.test(c))t.materialLibraries.push(c.substring(7).trim());else if(wM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){let f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new Ct;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){let c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",d=h.type==="Points",p=!1;if(h.vertices.length===0)continue;let x=new et;x.setAttribute("position",new Qe(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new Qe(h.normals,3)),h.colors.length>0&&(p=!0,x.setAttribute("color",new Qe(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new Qe(h.uvs,2));let g=[];for(let M=0,_=u.length;M<_;M++){let v=u[M],T=v.name+"_"+v.smooth+"_"+p,S=t.materials[T];if(this.materials!==null){if(S=this.materials.create(v.name),f&&S&&!(S instanceof Pn)){let A=new Pn;Lt.prototype.copy.call(A,S),A.color.copy(S.color),S=A}else if(d&&S&&!(S instanceof Xn)){let A=new Xn({size:10,sizeAttenuation:!1});Lt.prototype.copy.call(A,S),A.color.copy(S.color),A.map=S.map,S=A}}S===void 0&&(f?S=new Pn:d?S=new Xn({size:1,sizeAttenuation:!1}):S=new ai,S.name=v.name,S.flatShading=!v.smooth,S.vertexColors=p,t.materials[T]=S),g.push(S)}let m;if(g.length>1){for(let M=0,_=u.length;M<_;M++){let v=u[M];x.addGroup(v.groupStart,v.groupCount,M)}f?m=new Xi(x,g):d?m=new Ai(x,g):m=new it(x,g)}else f?m=new Xi(x,g[0]):d?m=new Ai(x,g[0]):m=new it(x,g[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){let a=new Xn({size:1,sizeAttenuation:!1}),l=new et;l.setAttribute("position",new Qe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Qe(t.colors,3)),a.vertexColors=!0);let c=new Ai(l,a);r.add(c)}return r}};var Un=Uint8Array,br=Uint16Array,EM=Int32Array,zp=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vp=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),AM=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hp=function(s,e){for(var t=new br(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new EM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Gp=Hp(zp,2),Wp=Gp.b,RM=Gp.r;Wp[28]=258,RM[258]=28;var Xp=Hp(Vp,0),CM=Xp.b,pw=Xp.r,zu=new br(32768);for(ut=0;ut<32768;++ut)Fi=(ut&43690)>>1|(ut&21845)<<1,Fi=(Fi&52428)>>2|(Fi&13107)<<2,Fi=(Fi&61680)>>4|(Fi&3855)<<4,zu[ut]=((Fi&65280)>>8|(Fi&255)<<8)>>1;var Fi,ut,Uo=function(s,e,t){for(var n=s.length,i=0,r=new br(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new br(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new br(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[zu[u]>>l]=c}else for(a=new br(n),i=0;i<n;++i)s[i]&&(a[i]=zu[o[s[i]-1]++]>>15-s[i]);return a},Oo=new Un(288);for(ut=0;ut<144;++ut)Oo[ut]=8;var ut;for(ut=144;ut<256;++ut)Oo[ut]=9;var ut;for(ut=256;ut<280;++ut)Oo[ut]=7;var ut;for(ut=280;ut<288;++ut)Oo[ut]=8;var ut,qp=new Un(32);for(ut=0;ut<32;++ut)qp[ut]=5;var ut;var PM=Uo(Oo,9,1);var IM=Uo(qp,5,1),Bu=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Qn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},ku=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},DM=function(s){return(s+7)/8|0},LM=function(s,e,t){return(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length),new Un(s.subarray(e,t))};var FM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ei=function(s,e,t){var n=new Error(e||FM[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,ei),!t)throw n;return n},NM=function(s,e,t,n){var i=s.length,r=n?n.length:0;if(!i||e.f&&!e.l)return t||new Un(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Un(i*3));var c=function(ke){var Re=t.length;if(ke>Re){var Te=new Un(Math.max(Re*2,ke));Te.set(t),t=Te}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,p=e.d,x=e.m,g=e.n,m=i*8;do{if(!d){h=Qn(s,u,1);var M=Qn(s,u+1,3);if(u+=3,M)if(M==1)d=PM,p=IM,x=9,g=5;else if(M==2){var S=Qn(s,u,31)+257,A=Qn(s,u+10,15)+4,D=S+Qn(s,u+5,31)+1;u+=14;for(var b=new Un(D),w=new Un(19),P=0;P<A;++P)w[AM[P]]=Qn(s,u+P*3,7);u+=A*3;for(var F=Bu(w),L=(1<<F)-1,B=Uo(w,F,1),P=0;P<D;){var V=B[Qn(s,u,L)];u+=V&15;var _=V>>4;if(_<16)b[P++]=_;else{var O=0,k=0;for(_==16?(k=3+Qn(s,u,3),u+=2,O=b[P-1]):_==17?(k=3+Qn(s,u,7),u+=3):_==18&&(k=11+Qn(s,u,127),u+=7);k--;)b[P++]=O}}var W=b.subarray(0,S),Y=b.subarray(S);x=Bu(W),g=Bu(Y),d=Uo(W,x,1),p=Uo(Y,g,1)}else ei(1);else{var _=DM(u)+4,v=s[_-4]|s[_-3]<<8,T=_+v;if(T>i){l&&ei(0);break}a&&c(f+v),t.set(s.subarray(_,T),f),e.b=f+=v,e.p=u=T*8,e.f=h;continue}if(u>m){l&&ei(0);break}}a&&c(f+131072);for(var ne=(1<<x)-1,re=(1<<g)-1,ie=u;;ie=u){var O=d[ku(s,u)&ne],ue=O>>4;if(u+=O&15,u>m){l&&ei(0);break}if(O||ei(2),ue<256)t[f++]=ue;else if(ue==256){ie=u,d=null;break}else{var Ae=ue-254;if(ue>264){var P=ue-257,Oe=zp[P];Ae=Qn(s,u,(1<<Oe)-1)+Wp[P],u+=Oe}var j=p[ku(s,u)&re],$=j>>4;j||ei(3),u+=j&15;var Y=CM[$];if($>3){var Oe=Vp[$];Y+=ku(s,u)&(1<<Oe)-1,u+=Oe}if(u>m){l&&ei(0);break}a&&c(f+131072);var le=f+Ae;if(f<Y){var me=r-Y,oe=Math.min(Y,le);for(me+f<0&&ei(3);f<oe;++f)t[f]=n[me+f]}for(;f<le;++f)t[f]=t[f-Y]}}e.l=d,e.p=ie,e.b=f,e.f=h,d&&(h=1,e.m=x,e.d=p,e.n=g)}while(!h);return f!=t.length&&o?LM(t,0,f):t.subarray(0,f)};var UM=new Un(0);var OM=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&ei(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&ei(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Yp(s,e){return NM(s.subarray(OM(s,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var BM=typeof TextDecoder<"u"&&new TextDecoder,kM=0;try{BM.decode(UM,{stream:!0}),kM=1}catch{}function jp(s,e,t){let n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function VM(s,e,t,n){let i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){let h=o[c+1],u=r[a-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[a]=l}return i}function Zp(s,e,t,n){let i=jp(s,n,e),r=VM(i,n,s,e),o=new at(0,0,0,0);for(let a=0;a<=s;++a){let l=t[i-s+a],c=r[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function HM(s,e,t,n,i){let r=[];for(let u=0;u<=t;++u)r[u]=0;let o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);let a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;let l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let f=0;for(let d=0;d<u;++d){let p=c[d+1],x=l[u-d];a[u][d]=p+x;let g=a[d][u-1]/a[u][d];a[d][u]=f+p*g,f=x*g}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,d=1,p=[];for(let x=0;x<=t;++x)p[x]=r.slice(0);p[0][0]=1;for(let x=1;x<=n;++x){let g=0,m=u-x,M=t-x;u>=x&&(p[d][0]=p[f][0]/a[M+1][m],g=p[d][0]*a[m][M]);let _=m>=-1?1:-m,v=u-1<=M?x-1:t-u;for(let S=_;S<=v;++S)p[d][S]=(p[f][S]-p[f][S-1])/a[M+1][m+S],g+=p[d][S]*a[m+S][M];u<=M&&(p[d][x]=-p[f][x-1]/a[M+1][u],g+=p[d][x]*a[u][M]),o[x][u]=g;let T=f;f=d,d=T}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function GM(s,e,t,n,i){let r=i<s?i:s,o=[],a=jp(s,n,e),l=HM(a,n,s,r,e),c=[];for(let h=0;h<t.length;++h){let u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=r;++h){let u=c[a-s].clone().multiplyScalar(l[h][0]);for(let f=1;f<=s;++f)u.add(c[a-s+f].clone().multiplyScalar(l[h][f]));o[h]=u}for(let h=r+1;h<=i+1;++h)o[h]=new at(0,0,0);return o}function WM(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function XM(s){let e=s.length,t=[],n=[];for(let r=0;r<e;++r){let o=s[r];t[r]=new I(o.x,o.y,o.z),n[r]=o.w}let i=[];for(let r=0;r<e;++r){let o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(WM(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function Kp(s,e,t,n,i){let r=GM(s,e,t,n,i);return XM(r)}var ac=class extends rn{constructor(e,t,n,i,r){super();let o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){let c=n[l];this.controlPoints[l]=new at(c.x,c.y,c.z,c.w)}}getPoint(e,t=new I){let n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Zp(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new I){let n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Kp(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new at(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}};var st,Ut,ln,cc=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=this,o=r.path===""?Yn.extractUrlBase(e):r.path,a=new Ln(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(YM(e))st=new Yu().parse(e);else{let i=Qp(e);if(!jM(i))throw new Error("THREE.FBXLoader: Unknown format.");if($p(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+$p(i));st=new qu().parse(i)}let n=new Ii(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Gu(n,this.manager).parse(st)}},Gu=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ut=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new Wu().parse(i);return this.parseScene(i,r,n),ln}parseConnections(){let e=new Map;return"Connections"in st&&st.Connections.connections.forEach(function(n){let i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});let a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in st.Objects){let n=st.Objects.Video;for(let i in n){let r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){let a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){let c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(let n in e){let i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in st.Objects){let n=st.Objects.Texture;for(let i in n){let r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?kt:nn,n.wrapT=a===0?kt:nn,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n=e.FileName.split(".").pop().toLowerCase(),i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);let r=i.path;r||i.setPath(this.textureLoader.path);let o=Ut.get(e.id).children,a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new It;let l=i.load(a);return i.setPath(r),l}parseMaterials(e){let t=new Map;if("Material"in st.Objects){let n=st.Objects.Material;for(let i in n){let r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){let n=e.id,i=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Ut.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(r.toLowerCase()){case"phong":a=new ai;break;case"lambert":a=new ao;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new ai;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){let i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=je.colorSpaceToWorking(new Se().fromArray(e.Diffuse.value),Ke):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=je.colorSpaceToWorking(new Se().fromArray(e.DiffuseColor.value),Ke)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=je.colorSpaceToWorking(new Se().fromArray(e.Emissive.value),Ke):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=je.colorSpaceToWorking(new Se().fromArray(e.EmissiveColor.value),Ke)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=je.colorSpaceToWorking(new Se().fromArray(e.Specular.value),Ke):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=je.colorSpaceToWorking(new Se().fromArray(e.SpecularColor.value),Ke));let r=this;return Ut.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Ke);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ke);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=hr,i.envMap.colorSpace=Ke);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ke);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in st.Objects&&t in st.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ut.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in st.Objects){let n=st.Objects.Deformer;for(let i in n){let r=n[i],o=Ut.get(parseInt(i));if(r.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){let a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(i){let r=t[i.ID];if(r.attrType!=="Cluster")return;let o={ID:i.ID,indices:[],weights:[],transformLink:new De().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let i=0;i<e.children.length;i++){let r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ut.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){ln=new Ct;let i=this.parseModels(e.skeletons,t,n),r=st.Objects.Model,o=this;i.forEach(function(l){let c=r[l.ID];o.setLookAtProperties(l,c),Ut.get(l.ID).parents.forEach(function(u){let f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&ln.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),ln.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);let c=Jp(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});let a=new Xu().parse();ln.children.length===1&&ln.children[0].isGroup&&(ln.children[0].animations=a,ln=ln.children[0]),ln.animations=a}parseModels(e,t,n){let i=new Map,r=st.Objects.Model;for(let o in r){let a=parseInt(o),l=r[o],c=Ut.get(a),h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Ti;break;case"Null":default:h=new Ct;break}h.name=l.attrName?ct.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(let a in t){let l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){let u=r;r=new Ti,r.matrixWorld.copy(c.transformLink),r.name=i?ct.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){let r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new mt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);let c=a/l,h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);let u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Rt(h,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new mt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new mt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){let r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new mt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=je.colorSpaceToWorking(new Se().fromArray(n.Color.value),Ke));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let l=1;switch(i){case 0:t=new qi(r,o,a,l);break;case 1:t=new dn(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=xt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=xt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Di(r,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new qi(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null,a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ai({name:Yt.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,h=r.groups.length;c<h;c++){let u=r.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){let c=new ai;a.push(c)}}return r.FBX_Deformer?(i=new gs(r,o),i.normalizeSkinWeights()):i=new it(r,o),i}createCurve(e,t){let n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Pn({name:Yt.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ei(n,i)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Bo(t.RotationOrder.value):n.eulerOrder=Bo(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ut.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){let r=st.Objects.Model[i.ID];if("Lcl_Translation"in r){let o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),ln.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){let i=this.parsePoseNodes();for(let r in e){let o=e[r];Ut.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;Ut.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new xs(o.bones),i[u.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in st.Objects){let t=st.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new De().fromArray(r.Matrix.a)}):e[i.Node]=new De().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in st){if("AmbientColor"in st.GlobalSettings){let e=st.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){let r=new Se().setRGB(t,n,i,Ke);ln.add(new uo(r,1))}}"UnitScaleFactor"in st.GlobalSettings&&(ln.userData.unitScaleFactor=st.GlobalSettings.UnitScaleFactor.value)}}},Wu=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in st.Objects){let n=st.Objects.Geometry;for(let i in n){let r=Ut.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let i=n.skeletons,r=[],o=e.parents.map(function(u){return st.Objects.Model[u.ID]});if(o.length===0)return;let a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});let l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Bo(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let h=Jp(c);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,i){let r=new et;e.attrName&&(r.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Qe(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Qe(a.colors,3)),t&&(r.setAttribute("skinIndex",new ms(a.weightsIndices,4)),r.setAttribute("skinWeight",new Qe(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){let c=new Je().getNormalMatrix(i),h=new Qe(a.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){let u=h===0?"uv":`uv${h}`;r.setAttribute(u,new Qe(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(r.addGroup(h,f-h,c),c=u,h=f)}),r.groups.length>0){let u=r.groups[r.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,i=0,r=!1,o=[],a=[],l=[],c=[],h=[],u=[],f=this;return e.vertexIndices.forEach(function(d,p){let x,g=!1;d<0&&(d=d^-1,g=!0);let m=[],M=[];if(o.push(d*3,d*3+1,d*3+2),e.color){let _=lc(p,n,d,e.color);l.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(_){M.push(_.weight),m.push(_.id)}),M.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let _=[0,0,0,0],v=[0,0,0,0];M.forEach(function(T,S){let A=T,D=m[S];v.forEach(function(b,w,P){if(A>b){P[w]=A,A=b;let F=_[w];_[w]=D,D=F}})}),m=_,M=v}for(;M.length<4;)M.push(0),m.push(0);for(let _=0;_<4;++_)h.push(M[_]),u.push(m[_])}if(e.normal){let _=lc(p,n,d,e.normal);a.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=lc(p,n,d,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(_,v){let T=lc(p,n,d,_);c[v]===void 0&&(c[v]=[]),c[v].push(T[0]),c[v].push(T[1])}),i++,g&&(f.genFace(t,e,o,x,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){let t=new I(0,0,0);for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new I(0,1,0):new I(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new X(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,h){let u;if(h>3){let f=[],d=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)f.push(new I(d[n[m]],d[n[m+1]],d[n[m+2]]));let{tangent:p,bitangent:x}=this.getNormalTangentAndBitangent(f),g=[];for(let m of f)g.push(this.flattenVertex(m,p,x));u=bi.triangulateShape(g,[])}else u=[[0,1,2]];for(let[f,d,p]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2])),t.uv&&t.uv.forEach(function(x,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][d*2]),e.uvs[g].push(a[g][d*2+1]),e.uvs[g].push(a[g][p*2]),e.uvs[g].push(a[g][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){let l=st.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){let o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let x=0;x<c.length;x++){let g=c[x]*3;u[g]=l[x*3],u[g+1]=l[x*3+1],u[g+2]=l[x*3+2]}let f={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},d=this.genBuffers(f),p=new Qe(d.vertex,3);p.name=r||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Se;o<i.length;o+=4)a.fromArray(i,o),je.colorSpaceToWorking(a,Ke),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new et;let n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)r.push(new at().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}let h=new ac(n,i,r,a,l).getPoints(r.length*12);return new et().setFromPoints(h)}},Xu=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(st.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=st.Objects.AnimationCurveNode,t=new Map;for(let n in e){let i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=st.Objects.AnimationCurve;for(let n in t){let i={id:t[n].id,times:t[n].KeyTime.a.map(ZM),values:t[n].KeyValueFloat.a},r=Ut.get(i.id);if(r!==void 0){let o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){let t=st.Objects.AnimationLayer,n=new Map;for(let i in t){let r=[],o=Ut.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){let h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){let u=Ut.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){let f=st.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let d={modelName:f.attrName?ct.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ln.traverse(function(p){p.ID===f.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new De),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){let u=Ut.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,f=Ut.get(u).parents[0].ID,d=Ut.get(f).parents[0].ID,p=Ut.get(d).parents[0].ID,x=st.Objects.Model[p],g={modelName:x.attrName?ct.sanitizeNodeName(x.attrName):"",morphName:st.Objects.Deformer[u].attrName};r[c]=g}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){let t=st.Objects.AnimationStack,n={};for(let i in t){let r=Ut.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Ms(e.name,-1,t)}generateTracks(e){let t=[],n=new I,i=new I;if(e.transform&&e.transform.decompose(n,new St,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){let r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Dn(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let f=this.interpolateRotations(t.x,t.y,t.z,r);o=f[0],a=f[1]}let l=Bo(0);n!==void 0&&(n=n.map(xt.degToRad),n.push(l),n=new Dt().fromArray(n),n=new St().setFromEuler(n)),i!==void 0&&(i=i.map(xt.degToRad),i.push(l),i=new Dt().fromArray(i),i=new St().setFromEuler(i).invert());let c=new St,h=new Dt,u=[];if(!a||!o)return new Sn(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)h.set(a[f],a[f+1],a[f+2],r),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new St().fromArray(u,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,f/3*4);return new Sn(e+".quaternion",o,u)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=ln.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new In(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){let o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let i=n,r=[],o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){let h=t.x.values[o];r.push(h),i[0]=h}else r.push(i[0]);if(a!==-1){let h=t.y.values[a];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){let h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){let r=[],o=[];r.push(e.times[0]),o.push(xt.degToRad(e.values[0])),o.push(xt.degToRad(t.values[0])),o.push(xt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(xt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;let u=h.map(xt.degToRad),f=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let x=Math.max(...d)/180,g=new Dt(...c,i),m=new Dt(...u,i),M=new St().setFromEuler(g),_=new St().setFromEuler(m);M.dot(_)&&_.set(-_.x,-_.y,-_.z,-_.w);let v=e.times[a-1],T=e.times[a]-v,S=new St,A=new Dt;for(let D=0;D<1;D+=1/x)S.copy(M.clone().slerp(_.clone(),D)),r.push(v+D*T),A.setFromQuaternion(S,i),o.push(A.x),o.push(A.y),o.push(A.z)}else r.push(e.times[a]),o.push(xt.degToRad(e.values[a])),o.push(xt.degToRad(t.values[a])),o.push(xt.degToRad(n.values[a]))}return[r,o]}},qu=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new uc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){let o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;let l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){let l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]),u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,h],$M(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Hu(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Hu(t.a))}parseNodeSpecialProperty(e,t,n){let i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3],c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Hu(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}},Yu=class{parse(e){let t=new hc(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let i=new uc;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(i===0)return null;let l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){let f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){let i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}let a=Yp(new Uint8Array(e.getArrayBuffer(o))),l=new hc(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},hc=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}},uc=class{add(e,t){this[e]=t}};function YM(s){let e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Qp(s,0,e.length)}function jM(s){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(i){let r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function $p(s){let e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function ZM(s){return s/46186158e3}var KM=[];function lc(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);let r=i*n.dataSize,o=r+n.dataSize;return JM(KM,n.buffer,r,o)}var Vu=new Dt,Sr=new I;function Jp(s){let e=new De,t=new De,n=new De,i=new De,r=new De,o=new De,a=new De,l=new De,c=new De,h=new De,u=new De,f=new De,d=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Sr.fromArray(s.translation));let p=Bo(0);if(s.preRotation){let P=s.preRotation.map(xt.degToRad);P.push(p),t.makeRotationFromEuler(Vu.fromArray(P))}if(s.rotation){let P=s.rotation.map(xt.degToRad);P.push(s.eulerOrder||p),n.makeRotationFromEuler(Vu.fromArray(P))}if(s.postRotation){let P=s.postRotation.map(xt.degToRad);P.push(p),i.makeRotationFromEuler(Vu.fromArray(P)),i.invert()}s.scale&&r.scale(Sr.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Sr.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Sr.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Sr.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Sr.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));let x=t.clone().multiply(n).multiply(i),g=new De;g.extractRotation(h);let m=new De;m.copyPosition(h);let M=m.clone().invert().multiply(h),_=g.clone().invert().multiply(M),v=r,T=new De;if(d===0)T.copy(g).multiply(x).multiply(_).multiply(v);else if(d===1)T.copy(g).multiply(_).multiply(x).multiply(v);else{let F=new De().scale(new I().setFromMatrixScale(u)).clone().invert(),L=_.clone().multiply(F);T.copy(g).multiply(x).multiply(L).multiply(v)}let S=c.clone().invert(),A=o.clone().invert(),D=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(S).multiply(a).multiply(o).multiply(r).multiply(A),b=new De().copyPosition(D),w=h.clone().multiply(b);return f.copyPosition(w),D=f.clone().multiply(T),D.premultiply(h.invert()),D}function Bo(s){s=s||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Hu(s){return s.split(",").map(function(t){return parseFloat(t)})}function Qp(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function $M(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function JM(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}var fc=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Ln(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){let h=new DataView(c),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;let p=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(p,h,x))return!1;return!0}function n(c,h,u){for(let f=0,d=c.length;f<d;f++)if(c[f]!==h.getUint8(u+f))return!1;return!0}function i(c){let h=new DataView(c),u=h.getUint32(80,!0),f,d,p,x=!1,g,m,M,_,v;for(let P=0;P<70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(x=!0,g=new Float32Array(u*3*3),m=h.getUint8(P+6)/255,M=h.getUint8(P+7)/255,_=h.getUint8(P+8)/255,v=h.getUint8(P+9)/255);let T=84,S=12*4+2,A=new et,D=new Float32Array(u*3*3),b=new Float32Array(u*3*3),w=new Se;for(let P=0;P<u;P++){let F=T+P*S,L=h.getFloat32(F,!0),B=h.getFloat32(F+4,!0),V=h.getFloat32(F+8,!0);if(x){let O=h.getUint16(F+48,!0);O&32768?(f=m,d=M,p=_):(f=(O&31)/31,d=(O>>5&31)/31,p=(O>>10&31)/31)}for(let O=1;O<=3;O++){let k=F+O*12,W=P*3*3+(O-1)*3;D[W]=h.getFloat32(k,!0),D[W+1]=h.getFloat32(k+4,!0),D[W+2]=h.getFloat32(k+8,!0),b[W]=L,b[W+1]=B,b[W+2]=V,x&&(w.setRGB(f,d,p,Ke),g[W]=w.r,g[W+1]=w.g,g[W+2]=w.b)}}return A.setAttribute("position",new He(D,3)),A.setAttribute("normal",new He(b,3)),x&&(A.setAttribute("color",new He(g,3)),A.hasColors=!0,A.alpha=v),A}function r(c){let h=new et,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,p=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+x+x+x,"g"),m=new RegExp("normal"+x+x+x,"g"),M=[],_=[],v=[],T=new I,S,A=0,D=0,b=0;for(;(S=u.exec(c))!==null;){D=b;let w=S[0],P=(S=d.exec(w))!==null?S[1]:"";for(v.push(P);(S=f.exec(w))!==null;){let B=0,V=0,O=S[0];for(;(S=m.exec(O))!==null;)T.x=parseFloat(S[1]),T.y=parseFloat(S[2]),T.z=parseFloat(S[3]),V++;for(;(S=g.exec(O))!==null;)M.push(parseFloat(S[1]),parseFloat(S[2]),parseFloat(S[3])),_.push(T.x,T.y,T.z),B++,b++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}let F=D,L=b-D;h.userData.groupNames=v,h.addGroup(F,L,A),A++}return h.setAttribute("position",new Qe(M,3)),h.setAttribute("normal",new Qe(_,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}let l=a(e);return t(l)?i(l):r(o(e))}};function ko(s,e,t="y",n=0,i=0,r,o=!0){let a=s.attributes.position,l=s.attributes.normal;if(!l)return;let c=new Float32Array(a.count*2),h=new Float32Array(a.count*3),u=["x","y","z"];for(let f=0;f<a.count;f++){let d=Math.abs(l.getX(f)),p=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),g=d>=p&&d>=x?"x":p>=x?"y":"z",m=u.filter(A=>A!==g),M=m[0],_=m[1];m[0]===t&&(M=m[1],_=m[0]);let v={x:a.getX(f),y:a.getY(f),z:a.getZ(f)};c[f*2]=v[M]/e+n,c[f*2+1]=v[_]/e+i;let T=o&&g===t,S=r?r(v.x,v.y,v.z):1;h[f*3]=(T?.84:1)*S,h[f*3+1]=(T?.78:1)*S,h[f*3+2]=(T?.72:1)*S}s.setAttribute("uv",new He(c,2)),s.setAttribute("color",new He(h,3))}var QM=2.4,eb={gltf:"gltf",glb:"glb",obj:"obj",fbx:"fbx",stl:"stl"};function em(s){let e=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(s);return e?eb[e[1].toLowerCase()]??null:null}async function ju(s,e={}){let t,n=!1,i;typeof s=="string"?(t=s,i=s):(t=URL.createObjectURL(s),n=!0,i=s.name);let r=e.format??em(i);if(!r)throw n&&URL.revokeObjectURL(t),new Error(`Cannot detect model format from "${i}" \u2014 pass options.format ('gltf' | 'glb' | 'obj' | 'fbx' | 'stl')`);try{let o=await nb(t,r);return o.traverse(a=>{if(a instanceof it){a.castShadow=!0,a.receiveShadow=!0;let l=a.geometry;if(!l.getAttribute("color")&&l.getAttribute("position")){let c=l.getAttribute("position").count;l.setAttribute("color",new He(new Float32Array(c*3).fill(1),3))}}}),(e.normalize??!0)&&im(o),tb(o),o}finally{n&&URL.revokeObjectURL(t)}}function tb(s){s.updateMatrixWorld(!0);let e=new I;s.traverse(t=>{if(!(t instanceof it))return;let n=t.geometry;if(n.getAttribute("uv")||!n.getAttribute("position"))return;t.matrixWorld.decompose(new I,new St,e);let i=(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z))/3||1;ko(n,QM/i,"y",0,0,void 0,!1)})}async function nb(s,e){switch(e){case"gltf":case"glb":return(await new ic().loadAsync(s)).scene;case"obj":return await new oc().loadAsync(s);case"fbx":return await new cc().loadAsync(s);case"stl":{let t=await(await fetch(s)).arrayBuffer(),n=nm(t);n.computeVertexNormals();let i=new it(n,new Nt({color:12104360,roughness:.6})),r=new Ct;return r.add(i),r}}}function tm(s){if(s.byteLength<84)return!1;if(84+new DataView(s).getUint32(80,!0)*50===s.byteLength)return!0;let n=new Uint8Array(s,0,Math.min(s.byteLength,2048)),i=0;for(let r=0;r<n.length;r++){let o=n[r];o===9||o===10||o===13||(o<32||o>126)&&i++}return i>n.length*.05}function nm(s){let e=new fc;if(tm(s)){let t=new Uint8Array(s.slice(0));return t.fill(0,0,5),e.parse(t.buffer)}return e.parse(new TextDecoder().decode(new Uint8Array(s)))}function im(s){let e=new Bt().setFromObject(s);if(e.isEmpty())return;let t=e.getSize(new I),n=Math.max(t.x,t.y,t.z);if(n===0)return;let i=1;n>500?i=.001:n>20?i=.01:n>6?i=.0254:n<.05&&(i=2/n),s.scale.multiplyScalar(i);let r=new Bt().setFromObject(s),o=r.getCenter(new I);s.position.x-=o.x,s.position.z-=o.z,s.position.y-=r.min.y}var Zu=[{id:"studio",label:"Studio"},{id:"showroom",label:"Showroom"},{id:"daylight",label:"Daylight"}];function dc(s){let e=new Ct;e.name="lights";let t=(n,i,r)=>{let o=new dn(n,i);return o.position.copy(r),o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.camera.left=-2.5,o.shadow.camera.right=2.5,o.shadow.camera.top=2.5,o.shadow.camera.bottom=-2.5,o.shadow.camera.near=.5,o.shadow.camera.far=12,o.shadow.bias=-2e-4,o.shadow.normalBias=.01,o.shadow.radius=10,e.add(o),o};switch(s){case"studio":{t(16774114,1.8,new I(2.5,3.2,2.2));let n=new dn(14674175,.55);n.position.set(-2.8,1.6,1.4),e.add(n);let i=new dn(16777215,.9);i.position.set(-1,2.4,-2.6),e.add(i);break}case"showroom":{t(16771012,2.2,new I(1.6,3.4,1.2));let n=new Di(16767400,60,12,Math.PI/7,.45,1.6);n.position.set(-2.2,3.2,2.4),e.add(n);let i=new dn(16774114,.5);i.position.set(0,1,3),e.add(i);break}case"daylight":{t(16773848,3.2,new I(3.5,4.5,1.5));let n=new co(12440831,9206366,.9);e.add(n);break}}return e}function pc(s,e,t){let n=s*374761393+e*668265263+t*982451653|0;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=(n^n>>>16)>>>0,n/4294967295}function sm(s){return s*s*(3-2*s)}function mc(s,e,t,n,i){let r=Math.floor(s),o=Math.floor(e),a=s-r,l=e-o,c=(r%t+t)%t,h=(o%n+n)%n,u=(c+1)%t,f=(h+1)%n,d=pc(c,h,i),p=pc(u,h,i),x=pc(c,f,i),g=pc(u,f,i),m=sm(a),M=sm(l),_=d+(p-d)*m,v=x+(g-x)*m;return(_+(v-_)*M)*2-1}function ti(s,e,t,n,i,r=4,o=.5){let a=0,l=1,c=0,h=1;for(let u=0;u<r;u++)a+=mc(s*h,e*h,t*h,n*h,i+u*101)*l,c+=l,l*=o,h*=2;return a/c}var On=8;function Ku(s){let e=document.createElement("canvas");return e.width=s,e.height=s,e}function $u(s,e){let t=new _s(s);return t.wrapS=kt,t.wrapT=kt,t.colorSpace=e?Ke:$n,t.anisotropy=16,t}function Ju(s,e,t){return s+(e-s)*t}function pi(s){return s<0?0:s>1?1:s}function gc(s,e,t,n,i){let r=Ku(s),o=Ku(s),a=Ku(s),l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d"),u=l.createImageData(s,s),f=c.createImageData(s,s),d=h.createImageData(s,s),{height:p,tone:x,rough:g}=e;for(let m=0;m<s;m++){let M=(m-1+s)%s*s,_=(m+1)%s*s,v=m*s;for(let T=0;T<s;T++){let S=v+T,A=S*4,D=x[S];u.data[A]=Math.round(Ju(t[0],n[0],D)),u.data[A+1]=Math.round(Ju(t[1],n[1],D)),u.data[A+2]=Math.round(Ju(t[2],n[2],D)),u.data[A+3]=255;let b=Math.round(pi(g[S])*255);f.data[A]=b,f.data[A+1]=b,f.data[A+2]=b,f.data[A+3]=255;let w=(T-1+s)%s,P=(T+1)%s,F=(p[v+P]-p[v+w])*i,L=(p[_+T]-p[M+T])*i,B=1/Math.sqrt(F*F+L*L+1);d.data[A]=Math.round((-F*B*.5+.5)*255),d.data[A+1]=Math.round((L*B*.5+.5)*255),d.data[A+2]=Math.round((B*.5+.5)*255),d.data[A+3]=255}}return l.putImageData(u,0,0),c.putImageData(f,0,0),h.putImageData(d,0,0),{map:$u(r,!0),roughnessMap:$u(o,!1),normalMap:$u(a,!1)}}function zo(s,e){let t=s*668265263+e*374761393|0;return t=t^t>>>13|0,t=Math.imul(t,1274126177),((t^t>>>16)>>>0)/4294967295}function Qu(s,e){let{seed:t,ringsPerPlank:n,turbulence:i,contrast:r,plankCount:o}=e,a=e.figure==="cathedral",l=e.maxKnots??0,c=new Float32Array(s*s),h=new Float32Array(s*s),u=new Float32Array(s*s),f=On/s,d=On/o;for(let p=0;p<s;p++){let x=p*f;for(let g=0;g<s;g++){let m=g*f,M=p*s+g,_=Math.floor(m/d),v=_%o,T=zo(v,t),S=zo(v,t+77),A=m-_*d,D=(ti(m*.75,x*.25,6,2,t+v*17,3)+ti(m*3,x*1,24,8,t+v*17+53,2)*.35)*i,b,w=1,P=0;if(a){let le=(.3+T*.4)*d,me=(A-le)/d,oe=1+Math.round(S),ke=(T*2-1)*1.5+1.8*Math.sin(x/On*Math.PI*2*oe+S*9)+D*.4;b=Math.hypot(me*n*.85,ke*2.2)+T*13,w=.35+.65*(ti(m*.5,x*.5,4,4,t+v*23+61,2)*.5+.5);let Re=Math.min(l,Math.floor(S*(l+1)));for(let Te=0;Te<Re;Te++){let Q=(.15+zo(v*7+Te,t+101)*.7)*d,te=zo(v*7+Te,t+211)*On,ee=A-Q,fe=Math.abs(x-te);fe=Math.min(fe,On-fe);let C=.05+zo(v*7+Te,t+307)*.06,_e=ee*ee+fe*fe*.6,ce=C*C/(_e+C*C);P+=ce*ce,b+=ce*2.5}}else b=A/d*n*(.8+S*.4)+T*13+D;let F=.5+.5*Math.sin(b*Math.PI*2),L=(a?Math.pow(F,e.ringSharpness??2.5):F*F*F)*w,B=ti(m*56,x*3,448,24,t+7+v*31,5),V=mc(m*160,x*12,1280,96,t+19+v*13),O=Math.max(0,V-.45)*1.6,k=mc(m*48,x*4,384,32,t+23)*.5+.5,W=ti(m*.5,x*.5,4,4,t+41,3),Y=e.ribbon??0,ne=Y>0?ti(m*6,x*.375,48,3,t+91,2)*Y:0,ie=Math.min(A,d-A)<.005?1:0,ue=e.ringSharpness??2.5,Ae=a?L*(.25+ue*.05):(L-.5)*.16,Oe=a?.12:.2,j=a?.13:.05,$=pi((a?.36:.42)+r*(B*Oe+O*.18+Ae+W*j+ne*.3+(k-.5)*.06+(T-.5)*.12+P*.5)-ie*.05*r);h[M]=$,c[M]=pi(.55-r*(O*.2+B*.07+L*(a?.2:.08)+P*.25)-ie*.06),u[M]=pi(e.baseRoughness+r*($-.45)*.22+(k-.5)*.05+ne*.12)}}return gc(s,{height:c,tone:h,rough:u},e.lightColor,e.darkColor,.9)}function rm(s,e){let{seed:t,threadCount:n}=e,i=new Float32Array(s*s),r=new Float32Array(s*s),o=new Float32Array(s*s),a=On/s;for(let l=0;l<s;l++){let c=l*a;for(let h=0;h<s;h++){let u=h*a,f=l*s+h,d=u/On*n*Math.PI*2,p=c/On*n*Math.PI*2,x=Math.abs(Math.sin(d)),g=Math.abs(Math.sin(p)),M=(Math.floor(u/On*n)+Math.floor(c/On*n))%2===0?x*.75+g*.25:g*.75+x*.25,_=ti(u*5,c*5,40,40,t,3)*.5+.5,v=pi(M*.8+_*.2);i[f]=v,r[f]=pi(1-v*.65-_*.15),o[f]=pi(.85+(_-.5)*.1)}}return gc(s,{height:i,tone:r,rough:o},e.color,e.shadowColor,3.2)}function ef(s,e){let{seed:t}=e,n=new Float32Array(s*s),i=new Float32Array(s*s),r=new Float32Array(s*s),o=On/s;for(let l=0;l<s;l++){let c=l*o;for(let h=0;h<s;h++){let u=h*o,f=l*s+h,d=ti(u*.75,c*90,6,720,t,3)*.5+.5,p=ti(u*2,c*2,16,16,t+31,3)*.5+.5;n[f]=d,i[f]=pi(d*.25+p*.1),r[f]=pi(e.baseRoughness+(d-.5)*.18+(p-.5)*.08)}}let a=[Math.round(e.color[0]*.82),Math.round(e.color[1]*.82),Math.round(e.color[2]*.82)];return gc(s,{height:n,tone:i,rough:r},e.color,a,.6)}function tf(s,e){let{seed:t}=e,n=new Float32Array(s*s),i=new Float32Array(s*s),r=new Float32Array(s*s),o=On/s;for(let l=0;l<s;l++){let c=l*o;for(let h=0;h<s;h++){let u=h*o,f=l*s+h,d=ti(u*40,c*40,320,320,t,3)*.5+.5;n[f]=d,i[f]=d*.06,r[f]=pi(e.roughness+(d-.5)*.08)}}let a=[Math.round(e.color[0]*.94),Math.round(e.color[1]*.94),Math.round(e.color[2]*.94)];return gc(s,{height:n,tone:i,rough:r},e.color,a,.5)}function nf(s,e=1){return new Se().setRGB(Math.min(1,s[0]/255*e),Math.min(1,s[1]/255*e),Math.min(1,s[2]/255*e),Ke)}function sf(s,e){let t=nf(e.veneer),n=nf(e.veneer,.82),i=nf([e.veneer[0]*.5,e.veneer[1]*.4,e.veneer[2]*.3]);s.onBeforeCompile=r=>{r.uniforms.plySpacing={value:e.spacingM},r.uniforms.plyVeneer={value:t},r.uniforms.plyCore={value:n},r.uniforms.plyGlue={value:i},r.vertexShader=`attribute vec2 ply;
varying vec2 vPly;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vPly = ply;`),r.fragmentShader=`uniform float plySpacing;
uniform vec3 plyVeneer;
uniform vec3 plyCore;
uniform vec3 plyGlue;
varying vec2 vPly;
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        if ( vPly.y > 0.5 ) {
          float plies = vPly.x / plySpacing;
          float fpos = fract( plies );
          // Thin darker glue line at each lamination boundary.
          float glueLine = 1.0 - smoothstep( 0.0, 0.14, min( fpos, 1.0 - fpos ) );
          // Alternate plies (cross-grain layers) sit slightly darker.
          float alt = mod( floor( plies ), 2.0 );
          vec3 layer = mix( plyVeneer, plyCore, alt * 0.6 );
          layer = mix( layer, plyGlue, glueLine * 0.8 );
          // Keep a little of the sampled grain so the edge isn't flat.
          float grain = 0.85 + 0.3 * ( diffuseColor.r - 0.5 );
          diffuseColor.rgb = layer * grain;
        }`)},s.customProgramCacheKey=()=>"plywood"}function am(s){return"#"+s.map(e=>e.toString(16).padStart(2,"0")).join("")}function ts(s,e,t){let{plywood:n,plySpacingMm:i,...r}=t,o={plankCount:12,...r};return{info:{id:s,label:e,category:"wood",swatch:am(t.lightColor)},metalness:0,clearcoat:.22,generate:a=>Qu(a,o),woodParams:o,plywood:n,plySpacingMm:i}}var xc=[{id:"marine-blue",label:"Marine Blue",color:[110,106,122],strength:.85,mode:"stain"},{id:"southern-pecan",label:"Southern Pecan",color:[167,128,88],strength:.8,mode:"stain"},{id:"walnut",label:"Walnut",color:[228,148,58],strength:.8,mode:"stain"},{id:"rojo",label:"Rojo",color:[204,82,52],strength:.85,mode:"stain"},{id:"espresso",label:"Espresso",color:[72,60,48],strength:.88,mode:"stain"},{id:"golden",label:"Golden",color:[224,162,52],strength:.8,mode:"stain"},{id:"stone-gray-wash",label:"Stone Gray Wash",color:[200,180,150],strength:.6,mode:"wash"},{id:"white-wash",label:"White Wash",color:[228,206,184],strength:.58,mode:"wash"},{id:"green",label:"Green",color:[112,118,64],strength:.85,mode:"stain"},{id:"aged-bronze",label:"Aged Bronze",color:[98,84,54],strength:.85,mode:"stain"},{id:"black",label:"Black",color:[40,36,32],strength:.92,mode:"stain"},{id:"brick",label:"Brick",color:[180,90,62],strength:.85,mode:"stain"},{id:"peach",label:"Peach",color:[245,166,74],strength:.8,mode:"stain"},{id:"coffee",label:"Coffee",color:[112,84,56],strength:.85,mode:"stain"},{id:"chestnut",label:"Chestnut",color:[142,86,60],strength:.85,mode:"stain"},{id:"terracotta",label:"Terracotta",color:[208,122,62],strength:.85,mode:"stain"},{id:"smoke",label:"Smoke",color:[130,128,126],strength:.85,mode:"stain"}];function ib(s){return(.2126*s[0]+.7152*s[1]+.0722*s[2])/255}function _c(s,e){if(e.mode==="wash")return s.map((n,i)=>Math.round(n+(e.color[i]-n)*e.strength));let t=.45+1.1*ib(s);return s.map((n,i)=>{let r=Math.min(255,e.color[i]*t);return Math.round(n+(r-n)*e.strength)})}var rf=[ts("birchply","Birch Ply",{seed:67,lightColor:[242,228,206],darkColor:[216,196,168],ringsPerPlank:36,turbulence:.55,baseRoughness:.55,contrast:.13,figure:"cathedral",ringSharpness:2,plankCount:1,plywood:!0,plySpacingMm:1.5}),ts("oak","White Oak",{seed:11,lightColor:[214,196,168],darkColor:[128,100,72],ringsPerPlank:30,turbulence:.35,baseRoughness:.5,contrast:.65}),ts("walnut","Black Walnut",{seed:23,lightColor:[158,112,74],darkColor:[62,42,30],ringsPerPlank:42,turbulence:.9,baseRoughness:.42,contrast:.9,figure:"cathedral",ringSharpness:2.5,maxKnots:2,plankCount:8}),ts("cherry","Cherry",{seed:37,lightColor:[202,130,82],darkColor:[138,74,44],ringsPerPlank:34,turbulence:1,baseRoughness:.45,contrast:.72,figure:"cathedral",ringSharpness:6,maxKnots:2,plankCount:8}),ts("maple","Hard Maple",{seed:83,lightColor:[240,223,201],darkColor:[196,164,132],ringsPerPlank:28,turbulence:.9,baseRoughness:.45,contrast:.34,figure:"cathedral",ringSharpness:6,maxKnots:2,plankCount:8}),ts("redoak","Red Oak",{seed:89,lightColor:[233,196,158],darkColor:[178,112,78],ringsPerPlank:46,turbulence:.9,baseRoughness:.55,contrast:.8,figure:"cathedral",ringSharpness:2.6,maxKnots:1,plankCount:10}),ts("mahogany","Ribbon Mahogany",{seed:97,lightColor:[196,110,62],darkColor:[122,56,30],ringsPerPlank:24,turbulence:.4,baseRoughness:.4,contrast:.6,ribbon:.85,plankCount:6}),ts("cedar","Aromatic Cedar",{seed:71,lightColor:[196,96,62],darkColor:[126,46,30],ringsPerPlank:48,turbulence:1,baseRoughness:.5,contrast:.85,figure:"cathedral",ringSharpness:3.5,maxKnots:1,plankCount:6}),{info:{id:"paint-white",label:"Matte White Paint",category:"paint",swatch:"#f2f0ea"},metalness:0,clearcoat:0,generate:s=>tf(s,{seed:41,color:[242,240,234],roughness:.55})},{info:{id:"paint-forest",label:"Forest Green Paint",category:"paint",swatch:"#3d5240"},metalness:0,clearcoat:.15,generate:s=>tf(s,{seed:43,color:[61,82,64],roughness:.42})},{info:{id:"steel",label:"Brushed Steel",category:"metal",swatch:"#c8cacd"},metalness:1,clearcoat:0,generate:s=>ef(s,{seed:53,color:[200,202,205],baseRoughness:.32})},{info:{id:"brass",label:"Brushed Brass",category:"metal",swatch:"#cda955"},metalness:1,clearcoat:0,generate:s=>ef(s,{seed:59,color:[205,169,85],baseRoughness:.36})},{info:{id:"linen",label:"Natural Linen",category:"fabric",swatch:"#d8cdb8"},metalness:0,clearcoat:0,uvRepeat:3,generate:s=>rm(s,{seed:61,color:[216,205,184],shadowColor:[150,138,116],threadCount:280})}],om=2.4;function sb(s){let e=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(s);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[220,200,165]}var Vo=class{textureSize;cache=new Map;scanned=new Map;pendingLoads=[];labels=new Map;constructor(e=2048){this.textureSize=e}list(){let e=(t,n)=>this.labels.get(t)??n;return[...rf.map(t=>({...t.info,label:e(t.info.id,t.info.label)})),...[...this.scanned.values()].map(t=>({id:t.id,label:e(t.id,t.label),category:"scanned",swatch:t.swatch}))]}setLabel(e,t){this.labels.set(e,t)}has(e){return rf.some(t=>t.info.id===e)||this.scanned.has(e)}listStains(){return xc.map(e=>({id:e.id,label:e.label,swatch:am(e.color)}))}addScanned(e){this.scanned.set(e.id,e),this.cache.get(e.id)?.dispose(),this.cache.delete(e.id)}removeScanned(e){this.scanned.delete(e),this.cache.get(e)?.dispose(),this.cache.delete(e)}renameScanned(e,t){let n=this.scanned.get(e);n&&(n.label=t)}buildScanned(e){let t=new Ii,n=e.tiling==="mirror"?Hi:kt,i=(o,a)=>{let l=()=>{};this.pendingLoads.push(new Promise(h=>l=h));let c=t.load(o,l,void 0,()=>l());return c.wrapS=n,c.wrapT=n,c.anisotropy=16,a&&(c.colorSpace=Ke),c.repeat.set(om/e.widthM,om/e.heightM),c},r=new Nt({map:i(e.mapUrl,!0),normalMap:e.normalMapUrl?i(e.normalMapUrl,!1):null,roughnessMap:e.roughnessMapUrl?i(e.roughnessMapUrl,!1):null,roughness:1,metalness:0,clearcoat:e.clearcoat??.22,clearcoatRoughness:.28,normalScale:new X(.6,.6),vertexColors:!0});return r.name=e.id,e.plywood&&sf(r,{veneer:sb(e.swatch),spacingM:(e.plySpacingMm??2)/1e3}),r}get(e,t){let n=t?xc.find(u=>u.id===t):void 0;if(t&&!n)throw new Error(`Unknown stain "${t}". Available: ${xc.map(u=>u.id).join(", ")}`);let i=rf.find(u=>u.info.id===e),r=n&&i?.woodParams?n:void 0,o=r?`${e}@${r.id}`:e,a=this.cache.get(o);if(a)return a;let l=this.scanned.get(e);if(l){let u=this.buildScanned(l);return this.cache.set(e,u),u}if(!i)throw new Error(`Unknown material "${e}". Available: ${this.list().map(u=>u.id).join(", ")}`);let c=r&&i.woodParams?Qu(this.textureSize,{...i.woodParams,lightColor:_c(i.woodParams.lightColor,r),darkColor:_c(i.woodParams.darkColor,r)}):i.generate(this.textureSize);if(i.uvRepeat)for(let u of[c.map,c.roughnessMap,c.normalMap])u.repeat.set(i.uvRepeat,i.uvRepeat);let h=new Nt({map:c.map,roughnessMap:c.roughnessMap,normalMap:c.normalMap,roughness:1,metalness:i.metalness,clearcoat:i.clearcoat,clearcoatRoughness:.28,normalScale:new X(.6,.6),vertexColors:!0});if(h.name=o,i.plywood){let u=r?_c(i.woodParams.lightColor,r):i.woodParams.lightColor;sf(h,{veneer:u,spacingM:(i.plySpacingMm??2)/1e3})}return this.cache.set(o,h),h}async texturesReady(){await Promise.allSettled(this.pendingLoads)}get resolution(){return this.textureSize}setResolution(e){e!==this.textureSize&&(this.textureSize=e,this.dispose())}dispose(){for(let e of this.cache.values())e.map?.dispose(),e.roughnessMap?.dispose(),e.normalMap?.dispose(),e.dispose();this.cache.clear()}};function of(s,e,t,n){let i=Math.min(n.depth,e*.6),r=i*5/6,o=(i-r)*Math.tan(Math.PI/6),a=2*r*Math.sin(Math.PI/3)+o,c=Math.max(2*a+.01,Math.min(n.width,s*.9))/2,h=e/2,u=[new X(-s/2,-e/2),new X(s/2,-e/2),new X(s/2,h)],f=(T,S,A,D,b=10)=>{for(let w=1;w<=b;w++){let P=A+(D-A)*w/b;u.push(new X(T+r*Math.cos(P),S+r*Math.sin(P)))}},d=Math.sin(Math.PI/3);u.push(new X(c,h)),f(c,h-r,Math.PI/2,Math.PI/2+Math.PI/3);let p=c-r*d,x=Math.PI/2+Math.PI/3-Math.PI,g=p-o-r*Math.cos(x),m=h-i+r;u.push(new X(p-o,h-r/2-(i-r))),f(g,m,x,-Math.PI/2);let M=Math.abs(g);u.push(new X(-M,h-i)),f(-g,m,-Math.PI/2,-Math.PI/2-Math.PI/3),u.push(new X(-(p-o),h-r/2-(i-r))),u.push(new X(-p,h-r/2)),f(-c,h-r,Math.PI/2-Math.PI/3,Math.PI/2),u.push(new X(-s/2,h));let _=new un(u),v=new bn(_,{depth:t,bevelEnabled:!1});return v.translate(0,0,-t/2),v}function af(s,e){let t=e.type==="dovetail"?e.depth*.17:0,n=Math.min(Math.max(e.depth*.6,.006),.014),i=Math.max(1,Math.floor(s/.045)),r=0;for(;i>=1&&(r=(s-(i+1)*n)/i,!(r>=Math.max(n*1.2,2*t+.004)));)i-=1;if(i<1)return null;let o=[];for(let a=0;a<i;a++)o.push(n+r/2+a*(n+r));return{pinTip:n,tailWide:r,flare:t,tailCenters:o}}function lf(s,e,t,n,i,r){let o=af(e,n);if(!o)return null;let{flare:a,tailWide:l,tailCenters:c}=o,h=t/2,u=h-(i??n.depth),f=h-(r??n.depth),d=-e/2,p=[];p.push([-f,d],[u,d]);for(let m of c){let M=d+m;p.push([u,M-l/2+a],[h,M-l/2],[h,M+l/2],[u,M+l/2-a])}if(p.push([u,e/2]),p.push([-f,e/2]),h-f>1e-9)for(let m of[...c].reverse()){let M=d+m;p.push([-f,M+l/2-a],[-h,M+l/2],[-h,M-l/2],[-f,M-l/2+a])}let x=new un(p.map(([m,M])=>new X(m,M))),g=new bn(x,{depth:s,bevelEnabled:!1});return g.translate(0,0,-s/2),g.rotateY(-Math.PI/2),g}function lm(s,e,t,n,i,r){let o=af(e,n);if(!o)return null;let{flare:a,tailWide:l,tailCenters:c}=o,h=t/2,u=h-n.depth,f=-e/2,d=[];for(let v of[1,-1]){let T=[[v*u,f]];for(let D of c){let b=f+D;T.push([v*u,b-l/2+a],[v*h,b-l/2],[v*h,b+l/2],[v*u,b+l/2-a])}T.push([v*u,e/2]);let S=new un(T.map(([D,b])=>new X(D,b))),A=new bn(S,{depth:s,bevelEnabled:!1});A.translate(0,0,-s/2),d.push(A)}let p=-r*(s/2),x=r*(s/2),g=Math.sign(x-p),m=new un([new X(x,f),new X(x,e/2),new X(p,e/2),new X(p,f+i),new X(p+g*i,f)]),M=new bn(m,{depth:2*u,bevelEnabled:!1});M.rotateY(Math.PI/2),M.translate(-u,0,0);let _=Li(d.concat(M),!1);for(let v of d)v.dispose();return M.dispose(),_?(_.rotateY(-Math.PI/2),_):null}function cf(s,e,t,n,i,r,o=0,a=0){let l=af(e,n);if(!l)return null;let{tailWide:c,flare:h,tailCenters:u}=l,f=-e/2,d=t/2*i,p=d-o*i,x=-d,g=s-2*n.depth,m;if(r)m=of(g,e,t,r);else if(a>0){let S=-x,A=-d,D=Math.sign(A-S),b=new un([new X(A,f),new X(A,e/2),new X(S,e/2),new X(S,f+a),new X(S+D*a,f)]);m=new bn(b,{depth:g,bevelEnabled:!1}),m.rotateY(Math.PI/2),m.translate(-g/2,0,0)}else m=new Zt(g,e,t).toNonIndexed();let M=[m],_=[],v=f;for(let S of u){let A=f+S-c/2;_.push([v,A,v===f,!1]),v=f+S+c/2}_.push([v,e/2,!1,!0]);for(let[S,A,D,b]of _){let w=D?0:h,P=b?0:h;if(D&&a>0){let O=Math.min(a,(A-S)*.95),k=-p,W=-x,Y=Math.sign(k-W),ne=re=>{let ie=S+Math.max(0,O-re);return[[k,S],[k,A],[W,A+P],[W,ie],[W+Y*Math.min(re,O),ie],[W+Y*O,S]]};for(let re of[1,-1]){let ie=C=>re*(s/2-n.depth+C),ue=[0,O,n.depth],Ae=[],Oe=(C,_e,ce)=>Ae.push(...C,..._e,...ce);for(let C=0;C<ue.length-1;C++){let _e=ne(ue[C]),ce=ne(ue[C+1]),Le=ie(ue[C]),ae=ie(ue[C+1]);for(let R=0;R<_e.length;R++){let y=(R+1)%_e.length,N=[Le,_e[R][1],-_e[R][0]],G=[Le,_e[y][1],-_e[y][0]],J=[ae,ce[y][1],-ce[y][0]],q=[ae,ce[R][1],-ce[R][0]];Oe(N,G,J),Oe(N,J,q)}}for(let[C,_e]of[[0,!1],[n.depth,!0]]){let ce=ne(C),Le=ie(C);for(let ae=1;ae<ce.length-1;ae++){let R=[Le,ce[0][1],-ce[0][0]],y=[Le,ce[ae][1],-ce[ae][0]],N=[Le,ce[ae+1][1],-ce[ae+1][0]];_e?Oe(R,N,y):Oe(R,y,N)}}let j=0,$=0,le=0;for(let C=0;C<Ae.length;C+=3)j+=Ae[C],$+=Ae[C+1],le+=Ae[C+2];let me=Ae.length/3;j/=me,$/=me,le/=me;let oe=new I,ke=new I,Re=new I,Te=new I,Q=new I,te=new I,ee=new I;for(let C=0;C<Ae.length;C+=9)if(oe.fromArray(Ae,C),ke.fromArray(Ae,C+3),Re.fromArray(Ae,C+6),Te.subVectors(ke,oe),Q.subVectors(Re,oe),te.crossVectors(Te,Q),ee.set((oe.x+ke.x+Re.x)/3-j,(oe.y+ke.y+Re.y)/3-$,(oe.z+ke.z+Re.z)/3-le),te.dot(ee)<0)for(let _e=0;_e<3;_e++){let ce=Ae[C+3+_e];Ae[C+3+_e]=Ae[C+6+_e],Ae[C+6+_e]=ce}let fe=new et;fe.setAttribute("position",new He(new Float32Array(Ae),3)),fe.computeVertexNormals(),fe.setAttribute("uv",new He(new Float32Array(Ae.length/3*2),2)),M.push(fe)}continue}let F=new un([new X(-p,S),new X(-p,A),new X(-x,A+P),new X(-x,S-w)]),L=new bn(F,{depth:n.depth,bevelEnabled:!1});L.rotateY(Math.PI/2);let B=L.clone();B.translate(s/2-n.depth,0,0);let V=L;V.translate(-s/2,0,0),M.push(V,B)}if(o>0)for(let S of[1,-1]){let A=new Zt(n.depth,e,o).toNonIndexed();A.translate(S*(s/2-n.depth/2),0,(d+p)/2),M.push(A)}let T=Li(M,!1);for(let S of M)S.dispose();return T}function Ho(s,e,t,n){let i=-s/2,r=s/2,o=c=>e.some(([h,u])=>c>=h-t&&c<=u+t),a=[i],l=i;for(;l<r;){let c=o(l)?t:n,h=l+c;for(let[u]of e)l<u&&h>u&&(h=Math.max(u,l+t));l=Math.min(h,r),a.push(l)}return a}function hf(s,e,t,n){let i=n??((h,u)=>[h,u]),r=[],o=[],a=[],l=(h,u,f,d,p)=>{let[x,g]=i(h+(f-h)*.3,u+(d-u)*.3),m=(t(x+p,g)-t(x-p,g))/(2*p),M=(t(x,g+p)-t(x,g-p))/(2*p),_=1/Math.hypot(m,M,1),[v,T]=i(h,u);r.push(v,T,t(v,T)),o.push(-m*_,-M*_,_),a.push(0,0)};for(let h=0;h<s.length-1;h++)for(let u=0;u<e.length-1;u++){let f=s[h],d=s[h+1],p=e[u],x=e[u+1],g=Math.min(d-f,x-p)*.25,m=(f+d+d)/3,M=(p+p+x)/3;l(f,p,m,M,g),l(d,p,m,M,g),l(d,x,m,M,g);let _=(f+d+f)/3,v=(p+x+x)/3;l(f,p,_,v,g),l(d,x,_,v,g),l(f,x,_,v,g)}let c=new et;return c.setAttribute("position",new He(new Float32Array(r),3)),c.setAttribute("normal",new He(new Float32Array(o),3)),c.setAttribute("uv",new He(new Float32Array(a),2)),c}function Go(s,e,t){let n=typeof t=="number"?()=>t:t,i=[],r=[],o=[];for(let l=0;l<s.length-1;l++){let[c,h]=s[l],[u,f]=s[l+1],d=u-c,p=f-h,x=Math.hypot(d,p);if(x<1e-9)continue;let g=p/x,m=-d/x,M=e(c,h),_=e(u,f),v=Math.min(n(c,h),M),T=Math.min(n(u,f),_);i.push(c,h,v,u,f,T,u,f,_),i.push(c,h,v,u,f,_,c,h,M);for(let S=0;S<6;S++)r.push(g,m,0),o.push(0,0)}let a=new et;return a.setAttribute("position",new He(new Float32Array(i),3)),a.setAttribute("normal",new He(new Float32Array(r),3)),a.setAttribute("uv",new He(new Float32Array(o),2)),a}var vc={bevel30:.55,fingerpull:1.5};function yc(s,e){switch(s){case"chamfer":case"bevel30":return e;case"roundover":return 1-Math.sqrt(Math.max(0,1-e*e));case"cove":return e<.08?.12*(e/.08):.12+.88*Math.sin((e-.08)/.92*Math.PI/2);case"fingerpull":return Math.sin(Math.pow(e,.8)*Math.PI/2);case"ogee":{if(e<.1)return .14*(e/.1);let t=(e-.1)/.9;return .14+.86*t*t*(3-2*t)}case"bead":{if(e<.18)return e/.18*.25;let t=(e-.18)/.82;return .25+.75*(1-Math.sqrt(Math.max(0,1-t*t)))}case"ovolo":{if(e<.12)return e/.12*.15;if(e>.88)return .85+(e-.88)/.12*.15;let t=(e-.12)/.76;return .15+.7*(1-Math.sqrt(Math.max(0,1-t*t)))}case"step":return e<.45?0:e<.55?(e-.45)/.1:1;case"thumbnail":{if(e<.1)return .16*(e/.1);let t=(e-.1)/.9;return .16+.84*Math.pow(t*t*(3-2*t),1.4)}case"classical":return e<.2?.18*(e/.2)*(e/.2)*(3-2*(e/.2)):.18+.82*Math.sin((e-.2)/.8*Math.PI/2)}}function Wo(s,e,t,n){let i=n.depth,r=n.miterEnds,o=r?0:n.inner?.endInset??0,a=(L,B)=>{let V=0,O=(k,W,Y,ne=i)=>k<Y?ne*(vc[W]??1)*yc(W,1-k/Y):0;if(n.outer){let{profile:k,width:W}=n.outer,Y=n.outer.depth??i;n.outer.vMax&&(V=Math.max(V,O(e/2-B,k,W,Y))),n.outer.vMin&&(V=Math.max(V,O(B+e/2,k,W,Y))),!r&&n.outer.uMax&&(V=Math.max(V,O(s/2-L,k,W,Y))),!r&&n.outer.uMin&&(V=Math.max(V,O(L+s/2,k,W,Y)))}if(n.inner){let k=n.inner.side==="vMax"?e/2-B:B+e/2,W=Math.abs(L)-(s/2-o),Y=W>0?Math.max(W,k):k,ne=O(Y,n.inner.profile,n.inner.width);if(n.inner.copeEnds&&!r){let re=s/2-Math.abs(L);if(re<n.inner.width){let ie=vc[n.inner.profile]??1,ue=i*ie*yc(n.inner.profile,Math.max(0,re)/n.inner.width);ne=Math.min(ne,ue)}}V=Math.max(V,ne)}return V},l=(L,B)=>t/2-a(L,B),c=L=>{if(!r)return s/2;let B=r.outerSide==="vMax"?e/2-L:L+e/2;return Math.max(s/2-B,.001)},h=(L,B)=>[L*c(B)/(s/2),B],u=.0012,f=.008,d=[],p=[];if(n.outer){let L=n.outer.width+.002;n.outer.uMin&&d.push([-s/2,-s/2+L]),n.outer.uMax&&d.push([s/2-L,s/2]),n.outer.vMin&&p.push([-e/2,-e/2+L]),n.outer.vMax&&p.push([e/2-L,e/2])}if(n.inner){let L=n.inner.width+.002;if(p.push(n.inner.side==="vMax"?[e/2-L,e/2]:[-e/2,-e/2+L]),o>0)for(let B of[-1,1]){let V=B*(s/2-o);d.push([V-L,V+L])}n.inner.copeEnds&&d.push([-s/2,-s/2+L],[s/2-L,s/2])}r&&d.push([-s/2,-s/2+e+.002],[s/2-e-.002,s/2]);let x=Ho(s,d,u,f),g=Ho(e,p,u,f),m=hf(x,g,l,h),M=[h(-s/2,-e/2),h(s/2,-e/2),h(s/2,e/2),h(-s/2,e/2)],_=new et,v=-t/2,[T,S,A,D]=M;_.setAttribute("position",new He(new Float32Array([T[0],T[1],v,A[0],A[1],v,S[0],S[1],v,T[0],T[1],v,D[0],D[1],v,A[0],A[1],v]),3)),_.setAttribute("normal",new He(new Float32Array(Array(6).fill([0,0,-1]).flat()),3)),_.setAttribute("uv",new He(new Float32Array(12),2));let b=n.inner,w=b?.copeEnds&&!r?L=>{let B=s/2-Math.abs(L);if(B>=b.width)return v;let V=vc[b.profile]??1;return t/2-i*V*yc(b.profile,Math.max(0,B)/b.width)}:v,P=[Go(x.map(L=>h(L,-e/2)),l,w),Go([...x].reverse().map(L=>h(L,e/2)),l,w)];if(!n.stickCaps)P.push(Go([...g].reverse().map(L=>h(-s/2,L)),l,w)),P.push(Go(g.map(L=>h(s/2,L)),l,w));else{let{grooveWidth:L,grooveDepth:B,capDepth:V}=n.stickCaps,O=n.stickCaps.innerSide==="vMin"?-1:1,k=O*(e/2),W=n.inner,Y=5e-4,ne=(ue,Ae)=>{let Oe=O>0?e/2-ue:ue+e/2;if(Oe<B+Y&&Math.abs(Ae)<L/2+Y){let j=Oe<B&&Math.abs(Ae)<L/2,$=Math.min(B-Oe,L/2-Math.abs(Ae));if(!j||$<Y)return V}if(W&&Oe<W.width+Y){let j=i*(vc[W.profile]??1)*yc(W.profile,Math.max(0,1-Oe/W.width));if(Math.abs(Ae-(t/2-j))<Y)return V}return 0},re=Ho(e,[O>0?[k-B-.004,k]:[k,k+B+.004]],4e-4,.003),ie=ue=>{let Ae=s/2,Oe=Re=>ue>0?Re:-Re,j=Re=>l(Ae,Oe(Re)),$=Ho(1,[],.018,.018),me=hf(re,$,(Re,Te)=>Ae-ne(ue>0?Re:-Re,Te),(Re,Te)=>[Re,-t/2+(Te+.5)*(j(Re)+t/2)]),oe=me.attributes.position,ke=me.attributes.normal;for(let Re=0;Re<oe.count;Re++){let Te=oe.getX(Re),Q=oe.getY(Re),te=oe.getZ(Re);oe.setXYZ(Re,te,Te,Q);let ee=ke.getX(Re),fe=ke.getY(Re),C=ke.getZ(Re);ke.setXYZ(Re,C,ee,fe)}return ue<0&&me.rotateZ(Math.PI),me};P.push(ie(1),ie(-1))}let F=Li([m,_,...P],!1);m.dispose(),_.dispose();for(let L of P)L.dispose();return F}var rb={bevel:s=>{let e=Math.min(9e-4,s*.06),t=Math.min(.0025,s*.11);return[{a:s-e-t,h:.74,shape:"line"},{a:s-e,h:.74,shape:"line"},{a:s,h:1,shape:"line"}]},cove:s=>{let e=Math.min(9e-4,s*.06);return[{a:s-e,h:.8,shape:"concave"},{a:s,h:1,shape:"line"}]},roundover:s=>{let e=Math.min(9e-4,s*.06);return[{a:s-e,h:.8,shape:"convex"},{a:s,h:1,shape:"line"}]},ogee:s=>{let e=Math.min(9e-4,s*.06);return[{a:(s-e)*.48,h:.4,shape:"concave"},{a:s-e,h:.8,shape:"convex"},{a:s,h:1,shape:"line"}]},stepcove:s=>{let e=Math.min(9e-4,s*.06),t=Math.min(.003,s*.16),n=Math.min(.0011,s*.06),i=Math.min(.0024,s*.11);return[{a:t,h:.1,shape:"line"},{a:t+n,h:.34,shape:"line"},{a:t+n+i,h:.34,shape:"line"},{a:s-e,h:.82,shape:"concave"},{a:s,h:1,shape:"line"}]},bevelstep:s=>{let e=Math.min(.0016,s*.09),t=Math.min(.0038,s*.15);return[{a:s-e-t,h:.58,shape:"line"},{a:s-e,h:.58,shape:"line"},{a:s,h:1,shape:"line"}]},covebead:s=>{let e=Math.min(.0044,s*.22),t=Math.min(.0014,s*.07);return[{a:s-e-t,h:.58,shape:"concave"},{a:s-e/2-t,h:.96,shape:"convex"},{a:s-t,h:.78,shape:"concave"},{a:s,h:1,shape:"line"}]},ogeebead:s=>{let e=Math.min(.0044,s*.22),t=Math.min(.0014,s*.07),n=s-e-t;return[{a:n*.48,h:.34,shape:"concave"},{a:n,h:.6,shape:"convex"},{a:s-e/2-t,h:.97,shape:"convex"},{a:s-t,h:.8,shape:"concave"},{a:s,h:1,shape:"line"}]}},ob={line:[s=>s,()=>1],concave:[s=>1-Math.cos(s*Math.PI/2),s=>Math.PI/2*Math.sin(s*Math.PI/2)],convex:[s=>Math.sin(s*Math.PI/2),s=>Math.PI/2*Math.cos(s*Math.PI/2)]},Is=.008,Mc=.02;function cm(s,e,t,n,i,r){let o=-t/2,a=i/2,l=-i/2,c=t/2,h=Is+n,u=c-a,f=[{a:0,z:a,slope:0},{a:Is,z:a,slope:0}],d=0,p=0,x=0;for(let ie of rb[r](n)){let ue=ie.a-d;if(ue<=1e-6)continue;let[Ae,Oe]=ob[ie.shape],j=ie.h-p,$=me=>j*u*Oe(me)/ue;Math.abs($(0)-x)>.02&&f.push({a:Is+d,z:a+p*u,slope:$(0)});let le=ie.shape==="line"?1:24;for(let me=1;me<=le;me++){let oe=me/le;f.push({a:Is+d+ue*oe,z:a+(p+j*Ae(oe))*u,slope:$(oe)})}x=$(1),d=ie.a,p=ie.h}let g=[],m=[],M=[],_=(ie,ue,Ae=f,Oe=!1)=>{let j=ie!==0?s/2:e/2,$=le=>ie!==0?e/2-le:s/2-le;for(let le=0;le<Ae.length-1;le++){let me=Ae[le],oe=Ae[le+1];if(oe.a<=me.a)continue;let ke=j-me.a,Re=j-oe.a,Te=$(me.a),Q=$(oe.a),te=(G,J,q)=>ie!==0?[ie*G,J,q]:[J,ue*G,q],ee=te(ke,-Te,me.z),fe=te(ke,Te,me.z),C=te(Re,-Q,oe.z),_e=te(Re,Q,oe.z),ce=G=>{let J=1/Math.hypot(G,1);return Oe?ie!==0?[-ie*G*J,0,-J]:[0,-ue*G*J,-J]:ie!==0?[ie*G*J,0,J]:[0,ue*G*J,J]},Le=ce(me.slope),ae=ce(oe.slope),R=(G,J)=>{g.push(...G),m.push(...J),M.push(0,0)},y=Oe?!(ie<0||ue>0):ie<0||ue>0,N=(G,J,q)=>{y?(R(G[0],G[1]),R(q[0],q[1]),R(J[0],J[1])):(R(G[0],G[1]),R(J[0],J[1]),R(q[0],q[1]))};N([ee,Le],[fe,Le],[_e,ae]),N([ee,Le],[_e,ae],[C,ae])}};_(1,0),_(-1,0),_(0,1),_(0,-1);let v=(o-l)/(Mc-Is),T=[{a:0,z:l,slope:0},{a:Is,z:l,slope:0},{a:Is,z:l,slope:v},{a:Mc,z:o,slope:v}];_(1,0,T,!0),_(-1,0,T,!0),_(0,1,T,!0),_(0,-1,T,!0);let S=new et;S.setAttribute("position",new He(new Float32Array(g),3)),S.setAttribute("normal",new He(new Float32Array(m),3)),S.setAttribute("uv",new He(new Float32Array(M),2));let A=s-2*h,D=e-2*h,b=new qn(Math.max(A,.001),Math.max(D,.001));b.translate(0,0,c);let w=new qn(Math.max(s-2*Mc,.001),Math.max(e-2*Mc,.001));w.rotateY(Math.PI),w.translate(0,0,o);let P=new Zt(s,e,i),F=P.toNonIndexed(),L=F.attributes.position,B=F.attributes.normal,V=F.attributes.uv,O=[];for(let ie=0;ie<L.count;ie+=3)Math.abs(B.getZ(ie))<.5&&O.push(ie,ie+1,ie+2);let k=new et,W=new Float32Array(O.length*3),Y=new Float32Array(O.length*3),ne=new Float32Array(O.length*2);O.forEach((ie,ue)=>{W.set([L.getX(ie),L.getY(ie),L.getZ(ie)],ue*3),Y.set([B.getX(ie),B.getY(ie),B.getZ(ie)],ue*3),ne.set([V.getX(ie),V.getY(ie)],ue*2)}),k.setAttribute("position",new He(W,3)),k.setAttribute("normal",new He(Y,3)),k.setAttribute("uv",new He(ne,2)),P.dispose(),F.dispose();let re=Li([S,b.toNonIndexed(),w.toNonIndexed(),k],!1);return S.dispose(),b.dispose(),w.dispose(),k.dispose(),re}var ab=.022;function lb(s,e){let n=e/.019049999999999997,i=Math.min(n,(s-.0015)/(.75*.0254)),r=s/2,o=7.0761,a=17.9788,l=[],c=(u,f,d,p,x,g)=>{for(let m=0;m<=g;m++){let M=(p+(x-p)*m/g)*Math.PI/180;l.push([u+d*Math.cos(M),f+d*Math.sin(M)])}};c(7.1699,17.51,.09375,180,0,20),c(7.4199,17.385,.15625,189,353.32,24),c(7.7324,17.885,.09375,173.08,0,20);let h=l.map(([u,f])=>({z:e/2-(u-o)*.0254*n,y:r-(a-f)*.0254*i,slope:0}));for(let u=0;u<h.length;u++){let f=h[Math.max(0,u-1)],d=h[Math.min(h.length-1,u+1)];h[u].slope=Math.abs(d.z-f.z)>1e-9?(d.y-f.y)/(d.z-f.z):0}return h}function cb(s,e,t){let n=lb(e,t),i=[],r=[],o=-e/2,a=(u,f,d,p,x,g,m,M)=>{i.push(...u,...f,...d,...u,...d,...p),r.push(...x,...g,...m,...x,...m,...M)};for(let u=0;u<n.length-1;u++){let f=n[u],d=n[u+1];if(f.z-d.z<1e-7)continue;let p=m=>{let M=Math.hypot(m,1);return[0,1/M,-m/M]},x=p(f.slope),g=p(d.slope);a([-s/2,f.y,f.z],[s/2,f.y,f.z],[s/2,d.y,d.z],[-s/2,d.y,d.z],x,x,g,g)}let l=n[0],c=n[n.length-1];a([-s/2,o,t/2],[s/2,o,t/2],[s/2,l.y,t/2],[-s/2,l.y,t/2],[0,0,1],[0,0,1],[0,0,1],[0,0,1]),a([s/2,o,-t/2],[-s/2,o,-t/2],[-s/2,c.y,-t/2],[s/2,c.y,-t/2],[0,0,-1],[0,0,-1],[0,0,-1],[0,0,-1]),a([-s/2,o,-t/2],[s/2,o,-t/2],[s/2,o,t/2],[-s/2,o,t/2],[0,-1,0],[0,-1,0],[0,-1,0],[0,-1,0]);for(let u of[1,-1]){let f=u*s/2,d=[u,0,0];for(let p=0;p<n.length-1;p++){let x=n[p],g=n[p+1];if(x.z-g.z<1e-7)continue;let m=[f,x.y,x.z],M=[f,g.y,g.z],_=[f,o,x.z],v=[f,o,g.z];u>0?a(_,v,M,m,d,d,d,d):a(v,_,m,M,d,d,d,d)}}let h=new et;return h.setAttribute("position",new He(new Float32Array(i),3)),h.setAttribute("normal",new He(new Float32Array(r),3)),h.setAttribute("uv",new He(new Float32Array(i.length/3*2),2)),h}function hm(s,e,t,n,i){let r=Math.min(ab,e*.35),o=e-r,a=n?Wo(s,o,t,{depth:i??Math.min(.005,t*.35),outer:{profile:n,width:i??.011,uMin:!0,uMax:!0,vMin:!0,vMax:!1}}):new Zt(s,o,t);a.translate(0,-r/2,0);let l=cb(s,r,t);l.translate(0,o/2,0);let c=Li([a.index?a.toNonIndexed():a,l],!1);return a.dispose(),l.dispose(),c}var vt=.001,hb=2.4,ub=new Nt({color:14675688,transparent:!0,opacity:.26,roughness:.05,metalness:0,side:pn}),um=[5/120,55/120,65/120,115/120],fb=.165;function uf(s,e){let t=new Ct;t.name=s.spec.name??s.spec.kind;let n=0;for(let i of s.parts){let r=xb(i),o=i.sizeMm.map(f=>f*vt),a=i.grainAxis==="x"?0:i.grainAxis==="y"?1:2,c=Math.max(...o.filter((f,d)=>d!==a))<=fb?um[n%um.length]:n*.618033988749%1,h=n*.754877666247%1;ko(r,hb,i.grainAxis,c,h,db(i)),gb(r,o),n+=1;let u=new it(r,i.role==="glass"?ub:e);i.role==="glass"&&(u.castShadow=!1,u.userData.isGlass=!0),i.materialHint&&(u.userData.materialHint=i.materialHint),u.name=i.name,u.position.set(i.positionMm[0]*vt,i.positionMm[1]*vt,i.positionMm[2]*vt),i.rotationRad&&u.rotation.set(...i.rotationRad),u.castShadow=i.role!=="glass",u.receiveShadow=!0,t.add(u)}return t}function db(s){if(!s.frameRecess)return;let e=s.sizeMm[0]/2*vt,t=s.sizeMm[1]/2*vt,n=s.frameRecess.overlapMm*vt,i=s.frameRecess.reachMm*vt;return(r,o)=>{let a=Math.min(e-Math.abs(r),t-Math.abs(o))-n,l=Math.min(1,Math.max(0,a/i));return .52+.48*(l*(2-l))}}function pb(s,e,t,n){let i=Math.min(.005,t*.35),r=.011,o=.01;if(n.axis==="slab"){if(!n.outer)return null;let d=n.bevelMm?n.bevelMm*vt:r,p=n.bevelMm?Math.min(n.bevelMm*vt,t*.45):i;return Wo(s,e,t,{depth:p,outer:{profile:n.outer,width:d,uMin:!0,uMax:!0,vMin:!0,vMax:!0}})}let a=n.axis==="y",l=a?e:s,c=a?s:e;if(!a&&n.copeTenonMm&&!n.miterEnds){let d=n.inner?o:0;l=Math.max(.05,l-2*(n.copeTenonMm*vt-d)),c+=3e-4}let u=(a?n.innerSide==="x-":n.innerSide==="y+")?"vMax":"vMin",f=Wo(l,c,t,{depth:i,miterEnds:n.miterEnds?{outerSide:u==="vMax"?"vMin":"vMax"}:void 0,stickCaps:n.stickGroove&&a&&!n.miterEnds?{grooveWidth:.006,grooveDepth:.01,capDepth:.0012,innerSide:u}:void 0,inner:n.inner?{profile:n.inner,width:o,side:u,endInset:(n.innerInsetMm??0)*vt,copeEnds:!a&&!n.miterEnds}:void 0,outer:n.outer?{profile:n.outer,width:n.bevelMm?n.bevelMm*vt:r,depth:n.bevelMm?Math.min(n.bevelMm*vt,t*.45):void 0,uMin:a,uMax:a,vMin:u==="vMax",vMax:u==="vMin"}:void 0});return a&&f.rotateZ(Math.PI/2),f}function mb(s,e,t,n,i){if(i[0].startsWith("x")){let l=[new X(-s/2,-t/2),new X(s/2,-t/2)];i.includes("x+")?l.push(new X(s/2,t/2-n),new X(s/2-n,t/2)):l.push(new X(s/2,t/2)),i.includes("x-")?l.push(new X(-s/2+n,t/2),new X(-s/2,t/2-n)):l.push(new X(-s/2,t/2));let c=new bn(new un(l),{depth:e,bevelEnabled:!1});return c.translate(0,0,-e/2),c.rotateX(Math.PI/2),c}let o=[new X(t/2,-e/2),new X(t/2,e/2)];i.includes("y+")?o.push(new X(-t/2+n,e/2),new X(-t/2,e/2-n)):o.push(new X(-t/2,e/2)),i.includes("y-")?o.push(new X(-t/2,-e/2+n),new X(-t/2+n,-e/2)):o.push(new X(-t/2,-e/2));let a=new bn(new un(o),{depth:s,bevelEnabled:!1});return a.rotateY(Math.PI/2),a.translate(-s/2,0,0),a}function gb(s,e){let t=s.getAttribute("position"),n=s.getAttribute("normal");if(!t||!n)return;let i=e[0]<=e[1]&&e[0]<=e[2]?0:e[1]<=e[2]?1:2,r=new Float32Array(t.count*2),o=(a,l,c)=>c===0?a.getX(l):c===1?a.getY(l):a.getZ(l);for(let a=0;a<t.count;a++){let l=Math.abs(n.getX(a)),c=Math.abs(n.getY(a)),h=Math.abs(n.getZ(a)),u=l>=c&&l>=h?0:c>=h?1:2;r[a*2]=o(t,a,i),r[a*2+1]=u===i?0:1}s.setAttribute("ply",new He(r,2))}function xb(s){let[e,t,n]=s.sizeMm.map(r=>r*vt);if(s.fingerPullTop&&s.shape==="box")return hm(e,t,n,s.edgeProfile?.outer,s.edgeProfile?.bevelMm?s.edgeProfile.bevelMm*vt:void 0);if(s.frontBevel&&s.shape==="box")return mb(e,t,n,s.frontBevel.bevelMm*vt,s.frontBevel.sides);if(s.raisedPanel&&s.shape==="box")return cm(e,t,n,s.raisedPanel.raiseWidthMm*vt,s.raisedPanel.tongueThicknessMm*vt,s.raisedPanel.profile);let i=s.scoop?{width:s.scoop.widthMm*vt,depth:s.scoop.depthMm*vt}:void 0;if(s.joinery&&s.shape==="box"){let r={type:s.joinery.type,depth:s.joinery.matingThicknessMm*vt};if(s.joinery.orient==="case"){let a=(s.joinery.frontBevelMm??0)*vt;if(s.joinery.role==="tails"){let l=s.joinery.frontLipMm?r.depth-s.joinery.frontLipMm*vt:void 0,c=a?lm(e,n,t,r,a,-(s.joinery.bevelInnerSign??1)):lf(e,n,t,r,l,s.joinery.singleEnd?0:l);if(c)return c.rotateX(-Math.PI/2),c}else{let l=cf(e,n,t,r,s.joinery.pinsOuterSign??1,void 0,(s.joinery.lipMm??0)*vt,a);if(l)return l.rotateX(-Math.PI/2),l}}let o=s.joinery.role==="tails"?lf(e,t,n,r,s.joinery.frontLipMm?r.depth-s.joinery.frontLipMm*vt:void 0,s.joinery.backLipMm?r.depth-s.joinery.backLipMm*vt:void 0):cf(e,t,n,r,s.joinery.pinsOuterSign??1,i,(s.joinery.lipMm??0)*vt);if(o)return o}if(i&&s.shape==="box")return of(e,t,n,i);if(s.edgeProfile&&s.shape==="box"){let r=pb(e,t,n,s.edgeProfile);if(r)return r}switch(s.shape){case"box":return new Zt(e,t,n);case"cylinder":return new ir(e/2,e/2,t,32);case"taperedLeg":{let r=new ir(e/2,e*.3,t,4,1);return r.rotateY(Math.PI/4),r.scale(Math.SQRT2,1,Math.SQRT2),r}}}var wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_b=new ci(-1,1,1,-1,0,1),ff=class extends et{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},vb=new ff,ns=class{constructor(e){this._mesh=new it(vb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bc=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ns(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xo=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Sc=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new X);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bc(wr),this.copyPass.material.blending=zt,this.clock=new po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xo!==void 0&&(o instanceof Xo?n=!0:o instanceof Sc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tc=class extends Tn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Ec=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=e-f,x=t-d,g,m;p>x?(g=1,m=0):(g=0,m=1);let M=p-g+h,_=x-m+h,v=p-1+2*h,T=x-1+2*h,S=l&255,A=c&255,D=this.perm[S+this.perm[A]]%12,b=this.perm[S+g+this.perm[A+m]]%12,w=this.perm[S+1+this.perm[A+1]]%12,P=.5-p*p-x*x;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[D],p,x));let F=.5-M*M-_*_;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[b],M,_));let L=.5-v*v-T*T;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[w],v,T)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,p=(h+u+f)*d,x=h-p,g=u-p,m=f-p,M=e-x,_=t-g,v=n-m,T,S,A,D,b,w;M>=_?_>=v?(T=1,S=0,A=0,D=1,b=1,w=0):M>=v?(T=1,S=0,A=0,D=1,b=0,w=1):(T=0,S=0,A=1,D=1,b=0,w=1):_<v?(T=0,S=0,A=1,D=0,b=1,w=1):M<v?(T=0,S=1,A=0,D=0,b=1,w=1):(T=0,S=1,A=0,D=1,b=1,w=0);let P=M-T+d,F=_-S+d,L=v-A+d,B=M-D+2*d,V=_-b+2*d,O=v-w+2*d,k=M-1+3*d,W=_-1+3*d,Y=v-1+3*d,ne=h&255,re=u&255,ie=f&255,ue=this.perm[ne+this.perm[re+this.perm[ie]]]%12,Ae=this.perm[ne+T+this.perm[re+S+this.perm[ie+A]]]%12,Oe=this.perm[ne+D+this.perm[re+b+this.perm[ie+w]]]%12,j=this.perm[ne+1+this.perm[re+1+this.perm[ie+1]]]%12,$=.6-M*M-_*_-v*v;$<0?i=0:($*=$,i=$*$*this._dot3(this.grad3[ue],M,_,v));let le=.6-P*P-F*F-L*L;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Ae],P,F,L));let me=.6-B*B-V*V-O*O;me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[Oe],B,V,O));let oe=.6-k*k-W*W-Y*Y;return oe<0?a=0:(oe*=oe,a=oe*oe*this._dot3(this.grad3[j],k,W,Y)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,x=(e+t+n+i)*l,g=Math.floor(e+x),m=Math.floor(t+x),M=Math.floor(n+x),_=Math.floor(i+x),v=(g+m+M+_)*c,T=g-v,S=m-v,A=M-v,D=_-v,b=e-T,w=t-S,P=n-A,F=i-D,L=b>w?32:0,B=b>P?16:0,V=w>P?8:0,O=b>F?4:0,k=w>F?2:0,W=P>F?1:0,Y=L+B+V+O+k+W,ne=o[Y][0]>=3?1:0,re=o[Y][1]>=3?1:0,ie=o[Y][2]>=3?1:0,ue=o[Y][3]>=3?1:0,Ae=o[Y][0]>=2?1:0,Oe=o[Y][1]>=2?1:0,j=o[Y][2]>=2?1:0,$=o[Y][3]>=2?1:0,le=o[Y][0]>=1?1:0,me=o[Y][1]>=1?1:0,oe=o[Y][2]>=1?1:0,ke=o[Y][3]>=1?1:0,Re=b-ne+c,Te=w-re+c,Q=P-ie+c,te=F-ue+c,ee=b-Ae+2*c,fe=w-Oe+2*c,C=P-j+2*c,_e=F-$+2*c,ce=b-le+3*c,Le=w-me+3*c,ae=P-oe+3*c,R=F-ke+3*c,y=b-1+4*c,N=w-1+4*c,G=P-1+4*c,J=F-1+4*c,q=g&255,Ie=m&255,ge=M&255,Ce=_&255,Ge=a[q+a[Ie+a[ge+a[Ce]]]]%32,he=a[q+ne+a[Ie+re+a[ge+ie+a[Ce+ue]]]]%32,ve=a[q+Ae+a[Ie+Oe+a[ge+j+a[Ce+$]]]]%32,Ne=a[q+le+a[Ie+me+a[ge+oe+a[Ce+ke]]]]%32,Be=a[q+1+a[Ie+1+a[ge+1+a[Ce+1]]]]%32,xe=.6-b*b-w*w-P*P-F*F;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[Ge],b,w,P,F));let Ze=.6-Re*Re-Te*Te-Q*Q-te*te;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this._dot4(r[he],Re,Te,Q,te));let U=.6-ee*ee-fe*fe-C*C-_e*_e;U<0?f=0:(U*=U,f=U*U*this._dot4(r[ve],ee,fe,C,_e));let Me=.6-ce*ce-Le*Le-ae*ae-R*R;Me<0?d=0:(Me*=Me,d=Me*Me*this._dot4(r[Ne],ce,Le,ae,R));let pe=.6-y*y-N*N-G*G-J*J;return pe<0?p=0:(pe*=pe,p=pe*pe*this._dot4(r[Be],y,N,G,J)),27*(h+u+f+d+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var qo={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new X},cameraProjectionMatrix:{value:new De},cameraInverseProjectionMatrix:{value:new De},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Yo={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},jo={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new X}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};var Zo=class s extends Tn{constructor(e,t,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();let o=new oi;o.format=hi,o.type=Ki,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:wt,magFilter:wt,type:an,depthTexture:o}),this.ssaoRenderTarget=new Xt(this.width,this.height,{type:an}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Ft({defines:Object.assign({},qo.defines),uniforms:Jn.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,blending:zt}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new oo,this.normalMaterial.blending=zt,this.blurMaterial=new Ft({defines:Object.assign({},jo.defines),uniforms:Jn.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Ft({defines:Object.assign({},Yo.defines),uniforms:Jn.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ft({uniforms:Jn.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:tl,blendDst:xo,blendEquation:Wn,blendSrcAlpha:el,blendDstAlpha:xo,blendEquationAlpha:Wn}),this._fsQuad=new ns(null),this._originalClearColor=new Se}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case s.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case s.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case s.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Qa,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){let t=this.kernel;for(let n=0;n<e;n++){let i=new I;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=xt.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){let n=new Ec,i=4*4,r=new Float32Array(i);for(let o=0;o<i;o++){let a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Gi(r,4,4,dr,on),this.noiseTexture.wrapS=kt,this.noiseTexture.wrapT=kt,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}};Zo.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};var Ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ac=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Jn.clone(Ko.uniforms),this.material=new or({name:Ko.name,uniforms:this.uniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader}),this._fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===So?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fm=16384;function yb(s,e,t){let n=s.createRadialGradient(e/2,t/2,Math.min(e,t)*.45,e/2,t/2,Math.hypot(e,t)*.62);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.14)"),s.fillStyle=n,s.fillRect(0,0,e,t);let i=s.getImageData(0,0,e,t),r=i.data,o=1234567,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296-.5);for(let l=0;l<r.length;l+=4){let c=a()*5;r[l]+=c,r[l+1]+=c,r[l+2]+=c}s.putImageData(i,0,0)}async function df(s,e={}){let t=e.width??3840,n=e.height??2160,i=Math.max(1,e.supersample??2),r=Math.min(i,fm/t,fm/n),o=Math.round(t*r),a=Math.round(n*r),l=document.createElement("canvas"),c=new vr({canvas:l,antialias:!0,alpha:e.transparent??!1,preserveDrawingBuffer:!0});c.setPixelRatio(1),c.setSize(o,a,!1),c.shadowMap.enabled=!0,c.shadowMap.type=lr,c.toneMapping=s.toneMapping,c.toneMappingExposure=s.toneMappingExposure;let h=s.scene,u=h.environment,f=h.background,d=null;try{s.makeEnvironment&&(d=s.makeEnvironment(c),h.environment=d),e.transparent&&(h.background=null);let p=s.camera.clone();if(p.aspect=t/n,p.updateProjectionMatrix(),(e.ssao??!0)&&!e.transparent){let M=new wc(c);M.setSize(o,a),M.addPass(new Tc(h,p));let _=new Zo(h,p,o,a);_.kernelRadius=.06,_.minDistance=4e-4,_.maxDistance=.04,M.addPass(_),M.addPass(new Ac),M.render(),M.dispose()}else c.render(h,p);let g=document.createElement("canvas");g.width=t,g.height=n;let m=g.getContext("2d");return m.drawImage(l,0,0,o,a,0,0,t,n),(e.photoFinish??!0)&&!e.transparent&&yb(m,t,n),await new Promise((M,_)=>{g.toBlob(v=>v?M(v):_(new Error("Snapshot encoding failed")),e.mimeType??"image/png",e.quality)})}finally{h.environment=u,h.background=f,d?.dispose(),c.dispose(),c.forceContextLoss()}}var pf=class{scene=new Qs;camera;renderer;materials;controls;container;lightRig;floor;currentObject=null;currentLayout=null;assignments=new Map;panelMaterialId="birchply";stainId=null;resizeObserver;disposed=!1;animationHandle=0;constructor(e){this.container=e.container,this.materials=new Vo(e.textureSize??2048),this.renderer=new vr({antialias:!0}),this.renderer.toneMapping=bs,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lr,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block",this.camera=new Rt(32,1,.05,60),this.camera.position.set(2.4,1.6,2.8),this.controls=new nc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.55,this.controls.minDistance=.4,this.controls.maxDistance=15,this.scene.environment=this.makeEnvironment(this.renderer),this.scene.environmentIntensity=.58,this.setBackground(e.background??"studio"),this.lightRig=dc(e.lighting??"studio"),this.scene.add(this.lightRig),this.floor=new it(new Kr(7,64).rotateX(-Math.PI/2),new ro({opacity:.26})),this.floor.receiveShadow=!0,this.scene.add(this.floor),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container),this.handleResize(),this.startLoop()}showFurniture(e,t){let n=Fo(e),i=this.materials.get(this.assignments.get("*")??"oak",this.stainId),r=uf(n,i);return this.swapObject(r,t?.frame??!0),this.currentLayout=n,this.reapplyAssignments(),n}async loadModel(e,t){let n=await ju(e,t);this.swapObject(n),this.currentLayout=null}listMaterials(){return this.materials.list()}registerScannedMaterial(e){this.materials.addScanned(e)}unregisterScannedMaterial(e){this.materials.removeScanned(e)}renameScannedMaterial(e,t){this.materials.renameScanned(e,t)}setMaterialLabel(e,t){this.materials.setLabel(e,t)}listLightingPresets(){return Zu}listParts(){if(!this.currentObject)return[];let e=new Set;return this.currentObject.traverse(t=>{t instanceof it&&t.name&&e.add(t.name)}),[...e]}setMaterial(e,t){let n=this.materials.get(e,this.stainId);t?this.assignments.set(t,e):(this.assignments.clear(),this.assignments.set("*",e)),this.currentObject&&this.currentObject.traverse(i=>{i instanceof it&&!i.userData.isGlass&&(t?i.name===t:!i.userData.materialHint)&&(i.material=n)})}setStain(e){this.stainId=e,this.currentObject&&(!this.assignments.has("*")&&this.currentLayout&&this.assignments.set("*","oak"),this.reapplyAssignments())}listStains(){return this.materials.listStains()}setPanelMaterial(e){this.panelMaterialId=e,this.applyPanelMaterial()}applyPanelMaterial(){if(!this.currentObject)return;let e=this.materials.get(this.panelMaterialId,this.stainId);this.currentObject.traverse(t=>{t instanceof it&&t.userData.materialHint==="ply"&&!this.assignments.has(t.name)&&(t.material=e)})}setLighting(e){this.scene.remove(this.lightRig),this.lightRig.traverse(t=>{t instanceof li&&t.dispose()}),this.lightRig=dc(e),this.scene.add(this.lightRig),this.fitShadows()}setBackground(e){if(e==="transparent"){this.scene.background=null;return}if(e==="studio"){let t=document.createElement("canvas");t.width=64,t.height=512;let n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#34373e"),i.addColorStop(.45,"#272a30"),i.addColorStop(1,"#101114"),n.fillStyle=i,n.fillRect(0,0,64,512);let r=new _s(t);r.colorSpace=Ke,this.scene.background=r;return}this.scene.background=new Se(e)}setTextureResolution(e){e!==this.materials.resolution&&(this.materials.setResolution(e),this.reapplyAssignments())}async renderSnapshot(e){return df({scene:this.scene,camera:this.camera,toneMapping:this.renderer.toneMapping,toneMappingExposure:this.renderer.toneMappingExposure,makeEnvironment:t=>this.makeEnvironment(t)},e)}getBuildPlan(){return this.currentLayout?ou(this.currentLayout.spec):null}getLayout(){return this.currentLayout}setCameraOrbit(e,t,n=1){if(!this.currentObject)return;let i=new Bt().setFromObject(this.currentObject);if(i.isEmpty())return;let r=i.getCenter(new I),l=i.getBoundingSphere(new qt).radius/Math.sin(xt.degToRad(this.camera.fov/2))*1.15*n,c=xt.degToRad(e),h=xt.degToRad(t);this.camera.position.set(r.x+l*Math.cos(h)*Math.sin(c),r.y+l*Math.sin(h),r.z+l*Math.cos(h)*Math.cos(c)),this.controls.target.copy(r),this.controls.update()}frameObject(){if(!this.currentObject)return;let e=new Bt().setFromObject(this.currentObject);if(e.isEmpty())return;let t=e.getCenter(new I),i=e.getBoundingSphere(new qt).radius/Math.sin(xt.degToRad(this.camera.fov/2))*1.15,r=new I(.72,.42,1).normalize();this.camera.position.copy(t).addScaledVector(r,i),this.controls.target.copy(t),this.controls.update()}dispose(){this.disposed=!0,cancelAnimationFrame(this.animationHandle),this.resizeObserver.disconnect(),this.controls.dispose(),this.swapObject(null),this.scene.environment?.dispose(),this.materials.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}makeEnvironment(e){let t=new _r(e),n=new Qs,i=new it(new Zt(16,9,16),new sn({color:1447964,side:Kt}));i.position.y=3.5,n.add(i);let r=new it(new qn(16,16).rotateX(-Math.PI/2),new sn({color:2895411}));r.position.y=-.95,n.add(r);let o=(l,c,h,u,f)=>{let d=new sn;d.color.set(h).multiplyScalar(u);let p=new it(new qn(l,c),d);p.position.set(...f),p.lookAt(0,.8,0),n.add(p)};o(5,3.5,16773598,9,[-4.5,4.2,3.2]),o(4.2,3,14674175,2.2,[4.6,2.6,3.6]),o(5,1.3,16777215,6,[.5,4.6,-4.4]),o(3,2,16777215,.9,[0,.9,5]);let a=t.fromScene(n,.07).texture;return t.dispose(),a}reapplyAssignments(){if(!this.currentObject)return;let e=[...this.assignments],t=e.find(([n])=>n==="*");t&&this.setMaterial(t[1]);for(let[n,i]of e)n!=="*"&&this.setMaterial(i,n);this.applyPanelMaterial()}swapObject(e,t=!0){this.currentObject&&(this.scene.remove(this.currentObject),this.currentObject.traverse(n=>{n instanceof it&&n.geometry.dispose()})),this.currentObject=e,e&&(this.scene.add(e),t&&this.frameObject(),this.fitShadows())}fitShadows(){if(!this.currentObject)return;let e=new Bt().setFromObject(this.currentObject);if(e.isEmpty())return;let t=e.getBoundingSphere(new qt),n=Math.max(.4,t.radius*1.4);this.lightRig.traverse(i=>{if(i instanceof dn&&i.castShadow){let r=i.shadow.camera;r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.updateProjectionMatrix(),i.shadow.needsUpdate=!0}})}handleResize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}startLoop(){let e=()=>{this.disposed||(this.animationHandle=requestAnimationFrame(e),this.controls.update(),this.renderer.render(this.scene,this.camera))};e()}};export{pf as FurnitureEngine,Zu as LIGHTING_PRESETS,tM as MM_PER_INCH,Vo as MaterialLibrary,xc as STAINS,ko as applyBoxUVs,_c as applyStain,uf as buildGroup,Fo as buildLayout,dc as createLightRig,bp as defaultBookshelfSpec,Tp as defaultCabinetDoorSpec,Sp as defaultCabinetSpec,wp as defaultDrawerBoxSpec,Ep as defaultDrawerFrontSpec,Ap as defaultDrawerUnitSpec,Yy as defaultSpec,Mp as defaultTableSpec,em as detectFormat,Qi as formatInches,ou as generateBuildPlan,nM as inchesToMm,tm as isBinaryStl,ju as loadModel,Cp as mmToInches,im as normalizeToFurnitureScale,nm as parseStlGeometry,df as renderSnapshot,su as validateSpec};
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/

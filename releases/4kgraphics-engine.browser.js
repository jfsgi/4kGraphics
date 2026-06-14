var sl="182",Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Uh=1,Sd=2;var Mo=1,ur=2,fr=3,qn=0,en=1,_n=2,Wt=0,ds=1,Oh=2,Bh=3,kh=4,rl=5,Yn=100,wd=101,Td=102,Ed=103,Ad=104,bo=200,Rd=201,Cd=202,Pd=203,La=204,Na=205,ol=206,Id=207,al=208,Dd=209,Ld=210,Nd=211,Fd=212,Ud=213,Od=214,ll=0,cl=1,hl=2,ps=3,ul=4,fl=5,dl=6,pl=7,So=0,Bd=1,kd=2,$n=0,wo=1,To=2,Eo=3,Ts=4,Ao=5,Ro=6,Co=7,Mh="attached",zd="detached",zh=300,Ji=301,Es=302,dr=303,ml=304,Po=306,Gt=1e3,ln=1001,Wi=1002,Ct=1003,gl=1004;var As=1005;var Ut=1006,pr=1007;var Jn=1008;var yn=1009,Hh=1010,Vh=1011,mr=1012,xl=1013,Qn=1014,un=1015,fn=1016,_l=1017,yl=1018,Qi=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,En=1023,li=1026,pi=1027,gr=1028,vl=1029,Rs=1030,Ml=1031;var bl=1033,Io=33776,Do=33777,Lo=33778,No=33779,Sl=35840,wl=35841,Tl=35842,El=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Il=37489,Dl=37490,Ll=37491,Nl=37808,Fl=37809,Ul=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,jl=36492,Zl=36494,Kl=36495,$l=36283,Jl=36284,Ql=36285,ec=36286;var ms=2300,gs=2301,Da=2302,bh=2400,Sh=2401,wh=2402,Hd=2500;var Yh=0,Fo=1,xr=2,Vd=3200;var _r=0,Gd=1,ei="",Je="srgb",Qt="srgb-linear",Vr="linear",ut="srgb";var fs=7680;var Th=519,Wd=512,Xd=513,qd=514,tc=515,Yd=516,jd=517,nc=518,Zd=519,Fa=35044;var jh="300 es",Xn=2e3,Gr=2001;function Zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=Js("canvas");return i.style.display="block",i}var Of={},Qs=null;function Wr(...i){let e="THREE."+i.shift();Qs?Qs("log",e,...i):console.log(e,...i)}function He(...i){let e="THREE."+i.shift();Qs?Qs("warn",e,...i):console.warn(e,...i)}function Ye(...i){let e="THREE."+i.shift();Qs?Qs("error",e,...i):console.error(e,...i)}function er(...i){let e=i.join(" ");e in Of||(Of[e]=!0,He(...i))}function $d(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,Br=Math.PI/180,xs=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Kh(i,e){return(i%e+e)%e}function og(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ag(i,e,t){return i!==e?(t-i)/(e-i):0}function kr(i,e,t){return(1-t)*i+t*e}function lg(i,e,t,n){return kr(i,e,1-Math.exp(-t*n))}function cg(i,e=1){return e-Math.abs(Kh(i,e*2)-e)}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function pg(i){return i*(.5-Math.random())}function mg(i){i!==void 0&&(Bf=i);let e=Bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gg(i){return i*Br}function xg(i){return i*xs}function _g(i){return(i&i-1)===0&&i!==0}function yg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt={DEG2RAD:Br,RAD2DEG:xs,generateUUID:Dn,clamp:nt,euclideanModulo:Kh,mapLinear:og,inverseLerp:ag,lerp:kr,damp:lg,pingpong:cg,smoothstep:hg,smootherstep:ug,randInt:fg,randFloat:dg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:xg,isPowerOfTwo:_g,ceilPowerOfTwo:yg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:Mg,normalize:gt,denormalize:Wn},G=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);g=Math.sin(g*v)/y,a=Math.sin(a*v)/y,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new L,kf=new At,et=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],y=s[4],_=s[7],S=s[2],w=s[5],T=s[8];return r[0]=o*x+a*v+l*S,r[3]=o*m+a*y+l*w,r[6]=o*g+a*_+l*T,r[1]=c*x+h*v+u*S,r[4]=c*m+h*y+u*w,r[7]=c*g+h*_+u*T,r[2]=f*x+d*v+p*S,r[5]=f*m+d*y+p*w,r[8]=f*g+d*_+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new et,zf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){let i={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qt]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}var Ke=bg();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=Js("canvas")),Os.width=e.width,Os.height=e.height;let s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sg=0,tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var wg=0,Zc=new L,Ot=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,s=ln,r=Ut,o=Jn,a=En,l=yn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Dn(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gt:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Wi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gt:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Wi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=zh;Ot.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(d+1)/2,S=(g+1)/2,w=(h+f)/4,T=(u+x)/4,R=(p+m)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=T/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=R/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ot(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),oa.subVectors(this.max,Pr),Bs.subVectors(e.a,Pr),ks.subVectors(e.b,Pr),zs.subVectors(e.c,Pr),Oi.subVectors(ks,Bs),Bi.subVectors(zs,ks),ls.subVectors(Bs,zs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ls.z,ls.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ls.z,0,-ls.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ls.y,ls.x,0];return!Kc(t,Bs,ks,zs,oa)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Bs,ks,zs,oa))?!1:(aa.crossVectors(Oi,Bi),t=[aa.x,aa.y,aa.z],Kc(t,Bs,ks,zs,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,ra=new Rt,Bs=new L,ks=new L,zs=new L,Oi=new L,Bi=new L,ls=new L,Pr=new L,oa=new L,aa=new L,cs=new L;function Kc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Tg=new Rt,Ir=new L,$c=new L,Kt=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add($c)),this.expandByPoint(Ir.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mi=new L,Jc=new L,la=new L,ki=new L,Qc=new L,ca=new L,eh=new L,Ai=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Jc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=ki.dot(this.direction),l=-ki.dot(la),c=ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(la,f),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){Qc.subVectors(t,e),ca.subVectors(n,e),eh.crossVectors(Qc,ca);let o=this.direction.dot(eh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors(ki,ca));if(l<0)return null;let c=a*this.direction.dot(Qc.cross(ki));if(c<0||l+c>o)return null;let h=-a*ki.dot(eh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eg,e,Ag)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),zi.crossVectors(n,Sn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),zi.crossVectors(n,Sn)),zi.normalize(),ha.crossVectors(Sn,zi),s[0]=zi.x,s[4]=ha.x,s[8]=Sn.x,s[1]=zi.y,s[5]=ha.y,s[9]=Sn.y,s[2]=zi.z,s[6]=ha.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],y=n[7],_=n[11],S=n[15],w=s[0],T=s[4],R=s[8],M=s[12],b=s[1],A=s[5],N=s[9],I=s[13],F=s[2],B=s[6],O=s[10],U=s[14],V=s[3],Y=s[7],ne=s[11],re=s[15];return r[0]=o*w+a*b+l*F+c*V,r[4]=o*T+a*A+l*B+c*Y,r[8]=o*R+a*N+l*O+c*ne,r[12]=o*M+a*I+l*U+c*re,r[1]=h*w+u*b+f*F+d*V,r[5]=h*T+u*A+f*B+d*Y,r[9]=h*R+u*N+f*O+d*ne,r[13]=h*M+u*I+f*U+d*re,r[2]=p*w+x*b+m*F+g*V,r[6]=p*T+x*A+m*B+g*Y,r[10]=p*R+x*N+m*O+g*ne,r[14]=p*M+x*I+m*U+g*re,r[3]=v*w+y*b+_*F+S*V,r[7]=v*T+y*A+_*B+S*Y,r[11]=v*R+y*N+_*O+S*ne,r[15]=v*M+y*I+_*U+S*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*f,y=a*d-c*u,_=a*f-l*u,S=o*d-c*h,w=o*f-l*h,T=o*u-a*h;return t*(x*v-m*y+g*_)-n*(p*v-m*S+g*w)+s*(p*y-x*S+g*T)-r*(p*_-x*w+m*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=u*m*c-x*f*c+x*l*d-a*m*d-u*l*g+a*f*g,y=p*f*c-h*m*c-p*l*d+o*m*d+h*l*g-o*f*g,_=h*x*c-p*u*c+p*a*d-o*x*d-h*a*g+o*u*g,S=p*u*l-h*x*l-p*a*f+o*x*f+h*a*m-o*u*m,w=t*v+n*y+s*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=v*T,e[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*g-n*f*g)*T,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*g+n*l*g)*T,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,e[4]=y*T,e[5]=(h*m*r-p*f*r+p*s*d-t*m*d-h*s*g+t*f*g)*T,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*g-t*l*g)*T,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*T,e[8]=_*T,e[9]=(p*u*r-h*x*r-p*n*d+t*x*d+h*n*g-t*u*g)*T,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*g+t*a*g)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=S*T,e[13]=(h*x*s-p*u*s+p*n*f-t*x*f-h*n*m+t*u*m)*T,e[14]=(p*a*s-o*x*s-p*n*l+t*x*l+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,v=l*c,y=l*h,_=l*u,S=n.x,w=n.y,T=n.z;return s[0]=(1-(x+g))*S,s[1]=(d+_)*S,s[2]=(p-y)*S,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+g))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(p+y)*T,s[9]=(m-v)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Vn.copy(this);let c=1/r,h=1/o,u=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new L,Vn=new Ie,Eg=new L(0,0,0),Ag=new L(1,1,1),zi=new L,ha=new L,Sn=new L,Vf=new Ie,Gf=new At,It=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};It.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rg=0,Wf=new L,Vs=new At,bi=new Ie,ua=new L,Dr=new L,Cg=new L,Pg=new At,Xf=new L(1,0,0),qf=new L(0,1,0),Yf=new L(0,0,1),jf={type:"added"},Ig={type:"removed"},Gs={type:"childadded",child:null},th={type:"childremoved",child:null},xt=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new It,n=new At,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new et}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Dr,ua,this.up):bi.lookAt(ua,Dr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(bi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new L(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new L,Si=new L,nh=new L,wi=new L,Ws=new L,Xs=new L,Zf=new L,ih=new L,sh=new L,rh=new L,oh=new lt,ah=new lt,lh=new lt,Gi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),Si.subVectors(n,t),nh.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(Si),l=Gn.dot(nh),c=Si.dot(Si),h=Si.dot(nh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oh,r.x),o.addScaledVector(ah,r.y),o.addScaledVector(lh,r.z),o}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),Si.subVectors(e,t),Gn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Gn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,n),Xs.subVectors(r,n),ih.subVectors(e,n);let l=Ws.dot(ih),c=Xs.dot(ih);if(l<=0&&c<=0)return t.copy(n);sh.subVectors(e,s);let h=Ws.dot(sh),u=Xs.dot(sh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ws,o);rh.subVectors(e,r);let d=Ws.dot(rh),p=Xs.dot(rh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Xs,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Zf.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Zf,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Kh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ch(o,r,e+1/3),this.g=ch(o,r,e),this.b=ch(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Je){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Ke.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Je){Ke.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(fa);let n=kr(Hi.h,fa.h,t),s=kr(Hi.s,fa.s,t),r=kr(Hi.l,fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ae;Ae.NAMES=Jd;var Dg=0,Bt=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ds,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Na,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new L,da=new G,Lg=0,Fe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}};var _s=class extends Fe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends Fe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Fe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ng=0,Cn=new Ie,hh=new xt,qs=new L,wn=new Rt,Lr=new Rt,jt=new L,Ge=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?Yr:_s)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(wn.min,Lr.min),wn.expandByPoint(jt),jt.addVectors(wn.max,Lr.max),wn.expandByPoint(jt)):(wn.expandByPoint(Lr.min),wn.expandByPoint(Lr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),jt.add(qs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;let c=new L,h=new L,u=new L,f=new G,d=new G,p=new G,x=new L,m=new L;function g(R,M,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(A),a[R].add(x),a[M].add(x),a[b].add(x),l[R].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){let b=v[R],A=b.start,N=b.count;for(let I=A,F=A+N;I<F;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new L,_=new L,S=new L,w=new L;function T(R){S.fromBufferAttribute(s,R),w.copy(S);let M=a[R];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(w,M);let A=_.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,A)}for(let R=0,M=v.length;R<M;++R){let b=v[R],A=b.start,N=b.count;for(let I=A,F=A+N;I<F;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Fe(f,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kf=new Ie,hs=new Ai,pa=new Kt,$f=new L,ma=new L,ga=new L,xa=new L,uh=new L,_a=new L,Jf=new L,ya=new L,tt=class extends xt{constructor(e=new Ge,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(uh.fromBufferAttribute(u,e),o?_a.addScaledVector(uh,h):_a.addScaledVector(uh.sub(t),h))}t.add(_a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(pa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(pa,$f)===null||hs.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Kf.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Kf),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){let w=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);s=va(this,g,e,n,c,h,u,w,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=va(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){let w=_,T=_+1,R=_+2;s=va(this,g,e,n,c,h,u,w,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,y=m+1,_=m+2;s=va(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fg(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qn,a),l===null)return null;ya.copy(a),ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:i}}function va(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,xa);let h=Fg(i,e,t,n,ma,ga,xa,Jf);if(h){let u=new L;Gi.getBarycoord(Jf,ma,ga,xa,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,l,c,u,new G)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,l,c,u,new G)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Gi.getNormal(ma,ga,xa,f.normal),h.face=f,h.barycoord=u}return h}var dt=class i extends Ge{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function p(x,m,g,v,y,_,S,w,T,R,M){let b=_/T,A=S/R,N=_/2,I=S/2,F=w/2,B=T+1,O=R+1,U=0,V=0,Y=new L;for(let ne=0;ne<O;ne++){let re=ne*A-I;for(let ie=0;ie<B;ie++){let ue=ie*b-N;Y[x]=ue*v,Y[m]=re*y,Y[g]=F,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ie/T),u.push(1-ne/R),U+=1}}for(let ne=0;ne<R;ne++)for(let re=0;re<T;re++){let ie=f+re+B*ne,ue=f+re+B*(ne+1),Le=f+(re+1)+B*(ne+1),Me=f+(re+1)+B*ne;l.push(ie,ue,Me),l.push(ue,Le,Me),V+=6}a.addGroup(d,V,M),d+=V,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ug(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var ti={clone:Cs,merge:sn},Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new L,Qf=new G,ed=new G,Nt=class extends jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,ed),t.subVectors(ed,Qf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,js=1,ka=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Ys,js,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Ys,js,e,t);r.layers=this.layers,this.add(r);let o=new Nt(Ys,js,e,t);o.layers=this.layers,this.add(o);let a=new Nt(Ys,js,e,t);a.layers=this.layers,this.add(a);let l=new Nt(Ys,js,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Ys,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zr=class extends Ot{constructor(e=[],t=Ji,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Wt});r.uniforms.tEquirect.value=t;let o=new tt(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ut),new ka(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},wt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ir=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new It,this.environmentIntensity=1,this.environmentRotation=new It,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},sr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new L,rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Fe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var td=new L,nd=new lt,id=new lt,zg=new L,sd=new Ie,Ma=new L,fh=new Kt,rd=new Ie,dh=new Ai,ys=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mh,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(s),e.ray.intersectsSphere(fh)!==!1&&(rd.copy(s).invert(),dh.copy(e.ray).applyMatrix4(rd),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;nd.fromBufferAttribute(s.attributes.skinIndex,e),id.fromBufferAttribute(s.attributes.skinWeight,e),td.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=id.getComponent(r);if(o!==0){let a=nd.getComponent(r);sd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zg.copy(td).applyMatrix4(sd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ri=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xi=class extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ct,h=Ct,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},od=new Ie,Hg=new Ie,vs=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Hg;od.multiplyMatrices(a,t[r]),od.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xi(t,e,e,En,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(He("Skeleton: No bone found with UUID:",r),o=new Ri),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},qi=class extends Fe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new Ie,ad=new Ie,ba=[],ld=new Rt,Vg=new Ie,Nr=new tt,Fr=new Kt,$r=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),ld.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Fr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),ad.multiplyMatrices(n,Zs),Nr.matrixWorld=ad,Nr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(s*this.count),s,this.count,gr,un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ph=new L,Gg=new L,Wg=new et,Pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ph.subVectors(n,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ph),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wg.getNormalMatrix(e),s=this.coplanarPoint(ph).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Kt,Xg=new G(.5,.5),Sa=new L,or=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,g-p,S-v).normalize(),s[1].setComponents(c+o,d+h,g+p,S+v).normalize(),s[2].setComponents(c+a,d+u,g+x,S+y).normalize(),s[3].setComponents(c-a,d-u,g-x,S-y).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,g-m,S-_).normalize();else if(s[4].setComponents(c-l,d-f,g-m,S-_).normalize(),t===Xn)s[5].setComponents(c+l,d+f,g+m,S+_).normalize();else if(t===Gr)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Xg.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ln=class extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new L,Ha=new L,cd=new Ie,Ur=new Ai,wa=new Kt,mh=new L,hd=new L,Ci=class extends xt{constructor(e=new Ge,t=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(Ha);e.setAttribute("lineDistance",new je(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;cd.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),y=Ta(this,e,Ur,l,g,v,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=Ta(this,e,Ur,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=Ta(this,e,Ur,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ta(this,e,Ur,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(za.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),t.distanceSqToSegment(za,Ha,mh,hd)>n)return;mh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mh);if(!(c<e.near||c>e.far))return{distance:c,point:hd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ud=new L,fd=new L,Yi=class extends Ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ud.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ud.distanceTo(fd);e.setAttribute("lineDistance",new je(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jr=class extends Ci{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jn=class extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new Ie,Eh=new Ai,Ea=new Kt,Aa=new L,Pi=class extends xt{constructor(e=new Ge,t=new jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;dd.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);Aa.fromBufferAttribute(u,m),pd(Aa,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Aa.fromBufferAttribute(u,p),pd(Aa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pd(i,e,t,n,s,r,o){let a=Eh.distanceSqToPoint(i);if(a<t){let l=new L;Eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ms=class extends Ot{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class extends Ot{constructor(e,t,n=Qn,s,r,o,a=Ct,l=Ct,c,h=li,u=1){if(h!==li&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Va=class extends hi{constructor(e,t=Qn,n=Ji,s,r,o=Ct,a=Ct,l,c=li){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var eo=class i extends Ge{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new G;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ji=class i extends Ge{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function v(){let _=new L,S=new L,w=0,T=(t-e)/n;for(let R=0;R<=r;R++){let M=[],b=R/r,A=b*(t-e)+e;for(let N=0;N<=s;N++){let I=N/s,F=I*l+a,B=Math.sin(F),O=Math.cos(F);S.x=A*B,S.y=-b*n+m,S.z=A*O,u.push(S.x,S.y,S.z),_.set(B,T,O).normalize(),f.push(_.x,_.y,_.z),d.push(I,1-b),M.push(p++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){let b=x[M][R],A=x[M+1][R],N=x[M+1][R+1],I=x[M][R+1];(e>0||M!==0)&&(h.push(b,A,I),w+=3),(t>0||M!==r-1)&&(h.push(A,N,I),w+=3)}c.addGroup(g,w,0),g+=w}function y(_){let S=p,w=new G,T=new L,R=0,M=_===!0?e:t,b=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),p++;let A=p;for(let N=0;N<=s;N++){let F=N/s*l+a,B=Math.cos(F),O=Math.sin(F);T.x=M*O,T.y=m*b,T.z=M*B,u.push(T.x,T.y,T.z),f.push(0,b,0),w.x=B*.5+.5,w.y=O*.5*b+.5,d.push(w.x,w.y),p++}for(let N=0;N<s;N++){let I=S+N,F=A+N;_===!0?h.push(F,F+1,I):h.push(F+1,F,I),R+=3}c.addGroup(g,R,_===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new G:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new Ie;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ar=class extends hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new G){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ra=new L,gh=new Jh,xh=new Jh,_h=new Jh,Wa=class extends hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),c=Ra);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),gh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),xh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),_h.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),_h.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(gh.calc(l),xh.calc(l),_h.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function md(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function qg(i,e){let t=1-i;return t*t*e}function Yg(i,e){return 2*(1-i)*i*e}function jg(i,e){return i*i*e}function zr(i,e,t,n){return qg(i,e)+Yg(i,t)+jg(i,n)}function Zg(i,e){let t=1-i;return t*t*t*e}function Kg(i,e){let t=1-i;return 3*t*t*i*e}function $g(i,e){return 3*(1-i)*i*i*e}function Jg(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return Zg(i,e)+Kg(i,t)+$g(i,n)+Jg(i,s)}var to=class extends hn{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends hn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y),Hr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends hn{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends hn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y),zr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new G){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(md(a,l.x,c.x,h.x,u.x),md(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:Wa,CubicBezierCurve:to,CubicBezierCurve3:Xa,EllipseCurve:ar,LineCurve:no,LineCurve3:qa,QuadraticBezierCurve:io,QuadraticBezierCurve3:Ya,SplineCurve:so}),ja=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ah[s.type]().fromJSON(s))}return this}},ro=class extends ja{constructor(e){super(),this.type="Path",this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new no(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new io(this.currentPoint.clone(),new G(e,t),new G(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new to(this.currentPoint.clone(),new G(e,t),new G(n,s),new G(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new so(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends ro{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ro().fromJSON(s))}return this}};function Qg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Qd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=s0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return oo(r,o,t,a,l,c,0),o}function Qd(i,e,t,n,s){let r;if(s===m0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=gd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=gd(o/n|0,i[o],i[o+1],r);return r&&lr(r,r.next)&&(lo(r),r=r.next),r}function bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(lr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&c0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?t0(i,n,s,r):e0(i)){e.push(l.i,i.i,c.i),lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=n0(bs(i),e),oo(i,e,t,n,s,r,2)):o===2&&i0(i,e,t,n,s,r):oo(bs(i),e,t,n,s,r,1);break}}}function e0(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Or(s,a,r,l,o,c,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function t0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=Rh(d,p,e,t,n),v=Rh(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=g&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Or(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Or(a,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Or(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Or(a,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function n0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!lr(n,s)&&tp(n,t,t.next,s)&&ao(n,s)&&ao(s,n)&&(e.push(n.i,t.i,s.i),lo(t),lo(t.next),t=i=s),t=t.next}while(t!==i);return bs(t)}function i0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&f0(o,a)){let l=np(o,a);o=bs(o,o.next),l=bs(l,l.next),oo(o,e,t,n,s,r,0),oo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function s0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Qd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(u0(c))}s.sort(r0);for(let r=0;r<s.length;r++)t=o0(s[r],t);return t}function r0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function o0(i,e){let t=a0(i,e);if(!t)return e;let n=np(t,i);return bs(n,n.next),bs(t,t.next)}function a0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(lr(i,t))return t;do{if(lr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ep(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ao(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&l0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function l0(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function c0(i,e,t,n){let s=i;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,h0(s)}function h0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Rh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function u0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ep(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Or(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&ep(i,e,t,n,s,r,o,a)}function f0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!d0(i,e)&&(ao(i,e)&&ao(e,i)&&p0(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||lr(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lr(i,e){return i.x===e.x&&i.y===e.y}function tp(i,e,t,n){let s=Pa(Pt(i,e,t)),r=Pa(Pt(i,e,n)),o=Pa(Pt(t,n,i)),a=Pa(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ca(i,t,e)||r===0&&Ca(i,n,e)||o===0&&Ca(t,i,n)||a===0&&Ca(t,e,n))}function Ca(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pa(i){return i>0?1:i<0?-1:0}function d0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&tp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ao(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function p0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function np(i,e){let t=Ch(i.i,i.x,i.y),n=Ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gd(i,e,t,n){let s=Ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function m0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ph=class{static triangulate(e,t,n=2){return Qg(e,t,n)}},In=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];xd(e),_d(n,e);let o=e.length;t.forEach(xd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,_d(n,t[l]);let a=Ph.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _d(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vt=class i extends Ge{constructor(e=new _t([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:g0,y,_=!1,S,w,T,R;if(g){y=g.getSpacedPoints(h),_=!0,f=!1;let Q=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,Q),w=new L,T=new L,R=new L}f||(m=0,d=0,p=0,x=0);let M=a.extractPoints(c),b=M.shape,A=M.holes;if(!In.isClockWise(b)){b=b.reverse();for(let Q=0,ee=A.length;Q<ee;Q++){let te=A[Q];In.isClockWise(te)&&(A[Q]=te.reverse())}}function I(Q){let te=10000000000000001e-36,pe=Q[0];for(let D=1;D<=Q.length;D++){let de=D%Q.length,he=Q[de],ae=he.x-pe.x,se=he.y-pe.y,P=ae*ae+se*se,E=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(pe.x),Math.abs(pe.y)),k=te*E*E;if(P<=k){Q.splice(de,1),D--;continue}pe=he}}I(b),A.forEach(I);let F=A.length,B=b;for(let Q=0;Q<F;Q++){let ee=A[Q];b=b.concat(ee)}function O(Q,ee,te){return ee||Ye("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ee,te)}let U=b.length;function V(Q,ee,te){let pe,D,de,he=Q.x-ee.x,ae=Q.y-ee.y,se=te.x-Q.x,P=te.y-Q.y,E=he*he+ae*ae,k=he*P-ae*se;if(Math.abs(k)>Number.EPSILON){let W=Math.sqrt(E),$=Math.sqrt(se*se+P*P),j=ee.x-ae/W,Pe=ee.y+he/W,_e=te.x-P/$,De=te.y+se/$,We=((_e-j)*P-(De-Pe)*se)/(he*P-ae*se);pe=j+he*We-Q.x,D=Pe+ae*We-Q.y;let fe=pe*pe+D*D;if(fe<=2)return new G(pe,D);de=Math.sqrt(fe/2)}else{let W=!1;he>Number.EPSILON?se>Number.EPSILON&&(W=!0):he<-Number.EPSILON?se<-Number.EPSILON&&(W=!0):Math.sign(ae)===Math.sign(P)&&(W=!0),W?(pe=-ae,D=he,de=Math.sqrt(E)):(pe=he,D=ae,de=Math.sqrt(E/2))}return new G(pe/de,D/de)}let Y=[];for(let Q=0,ee=B.length,te=ee-1,pe=Q+1;Q<ee;Q++,te++,pe++)te===ee&&(te=0),pe===ee&&(pe=0),Y[Q]=V(B[Q],B[te],B[pe]);let ne=[],re,ie=Y.concat();for(let Q=0,ee=F;Q<ee;Q++){let te=A[Q];re=[];for(let pe=0,D=te.length,de=D-1,he=pe+1;pe<D;pe++,de++,he++)de===D&&(de=0),he===D&&(he=0),re[pe]=V(te[pe],te[de],te[he]);ne.push(re),ie=ie.concat(re)}let ue;if(m===0)ue=In.triangulateShape(B,A);else{let Q=[],ee=[];for(let te=0;te<m;te++){let pe=te/m,D=d*Math.cos(pe*Math.PI/2),de=p*Math.sin(pe*Math.PI/2)+x;for(let he=0,ae=B.length;he<ae;he++){let se=O(B[he],Y[he],de);me(se.x,se.y,-D),pe===0&&Q.push(se)}for(let he=0,ae=F;he<ae;he++){let se=A[he];re=ne[he];let P=[];for(let E=0,k=se.length;E<k;E++){let W=O(se[E],re[E],de);me(W.x,W.y,-D),pe===0&&P.push(W)}pe===0&&ee.push(P)}}ue=In.triangulateShape(Q,ee)}let Le=ue.length,Me=p+x;for(let Q=0;Q<U;Q++){let ee=f?O(b[Q],ie[Q],Me):b[Q];_?(T.copy(S.normals[0]).multiplyScalar(ee.x),w.copy(S.binormals[0]).multiplyScalar(ee.y),R.copy(y[0]).add(T).add(w),me(R.x,R.y,R.z)):me(ee.x,ee.y,0)}for(let Q=1;Q<=h;Q++)for(let ee=0;ee<U;ee++){let te=f?O(b[ee],ie[ee],Me):b[ee];_?(T.copy(S.normals[Q]).multiplyScalar(te.x),w.copy(S.binormals[Q]).multiplyScalar(te.y),R.copy(y[Q]).add(T).add(w),me(R.x,R.y,R.z)):me(te.x,te.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let ee=Q/m,te=d*Math.cos(ee*Math.PI/2),pe=p*Math.sin(ee*Math.PI/2)+x;for(let D=0,de=B.length;D<de;D++){let he=O(B[D],Y[D],pe);me(he.x,he.y,u+te)}for(let D=0,de=A.length;D<de;D++){let he=A[D];re=ne[D];for(let ae=0,se=he.length;ae<se;ae++){let P=O(he[ae],re[ae],pe);_?me(P.x,P.y+y[h-1].y,y[h-1].x+te):me(P.x,P.y,u+te)}}}Z(),q();function Z(){let Q=s.length/3;if(f){let ee=0,te=U*ee;for(let pe=0;pe<Le;pe++){let D=ue[pe];ce(D[2]+te,D[1]+te,D[0]+te)}ee=h+m*2,te=U*ee;for(let pe=0;pe<Le;pe++){let D=ue[pe];ce(D[0]+te,D[1]+te,D[2]+te)}}else{for(let ee=0;ee<Le;ee++){let te=ue[ee];ce(te[2],te[1],te[0])}for(let ee=0;ee<Le;ee++){let te=ue[ee];ce(te[0]+U*h,te[1]+U*h,te[2]+U*h)}}n.addGroup(Q,s.length/3-Q,0)}function q(){let Q=s.length/3,ee=0;le(B,ee),ee+=B.length;for(let te=0,pe=A.length;te<pe;te++){let D=A[te];le(D,ee),ee+=D.length}n.addGroup(Q,s.length/3-Q,1)}function le(Q,ee){let te=Q.length;for(;--te>=0;){let pe=te,D=te-1;D<0&&(D=Q.length-1);for(let de=0,he=h+m*2;de<he;de++){let ae=U*de,se=U*(de+1),P=ee+pe+ae,E=ee+D+ae,k=ee+D+se,W=ee+pe+se;Oe(P,E,k,W)}}}function me(Q,ee,te){l.push(Q),l.push(ee),l.push(te)}function ce(Q,ee,te){Te(Q),Te(ee),Te(te);let pe=s.length/3,D=v.generateTopUV(n,s,pe-3,pe-2,pe-1);ve(D[0]),ve(D[1]),ve(D[2])}function Oe(Q,ee,te,pe){Te(Q),Te(ee),Te(pe),Te(ee),Te(te),Te(pe);let D=s.length/3,de=v.generateSideWallUV(n,s,D-6,D-3,D-2,D-1);ve(de[0]),ve(de[1]),ve(de[3]),ve(de[1]),ve(de[2]),ve(de[3])}function Te(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function ve(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return x0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ah[s.type]().fromJSON(s)),new i(n,e.options)}},g0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new G(r,o),new G(a,l),new G(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new G(o,1-l),new G(c,1-u),new G(f,1-p),new G(x,1-g)]:[new G(a,1-l),new G(h,1-u),new G(d,1-p),new G(m,1-g)]}};function x0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zn=class i extends Ge{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let y=v+c*g,_=v+c*(g+1),S=v+1+c*(g+1),w=v+1+c*g;d.push(y,_,w),d.push(_,S,w)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var co=class i extends Ge{constructor(e=new _t([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;In.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];In.isClockWise(v)===!0&&(p[m]=v.reverse())}let x=In.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],y=v[0]+u,_=v[1]+u,S=v[2]+u;n.push(y,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function _0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ho=class extends Bt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},cr=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ss=class extends Bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends Ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ui=class extends Bt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var uo=class extends Bt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},fo=class extends Bt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ia(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function yd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ip(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,a=2*t-n;break;case wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,l=2*n-t;break;case wh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*x+.5*p,_=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+v*o[c+S]+y*o[l+S]+_*o[u+S];return r}},Ja=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Qa=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=gs;var Di=class extends gn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ms;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};po.prototype.ValueTypeName="color";var Nn=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Nn.prototype.ValueTypeName="number";var el=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Tn=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}};Tn.prototype.ValueTypeName="quaternion";Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends gn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ms;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Fn.prototype.ValueTypeName="vector";var ws=class{constructor(e="",t=-1,n=[],s=Hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(M0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=y0(l);l=yd(l,1,h),c=yd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Nn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(He("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,x){if(d.length!==0){let m=[],g=[];ip(d,m,g,p),m.length!==0&&x.push(new u(f,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let m=[],g=[];for(let v=0;v!==f[p].morphTargets.length;++v){let y=f[p];m.push(y.time),g.push(y.morphTarget===x?1:0)}s.push(new Nn(".morphTargetInfluence["+x+"]",m,g))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Fn,d+".position",f,"pos",s),n(Tn,d+".quaternion",f,"rot",s),n(Fn,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function v0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nn;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return po;case"quaternion":return Tn;case"bool":case"boolean":return Di;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function M0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=v0(i.type);if(i.times===void 0){let t=[],n=[];ip(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},tl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sp=new tl,$t=class{constructor(e){this.manager=e!==void 0?e:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$t.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},Un=class extends $t{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ti[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:y,value:_})=>{if(y)g.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let w=0,T=h.length;w<T;w++){let R=h[w];R.onProgress&&R.onProgress(S)}g.enqueue(_),v()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ai.add(`file:${e}`,c);let h=Ti[e];delete Ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ks=new WeakMap,nl=class extends $t{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ks.get(o);u===void 0&&(u=[],Ks.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Js("img");function l(){h(),t&&t(this);let u=Ks.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Ks.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ai.remove(`image:${e}`);let f=Ks.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Ks.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ni=class extends $t{constructor(e){super(e)}load(e,t,n,s){let r=new Ot,o=new nl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},fi=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mo=class extends fi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new Ie,vd=new L,Md=new L,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends go{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fi=class extends fi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lh=class extends go{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Zi=class extends fi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},di=class extends jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nh=class extends go{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xn=class extends fi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xo=class extends fi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Kn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var vh=new WeakMap,_o=class extends $t{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(vh.has(o)===!0)s&&s(vh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vh.set(l,c),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var il=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Qh="\\[\\]\\.:\\/",b0=new RegExp("["+Qh+"]","g"),eu="[^"+Qh+"]",S0="[^"+Qh.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",eu),T0=/(WCOD+)?/.source.replace("WCOD",S0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),R0=new RegExp("^"+w0+T0+E0+A0+"$"),C0=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(e){let t=R0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);C0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Fh;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SS=new Float32Array(1);var hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vo=class extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function tu(i,e,t,n){let s=P0(n);switch(t){case Xh:return i*e;case gr:return i*e/s.components*s.byteLength;case vl:return i*e/s.components*s.byteLength;case Rs:return i*e*2/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case qh:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:case El:return Math.max(i,16)*Math.max(e,8)/4;case Sl:case Tl:return Math.max(i,8)*Math.max(e,8)/2;case Al:case Rl:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Dl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jl:case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $l:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(i){switch(i){case yn:case Hh:return{byteLength:1,components:1};case mr:case Vh:case fn:return{byteLength:2,components:1};case _l:case yl:return{byteLength:2,components:4};case Qn:case xl:case un:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Ap(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,q0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ix=`vec3 transformedNormal = objectNormal;
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
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Px=`uniform sampler2D dfgLUT;
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
}`,Ix=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g_=`float getShadowMask() {
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
}`,x_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,M_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D_=`uniform sampler2D t2D;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`#include <common>
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
}`,B_=`#if DEPTH_PACKING == 3200
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
}`,k_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#define LAMBERT
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
}`,j_=`#define LAMBERT
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
}`,Z_=`#define MATCAP
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
}`,K_=`#define MATCAP
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
}`,$_=`#define NORMAL
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
}`,J_=`#define NORMAL
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
}`,Q_=`#define PHONG
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
}`,ey=`#define PHONG
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
}`,ty=`#define STANDARD
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
}`,ny=`#define STANDARD
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
}`,iy=`#define TOON
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
}`,sy=`#define TOON
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
}`,ry=`uniform float size;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,ly=`uniform vec3 color;
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
}`,cy=`uniform float rotation;
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
}`,hy=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:D0,alphahash_pars_fragment:L0,alphamap_fragment:N0,alphamap_pars_fragment:F0,alphatest_fragment:U0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:z0,batching_vertex:H0,begin_vertex:V0,beginnormal_vertex:G0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:K0,color_fragment:$0,color_pars_fragment:J0,color_pars_vertex:Q0,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:hx,envmap_common_pars_fragment:ux,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:wx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:xx,fog_pars_fragment:_x,gradientmap_pars_fragment:yx,lightmap_pars_fragment:vx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:bx,lights_pars_begin:Sx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:Ix,lights_fragment_maps:Dx,lights_fragment_end:Lx,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:jx,normal_fragment_begin:Zx,normal_fragment_maps:Kx,normal_pars_fragment:$x,normal_pars_vertex:Jx,normal_vertex:Qx,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:s_,opaque_fragment:r_,packing:o_,premultiplied_alpha_fragment:a_,project_vertex:l_,dithering_fragment:c_,dithering_pars_fragment:h_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:g_,skinbase_vertex:x_,skinning_pars_vertex:__,skinning_vertex:y_,skinnormal_vertex:v_,specularmap_fragment:M_,specularmap_pars_fragment:b_,tonemapping_fragment:S_,tonemapping_pars_fragment:w_,transmission_fragment:T_,transmission_pars_fragment:E_,uv_pars_fragment:A_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:P_,background_vert:I_,background_frag:D_,backgroundCube_vert:L_,backgroundCube_frag:N_,cube_vert:F_,cube_frag:U_,depth_vert:O_,depth_frag:B_,distance_vert:k_,distance_frag:z_,equirect_vert:H_,equirect_frag:V_,linedashed_vert:G_,linedashed_frag:W_,meshbasic_vert:X_,meshbasic_frag:q_,meshlambert_vert:Y_,meshlambert_frag:j_,meshmatcap_vert:Z_,meshmatcap_frag:K_,meshnormal_vert:$_,meshnormal_frag:J_,meshphong_vert:Q_,meshphong_frag:ey,meshphysical_vert:ty,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:sy,points_vert:ry,points_frag:oy,shadow_vert:ay,shadow_frag:ly,sprite_vert:cy,sprite_frag:hy},Re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},gi={basic:{uniforms:sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:sn([Re.common,Re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:sn([Re.lights,Re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};gi.physical={uniforms:sn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var ic={r:0,b:0,g:0},Ps=new It,uy=new Ie;function fy(i,e,t,n,s,r,o){let a=new Ae(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,S=p(y);S===null?g(a,l):S&&S.isColor&&(g(S,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let S=p(_);S&&(S.isCubeTexture||S.mapping===Po)?(h===void 0&&(h=new tt(new dt(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Cs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(_.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(Ps)),h.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ut,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new tt(new Zn(2,2),new kt({name:"BackgroundMaterial",uniforms:Cs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,_){y.getRGB(ic,$h(i)),n.buffers.color.setClear(ic.r,ic.g,ic.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:x,addToRenderList:m,dispose:v}}function dy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,A,N,I,F){let B=!1,O=u(I,N,A);r!==O&&(r=O,c(r.object)),B=d(b,I,N,F),B&&p(b,I,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(b,A,N,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,A,N){let I=N.wireframe===!0,F=n[b.id];F===void 0&&(F={},n[b.id]=F);let B=F[A.id];B===void 0&&(B={},F[A.id]=B);let O=B[I];return O===void 0&&(O=f(l()),B[I]=O),O}function f(b){let A=[],N=[],I=[];for(let F=0;F<t;F++)A[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,A,N,I){let F=r.attributes,B=A.attributes,O=0,U=N.getAttributes();for(let V in U)if(U[V].location>=0){let ne=F[V],re=B[V];if(re===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(b,A,N,I){let F={},B=A.attributes,O=0,U=N.getAttributes();for(let V in U)if(U[V].location>=0){let ne=B[V];ne===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),F[V]=re,O++}r.attributes=F,r.attributesNum=O,r.index=I}function x(){let b=r.newAttributes;for(let A=0,N=b.length;A<N;A++)b[A]=0}function m(b){g(b,0)}function g(b,A){let N=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;N[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),F[b]!==A&&(i.vertexAttribDivisor(b,A),F[b]=A)}function v(){let b=r.newAttributes,A=r.enabledAttributes;for(let N=0,I=A.length;N<I;N++)A[N]!==b[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function y(b,A,N,I,F,B,O){O===!0?i.vertexAttribIPointer(b,A,N,F,B):i.vertexAttribPointer(b,A,N,I,F,B)}function _(b,A,N,I){x();let F=I.attributes,B=N.getAttributes(),O=A.defaultAttributeValues;for(let U in B){let V=B[U];if(V.location>=0){let Y=F[U];if(Y===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){let ne=Y.normalized,re=Y.itemSize,ie=e.get(Y);if(ie===void 0)continue;let ue=ie.buffer,Le=ie.type,Me=ie.bytesPerElement,Z=Le===i.INT||Le===i.UNSIGNED_INT||Y.gpuType===xl;if(Y.isInterleavedBufferAttribute){let q=Y.data,le=q.stride,me=Y.offset;if(q.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)g(V.location+ce,q.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ce=0;ce<V.locationSize;ce++)y(V.location+ce,re/V.locationSize,Le,ne,le*Me,(me+re/V.locationSize*ce)*Me,Z)}else{if(Y.isInstancedBufferAttribute){for(let q=0;q<V.locationSize;q++)g(V.location+q,Y.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let q=0;q<V.locationSize;q++)m(V.location+q);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let q=0;q<V.locationSize;q++)y(V.location+q,re/V.locationSize,Le,ne,re*Me,re/V.locationSize*q*Me,Z)}}else if(O!==void 0){let ne=O[U];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(V.location,ne);break;case 3:i.vertexAttrib3fv(V.location,ne);break;case 4:i.vertexAttrib4fv(V.location,ne);break;default:i.vertexAttrib1fv(V.location,ne)}}}}v()}function S(){R();for(let b in n){let A=n[b];for(let N in A){let I=A[N];for(let F in I)h(I[F].object),delete I[F];delete A[N]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let A=n[b.id];for(let N in A){let I=A[N];for(let F in I)h(I[F].object),delete I[F];delete A[N]}delete n[b.id]}function T(b){for(let A in n){let N=n[A];if(N[b.id]===void 0)continue;let I=N[b.id];for(let F in I)h(I[F].object),delete I[F];delete N[b.id]}}function R(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function py(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function my(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==un&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:S,samples:w}}function gy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,_=g.clippingState||null;l.value=_,_=h(p,f,y,d);for(let S=0;S!==y;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xy(i){let e=new WeakMap;function t(o,a){return a===dr?o.mapping=Ji:a===ml&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dr||a===ml)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kr(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var es=4,rp=[.125,.215,.35,.446,.526,.582],Ds=20,_y=256,Uo=new di,op=new Ae,nu=null,iu=0,su=0,ru=!1,yy=new L,Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=yy}=r;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:fn,format:En,colorSpace:Qt,depthBuffer:!1},s=ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vy(r)),this._blurMaterial=by(r,e,t),this._ggxMaterial=My(r,e,t)}return s}_compileMaterial(e){let t=new tt(new Ge,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(op),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new dt,new cn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(op),g=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;yr(s,_*S,y>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-es?n-p+es:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,yr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Uo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,yr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Uo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):Ds;m>Ds&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let g=[],v=0;for(let T=0;T<Ds;++T){let R=T/x,M=Math.exp(-R*R/2);g.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;let _=this._sizeLods[s],S=3*_*(s>y-es?s-y+es:0),w=4*(this._cubeSize-_);yr(t,S,w,3*_,2*_),l.setRenderTarget(t),l.render(u,Uo)}};function vy(i){let e=[],t=[],n=[],s=i,r=i-es+1+rp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-es?l=rp[o-i+es-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,m=2,g=1,v=new Float32Array(x*p*d),y=new Float32Array(m*p*d),_=new Float32Array(g*p*d);for(let w=0;w<d;w++){let T=w%3*2/3-1,R=w>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(M,x*p*w),y.set(f,m*p*w);let b=[w,w,w,w,w,w];_.set(b,g*p*w)}let S=new Ge;S.setAttribute("position",new Fe(v,x)),S.setAttribute("uv",new Fe(y,m)),S.setAttribute("faceIndex",new Fe(_,g)),n.push(new tt(S,null)),s>es&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ap(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function My(i,e,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function by(i,e,t){let n=new Float32Array(Ds),s=new L(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function lp(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function cp(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Sy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dr||l===ml,h=l===Ji||l===Es;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mr(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Mr(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function Ty(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let S=v[y+0],w=v[y+1],T=v[y+2];f.push(S,w,w,T,T,S)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let S=y+0,w=y+1,T=y+2;f.push(S,w,w,T,T,S)}}else return;let m=new(Zh(f)?Yr:_s)(f,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ey(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*x[v];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ay(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ry(i,e,t){let n=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*S*4*u),T=new Xr(w,_,S,u);T.type=un,T.needsUpdate=!0;let R=y*4;for(let b=0;b<u;b++){let A=m[b],N=g[b],I=v[b],F=_*S*4*b;for(let B=0;B<A.count;B++){let O=B*R;d===!0&&(s.fromBufferAttribute(A,B),w[F+O+0]=s.x,w[F+O+1]=s.y,w[F+O+2]=s.z,w[F+O+3]=0),p===!0&&(s.fromBufferAttribute(N,B),w[F+O+4]=s.x,w[F+O+5]=s.y,w[F+O+6]=s.z,w[F+O+7]=0),x===!0&&(s.fromBufferAttribute(I,B),w[F+O+8]=s.x,w[F+O+9]=s.y,w[F+O+10]=s.z,w[F+O+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new G(_,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Py={[wo]:"LINEAR_TONE_MAPPING",[To]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[Ts]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[Ao]:"CUSTOM_TONE_MAPPING"};function Iy(i,e,t,n,s){let r=new Zt(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Zt(e,t,{type:fn,depthBuffer:!1,stencilBuffer:!1}),a=new Ge;a.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new je([0,2,0,0,2,0],2));let l=new cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new tt(a,l),h=new di(-1,1,1,-1,0,1),u=null,f=null,d=!1,p,x=null,m=[],g=!1;this.setSize=function(v,y){r.setSize(v,y),o.setSize(v,y);for(let _=0;_<m.length;_++){let S=m[_];S.setSize&&S.setSize(v,y)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;let y=r.width,_=r.height;for(let S=0;S<m.length;S++){let w=m[S];w.setSize&&w.setSize(y,_)}},this.begin=function(v,y){if(d||v.toneMapping===$n&&m.length===0)return!1;if(x=y,y!==null){let _=y.width,S=y.height;(r.width!==_||r.height!==S)&&this.setSize(_,S)}return g===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=$n,!0},this.hasRenderPass=function(){return g},this.end=function(v,y){v.toneMapping=p,d=!0;let _=r,S=o;for(let w=0;w<m.length;w++){let T=m[w];if(T.enabled!==!1&&(T.render(v,S,_,y),T.needsSwap!==!1)){let R=_;_=S,S=R}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,l.defines={},Ke.getTransfer(u)===ut&&(l.defines.SRGB_TRANSFER="");let w=Py[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(x),v.render(c,h),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Rp=new Ot,lu=new hi(1,1),Cp=new Xr,Pp=new Ba,Ip=new Zr,hp=[],up=[],fp=new Float32Array(16),dp=new Float32Array(9),pp=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hp[s];if(r===void 0&&(r=new Float32Array(s),hp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oc(i,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),qt(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),qt(t,n)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;fp.set(n),i.uniformMatrix4fv(this.addr,!1,fp),qt(t,n)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=t.isReversedDepthBuffer()?nc:tc,r=lu):r=Rp,t.setTexture2D(e||r,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pp,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ip,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cp,s)}function $y(i){switch(i){case 5126:return Dy;case 35664:return Ly;case 35665:return Ny;case 35666:return Fy;case 35674:return Uy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Jy(i,e){i.uniform1fv(this.addr,e)}function Qy(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function ev(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function tv(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function nv(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iv(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sv(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rv(i,e){i.uniform1iv(this.addr,e)}function ov(i,e){i.uniform2iv(this.addr,e)}function av(i,e){i.uniform3iv(this.addr,e)}function lv(i,e){i.uniform4iv(this.addr,e)}function cv(i,e){i.uniform1uiv(this.addr,e)}function hv(i,e){i.uniform2uiv(this.addr,e)}function uv(i,e){i.uniform3uiv(this.addr,e)}function fv(i,e){i.uniform4uiv(this.addr,e)}function dv(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lu:o=Rp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function pv(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pp,r[o])}function mv(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ip,r[o])}function gv(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function xv(i){switch(i){case 5126:return Jy;case 35664:return Qy;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$y(t.type)}},hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function mp(i,e){i.seq.push(e),i.map[e.id]=e}function _v(i,e,t){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),o=ou.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mp(t,c===void 0?new cu(a,i,e):new hu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new uu(a),mp(t,u)),t=u}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);_v(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yv=37297,vv=0;function Mv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xp=new et;function bv(i){Ke._getMatrix(xp,Ke.workingColorSpace,i);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Mv(i.getShaderSource(e),a)}else return r}function Sv(i,e){let t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var wv={[wo]:"Linear",[To]:"Reinhard",[Eo]:"Cineon",[Ts]:"ACESFilmic",[Ro]:"AgX",[Co]:"Neutral",[Ao]:"Custom"};function Tv(i,e){let t=wv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new L;function Ev(){Ke.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Rv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bo(i){return i!==""}function yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(i){return i.replace(Pv,Dv)}var Iv=new Map;function Dv(i,e){let t=it[e];if(t===void 0){let n=Iv.get(e);if(n!==void 0)t=it[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(Lv,Nv)}function Nv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Fv={[Mo]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function Uv(i){return Fv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ov={[Ji]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function Bv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ov[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var kv={[Es]:"ENVMAP_MODE_REFRACTION"};function zv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hv={[So]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};function Vv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hv[i.combine]||"ENVMAP_BLENDING_NONE"}function Gv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Uv(t),c=Bv(t),h=zv(t),u=Vv(t),f=Gv(t),d=Av(t),p=Rv(r),x=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?it.tonemapping_pars_fragment:"",t.toneMapping!==$n?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),Ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=fu(o),o=yp(o,t),o=vp(o,t),a=fu(a),a=yp(a,t),a=vp(a,t),o=Mp(o),a=Mp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+m+o,_=v+g+a,S=gp(s,s.VERTEX_SHADER,y),w=gp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(A){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(w)||"",B=N.trim(),O=I.trim(),U=F.trim(),V=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let ne=_p(s,S,"vertex"),re=_p(s,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ne+`
`+re)}else B!==""?He("WebGLProgram: Program Info Log:",B):(O===""||U==="")&&(Y=!1);Y&&(A.diagnostics={runnable:V,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:g}})}s.deleteShader(S),s.deleteShader(w),R=new vr(s,x),M=Cv(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,yv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var Xv=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}};function qv(i,e,t,n,s,r,o){let a=new qr,l=new du,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,A,N,I){let F=N.fog,B=I.geometry,O=M.isMeshStandardMaterial?N.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),V=U&&U.mapping===Po?U.image.height:null,Y=p[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&He("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=ne!==void 0?ne.length:0,ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let ue,Le,Me,Z;if(Y){let pt=gi[Y];ue=pt.vertexShader,Le=pt.fragmentShader}else ue=M.vertexShader,Le=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);let q=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),me=I.isInstancedMesh===!0,ce=I.isBatchedMesh===!0,Oe=!!M.map,Te=!!M.matcap,ve=!!U,Q=!!M.aoMap,ee=!!M.lightMap,te=!!M.bumpMap,pe=!!M.normalMap,D=!!M.displacementMap,de=!!M.emissiveMap,he=!!M.metalnessMap,ae=!!M.roughnessMap,se=M.anisotropy>0,P=M.clearcoat>0,E=M.dispersion>0,k=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,j=se&&!!M.anisotropyMap,Pe=P&&!!M.clearcoatMap,_e=P&&!!M.clearcoatNormalMap,De=P&&!!M.clearcoatRoughnessMap,We=k&&!!M.iridescenceMap,fe=k&&!!M.iridescenceThicknessMap,be=W&&!!M.sheenColorMap,Be=W&&!!M.sheenRoughnessMap,ze=!!M.specularMap,ye=!!M.specularColorMap,$e=!!M.specularIntensityMap,z=$&&!!M.transmissionMap,we=$&&!!M.thicknessMap,xe=!!M.gradientMap,Ne=!!M.alphaMap,ge=M.alphaTest>0,oe=!!M.alphaHash,Se=!!M.extensions,Qe=$n;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let Tt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:ue,fragmentShader:Le,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ce,batchingColor:ce&&I._colorsTexture!==null,instancing:me,instancingColor:me&&I.instanceColor!==null,instancingMorph:me&&I.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qt,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:Te,envMap:ve,envMapMode:ve&&U.mapping,envMapCubeUVHeight:V,aoMap:Q,lightMap:ee,bumpMap:te,normalMap:pe,displacementMap:D,emissiveMap:de,normalMapObjectSpace:pe&&M.normalMapType===Gd,normalMapTangentSpace:pe&&M.normalMapType===_r,metalnessMap:he,roughnessMap:ae,anisotropy:se,anisotropyMap:j,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:De,dispersion:E,iridescence:k,iridescenceMap:We,iridescenceThicknessMap:fe,sheen:W,sheenColorMap:be,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:ye,specularIntensityMap:$e,transmission:$,transmissionMap:z,thicknessMap:we,gradientMap:xe,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ge,alphaHash:oe,combine:M.combine,mapUv:Oe&&x(M.map.channel),aoMapUv:Q&&x(M.aoMap.channel),lightMapUv:ee&&x(M.lightMap.channel),bumpMapUv:te&&x(M.bumpMap.channel),normalMapUv:pe&&x(M.normalMap.channel),displacementMapUv:D&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:he&&x(M.metalnessMap.channel),roughnessMapUv:ae&&x(M.roughnessMap.channel),anisotropyMapUv:j&&x(M.anisotropyMap.channel),clearcoatMapUv:Pe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(M.sheenRoughnessMap.channel),specularMapUv:ze&&x(M.specularMap.channel),specularColorMapUv:ye&&x(M.specularColorMap.channel),specularIntensityMapUv:$e&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:we&&x(M.thicknessMap.channel),alphaMapUv:Ne&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Oe||Ne),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function g(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)b.push(A),b.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(v(b,M),y(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let b=p[M.type],A;if(b){let N=gi[b];A=ti.clone(N.uniforms)}else A=M.uniforms;return A}function S(M,b){let A=u.get(b);return A!==void 0?++A.usedTimes:(A=new Wv(i,b,M,r),h.push(A),u.set(b,A)),A}function w(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function Yv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,p,x,m){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:m},i[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=x,g.group=m),e++,g}function a(u,f,d,p,x,m){let g=o(u,f,d,p,x,m);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):t.push(g)}function l(u,f,d,p,x,m){let g=o(u,f,d,p,x,m);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||jv),n.length>1&&n.sort(f||Sp),s.length>1&&s.sort(f||Sp)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wp,i.set(n,[o])):s>=r.length?(o=new wp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ae};break;case"SpotLight":t={position:new L,direction:new L,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function $v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jv=0;function Qv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eM(i){let e=new Kv,t=$v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ie,o=new Ie;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,y=0,_=0,S=0,w=0,T=0;c.sort(Qv);for(let M=0,b=c.length;M<b;M++){let A=c[M],N=A.color,I=A.intensity,F=A.distance,B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Rs?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=N.r*I,u+=N.g*I,f+=N.b*I;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],I);T++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let U=A.shadow,V=t.get(A);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=A.shadow.matrix,v++}n.directional[d]=O,d++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(N).multiplyScalar(I),O.distance=F,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[x]=O;let U=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,U.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[x]=U.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=B,_++}x++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(N).multiplyScalar(I),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=O,m++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let U=A.shadow,V=t.get(A);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=A.shadow.matrix,y++}n.point[p]=O,p++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(I),O.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[g]=O,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=d,R.pointLength=p,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=T,n.version=Jv++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=h.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){let y=c[g];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Tp(i){let e=new eM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Tp(i),e.set(s,[a])):r>=o.length?(a=new Tp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`,sM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],rM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ep=new Ie,Oo=new L,au=new L;function oM(i,e,t){let n=new or,s=new G,r=new G,o=new lt,a=new Za,l=new Ka,c={},h=t.maxTextureSize,u={[qn]:en,[en]:qn,[_n]:_n},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ge;p.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let g=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===ur&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Mo);let M=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let I=g!==this.type;I&&T.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(B=>B.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,B=w.length;F<B;F++){let O=w[F],U=O.shadow;if(U===void 0){He("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let V=U.getFrameExtents();if(s.multiply(V),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===fr){if(O.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Zt(s.x,s.y,{format:Rs,type:fn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new hi(s.x,s.y,un),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=li,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ct,U.map.depthTexture.magFilter=Ct}else{O.isPointLight?(U.map=new Kr(s.x),U.map.depthTexture=new Va(s.x,Qn)):(U.map=new Zt(s.x,s.y),U.map.depthTexture=new hi(s.x,s.y,Qn)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=li;let ne=i.state.buffers.depth.getReversed();this.type===Mo?(U.map.depthTexture.compareFunction=ne?nc:tc,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ct,U.map.depthTexture.magFilter=Ct)}U.camera.updateProjectionMatrix()}let Y=U.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Y;ne++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(U.map),i.clear());let re=U.getViewport(ne);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),N.viewport(o)}if(O.isPointLight){let re=U.camera,ie=U.matrix,ue=O.distance||re.far;ue!==re.far&&(re.far=ue,re.updateProjectionMatrix()),Oo.setFromMatrixPosition(O.matrixWorld),re.position.copy(Oo),au.copy(re.position),au.add(sM[ne]),re.up.copy(rM[ne]),re.lookAt(au),re.updateMatrixWorld(),ie.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Ep.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Ep,re.coordinateSystem,re.reversedDepth)}else U.updateMatrices(O);n=U.getFrustum(),_(T,R,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===fr&&v(U,R),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,A)};function v(w,T){let R=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zt(s.x,s.y,{format:Rs,type:fn})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,R,d,x,null)}function y(w,T,R,M){let b=null,A=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)b=A;else if(b=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=b.uuid,I=T.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let B=F[I];B===void 0&&(B=b.clone(),F[I]=B,T.addEventListener("dispose",S)),b=B}if(b.visible=T.visible,b.wireframe=T.wireframe,M===fr?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=i.properties.get(b);N.light=R}return b}function _(w,T,R,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===fr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let I=e.update(w),F=w.material;if(Array.isArray(F)){let B=I.groups;for(let O=0,U=B.length;O<U;O++){let V=B[O],Y=F[V.materialIndex];if(Y&&Y.visible){let ne=y(w,Y,M,b);w.onBeforeShadow(i,w,T,R,I,ne,V),i.renderBufferDirect(R,null,I,ne,w,V),w.onAfterShadow(i,w,T,R,I,ne,V)}}}else if(F.visible){let B=y(w,F,M,b);w.onBeforeShadow(i,w,T,R,I,B,null),i.renderBufferDirect(R,null,I,B,w,null),w.onAfterShadow(i,w,T,R,I,B,null)}}let N=w.children;for(let I=0,F=N.length;I<F;I++)_(N[I],T,R,M,b)}function S(w){w.target.removeEventListener("dispose",S);for(let R in c){let M=c[R],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var aM={[ll]:cl,[hl]:dl,[ul]:pl,[ps]:fl,[cl]:ll,[dl]:hl,[pl]:ul,[fl]:ps};function lM(i,e){function t(){let z=!1,we=new lt,xe=null,Ne=new lt(0,0,0,0);return{setMask:function(ge){xe!==ge&&!z&&(i.colorMask(ge,ge,ge,ge),xe=ge)},setLocked:function(ge){z=ge},setClear:function(ge,oe,Se,Qe,Tt){Tt===!0&&(ge*=Qe,oe*=Qe,Se*=Qe),we.set(ge,oe,Se,Qe),Ne.equals(we)===!1&&(i.clearColor(ge,oe,Se,Qe),Ne.copy(we))},reset:function(){z=!1,xe=null,Ne.set(-1,0,0,0)}}}function n(){let z=!1,we=!1,xe=null,Ne=null,ge=null;return{setReversed:function(oe){if(we!==oe){let Se=e.get("EXT_clip_control");oe?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),we=oe;let Qe=ge;ge=null,this.setClear(Qe)}},getReversed:function(){return we},setTest:function(oe){oe?q(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(oe){xe!==oe&&!z&&(i.depthMask(oe),xe=oe)},setFunc:function(oe){if(we&&(oe=aM[oe]),Ne!==oe){switch(oe){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=oe}},setLocked:function(oe){z=oe},setClear:function(oe){ge!==oe&&(we&&(oe=1-oe),i.clearDepth(oe),ge=oe)},reset:function(){z=!1,xe=null,Ne=null,ge=null,we=!1}}}function s(){let z=!1,we=null,xe=null,Ne=null,ge=null,oe=null,Se=null,Qe=null,Tt=null;return{setTest:function(pt){z||(pt?q(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(pt){we!==pt&&!z&&(i.stencilMask(pt),we=pt)},setFunc:function(pt,oi,yi){(xe!==pt||Ne!==oi||ge!==yi)&&(i.stencilFunc(pt,oi,yi),xe=pt,Ne=oi,ge=yi)},setOp:function(pt,oi,yi){(oe!==pt||Se!==oi||Qe!==yi)&&(i.stencilOp(pt,oi,yi),oe=pt,Se=oi,Qe=yi)},setLocked:function(pt){z=pt},setClear:function(pt){Tt!==pt&&(i.clearStencil(pt),Tt=pt)},reset:function(){z=!1,we=null,xe=null,Ne=null,ge=null,oe=null,Se=null,Qe=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,m=null,g=null,v=null,y=null,_=null,S=null,w=null,T=new Ae(0,0,0),R=0,M=!1,b=null,A=null,N=null,I=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,U=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=U>=2);let Y=null,ne={},re=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),ue=new lt().fromArray(re),Le=new lt().fromArray(ie);function Me(z,we,xe,Ne){let ge=new Uint8Array(4),oe=i.createTexture();i.bindTexture(z,oe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<xe;Se++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(we+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return oe}let Z={};Z[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(ps),te(!1),pe(Uh),q(i.CULL_FACE),Q(Wt);function q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function le(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function me(z,we){return u[z]!==we?(i.bindFramebuffer(z,we),u[z]=we,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ce(z,we){let xe=d,Ne=!1;if(z){xe=f.get(we),xe===void 0&&(xe=[],f.set(we,xe));let ge=z.textures;if(xe.length!==ge.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Se=ge.length;oe<Se;oe++)xe[oe]=i.COLOR_ATTACHMENT0+oe;xe.length=ge.length,Ne=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(xe)}function Oe(z){return p!==z?(i.useProgram(z),p=z,!0):!1}let Te={[Yn]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};Te[Ed]=i.MIN,Te[Ad]=i.MAX;let ve={[bo]:i.ZERO,[Rd]:i.ONE,[Cd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[ol]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(z,we,xe,Ne,ge,oe,Se,Qe,Tt,pt){if(z===Wt){x===!0&&(le(i.BLEND),x=!1);return}if(x===!1&&(q(i.BLEND),x=!0),z!==rl){if(z!==m||pt!==M){if((g!==Yn||_!==Yn)&&(i.blendEquation(i.FUNC_ADD),g=Yn,_=Yn),pt)switch(z){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",z);break}else switch(z){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",z);break}v=null,y=null,S=null,w=null,T.set(0,0,0),R=0,m=z,M=pt}return}ge=ge||we,oe=oe||xe,Se=Se||Ne,(we!==g||ge!==_)&&(i.blendEquationSeparate(Te[we],Te[ge]),g=we,_=ge),(xe!==v||Ne!==y||oe!==S||Se!==w)&&(i.blendFuncSeparate(ve[xe],ve[Ne],ve[oe],ve[Se]),v=xe,y=Ne,S=oe,w=Se),(Qe.equals(T)===!1||Tt!==R)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Tt),T.copy(Qe),R=Tt),m=z,M=!1}function ee(z,we){z.side===_n?le(i.CULL_FACE):q(i.CULL_FACE);let xe=z.side===en;we&&(xe=!xe),te(xe),z.blending===ds&&z.transparent===!1?Q(Wt):Q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ne=z.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),de(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function pe(z){z!==bd?(q(i.CULL_FACE),z!==A&&(z===Uh?i.cullFace(i.BACK):z===Sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),A=z}function D(z){z!==N&&(O&&i.lineWidth(z),N=z)}function de(z,we,xe){z?(q(i.POLYGON_OFFSET_FILL),(I!==we||F!==xe)&&(i.polygonOffset(we,xe),I=we,F=xe)):le(i.POLYGON_OFFSET_FILL)}function he(z){z?q(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function ae(z){z===void 0&&(z=i.TEXTURE0+B-1),Y!==z&&(i.activeTexture(z),Y=z)}function se(z,we,xe){xe===void 0&&(Y===null?xe=i.TEXTURE0+B-1:xe=Y);let Ne=ne[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},ne[xe]=Ne),(Ne.type!==z||Ne.texture!==we)&&(Y!==xe&&(i.activeTexture(xe),Y=xe),i.bindTexture(z,we||Z[z]),Ne.type=z,Ne.texture=we)}function P(){let z=ne[Y];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function W(){try{i.texSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function $(){try{i.texSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function _e(){try{i.texStorage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function De(){try{i.texStorage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function We(){try{i.texImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function fe(){try{i.texImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function be(z){ue.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function Be(z){Le.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Le.copy(z))}function ze(z,we){let xe=c.get(we);xe===void 0&&(xe=new WeakMap,c.set(we,xe));let Ne=xe.get(z);Ne===void 0&&(Ne=i.getUniformBlockIndex(we,z.name),xe.set(z,Ne))}function ye(z,we){let Ne=c.get(we).get(z);l.get(we)!==Ne&&(i.uniformBlockBinding(we,Ne,z.__bindingPointIndex),l.set(we,Ne))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,ne={},u={},f=new WeakMap,d=[],p=null,x=!1,m=null,g=null,v=null,y=null,_=null,S=null,w=null,T=new Ae(0,0,0),R=0,M=!1,b=null,A=null,N=null,I=null,F=null,ue.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:le,bindFramebuffer:me,drawBuffers:ce,useProgram:Oe,setBlending:Q,setMaterial:ee,setFlipSided:te,setCullFace:pe,setLineWidth:D,setPolygonOffset:de,setScissorTest:he,activeTexture:ae,bindTexture:se,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:We,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:ye,texStorage2D:_e,texStorage3D:De,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:Pe,scissor:be,viewport:Be,reset:$e}}function cM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new G,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,E){return d?new OffscreenCanvas(P,E):Js("canvas")}function x(P,E,k){let W=1,$=se(P);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor(W*$.width),Pe=Math.floor(W*$.height);u===void 0&&(u=p(j,Pe));let _e=E?p(j,Pe):u;return _e.width=j,_e.height=Pe,_e.getContext("2d").drawImage(P,0,0,j,Pe),He("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+Pe+")."),_e}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,E,k,W,$=!1){if(P!==null){if(i[P]!==void 0)return i[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),E===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){let Pe=$?Vr:Ke.getTransfer(W);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Pe===ut?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(P,E){let k;return P?E===null||E===Qn||E===Qi?k=i.DEPTH24_STENCIL8:E===un?k=i.DEPTH32F_STENCIL8:E===mr&&(k=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qn||E===Qi?k=i.DEPTH_COMPONENT24:E===un?k=i.DEPTH_COMPONENT32F:E===mr&&(k=i.DEPTH_COMPONENT16),k}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==Ut?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){let E=P.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),b(E)}function R(P){let E=n.get(P);if(E.__webglInit===void 0)return;let k=P.source,W=f.get(k);if(W){let $=W[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(P),Object.keys(W).length===0&&f.delete(k)}n.remove(P)}function M(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let k=P.source,W=f.get(k);delete W[E.__cacheKey],o.memory.textures--}function b(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let $=0;$<E.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(E.__webglFramebuffer[W][$]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,$=k.length;W<$;W++){let j=n.get(k[W]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[W])}n.remove(P)}let A=0;function N(){A=0}function I(){let P=A;return P>=s.maxTextures&&He("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function F(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function B(P,E){let k=n.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,P,E);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function O(P,E){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Z(k,P,E);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function U(P,E){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Z(k,P,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function V(P,E){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){q(k,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let Y={[Gt]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Wi]:i.MIRRORED_REPEAT},ne={[Ct]:i.NEAREST,[gl]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},re={[Wd]:i.NEVER,[Zd]:i.ALWAYS,[Xd]:i.LESS,[tc]:i.LEQUAL,[qd]:i.EQUAL,[nc]:i.GEQUAL,[Yd]:i.GREATER,[jd]:i.NOTEQUAL};function ie(P,E){if(E.type===un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ut||E.magFilter===pr||E.magFilter===As||E.magFilter===Jn||E.minFilter===Ut||E.minFilter===pr||E.minFilter===As||E.minFilter===Jn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ct||E.minFilter!==As&&E.minFilter!==Jn||E.type===un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ue(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let W=E.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let j=F(E);if(j!==P.__cacheKey){$[j]===void 0&&($[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[j].usedTimes++;let Pe=$[P.__cacheKey];Pe!==void 0&&($[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(E)),P.__cacheKey=j,P.__webglTexture=$[j].texture}return k}function Le(P,E,k){return Math.floor(Math.floor(P/k)/E)}function Me(P,E,k,W){let j=P.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,k,W,E.data);else{j.sort((fe,be)=>fe.start-be.start);let Pe=0;for(let fe=1;fe<j.length;fe++){let be=j[Pe],Be=j[fe],ze=be.start+be.count,ye=Le(Be.start,E.width,4),$e=Le(be.start,E.width,4);Be.start<=ze+1&&ye===$e&&Le(Be.start+Be.count-1,E.width,4)===ye?be.count=Math.max(be.count,Be.start+Be.count-be.start):(++Pe,j[Pe]=Be)}j.length=Pe+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),De=i.getParameter(i.UNPACK_SKIP_PIXELS),We=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let fe=0,be=j.length;fe<be;fe++){let Be=j[fe],ze=Math.floor(Be.start/4),ye=Math.ceil(Be.count/4),$e=ze%E.width,z=Math.floor(ze/E.width),we=ye,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,$e,z,we,xe,k,W,E.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,We)}}function Z(P,E,k){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);let $=ue(P,E),j=E.source;t.bindTexture(W,P.__webglTexture,i.TEXTURE0+k);let Pe=n.get(j);if(j.version!==Pe.__version||$===!0){t.activeTexture(i.TEXTURE0+k);let _e=Ke.getPrimaries(Ke.workingColorSpace),De=E.colorSpace===ei?null:Ke.getPrimaries(E.colorSpace),We=E.colorSpace===ei||_e===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let fe=x(E.image,!1,s.maxTextureSize);fe=ae(E,fe);let be=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),ze=y(E.internalFormat,be,Be,E.colorSpace,E.isVideoTexture);ie(W,E);let ye,$e=E.mipmaps,z=E.isVideoTexture!==!0,we=Pe.__version===void 0||$===!0,xe=j.dataReady,Ne=S(E,fe);if(E.isDepthTexture)ze=_(E.format===pi,E.type),we&&(z?t.texStorage2D(i.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,be,Be,null));else if(E.isDataTexture)if($e.length>0){z&&we&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,$e[0].width,$e[0].height);for(let ge=0,oe=$e.length;ge<oe;ge++)ye=$e[ge],z?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,be,Be,ye.data):t.texImage2D(i.TEXTURE_2D,ge,ze,ye.width,ye.height,0,be,Be,ye.data);E.generateMipmaps=!1}else z?(we&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,fe.width,fe.height),xe&&Me(E,fe,be,Be)):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,be,Be,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ze,$e[0].width,$e[0].height,fe.depth);for(let ge=0,oe=$e.length;ge<oe;ge++)if(ye=$e[ge],E.format!==En)if(be!==null)if(z){if(xe)if(E.layerUpdates.size>0){let Se=tu(ye.width,ye.height,E.format,E.type);for(let Qe of E.layerUpdates){let Tt=ye.data.subarray(Qe*Se/ye.data.BYTES_PER_ELEMENT,(Qe+1)*Se/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Qe,ye.width,ye.height,1,be,Tt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,ze,ye.width,ye.height,fe.depth,0,ye.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,be,Be,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,ze,ye.width,ye.height,fe.depth,0,be,Be,ye.data)}else{z&&we&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,$e[0].width,$e[0].height);for(let ge=0,oe=$e.length;ge<oe;ge++)ye=$e[ge],E.format!==En?be!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,ze,ye.width,ye.height,0,ye.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,be,Be,ye.data):t.texImage2D(i.TEXTURE_2D,ge,ze,ye.width,ye.height,0,be,Be,ye.data)}else if(E.isDataArrayTexture)if(z){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ze,fe.width,fe.height,fe.depth),xe)if(E.layerUpdates.size>0){let ge=tu(fe.width,fe.height,E.format,E.type);for(let oe of E.layerUpdates){let Se=fe.data.subarray(oe*ge/fe.data.BYTES_PER_ELEMENT,(oe+1)*ge/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,be,Be,Se)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Be,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,be,Be,fe.data);else if(E.isData3DTexture)z?(we&&t.texStorage3D(i.TEXTURE_3D,Ne,ze,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Be,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,be,Be,fe.data);else if(E.isFramebufferTexture){if(we)if(z)t.texStorage2D(i.TEXTURE_2D,Ne,ze,fe.width,fe.height);else{let ge=fe.width,oe=fe.height;for(let Se=0;Se<Ne;Se++)t.texImage2D(i.TEXTURE_2D,Se,ze,ge,oe,0,be,Be,null),ge>>=1,oe>>=1}}else if($e.length>0){if(z&&we){let ge=se($e[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ze,ge.width,ge.height)}for(let ge=0,oe=$e.length;ge<oe;ge++)ye=$e[ge],z?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be,Be,ye):t.texImage2D(i.TEXTURE_2D,ge,ze,be,Be,ye);E.generateMipmaps=!1}else if(z){if(we){let ge=se(fe);t.texStorage2D(i.TEXTURE_2D,Ne,ze,ge.width,ge.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Be,fe)}else t.texImage2D(i.TEXTURE_2D,0,ze,be,Be,fe);m(E)&&g(W),Pe.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,k){if(E.image.length!==6)return;let W=ue(P,E),$=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let j=n.get($);if($.version!==j.__version||W===!0){t.activeTexture(i.TEXTURE0+k);let Pe=Ke.getPrimaries(Ke.workingColorSpace),_e=E.colorSpace===ei?null:Ke.getPrimaries(E.colorSpace),De=E.colorSpace===ei||Pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let We=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!We&&!fe?be[oe]=x(E.image[oe],!0,s.maxCubemapSize):be[oe]=fe?E.image[oe].image:E.image[oe],be[oe]=ae(E,be[oe]);let Be=be[0],ze=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),$e=y(E.internalFormat,ze,ye,E.colorSpace),z=E.isVideoTexture!==!0,we=j.__version===void 0||W===!0,xe=$.dataReady,Ne=S(E,Be);ie(i.TEXTURE_CUBE_MAP,E);let ge;if(We){z&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,$e,Be.width,Be.height);for(let oe=0;oe<6;oe++){ge=be[oe].mipmaps;for(let Se=0;Se<ge.length;Se++){let Qe=ge[Se];E.format!==En?ze!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Qe.width,Qe.height,ze,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,$e,Qe.width,Qe.height,0,Qe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Qe.width,Qe.height,ze,ye,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,$e,Qe.width,Qe.height,0,ze,ye,Qe.data)}}}else{if(ge=E.mipmaps,z&&we){ge.length>0&&Ne++;let oe=se(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,ze,ye,be[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,be[oe].width,be[oe].height,0,ze,ye,be[oe].data);for(let Se=0;Se<ge.length;Se++){let Tt=ge[Se].image[oe].image;z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Tt.width,Tt.height,ze,ye,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,$e,Tt.width,Tt.height,0,ze,ye,Tt.data)}}else{z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,ye,be[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,ze,ye,be[oe]);for(let Se=0;Se<ge.length;Se++){let Qe=ge[Se];z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,ze,ye,Qe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,$e,ze,ye,Qe.image[oe])}}}m(E)&&g(i.TEXTURE_CUBE_MAP),j.__version=$.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function le(P,E,k,W,$,j){let Pe=r.convert(k.format,k.colorSpace),_e=r.convert(k.type),De=y(k.internalFormat,Pe,_e,k.colorSpace),We=n.get(E),fe=n.get(k);if(fe.__renderTarget=E,!We.__hasExternalTextures){let be=Math.max(1,E.width>>j),Be=Math.max(1,E.height>>j);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,j,De,be,Be,E.depth,0,Pe,_e,null):t.texImage2D($,j,De,be,Be,0,Pe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),de(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,fe.__webglTexture,0,D(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,fe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(P,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let W=E.depthTexture,$=W&&W.isDepthTexture?W.type:null,j=_(E.stencilBuffer,$),Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(E),j,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(E),j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,P)}else{let W=E.textures;for(let $=0;$<W.length;$++){let j=W[$],Pe=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),De=y(j.internalFormat,Pe,_e,j.colorSpace);de(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(E),De,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(E),De,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,De,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(P,E,k){let W=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(E.depthTexture);if($.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ie(i.TEXTURE_CUBE_MAP,E.depthTexture);let We=r.convert(E.depthTexture.format),fe=r.convert(E.depthTexture.type),be;E.depthTexture.format===li?be=i.DEPTH_COMPONENT24:E.depthTexture.format===pi&&(be=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,be,E.width,E.height,0,We,fe,null)}}else B(E.depthTexture,0);let j=$.__webglTexture,Pe=D(E),_e=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,De=E.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===li)de(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,De,_e,j,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,De,_e,j,0);else if(E.depthTexture.format===pi)de(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,De,_e,j,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,De,_e,j,0);else throw new Error("Unknown depthTexture format")}function Oe(P){let E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){let $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=W}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ce(E.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?ce(E.__webglFramebuffer[0],P,0):ce(E.__webglFramebuffer,P,0)}else if(k){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),me(E.__webglDepthbuffer[W],P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),me(E.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(P,E,k){let W=n.get(P);E!==void 0&&le(W.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Oe(P)}function ve(P){let E=P.texture,k=n.get(P),W=n.get(E);P.addEventListener("dispose",T);let $=P.textures,j=P.isWebGLCubeRenderTarget===!0,Pe=$.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let De=0;De<E.mipmaps.length;De++)k.__webglFramebuffer[_e][De]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let _e=0,De=$.length;_e<De;_e++){let We=n.get($[_e]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<$.length;_e++){let De=$[_e];k.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);let We=r.convert(De.format,De.colorSpace),fe=r.convert(De.type),be=y(De.internalFormat,We,fe,De.colorSpace,P.isXRRenderTarget===!0),Be=D(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),me(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ie(i.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)le(k.__webglFramebuffer[_e][De],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De);else le(k.__webglFramebuffer[_e],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(E)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,De=$.length;_e<De;_e++){let We=$[_e],fe=n.get(We),be=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),ie(be,We),le(k.__webglFramebuffer,P,We,i.COLOR_ATTACHMENT0+_e,be,0),m(We)&&g(be)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,W.__webglTexture),ie(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)le(k.__webglFramebuffer[De],P,E,i.COLOR_ATTACHMENT0,_e,De);else le(k.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,_e,0);m(E)&&g(_e),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Q(P){let E=P.textures;for(let k=0,W=E.length;k<W;k++){let $=E[k];if(m($)){let j=v(P),Pe=n.get($).__webglTexture;t.bindTexture(j,Pe),g(j),t.unbindTexture()}}}let ee=[],te=[];function pe(P){if(P.samples>0){if(de(P)===!1){let E=P.textures,k=P.width,W=P.height,$=i.COLOR_BUFFER_BIT,j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(P),_e=E.length>1;if(_e)for(let We=0;We<E.length;We++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let De=P.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let We=0;We<E.length;We++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);let fe=n.get(E[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,$,i.NEAREST),l===!0&&(ee.length=0,te.length=0,ee.push(i.COLOR_ATTACHMENT0+We),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(j),te.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let We=0;We<E.length;We++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);let fe=n.get(E[We]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function D(P){return Math.min(s.maxSamples,P.samples)}function de(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ae(P,E){let k=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Qt&&k!==ei&&(Ke.getTransfer(k)===ut?(W!==En||$!==yn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",k)),E}function se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=Te,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hM(i,e){function t(n,s=ei){let r,o=Ke.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===En)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===gr)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Rs)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Io||n===Do||n===Lo||n===No)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===wl||n===Tl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dl)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Fl||n===Ul||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Zl||n===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Jl||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:uM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new mu,g={},v=t.getContextAttributes(),y=null,_=null,S=[],w=[],T=new G,R=null,M=new Nt;M.viewport=new lt;let b=new Nt;b.viewport=new lt;let A=[M,b],N=new il,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=S[Z];return q===void 0&&(q=new nr,S[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=S[Z];return q===void 0&&(q=new nr,S[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=S[Z];return q===void 0&&(q=new nr,S[Z]=q),q.getHandSpace()};function B(Z){let q=w.indexOf(Z.inputSource);if(q===-1)return;let le=S[q];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||o),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<S.length;Z++){let q=w[Z];q!==null&&(w[Z]=null,S[Z].disconnect(q))}I=null,F=null,m.reset();for(let Z in g)delete g[Z];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,me=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?pi:li,me=v.stencil?Qi:Qn);let Oe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Zt(f.textureWidth,f.textureHeight,{format:En,type:yn,depthTexture:new hi(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Zt(d.framebufferWidth,d.framebufferHeight,{format:En,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Z){for(let q=0;q<Z.removed.length;q++){let le=Z.removed[q],me=w.indexOf(le);me>=0&&(w[me]=null,S[me].disconnect(le))}for(let q=0;q<Z.added.length;q++){let le=Z.added[q],me=w.indexOf(le);if(me===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=w.length){w.push(le),me=Oe;break}else if(w[Oe]===null){w[Oe]=le,me=Oe;break}if(me===-1)break}let ce=S[me];ce&&ce.connect(le)}}let V=new L,Y=new L;function ne(Z,q,le){V.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);let me=V.distanceTo(Y),ce=q.projectionMatrix.elements,Oe=le.projectionMatrix.elements,Te=ce[14]/(ce[10]-1),ve=ce[14]/(ce[10]+1),Q=(ce[9]+1)/ce[5],ee=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],pe=(Oe[8]+1)/Oe[0],D=Te*te,de=Te*pe,he=me/(-te+pe),ae=he*-te;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ae),Z.translateZ(he),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ce[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let se=Te+he,P=ve+he,E=D-ae,k=de+(me-ae),W=Q*ve/P*se,$=ee*ve/P*se;Z.projectionMatrix.makePerspective(E,k,W,$,se,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let q=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(le=m.depthFar)),N.near=b.near=M.near=q,N.far=b.far=M.far=le,(I!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=Z.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let me=Z.parent,ce=N.cameras;re(N,me);for(let Oe=0;Oe<ce.length;Oe++)re(ce[Oe],me);ce.length===2?ne(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),ie(Z,N,me)};function ie(Z,q,le){le===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return g[Z]};let ue=null;function Le(Z,q){if(h=q.getViewerPose(c||o),p=q,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let me=!1;le.length!==N.cameras.length&&(N.cameras.length=0,me=!0);for(let ve=0;ve<le.length;ve++){let Q=le[ve],ee=null;if(d!==null)ee=d.getViewport(Q);else{let pe=u.getViewSubImage(f,Q);ee=pe.viewport,ve===0&&(e.setRenderTargetTextures(_,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(_))}let te=A[ve];te===void 0&&(te=new Nt,te.layers.enable(ve),te.viewport=new lt,A[ve]=te),te.matrix.fromArray(Q.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Q.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ee.x,ee.y,ee.width,ee.height),ve===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),me===!0&&N.cameras.push(te)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ve=u.getDepthInformation(le[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ve=0;ve<le.length;ve++){let Q=le[ve].camera;if(Q){let ee=g[Q];ee||(ee=new Qr,g[Q]=ee);let te=u.getCameraImage(Q);ee.sourceTexture=te}}}}for(let le=0;le<S.length;le++){let me=w[le],ce=S[le];me!==null&&ce!==void 0&&ce.update(me,q,c||o)}ue&&ue(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}let Me=new Ap;Me.setAnimationLoop(Le),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},Is=new It,dM=new Ie;function pM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$h(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,y,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Is.copy(_),Is.x*=-1,Is.y*=-1,Is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Is)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(p(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(v,S);let w=e.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=_.length;w<T;w++){let R=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,b=R.length;M<b;M++){let A=R[M];if(d(A,w,M,S)===!0){let N=A.__offset,I=Array.isArray(A.value)?A.value:[A.value],F=0;for(let B=0;B<I.length;B++){let O=I[B],U=x(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,N+F,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,S){let w=v.value,T=y+"_"+_;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{let R=S[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return S[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function p(v){let y=v.uniforms,_=0,S=16;for(let T=0,R=y.length;T<R;T++){let M=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,A=M.length;b<A;b++){let N=M[b],I=Array.isArray(N.value)?N.value:[N.value];for(let F=0,B=I.length;F<B;F++){let O=I[F],U=x(O),V=_%S,Y=V%U.boundary,ne=V+Y;_+=Y,ne!==0&&S-ne<U.storage&&(_+=S-ne),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=U.storage}}}let w=_%S;return w>0&&(_+=S-w),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var gM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function xM(){return mi===null&&(mi=new Xi(gM,16,16,Rs,fn),mi.name="DFG_LUT",mi.minFilter=Ut,mi.magFilter=Ut,mi.wrapS=ln,mi.wrapT=ln,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var br=class{constructor(e={}){let{canvas:t=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([bl,Ml,vl]),g=new Set([yn,Qn,mr,Qi,_l,yl]),v=new Uint32Array(4),y=new Int32Array(4),_=null,S=null,w=[],T=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,b=!1;this._outputColorSpace=Je;let A=0,N=0,I=null,F=-1,B=null,O=new lt,U=new lt,V=null,Y=new Ae(0),ne=0,re=t.width,ie=t.height,ue=1,Le=null,Me=null,Z=new lt(0,0,re,ie),q=new lt(0,0,re,ie),le=!1,me=new or,ce=!1,Oe=!1,Te=new Ie,ve=new L,Q=new lt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function pe(){return I===null?ue:1}let D=n;function de(C,H){return t.getContext(C,H)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",pt,!1),D===null){let H="webgl2";if(D=de(H,C),D===null)throw de(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ye("WebGLRenderer: "+C.message),C}let he,ae,se,P,E,k,W,$,j,Pe,_e,De,We,fe,be,Be,ze,ye,$e,z,we,xe,Ne,ge;function oe(){he=new wy(D),he.init(),xe=new hM(D,he),ae=new my(D,he,e,xe),se=new lM(D,he),ae.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),P=new Ay(D),E=new Yv,k=new cM(D,he,se,E,ae,xe,P),W=new xy(M),$=new Sy(M),j=new I0(D),Ne=new dy(D,j),Pe=new Ty(D,j,P,Ne),_e=new Cy(D,Pe,j,P),$e=new Ry(D,ae,k),Be=new gy(E),De=new qv(M,W,$,he,ae,Ne,Be),We=new pM(M,E),fe=new Zv,be=new tM(he),ye=new fy(M,W,$,se,_e,p,l),ze=new oM(M,_e,ae),ge=new mM(D,P,ae,se),z=new py(D,he,P),we=new Ey(D,he,P),P.programs=De.programs,M.capabilities=ae,M.extensions=he,M.properties=E,M.renderLists=fe,M.shadowMap=ze,M.state=se,M.info=P}oe(),x!==yn&&(R=new Iy(x,t.width,t.height,s,r));let Se=new gu(M,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(re,ie,!1))},this.getSize=function(C){return C.set(re,ie)},this.setSize=function(C,H,J=!0){if(Se.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,ie=H,t.width=Math.floor(C*ue),t.height=Math.floor(H*ue),J===!0&&(t.style.width=C+"px",t.style.height=H+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(re*ue,ie*ue).floor()},this.setDrawingBufferSize=function(C,H,J){re=C,ie=H,ue=J,t.width=Math.floor(C*J),t.height=Math.floor(H*J),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(x===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,H,J,K){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,H,J,K),se.viewport(O.copy(Z).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,H,J,K){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,H,J,K),se.scissor(U.copy(q).multiplyScalar(ue).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){se.setScissorTest(le=C)},this.setOpaqueSort=function(C){Le=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,J=!0){let K=0;if(C){let X=!1;if(I!==null){let Ee=I.texture.format;X=m.has(Ee)}if(X){let Ee=I.texture.type,Ue=g.has(Ee),Ce=ye.getClearColor(),ke=ye.getClearAlpha(),Ve=Ce.r,Ze=Ce.g,Xe=Ce.b;Ue?(v[0]=Ve,v[1]=Ze,v[2]=Xe,v[3]=ke,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=Ve,y[1]=Ze,y[2]=Xe,y[3]=ke,D.clearBufferiv(D.COLOR,0,y))}else K|=D.COLOR_BUFFER_BIT}H&&(K|=D.DEPTH_BUFFER_BIT),J&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),ye.dispose(),fe.dispose(),be.dispose(),E.dispose(),W.dispose(),$.dispose(),_e.dispose(),Ne.dispose(),ge.dispose(),De.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Pf),Se.removeEventListener("sessionend",If),os.stop()};function Qe(C){C.preventDefault(),Wr("WebGLRenderer: Context Lost."),b=!0}function Tt(){Wr("WebGLRenderer: Context Restored."),b=!1;let C=P.autoReset,H=ze.enabled,J=ze.autoUpdate,K=ze.needsUpdate,X=ze.type;oe(),P.autoReset=C,ze.enabled=H,ze.autoUpdate=J,ze.needsUpdate=K,ze.type=X}function pt(C){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){let H=C.target;H.removeEventListener("dispose",oi),yi(H)}function yi(C){$m(C),E.remove(C)}function $m(C){let H=E.get(C).programs;H!==void 0&&(H.forEach(function(J){De.releaseProgram(J)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,J,K,X,Ee){H===null&&(H=ee);let Ue=X.isMesh&&X.matrixWorld.determinant()<0,Ce=Qm(C,H,J,K,X);se.setMaterial(K,Ue);let ke=J.index,Ve=1;if(K.wireframe===!0){if(ke=Pe.getWireframeAttribute(J),ke===void 0)return;Ve=2}let Ze=J.drawRange,Xe=J.attributes.position,rt=Ze.start*Ve,yt=(Ze.start+Ze.count)*Ve;Ee!==null&&(rt=Math.max(rt,Ee.start*Ve),yt=Math.min(yt,(Ee.start+Ee.count)*Ve)),ke!==null?(rt=Math.max(rt,0),yt=Math.min(yt,ke.count)):Xe!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,Xe.count));let Dt=yt-rt;if(Dt<0||Dt===1/0)return;Ne.setup(X,K,Ce,J,ke);let Lt,St=z;if(ke!==null&&(Lt=j.get(ke),St=we,St.setIndex(Lt)),X.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*pe()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(X.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),se.setLineWidth(qe*pe()),X.isLineSegments?St.setMode(D.LINES):X.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else X.isPoints?St.setMode(D.POINTS):X.isSprite&&St.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)er("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qe=X._multiDrawStarts,mt=X._multiDrawCounts,ct=X._multiDrawCount,Mn=ke?j.get(ke).bytesPerElement:1,Us=E.get(K).currentProgram.getUniforms();for(let bn=0;bn<ct;bn++)Us.setValue(D,"_gl_DrawID",bn),St.render(qe[bn]/Mn,mt[bn])}else if(X.isInstancedMesh)St.renderInstances(rt,Dt,X.count);else if(J.isInstancedBufferGeometry){let qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mt=Math.min(J.instanceCount,qe);St.renderInstances(rt,Dt,mt)}else St.render(rt,Dt)};function Cf(C,H,J){C.transparent===!0&&C.side===_n&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,sa(C,H,J),C.side=qn,C.needsUpdate=!0,sa(C,H,J),C.side=_n):sa(C,H,J)}this.compile=function(C,H,J=null){J===null&&(J=C),S=be.get(J),S.init(H),T.push(S),J.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),C!==J&&C.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();let K=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){let Ce=Ee[Ue];Cf(Ce,J,X),K.add(Ce)}else Cf(Ee,J,X),K.add(Ee)}),S=T.pop(),K},this.compileAsync=function(C,H,J=null){let K=this.compile(C,H,J);return new Promise(X=>{function Ee(){if(K.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&K.delete(Ue)}),K.size===0){X(C);return}setTimeout(Ee,10)}he.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Gc=null;function Jm(C){Gc&&Gc(C)}function Pf(){os.stop()}function If(){os.start()}let os=new Ap;os.setAnimationLoop(Jm),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(C){Gc=C,Se.setAnimationLoop(C),C===null?os.stop():os.start()},Se.addEventListener("sessionstart",Pf),Se.addEventListener("sessionend",If),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let J=Se.enabled===!0&&Se.isPresenting===!0,K=R!==null&&(I===null||J)&&R.begin(M,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(H),H=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,H,I),S=be.get(C,T.length),S.init(H),T.push(S),Te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),me.setFromProjectionMatrix(Te,Xn,H.reversedDepth),Oe=this.localClippingEnabled,ce=Be.init(this.clippingPlanes,Oe),_=fe.get(C,w.length),_.init(),w.push(_),Se.enabled===!0&&Se.isPresenting===!0){let Ue=M.xr.getDepthSensingMesh();Ue!==null&&Wc(Ue,H,-1/0,M.sortObjects)}Wc(C,H,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Le,Me),te=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,te&&ye.addToRenderList(_,C),this.info.render.frame++,ce===!0&&Be.beginShadows();let X=S.state.shadowsArray;if(ze.render(X,C,H),ce===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&R.hasRenderPass())===!1){let Ue=_.opaque,Ce=_.transmissive;if(S.setupLights(),H.isArrayCamera){let ke=H.cameras;if(Ce.length>0)for(let Ve=0,Ze=ke.length;Ve<Ze;Ve++){let Xe=ke[Ve];Lf(Ue,Ce,C,Xe)}te&&ye.render(C);for(let Ve=0,Ze=ke.length;Ve<Ze;Ve++){let Xe=ke[Ve];Df(_,C,Xe,Xe.viewport)}}else Ce.length>0&&Lf(Ue,Ce,C,H),te&&ye.render(C),Df(_,C,H)}I!==null&&N===0&&(k.updateMultisampleRenderTarget(I),k.updateRenderTargetMipmap(I)),K&&R.end(M),C.isScene===!0&&C.onAfterRender(M,C,H),Ne.resetDefaultState(),F=-1,B=null,T.pop(),T.length>0?(S=T[T.length-1],ce===!0&&Be.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Wc(C,H,J,K){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||me.intersectsSprite(C)){K&&Q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);let Ue=_e.update(C),Ce=C.material;Ce.visible&&_.push(C,Ue,Ce,J,Q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||me.intersectsObject(C))){let Ue=_e.update(C),Ce=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Q.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Q.copy(Ue.boundingSphere.center)),Q.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(Ce)){let ke=Ue.groups;for(let Ve=0,Ze=ke.length;Ve<Ze;Ve++){let Xe=ke[Ve],rt=Ce[Xe.materialIndex];rt&&rt.visible&&_.push(C,Ue,rt,J,Q.z,Xe)}}else Ce.visible&&_.push(C,Ue,Ce,J,Q.z,null)}}let Ee=C.children;for(let Ue=0,Ce=Ee.length;Ue<Ce;Ue++)Wc(Ee[Ue],H,J,K)}function Df(C,H,J,K){let{opaque:X,transmissive:Ee,transparent:Ue}=C;S.setupLightsView(J),ce===!0&&Be.setGlobalState(M.clippingPlanes,J),K&&se.viewport(O.copy(K)),X.length>0&&ia(X,H,J),Ee.length>0&&ia(Ee,H,J),Ue.length>0&&ia(Ue,H,J),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Lf(C,H,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let rt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Zt(1,1,{generateMipmaps:!0,type:rt?fn:yn,minFilter:Jn,samples:ae.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let Ee=S.state.transmissionRenderTarget[K.id],Ue=K.viewport||O;Ee.setSize(Ue.z*M.transmissionResolutionScale,Ue.w*M.transmissionResolutionScale);let Ce=M.getRenderTarget(),ke=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(Ee),M.getClearColor(Y),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),te&&ye.render(J);let Ze=M.toneMapping;M.toneMapping=$n;let Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),ce===!0&&Be.setGlobalState(M.clippingPlanes,K),ia(C,J,K),k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee),he.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let yt=0,Dt=H.length;yt<Dt;yt++){let Lt=H[yt],{object:St,geometry:qe,material:mt,group:ct}=Lt;if(mt.side===_n&&St.layers.test(K.layers)){let Mn=mt.side;mt.side=en,mt.needsUpdate=!0,Nf(St,J,K,qe,mt,ct),mt.side=Mn,mt.needsUpdate=!0,rt=!0}}rt===!0&&(k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee))}M.setRenderTarget(Ce,ke,Ve),M.setClearColor(Y,ne),Xe!==void 0&&(K.viewport=Xe),M.toneMapping=Ze}function ia(C,H,J){let K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,Ee=C.length;X<Ee;X++){let Ue=C[X],{object:Ce,geometry:ke,group:Ve}=Ue,Ze=Ue.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),Ce.layers.test(J.layers)&&Nf(Ce,H,J,ke,Ze,Ve)}}function Nf(C,H,J,K,X,Ee){C.onBeforeRender(M,H,J,K,X,Ee),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(M,H,J,K,C,Ee),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=en,X.needsUpdate=!0,M.renderBufferDirect(J,H,K,X,C,Ee),X.side=qn,X.needsUpdate=!0,M.renderBufferDirect(J,H,K,X,C,Ee),X.side=_n):M.renderBufferDirect(J,H,K,X,C,Ee),C.onAfterRender(M,H,J,K,X,Ee)}function sa(C,H,J){H.isScene!==!0&&(H=ee);let K=E.get(C),X=S.state.lights,Ee=S.state.shadowsArray,Ue=X.state.version,Ce=De.getParameters(C,X.state,Ee,H,J),ke=De.getProgramCacheKey(Ce),Ve=K.programs;K.environment=C.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(C.isMeshStandardMaterial?$:W).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",oi),Ve=new Map,K.programs=Ve);let Ze=Ve.get(ke);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Ue)return Uf(C,Ce),Ze}else Ce.uniforms=De.getUniforms(C),C.onBeforeCompile(Ce,M),Ze=De.acquireProgram(Ce,ke),Ve.set(ke,Ze),K.uniforms=Ce.uniforms;let Xe=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Be.uniform),Uf(C,Ce),K.needsLights=tg(C),K.lightsStateVersion=Ue,K.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function Ff(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=vr.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Uf(C,H){let J=E.get(C);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Qm(C,H,J,K,X){H.isScene!==!0&&(H=ee),k.resetTextureUnits();let Ee=H.fog,Ue=K.isMeshStandardMaterial?H.environment:null,Ce=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt,ke=(K.isMeshStandardMaterial?$:W).get(K.envMap||Ue),Ve=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color,Dt=$n;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=M.toneMapping);let Lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Lt!==void 0?Lt.length:0,qe=E.get(K),mt=S.state.lights;if(ce===!0&&(Oe===!0||C!==B)){let on=C===B&&K.id===F;Be.setState(K,C,on)}let ct=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==mt.state.version||qe.outputColorSpace!==Ce||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==ke||K.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Be.numPlanes||qe.numIntersection!==Be.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Ze||qe.morphTargets!==Xe||qe.morphNormals!==rt||qe.morphColors!==yt||qe.toneMapping!==Dt||qe.morphTargetsCount!==St)&&(ct=!0):(ct=!0,qe.__version=K.version);let Mn=qe.currentProgram;ct===!0&&(Mn=sa(K,H,X));let Us=!1,bn=!1,Cr=!1,Et=Mn.getUniforms(),pn=qe.uniforms;if(se.useProgram(Mn.program)&&(Us=!0,bn=!0,Cr=!0),K.id!==F&&(F=K.id,bn=!0),Us||B!==C){se.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Et.setValue(D,"projectionMatrix",C.projectionMatrix),Et.setValue(D,"viewMatrix",C.matrixWorldInverse);let mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(D,ve.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Et.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,bn=!0,Cr=!0)}if(qe.needsLights&&(mt.state.directionalShadowMap.length>0&&Et.setValue(D,"directionalShadowMap",mt.state.directionalShadowMap,k),mt.state.spotShadowMap.length>0&&Et.setValue(D,"spotShadowMap",mt.state.spotShadowMap,k),mt.state.pointShadowMap.length>0&&Et.setValue(D,"pointShadowMap",mt.state.pointShadowMap,k)),X.isSkinnedMesh){Et.setOptional(D,X,"bindMatrix"),Et.setOptional(D,X,"bindMatrixInverse");let on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Et.setValue(D,"boneTexture",on.boneTexture,k))}X.isBatchedMesh&&(Et.setOptional(D,X,"batchingTexture"),Et.setValue(D,"batchingTexture",X._matricesTexture,k),Et.setOptional(D,X,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",X._indirectTexture,k),Et.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",X._colorsTexture,k));let Rn=J.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&$e.update(X,J,Mn),(bn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Et.setValue(D,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(pn.envMap.value=ke,pn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(pn.envMapIntensity.value=H.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=xM()),bn&&(Et.setValue(D,"toneMappingExposure",M.toneMappingExposure),qe.needsLights&&eg(pn,Cr),Ee&&K.fog===!0&&We.refreshFogUniforms(pn,Ee),We.refreshMaterialUniforms(pn,K,ue,ie,S.state.transmissionRenderTarget[C.id]),vr.upload(D,Ff(qe),pn,k)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(vr.upload(D,Ff(qe),pn,k),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Et.setValue(D,"center",X.center),Et.setValue(D,"modelViewMatrix",X.modelViewMatrix),Et.setValue(D,"normalMatrix",X.normalMatrix),Et.setValue(D,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let on=K.uniformsGroups;for(let mn=0,Xc=on.length;mn<Xc;mn++){let as=on[mn];ge.update(as,Mn),ge.bind(as,Mn)}}return Mn}function eg(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function tg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,H,J){let K=E.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=H,E.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let J=E.get(C);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};let ng=D.createFramebuffer();this.setRenderTarget=function(C,H=0,J=0){I=C,A=H,N=J;let K=null,X=!1,Ee=!1;if(C){let Ce=E.get(C);if(Ce.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(D.FRAMEBUFFER,Ce.__webglFramebuffer),O.copy(C.viewport),U.copy(C.scissor),V=C.scissorTest,se.viewport(O),se.scissor(U),se.setScissorTest(V),F=-1;return}else if(Ce.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(Ce.__hasExternalTextures)k.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ze=C.depthTexture;if(Ce.__boundDepthTexture!==Ze){if(Ze!==null&&E.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}let ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);let Ve=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?K=Ve[H][J]:K=Ve[H],X=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?K=E.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[J]:K=Ve,O.copy(C.viewport),U.copy(C.scissor),V=C.scissorTest}else O.copy(Z).multiplyScalar(ue).floor(),U.copy(q).multiplyScalar(ue).floor(),V=le;if(J!==0&&(K=ng),se.bindFramebuffer(D.FRAMEBUFFER,K)&&se.drawBuffers(C,K),se.viewport(O),se.scissor(U),se.setScissorTest(V),X){let Ce=E.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,J)}else if(Ee){let Ce=H;for(let ke=0;ke<C.textures.length;ke++){let Ve=E.get(C.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,J,Ce)}}else if(C!==null&&J!==0){let Ce=E.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,J)}F=-1},this.readRenderTargetPixels=function(C,H,J,K,X,Ee,Ue,Ce=0){if(!(C&&C.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){se.bindFramebuffer(D.FRAMEBUFFER,ke);try{let Ve=C.textures[Ce],Ze=Ve.format,Xe=Ve.type;if(!ae.textureFormatReadable(Ze)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Xe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-K&&J>=0&&J<=C.height-X&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(H,J,K,X,xe.convert(Ze),xe.convert(Xe),Ee))}finally{let Ve=I!==null?E.get(I).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,H,J,K,X,Ee,Ue,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(H>=0&&H<=C.width-K&&J>=0&&J<=C.height-X){se.bindFramebuffer(D.FRAMEBUFFER,ke);let Ve=C.textures[Ce],Ze=Ve.format,Xe=Ve.type;if(!ae.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(H,J,K,X,xe.convert(Ze),xe.convert(Xe),0);let yt=I!==null?E.get(I).__webglFramebuffer:null;se.bindFramebuffer(D.FRAMEBUFFER,yt);let Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $d(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.deleteBuffer(rt),D.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,J=0){let K=Math.pow(2,-J),X=Math.floor(C.image.width*K),Ee=Math.floor(C.image.height*K),Ue=H!==null?H.x:0,Ce=H!==null?H.y:0;k.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ue,Ce,X,Ee),se.unbindTexture()};let ig=D.createFramebuffer(),sg=D.createFramebuffer();this.copyTextureToTexture=function(C,H,J=null,K=null,X=0,Ee=null){Ee===null&&(X!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Ue,Ce,ke,Ve,Ze,Xe,rt,yt,Dt,Lt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(J!==null)Ue=J.max.x-J.min.x,Ce=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,Ze=J.min.y,Xe=J.isBox3?J.min.z:0;else{let Rn=Math.pow(2,-X);Ue=Math.floor(Lt.width*Rn),Ce=Math.floor(Lt.height*Rn),C.isDataArrayTexture?ke=Lt.depth:C.isData3DTexture?ke=Math.floor(Lt.depth*Rn):ke=1,Ve=0,Ze=0,Xe=0}K!==null?(rt=K.x,yt=K.y,Dt=K.z):(rt=0,yt=0,Dt=0);let St=xe.convert(H.format),qe=xe.convert(H.type),mt;H.isData3DTexture?(k.setTexture3D(H,0),mt=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(k.setTexture2DArray(H,0),mt=D.TEXTURE_2D_ARRAY):(k.setTexture2D(H,0),mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let ct=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Us=D.getParameter(D.UNPACK_SKIP_PIXELS),bn=D.getParameter(D.UNPACK_SKIP_ROWS),Cr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let Et=C.isDataArrayTexture||C.isData3DTexture,pn=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let Rn=E.get(C),on=E.get(H),mn=E.get(Rn.__renderTarget),Xc=E.get(on.__renderTarget);se.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xc.__webglFramebuffer);for(let as=0;as<ke;as++)Et&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(C).__webglTexture,X,Xe+as),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(H).__webglTexture,Ee,Dt+as)),D.blitFramebuffer(Ve,Ze,Ue,Ce,rt,yt,Ue,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);se.bindFramebuffer(D.READ_FRAMEBUFFER,null),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||E.has(C)){let Rn=E.get(C),on=E.get(H);se.bindFramebuffer(D.READ_FRAMEBUFFER,ig),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,sg);for(let mn=0;mn<ke;mn++)Et?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rn.__webglTexture,X,Xe+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rn.__webglTexture,X),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,on.__webglTexture,Ee,Dt+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,on.__webglTexture,Ee),X!==0?D.blitFramebuffer(Ve,Ze,Ue,Ce,rt,yt,Ue,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(mt,Ee,rt,yt,Dt+mn,Ve,Ze,Ue,Ce):D.copyTexSubImage2D(mt,Ee,rt,yt,Ve,Ze,Ue,Ce);se.bindFramebuffer(D.READ_FRAMEBUFFER,null),se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(mt,Ee,rt,yt,Dt,Ue,Ce,ke,St,qe,Lt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(mt,Ee,rt,yt,Dt,Ue,Ce,ke,St,Lt.data):D.texSubImage3D(mt,Ee,rt,yt,Dt,Ue,Ce,ke,St,qe,Lt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,rt,yt,Ue,Ce,St,qe,Lt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,rt,yt,Lt.width,Lt.height,St,Lt.data):D.texSubImage2D(D.TEXTURE_2D,Ee,rt,yt,Ue,Ce,St,qe,Lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Us),D.pixelStorei(D.UNPACK_SKIP_ROWS,bn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cr),Ee===0&&H.generateMipmaps&&D.generateMipmap(mt),se.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){A=0,N=0,I=null,se.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Dp={type:"change"},_u={type:"start"},Np={type:"end"},ac=new Ai,Lp=new Pn,_M=Math.cos(70*Mt.DEG2RAD),Yt=new L,vn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xu=1e-6,lc=class extends vo{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new At,this._lastTargetPosition=new L,this._quat=new At().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new L,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new L,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vM.bind(this),this._onPointerDown=yM.bind(this),this._onPointerUp=MM.bind(this),this._onContextMenu=RM.bind(this),this._onMouseWheel=wM.bind(this),this._onKeyDown=TM.bind(this),this._onTouchStart=EM.bind(this),this._onTouchMove=AM.bind(this),this._onMouseDown=bM.bind(this),this._onMouseMove=SM.bind(this),this._interceptControlDown=CM.bind(this),this._interceptControlUp=PM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dp),this.update(),this.state=bt.NONE}update(e=null){let t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Yt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<_M?this.object.lookAt(this.target):(Lp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(Lp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xu||this._lastTargetPosition.distanceToSquared(this.target)>xu?(this.dispatchEvent(Dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function MM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Np),this.state=bt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(_u)}function SM(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function wM(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(_u),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Np))}function TM(i){this.enabled!==!1&&this._handleKeyDown(i)}function EM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(_u)}function AM(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function RM(i){this.enabled!==!1&&i.preventDefault()}function CM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fp(){return{kind:"table",name:"Dining Table",widthMm:1800,depthMm:900,heightMm:750,topThicknessMm:32,legStyle:"tapered",legThicknessMm:70,legInsetMm:40,apron:!0,apronHeightMm:90}}function Up(){return{kind:"bookshelf",name:"Bookshelf",widthMm:900,heightMm:1800,depthMm:300,shelfCount:4,stockThicknessMm:18,backPanel:!0}}function Op(){return{kind:"cabinet",name:"Sideboard Cabinet",widthMm:1400,heightMm:800,depthMm:450,doorCount:2,stockThicknessMm:18,legHeightMm:150}}function Bp(){return{kind:"drawerbox",name:"Drawer Box",widthMm:500,depthMm:450,heightMm:150,stockThicknessMm:13,bottomThicknessMm:6,joinery:"halfblind"}}function kp(){return{kind:"door",name:"Cabinet Door",widthMm:400,heightMm:720,thicknessMm:19,style:"shaker",railStileWidthMm:64,panelThicknessMm:6,hingeBoring:!0}}function zp(){return{kind:"drawerfront",name:"Drawer Front",widthMm:600,heightMm:200,thicknessMm:19,style:"shaker",railStileWidthMm:50,panelThicknessMm:6}}function Hp(){return{kind:"drawerunit",name:"Drawer Unit",widthMm:600,heightMm:750,depthMm:500,drawerCount:3,columnCount:1,insideBevelMm:0,dividerRails:!1,openDrawer:0,openColumn:1,openAmountMm:300,stockThicknessMm:18,boxStockThicknessMm:13,frontStyle:"shaker"}}function IM(){return{kind:"endtable",name:"Coastal End Table",widthMm:500,depthMm:400,heightMm:560,stockThicknessMm:18,drawerHeightMm:130,boxStockThicknessMm:13,bottomShelfLiftMm:40,openMm:0}}function DM(i){switch(i){case"table":return Fp();case"bookshelf":return Up();case"cabinet":return Op();case"drawerbox":return Bp();case"door":return kp();case"drawerfront":return zp();case"drawerunit":return Hp();case"endtable":return IM()}}function yu(i){let e=(t,n)=>{if(!Number.isFinite(t)||t<=0)throw new Error(`${i.kind}: ${n} must be a positive number, got ${t}`)};switch(i.kind){case"table":{if(e(i.widthMm,"widthMm"),e(i.depthMm,"depthMm"),e(i.heightMm,"heightMm"),e(i.topThicknessMm,"topThicknessMm"),e(i.legThicknessMm,"legThicknessMm"),i.topThicknessMm>=i.heightMm)throw new Error("table: topThicknessMm must be less than heightMm");let t=2*(i.legInsetMm+i.legThicknessMm);if(i.widthMm<=t||i.depthMm<=t)throw new Error("table: legs do not fit \u2014 reduce legInsetMm or legThicknessMm");break}case"bookshelf":{if(e(i.widthMm,"widthMm"),e(i.heightMm,"heightMm"),e(i.depthMm,"depthMm"),e(i.stockThicknessMm,"stockThicknessMm"),!Number.isInteger(i.shelfCount)||i.shelfCount<0)throw new Error("bookshelf: shelfCount must be a non-negative integer");let t=i.heightMm-2*i.stockThicknessMm,n=(i.shelfCount+1)*100+i.shelfCount*i.stockThicknessMm;if(t<n)throw new Error("bookshelf: too many shelves for the given height (need \u2265100mm per opening)");break}case"cabinet":{if(e(i.widthMm,"widthMm"),e(i.heightMm,"heightMm"),e(i.depthMm,"depthMm"),e(i.stockThicknessMm,"stockThicknessMm"),!Number.isInteger(i.doorCount)||i.doorCount<1||i.doorCount>4)throw new Error("cabinet: doorCount must be an integer between 1 and 4");if(i.legHeightMm<0||i.legHeightMm>=i.heightMm)throw new Error("cabinet: legHeightMm must be \u2265 0 and less than heightMm");break}case"drawerbox":{if(e(i.widthMm,"widthMm"),e(i.depthMm,"depthMm"),e(i.heightMm,"heightMm"),e(i.stockThicknessMm,"stockThicknessMm"),e(i.bottomThicknessMm,"bottomThicknessMm"),i.widthMm<=2*i.stockThicknessMm+20)throw new Error("drawerbox: widthMm too small for the stock thickness");if(i.heightMm<40)throw new Error("drawerbox: heightMm must be at least 40mm");if(i.frontHeightMm!==void 0){if(i.frontHeightMm<i.stockThicknessMm+18)throw new Error("drawerbox: frontHeightMm too low to hold the bottom panel");if(i.frontHeightMm>i.heightMm)throw new Error("drawerbox: frontHeightMm must not exceed heightMm")}if(i.scoopedSides&&i.scoopLengthMm!==void 0&&i.scoopLengthMm<=0)throw new Error("drawerbox: scoopLengthMm must be a positive number");break}case"door":case"drawerfront":{if(e(i.widthMm,"widthMm"),e(i.heightMm,"heightMm"),e(i.thicknessMm,"thicknessMm"),i.style!=="slab"){if(e(i.railStileWidthMm,"railStileWidthMm"),e(i.panelThicknessMm,"panelThicknessMm"),i.style==="shaker"&&i.panelThicknessMm>=i.thicknessMm)throw new Error(`${i.kind}: panelThicknessMm must be less than thicknessMm`);if(2*i.railStileWidthMm+50>i.widthMm||2*i.railStileWidthMm+50>i.heightMm)throw new Error(`${i.kind}: railStileWidthMm too wide \u2014 no room for the center panel`);if(i.kind==="drawerfront"&&i.fingerPull)throw new Error(`${i.kind}: fingerPull is routed into slab fronts \u2014 set style to "slab"`);if(i.style==="raised"){let t=i.raiseWidthMm??38,n=Math.min(i.widthMm-2*i.railStileWidthMm,i.heightMm-2*i.railStileWidthMm);if(2*t+20>n)throw new Error(`${i.kind}: raiseWidthMm too wide \u2014 no flat field left on the panel`)}}break}case"drawerunit":{if(e(i.widthMm,"widthMm"),e(i.heightMm,"heightMm"),e(i.depthMm,"depthMm"),e(i.stockThicknessMm,"stockThicknessMm"),e(i.boxStockThicknessMm,"boxStockThicknessMm"),!Number.isInteger(i.drawerCount)||i.drawerCount<1||i.drawerCount>8)throw new Error("drawerunit: drawerCount must be an integer between 1 and 8");if((i.heightMm-2*i.stockThicknessMm)/i.drawerCount<80)throw new Error("drawerunit: too many drawers for the height (need \u226580mm per drawer)");if(i.widthMm<=2*i.stockThicknessMm+2*13+50)throw new Error("drawerunit: widthMm too small for slides and drawer boxes");if(i.fingerPull&&i.frontStyle!=="slab")throw new Error('drawerunit: fingerPull is routed into slab fronts \u2014 set frontStyle to "slab"');let n=i.columnCount??1;if(!Number.isInteger(n)||n<1||n>4)throw new Error("drawerunit: columnCount must be an integer between 1 and 4");if((i.widthMm-2*i.stockThicknessMm-(n-1)*i.stockThicknessMm)/n<=2*13+50)throw new Error("drawerunit: too many columns for the width \u2014 drawer boxes need room for slides");if(i.insideBevelMm){if(i.insideBevelMm<0||i.insideBevelMm>8)throw new Error("drawerunit: insideBevelMm must be between 0 and 8");if(i.frontMount!=="inset")throw new Error('drawerunit: insideBevelMm is an inset-front detail \u2014 set frontMount to "inset"')}if(i.openDrawer){if(!Number.isInteger(i.openDrawer)||i.openDrawer<0||i.openDrawer>i.drawerCount)throw new Error("drawerunit: openDrawer must be a row number between 0 (closed) and drawerCount");let r=i.openColumn??1;if(!Number.isInteger(r)||r<1||r>n)throw new Error("drawerunit: openColumn must be between 1 and columnCount")}break}case"endtable":{if(e(i.widthMm,"widthMm"),e(i.depthMm,"depthMm"),e(i.heightMm,"heightMm"),e(i.stockThicknessMm,"stockThicknessMm"),e(i.drawerHeightMm,"drawerHeightMm"),e(i.boxStockThicknessMm,"boxStockThicknessMm"),i.drawerHeightMm>i.heightMm*.5)throw new Error("endtable: drawerHeightMm too tall for the case");if(i.widthMm<=2*i.stockThicknessMm+2*13+50)throw new Error("endtable: widthMm too small for slides and a drawer box");if(i.heightMm<=i.drawerHeightMm+i.bottomShelfLiftMm+3*i.stockThicknessMm+120)throw new Error("endtable: not enough height for the drawer bay and shelves");break}}}var ts=1.5875;function ko(i){switch(yu(i),i.kind){case"table":return LM(i);case"bookshelf":return NM(i);case"cabinet":return FM(i);case"drawerbox":return BM(i);case"door":case"drawerfront":return kM(i);case"drawerunit":return HM(i);case"endtable":return zM(i)}}function LM(i){let e=[],{widthMm:t,depthMm:n,heightMm:s}=i,r=s-i.topThicknessMm,o=i.legThicknessMm;e.push({name:"Tabletop",shape:"box",sizeMm:[t,i.topThicknessMm,n],positionMm:[0,s-i.topThicknessMm/2,0],role:"surface",grainAxis:"x"});let a=i.legStyle==="round"?"cylinder":i.legStyle==="tapered"?"taperedLeg":"box",l=t/2-i.legInsetMm-o/2,c=n/2-i.legInsetMm-o/2;for(let[h,u]of[[1,1],[1,-1],[-1,1],[-1,-1]])e.push({name:"Leg",shape:a,sizeMm:[o,r,o],positionMm:[h*l,r/2,u*c],role:"structure",grainAxis:"y"});if(i.apron){let u=s-i.topThicknessMm-i.apronHeightMm/2,f=t-2*i.legInsetMm-2*o,d=n-2*i.legInsetMm-2*o;for(let p of[1,-1])e.push({name:"Apron rail (long)",shape:"box",sizeMm:[f,i.apronHeightMm,22],positionMm:[0,u,p*(c+o/2-22/2)],role:"structure",grainAxis:"x"});for(let p of[1,-1])e.push({name:"Apron rail (short)",shape:"box",sizeMm:[22,i.apronHeightMm,d],positionMm:[p*(l+o/2-22/2),u,0],role:"structure",grainAxis:"z"})}return{spec:i,parts:e,overallMm:[t,s,n]}}function NM(i){let e=[],{widthMm:t,heightMm:n,depthMm:s,stockThicknessMm:r}=i,o=i.backPanel?6:0,a=s-o;for(let f of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,n,a],positionMm:[f*(t/2-r/2),n/2,o/2],role:"structure",grainAxis:"y"});let l=t-2*r;e.push({name:"Top panel",shape:"box",sizeMm:[l,r,a],positionMm:[0,n-r/2,o/2],role:"structure",grainAxis:"x"}),e.push({name:"Bottom panel",shape:"box",sizeMm:[l,r,a],positionMm:[0,r/2,o/2],role:"structure",grainAxis:"x"});let c=n-2*r,h=i.shelfCount+1,u=(c-i.shelfCount*r)/h;for(let f=1;f<=i.shelfCount;f++){let d=r+f*u+(f-.5)*r;e.push({name:"Shelf",shape:"box",sizeMm:[l,r,a-20],positionMm:[0,d,o/2+10],role:"surface",grainAxis:"x"})}return i.backPanel&&e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t,n,o],positionMm:[0,n/2,-s/2+o/2],role:"panel",grainAxis:"y"}),{spec:i,parts:e,overallMm:[t,n,s]}}function FM(i){let e=[],{widthMm:t,heightMm:n,depthMm:s,stockThicknessMm:r}=i,o=i.legHeightMm,a=n-o,l=6,c=18,h=s-l-c,u=(l-c)/2;for(let v of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,a,h],positionMm:[v*(t/2-r/2),o+a/2,u],role:"structure",grainAxis:"y"});let f=t-2*r,d=20;e.push({name:"Top",shape:"box",sizeMm:[t+2*d,r,s+d],positionMm:[0,n+r/2,d/2],role:"surface",grainAxis:"x"}),e.push({name:"Bottom panel",shape:"box",sizeMm:[f,r,h],positionMm:[0,o+r/2,u],role:"structure",grainAxis:"x"}),e.push({name:"Top stretcher",shape:"box",sizeMm:[f,r,h],positionMm:[0,o+a-r/2,u],role:"structure",grainAxis:"x"}),e.push({name:"Interior shelf",shape:"box",sizeMm:[f,r,h-20],positionMm:[0,o+a/2,u+10],role:"surface",grainAxis:"x"}),e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t,a,l],positionMm:[0,o+a/2,-s/2+l/2],role:"panel",grainAxis:"x"});let p=3,x=(t-p*(i.doorCount+1))/i.doorCount,m=a-2*p,g=s/2-c/2;for(let v=0;v<i.doorCount;v++){let y=-t/2+p+x/2+v*(x+p);e.push({name:"Door",shape:"box",sizeMm:[x,m,c],positionMm:[y,o+p+m/2,g],role:"panel",grainAxis:"y"});let _=y<=0?1:-1;e.push({name:"Handle",shape:"cylinder",sizeMm:[12,110,12],positionMm:[y+_*(x/2-35),o+a*.55,g+c/2+18],role:"hardware",grainAxis:"y"})}if(o>0)for(let[_,S]of[[1,1],[1,-1],[-1,1],[-1,-1]])e.push({name:"Leg",shape:"taperedLeg",sizeMm:[35,o,35],positionMm:[_*(t/2-25-35/2),o/2,S*(s/2-25-35/2)],role:"structure",grainAxis:"y"});return{spec:i,parts:e,overallMm:[t+2*d,n+r,s+d]}}var UM=12.7,OM=34.925;function Vp(i){return{lengthMm:i??OM,heightMm:UM}}function BM(i){let e=[],{widthMm:t,depthMm:n,heightMm:s,stockThicknessMm:r}=i,o=i.scoopedSides===!0,a=i.frontHeightMm!=null?Math.max(r+20,Math.min(s,i.frontHeightMm)):o?Math.max(r+20,Math.round(s*.42)):s,l=a<s-.01,c=l?o?i.scoopLengthMm??Math.round((n-2*r)*.45):0:void 0,h=i.joinery==="halfblind",u=i.joinery==="dovetail"||i.joinery==="boxjoint",f=1.5875,d=i.scoop?{widthMm:Math.min(142,t*.38),depthMm:Math.min(19.05,a*.4)}:void 0,p={pinCount:i.dovetailPinCount,toolDiameterMm:i.dovetailToolDiameterMm,edgePins:!0},x=u?i.joinery:"dovetail";for(let m of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[r,s,h?n-2*f:n],positionMm:[m*(t/2-r/2),s/2,0],role:"structure",grainAxis:"z",joinery:u?{type:x,role:"tails",matingThicknessMm:r,...p}:h?{type:"dovetail",role:"tails",matingThicknessMm:r,frontLipMm:f,backLipMm:f,...p}:void 0,slopedTop:l?{frontHeightMm:a,backHeightMm:s,scoopLengthMm:c}:void 0});for(let m of[1,-1]){let g=m>0,v=g?a:s;e.push({name:g?"Drawer front (box)":"Drawer back (box)",shape:"box",sizeMm:[i.joinery==="dado"?t-2*r:t,v,r],positionMm:[0,v/2,m*(n/2-r/2)],role:"structure",grainAxis:"x",joinery:u?{type:x,role:"pins",matingThicknessMm:r,pinsOuterSign:m,...p}:h?{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:m,lipMm:f,...p}:void 0,scoop:g?d:void 0,backNotch:m<0&&i.undermountNotches?Vp(i.undermountNotchLengthMm):void 0})}return e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[t-2*r+12,i.bottomThicknessMm,n-2*r+12],positionMm:[0,12+i.bottomThicknessMm/2,0],role:"panel",grainAxis:"x"}),{spec:i,parts:e,overallMm:[t,s,n]}}function Gp(i,e){let{style:t,widthMm:n,heightMm:s,thicknessMm:r,railStileWidthMm:o}=e,{centerXMm:a,bottomYMm:l,centerZMm:c,namePrefix:h}=e,u=e.edgeProfile&&e.edgeProfile!=="square"?e.edgeProfile:void 0,f=e.outerEdgeProfile&&e.outerEdgeProfile!=="square"?e.outerEdgeProfile:void 0,d=e.frameJoint==="miter";if(t==="slab"){i.push({name:`${h}`,shape:"box",sizeMm:[n,s,r],positionMm:[a,l+s/2,c],role:"panel",grainAxis:e.slabGrain,fingerPullTop:e.fingerPull||void 0,edgeProfile:f?{outer:f,axis:"slab"}:void 0});return}for(let m of[1,-1])i.push({name:`${h} stile`,shape:"box",sizeMm:[o,s,r],positionMm:[a+m*(n/2-o/2),l+s/2,c],role:"structure",grainAxis:"y",edgeProfile:{inner:u,outer:f,innerSide:m>0?"x-":"x+",axis:"y",innerInsetMm:0,miterEnds:d,stickGroove:!d}});for(let m of[0,1])i.push({name:`${h} rail`,shape:"box",sizeMm:[d?n:n-2*o+20,o,r],positionMm:[a,l+(m?s-o/2:o/2),c],role:"structure",grainAxis:"x",edgeProfile:{inner:u,outer:f,innerSide:m?"y-":"y+",axis:"x",innerInsetMm:0,miterEnds:d,copeTenonMm:d?void 0:10}});if(e.glassPanel){i.push({name:`${h} glass`,shape:"box",sizeMm:[n-2*o+24,s-2*o+24,4],positionMm:[a,l+s/2,c+r/2-10],role:"glass",grainAxis:e.slabGrain,frameRecess:{overlapMm:12,reachMm:16}});return}let p=e.panelThicknessMm,x=t==="raised";i.push({name:`${h} panel`,shape:"box",sizeMm:[n-2*o+20,s-2*o+20,p],positionMm:[a,l+s/2,x?c+(r-p)/2:c+r/2-6-p/2],role:"panel",grainAxis:e.slabGrain,frameRecess:{overlapMm:10,reachMm:x?14:20},raisedPanel:x?{profile:e.raiseProfile??"cove",raiseWidthMm:e.raiseWidthMm??38,tongueThicknessMm:6}:void 0})}function kM(i){let e=[];return Gp(e,{style:i.style,widthMm:i.widthMm,heightMm:i.heightMm,thicknessMm:i.thicknessMm,railStileWidthMm:i.railStileWidthMm,panelThicknessMm:i.panelThicknessMm,raiseProfile:i.raiseProfile,raiseWidthMm:i.raiseWidthMm,edgeProfile:i.edgeProfile,outerEdgeProfile:i.outerEdgeProfile,frameJoint:i.frameJoint,glassPanel:i.kind==="door"?i.glassPanel:void 0,fingerPull:i.kind==="drawerfront"?i.fingerPull:void 0,centerXMm:0,bottomYMm:0,centerZMm:0,namePrefix:i.kind==="door"?"Door":"Front",slabGrain:i.kind==="door"?"y":"x"}),{spec:i,parts:e,overallMm:[i.widthMm,i.heightMm,i.thicknessMm]}}function zM(i){let e=[],{widthMm:t,depthMm:n,heightMm:s,stockThicknessMm:r}=i,o=2,a=19,l=13,c=s-r;for(let w of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,s,n],positionMm:[w*(t/2-r/2),s/2,0],role:"structure",grainAxis:"y",joinery:{type:"dovetail",role:"tails",matingThicknessMm:r,orient:"case",singleEnd:!0}});e.push({name:"Top",shape:"box",sizeMm:[t,r,n],positionMm:[0,s-r/2,0],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:1,orient:"case"}});let h=t-2*r,u=i.drawerHeightMm+2*o,f=n-10,d=c-u,p=(i.bottomShelfLiftMm+r+d)/2;for(let[w,T]of[["Middle shelf",p],["Bottom shelf",i.bottomShelfLiftMm+r/2]])e.push({name:w,shape:"box",sizeMm:[h,r,f],positionMm:[0,T,-5],role:"structure",grainAxis:"x"});e.push({name:"Rear rail",shape:"box",sizeMm:[h,60,r],positionMm:[0,c-30,-(n/2-r/2)],role:"structure",grainAxis:"x"});let x=Math.max(0,i.openMm??0);e.push({name:"Drawer front",shape:"box",sizeMm:[h-2*o,i.drawerHeightMm,a],positionMm:[0,d+o+i.drawerHeightMm/2,n/2-a/2+x],role:"panel",grainAxis:"x"});let m=i.boxStockThicknessMm,g=h-2*l,v=Math.max(150,Math.floor((n-60)/50)*50),y=Math.max(60,u-25),_=d+10,S=n/2-a-v/2-5+x;for(let w of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[m,y,v-2*ts],positionMm:[w*(g/2-m/2),_+y/2,S],role:"structure",grainAxis:"z",joinery:{type:"dovetail",role:"tails",matingThicknessMm:m,frontLipMm:ts,backLipMm:ts,edgePins:!0}});for(let w of[1,-1])e.push({name:w>0?"Drawer box front":"Drawer box back",shape:"box",sizeMm:[g,y,m],positionMm:[0,_+y/2,S+w*(v/2-m/2)],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:m,pinsOuterSign:w,lipMm:ts,edgePins:!0}});return e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[g-2*m+12,6,v-2*m+12],positionMm:[0,_+12+3,S],role:"panel",grainAxis:"x"}),{spec:i,parts:e,overallMm:[t,s,n]}}function HM(i){let e=[],{widthMm:t,heightMm:n,depthMm:s,stockThicknessMm:r}=i,o=6,a=19,l=i.frontMount==="inset",c=l?2:3,h=13,u=l?s:s-a,f=s/2,d=l?0:-a/2,p=6.35,x=u-o-p,m=i.caseJoinery==="halfblind",g=1.5875,v=l?i.insideBevelMm??0:0;for(let Y of[1,-1])e.push({name:"Side panel",shape:"box",sizeMm:[r,m?n-2*g:n,u],positionMm:[Y*(t/2-r/2),n/2,d],role:"structure",grainAxis:"y",joinery:{type:"dovetail",role:"tails",matingThicknessMm:r,frontLipMm:m?g:void 0,frontBevelMm:v||void 0,bevelInnerSign:-Y,orient:"case"}});let y=t-2*r;for(let Y of[0,1])e.push({name:Y?"Top panel":"Bottom panel",shape:"box",sizeMm:[t,r,u],positionMm:[0,Y?n-r/2:r/2,d],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:r,pinsOuterSign:Y?1:-1,lipMm:m?g:void 0,frontBevelMm:v||void 0,orient:"case"}});e.push({name:"Back panel",materialHint:"ply",shape:"box",sizeMm:[t-2*r+20,n-2*r+20,o],positionMm:[0,n/2,d-u/2+p+o/2],role:"panel",grainAxis:"y"});let _=i.drawerCount,S=i.slideType==="undermount",w=i.boxStockThicknessMm,T=Math.min(x-25,Math.floor((x-25)/50)*50),R=S?16:10,M=Math.max(1,i.columnCount??1),b=(i.columnDivider??"setback")==="setback",A=(y-(M-1)*r)/M;for(let Y=1;Y<M;Y++){let ne=-t/2+r+Y*(A+r)-r/2;e.push({name:"Column divider",shape:"box",sizeMm:[r,n-2*r,l&&b?u-a:u],positionMm:[ne,n/2,d-(l&&b?a/2:0)],role:"structure",grainAxis:"y",frontBevel:v&&!b?{bevelMm:v,sides:["x+","x-"]}:void 0})}let N=A-2*(S?5:h),I=l&&i.dividerRails?20:0,F=n-2*r,B=l?(F-(_-1)*I)/_:(n-4-3*(_-1))/_,O=(t-4-3*(M-1))/M,U=l?B-2*c:B,V=s/2-a/2-v;for(let Y=0;Y<M;Y++){let ne=-t/2+r+Y*(A+r),re=ne+A,ie=(ne+re)/2,ue=l?Y===0||!b?ne+c:ne-r/2+c/2:0,Le=l?Y===M-1||!b?re-c:re+r/2-c/2:0,Me=l?Le-ue:O,Z=l?(ue+Le)/2:-t/2+2+O/2+Y*(O+3);for(let q=0;q<_;q++){let le=l?r+q*(B+I):2+q*(B+3),me=le+(l?c:0),Oe=i.openDrawer===q+1&&(i.openColumn??1)===Y+1?Math.min(i.openAmountMm??T*.6,T-60):0;I>0&&q>0&&e.push({name:"Divider rail",shape:"box",sizeMm:[A,I,a],positionMm:[ie,le-I/2,f-a/2],role:"structure",grainAxis:"x",frontBevel:v?{bevelMm:v,sides:["y+","y-"]}:void 0}),Gp(e,{style:i.frontStyle,widthMm:Me,heightMm:U,thicknessMm:a,railStileWidthMm:50,panelThicknessMm:i.frontStyle==="raised"?a:6,raiseProfile:i.raiseProfile,raiseWidthMm:32,edgeProfile:i.edgeProfile,outerEdgeProfile:i.outerEdgeProfile,frameJoint:i.frameJoint,fingerPull:i.fingerPull,centerXMm:Z,bottomYMm:me,centerZMm:V+Oe,namePrefix:"Drawer front",slabGrain:"x"});let Te=le+R,ve=Math.max(60,B-(S?38:30)),Q=s/2-v-a-T/2-5+Oe;for(let ee of[1,-1])e.push({name:"Drawer side",shape:"box",sizeMm:[w,ve,T-2*ts],positionMm:[ie+ee*(N/2-w/2),Te+ve/2,Q],role:"structure",grainAxis:"z",joinery:{type:"dovetail",role:"tails",matingThicknessMm:w,frontLipMm:ts,backLipMm:ts,edgePins:!0}});for(let ee of[1,-1])e.push({name:ee>0?"Drawer box front":"Drawer box back",shape:"box",sizeMm:[N,ve,w],positionMm:[ie,Te+ve/2,Q+ee*(T/2-w/2)],role:"structure",grainAxis:"x",joinery:{type:"dovetail",role:"pins",matingThicknessMm:w,pinsOuterSign:ee,lipMm:ts,edgePins:!0},backNotch:ee<0&&S?Vp():void 0});e.push({name:"Drawer bottom",materialHint:"ply",shape:"box",sizeMm:[N-2*w+12,6,T-2*w+12],positionMm:[ie,Te+12+3,Q],role:"panel",grainAxis:"x"})}}return{spec:i,parts:e,overallMm:[t,n,s]}}var VM=25.4;function GM(i){return i*25.4}function Wp(i){return i/25.4}function ns(i,e=16){let t=Wp(Math.abs(i)),n=Math.floor(t),s=Math.round((t-n)*e),r=e;for(s===r&&(n+=1,s=0);s>0&&s%2===0&&r%2===0;)s/=2,r/=2;let o=i<0?"-":"";return s===0?`${o}${n}"`:n===0?`${o}${s}/${r}"`:`${o}${n}-${s}/${r}"`}function Mu(i){let e=ko(i),t=WM(e),[n,s,r]=e.overallMm;return{title:i.name??`Custom ${i.kind}`,overview:ZM(e),overallDimensionsMm:{width:n,height:s,depth:r},overallDimensionsIn:{width:ns(n),height:ns(s),depth:ns(r)},cutList:t,hardware:YM(e),tools:jM(e),steps:KM(e),boardFeet:qM(e),estimatedHours:$M(e)}}function WM(i){let e=new Map;for(let t of i.parts){if(t.role==="hardware")continue;let n=XM(t),s=`${t.name}|${n.join("x")}`,r=e.get(s);r?r.quantity+=1:e.set(s,{part:t.name,quantity:1,lengthMm:n[0],widthMm:n[1],thicknessMm:n[2],lengthIn:ns(n[0]),widthIn:ns(n[1]),thicknessIn:ns(n[2]),notes:t.role==="glass"?"Glass \u2014 order tempered from supplier":t.fingerPullTop?`Finger-pull channel routed along the top edge (Freeborn 57-024 style)${t.edgeProfile?.outer?`; ${t.edgeProfile.outer} door-edge detail, sides and bottom`:""}`:t.scoop?`Finger scoop ${Math.round(t.scoop.widthMm)} \xD7 ${Math.round(t.scoop.depthMm)}mm in top edge`:t.raisedPanel?`Raised panel \u2014 ${t.raisedPanel.profile} profile, ${t.raisedPanel.raiseWidthMm}mm raise`:t.edgeProfile?[t.edgeProfile.miterEnds&&"45\xB0 mitered ends (long-point length)",t.edgeProfile.inner&&`${t.edgeProfile.inner} pattern, inner edge${t.edgeProfile.miterEnds?"":" (cope & pattern T&G)"}`,t.edgeProfile.copeTenonMm&&`coped ends \u2014 length includes ${t.edgeProfile.copeTenonMm}mm stub tenons`,t.edgeProfile.outer&&`${t.edgeProfile.outer} door-edge detail, outer edge`].filter(Boolean).join("; "):t.shape==="taperedLeg"?"Taper to 60% at the foot":t.shape==="cylinder"?"Turned round":void 0})}return[...e.values()].sort((t,n)=>n.lengthMm*n.widthMm-t.lengthMm*t.widthMm)}function XM(i){let[e,t,n]=i.sizeMm,s={x:[e,n,t],y:[t,e,n],z:[n,e,t]},[r,o,a]=s[i.grainAxis];return[vu(r),vu(Math.max(o,a)),vu(Math.min(o,a))]}function qM(i){let e=0;for(let n of i.parts){if(n.role==="hardware"||n.role==="glass")continue;let[s,r,o]=n.sizeMm;Math.min(s,r,o)<=6||(e+=s*r*o)}let t=e/16387.064;return Math.round(t/144*1.2*10)/10}function YM(i){let e=i.spec,t=[];switch(e.kind){case"table":t.push({item:"Figure-8 tabletop fasteners",quantity:8}),e.apron?(t.push({item:"Corner brackets with lag screws",quantity:4}),t.push({item:"8mm \xD7 40mm dowels (apron-to-leg joints)",quantity:16})):t.push({item:"Threaded leg-mounting plates",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break;case"bookshelf":{t.push({item:"8mm \xD7 40mm dowels or confirmat screws",quantity:16}),e.shelfCount>0&&t.push({item:"5mm shelf pins",quantity:e.shelfCount*4}),e.backPanel&&t.push({item:"16mm panel nails or staples",quantity:24}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"cabinet":{t.push({item:"Concealed euro hinges (pair per door)",quantity:e.doorCount*2}),t.push({item:"Door handles",quantity:e.doorCount}),t.push({item:"8mm \xD7 40mm dowels or confirmat screws",quantity:20}),t.push({item:"5mm shelf pins",quantity:4}),t.push({item:"16mm panel nails or staples",quantity:24}),e.legHeightMm>0&&t.push({item:"Threaded leg-mounting plates",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerbox":{e.joinery==="dado"&&t.push({item:"16mm brads (for dado joints)",quantity:16}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"door":{e.hingeBoring&&t.push({item:"Concealed euro hinges (pair)",quantity:2}),e.glassPanel&&e.style!=="slab"?(t.push({item:"Glass retainer strips (or glazing clips)",quantity:4}),t.push({item:"Clear silicone (small tube)",quantity:1})):e.style!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:8}),e.frameJoint==="miter"&&t.push({item:"Splines or biscuits (miter reinforcement)",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerfront":{t.push({item:"Drawer pull",quantity:1}),t.push({item:"M4 \xD7 25mm pull screws",quantity:2}),e.style!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:8}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"drawerunit":{t.push({item:e.slideType==="undermount"?"Undermount soft-close slides (pair per drawer)":"Full-extension side-mount slides (pair per drawer)",quantity:e.drawerCount*(e.columnCount??1)}),t.push({item:"16mm panel nails or staples (back panel)",quantity:24}),t.push({item:"4 \xD7 30mm screws (front adjustment, 4 per drawer)",quantity:e.drawerCount*(e.columnCount??1)*4}),e.frontStyle!=="slab"&&t.push({item:"Panel spacers (space balls)",quantity:e.drawerCount*(e.columnCount??1)*8}),t.push({item:"Wood glue (250ml)",quantity:1});break}case"endtable":{t.push({item:"Full-extension side-mount slides (pair)",quantity:1}),t.push({item:"4 \xD7 30mm screws (front adjustment)",quantity:4}),t.push({item:"Wood glue (250ml)",quantity:1});break}}return t}function jM(i){let e=["Table saw or track saw","Drill/driver with brad-point bits","Random-orbit sander (120/180/240 grit)","Clamps (4+ bar or pipe clamps)","Square, tape measure, marking gauge"],t=i.spec;if(t.kind==="table"&&(e.push("Doweling jig (or domino/mortiser for the apron joinery)"),t.legStyle==="round"&&e.push("Lathe (for turned legs)"),t.legStyle==="tapered"&&e.push("Tapering jig for the table saw")),(t.kind==="bookshelf"||t.kind==="cabinet")&&(e.push("Shelf-pin drilling jig (5mm)"),e.push("Router with rabbeting bit (for the back panel)")),t.kind==="cabinet"&&e.push("35mm Forstner bit (hinge cups)"),t.kind==="drawerbox"&&(t.joinery==="dovetail"&&e.push("Dovetail jig with router (through template)"),t.joinery==="halfblind"&&e.push("Dovetail jig with router (half-blind template)"),t.joinery==="boxjoint"&&e.push("Box-joint jig for the table saw"),t.joinery==="dado"&&e.push("Dado stack or straight router bit"),t.scoop&&e.push("Scoop template with flush-trim bit (or spindle sander)"),e.push("6mm slot cutter or dado (bottom groove)")),t.kind==="door"||t.kind==="drawerfront"){if(t.style!=="slab"){let n=t.edgeProfile&&t.edgeProfile!=="square";t.frameJoint==="miter"?(e.push("Miter saw or sled with length stops (45\xB0 frame joints)"),n&&e.push(`Stick cutter for the ${t.edgeProfile} pattern (run before mitering)`)):e.push(n?`Cope & pattern cutter set (${t.edgeProfile} pattern, 1/4" \xD7 3/8" T&G)`:"Router table with rail-and-stile bits (or dado stack for grooves/tenons)")}t.style==="raised"&&e.push(`Shaper or router panel raiser (${t.raiseProfile??"cove"} profile insert cutter)`),t.outerEdgeProfile&&t.outerEdgeProfile!=="square"&&e.push(`Door-edge detail cutter (${t.outerEdgeProfile})`),t.kind==="door"&&t.hingeBoring&&e.push("35mm Forstner bit (hinge cups)")}return t.kind==="endtable"&&(e.push("Dovetail jig with router (case and drawer box)"),e.push("Dado stack or router (shelf dados)"),e.push("Drawer-slide mounting jig")),t.kind==="drawerunit"&&(e.push("Drawer-slide mounting jig"),e.push("Dovetail jig with router (carcass and drawer boxes)"),t.frontStyle!=="slab"&&e.push("Router table with rail-and-stile bits (fronts)"),t.frontStyle==="raised"&&e.push(`Shaper or router panel raiser (${t.raiseProfile??"cove"} profile insert cutter)`)),e}function ZM(i){let[e,t,n]=i.overallMm,s=`${Math.round(e)} \xD7 ${Math.round(n)} \xD7 ${Math.round(t)}mm (W\xD7D\xD7H)`;switch(i.spec.kind){case"table":return`A ${s} table with ${i.spec.legStyle} legs${i.spec.apron?" and a glued apron frame for rigidity":""}. Build order: legs and apron first, then attach the top with movement-tolerant fasteners.`;case"bookshelf":return`A ${s} bookshelf with ${i.spec.shelfCount} adjustable shelves${i.spec.backPanel?" and a back panel that squares the carcass":""}. Build order: drill shelf-pin holes flat, assemble the carcass, then fit the back.`;case"cabinet":return`A ${s} ${i.spec.doorCount}-door cabinet on ${i.spec.legHeightMm>0?"tapered legs":"a plinth"}. Build order: carcass, back, top, then hang and align the doors last.`;case"drawerbox":{let r=i.spec.joinery,o=r==="dovetail"?"through-dovetailed":r==="halfblind"?"half-blind dovetailed (clean show face)":r==="boxjoint"?"box-jointed":"dadoed";return`A ${s} drawer box in ${i.spec.stockThicknessMm}mm stock with ${o} corners${i.spec.scoop?", a finger scoop in the front":""} and a ${i.spec.bottomThicknessMm}mm bottom captured in a groove. Cut the joinery before grooving so the groove hides inside a tail.`}case"door":return i.spec.style==="shaker"?`A ${s} five-piece shaker door: two stiles, two rails, and a floating center panel. Glue the frame only \u2014 the panel must float to allow seasonal movement.`:`A ${s} slab door. Flatness is everything: pick stable stock, finish both faces equally, and store it flat.`;case"drawerfront":return i.spec.style==="shaker"?`A ${s} five-piece shaker drawer front with a floating panel. Same construction as a door, sized for drawer proportions.`:`A ${s} slab drawer front with horizontal grain.`;case"drawerunit":return`A ${s} bank of ${i.spec.drawerCount} drawers on full-extension slides with ${i.spec.frontStyle} overlay fronts. Build order: carcass, slides, boxes, then fronts aligned last with adjustment screws.`;case"endtable":return`A ${s} coastal end table: a dovetailed case (tails on the floor-running sides, pins on the top), one inset drawer on side-mount slides, and two open shelves. Build order: case dovetails, shelf dados, glue-up, then the drawer.`}}function KM(i){let e=i.spec,t=[{title:"Mill and cut stock",detail:"Joint and plane stock flat and square, then cut every part to the dimensions in the cut list. Label each part in pencil as it comes off the saw."}];switch(e.kind){case"table":{e.legStyle==="tapered"&&t.push({title:"Taper the legs",detail:`Taper the two inside faces of each ${e.legThicknessMm}mm leg to ~60% at the foot using a tapering jig. Stop the taper ${e.apron?e.apronHeightMm+20:80}mm below the top so the joinery area stays square.`}),e.legStyle==="round"&&t.push({title:"Turn the legs",detail:`Turn each leg blank to a ${e.legThicknessMm}mm diameter cylinder, leaving the top 100mm square if you prefer stronger apron joinery.`}),e.apron&&t.push({title:"Join aprons to legs",detail:"Drill two 8mm dowel holes per joint (or cut mortise-and-tenon). Dry-fit the full base, check the diagonals for square, then glue and clamp in two stages: short rails first, then the long rails connecting both ends."},{title:"Reinforce the corners",detail:"Install a corner bracket at each leg, drawing the leg tight against both rails with the lag screw."}),t.push({title:"Glue up the top",detail:`Edge-glue boards to make the ${e.widthMm} \xD7 ${e.depthMm}mm top, alternating growth rings. Flatten with a sander or hand plane, then trim to final size and break the edges with a 2mm chamfer.`},{title:"Attach the top",detail:"Center the base upside-down on the top and fasten with figure-8 fasteners so the solid top can expand and contract across the grain."});break}case"bookshelf":{t.push({title:"Drill shelf-pin holes",detail:`With the side panels flat on the bench, drill two columns of 5mm shelf-pin holes (32mm spacing) on each side panel${e.backPanel?", then rout a 6mm rabbet along the back inside edge for the back panel":""}.`},{title:"Assemble the carcass",detail:"Join the top and bottom panels between the sides with glue and dowels (or confirmat screws). Clamp and compare the diagonals \u2014 they must match before the glue sets."}),e.backPanel&&t.push({title:"Fit the back panel",detail:"Slide the back into its rabbets while the carcass is still clamped; pin it every ~150mm. The back is what keeps the case square, so re-check the diagonals before nailing."}),t.push({title:"Finish and load",detail:`Sand to 180 grit, ease all edges, and apply finish. Insert the shelf pins and fit the ${e.shelfCount} shelves.`});break}case"drawerbox":{let n=e.joinery;t.push({title:"Cut the corner joinery",detail:n==="dovetail"?"Rout through dovetails on all four corners with the jig; test-fit a corner in scrap first and dial in the bit depth until the joint closes hand-tight.":n==="halfblind"?'Rout half-blind dovetails with the jig \u2014 tails in the sides, blind sockets stopped 1/16" shy of the front face so the show face stays clean. The back corners are through-dovetailed. Test-fit in scrap first.':n==="boxjoint"?"Cut box joints on all four corners at the table saw with the jig. The fit should need light mallet taps \u2014 too tight will split when glue swells the fingers.":"Cut a dado in each side to receive the front and back, sized for a snug push fit."},{title:"Groove for the bottom",detail:`Cut a ${e.bottomThicknessMm}mm groove 12mm up from the bottom edge on the inside of all four parts, positioned so it runs inside a ${n==="dado"?"dado":"tail"} \u2014 never through visible joinery.`},{title:"Assemble",detail:"Glue the corners, slide the bottom in dry (never glued \u2014 it floats), clamp, and compare diagonals before the glue sets. Wipe squeeze-out inside the box immediately."}),e.scoop&&t.push({title:"Cut the finger scoop",detail:"Before assembly, cut the scoop in the front\u2019s top edge with a template and flush-trim bit (or jigsaw + spindle sander), then ease the scoop edges thoroughly \u2014 fingers ride this edge every day."});break}case"door":case"drawerfront":{e.style!=="slab"?(e.frameJoint==="miter"?t.push({title:"Stick and miter the frame stock",detail:"Run the groove (and pattern profile, if any) along the inside edge of all frame stock, then miter both ends of every member at 45\xB0 \u2014 long-point lengths per the cut list, identical pairs cut against a stop."},{title:"Reinforce the miters",detail:"Slot each miter for a spline or biscuit \u2014 end-grain glue alone will not hold a door corner."}):t.push({title:"Mill rails and stiles",detail:`Cut stiles and rails to the cut list (${e.railStileWidthMm}mm wide), then cut the ${e.style==="raised"?6:e.panelThicknessMm}mm groove centered on every inside edge.`},{title:"Cut the rail tenons",detail:"Cope the rail ends (or cut stub tenons) to fill the stile grooves exactly \u2014 the shoulders set the frame square."}),e.style==="raised"&&t.push({title:"Raise the panel",detail:`Glue up the ${e.panelThicknessMm}mm panel blank, cut to the cut-list size, then raise all four edges with the ${e.raiseProfile??"cove"} cutter (${e.raiseWidthMm??38}mm raise) \u2014 end grain first, then long grain, sneaking up on a 6mm tongue that fits the groove.`}),e.kind==="door"&&e.glassPanel?t.push({title:"Glue the frame and rout the glass rabbet",detail:"Glue the frame without a panel, check the diagonals, then rout away the back side of the groove to leave an open rabbet. Square the rabbet corners with a chisel."},{title:"Fit the glass",detail:"After finishing, bed the tempered pane in the rabbet on a thin bead of clear silicone and fix the retainer strips with brads \u2014 never glue the glass hard."}):t.push({title:"Fit the panel and glue up",detail:"Cut the panel 1mm under groove depth all around, insert with panel spacers, and glue ONLY the frame joints. Clamp flat on a known-flat surface and check the diagonals."})):t.push({title:"Prepare the slab",detail:"Glue up (or cut) the slab to final size, then flatten both faces equally so internal stresses balance and the piece stays flat."}),e.kind==="door"&&e.hingeBoring&&t.push({title:"Bore for hinges",detail:"Drill the two 35mm hinge cups 12mm deep, centered 22.5mm from the hinge-side edge, ~80mm from each end."}),t.push({title:"Break the edges",detail:"Ease all arrises with a 1mm chamfer or light sanding \u2014 crisp but not sharp."});break}case"endtable":{t.push({title:"Dovetail the case",detail:"Cut the tails on the sides\u2019 top ends and the pins on the top panel \u2014 the pattern runs front to back. Dry-fit before moving on."},{title:"Dado the shelves and glue up",detail:"Cut stopped dados in the sides for the middle and bottom shelves, then glue the case square \u2014 check the diagonals while the rear rail goes in under the top."},{title:"Build and hang the drawer",detail:"Through-dovetail the drawer box, groove for the bottom, then mount the side slides level. Fit the inset front with an even 2mm reveal and fix it from inside."});break}case"drawerunit":{t.push({title:"Assemble the carcass",detail:e.caseJoinery==="halfblind"?'Dovetail the carcass together \u2014 tails on the sides, half-blind pins on the full-width top and bottom with 1/16" laps so the top and bottom faces stay clean. Glue up square against the back panel, then fasten the back.':"Dovetail the carcass together \u2014 tails on the sides, through pins on the full-width top and bottom. Glue up square against the back panel, then fasten the back."},{title:"Mount the slides",detail:`Lay out ${e.drawerCount*(e.columnCount??1)} slide positions with the jig and screw the cabinet members to the sides \u2014 identical heights left and right, or the drawers will rack.`},{title:"Build the drawer boxes",detail:"Build each box per the cut list (joinery, bottom groove, glue-up), then mount the drawer members of the slides centered on the box sides."},{title:"Fit the fronts",detail:e.frontMount==="inset"?"Fit each inset front to its opening with an even 2mm reveal all around \u2014 plane to fit, shimming off the divider rails, then fix from inside with the adjustment screws.":"With the boxes installed, attach each front using double-sided tape to position it, then fix from inside with the adjustment screws. Work bottom-up keeping an even 3mm reveal."});break}case"cabinet":{t.push({title:"Prepare the panels",detail:"Drill the shelf-pin holes in both side panels, rout the back-panel rabbets, and drill the 35mm hinge-cup holes in the doors (centered 22.5mm from the edge)."},{title:"Assemble the carcass",detail:"Join the bottom and top stretcher between the side panels with glue and dowels. Square the case against the back panel and fasten the back."},{title:"Attach the top and legs",detail:`Fasten the overhanging top from below through the stretcher${e.legHeightMm>0?`, then install the leg-mounting plates and thread on the four ${e.legHeightMm}mm legs`:""}.`},{title:"Hang the doors",detail:`Mount the euro hinges, hang the ${e.doorCount} doors, and adjust the hinge screws until the reveals are an even 3mm all around. Fit the handles last.`});break}}return t.push({title:"Final finish",detail:"Sand any glue squeeze-out, vacuum the piece, and apply three coats of hardwax oil or water-based polyurethane, sanding lightly at 320 grit between coats."}),t}function $M(i){let e=i.parts.filter(r=>r.role!=="hardware").length,s=({table:8,cabinet:12,bookshelf:6,drawerbox:2,door:3,drawerfront:2,drawerunit:10,endtable:7}[i.spec.kind]??6)+Math.round(e*.5);return{min:s,max:Math.round(s*1.8)}}function vu(i){return Math.round(i*10)/10}function rn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ge,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Xp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Xp(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Xp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Fe(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function bu(i,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xr||e===Fo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===xr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var cc=class extends $t{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Kn.extractUrlBase(e);o=Kn.resolveURL(c,this.path)}else o=Kn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Un(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kp){try{o[ot.KHR_BINARY_GLTF]=new Wu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new Au;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xu(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new qu;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new Yu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function JM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eu=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zi(h),c.distance=u;break;case"spot":c=new Fi(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Au=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Je))}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new G(a,a)}return Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Je)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},zu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Hu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Vu=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Gu=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Ie,m=new L,g=new At,v=new L(1,1,1),y=new $r(p.geometry,p.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,g,v));for(let _ in l)if(_==="_COLOR_0"){let S=l[_];y.instanceColor=new qi(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);xt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Kp="glTF",zo=12,qp={JSON:1313821514,BIN:5130562},Wu=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zo,r=new DataView(e,zo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===qp.JSON){let c=new Uint8Array(e,zo+o,a);this.content=n.decode(c)}else if(l===qp.BIN){let c=zo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Zu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Zu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=wr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,Qt,f)})})}},qu=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yu=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},hc=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,v=1-m,y=g-f+u;for(let _=0;_!==a;_++){let S=o[x+_+a],w=o[x+_+l]*h,T=o[p+_+a],R=o[p+_]*h;r[_]=v*S+y*w+m*T+g*R}return r}},QM=new At,ju=class extends hc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return QM.fromArray(r).normalize().toArray(r),r}},On={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yp={9728:Ct,9729:Ut,9984:gl,9985:pr,9986:As,9987:Jn},jp={33071:ln,33648:Wi,10497:Gt},Su={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eb={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function Ls(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ib(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sb(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=i.indices+":"+Tu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Tu(i.targets[n]);return e}function Tu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ku(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ob=new Ie,$u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new JM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ni(this.options.manager):this.textureLoader=new _o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ls(r,a,s),xi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Kn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Su[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Fe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Su[s.type],c=wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,y=t.cache.get(v);y||(x=new c(a,g*d,s.count*d/h),y=new sr(x,d/h),t.cache.add(v,y)),m=new rr(y,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Fe(x,l,p);if(s.sparse!==void 0){let g=Su.SCALAR,v=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new v(o[1],y,s.sparse.count*g),w=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Fe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=S.length;T<R;T++){let M=S[T];if(m.setX(M,w[T*l]),l>=2&&m.setY(M,w[T*l+1]),l>=3&&m.setZ(M,w[T*l+2]),l>=4&&m.setW(M,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Yp[f.magFilter]||Ut,h.minFilter=Yp[f.minFilter]||Jn,h.wrapS=jp[f.wrapS]||Gt,h.wrapT=jp[f.wrapT]||Gt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==Ut,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let m=new Ot(x);m.needsUpdate=!0,f(m)}),t.load(Kn.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),xi(u,o),u.userData.mimeType=o.mimeType||rb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new jn,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ln,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ss}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Qt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Je)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);let h=r.alphaMode||wu.OPAQUE;if(h===wu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new G(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==cn){let u=r.emissiveFactor;a.emissive=new Ae().setRGB(u[0],u[1],u[2],Qt)}return r.emissiveTexture!==void 0&&o!==cn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Je)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ls(s,u,r),u})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=sb(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Zp(new Ge,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?tb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,v=c[d];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new ys(x,v):new tt(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?g.geometry=bu(g.geometry,Fo):m.mode===On.TRIANGLE_FAN&&(g.geometry=bu(g.geometry,xr));else if(m.mode===On.LINES)g=new Yi(x,v);else if(m.mode===On.LINE_STRIP)g=new Ci(x,v);else if(m.mode===On.LINE_LOOP)g=new Jr(x,v);else if(m.mode===On.POINTS)g=new Pi(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ib(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),xi(g,r),m.extensions&&Ls(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ls(s,u[0],r),u[0];let f=new wt;r.extensions&&Ls(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Mt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new di(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vs(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let y=0,_=f.length;y<_;y++){let S=f[y],w=d[y],T=p[y],R=x[y],M=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let b=n._createAnimationTracks(S,w,T,R,M);if(b)for(let A=0;A<b.length;A++)g.push(b[A])}let v=new ws(r,void 0,g);return xi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ob)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ri:c.length>1?h=new wt:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&Ls(n,h,r),r.matrix!==void 0){let u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),xi(r,n),n.extensions&&Ls(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Bt||f instanceof Ot)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(is[r.path]){case is.weights:c=Nn;break;case is.rotation:c=Tn;break;case is.translation:case is.scale:c=Fn;break;default:switch(n.itemSize){case 1:c=Nn;break;case 2:case 3:default:c=Fn;break}break}let h=s.interpolation!==void 0?eb[s.interpolation]:gs,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let p=new c(l[f]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ku(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Tn?ju:hc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ab(i,e,t){let n=e.attributes,s=new Rt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=Ku(wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Ku(wr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Kt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Zp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Zu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),xi(i,e),ab(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nb(i,e.targets,t):i})}var lb=/^[og]\s*(.+)?/,cb=/^mtllib /,hb=/^usemtl /,ub=/^usemap /,$p=/\s+/,Jp=new L,Ju=new L,Qp=new L,em=new L,Bn=new L,uc=new Ae;function fb(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){let s=this.vertices,r=this.object.geometry.normals;Jp.fromArray(s,e),Ju.fromArray(s,t),Qp.fromArray(s,n),Bn.subVectors(Qp,Ju),em.subVectors(Jp,Ju),Bn.cross(em),Bn.normalize(),r.push(Bn.x,Bn.y,Bn.z),r.push(Bn.x,Bn.y,Bn.z),r.push(Bn.x,Bn.y,Bn.z)},addColor:function(e,t,n){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){let p=this.normals.length;u=this.parseNormalIndex(a,p),f=this.parseNormalIndex(l,p),d=this.parseNormalIndex(c,p),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(s!==void 0&&s!==""){let p=this.uvs.length;u=this.parseUVIndex(s,p),f=this.parseUVIndex(r,p),d=this.parseUVIndex(o,p),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}var fc=class extends $t{constructor(e){super(e),this.materials=null}load(e,t,n,s){let r=this,o=new Un(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new fb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),s=[];for(let a=0,l=n.length;a<l;a++){let c=n[a].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split($p);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(uc.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Je),t.colors.push(uc.r,uc.g,uc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=c.slice(1).trim().split($p),d=[];for(let x=0,m=f.length;x<m;x++){let g=f[x];if(g.length>0){let v=g.split("/");d.push(v)}}let p=d[0];for(let x=1,m=d.length-1;x<m;x++){let g=d[x],v=d[x+1];t.addFace(p[0],g[0],v[0],p[1],g[1],v[1],p[2],g[2],v[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),f=[],d=[];if(c.indexOf("/")===-1)f=u;else for(let p=0,x=u.length;p<x;p++){let m=u[p].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(f,d)}else if(h==="p"){let f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=lb.exec(c))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(hb.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(cb.test(c))t.materialLibraries.push(c.substring(7).trim());else if(ub.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){let f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new wt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){let c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",d=h.type==="Points",p=!1;if(h.vertices.length===0)continue;let x=new Ge;x.setAttribute("position",new je(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new je(h.normals,3)),h.colors.length>0&&(p=!0,x.setAttribute("color",new je(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new je(h.uvs,2));let m=[];for(let v=0,y=u.length;v<y;v++){let _=u[v],S=_.name+"_"+_.smooth+"_"+p,w=t.materials[S];if(this.materials!==null){if(w=this.materials.create(_.name),f&&w&&!(w instanceof Ln)){let T=new Ln;Bt.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(d&&w&&!(w instanceof jn)){let T=new jn({size:10,sizeAttenuation:!1});Bt.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(f?w=new Ln:d?w=new jn({size:1,sizeAttenuation:!1}):w=new ui,w.name=_.name,w.flatShading=!_.smooth,w.vertexColors=p,t.materials[S]=w),m.push(w)}let g;if(m.length>1){for(let v=0,y=u.length;v<y;v++){let _=u[v];x.addGroup(_.groupStart,_.groupCount,v)}f?g=new Yi(x,m):d?g=new Pi(x,m):g=new tt(x,m)}else f?g=new Yi(x,m[0]):d?g=new Pi(x,m[0]):g=new tt(x,m[0]);g.name=c.name,r.add(g)}else if(t.vertices.length>0){let a=new jn({size:1,sizeAttenuation:!1}),l=new Ge;l.setAttribute("position",new je(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new je(t.colors,3)),a.vertexColors=!0);let c=new Pi(l,a);r.add(c)}return r}};var kn=Uint8Array,Tr=Uint16Array,db=Int32Array,tm=new kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nm=new kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pb=new kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),im=function(i,e){for(var t=new Tr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new db(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},sm=im(tm,2),rm=sm.b,mb=sm.r;rm[28]=258,mb[258]=28;var om=im(nm,0),gb=om.b,mT=om.r,tf=new Tr(32768);for(ft=0;ft<32768;++ft)Ui=(ft&43690)>>1|(ft&21845)<<1,Ui=(Ui&52428)>>2|(Ui&13107)<<2,Ui=(Ui&61680)>>4|(Ui&3855)<<4,tf[ft]=((Ui&65280)>>8|(Ui&255)<<8)>>1;var Ui,ft,Ho=function(i,e,t){for(var n=i.length,s=0,r=new Tr(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Tr(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Tr(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[tf[u]>>l]=c}else for(a=new Tr(n),s=0;s<n;++s)i[s]&&(a[s]=tf[o[i[s]-1]++]>>15-i[s]);return a},Vo=new kn(288);for(ft=0;ft<144;++ft)Vo[ft]=8;var ft;for(ft=144;ft<256;++ft)Vo[ft]=9;var ft;for(ft=256;ft<280;++ft)Vo[ft]=7;var ft;for(ft=280;ft<288;++ft)Vo[ft]=8;var ft,am=new kn(32);for(ft=0;ft<32;++ft)am[ft]=5;var ft;var xb=Ho(Vo,9,1);var _b=Ho(am,5,1),Qu=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},ni=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ef=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},yb=function(i){return(i+7)/8|0},vb=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new kn(i.subarray(e,t))};var Mb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ii=function(i,e,t){var n=new Error(e||Mb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ii),!t)throw n;return n},bb=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new kn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new kn(s*3));var c=function(Oe){var Te=t.length;if(Oe>Te){var ve=new kn(Math.max(Te*2,Oe));ve.set(t),t=ve}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,p=e.d,x=e.m,m=e.n,g=s*8;do{if(!d){h=ni(i,u,1);var v=ni(i,u+1,3);if(u+=3,v)if(v==1)d=xb,p=_b,x=9,m=5;else if(v==2){var w=ni(i,u,31)+257,T=ni(i,u+10,15)+4,R=w+ni(i,u+5,31)+1;u+=14;for(var M=new kn(R),b=new kn(19),A=0;A<T;++A)b[pb[A]]=ni(i,u+A*3,7);u+=T*3;for(var N=Qu(b),I=(1<<N)-1,F=Ho(b,N,1),A=0;A<R;){var B=F[ni(i,u,I)];u+=B&15;var y=B>>4;if(y<16)M[A++]=y;else{var O=0,U=0;for(y==16?(U=3+ni(i,u,3),u+=2,O=M[A-1]):y==17?(U=3+ni(i,u,7),u+=3):y==18&&(U=11+ni(i,u,127),u+=7);U--;)M[A++]=O}}var V=M.subarray(0,w),Y=M.subarray(w);x=Qu(V),m=Qu(Y),d=Ho(V,x,1),p=Ho(Y,m,1)}else ii(1);else{var y=yb(u)+4,_=i[y-4]|i[y-3]<<8,S=y+_;if(S>s){l&&ii(0);break}a&&c(f+_),t.set(i.subarray(y,S),f),e.b=f+=_,e.p=u=S*8,e.f=h;continue}if(u>g){l&&ii(0);break}}a&&c(f+131072);for(var ne=(1<<x)-1,re=(1<<m)-1,ie=u;;ie=u){var O=d[ef(i,u)&ne],ue=O>>4;if(u+=O&15,u>g){l&&ii(0);break}if(O||ii(2),ue<256)t[f++]=ue;else if(ue==256){ie=u,d=null;break}else{var Le=ue-254;if(ue>264){var A=ue-257,Me=tm[A];Le=ni(i,u,(1<<Me)-1)+rm[A],u+=Me}var Z=p[ef(i,u)&re],q=Z>>4;Z||ii(3),u+=Z&15;var Y=gb[q];if(q>3){var Me=nm[q];Y+=ef(i,u)&(1<<Me)-1,u+=Me}if(u>g){l&&ii(0);break}a&&c(f+131072);var le=f+Le;if(f<Y){var me=r-Y,ce=Math.min(Y,le);for(me+f<0&&ii(3);f<ce;++f)t[f]=n[me+f]}for(;f<le;++f)t[f]=t[f-Y]}}e.l=d,e.p=ie,e.b=f,e.f=h,d&&(h=1,e.m=x,e.d=p,e.n=m)}while(!h);return f!=t.length&&o?vb(t,0,f):t.subarray(0,f)};var Sb=new kn(0);var wb=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&ii(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&ii(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function lm(i,e){return bb(i.subarray(wb(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Tb=typeof TextDecoder<"u"&&new TextDecoder,Eb=0;try{Tb.decode(Sb,{stream:!0}),Eb=1}catch{}function cm(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let s=i,r=n,o=Math.floor((s+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:s=o,o=Math.floor((s+r)/2);return o}function Rb(i,e,t,n){let s=[],r=[],o=[];s[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){let h=o[c+1],u=r[a-c],f=s[c]/(h+u);s[c]=l+h*f,l=u*f}s[a]=l}return s}function hm(i,e,t,n){let s=cm(i,n,e),r=Rb(s,n,i,e),o=new lt(0,0,0,0);for(let a=0;a<=i;++a){let l=t[s-i+a],c=r[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function Cb(i,e,t,n,s){let r=[];for(let u=0;u<=t;++u)r[u]=0;let o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);let a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;let l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-s[i+1-u],c[u]=s[i+u]-e;let f=0;for(let d=0;d<u;++d){let p=c[d+1],x=l[u-d];a[u][d]=p+x;let m=a[d][u-1]/a[u][d];a[d][u]=f+p*m,f=x*m}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,d=1,p=[];for(let x=0;x<=t;++x)p[x]=r.slice(0);p[0][0]=1;for(let x=1;x<=n;++x){let m=0,g=u-x,v=t-x;u>=x&&(p[d][0]=p[f][0]/a[v+1][g],m=p[d][0]*a[g][v]);let y=g>=-1?1:-g,_=u-1<=v?x-1:t-u;for(let w=y;w<=_;++w)p[d][w]=(p[f][w]-p[f][w-1])/a[v+1][g+w],m+=p[d][w]*a[g+w][v];u<=v&&(p[d][x]=-p[f][x-1]/a[v+1][u],m+=p[d][x]*a[u][v]),o[x][u]=m;let S=f;f=d,d=S}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function Pb(i,e,t,n,s){let r=s<i?s:i,o=[],a=cm(i,n,e),l=Cb(a,n,i,r,e),c=[];for(let h=0;h<t.length;++h){let u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=r;++h){let u=c[a-i].clone().multiplyScalar(l[h][0]);for(let f=1;f<=i;++f)u.add(c[a-i+f].clone().multiplyScalar(l[h][f]));o[h]=u}for(let h=r+1;h<=s+1;++h)o[h]=new lt(0,0,0);return o}function Ib(i,e){let t=1;for(let s=2;s<=i;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=i-e;++s)n*=s;return t/n}function Db(i){let e=i.length,t=[],n=[];for(let r=0;r<e;++r){let o=i[r];t[r]=new L(o.x,o.y,o.z),n[r]=o.w}let s=[];for(let r=0;r<e;++r){let o=t[r].clone();for(let a=1;a<=r;++a)o.sub(s[r-a].clone().multiplyScalar(Ib(r,a)*n[a]));s[r]=o.divideScalar(n[0])}return s}function um(i,e,t,n,s){let r=Pb(i,e,t,n,s);return Db(r)}var dc=class extends hn{constructor(e,t,n,s,r){super();let o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||o;for(let l=0;l<a;++l){let c=n[l];this.controlPoints[l]=new lt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new L){let n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=hm(this.degree,this.knots,this.controlPoints,s);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new L){let n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=um(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new lt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}};var st,Ht,dn,mc=class extends $t{constructor(e){super(e)}load(e,t,n,s){let r=this,o=r.path===""?Kn.extractUrlBase(e):r.path,a=new Un(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){if(Nb(e))st=new cf().parse(e);else{let s=pm(e);if(!Fb(s))throw new Error("THREE.FBXLoader: Unknown format.");if(fm(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+fm(s));st=new lf().parse(s)}let n=new Ni(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new rf(n,this.manager).parse(st)}},rf=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ht=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),r=new of().parse(s);return this.parseScene(s,r,n),dn}parseConnections(){let e=new Map;return"Connections"in st&&st.Connections.connections.forEach(function(n){let s=n[0],r=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});let a={ID:r,relationship:o};e.get(s).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let l={ID:s,relationship:o};e.get(r).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in st.Objects){let n=st.Objects.Video;for(let s in n){let r=n[s],o=parseInt(s);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){let a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){let c=this.parseImage(n[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(let n in e){let s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in st.Objects){let n=st.Objects.Texture;for(let s in n){let r=this.parseTexture(n[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let s=e.WrapModeU,r=e.WrapModeV,o=s!==void 0?s.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Gt:ln,n.wrapT=a===0?Gt:ln,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n=e.FileName.split(".").pop().toLowerCase(),s=this.manager.getHandler(`.${n}`);s===null&&(s=this.textureLoader);let r=s.path;r||s.setPath(this.textureLoader.path);let o=Ht.get(e.id).children,a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&s.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Ot;let l=s.load(a);return s.setPath(r),l}parseMaterials(e){let t=new Map;if("Material"in st.Objects){let n=st.Objects.Material;for(let s in n){let r=this.parseMaterial(n[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){let n=e.id,s=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Ht.has(n))return null;let o=this.parseParameters(e,t,n),a;switch(r.toLowerCase()){case"phong":a=new ui;break;case"lambert":a=new fo;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new ui;break}return a.setValues(o),a.name=s,a}parseParameters(e,t,n){let s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=Ke.colorSpaceToWorking(new Ae().fromArray(e.Diffuse.value),Je):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=Ke.colorSpaceToWorking(new Ae().fromArray(e.DiffuseColor.value),Je)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=Ke.colorSpaceToWorking(new Ae().fromArray(e.Emissive.value),Je):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=Ke.colorSpaceToWorking(new Ae().fromArray(e.EmissiveColor.value),Je)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=Ke.colorSpaceToWorking(new Ae().fromArray(e.Specular.value),Je):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=Ke.colorSpaceToWorking(new Ae().fromArray(e.SpecularColor.value),Je));let r=this;return Ht.get(n).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":s.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,o.ID),s.map!==void 0&&(s.map.colorSpace=Je);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,o.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=Je);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=dr,s.envMap.colorSpace=Je);break;case"SpecularColor":s.specularMap=r.getTexture(t,o.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=Je);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,o.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),s}getTexture(e,t){return"LayeredTexture"in st.Objects&&t in st.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ht.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in st.Objects){let n=st.Objects.Deformer;for(let s in n){let r=n[s],o=Ht.get(parseInt(s));if(r.attrType==="Skin"){let a=this.parseSkeleton(o,n);a.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[s]=a}else if(r.attrType==="BlendShape"){let a={id:s};a.rawTargets=this.parseMorphTargets(o,n),a.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(s){let r=t[s.ID];if(r.attrType!=="Cluster")return;let o={ID:s.ID,indices:[],weights:[],transformLink:new Ie().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let s=0;s<e.children.length;s++){let r=e.children[s],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ht.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){dn=new wt;let s=this.parseModels(e.skeletons,t,n),r=st.Objects.Model,o=this;s.forEach(function(l){let c=r[l.ID];o.setLookAtProperties(l,c),Ht.get(l.ID).parents.forEach(function(u){let f=s.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&dn.add(l)}),this.bindSkeleton(e.skeletons,t,s),this.addGlobalSceneSettings(),dn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);let c=dm(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});let a=new af().parse();dn.children.length===1&&dn.children[0].isGroup&&(dn.children[0].animations=a,dn=dn.children[0]),dn.animations=a}parseModels(e,t,n){let s=new Map,r=st.Objects.Model;for(let o in r){let a=parseInt(o),l=r[o],c=Ht.get(a),h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Ri;break;case"Null":default:h=new wt;break}h.name=l.attrName?ht.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),s.set(a,h)}return s}buildSkeleton(e,t,n,s){let r=null;return e.parents.forEach(function(o){for(let a in t){let l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){let u=r;r=new Ri,r.matrixWorld.copy(c.transformLink),r.name=s?ht.sanitizeNodeName(s):"",r.userData.originalName=s,r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(s){let r=st.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new xt;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);let c=a/l,h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);let u=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new Nt(h,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new xt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new xt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){let r=st.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new xt;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ke.colorSpaceToWorking(new Ae().fromArray(n.Color.value),Je));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);let l=1;switch(s){case 0:t=new Zi(r,o,a,l);break;case 1:t=new xn(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Mt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Mt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Fi(r,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Zi(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,r=null,o=null,a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ui({name:$t.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,h=r.groups.length;c<h;c++){let u=r.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){let c=new ui;a.push(c)}}return r.FBX_Deformer?(s=new ys(r,o),s.normalizeSkinWeights()):s=new tt(r,o),s}createCurve(e,t){let n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),s=new Ln({name:$t.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ci(n,s)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Go(t.RotationOrder.value):n.eulerOrder=Go(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ht.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){let r=st.Objects.Model[s.ID];if("Lcl_Translation"in r){let o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),dn.add(e.target)):e.lookAt(new L().fromArray(o))}}})}bindSkeleton(e,t,n){let s=this.parsePoseNodes();for(let r in e){let o=e[r];Ht.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;Ht.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new vs(o.bones),s[u.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in st.Objects){let t=st.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new Ie().fromArray(r.Matrix.a)}):e[s.Node]=new Ie().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in st){if("AmbientColor"in st.GlobalSettings){let e=st.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){let r=new Ae().setRGB(t,n,s,Je);dn.add(new xo(r,1))}}"UnitScaleFactor"in st.GlobalSettings&&(dn.userData.unitScaleFactor=st.GlobalSettings.UnitScaleFactor.value)}}},of=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in st.Objects){let n=st.Objects.Geometry;for(let s in n){let r=Ht.get(parseInt(s)),o=this.parseGeometry(r,n[s],e);t.set(parseInt(s),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let s=n.skeletons,r=[],o=e.parents.map(function(u){return st.Objects.Model[u.ID]});if(o.length===0)return;let a=e.children.reduce(function(u,f){return s[f.ID]!==void 0&&(u=s[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});let l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Go(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let h=dm(c);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,s){let r=new Ge;e.attrName&&(r.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new je(a.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new je(a.colors,3)),t&&(r.setAttribute("skinIndex",new _s(a.weightsIndices,4)),r.setAttribute("skinWeight",new je(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){let c=new et().getNormalMatrix(s),h=new je(a.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){let u=h===0?"uv":`uv${h}`;r.setAttribute(u,new je(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(r.addGroup(h,f-h,c),c=u,h=f)}),r.groups.length>0){let u=r.groups[r.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,s),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:s.weights[a]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,s=0,r=!1,o=[],a=[],l=[],c=[],h=[],u=[],f=this;return e.vertexIndices.forEach(function(d,p){let x,m=!1;d<0&&(d=d^-1,m=!0);let g=[],v=[];if(o.push(d*3,d*3+1,d*3+2),e.color){let y=pc(p,n,d,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(y){v.push(y.weight),g.push(y.id)}),v.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let y=[0,0,0,0],_=[0,0,0,0];v.forEach(function(S,w){let T=S,R=g[w];_.forEach(function(M,b,A){if(T>M){A[b]=T,T=M;let N=y[b];y[b]=R,R=N}})}),g=y,v=_}for(;v.length<4;)v.push(0),g.push(0);for(let y=0;y<4;++y)h.push(v[y]),u.push(g[y])}if(e.normal){let y=pc(p,n,d,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=pc(p,n,d,e.material)[0],x<0&&(f.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(y,_){let S=pc(p,n,d,y);c[_]===void 0&&(c[_]=[]),c[_].push(S[0]),c[_].push(S[1])}),s++,m&&(f.genFace(t,e,o,x,a,l,c,h,u,s),n++,s=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){let t=new L(0,0,0);for(let n=0;n<e.length;n++){let s=e[n],r=e[(n+1)%e.length];t.x+=(s.y-r.y)*(s.z+r.z),t.y+=(s.z-r.z)*(s.x+r.x),t.z+=(s.x-r.x)*(s.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new L(0,1,0):new L(0,0,1)).cross(t).normalize(),r=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:r}}flattenVertex(e,t,n){return new G(e.dot(t),e.dot(n))}genFace(e,t,n,s,r,o,a,l,c,h){let u;if(h>3){let f=[],d=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)f.push(new L(d[n[g]],d[n[g+1]],d[n[g+2]]));let{tangent:p,bitangent:x}=this.getNormalTangentAndBitangent(f),m=[];for(let g of f)m.push(this.flattenVertex(g,p,x));u=In.triangulateShape(m,[])}else u=[[0,1,2]];for(let[f,d,p]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2])),t.uv&&t.uv.forEach(function(x,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][p*2]),e.uvs[m].push(a[m][p*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){let l=st.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,s,a.name)})})}genMorphGeometry(e,t,n,s,r){let o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let x=0;x<c.length;x++){let m=c[x]*3;u[m]=l[x*3],u[m+1]=l[x*3+1],u[m+2]=l[x*3+2]}let f={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},d=this.genBuffers(f),p=new je(d.vertex,3);p.name=r||n.attrName,p.applyMatrix4(s),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Ae;o<s.length;o+=4)a.fromArray(s,o),Ke.colorSpaceToWorking(a,Je),a.toArray(s,o);return{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let s=e.Materials.a,r=[];for(let o=0;o<s.length;++o)r.push(o);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ge;let n=t-1,s=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)r.push(new lt().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=s.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}let h=new dc(n,s,r,a,l).getPoints(r.length*12);return new Ge().setFromPoints(h)}},af=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let s=t[n],r=this.addClip(s);e.push(r)}return e}parseClips(){if(st.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=st.Objects.AnimationCurveNode,t=new Map;for(let n in e){let s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=st.Objects.AnimationCurve;for(let n in t){let s={id:t[n].id,times:t[n].KeyTime.a.map(Ub),values:t[n].KeyValueFloat.a},r=Ht.get(s.id);if(r!==void 0){let o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=s:a.match(/Y/)?e.get(o).curves.y=s:a.match(/Z/)?e.get(o).curves.z=s:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){let t=st.Objects.AnimationLayer,n=new Map;for(let s in t){let r=[],o=Ht.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){let h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){let u=Ht.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){let f=st.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let d={modelName:f.attrName?ht.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};dn.traverse(function(p){p.ID===f.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ie),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){let u=Ht.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,f=Ht.get(u).parents[0].ID,d=Ht.get(f).parents[0].ID,p=Ht.get(d).parents[0].ID,x=st.Objects.Model[p],m={modelName:x.attrName?ht.sanitizeNodeName(x.attrName):"",morphName:st.Objects.Deformer[u].attrName};r[c]=m}r[c][h.attr]=h}}}),n.set(parseInt(s),r))}return n}parseAnimStacks(e){let t=st.Objects.AnimationStack,n={};for(let s in t){let r=Ht.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(r[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new ws(e.name,-1,t)}generateTracks(e){let t=[],n=new L,s=new L;if(e.transform&&e.transform.decompose(n,new At,s),n=n.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,s){let r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Fn(e+"."+s,r,o)}generateRotationTrack(e,t,n,s,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let f=this.interpolateRotations(t.x,t.y,t.z,r);o=f[0],a=f[1]}let l=Go(0);n!==void 0&&(n=n.map(Mt.degToRad),n.push(l),n=new It().fromArray(n),n=new At().setFromEuler(n)),s!==void 0&&(s=s.map(Mt.degToRad),s.push(l),s=new It().fromArray(s),s=new At().setFromEuler(s).invert());let c=new At,h=new It,u=[];if(!a||!o)return new Tn(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)h.set(a[f],a[f+1],a[f+2],r),c.setFromEuler(h),n!==void 0&&c.premultiply(n),s!==void 0&&c.multiply(s),f>2&&new At().fromArray(u,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,f/3*4);return new Tn(e+".quaternion",o,u)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),s=dn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Nn(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let r=1;r<t.length;r++){let o=t[r];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let s=n,r=[],o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){let h=t.x.values[o];r.push(h),s[0]=h}else r.push(s[0]);if(a!==-1){let h=t.y.values[a];r.push(h),s[1]=h}else r.push(s[1]);if(l!==-1){let h=t.z.values[l];r.push(h),s[2]=h}else r.push(s[2])}),r}interpolateRotations(e,t,n,s){let r=[],o=[];r.push(e.times[0]),o.push(Mt.degToRad(e.values[0])),o.push(Mt.degToRad(t.values[0])),o.push(Mt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){let l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(Mt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;let u=h.map(Mt.degToRad),f=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let x=Math.max(...d)/180,m=new It(...c,s),g=new It(...u,s),v=new At().setFromEuler(m),y=new At().setFromEuler(g);v.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);let _=e.times[a-1],S=e.times[a]-_,w=new At,T=new It;for(let R=0;R<1;R+=1/x)w.copy(v.clone().slerp(y.clone(),R)),r.push(_+R*S),T.setFromQuaternion(w,s),o.push(T.x),o.push(T.y),o.push(T.z)}else r.push(e.times[a]),o.push(Mt.degToRad(e.values[a])),o.push(Mt.degToRad(t.values[a])),o.push(Mt.degToRad(n.values[a]))}return[r,o]}},lf=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new xc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,r){let o=s.match(/^[\s\t]*;/),a=s.match(/^[\s\t]*$/);if(o||a)return;let l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++r]):h?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(s),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){let l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]),u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),s="connections",r=[c,h],Bb(r,u),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=r),s in o&&Array.isArray(o[s])?o[s].push(r):s!=="a"?o[s]=r:o.a=r,this.setCurrentProp(o,s),s==="a"&&r.slice(-1)!==","&&(o.a=sf(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=sf(t.a))}parseNodeSpecialProperty(e,t,n){let s=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],o=s[1],a=s[2],l=s[3],c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=sf(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}},cf=class{parse(e){let t=new gc(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let s=new xc;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(s===0)return null;let l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){let f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){let s=[];n.propertyList.forEach(function(r,o){o!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],r=n.propertyList[1],o=n.propertyList[2],a=n.propertyList[3],l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let s=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}let a=lm(new Uint8Array(e.getArrayBuffer(o))),l=new gc(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},gc=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}},xc=class{add(e,t){this[e]=t}};function Nb(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===pm(i,0,e.length)}function Fb(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(s){let r=i[s-1];return i=i.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function fm(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Ub(i){return i/46186158e3}var Ob=[];function pc(i,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=i;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);let r=s*n.dataSize,o=r+n.dataSize;return kb(Ob,n.buffer,r,o)}var nf=new It,Er=new L;function dm(i){let e=new Ie,t=new Ie,n=new Ie,s=new Ie,r=new Ie,o=new Ie,a=new Ie,l=new Ie,c=new Ie,h=new Ie,u=new Ie,f=new Ie,d=i.inheritType?i.inheritType:0;i.translation&&e.setPosition(Er.fromArray(i.translation));let p=Go(0);if(i.preRotation){let A=i.preRotation.map(Mt.degToRad);A.push(p),t.makeRotationFromEuler(nf.fromArray(A))}if(i.rotation){let A=i.rotation.map(Mt.degToRad);A.push(i.eulerOrder||p),n.makeRotationFromEuler(nf.fromArray(A))}if(i.postRotation){let A=i.postRotation.map(Mt.degToRad);A.push(p),s.makeRotationFromEuler(nf.fromArray(A)),s.invert()}i.scale&&r.scale(Er.fromArray(i.scale)),i.scalingOffset&&a.setPosition(Er.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(Er.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(Er.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(Er.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(u.copy(i.parentMatrix),h.copy(i.parentMatrixWorld));let x=t.clone().multiply(n).multiply(s),m=new Ie;m.extractRotation(h);let g=new Ie;g.copyPosition(h);let v=g.clone().invert().multiply(h),y=m.clone().invert().multiply(v),_=r,S=new Ie;if(d===0)S.copy(m).multiply(x).multiply(y).multiply(_);else if(d===1)S.copy(m).multiply(y).multiply(x).multiply(_);else{let N=new Ie().scale(new L().setFromMatrixScale(u)).clone().invert(),I=y.clone().multiply(N);S.copy(m).multiply(x).multiply(I).multiply(_)}let w=c.clone().invert(),T=o.clone().invert(),R=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(w).multiply(a).multiply(o).multiply(r).multiply(T),M=new Ie().copyPosition(R),b=h.clone().multiply(M);return f.copyPosition(b),R=f.clone().multiply(S),R.premultiply(h.invert()),R}function Go(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function sf(i){return i.split(",").map(function(t){return parseFloat(t)})}function pm(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function Bb(i,e){for(let t=0,n=i.length,s=e.length;t<s;t++,n++)i[n]=e[t]}function kb(i,e,t,n){for(let s=t,r=0;s<n;s++,r++)i[r]=e[s];return i}var _c=class extends $t{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Un(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){let h=new DataView(c),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;let p=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(p,h,x))return!1;return!0}function n(c,h,u){for(let f=0,d=c.length;f<d;f++)if(c[f]!==h.getUint8(u+f))return!1;return!0}function s(c){let h=new DataView(c),u=h.getUint32(80,!0),f,d,p,x=!1,m,g,v,y,_;for(let A=0;A<70;A++)h.getUint32(A,!1)==1129270351&&h.getUint8(A+4)==82&&h.getUint8(A+5)==61&&(x=!0,m=new Float32Array(u*3*3),g=h.getUint8(A+6)/255,v=h.getUint8(A+7)/255,y=h.getUint8(A+8)/255,_=h.getUint8(A+9)/255);let S=84,w=12*4+2,T=new Ge,R=new Float32Array(u*3*3),M=new Float32Array(u*3*3),b=new Ae;for(let A=0;A<u;A++){let N=S+A*w,I=h.getFloat32(N,!0),F=h.getFloat32(N+4,!0),B=h.getFloat32(N+8,!0);if(x){let O=h.getUint16(N+48,!0);O&32768?(f=g,d=v,p=y):(f=(O&31)/31,d=(O>>5&31)/31,p=(O>>10&31)/31)}for(let O=1;O<=3;O++){let U=N+O*12,V=A*3*3+(O-1)*3;R[V]=h.getFloat32(U,!0),R[V+1]=h.getFloat32(U+4,!0),R[V+2]=h.getFloat32(U+8,!0),M[V]=I,M[V+1]=F,M[V+2]=B,x&&(b.setRGB(f,d,p,Je),m[V]=b.r,m[V+1]=b.g,m[V+2]=b.b)}}return T.setAttribute("position",new Fe(R,3)),T.setAttribute("normal",new Fe(M,3)),x&&(T.setAttribute("color",new Fe(m,3)),T.hasColors=!0,T.alpha=_),T}function r(c){let h=new Ge,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,p=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),g=new RegExp("normal"+x+x+x,"g"),v=[],y=[],_=[],S=new L,w,T=0,R=0,M=0;for(;(w=u.exec(c))!==null;){R=M;let b=w[0],A=(w=d.exec(b))!==null?w[1]:"";for(_.push(A);(w=f.exec(b))!==null;){let F=0,B=0,O=w[0];for(;(w=g.exec(O))!==null;)S.x=parseFloat(w[1]),S.y=parseFloat(w[2]),S.z=parseFloat(w[3]),B++;for(;(w=m.exec(O))!==null;)v.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),y.push(S.x,S.y,S.z),F++,M++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),F!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}let N=R,I=M-R;h.userData.groupNames=_,h.addGroup(N,I,T),T++}return h.setAttribute("position",new je(v,3)),h.setAttribute("normal",new je(y,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}let l=a(e);return t(l)?s(l):r(o(e))}};function Ns(i,e,t="y",n=0,s=0,r,o=!0){let a=i.attributes.position,l=i.attributes.normal;if(!l)return;let c=new Float32Array(a.count*2),h=new Float32Array(a.count*3),u=["x","y","z"];for(let f=0;f<a.count;f++){let d=Math.abs(l.getX(f)),p=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),m=d>=p&&d>=x?"x":p>=x?"y":"z",g=u.filter(T=>T!==m),v=g[0],y=g[1];g[0]===t&&(v=g[1],y=g[0]);let _={x:a.getX(f),y:a.getY(f),z:a.getZ(f)};c[f*2]=_[v]/e+n,c[f*2+1]=_[y]/e+s;let S=o&&m===t,w=r?r(_.x,_.y,_.z):1;h[f*3]=(S?.84:1)*w,h[f*3+1]=(S?.78:1)*w,h[f*3+2]=(S?.72:1)*w}i.setAttribute("uv",new Fe(c,2)),i.setAttribute("color",new Fe(h,3))}var zb=2.4,Hb={gltf:"gltf",glb:"glb",obj:"obj",fbx:"fbx",stl:"stl"};function mm(i){let e=/\.([a-z0-9]+)(?:[?#].*)?$/i.exec(i);return e?Hb[e[1].toLowerCase()]??null:null}async function hf(i,e={}){let t,n=!1,s;typeof i=="string"?(t=i,s=i):(t=URL.createObjectURL(i),n=!0,s=i.name);let r=e.format??mm(s);if(!r)throw n&&URL.revokeObjectURL(t),new Error(`Cannot detect model format from "${s}" \u2014 pass options.format ('gltf' | 'glb' | 'obj' | 'fbx' | 'stl')`);try{let o=await Gb(t,r);return o.traverse(a=>{if(a instanceof tt){a.castShadow=!0,a.receiveShadow=!0;let l=a.geometry;if(!l.getAttribute("color")&&l.getAttribute("position")){let c=l.getAttribute("position").count;l.setAttribute("color",new Fe(new Float32Array(c*3).fill(1),3))}}}),(e.normalize??!0)&&(bm(o,e.upAxis??"auto",e.flip??!1,e.spinDeg??0),Sm(o),r==="stl"&&xm(o)),Vb(o),o}finally{n&&URL.revokeObjectURL(t)}}function Vb(i){i.updateMatrixWorld(!0);let e=new L,t=new L;i.traverse(n=>{if(!(n instanceof tt))return;let s=n.geometry;if(s.getAttribute("uv")||!s.getAttribute("position"))return;n.matrixWorld.decompose(new L,new At,e);let r=(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z))/3||1;s.computeBoundingBox(),s.boundingBox.getSize(t);let o=t.x>=t.y&&t.x>=t.z?"x":t.y>=t.z?"y":"z";Ns(s,zb/r,o,0,0,void 0,!1)})}async function Gb(i,e){switch(e){case"gltf":case"glb":return(await new cc().loadAsync(i)).scene;case"obj":return await new fc().loadAsync(i);case"fbx":return await new mc().loadAsync(i);case"stl":{let t=await(await fetch(i)).arrayBuffer(),n=_m(vm(t)),s=new wt,r=gm(n);for(let o of r){o.computeVertexNormals();let a=new tt(o,new zt({color:12104360,roughness:.6}));a.name="Imported part",s.add(a)}return s}}}function gm(i){let e=i.index?i.toNonIndexed():i,t=e.getAttribute("position");if(!t)return[e];let n=Math.floor(t.count/3);if(n<2)return[e];e.computeBoundingBox();let s=e.boundingBox.getSize(new L),r=Math.max(s.x,s.y,s.z)*1e-4||1e-4,o=f=>`${Math.round(t.getX(f)/r)},${Math.round(t.getY(f)/r)},${Math.round(t.getZ(f)/r)}`,a=new Int32Array(n);for(let f=0;f<n;f++)a[f]=f;let l=f=>{for(;a[f]!==f;)a[f]=a[a[f]],f=a[f];return f},c=new Map;for(let f=0;f<n;f++)for(let d=0;d<3;d++){let p=o(f*3+d),x=c.get(p);if(x===void 0)c.set(p,f);else{let m=l(x),g=l(f);m!==g&&(a[m]=g)}}let h=new Map;for(let f=0;f<n;f++){let d=l(f),p=h.get(d);p||h.set(d,p=[]),p.push(f)}if(h.size<2||h.size>60)return[e];let u=[];for(let f of h.values()){let d=new Float32Array(f.length*9),p=0;for(let m of f)for(let g=0;g<3;g++)d[p++]=t.getX(m*3+g),d[p++]=t.getY(m*3+g),d[p++]=t.getZ(m*3+g);let x=new Ge;x.setAttribute("position",new Fe(d,3)),u.push(x)}return u.sort((f,d)=>d.getAttribute("position").count-f.getAttribute("position").count),u}function xm(i){let e=[];if(i.traverse(l=>{l instanceof tt&&l.geometry.getAttribute("position")&&e.push(l)}),e.length<2){e[0]&&(e[0].name="Imported model");return}let t=new Rt().setFromObject(i),n=t.getSize(new L),s=new Map,r=l=>{let c=(s.get(l)??0)+1;return s.set(l,c),c===1&&l!=="Part"?l:`${l} ${c}`},o=e.map(l=>{let c=new Rt().setFromObject(l);return{m:l,box:c,size:c.getSize(new L),center:c.getCenter(new L)}}).sort((l,c)=>c.size.length()-l.size.length()),a=0;for(let{m:l,size:c,center:h}of o){let u=[c.x,c.y,c.z],f=Math.min(...u),d=Math.max(...u)||1,p=u.indexOf(f),x;if(f/d<.25)if(p===1){let m=(h.y-t.min.y)/(n.y||1);x=m>.78?"Top":m<.18?"Bottom":"Shelf"}else p===0?x="Side":x=(h.z-t.min.z)/(n.z||1)<.3?"Back":"Panel";else c.y>c.x*1.4&&c.y>c.z*1.4?x="Leg":x="Part";l.name=x==="Part"?`Part ${++a}`:r(x)}}function _m(i){let e=i.index?i.toNonIndexed():i,t=e.getAttribute("position");if(!t||t.count<12)return e;let n=t.count,s=[[],[],[]],r=Math.max(1,Math.floor(n/6e4));for(let d=0;d<n;d+=r)s[0].push(t.getX(d)),s[1].push(t.getY(d)),s[2].push(t.getZ(d));let o=[],a=[];for(let d=0;d<3;d++){let p=s[d].sort((x,m)=>x-m);o[d]=p[Math.round(.01*(p.length-1))],a[d]=p[Math.round(.99*(p.length-1))]}let l=Math.max(a[0]-o[0],a[1]-o[1],a[2]-o[2])*.5,c=[o[0]-l,o[1]-l,o[2]-l],h=[a[0]+l,a[1]+l,a[2]+l],u=[];for(let d=0;d+2<n;d+=3){let p=(t.getX(d)+t.getX(d+1)+t.getX(d+2))/3,x=(t.getY(d)+t.getY(d+1)+t.getY(d+2))/3,m=(t.getZ(d)+t.getZ(d+1)+t.getZ(d+2))/3;if(!(p<c[0]||p>h[0]||x<c[1]||x>h[1]||m<c[2]||m>h[2]))for(let g=0;g<3;g++)u.push(t.getX(d+g),t.getY(d+g),t.getZ(d+g))}if(u.length===0||u.length===n*3)return e;let f=new Ge;return f.setAttribute("position",new Fe(new Float32Array(u),3)),f}function ym(i){if(i.byteLength<84)return!1;if(84+new DataView(i).getUint32(80,!0)*50===i.byteLength)return!0;let n=new Uint8Array(i,0,Math.min(i.byteLength,2048)),s=0;for(let r=0;r<n.length;r++){let o=n[r];o===9||o===10||o===13||(o<32||o>126)&&s++}return s>n.length*.05}function vm(i){let e=new _c;if(ym(i)){let t=new Uint8Array(i.slice(0));return t.fill(0,0,5),e.parse(t.buffer)}return e.parse(new TextDecoder().decode(new Uint8Array(i)))}function Mm(i){i.updateMatrixWorld(!0);let e=[0,0,0],t=[0,0,0],n=[0,0,0],r=new Rt().setFromObject(i).getCenter(new L),o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;i.traverse(p=>{if(!(p instanceof tt))return;let x=p.geometry.getAttribute("position");if(x)for(let m=0;m+2<x.count;m+=3){o.fromBufferAttribute(x,m).applyMatrix4(p.matrixWorld),a.fromBufferAttribute(x,m+1).applyMatrix4(p.matrixWorld),l.fromBufferAttribute(x,m+2).applyMatrix4(p.matrixWorld),c.subVectors(a,o),h.subVectors(l,o),u.crossVectors(c,h);let g=u.length();if(g<1e-12)continue;let v=.5*g,y=(o.y+a.y+l.y)/3;for(let _=0;_<3;_++){let S=(_===0?u.x:_===1?u.y:u.z)/g,w=v*S*S;e[_]+=w,(_===0?(o.x+a.x+l.x)/3:_===1?y:(o.z+a.z+l.z)/3)>(_===0?r.x:_===1?r.y:r.z)?n[_]+=w:t[_]+=w}}});let f=e.indexOf(Math.max(...e)),d=[...e].sort((p,x)=>x-p);return d[0]<d[1]*1.3?{axis:1,topSign:1}:{axis:f,topSign:n[f]>=t[f]?1:-1}}function bm(i,e,t=!1,n=0){let s=e==="auto"?Mm(i).axis:e==="x"?0:e==="z"?2:1;s===2?i.rotateX(-Math.PI/2):s===0&&i.rotateZ(Math.PI/2),t&&i.rotateX(Math.PI),n&&i.rotateOnWorldAxis(new L(0,1,0),n*Math.PI/180)}function Sm(i){let e=new Rt().setFromObject(i);if(e.isEmpty())return;let t=e.getSize(new L),n=Math.max(t.x,t.y,t.z);if(n===0)return;let s=1;n>500?s=.001:n>20?s=.01:n>6?s=.0254:n<.05&&(s=2/n),i.scale.multiplyScalar(s);let r=new Rt().setFromObject(i),o=r.getCenter(new L);i.position.x-=o.x,i.position.z-=o.z,i.position.y-=r.min.y}var uf=[{id:"studio",label:"Studio"},{id:"showroom",label:"Showroom"},{id:"daylight",label:"Daylight"}];function yc(i){let e=new wt;e.name="lights";let t=(n,s,r)=>{let o=new xn(n,s);return o.position.copy(r),o.castShadow=!0,o.shadow.mapSize.set(4096,4096),o.shadow.camera.left=-2.5,o.shadow.camera.right=2.5,o.shadow.camera.top=2.5,o.shadow.camera.bottom=-2.5,o.shadow.camera.near=.5,o.shadow.camera.far=12,o.shadow.bias=-2e-4,o.shadow.normalBias=.01,o.shadow.radius=10,e.add(o),o};switch(i){case"studio":{t(16774114,1.8,new L(2.5,3.2,2.2));let n=new xn(14674175,.55);n.position.set(-2.8,1.6,1.4),e.add(n);let s=new xn(16777215,.9);s.position.set(-1,2.4,-2.6),e.add(s);break}case"showroom":{t(16771012,2.2,new L(1.6,3.4,1.2));let n=new Fi(16767400,60,12,Math.PI/7,.45,1.6);n.position.set(-2.2,3.2,2.4),e.add(n);let s=new xn(16774114,.5);s.position.set(0,1,3),e.add(s);break}case"daylight":{t(16773848,3.2,new L(3.5,4.5,1.5));let n=new mo(12440831,9206366,.9);e.add(n);break}}return e}function vc(i,e,t){let n=i*374761393+e*668265263+t*982451653|0;return n=n^n>>>13|0,n=Math.imul(n,1274126177),n=(n^n>>>16)>>>0,n/4294967295}function wm(i){return i*i*(3-2*i)}function Mc(i,e,t,n,s){let r=Math.floor(i),o=Math.floor(e),a=i-r,l=e-o,c=(r%t+t)%t,h=(o%n+n)%n,u=(c+1)%t,f=(h+1)%n,d=vc(c,h,s),p=vc(u,h,s),x=vc(c,f,s),m=vc(u,f,s),g=wm(a),v=wm(l),y=d+(p-d)*g,_=x+(m-x)*g;return(y+(_-y)*v)*2-1}function si(i,e,t,n,s,r=4,o=.5){let a=0,l=1,c=0,h=1;for(let u=0;u<r;u++)a+=Mc(i*h,e*h,t*h,n*h,s+u*101)*l,c+=l,l*=o,h*=2;return a/c}var zn=8;function ff(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function df(i,e){let t=new Ms(i);return t.wrapS=Gt,t.wrapT=Gt,t.colorSpace=e?Je:ei,t.anisotropy=16,t}function pf(i,e,t){return i+(e-i)*t}function _i(i){return i<0?0:i>1?1:i}function bc(i,e,t,n,s){let r=ff(i),o=ff(i),a=ff(i),l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d"),u=l.createImageData(i,i),f=c.createImageData(i,i),d=h.createImageData(i,i),{height:p,tone:x,rough:m}=e;for(let g=0;g<i;g++){let v=(g-1+i)%i*i,y=(g+1)%i*i,_=g*i;for(let S=0;S<i;S++){let w=_+S,T=w*4,R=x[w];u.data[T]=Math.round(pf(t[0],n[0],R)),u.data[T+1]=Math.round(pf(t[1],n[1],R)),u.data[T+2]=Math.round(pf(t[2],n[2],R)),u.data[T+3]=255;let M=Math.round(_i(m[w])*255);f.data[T]=M,f.data[T+1]=M,f.data[T+2]=M,f.data[T+3]=255;let b=(S-1+i)%i,A=(S+1)%i,N=(p[_+A]-p[_+b])*s,I=(p[y+S]-p[v+S])*s,F=1/Math.sqrt(N*N+I*I+1);d.data[T]=Math.round((-N*F*.5+.5)*255),d.data[T+1]=Math.round((I*F*.5+.5)*255),d.data[T+2]=Math.round((F*.5+.5)*255),d.data[T+3]=255}}return l.putImageData(u,0,0),c.putImageData(f,0,0),h.putImageData(d,0,0),{map:df(r,!0),roughnessMap:df(o,!1),normalMap:df(a,!1)}}function Wo(i,e){let t=i*668265263+e*374761393|0;return t=t^t>>>13|0,t=Math.imul(t,1274126177),((t^t>>>16)>>>0)/4294967295}function mf(i,e){let{seed:t,ringsPerPlank:n,turbulence:s,contrast:r,plankCount:o}=e,a=e.figure==="cathedral",l=e.maxKnots??0,c=new Float32Array(i*i),h=new Float32Array(i*i),u=new Float32Array(i*i),f=zn/i,d=zn/o;for(let p=0;p<i;p++){let x=p*f;for(let m=0;m<i;m++){let g=m*f,v=p*i+m,y=Math.floor(g/d),_=y%o,S=Wo(_,t),w=Wo(_,t+77),T=g-y*d,R=(si(g*.75,x*.25,6,2,t+_*17,3)+si(g*3,x*1,24,8,t+_*17+53,2)*.35)*s,M,b=1,A=0;if(a){let le=(.3+S*.4)*d,me=(T-le)/d,ce=1+Math.round(w),Oe=(S*2-1)*1.5+1.8*Math.sin(x/zn*Math.PI*2*ce+w*9)+R*.4;M=Math.hypot(me*n*.85,Oe*2.2)+S*13,b=.35+.65*(si(g*.5,x*.5,4,4,t+_*23+61,2)*.5+.5);let Te=Math.min(l,Math.floor(w*(l+1)));for(let ve=0;ve<Te;ve++){let Q=(.15+Wo(_*7+ve,t+101)*.7)*d,ee=Wo(_*7+ve,t+211)*zn,te=T-Q,pe=Math.abs(x-ee);pe=Math.min(pe,zn-pe);let D=.05+Wo(_*7+ve,t+307)*.06,de=te*te+pe*pe*.6,he=D*D/(de+D*D);A+=he*he,M+=he*2.5}}else M=T/d*n*(.8+w*.4)+S*13+R;let N=.5+.5*Math.sin(M*Math.PI*2),I=(a?Math.pow(N,e.ringSharpness??2.5):N*N*N)*b,F=si(g*56,x*3,448,24,t+7+_*31,5),B=Mc(g*160,x*12,1280,96,t+19+_*13),O=Math.max(0,B-.45)*1.6,U=Mc(g*48,x*4,384,32,t+23)*.5+.5,V=si(g*.5,x*.5,4,4,t+41,3),Y=e.ribbon??0,ne=Y>0?si(g*6,x*.375,48,3,t+91,2)*Y:0,ie=Math.min(T,d-T)<.005?1:0,ue=e.ringSharpness??2.5,Le=a?I*(.25+ue*.05):(I-.5)*.16,Me=a?.12:.2,Z=a?.13:.05,q=_i((a?.36:.42)+r*(F*Me+O*.18+Le+V*Z+ne*.3+(U-.5)*.06+(S-.5)*.12+A*.5)-ie*.05*r);h[v]=q,c[v]=_i(.55-r*(O*.2+F*.07+I*(a?.2:.08)+A*.25)-ie*.06),u[v]=_i(e.baseRoughness+r*(q-.45)*.22+(U-.5)*.05+ne*.12)}}return bc(i,{height:c,tone:h,rough:u},e.lightColor,e.darkColor,.9)}function Tm(i,e){let{seed:t,threadCount:n}=e,s=new Float32Array(i*i),r=new Float32Array(i*i),o=new Float32Array(i*i),a=zn/i;for(let l=0;l<i;l++){let c=l*a;for(let h=0;h<i;h++){let u=h*a,f=l*i+h,d=u/zn*n*Math.PI*2,p=c/zn*n*Math.PI*2,x=Math.abs(Math.sin(d)),m=Math.abs(Math.sin(p)),v=(Math.floor(u/zn*n)+Math.floor(c/zn*n))%2===0?x*.75+m*.25:m*.75+x*.25,y=si(u*5,c*5,40,40,t,3)*.5+.5,_=_i(v*.8+y*.2);s[f]=_,r[f]=_i(1-_*.65-y*.15),o[f]=_i(.85+(y-.5)*.1)}}return bc(i,{height:s,tone:r,rough:o},e.color,e.shadowColor,3.2)}function gf(i,e){let{seed:t}=e,n=new Float32Array(i*i),s=new Float32Array(i*i),r=new Float32Array(i*i),o=zn/i;for(let l=0;l<i;l++){let c=l*o;for(let h=0;h<i;h++){let u=h*o,f=l*i+h,d=si(u*.75,c*90,6,720,t,3)*.5+.5,p=si(u*2,c*2,16,16,t+31,3)*.5+.5;n[f]=d,s[f]=_i(d*.25+p*.1),r[f]=_i(e.baseRoughness+(d-.5)*.18+(p-.5)*.08)}}let a=[Math.round(e.color[0]*.82),Math.round(e.color[1]*.82),Math.round(e.color[2]*.82)];return bc(i,{height:n,tone:s,rough:r},e.color,a,.6)}function Sc(i,e){let{seed:t}=e,n=new Float32Array(i*i),s=new Float32Array(i*i),r=new Float32Array(i*i),o=zn/i;for(let l=0;l<i;l++){let c=l*o;for(let h=0;h<i;h++){let u=h*o,f=l*i+h,d=si(u*40,c*40,320,320,t,3)*.5+.5;n[f]=d,s[f]=d*.06,r[f]=_i(e.roughness+(d-.5)*.08)}}let a=[Math.round(e.color[0]*.94),Math.round(e.color[1]*.94),Math.round(e.color[2]*.94)];return bc(i,{height:n,tone:s,rough:r},e.color,a,.5)}function xf(i,e=1){return new Ae().setRGB(Math.min(1,i[0]/255*e),Math.min(1,i[1]/255*e),Math.min(1,i[2]/255*e),Je)}function wc(i,e){let t=xf(e.veneer),n=xf(e.veneer,.82),s=xf([e.veneer[0]*.5,e.veneer[1]*.4,e.veneer[2]*.3]);i.onBeforeCompile=r=>{r.uniforms.plySpacing={value:e.spacingM},r.uniforms.plyVeneer={value:t},r.uniforms.plyCore={value:n},r.uniforms.plyGlue={value:s},r.vertexShader=`attribute vec2 ply;
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
        }`)},i.customProgramCacheKey=()=>"plywood"}function Rm(i){return"#"+i.map(e=>e.toString(16).padStart(2,"0")).join("")}function ss(i,e,t){let{plywood:n,plySpacingMm:s,...r}=t,o={plankCount:12,...r};return{info:{id:i,label:e,category:"wood",swatch:Rm(t.lightColor)},metalness:0,clearcoat:.22,generate:a=>mf(a,o),woodParams:o,plywood:n,plySpacingMm:s}}var Tc=[{id:"marine-blue",label:"Marine Blue",color:[110,106,122],strength:.85,mode:"stain"},{id:"southern-pecan",label:"Southern Pecan",color:[167,128,88],strength:.8,mode:"stain"},{id:"walnut",label:"Walnut",color:[228,148,58],strength:.8,mode:"stain"},{id:"rojo",label:"Rojo",color:[204,82,52],strength:.85,mode:"stain"},{id:"espresso",label:"Espresso",color:[72,60,48],strength:.88,mode:"stain"},{id:"golden",label:"Golden",color:[224,162,52],strength:.8,mode:"stain"},{id:"stone-gray-wash",label:"Stone Gray Wash",color:[200,180,150],strength:.6,mode:"wash"},{id:"white-wash",label:"White Wash",color:[228,206,184],strength:.58,mode:"wash"},{id:"green",label:"Green",color:[112,118,64],strength:.85,mode:"stain"},{id:"aged-bronze",label:"Aged Bronze",color:[98,84,54],strength:.85,mode:"stain"},{id:"black",label:"Black",color:[40,36,32],strength:.92,mode:"stain"},{id:"brick",label:"Brick",color:[180,90,62],strength:.85,mode:"stain"},{id:"peach",label:"Peach",color:[245,166,74],strength:.8,mode:"stain"},{id:"coffee",label:"Coffee",color:[112,84,56],strength:.85,mode:"stain"},{id:"chestnut",label:"Chestnut",color:[142,86,60],strength:.85,mode:"stain"},{id:"terracotta",label:"Terracotta",color:[208,122,62],strength:.85,mode:"stain"},{id:"smoke",label:"Smoke",color:[130,128,126],strength:.85,mode:"stain"}];function Wb(i){return(.2126*i[0]+.7152*i[1]+.0722*i[2])/255}function Ec(i,e){if(e.mode==="wash")return i.map((n,s)=>Math.round(n+(e.color[s]-n)*e.strength));let t=.45+1.1*Wb(i);return i.map((n,s)=>{let r=Math.min(255,e.color[s]*t);return Math.round(n+(r-n)*e.strength)})}var Ar=[ss("birchply","Birch Ply",{seed:67,lightColor:[242,228,206],darkColor:[216,196,168],ringsPerPlank:36,turbulence:.55,baseRoughness:.55,contrast:.13,figure:"cathedral",ringSharpness:2,plankCount:1,plywood:!0,plySpacingMm:1.5}),ss("oak","White Oak",{seed:11,lightColor:[214,196,168],darkColor:[128,100,72],ringsPerPlank:30,turbulence:.35,baseRoughness:.5,contrast:.65}),ss("walnut","Black Walnut",{seed:23,lightColor:[158,112,74],darkColor:[62,42,30],ringsPerPlank:42,turbulence:.9,baseRoughness:.42,contrast:.9,figure:"cathedral",ringSharpness:2.5,maxKnots:2,plankCount:8}),ss("cherry","Cherry",{seed:37,lightColor:[202,130,82],darkColor:[138,74,44],ringsPerPlank:34,turbulence:1,baseRoughness:.45,contrast:.72,figure:"cathedral",ringSharpness:6,maxKnots:2,plankCount:8}),ss("maple","Hard Maple",{seed:83,lightColor:[240,223,201],darkColor:[196,164,132],ringsPerPlank:28,turbulence:.9,baseRoughness:.45,contrast:.34,figure:"cathedral",ringSharpness:6,maxKnots:2,plankCount:8}),ss("redoak","Red Oak",{seed:89,lightColor:[233,196,158],darkColor:[178,112,78],ringsPerPlank:46,turbulence:.9,baseRoughness:.55,contrast:.8,figure:"cathedral",ringSharpness:2.6,maxKnots:1,plankCount:10}),ss("mahogany","Ribbon Mahogany",{seed:97,lightColor:[196,110,62],darkColor:[122,56,30],ringsPerPlank:24,turbulence:.4,baseRoughness:.4,contrast:.6,ribbon:.85,plankCount:6}),ss("cedar","Aromatic Cedar",{seed:71,lightColor:[196,96,62],darkColor:[126,46,30],ringsPerPlank:48,turbulence:1,baseRoughness:.5,contrast:.85,figure:"cathedral",ringSharpness:3.5,maxKnots:1,plankCount:6}),{info:{id:"paint-white",label:"Matte White Paint",category:"paint",swatch:"#f2f0ea"},metalness:0,clearcoat:0,generate:i=>Sc(i,{seed:41,color:[242,240,234],roughness:.55})},{info:{id:"paint-forest",label:"Forest Green Paint",category:"paint",swatch:"#3d5240"},metalness:0,clearcoat:.15,generate:i=>Sc(i,{seed:43,color:[61,82,64],roughness:.42})},{info:{id:"paint-black",label:"Matte Black Paint",category:"paint",swatch:"#35322e"},metalness:0,clearcoat:.1,generate:i=>Sc(i,{seed:47,color:[53,50,46],roughness:.5})},{info:{id:"steel",label:"Brushed Steel",category:"metal",swatch:"#c8cacd"},metalness:1,clearcoat:0,generate:i=>gf(i,{seed:53,color:[200,202,205],baseRoughness:.32})},{info:{id:"brass",label:"Brushed Brass",category:"metal",swatch:"#cda955"},metalness:1,clearcoat:0,generate:i=>gf(i,{seed:59,color:[205,169,85],baseRoughness:.36})},{info:{id:"linen",label:"Natural Linen",category:"fabric",swatch:"#d8cdb8"},metalness:0,clearcoat:0,uvRepeat:3,generate:i=>Tm(i,{seed:61,color:[216,205,184],shadowColor:[150,138,116],threadCount:280})}],Em=2.4;function Am(i){let e=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(i);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[220,200,165]}var Xo=class{textureSize;cache=new Map;scanned=new Map;pendingLoads=[];labels=new Map;plywoodOverride=new Map;constructor(e=2048){this.textureSize=e}list(){let e=(t,n)=>this.labels.get(t)??n;return[...Ar.map(t=>({...t.info,label:e(t.info.id,t.info.label)})),...[...this.scanned.values()].map(t=>({id:t.id,label:e(t.id,t.label),category:"scanned",swatch:t.swatch}))]}setLabel(e,t){this.labels.set(e,t)}has(e){return Ar.some(t=>t.info.id===e)||this.scanned.has(e)}listStains(){return Tc.map(e=>({id:e.id,label:e.label,swatch:Rm(e.color)}))}addScanned(e){this.scanned.set(e.id,e),this.cache.get(e.id)?.dispose(),this.cache.delete(e.id)}removeScanned(e){this.scanned.delete(e),this.cache.get(e)?.dispose(),this.cache.delete(e)}renameScanned(e,t){let n=this.scanned.get(e);n&&(n.label=t)}isPlywood(e){let t=this.plywoodOverride.get(e);if(t!==void 0)return t;let n=Ar.find(s=>s.info.id===e);return n?!!n.plywood:!!this.scanned.get(e)?.plywood}veneerFor(e){let t=Ar.find(s=>s.info.id===e);if(t?.woodParams)return t.woodParams.lightColor;let n=this.scanned.get(e);return n?Am(n.swatch):[220,200,165]}plySpacingMmFor(e){let t=Ar.find(n=>n.info.id===e);return t?t.plySpacingMm??2:this.scanned.get(e)?.plySpacingMm??2}setPlywood(e,t){this.plywoodOverride.set(e,t);for(let[n,s]of this.cache)n!==e&&!n.startsWith(`${e}@`)||(t?wc(s,{veneer:this.veneerFor(e),spacingM:this.plySpacingMmFor(e)/1e3}):(s.onBeforeCompile=()=>{},s.customProgramCacheKey=()=>`${e}:flat`),s.needsUpdate=!0)}buildScanned(e){let t=new Ni,n=e.tiling==="mirror"?Wi:Gt,s=(o,a)=>{let l=()=>{};this.pendingLoads.push(new Promise(h=>l=h));let c=t.load(o,l,void 0,()=>l());return c.wrapS=n,c.wrapT=n,c.anisotropy=16,a&&(c.colorSpace=Je),c.repeat.set(Em/e.widthM,Em/e.heightM),c},r=new zt({map:s(e.mapUrl,!0),normalMap:e.normalMapUrl?s(e.normalMapUrl,!1):null,roughnessMap:e.roughnessMapUrl?s(e.roughnessMapUrl,!1):null,roughness:e.roughnessMapUrl?1:.5,metalness:0,clearcoat:e.clearcoat??.3,clearcoatRoughness:.3,normalScale:new G(.08,.08),vertexColors:!0});return r.name=e.id,(this.plywoodOverride.get(e.id)??e.plywood)&&wc(r,{veneer:Am(e.swatch),spacingM:(e.plySpacingMm??2)/1e3}),r}get(e,t){let n=t?Tc.find(u=>u.id===t):void 0;if(t&&!n)throw new Error(`Unknown stain "${t}". Available: ${Tc.map(u=>u.id).join(", ")}`);let s=Ar.find(u=>u.info.id===e),r=n&&s?.woodParams?n:void 0,o=r?`${e}@${r.id}`:e,a=this.cache.get(o);if(a)return a;let l=this.scanned.get(e);if(l){let u=this.buildScanned(l);return this.cache.set(e,u),u}if(!s)throw new Error(`Unknown material "${e}". Available: ${this.list().map(u=>u.id).join(", ")}`);let c=r&&s.woodParams?mf(this.textureSize,{...s.woodParams,lightColor:Ec(s.woodParams.lightColor,r),darkColor:Ec(s.woodParams.darkColor,r)}):s.generate(this.textureSize);if(s.uvRepeat)for(let u of[c.map,c.roughnessMap,c.normalMap])u.repeat.set(s.uvRepeat,s.uvRepeat);let h=new zt({map:c.map,roughnessMap:c.roughnessMap,normalMap:c.normalMap,roughness:1,metalness:s.metalness,clearcoat:s.clearcoat,clearcoatRoughness:.28,normalScale:new G(.16,.16),vertexColors:!0});if(h.name=o,(this.plywoodOverride.get(e)??s.plywood)&&s.woodParams){let u=r?Ec(s.woodParams.lightColor,r):s.woodParams.lightColor;wc(h,{veneer:u,spacingM:(s.plySpacingMm??2)/1e3})}return this.cache.set(o,h),h}async texturesReady(){await Promise.allSettled(this.pendingLoads)}get resolution(){return this.textureSize}setResolution(e){e!==this.textureSize&&(this.textureSize=e,this.dispose())}dispose(){for(let e of this.cache.values())e.map?.dispose(),e.roughnessMap?.dispose(),e.normalMap?.dispose(),e.dispose();this.cache.clear()}};function Pm(i,e,t,n,s,r,o=!1){let a=-t/2,l=t/2,c=s.width/2,h=s.center-c,u=s.center+c,f=Math.min(s.depth,n*.6),d=[],p=(g,v,y,_)=>{let S=new dt(i,g,y).toNonIndexed();S.translate(e,v,_),d.push(S)},x=h-a;x>1e-6&&p(x,(a+h)/2,n,0);let m=u-h;if(m>1e-6&&p(m,(h+u)/2,n-f,-r*(f/2)),!o){let g=l-u;g>1e-6&&p(g,(u+l)/2,n,0)}return d}function Im(i,e){return e.center-e.width/2>-i/2+1e-6&&e.center+e.width/2<i/2-1e-6}function Xb(i,e,t,n,s,r){let o=-t/2,a=t/2,l=Math.min(Math.max(...s.map(x=>x.depth)),n*.8),c=[],h=(x,m,g,v,y,_)=>{if(x<=1e-6||m<=1e-6||g<=1e-6)return;let S=new dt(x,m,g).toNonIndexed();S.translate(v,y,_),c.push(S)};h(e-i,t,n-l,(i+e)/2,0,-r*(l/2));let u=(x,m,g)=>Math.max(m,Math.min(g,x)),f=[...new Set([i,e,...s.flatMap(x=>[u(x.x0,i,e),u(x.x1,i,e)])])].sort((x,m)=>x-m),d=[...new Set([o,a,...s.flatMap(x=>[u(x.y0,o,a),u(x.y1,o,a)])])].sort((x,m)=>x-m),p=r*(n/2-l/2);for(let x=0;x<f.length-1;x++)for(let m=0;m<d.length-1;m++){let g=(f[x]+f[x+1])/2,v=(d[m]+d[m+1])/2;s.some(y=>g>y.x0&&g<y.x1&&v>y.y0&&v<y.y1)||h(f[x+1]-f[x],d[m+1]-d[m],l,g,v,p)}return c}function Dm(i,e,t,n,s){let r=Math.min(n.depth,s),o=r*5/6,a=(r-o)*Math.tan(Math.PI/6),l=2*o*Math.sin(Math.PI/3)+a,h=Math.max(2*l+.01,Math.min(n.width,(i-e)*.9))/2,u=[new G(i,t)],f=(y,_,S,w,T=10)=>{for(let R=1;R<=T;R++){let M=S+(w-S)*R/T;u.push(new G(y+o*Math.cos(M),_+o*Math.sin(M)))}},d=Math.sin(Math.PI/3);u.push(new G(h,t)),f(h,t-o,Math.PI/2,Math.PI/2+Math.PI/3);let p=h-o*d,x=Math.PI/2+Math.PI/3-Math.PI,m=p-a-o*Math.cos(x),g=t-r+o;u.push(new G(p-a,t-o/2-(r-o))),f(m,g,x,-Math.PI/2);let v=Math.abs(m);return u.push(new G(-v,t-r)),f(-m,g,-Math.PI/2,-Math.PI/2-Math.PI/3),u.push(new G(-(p-a),t-o/2-(r-o))),u.push(new G(-p,t-o/2)),f(-h,t-o,Math.PI/2-Math.PI/3,Math.PI/2),u.push(new G(e,t)),u}function Ac(i,e,t,n){let s=e/2,r=[new G(-i/2,-e/2),new G(i/2,-e/2),...Dm(i/2,-i/2,s,n,e*.6)],o=new _t(r),a=new vt(o,{depth:t,bevelEnabled:!1});return a.translate(0,0,-t/2),a}var Cm=.009525;function qo(i,e){let t=e.type==="dovetail"?e.depth*.17:0,n=Math.min(Math.max(e.depth*.6,.006),.014),s=Math.max(e.toolDiameterM??0,n*1.2,2*t+.004);if(e.edgePins){let l=Math.min(Cm,i*.22),c=i-2*l,h=2*l,u=e.pinCount&&e.pinCount>=1?e.pinCount:Math.max(1,Math.round((c+n)/(h+n))),f=(c-(u-1)*n)/u;for(;u>1&&f<s;)u-=1,f=(c-(u-1)*n)/u;if(c<s)return null;let d=[[0,l]],p=[],x=l;for(let m=0;m<u;m++)p.push([x,x+f]),x+=f,m<u-1&&(d.push([x,x+n]),x+=n);return d.push([i-l,i]),{pinTip:n,tailWide:f,flare:t,tailCenters:[],edgeTails:!1,tailSegs:p,pinSegs:d}}if(e.edgeTails){let l=Math.min(Cm,i*.22),c=i-2*l,h=2*l,u=e.pinCount&&e.pinCount>=1?e.pinCount:Math.max(2,Math.round((c+h)/(n+h))),f=u>1?(c-u*n)/(u-1):c-n;for(;u>1&&f<s;)u-=1,f=u>1?(c-u*n)/(u-1):c-n;if(c<n+s*.5)return null;let d=[[0,l]],p=[],x=l;for(let m=0;m<u;m++)p.push([x,x+n]),x+=n,m<u-1&&(d.push([x,x+f]),x+=f);return d.push([i-l,i]),{pinTip:n,tailWide:f,flare:t,tailCenters:[],edgeTails:!0,tailSegs:d,pinSegs:p}}let r=e.pinCount&&e.pinCount>=2?e.pinCount-1:Math.max(1,Math.floor(i/.045)),o=0;for(;r>=1&&(o=(i-(r+1)*n)/r,!(o>=s));)r-=1;if(r<1)return null;let a=[];for(let l=0;l<r;l++)a.push(n+o/2+l*(n+o));return{pinTip:n,tailWide:o,flare:t,tailCenters:a,edgeTails:!1}}function Rc(i,e,t,n,s,r,o,a,l,c){let h=qo(e,n);if(!h)return null;let{flare:u,tailWide:f,tailCenters:d}=h,p=t/2,x=p-(s??n.depth),m=p-(r??n.depth),g=-e/2,v=e/2,y=1e-6,_=(h.tailSegs??d.map(b=>[b-f/2,b+f/2])).map(([b,A])=>({y0:g+b,y1:g+A,f0:b>y?u:0,f1:A<e-y?u:0})),S=!!l&&Im(e,l),w=!!c&&c.length>0;if(S||w){let b=p-x>1e-9,A=p-m>1e-9,N=[];for(let O of[1,-1]){let U=O>0?x:m;if(p-U<=1e-9)continue;let V=[[O*U,g]];for(let{y0:re,y1:ie,f0:ue,f1:Le}of _)V.push([O*U,re+ue],[O*p,re],[O*p,ie],[O*U,ie-Le]);V.push([O*U,v]);let Y=new _t(V.map(([re,ie])=>new G(re,ie))),ne=new vt(Y,{depth:i,bevelEnabled:!1});ne.translate(0,0,-i/2),N.push(ne)}let I=b?x:p,F=-(A?m:p);if(w){let O=l?.innerSign??c[0].innerSign,U=[];S&&U.push({x0:F,x1:I,y0:l.center-l.width/2,y1:l.center+l.width/2,depth:l.depth});for(let V of c)U.push({x0:V.at-V.width/2,x1:V.at+V.width/2,y0:V.runCenter-V.runLen/2,y1:V.runCenter+V.runLen/2,depth:V.depth});N.push(...Xb(F,I,e,i,U,O))}else N.push(...Pm(I-F,(F+I)/2,e,i,l,l.innerSign));let B=rn(N,!1);for(let O of N)O.dispose();return B?(B.rotateY(-Math.PI/2),B):null}let T=[];if(T.push([-m,g]),a){let b=Math.min(a.height,e-.004),A=Math.min(a.length,(x+m)/2-.004);T.push([-m,g+b],[-m+A,g+b],[-m+A,g],[x-A,g],[x-A,g+b],[x,g+b],[x,g])}else _.length&&_[0].y0<=g+y||T.push([x,g]);for(let{y0:b,y1:A,f0:N,f1:I}of _)T.push([x,b+N],[p,b],[p,A],[x,A-I]);if(_.length&&_[_.length-1].y1>=v-y||T.push([x,v]),o)for(let b of Dm(x,-m,v,o,e*.5))T.push([b.x,b.y]);else T.push([-m,v]);if(p-m>1e-9)for(let b=_.length-1;b>=0;b--){let{y0:A,y1:N,f0:I,f1:F}=_[b];T.push([-m,N-F],[-p,N],[-p,A],[-m,A+I])}let R=new _t(T.map(([b,A])=>new G(b,A))),M=new vt(R,{depth:i,bevelEnabled:!1});return M.translate(0,0,-i/2),M.rotateY(-Math.PI/2),M}function _f(i,e,t,n,s,r){let o=qo(e,n);if(!o)return null;let{flare:a,tailWide:l,tailCenters:c}=o,h=t/2,u=h-n.depth,f=-e/2,d=[];for(let _ of[1,-1]){let S=[[_*u,f]];for(let R of c){let M=f+R;S.push([_*u,M-l/2+a],[_*h,M-l/2],[_*h,M+l/2],[_*u,M+l/2-a])}S.push([_*u,e/2]);let w=new _t(S.map(([R,M])=>new G(R,M))),T=new vt(w,{depth:i,bevelEnabled:!1});T.translate(0,0,-i/2),d.push(T)}let p=-r*(i/2),x=r*(i/2),m=Math.sign(x-p),g=new _t([new G(x,f),new G(x,e/2),new G(p,e/2),new G(p,f+s),new G(p+m*s,f)]),v=new vt(g,{depth:2*u,bevelEnabled:!1});v.rotateY(Math.PI/2),v.translate(-u,0,0);let y=rn(d.concat(v),!1);for(let _ of d)_.dispose();return v.dispose(),y?(y.rotateY(-Math.PI/2),y):null}function Cc(i,e,t,n,s,r,o=0,a=0,l,c){let h=qo(e,n);if(!h)return null;let{tailWide:u,flare:f,tailCenters:d}=h,p=-e/2,x=t/2*s,m=x-o*s,g=-x,v=i-2*n.depth,y;if(r)y=Ac(v,e,t,r);else if(a>0){let T=-g,R=-x,M=Math.sign(R-T),b=new _t([new G(R,p),new G(R,e/2),new G(T,e/2),new G(T,p+a),new G(T+M*a,p)]);y=new vt(b,{depth:v,bevelEnabled:!1}),y.rotateY(Math.PI/2),y.translate(-v/2,0,0)}else if(l){let T=v/2,R=Math.min(l.height,e-.004),M=Math.min(l.length,T-.004),b=p+R,A=new _t;A.moveTo(-T,e/2),A.lineTo(-T,b),A.lineTo(-T+M,b),A.lineTo(-T+M,p),A.lineTo(T-M,p),A.lineTo(T-M,b),A.lineTo(T,b),A.lineTo(T,e/2),A.closePath(),y=new vt(A,{depth:t,bevelEnabled:!1}),y.translate(0,0,-t/2)}else c&&Im(e,c)?y=null:y=new dt(v,e,t).toNonIndexed();let _=y?[y]:Pm(v,0,e,t,c,-s),S=[];if(h.pinSegs)for(let[R,M]of h.pinSegs)S.push([p+R,p+M,R<=1e-6,M>=e-1e-6]);else{let T=p;for(let R of d){let M=p+R-u/2;S.push([T,M,T===p,!1]),T=p+R+u/2}S.push([T,e/2,!1,!0])}for(let[T,R,M,b]of S){let A=M?0:f,N=b?0:f;if(M&&a>0){let U=Math.min(a,(R-T)*.95),V=-m,Y=-g,ne=Math.sign(V-Y),re=ie=>{let ue=T+Math.max(0,U-ie);return[[V,T],[V,R],[Y,R+N],[Y,ue],[Y+ne*Math.min(ie,U),ue],[Y+ne*U,T]]};for(let ie of[1,-1]){let ue=de=>ie*(i/2-n.depth+de),Le=[0,U,n.depth],Me=[],Z=(de,he,ae)=>Me.push(...de,...he,...ae);for(let de=0;de<Le.length-1;de++){let he=re(Le[de]),ae=re(Le[de+1]),se=ue(Le[de]),P=ue(Le[de+1]);for(let E=0;E<he.length;E++){let k=(E+1)%he.length,W=[se,he[E][1],-he[E][0]],$=[se,he[k][1],-he[k][0]],j=[P,ae[k][1],-ae[k][0]],Pe=[P,ae[E][1],-ae[E][0]];Z(W,$,j),Z(W,j,Pe)}}for(let[de,he]of[[0,!1],[n.depth,!0]]){let ae=re(de),se=ue(de);for(let P=1;P<ae.length-1;P++){let E=[se,ae[0][1],-ae[0][0]],k=[se,ae[P][1],-ae[P][0]],W=[se,ae[P+1][1],-ae[P+1][0]];he?Z(E,W,k):Z(E,k,W)}}let q=0,le=0,me=0;for(let de=0;de<Me.length;de+=3)q+=Me[de],le+=Me[de+1],me+=Me[de+2];let ce=Me.length/3;q/=ce,le/=ce,me/=ce;let Oe=new L,Te=new L,ve=new L,Q=new L,ee=new L,te=new L,pe=new L;for(let de=0;de<Me.length;de+=9)if(Oe.fromArray(Me,de),Te.fromArray(Me,de+3),ve.fromArray(Me,de+6),Q.subVectors(Te,Oe),ee.subVectors(ve,Oe),te.crossVectors(Q,ee),pe.set((Oe.x+Te.x+ve.x)/3-q,(Oe.y+Te.y+ve.y)/3-le,(Oe.z+Te.z+ve.z)/3-me),te.dot(pe)<0)for(let he=0;he<3;he++){let ae=Me[de+3+he];Me[de+3+he]=Me[de+6+he],Me[de+6+he]=ae}let D=new Ge;D.setAttribute("position",new Fe(new Float32Array(Me),3)),D.computeVertexNormals(),D.setAttribute("uv",new Fe(new Float32Array(Me.length/3*2),2)),_.push(D)}continue}let I=new _t([new G(-m,T),new G(-m,R),new G(-g,R+N),new G(-g,T-A)]),F=new vt(I,{depth:n.depth,bevelEnabled:!1});F.rotateY(Math.PI/2);let B=F.clone();B.translate(i/2-n.depth,0,0);let O=F;O.translate(-i/2,0,0),_.push(O,B)}if(o>0)for(let T of[1,-1]){let R=new dt(n.depth,e,o).toNonIndexed();R.translate(T*(i/2-n.depth/2),0,(x+m)/2),_.push(R)}let w=rn(_,!1);for(let T of _)T.dispose();return w}function yf(i,e,t,n,s,r,o=0){let a=qo(e,s),l=qo(t,s);if(!a||!l)return null;let h=-Math.max(e,t)/2,u=i/2,f=u-(s.depth-o),d=1e-6,p=(T,R)=>(T.tailSegs??T.tailCenters.map(M=>[M-T.tailWide/2,M+T.tailWide/2])).map(([M,b])=>({y0:h+M,y1:h+b,f0:M>d?T.flare:0,f1:b<R-d?T.flare:0})),x=p(a,e),m=p(l,t),g=h+e,v=h+t,y=[[-f,h]];x.length&&x[0].y0<=h+d||y.push([f,h]);for(let{y0:T,y1:R,f0:M,f1:b}of x)y.push([f,T+M],[u,T],[u,R],[f,R-b]);x.length&&x[x.length-1].y1>=g-d||y.push([f,g]);let _=r!=null?Math.min(Math.max(r,0),2*f):2*f;if(_<d)y.push([f,v],[-f,v]);else{let T=f-_,R=24;for(let M=1;M<=R;M++){let b=M/R,A=b*b*(3-2*b);y.push([f-_*b,g+(v-g)*A])}T>-f+d&&y.push([-f,v])}for(let T=m.length-1;T>=0;T--){let{y0:R,y1:M,f0:b,f1:A}=m[T];y.push([-f,M-A],[-u,M],[-u,R],[-f,R+b])}let S=new _t(y.map(([T,R])=>new G(T,R))),w=new vt(S,{depth:n,bevelEnabled:!1});return w.translate(0,0,-n/2),w.rotateY(-Math.PI/2),w}function Yo(i,e,t,n){let s=-i/2,r=i/2,o=c=>e.some(([h,u])=>c>=h-t&&c<=u+t),a=[s],l=s;for(;l<r;){let c=o(l)?t:n,h=l+c;for(let[u]of e)l<u&&h>u&&(h=Math.max(u,l+t));l=Math.min(h,r),a.push(l)}return a}function vf(i,e,t,n){let s=n??((h,u)=>[h,u]),r=[],o=[],a=[],l=(h,u,f,d,p)=>{let[x,m]=s(h+(f-h)*.3,u+(d-u)*.3),g=(t(x+p,m)-t(x-p,m))/(2*p),v=(t(x,m+p)-t(x,m-p))/(2*p),y=1/Math.hypot(g,v,1),[_,S]=s(h,u);r.push(_,S,t(_,S)),o.push(-g*y,-v*y,y),a.push(0,0)};for(let h=0;h<i.length-1;h++)for(let u=0;u<e.length-1;u++){let f=i[h],d=i[h+1],p=e[u],x=e[u+1],m=Math.min(d-f,x-p)*.25,g=(f+d+d)/3,v=(p+p+x)/3;l(f,p,g,v,m),l(d,p,g,v,m),l(d,x,g,v,m);let y=(f+d+f)/3,_=(p+x+x)/3;l(f,p,y,_,m),l(d,x,y,_,m),l(f,x,y,_,m)}let c=new Ge;return c.setAttribute("position",new Fe(new Float32Array(r),3)),c.setAttribute("normal",new Fe(new Float32Array(o),3)),c.setAttribute("uv",new Fe(new Float32Array(a),2)),c}function jo(i,e,t){let n=typeof t=="number"?()=>t:t,s=[],r=[],o=[];for(let l=0;l<i.length-1;l++){let[c,h]=i[l],[u,f]=i[l+1],d=u-c,p=f-h,x=Math.hypot(d,p);if(x<1e-9)continue;let m=p/x,g=-d/x,v=e(c,h),y=e(u,f),_=Math.min(n(c,h),v),S=Math.min(n(u,f),y);s.push(c,h,_,u,f,S,u,f,y),s.push(c,h,_,u,f,y,c,h,v);for(let w=0;w<6;w++)r.push(m,g,0),o.push(0,0)}let a=new Ge;return a.setAttribute("position",new Fe(new Float32Array(s),3)),a.setAttribute("normal",new Fe(new Float32Array(r),3)),a.setAttribute("uv",new Fe(new Float32Array(o),2)),a}var Pc={bevel30:.55,fingerpull:1.5};function Ic(i,e){switch(i){case"chamfer":case"bevel30":return e;case"roundover":return 1-Math.sqrt(Math.max(0,1-e*e));case"cove":return e<.08?.12*(e/.08):.12+.88*Math.sin((e-.08)/.92*Math.PI/2);case"fingerpull":return Math.sin(Math.pow(e,.8)*Math.PI/2);case"ogee":{if(e<.1)return .14*(e/.1);let t=(e-.1)/.9;return .14+.86*t*t*(3-2*t)}case"bead":{if(e<.18)return e/.18*.25;let t=(e-.18)/.82;return .25+.75*(1-Math.sqrt(Math.max(0,1-t*t)))}case"ovolo":{if(e<.12)return e/.12*.15;if(e>.88)return .85+(e-.88)/.12*.15;let t=(e-.12)/.76;return .15+.7*(1-Math.sqrt(Math.max(0,1-t*t)))}case"step":return e<.45?0:e<.55?(e-.45)/.1:1;case"thumbnail":{if(e<.1)return .16*(e/.1);let t=(e-.1)/.9;return .16+.84*Math.pow(t*t*(3-2*t),1.4)}case"classical":return e<.2?.18*(e/.2)*(e/.2)*(3-2*(e/.2)):.18+.82*Math.sin((e-.2)/.8*Math.PI/2)}}function Zo(i,e,t,n){let s=n.depth,r=n.miterEnds,o=r?0:n.inner?.endInset??0,a=(I,F)=>{let B=0,O=(U,V,Y,ne=s)=>U<Y?ne*(Pc[V]??1)*Ic(V,1-U/Y):0;if(n.outer){let{profile:U,width:V}=n.outer,Y=n.outer.depth??s;n.outer.vMax&&(B=Math.max(B,O(e/2-F,U,V,Y))),n.outer.vMin&&(B=Math.max(B,O(F+e/2,U,V,Y))),!r&&n.outer.uMax&&(B=Math.max(B,O(i/2-I,U,V,Y))),!r&&n.outer.uMin&&(B=Math.max(B,O(I+i/2,U,V,Y)))}if(n.inner){let U=n.inner.side==="vMax"?e/2-F:F+e/2,V=Math.abs(I)-(i/2-o),Y=V>0?Math.max(V,U):U,ne=O(Y,n.inner.profile,n.inner.width);if(n.inner.copeEnds&&!r){let re=i/2-Math.abs(I);if(re<n.inner.width){let ie=Pc[n.inner.profile]??1,ue=s*ie*Ic(n.inner.profile,Math.max(0,re)/n.inner.width);ne=Math.min(ne,ue)}}B=Math.max(B,ne)}return B},l=(I,F)=>t/2-a(I,F),c=I=>{if(!r)return i/2;let F=r.outerSide==="vMax"?e/2-I:I+e/2;return Math.max(i/2-F,.001)},h=(I,F)=>[I*c(F)/(i/2),F],u=.0012,f=.008,d=[],p=[];if(n.outer){let I=n.outer.width+.002;n.outer.uMin&&d.push([-i/2,-i/2+I]),n.outer.uMax&&d.push([i/2-I,i/2]),n.outer.vMin&&p.push([-e/2,-e/2+I]),n.outer.vMax&&p.push([e/2-I,e/2])}if(n.inner){let I=n.inner.width+.002;if(p.push(n.inner.side==="vMax"?[e/2-I,e/2]:[-e/2,-e/2+I]),o>0)for(let F of[-1,1]){let B=F*(i/2-o);d.push([B-I,B+I])}n.inner.copeEnds&&d.push([-i/2,-i/2+I],[i/2-I,i/2])}r&&d.push([-i/2,-i/2+e+.002],[i/2-e-.002,i/2]);let x=Yo(i,d,u,f),m=Yo(e,p,u,f),g=vf(x,m,l,h),v=[h(-i/2,-e/2),h(i/2,-e/2),h(i/2,e/2),h(-i/2,e/2)],y=new Ge,_=-t/2,[S,w,T,R]=v;y.setAttribute("position",new Fe(new Float32Array([S[0],S[1],_,T[0],T[1],_,w[0],w[1],_,S[0],S[1],_,R[0],R[1],_,T[0],T[1],_]),3)),y.setAttribute("normal",new Fe(new Float32Array(Array(6).fill([0,0,-1]).flat()),3)),y.setAttribute("uv",new Fe(new Float32Array(12),2));let M=n.inner,b=M?.copeEnds&&!r?I=>{let F=i/2-Math.abs(I);if(F>=M.width)return _;let B=Pc[M.profile]??1;return t/2-s*B*Ic(M.profile,Math.max(0,F)/M.width)}:_,A=[jo(x.map(I=>h(I,-e/2)),l,b),jo([...x].reverse().map(I=>h(I,e/2)),l,b)];if(!n.stickCaps)A.push(jo([...m].reverse().map(I=>h(-i/2,I)),l,b)),A.push(jo(m.map(I=>h(i/2,I)),l,b));else{let{grooveWidth:I,grooveDepth:F,capDepth:B}=n.stickCaps,O=n.stickCaps.innerSide==="vMin"?-1:1,U=O*(e/2),V=n.inner,Y=5e-4,ne=(ue,Le)=>{let Me=O>0?e/2-ue:ue+e/2;if(Me<F+Y&&Math.abs(Le)<I/2+Y){let Z=Me<F&&Math.abs(Le)<I/2,q=Math.min(F-Me,I/2-Math.abs(Le));if(!Z||q<Y)return B}if(V&&Me<V.width+Y){let Z=s*(Pc[V.profile]??1)*Ic(V.profile,Math.max(0,1-Me/V.width));if(Math.abs(Le-(t/2-Z))<Y)return B}return 0},re=Yo(e,[O>0?[U-F-.004,U]:[U,U+F+.004]],4e-4,.003),ie=ue=>{let Le=i/2,Me=Te=>ue>0?Te:-Te,Z=Te=>l(Le,Me(Te)),q=Yo(1,[],.018,.018),me=vf(re,q,(Te,ve)=>Le-ne(ue>0?Te:-Te,ve),(Te,ve)=>[Te,-t/2+(ve+.5)*(Z(Te)+t/2)]),ce=me.attributes.position,Oe=me.attributes.normal;for(let Te=0;Te<ce.count;Te++){let ve=ce.getX(Te),Q=ce.getY(Te),ee=ce.getZ(Te);ce.setXYZ(Te,ee,ve,Q);let te=Oe.getX(Te),pe=Oe.getY(Te),D=Oe.getZ(Te);Oe.setXYZ(Te,D,te,pe)}return ue<0&&me.rotateZ(Math.PI),me};A.push(ie(1),ie(-1))}let N=rn([g,y,...A],!1);g.dispose(),y.dispose();for(let I of A)I.dispose();return N}var qb={bevel:i=>{let e=Math.min(9e-4,i*.06),t=Math.min(.0025,i*.11);return[{a:i-e-t,h:.74,shape:"line"},{a:i-e,h:.74,shape:"line"},{a:i,h:1,shape:"line"}]},cove:i=>{let e=Math.min(9e-4,i*.06);return[{a:i-e,h:.8,shape:"concave"},{a:i,h:1,shape:"line"}]},roundover:i=>{let e=Math.min(9e-4,i*.06);return[{a:i-e,h:.8,shape:"convex"},{a:i,h:1,shape:"line"}]},ogee:i=>{let e=Math.min(9e-4,i*.06);return[{a:(i-e)*.48,h:.4,shape:"concave"},{a:i-e,h:.8,shape:"convex"},{a:i,h:1,shape:"line"}]},stepcove:i=>{let e=Math.min(9e-4,i*.06),t=Math.min(.003,i*.16),n=Math.min(.0011,i*.06),s=Math.min(.0024,i*.11);return[{a:t,h:.1,shape:"line"},{a:t+n,h:.34,shape:"line"},{a:t+n+s,h:.34,shape:"line"},{a:i-e,h:.82,shape:"concave"},{a:i,h:1,shape:"line"}]},bevelstep:i=>{let e=Math.min(.0016,i*.09),t=Math.min(.0038,i*.15);return[{a:i-e-t,h:.58,shape:"line"},{a:i-e,h:.58,shape:"line"},{a:i,h:1,shape:"line"}]},covebead:i=>{let e=Math.min(.0044,i*.22),t=Math.min(.0014,i*.07);return[{a:i-e-t,h:.58,shape:"concave"},{a:i-e/2-t,h:.96,shape:"convex"},{a:i-t,h:.78,shape:"concave"},{a:i,h:1,shape:"line"}]},ogeebead:i=>{let e=Math.min(.0044,i*.22),t=Math.min(.0014,i*.07),n=i-e-t;return[{a:n*.48,h:.34,shape:"concave"},{a:n,h:.6,shape:"convex"},{a:i-e/2-t,h:.97,shape:"convex"},{a:i-t,h:.8,shape:"concave"},{a:i,h:1,shape:"line"}]}},Yb={line:[i=>i,()=>1],concave:[i=>1-Math.cos(i*Math.PI/2),i=>Math.PI/2*Math.sin(i*Math.PI/2)],convex:[i=>Math.sin(i*Math.PI/2),i=>Math.PI/2*Math.cos(i*Math.PI/2)]},Fs=.008,Dc=.02;function Lm(i,e,t,n,s,r){let o=-t/2,a=s/2,l=-s/2,c=t/2,h=Fs+n,u=c-a,f=[{a:0,z:a,slope:0},{a:Fs,z:a,slope:0}],d=0,p=0,x=0;for(let ie of qb[r](n)){let ue=ie.a-d;if(ue<=1e-6)continue;let[Le,Me]=Yb[ie.shape],Z=ie.h-p,q=me=>Z*u*Me(me)/ue;Math.abs(q(0)-x)>.02&&f.push({a:Fs+d,z:a+p*u,slope:q(0)});let le=ie.shape==="line"?1:24;for(let me=1;me<=le;me++){let ce=me/le;f.push({a:Fs+d+ue*ce,z:a+(p+Z*Le(ce))*u,slope:q(ce)})}x=q(1),d=ie.a,p=ie.h}let m=[],g=[],v=[],y=(ie,ue,Le=f,Me=!1)=>{let Z=ie!==0?i/2:e/2,q=le=>ie!==0?e/2-le:i/2-le;for(let le=0;le<Le.length-1;le++){let me=Le[le],ce=Le[le+1];if(ce.a<=me.a)continue;let Oe=Z-me.a,Te=Z-ce.a,ve=q(me.a),Q=q(ce.a),ee=(W,$,j)=>ie!==0?[ie*W,$,j]:[$,ue*W,j],te=ee(Oe,-ve,me.z),pe=ee(Oe,ve,me.z),D=ee(Te,-Q,ce.z),de=ee(Te,Q,ce.z),he=W=>{let $=1/Math.hypot(W,1);return Me?ie!==0?[-ie*W*$,0,-$]:[0,-ue*W*$,-$]:ie!==0?[ie*W*$,0,$]:[0,ue*W*$,$]},ae=he(me.slope),se=he(ce.slope),P=(W,$)=>{m.push(...W),g.push(...$),v.push(0,0)},E=Me?!(ie<0||ue>0):ie<0||ue>0,k=(W,$,j)=>{E?(P(W[0],W[1]),P(j[0],j[1]),P($[0],$[1])):(P(W[0],W[1]),P($[0],$[1]),P(j[0],j[1]))};k([te,ae],[pe,ae],[de,se]),k([te,ae],[de,se],[D,se])}};y(1,0),y(-1,0),y(0,1),y(0,-1);let _=(o-l)/(Dc-Fs),S=[{a:0,z:l,slope:0},{a:Fs,z:l,slope:0},{a:Fs,z:l,slope:_},{a:Dc,z:o,slope:_}];y(1,0,S,!0),y(-1,0,S,!0),y(0,1,S,!0),y(0,-1,S,!0);let w=new Ge;w.setAttribute("position",new Fe(new Float32Array(m),3)),w.setAttribute("normal",new Fe(new Float32Array(g),3)),w.setAttribute("uv",new Fe(new Float32Array(v),2));let T=i-2*h,R=e-2*h,M=new Zn(Math.max(T,.001),Math.max(R,.001));M.translate(0,0,c);let b=new Zn(Math.max(i-2*Dc,.001),Math.max(e-2*Dc,.001));b.rotateY(Math.PI),b.translate(0,0,o);let A=new dt(i,e,s),N=A.toNonIndexed(),I=N.attributes.position,F=N.attributes.normal,B=N.attributes.uv,O=[];for(let ie=0;ie<I.count;ie+=3)Math.abs(F.getZ(ie))<.5&&O.push(ie,ie+1,ie+2);let U=new Ge,V=new Float32Array(O.length*3),Y=new Float32Array(O.length*3),ne=new Float32Array(O.length*2);O.forEach((ie,ue)=>{V.set([I.getX(ie),I.getY(ie),I.getZ(ie)],ue*3),Y.set([F.getX(ie),F.getY(ie),F.getZ(ie)],ue*3),ne.set([B.getX(ie),B.getY(ie)],ue*2)}),U.setAttribute("position",new Fe(V,3)),U.setAttribute("normal",new Fe(Y,3)),U.setAttribute("uv",new Fe(ne,2)),A.dispose(),N.dispose();let re=rn([w,M.toNonIndexed(),b.toNonIndexed(),U],!1);return w.dispose(),M.dispose(),b.dispose(),U.dispose(),re}var jb=.022;function Zb(i,e){let n=e/.019049999999999997,s=Math.min(n,(i-.0015)/(.75*.0254)),r=i/2,o=7.0761,a=17.9788,l=[],c=(u,f,d,p,x,m)=>{for(let g=0;g<=m;g++){let v=(p+(x-p)*g/m)*Math.PI/180;l.push([u+d*Math.cos(v),f+d*Math.sin(v)])}};c(7.1699,17.51,.09375,180,0,20),c(7.4199,17.385,.15625,189,353.32,24),c(7.7324,17.885,.09375,173.08,0,20);let h=l.map(([u,f])=>({z:e/2-(u-o)*.0254*n,y:r-(a-f)*.0254*s,slope:0}));for(let u=0;u<h.length;u++){let f=h[Math.max(0,u-1)],d=h[Math.min(h.length-1,u+1)];h[u].slope=Math.abs(d.z-f.z)>1e-9?(d.y-f.y)/(d.z-f.z):0}return h}function Kb(i,e,t){let n=Zb(e,t),s=[],r=[],o=-e/2,a=(u,f,d,p,x,m,g,v)=>{s.push(...u,...f,...d,...u,...d,...p),r.push(...x,...m,...g,...x,...g,...v)};for(let u=0;u<n.length-1;u++){let f=n[u],d=n[u+1];if(f.z-d.z<1e-7)continue;let p=g=>{let v=Math.hypot(g,1);return[0,1/v,-g/v]},x=p(f.slope),m=p(d.slope);a([-i/2,f.y,f.z],[i/2,f.y,f.z],[i/2,d.y,d.z],[-i/2,d.y,d.z],x,x,m,m)}let l=n[0],c=n[n.length-1];a([-i/2,o,t/2],[i/2,o,t/2],[i/2,l.y,t/2],[-i/2,l.y,t/2],[0,0,1],[0,0,1],[0,0,1],[0,0,1]),a([i/2,o,-t/2],[-i/2,o,-t/2],[-i/2,c.y,-t/2],[i/2,c.y,-t/2],[0,0,-1],[0,0,-1],[0,0,-1],[0,0,-1]),a([-i/2,o,-t/2],[i/2,o,-t/2],[i/2,o,t/2],[-i/2,o,t/2],[0,-1,0],[0,-1,0],[0,-1,0],[0,-1,0]);for(let u of[1,-1]){let f=u*i/2,d=[u,0,0];for(let p=0;p<n.length-1;p++){let x=n[p],m=n[p+1];if(x.z-m.z<1e-7)continue;let g=[f,x.y,x.z],v=[f,m.y,m.z],y=[f,o,x.z],_=[f,o,m.z];u>0?a(y,_,v,g,d,d,d,d):a(_,y,g,v,d,d,d,d)}}let h=new Ge;return h.setAttribute("position",new Fe(new Float32Array(s),3)),h.setAttribute("normal",new Fe(new Float32Array(r),3)),h.setAttribute("uv",new Fe(new Float32Array(s.length/3*2),2)),h}function Nm(i,e,t,n,s){let r=Math.min(jb,e*.35),o=e-r,a=n?Zo(i,o,t,{depth:s??Math.min(.005,t*.35),outer:{profile:n,width:s??.011,uMin:!0,uMax:!0,vMin:!0,vMax:!1}}):new dt(i,o,t);a.translate(0,-r/2,0);let l=Kb(i,r,t);l.translate(0,o/2,0);let c=rn([a.index?a.toNonIndexed():a,l],!1);return a.dispose(),l.dispose(),c}var at=.001,$b=2.4,Jb=new zt({color:14675688,transparent:!0,opacity:.26,roughness:.05,metalness:0,side:_n}),Fm=[5/120,55/120,65/120,115/120],Qb=.165;function Mf(i,e){let t=new wt;t.name=i.spec.name??i.spec.kind;let n=0;for(let s of i.parts){let r=sS(s),o=s.sizeMm.map(f=>f*at),a=s.grainAxis==="x"?0:s.grainAxis==="y"?1:2,c=Math.max(...o.filter((f,d)=>d!==a))<=Qb?Fm[n%Fm.length]:n*.618033988749%1,h=n*.754877666247%1;Ns(r,$b,s.grainAxis,c,h,eS(s)),iS(r,o),n+=1;let u=new tt(r,s.role==="glass"?Jb:e);s.role==="glass"&&(u.castShadow=!1,u.userData.isGlass=!0),s.materialHint&&(u.userData.materialHint=s.materialHint),u.name=s.name,u.position.set(s.positionMm[0]*at,s.positionMm[1]*at,s.positionMm[2]*at),s.rotationRad&&u.rotation.set(...s.rotationRad),u.castShadow=s.role!=="glass",u.receiveShadow=!0,t.add(u)}return t}function eS(i){if(!i.frameRecess)return;let e=i.sizeMm[0]/2*at,t=i.sizeMm[1]/2*at,n=i.frameRecess.overlapMm*at,s=i.frameRecess.reachMm*at;return(r,o)=>{let a=Math.min(e-Math.abs(r),t-Math.abs(o))-n,l=Math.min(1,Math.max(0,a/s));return .52+.48*(l*(2-l))}}function tS(i,e,t,n){let s=Math.min(.005,t*.35),r=.011,o=.01;if(n.axis==="slab"){if(!n.outer)return null;let d=n.bevelMm?n.bevelMm*at:r,p=n.bevelMm?Math.min(n.bevelMm*at,t*.45):s;return Zo(i,e,t,{depth:p,outer:{profile:n.outer,width:d,uMin:!0,uMax:!0,vMin:!0,vMax:!0}})}let a=n.axis==="y",l=a?e:i,c=a?i:e;if(!a&&n.copeTenonMm&&!n.miterEnds){let d=n.inner?o:0;l=Math.max(.05,l-2*(n.copeTenonMm*at-d)),c+=3e-4}let u=(a?n.innerSide==="x-":n.innerSide==="y+")?"vMax":"vMin",f=Zo(l,c,t,{depth:s,miterEnds:n.miterEnds?{outerSide:u==="vMax"?"vMin":"vMax"}:void 0,stickCaps:n.stickGroove&&a&&!n.miterEnds?{grooveWidth:.006,grooveDepth:.01,capDepth:.0012,innerSide:u}:void 0,inner:n.inner?{profile:n.inner,width:o,side:u,endInset:(n.innerInsetMm??0)*at,copeEnds:!a&&!n.miterEnds}:void 0,outer:n.outer?{profile:n.outer,width:n.bevelMm?n.bevelMm*at:r,depth:n.bevelMm?Math.min(n.bevelMm*at,t*.45):void 0,uMin:a,uMax:a,vMin:u==="vMax",vMax:u==="vMin"}:void 0});return a&&f.rotateZ(Math.PI/2),f}function nS(i,e,t,n,s){if(s[0].startsWith("x")){let l=[new G(-i/2,-t/2),new G(i/2,-t/2)];s.includes("x+")?l.push(new G(i/2,t/2-n),new G(i/2-n,t/2)):l.push(new G(i/2,t/2)),s.includes("x-")?l.push(new G(-i/2+n,t/2),new G(-i/2,t/2-n)):l.push(new G(-i/2,t/2));let c=new vt(new _t(l),{depth:e,bevelEnabled:!1});return c.translate(0,0,-e/2),c.rotateX(Math.PI/2),c}let o=[new G(t/2,-e/2),new G(t/2,e/2)];s.includes("y+")?o.push(new G(-t/2+n,e/2),new G(-t/2,e/2-n)):o.push(new G(-t/2,e/2)),s.includes("y-")?o.push(new G(-t/2,-e/2+n),new G(-t/2+n,-e/2)):o.push(new G(-t/2,-e/2));let a=new vt(new _t(o),{depth:i,bevelEnabled:!1});return a.rotateY(Math.PI/2),a.translate(-i/2,0,0),a}function iS(i,e){let t=i.getAttribute("position"),n=i.getAttribute("normal");if(!t||!n)return;let s=e[0]<=e[1]&&e[0]<=e[2]?0:e[1]<=e[2]?1:2,r=new Float32Array(t.count*2),o=(a,l,c)=>c===0?a.getX(l):c===1?a.getY(l):a.getZ(l);for(let a=0;a<t.count;a++){let l=Math.abs(n.getX(a)),c=Math.abs(n.getY(a)),h=Math.abs(n.getZ(a)),u=l>=c&&l>=h?0:c>=h?1:2;r[a*2]=o(t,a,s),r[a*2+1]=u===s?0:1}i.setAttribute("ply",new Fe(r,2))}function sS(i){let[e,t,n]=i.sizeMm.map(r=>r*at);if(i.fingerPullTop&&i.shape==="box")return Nm(e,t,n,i.edgeProfile?.outer,i.edgeProfile?.bevelMm?i.edgeProfile.bevelMm*at:void 0);if(i.frontBevel&&i.shape==="box")return nS(e,t,n,i.frontBevel.bevelMm*at,i.frontBevel.sides);if(i.raisedPanel&&i.shape==="box")return Lm(e,t,n,i.raisedPanel.raiseWidthMm*at,i.raisedPanel.tongueThicknessMm*at,i.raisedPanel.profile);let s=i.scoop?{width:i.scoop.widthMm*at,depth:i.scoop.depthMm*at}:void 0;if(i.joinery&&i.shape==="box"){let r={type:i.joinery.type,depth:i.joinery.matingThicknessMm*at,pinCount:i.joinery.pinCount,toolDiameterM:i.joinery.toolDiameterMm?i.joinery.toolDiameterMm*at:void 0,edgeTails:i.joinery.edgeTails,edgePins:i.joinery.edgePins};if(i.joinery.orient==="case"){let c=(i.joinery.frontBevelMm??0)*at;if(i.joinery.role==="tails"){let h=i.joinery.frontLipMm?r.depth-i.joinery.frontLipMm*at:void 0,u=c?_f(e,n,t,r,c,-(i.joinery.bevelInnerSign??1)):Rc(e,n,t,r,h,i.joinery.singleEnd?0:h);if(u)return u.rotateX(-Math.PI/2),u}else{let h=Cc(e,n,t,r,i.joinery.pinsOuterSign??1,void 0,(i.joinery.lipMm??0)*at,c);if(h)return h.rotateX(-Math.PI/2),h}}let o=i.grainAxis==="x",a=o?e:n,l=o?n:e;if(i.joinery.role==="tails"){if(i.slopedTop){let h=yf(a,i.slopedTop.frontHeightMm*at,i.slopedTop.backHeightMm*at,l,r,i.slopedTop.scoopLengthMm!=null?i.slopedTop.scoopLengthMm*at:void 0,i.joinery.frontLipMm?i.joinery.frontLipMm*at:0);if(h)return o&&h.rotateY(Math.PI/2),h}let c=Rc(l,t,a,r,i.joinery.frontLipMm?r.depth-i.joinery.frontLipMm*at:void 0,i.joinery.backLipMm?r.depth-i.joinery.backLipMm*at:void 0,s,i.backNotch?{length:i.backNotch.lengthMm*at,height:i.backNotch.heightMm*at}:void 0);if(c)return o&&c.rotateY(Math.PI/2),c}else{let c=Cc(a,t,l,r,i.joinery.pinsOuterSign??1,s,(i.joinery.lipMm??0)*at,0,i.backNotch?{length:i.backNotch.lengthMm*at,height:i.backNotch.heightMm*at}:void 0);if(c)return o||c.rotateY(Math.PI/2),c}}if(s&&i.shape==="box")return Ac(e,t,n,s);if(i.edgeProfile&&i.shape==="box"){let r=tS(e,t,n,i.edgeProfile);if(r)return r}switch(i.shape){case"box":return new dt(e,t,n);case"cylinder":return new ji(e/2,e/2,t,32);case"taperedLeg":{let r=new ji(e/2,e*.3,t,4,1);return r.rotateY(Math.PI/4),r.scale(Math.SQRT2,1,Math.SQRT2),r}}}var Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rS=new di(-1,1,1,-1,0,1),bf=class extends Ge{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},oS=new bf,rs=class{constructor(e){this._mesh=new tt(oS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Lc=class extends An{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ti.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends An{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nc=class extends An{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new G);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lc(Rr),this.copyPass.material.blending=Wt,this.clock=new yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?n=!0:o instanceof Nc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uc=class extends An{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Oc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=e-f,x=t-d,m,g;p>x?(m=1,g=0):(m=0,g=1);let v=p-m+h,y=x-g+h,_=p-1+2*h,S=x-1+2*h,w=l&255,T=c&255,R=this.perm[w+this.perm[T]]%12,M=this.perm[w+m+this.perm[T+g]]%12,b=this.perm[w+1+this.perm[T+1]]%12,A=.5-p*p-x*x;A<0?n=0:(A*=A,n=A*A*this._dot(this.grad3[R],p,x));let N=.5-v*v-y*y;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[M],v,y));let I=.5-_*_-S*S;return I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[b],_,S)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,p=(h+u+f)*d,x=h-p,m=u-p,g=f-p,v=e-x,y=t-m,_=n-g,S,w,T,R,M,b;v>=y?y>=_?(S=1,w=0,T=0,R=1,M=1,b=0):v>=_?(S=1,w=0,T=0,R=1,M=0,b=1):(S=0,w=0,T=1,R=1,M=0,b=1):y<_?(S=0,w=0,T=1,R=0,M=1,b=1):v<_?(S=0,w=1,T=0,R=0,M=1,b=1):(S=0,w=1,T=0,R=1,M=1,b=0);let A=v-S+d,N=y-w+d,I=_-T+d,F=v-R+2*d,B=y-M+2*d,O=_-b+2*d,U=v-1+3*d,V=y-1+3*d,Y=_-1+3*d,ne=h&255,re=u&255,ie=f&255,ue=this.perm[ne+this.perm[re+this.perm[ie]]]%12,Le=this.perm[ne+S+this.perm[re+w+this.perm[ie+T]]]%12,Me=this.perm[ne+R+this.perm[re+M+this.perm[ie+b]]]%12,Z=this.perm[ne+1+this.perm[re+1+this.perm[ie+1]]]%12,q=.6-v*v-y*y-_*_;q<0?s=0:(q*=q,s=q*q*this._dot3(this.grad3[ue],v,y,_));let le=.6-A*A-N*N-I*I;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Le],A,N,I));let me=.6-F*F-B*B-O*O;me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[Me],F,B,O));let ce=.6-U*U-V*V-Y*Y;return ce<0?a=0:(ce*=ce,a=ce*ce*this._dot3(this.grad3[Z],U,V,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,x=(e+t+n+s)*l,m=Math.floor(e+x),g=Math.floor(t+x),v=Math.floor(n+x),y=Math.floor(s+x),_=(m+g+v+y)*c,S=m-_,w=g-_,T=v-_,R=y-_,M=e-S,b=t-w,A=n-T,N=s-R,I=M>b?32:0,F=M>A?16:0,B=b>A?8:0,O=M>N?4:0,U=b>N?2:0,V=A>N?1:0,Y=I+F+B+O+U+V,ne=o[Y][0]>=3?1:0,re=o[Y][1]>=3?1:0,ie=o[Y][2]>=3?1:0,ue=o[Y][3]>=3?1:0,Le=o[Y][0]>=2?1:0,Me=o[Y][1]>=2?1:0,Z=o[Y][2]>=2?1:0,q=o[Y][3]>=2?1:0,le=o[Y][0]>=1?1:0,me=o[Y][1]>=1?1:0,ce=o[Y][2]>=1?1:0,Oe=o[Y][3]>=1?1:0,Te=M-ne+c,ve=b-re+c,Q=A-ie+c,ee=N-ue+c,te=M-Le+2*c,pe=b-Me+2*c,D=A-Z+2*c,de=N-q+2*c,he=M-le+3*c,ae=b-me+3*c,se=A-ce+3*c,P=N-Oe+3*c,E=M-1+4*c,k=b-1+4*c,W=A-1+4*c,$=N-1+4*c,j=m&255,Pe=g&255,_e=v&255,De=y&255,We=a[j+a[Pe+a[_e+a[De]]]]%32,fe=a[j+ne+a[Pe+re+a[_e+ie+a[De+ue]]]]%32,be=a[j+Le+a[Pe+Me+a[_e+Z+a[De+q]]]]%32,Be=a[j+le+a[Pe+me+a[_e+ce+a[De+Oe]]]]%32,ze=a[j+1+a[Pe+1+a[_e+1+a[De+1]]]]%32,ye=.6-M*M-b*b-A*A-N*N;ye<0?h=0:(ye*=ye,h=ye*ye*this._dot4(r[We],M,b,A,N));let $e=.6-Te*Te-ve*ve-Q*Q-ee*ee;$e<0?u=0:($e*=$e,u=$e*$e*this._dot4(r[fe],Te,ve,Q,ee));let z=.6-te*te-pe*pe-D*D-de*de;z<0?f=0:(z*=z,f=z*z*this._dot4(r[be],te,pe,D,de));let we=.6-he*he-ae*ae-se*se-P*P;we<0?d=0:(we*=we,d=we*we*this._dot4(r[Be],he,ae,se,P));let xe=.6-E*E-k*k-W*W-$*$;return xe<0?p=0:(xe*=xe,p=xe*xe*this._dot4(r[ze],E,k,W,$)),27*(h+u+f+d+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var $o={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new G},cameraProjectionMatrix:{value:new Ie},cameraInverseProjectionMatrix:{value:new Ie},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Jo={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Qo={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new G}},vertexShader:`varying vec2 vUv;

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

		}`};var ea=class i extends An{constructor(e,t,n=512,s=512,r=32){super(),this.width=n,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();let o=new hi;o.format=pi,o.type=Qi,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:Ct,magFilter:Ct,type:fn,depthTexture:o}),this.ssaoRenderTarget=new Zt(this.width,this.height,{type:fn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new kt({defines:Object.assign({},$o.defines),uniforms:ti.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:Wt}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new uo,this.normalMaterial.blending=Wt,this.blurMaterial=new kt({defines:Object.assign({},Qo.defines),uniforms:ti.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new kt({defines:Object.assign({},Jo.defines),uniforms:ti.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new kt({uniforms:ti.clone(Rr.uniforms),vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:al,blendDst:bo,blendEquation:Yn,blendSrcAlpha:ol,blendDstAlpha:bo,blendEquationAlpha:Yn}),this._fsQuad=new rs(null),this._originalClearColor=new Ae}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case i.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=rl,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){let t=this.kernel;for(let n=0;n<e;n++){let s=new L;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/e;r=Mt.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}_generateRandomKernelRotations(){let n=new Oc,s=4*4,r=new Float32Array(s);for(let o=0;o<s;o++){let a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Xi(r,4,4,gr,un),this.noiseTexture.wrapS=Gt,this.noiseTexture.wrapT=Gt,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}};ea.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};var ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bc=class extends An{constructor(){super(),this.isOutputPass=!0,this.uniforms=ti.clone(ta.uniforms),this.material=new cr({name:ta.name,uniforms:this.uniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this._fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===To?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Um=16384;function aS(i,e,t){let n=i.createRadialGradient(e/2,t/2,Math.min(e,t)*.45,e/2,t/2,Math.hypot(e,t)*.62);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.14)"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=i.getImageData(0,0,e,t),r=s.data,o=1234567,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296-.5);for(let l=0;l<r.length;l+=4){let c=a()*5;r[l]+=c,r[l+1]+=c,r[l+2]+=c}i.putImageData(s,0,0)}async function Sf(i,e={}){let t=e.width??3840,n=e.height??2160,s=Math.max(1,e.supersample??2),r=Math.min(s,Um/t,Um/n),o=Math.round(t*r),a=Math.round(n*r),l=document.createElement("canvas"),c=new br({canvas:l,antialias:!0,alpha:e.transparent??!1,preserveDrawingBuffer:!0});c.setPixelRatio(1),c.setSize(o,a,!1),c.shadowMap.enabled=!0,c.shadowMap.type=ur,c.toneMapping=i.toneMapping,c.toneMappingExposure=i.toneMappingExposure;let h=i.scene,u=h.environment,f=h.background,d=null;try{i.makeEnvironment&&(d=i.makeEnvironment(c),h.environment=d),e.transparent&&(h.background=null);let p=i.camera.clone();if(p.aspect=t/n,p.updateProjectionMatrix(),(e.ssao??!0)&&!e.transparent){let v=new Fc(c);v.setSize(o,a),v.addPass(new Uc(h,p));let y=new ea(h,p,o,a);y.kernelRadius=.06,y.minDistance=4e-4,y.maxDistance=.04,v.addPass(y),v.addPass(new Bc),v.render(),v.dispose()}else c.render(h,p);let m=document.createElement("canvas");m.width=t,m.height=n;let g=m.getContext("2d");return g.drawImage(l,0,0,o,a,0,0,t,n),(e.photoFinish??!0)&&!e.transparent&&aS(g,t,n),await new Promise((v,y)=>{m.toBlob(_=>_?v(_):y(new Error("Snapshot encoding failed")),e.mimeType??"image/png",e.quality)})}finally{h.environment=u,h.background=f,d?.dispose(),c.dispose(),c.forceContextLoss()}}function wf(i,e,t,n,s,r,o=!1){let a=-t/2,l=t/2,c=s.width/2,h=s.center-c,u=s.center+c,f=Math.min(s.depth,n*.6),d=[],p=(g,v,y,_)=>{let S=new dt(i,g,y).toNonIndexed();S.translate(e,v,_),d.push(S)},x=h-a;x>1e-6&&p(x,(a+h)/2,n,0);let m=u-h;if(m>1e-6&&p(m,(h+u)/2,n-f,-r*(f/2)),!o){let g=l-u;g>1e-6&&p(g,(u+l)/2,n,0)}return d}function Bm(i,e){return e.center-e.width/2>-i/2+1e-6&&e.center+e.width/2<i/2-1e-6}function lS(i,e,t,n,s,r){let o=-t/2,a=t/2,l=Math.min(Math.max(...s.map(x=>x.depth)),n*.8),c=[],h=(x,m,g,v,y,_)=>{if(x<=1e-6||m<=1e-6||g<=1e-6)return;let S=new dt(x,m,g).toNonIndexed();S.translate(v,y,_),c.push(S)};h(e-i,t,n-l,(i+e)/2,0,-r*(l/2));let u=(x,m,g)=>Math.max(m,Math.min(g,x)),f=[...new Set([i,e,...s.flatMap(x=>[u(x.x0,i,e),u(x.x1,i,e)])])].sort((x,m)=>x-m),d=[...new Set([o,a,...s.flatMap(x=>[u(x.y0,o,a),u(x.y1,o,a)])])].sort((x,m)=>x-m),p=r*(n/2-l/2);for(let x=0;x<f.length-1;x++)for(let m=0;m<d.length-1;m++){let g=(f[x]+f[x+1])/2,v=(d[m]+d[m+1])/2;s.some(y=>g>y.x0&&g<y.x1&&v>y.y0&&v<y.y1)||h(f[x+1]-f[x],d[m+1]-d[m],l,g,v,p)}return c}function Om(i,e,t,n,s=-e/2){let r=Math.min(n.width/2,i*.45),o=Math.min(n.depth,e*.6),a=e/2,l=5/6*o,c=l*(Math.sqrt(3)/2),h=(o-l)/Math.sqrt(3),u=2*c+h,f=Math.min(1,r/u),d=v=>{if(v<=0)return 0;if(v<=c)return l-Math.sqrt(Math.max(l*l-v*v,0));if(v<=c+h)return l/2+(v-c)*Math.sqrt(3);if(v<u){let y=u-v;return o-(l-Math.sqrt(Math.max(l*l-y*y,0)))}return o},p=[new G(-i/2,s),new G(i/2,s),new G(i/2,e/2)],x=48;for(let v=0;v<=x;v++){let y=r-2*r*v/x;p.push(new G(y,a-d((r-Math.abs(y))/f)))}p.push(new G(-i/2,e/2));let m=new _t(p),g=new vt(m,{depth:t,bevelEnabled:!1});return g.translate(0,0,-t/2),g}function km(i,e){let t=e.type==="dovetail"?e.depth*.17:0,n=e.type==="dovetail"?Math.min(Math.max(e.depth,.0095),.019):Math.min(Math.max(e.depth*.6,.006),.014),s=e.type==="dovetail"?.0015875:n,r=Math.max(1,Math.floor(i/.045)),o=0;for(;r>=1&&(o=(i-2*s-(r-1)*n)/r,!(o>=Math.max(n*1.2,2*t+.004)));)r-=1;if(r<1)return null;let a=[];for(let l=0;l<r;l++)a.push(s+o/2+l*(n+o));return{pinTip:n,tailWide:o,flare:t,tailCenters:a}}function zm(i,e,t,n,s,r,o,a){let l=km(e,n);if(!l)return null;let{flare:c,tailWide:h,tailCenters:u}=l,f=t/2,d=f-(s??n.depth),p=f-(r??n.depth),x=-e/2,m=f-d>1e-9,g=f-p>1e-9,v=!!o&&Bm(e,o),y=!!a&&a.length>0;if(v||y){let T=[];for(let A of[1,-1]){let N=A>0?d:p;if(f-N<=1e-9)continue;let I=[[A*N,x]];for(let O of u){let U=x+O;I.push([A*N,U-h/2+c],[A*f,U-h/2],[A*f,U+h/2],[A*N,U+h/2-c])}I.push([A*N,e/2]);let F=new _t(I.map(([O,U])=>new G(O,U))),B=new vt(F,{depth:i,bevelEnabled:!1});B.translate(0,0,-i/2),T.push(B)}let R=m?d:f,M=-(g?p:f);if(y){let A=o?.innerSign??a[0].innerSign,N=[];v&&N.push({x0:M,x1:R,y0:o.center-o.width/2,y1:o.center+o.width/2,depth:o.depth});for(let I of a)N.push({x0:I.at-I.width/2,x1:I.at+I.width/2,y0:I.runCenter-I.runLen/2,y1:I.runCenter+I.runLen/2,depth:I.depth});T.push(...lS(M,R,e,i,N,A))}else T.push(...wf(R-M,(M+R)/2,e,i,o,o.innerSign));let b=rn(T,!1);for(let A of T)A.dispose();return b?(b.rotateY(-Math.PI/2),b):null}let _=[];_.push([-p,x],[d,x]);for(let T of u){let R=x+T;_.push([d,R-h/2+c],[f,R-h/2],[f,R+h/2],[d,R+h/2-c])}if(_.push([d,e/2]),_.push([-p,e/2]),f-p>1e-9)for(let T of[...u].reverse()){let R=x+T;_.push([-p,R+h/2-c],[-f,R+h/2],[-f,R-h/2],[-p,R-h/2+c])}let S=new _t(_.map(([T,R])=>new G(T,R))),w=new vt(S,{depth:i,bevelEnabled:!1});return w.translate(0,0,-i/2),w.rotateY(-Math.PI/2),w}function Hm(i,e,t,n,s,r,o=0,a=0,l){let c=km(e,n);if(!c)return null;let{tailWide:h,flare:u,tailCenters:f}=c,d=-e/2,p=t/2*s,x=p-o*s,m=-p,g=i-2*n.depth,v=-s,y=l&&Bm(e,l),_;if(r&&y){let M=l.center+l.width/2;_=wf(g,0,e,t,l,v,!0),_.push(Om(g,e,t,r,M))}else if(r)_=[Om(g,e,t,r)];else if(y)_=wf(g,0,e,t,l,v);else if(a>0){let M=-m,b=-p,A=Math.sign(b-M),N=new _t([new G(b,d),new G(b,e/2),new G(M,e/2),new G(M,d+a),new G(M+A*a,d)]),I=new vt(N,{depth:g,bevelEnabled:!1});I.rotateY(Math.PI/2),I.translate(-g/2,0,0),_=[I]}else _=[new dt(g,e,t).toNonIndexed()];let S=[..._],w=[],T=d;for(let M of f){let b=d+M-h/2;w.push([T,b,T===d,!1]),T=d+M+h/2}w.push([T,e/2,!1,!0]);for(let[M,b,A,N]of w){let I=A?0:u,F=N?0:u;if(A&&a>0){let Y=Math.min(a,(b-M)*.95),ne=-x,re=-m,ie=Math.sign(ne-re),ue=Le=>{let Me=M+Math.max(0,Y-Le);return[[ne,Me],[ne,b],[re,b+F],[re,M+Y],[re+ie*Math.min(Le,Y),Me]]};for(let Le of[1,-1]){let Me=ae=>Le*(i/2-n.depth+ae),Z=[0,Y,n.depth],q=[],le=(ae,se,P)=>q.push(...ae,...se,...P);for(let ae=0;ae<Z.length-1;ae++){let se=ue(Z[ae]),P=ue(Z[ae+1]),E=Me(Z[ae]),k=Me(Z[ae+1]);for(let W=0;W<5;W++){let $=(W+1)%5,j=[E,se[W][1],-se[W][0]],Pe=[E,se[$][1],-se[$][0]],_e=[k,P[$][1],-P[$][0]],De=[k,P[W][1],-P[W][0]];le(j,Pe,_e),le(j,_e,De)}}for(let[ae,se]of[[0,!1],[n.depth,!0]]){let P=ue(ae),E=Me(ae);for(let k=1;k<4;k++){let W=[E,P[0][1],-P[0][0]],$=[E,P[k][1],-P[k][0]],j=[E,P[k+1][1],-P[k+1][0]];se?le(W,j,$):le(W,$,j)}}let me=0,ce=0,Oe=0;for(let ae=0;ae<q.length;ae+=3)me+=q[ae],ce+=q[ae+1],Oe+=q[ae+2];let Te=q.length/3;me/=Te,ce/=Te,Oe/=Te;let ve=new L,Q=new L,ee=new L,te=new L,pe=new L,D=new L,de=new L;for(let ae=0;ae<q.length;ae+=9)if(ve.fromArray(q,ae),Q.fromArray(q,ae+3),ee.fromArray(q,ae+6),te.subVectors(Q,ve),pe.subVectors(ee,ve),D.crossVectors(te,pe),de.set((ve.x+Q.x+ee.x)/3-me,(ve.y+Q.y+ee.y)/3-ce,(ve.z+Q.z+ee.z)/3-Oe),D.dot(de)<0)for(let se=0;se<3;se++){let P=q[ae+3+se];q[ae+3+se]=q[ae+6+se],q[ae+6+se]=P}let he=new Ge;he.setAttribute("position",new Fe(new Float32Array(q),3)),he.computeVertexNormals(),he.setAttribute("uv",new Fe(new Float32Array(q.length/3*2),2)),S.push(he)}continue}let B=new _t([new G(-x,M),new G(-x,b),new G(-m,b+F),new G(-m,M-I)]),O=new vt(B,{depth:n.depth,bevelEnabled:!1});O.rotateY(Math.PI/2);let U=O.clone();U.translate(i/2-n.depth,0,0);let V=O;V.translate(-i/2,0,0),S.push(V,U)}if(o>0)for(let M of[1,-1]){let b=new dt(n.depth,e,o).toNonIndexed();b.translate(M*(i/2-n.depth/2),0,(p+x)/2),S.push(b)}let R=rn(S,!1);for(let M of S)M.dispose();return R}var Ft=.001;function cS(i){return["x","y","z"].find(e=>e!==i.lengthAxis&&e!==i.thicknessAxis)}function kc(i){let e={x:0,y:0,z:0};return e[i.lengthAxis]=i.length,e[i.thicknessAxis]=i.thickness,e[cS(i)]=i.height,new dt(e.x,e.y,e.z)}function Vm(i){let e={type:i.joint==="dovetail"?"dovetail":"boxjoint",depth:i.jointDepth*Ft},t=i.lip?e.depth-i.lip*Ft:void 0;if(i.role==="tails"){let a=i.lengthAxis==="z",l=t,c=t;t!==void 0&&i.lipEnd&&(i.lipEnd==="positive"===a?c=void 0:l=void 0),i.plainEnd&&(i.plainEnd==="positive"===a?l=0:c=0);let h=i.groove&&i.thicknessAxis==="x"?{center:i.groove.center*Ft,width:i.groove.width*Ft,depth:i.groove.depth*Ft,innerSign:-i.groove.side}:void 0,u=i.sockets&&i.thicknessAxis==="x"?i.sockets.map(d=>({at:d.at*Ft,width:d.width*Ft,runCenter:d.runCenter*Ft,runLen:d.runLen*Ft,depth:d.depth*Ft,innerSign:-d.side})):void 0,f=zm(i.thickness*Ft,i.height*Ft,i.length*Ft,e,l,c,h,u);if(!f)return kc(i);if(f.scale(1e3,1e3,1e3),!(i.lengthAxis==="z"&&i.thicknessAxis==="x"))if(i.lengthAxis==="y"&&i.thicknessAxis==="x")f.rotateX(Math.PI/2);else return f.dispose(),kc(i);return f}let n=i.lengthAxis==="x"&&i.thicknessAxis==="z",s=i.lengthAxis==="x"&&i.thicknessAxis==="y";if(!n&&!s)return kc(i);let r=n?i.outerSign??1:-(i.outerSign??1),o=Hm(i.length*Ft,i.height*Ft,i.thickness*Ft,e,r,i.scoop?{width:i.scoop.width*Ft,depth:i.scoop.depth*Ft}:void 0,(i.lip??0)*Ft,0,i.groove?{center:i.groove.center*Ft,width:i.groove.width*Ft,depth:i.groove.depth*Ft}:void 0);return o?(o.scale(1e3,1e3,1e3),s&&o.rotateX(Math.PI/2),o):kc(i)}var na=class{positions=[];uvs=[];quad(e,t,n,s,r,o,a,l){this.positions.push(...e,...t,...n,...e,...n,...s),this.uvs.push(...r,...o,...a,...r,...a,...l)}build(){let e=new Ge;return e.setAttribute("position",new je(this.positions,3)),e.setAttribute("uv",new je(this.uvs,2)),e.computeVertexNormals(),e}},ri=24;function hS(i,e,t,n){let s=new _t,r=(h,u)=>Math.min(h,u*.9);s.moveTo(-(i-t),-e);let o=n["y-"];if(o){let h=r(o.w,2*(i-t))/2,u=h+(o.flare??0);s.lineTo(-h,-e),s.lineTo(-u,-e+o.d),s.lineTo(u,-e+o.d),s.lineTo(h,-e)}s.lineTo(i-t,-e),s.absarc(i-t,-(e-t),t,-Math.PI/2,0,!1);let a=n["x+"];if(a){let h=r(a.w,2*(e-t))/2,u=h+(a.flare??0);s.lineTo(i,-h),s.lineTo(i-a.d,-u),s.lineTo(i-a.d,u),s.lineTo(i,h)}s.lineTo(i,e-t),s.absarc(i-t,e-t,t,0,Math.PI/2,!1);let l=n["y+"];if(l){let h=r(l.w,2*(i-t))/2,u=h+(l.flare??0);s.lineTo(h,e),s.lineTo(u,e-l.d),s.lineTo(-u,e-l.d),s.lineTo(-h,e)}s.lineTo(-(i-t),e),s.absarc(-(i-t),e-t,t,Math.PI/2,Math.PI,!1);let c=n["x-"];if(c){let h=r(c.w,2*(e-t))/2,u=h+(c.flare??0);s.lineTo(-i,h),s.lineTo(-i+c.d,u),s.lineTo(-i+c.d,-u),s.lineTo(-i,-h)}return s.lineTo(-i,-(e-t)),s.absarc(-(i-t),-(e-t),t,Math.PI,Math.PI*1.5,!1),s}function Gm(i,e,t,n,s){let r=i/2,o=e/2,a=Math.max(0,Math.min(n,r-.1,o-.1)),l=.5,c=new Map;for(let m of s){let g=(Math.round(m.z*100)/100).toString(),v=c.get(g);v||(v={z:m.z,bh:m.height,openTop:!1,roundBottom:!1,notches:{}},c.set(g,v)),v.bh=Math.max(v.bh,m.height),m.openTop&&(v.openTop=!0),m.roundBottom&&(v.roundBottom=!0),v.notches[m.face]={w:m.width,d:Math.min(m.depth,(m.face.startsWith("x")?r:o)*.8),flare:m.flare}}let h=[...c.values()].sort((m,g)=>m.z-g.z),u=(m,g,v)=>{let y=new vt(hS(r,o,a,v),{depth:g-m,bevelEnabled:!1,curveSegments:ri});return y.translate(0,0,m),y},f=(m,g)=>{let v={};for(let[y,_]of Object.entries(m))_&&(v[y]={w:_.w*g,d:_.d,flare:(_.flare??0)*g});return v},d=[],p=-t/2;for(let m of h){let g=m.z-m.bh/2,v=m.openTop?t/2:m.z+m.bh/2;if(g-l>p&&d.push(u(p,g+l,{})),m.roundBottom){let y=0;for(let w of Object.values(m.notches))w&&(y=Math.max(y,w.w/2+(w.flare??0)));y=Math.min(y,(v-g)*.9);let _=10,S=g+y;for(let w=0;w<_;w++){let T=g+y*w/_,R=g+y*(w+1)/_,M=Math.sqrt(Math.max(1-((S-R)/y)**2,0));d.push(u(T,R+l,f(m.notches,M)))}d.push(u(S,v,m.notches))}else d.push(u(g,v,m.notches));p=v-l}p<t/2-l&&d.push(u(p,t/2,{}));let x=rn(d,!1);for(let m of d)m.dispose();return x??new dt(i,e,t)}function uS(i,e,t){if(t<=1e-6)return 0;let n=(e*e+t*t)/(2*t);return Math.sqrt(Math.max(n*n-i*i,0))-(n-t)}function Tf(i,e,t,n=0,s=0,r=[0,0]){if(e==="bottom-y"||e==="waterfall-y"){let v=Tf([i[1],i[0],i[2]],e==="bottom-y"?"bottom-x":"waterfall",t,n,s,r);return v.rotateZ(Math.PI/2),v}let[o,a,l]=i,[c,h,u]=[o/2,a/2,l/2],f=new na,d=v=>v/1200+r[0],p=v=>v/300+r[1];if(e==="front"){let v=_=>h+t*Math.sqrt(Math.max(1-(_/c)**2,0)),y=[];for(let _=0;_<=ri;_++)y.push(-c*Math.cos(Math.PI*_/ri));for(let _=0;_<y.length-1;_++){let[S,w]=[y[_],y[_+1]],[T,R]=[v(S),v(w)];f.quad([S,-h,u],[w,-h,u],[w,R,u],[S,T,u],[d(S),p(-h)],[d(w),p(-h)],[d(w),p(R)],[d(S),p(T)]),f.quad([S,T,-u],[w,R,-u],[w,-h,-u],[S,-h,-u],[d(S),p(T)],[d(w),p(R)],[d(w),p(-h)],[d(S),p(-h)]),f.quad([w,R,-u],[S,T,-u],[S,T,u],[w,R,u],[d(w),p(-u)],[d(S),p(-u)],[d(S),p(u)],[d(w),p(u)])}f.quad([c,-h,-u],[c,-h,u],[-c,-h,u],[-c,-h,-u],[d(c),p(-u)],[d(c),p(u)],[d(-c),p(u)],[d(-c),p(-u)]);for(let _ of[-1,1]){let S=[_*c,-h,-u],w=[_*c,h,-u],T=[_*c,h,u],R=[_*c,-h,u],M=_>0?[S,w,T,R]:[w,S,R,T];f.quad(M[0],M[1],M[2],M[3],[p(M[0][1]),p(M[0][2])],[p(M[1][1]),p(M[1][2])],[p(M[2][1]),p(M[2][2])],[p(M[3][1]),p(M[3][2])])}return f.build()}if(e==="waterfall"){let v=u-t,y=n>0?Math.min(n,o*.95):o*.46,_=Math.min(s>0?s:y*.28,y*.9),S=M=>M*M*(3-2*M),w=M=>{let b=c-M;return b<=_?v:b>=y?u:v+(u-v)*S((b-_)/(y-_))},T=ri*2,R=[];for(let M=0;M<=T;M++)R.push(-c+2*c*M/T);for(let M=0;M<R.length-1;M++){let[b,A]=[R[M],R[M+1]],[N,I]=[w(b),w(A)];f.quad([b,h,N],[A,h,I],[A,h,-u],[b,h,-u],[d(b),p(N)],[d(A),p(I)],[d(A),p(-u)],[d(b),p(-u)]),f.quad([b,-h,-u],[A,-h,-u],[A,-h,I],[b,-h,N],[d(b),p(-u)],[d(A),p(-u)],[d(A),p(I)],[d(b),p(N)]),f.quad([b,-h,N],[A,-h,I],[A,h,I],[b,h,N],[d(b),p(-h)],[d(A),p(-h)],[d(A),p(h)],[d(b),p(h)])}f.quad([-c,h,-u],[c,h,-u],[c,-h,-u],[-c,-h,-u],[d(-c),p(h)],[d(c),p(h)],[d(c),p(-h)],[d(-c),p(-h)]);for(let M of[-1,1]){let b=M>0?v:u,A=[M*c,-h,-u],N=[M*c,h,-u],I=[M*c,h,b],F=[M*c,-h,b],B=M>0?[A,N,I,F]:[N,A,F,I];f.quad(B[0],B[1],B[2],B[3],[p(B[0][1]),p(B[0][2])],[p(B[1][1]),p(B[1][2])],[p(B[2][1]),p(B[2][2])],[p(B[3][1]),p(B[3][2])])}return f.build()}if(e==="scoop"){let v=Math.max(c-n,1),y=5/6*t,_=y*(Math.sqrt(3)/2),S=(t-y)/Math.sqrt(3),w=2*_+S,T=Math.min(1,v/w),R=N=>{if(N<=0)return 0;if(N<=_)return y-Math.sqrt(Math.max(y*y-N*N,0));if(N<=_+S)return y/2+(N-_)*Math.sqrt(3);if(N<w){let I=w-N;return t-(y-Math.sqrt(Math.max(y*y-I*I,0)))}return t},M=N=>{let I=Math.abs(N);return I>=v?u:u-R((v-I)/T)},b=ri*2,A=[-c];for(let N=0;N<=b;N++)A.push(-v+2*v*N/b);A.push(c);for(let N=0;N<A.length-1;N++){let[I,F]=[A[N],A[N+1]];if(F-I<1e-6)continue;let[B,O]=[M(I),M(F)];f.quad([I,h,B],[F,h,O],[F,h,-u],[I,h,-u],[d(I),p(B)],[d(F),p(O)],[d(F),p(-u)],[d(I),p(-u)]),f.quad([I,-h,-u],[F,-h,-u],[F,-h,O],[I,-h,B],[d(I),p(-u)],[d(F),p(-u)],[d(F),p(O)],[d(I),p(B)]),f.quad([I,-h,B],[F,-h,O],[F,h,O],[I,h,B],[d(I),p(-h)],[d(F),p(-h)],[d(F),p(h)],[d(I),p(h)])}f.quad([-c,h,-u],[c,h,-u],[c,-h,-u],[-c,-h,-u],[d(-c),p(h)],[d(c),p(h)],[d(c),p(-h)],[d(-c),p(-h)]);for(let N of[-1,1]){let I=[N*c,-h,-u],F=[N*c,h,-u],B=[N*c,h,u],O=[N*c,-h,u],U=N>0?[I,F,B,O]:[F,I,O,B];f.quad(U[0],U[1],U[2],U[3],[p(U[0][1]),p(U[0][2])],[p(U[1][1]),p(U[1][2])],[p(U[2][1]),p(U[2][2])],[p(U[3][1]),p(U[3][2])])}return f.build()}let x=Math.max(c-n,1),m=v=>Math.abs(v)>=x?-u:-u+uS(v,x,t),g=[-c];for(let v=0;v<=ri;v++)g.push(-x+2*x*v/ri);g.push(c);for(let v=0;v<g.length-1;v++){let[y,_]=[g[v],g[v+1]];if(_-y<1e-6)continue;let[S,w]=[m(y),m(_)];f.quad([y,h,u],[_,h,u],[_,h,w],[y,h,S],[d(y),p(u)],[d(_),p(u)],[d(_),p(w)],[d(y),p(S)]),f.quad([y,-h,S],[_,-h,w],[_,-h,u],[y,-h,u],[d(y),p(S)],[d(_),p(w)],[d(_),p(u)],[d(y),p(u)]),f.quad([_,-h,w],[y,-h,S],[y,h,S],[_,h,w],[d(_),p(-h)],[d(y),p(-h)],[d(y),p(h)],[d(_),p(h)])}f.quad([-c,-h,u],[c,-h,u],[c,h,u],[-c,h,u],[d(-c),p(-h)],[d(c),p(-h)],[d(c),p(h)],[d(-c),p(h)]);for(let v of[-1,1]){if(v>0&&s>0)continue;let y=[v*c,-h,-u],_=[v*c,h,-u],S=[v*c,h,u],w=[v*c,-h,u],T=v>0?[y,_,S,w]:[_,y,w,S];f.quad(T[0],T[1],T[2],T[3],[p(T[0][1]),p(T[0][2])],[p(T[1][1]),p(T[1][2])],[p(T[2][1]),p(T[2][2])],[p(T[3][1]),p(T[3][2])])}if(s>0){let v=c+s;f.quad([v,-h,-u],[v,h,-u],[c,h,u],[c,-h,u],[p(-h),p(-u)],[p(h),p(-u)],[p(h),p(u)],[p(-h),p(u)]),f.quad([v,-h,-u],[c,-h,-u],[c,h,-u],[v,h,-u],[d(v),p(-h)],[d(c),p(-h)],[d(c),p(h)],[d(v),p(h)]),f.quad([c,h,u],[v,h,-u],[c,h,-u],[c,h,-u],[d(c),p(u)],[d(v),p(-u)],[d(c),p(-u)],[d(c),p(-u)]),f.quad([c,-h,u],[c,-h,-u],[v,-h,-u],[v,-h,-u],[d(c),p(u)],[d(c),p(-u)],[d(v),p(-u)],[d(v),p(-u)])}return f.build()}function Wm(i,e,t=0,n="front",s="both",r=!1){let[o,a,l]=i,c=s==="top"?l-.2:l/2-.1,h=Math.max(0,Math.min(t,c,o/4,a/4)),u=(g,v)=>{let y=-o/2+g,_=o/2-g,S=a/2-g,w=-a/2,T=Math.max(Math.min(v,(_-y)/2-.1,S-w-.1),.1),R=new _t;return R.moveTo(y,w),R.lineTo(_,w),R.lineTo(_,S-T),R.absarc(_-T,S-T,T,0,Math.PI/2,!1),R.lineTo(y+T,S),R.absarc(y+T,S-T,T,Math.PI/2,Math.PI,!1),R.lineTo(y,w),R},f=(g,v,y)=>{let _=new _t;return n==="all"?(_.moveTo(-g/2+y,-v/2),_.lineTo(g/2-y,-v/2),_.absarc(g/2-y,-v/2+y,y,-Math.PI/2,0,!1),_.lineTo(g/2,v/2-y),_.absarc(g/2-y,v/2-y,y,0,Math.PI/2,!1),_.lineTo(-g/2+y,v/2),_.absarc(-g/2+y,v/2-y,y,Math.PI/2,Math.PI,!1),_.lineTo(-g/2,-v/2+y),_.absarc(-g/2+y,-v/2+y,y,Math.PI,Math.PI*1.5,!1),_):(_.moveTo(-g/2,-v/2),_.lineTo(g/2,-v/2),_.lineTo(g/2,v/2-y),_.absarc(g/2-y,v/2-y,y,0,Math.PI/2,!1),_.lineTo(-g/2+y,v/2),_.absarc(-g/2+y,v/2-y,y,Math.PI/2,Math.PI,!1),_.lineTo(-g/2,-v/2),_)},d=(g,v)=>r?u(g,v):f(o-2*g,a-2*g,v);if(h<.5){let g=Math.min(e,o/2-.1,a-.1),v=new vt(d(0,g),{depth:l,bevelEnabled:!1,curveSegments:ri});return v.translate(0,0,-l/2),v}let p=Math.min(Math.max(e-h,.5),(o-2*h)/2-.1,a-2*h-.1);if(s==="top"){let g=Math.min(h,l-.6),v=Math.min(e,o/2-.1,a-.1),y=Math.max(v-g,.5),_=new vt(d(0,v),{depth:l-g,bevelEnabled:!1,curveSegments:ri});_.translate(0,0,-l/2);let S=12,w=10,T=[],R=[];for(let I=0;I<=w;I++){let F=I/w*(Math.PI/2),B=g*Math.sin(F);T.push(d(g-B,y+B).getPoints(S)),R.push(l/2-g*(1-Math.cos(F)))}let M=[];for(let I=0;I<w;I++){let F=T[I],B=T[I+1],O=Math.min(F.length,B.length);for(let U=0;U<O;U++){let V=(U+1)%O;M.push(B[U].x,B[U].y,R[I+1],B[V].x,B[V].y,R[I+1],F[V].x,F[V].y,R[I]),M.push(B[U].x,B[U].y,R[I+1],F[V].x,F[V].y,R[I],F[U].x,F[U].y,R[I])}}let b=new Ge;b.setAttribute("position",new Fe(new Float32Array(M),3)),b.setAttribute("uv",new Fe(new Float32Array(M.length/3*2),2)),b.computeVertexNormals();let A=new co(d(g,y),S).toNonIndexed();A.translate(0,0,l/2);let N=rn([_,b,A],!1);return _.dispose(),b.dispose(),A.dispose(),N}let x=l-2*h,m=new vt(d(h,p),{depth:x,bevelEnabled:!0,bevelThickness:h,bevelSize:h,bevelOffset:0,bevelSegments:8,curveSegments:ri});return m.translate(0,0,-x/2),m}function fS(i,e,t){let n=i.length,s=new _t,r=!1,o=(a,l)=>{r?s.lineTo(a,l):(s.moveTo(a,l),r=!0)};for(let a=0;a<n;a++){let l=i[a];if(!e[a]||t<=0){o(l[0],l[1]);continue}let c=i[(a-1+n)%n],h=i[(a+1)%n],u=[l[0]-c[0],l[1]-c[1]],f=[h[0]-l[0],h[1]-l[1]],d=Math.hypot(u[0],u[1])||1,p=Math.hypot(f[0],f[1])||1,x=Math.min(t,d/2,p/2),m=[l[0]-x*u[0]/d,l[1]-x*u[1]/d],g=[l[0]+x*f[0]/p,l[1]+x*f[1]/p];o(m[0],m[1]);let v=m[0]+g[0]-l[0],y=m[1]+g[1]-l[1],_=Math.atan2(m[1]-y,m[0]-v),S=Math.atan2(g[1]-y,g[0]-v),w=S-_;for(;w<=-Math.PI;)w+=2*Math.PI;for(;w>Math.PI;)w-=2*Math.PI;s.absarc(v,y,x,_,S,w<0)}return s.closePath(),s}function Xm(i,e,t){let[n,s,r]=i,[o,a]=e,l=n/2-o,c=n/2,h=s/2,u=s/2-a,f=Math.max(0,Math.min(t,o*.9,a*.9)),d=[[-l,-h],[l,-h],[l,-u],[c,-u],[c,u],[l,u],[l,h],[-l,h],[-l,u],[-c,u],[-c,-u],[-l,-u]],p=[!0,!0,!1,!0,!0,!1,!0,!0,!1,!0,!0,!1],x=new vt(fS(d,p,f),{depth:r,bevelEnabled:!1,curveSegments:ri});return x.translate(0,0,-r/2),x}function qm(i,e,t,n=1){let s={x:[1,0,0],y:[0,1,0],z:[0,0,1]},r=new L(...s[e]),o=new L(...s[t]).multiplyScalar(n),a=new L().crossVectors(o,r);i.applyMatrix4(new Ie().makeBasis(r,a,o))}function Ym(i,e,t,n,s){let o=_=>{let S=n/2,w=_/2,T=-n/2+w,R=[[_/2,S],[-_/2,S]];for(let M=0;M<=12;M++){let b=Math.PI+Math.PI*M/12;R.push([w*Math.cos(b),T+w*Math.sin(b)])}return R},a=-s*(i/2),l=s*(i/2),c=o(e),h=o(t),u=c.length,f=[],d=(_,S)=>[_,S[0],S[1]],p=(_,S,w)=>f.push(..._,...S,...w);for(let _=0;_<u;_++){let S=(_+1)%u,w=d(a,c[_]),T=d(a,c[S]),R=d(l,h[S]),M=d(l,h[_]);p(w,T,R),p(w,R,M)}for(let _=1;_<u-1;_++)p(d(a,c[0]),d(a,c[_]),d(a,c[_+1])),p(d(l,h[0]),d(l,h[_+1]),d(l,h[_]));let x=0,m=0,g=0,v=f.length/3;for(let _=0;_<f.length;_+=3)x+=f[_],m+=f[_+1],g+=f[_+2];x/=v,m/=v,g/=v;for(let _=0;_<f.length;_+=9){let S=f[_+3]-f[_],w=f[_+4]-f[_+1],T=f[_+5]-f[_+2],R=f[_+6]-f[_],M=f[_+7]-f[_+1],b=f[_+8]-f[_+2],A=w*b-T*M,N=T*R-S*b,I=S*M-w*R,F=(f[_]+f[_+3]+f[_+6])/3-x,B=(f[_+1]+f[_+4]+f[_+7])/3-m,O=(f[_+2]+f[_+5]+f[_+8])/3-g;if(A*F+N*B+I*O<0)for(let U=0;U<3;U++){let V=f[_+3+U];f[_+3+U]=f[_+6+U],f[_+6+U]=V}}let y=new Ge;return y.setAttribute("position",new Fe(new Float32Array(f),3)),y.setAttribute("uv",new Fe(new Float32Array(f.length/3*2),2)),y.computeVertexNormals(),y}function Ef(i){return i[0]>=i[1]&&i[0]>=i[2]?0:i[1]>=i[2]?1:2}function jm(i,e,t=[0,0],n=[0,0,0]){let s=[i[0]/2,i[1]/2,i[2]/2],r=new na;for(let o of[0,1,2]){let a=e!==o?e:(o+1)%3,l=3-o-a;for(let c of[-1,1]){let h=a,u=l;((u-h+3)%3===1?1:-1)!==c&&([h,u]=[u,h]);let f=(v,y)=>{let _=[0,0,0];return _[o]=c*s[o],_[h]=v*s[h],_[u]=y*s[u],_},d=v=>[(v[a]+n[a])/1200+t[0],(v[l]+n[l])/300+t[1]],p=f(-1,-1),x=f(1,-1),m=f(1,1),g=f(-1,1);r.quad(p,x,m,g,d(p),d(x),d(m),d(g))}}return r.build()}function Zm(i,e,t,n,s=[0,0],r=[0,0],o=[0,0,0],a="z"){let[l,c]=i,[h,u]=e,f=t/2,d=n[0]*(l-h)/2+s[0],p=n[1]*(c-u)/2+s[1],x=[[-l/2,-c/2,f],[l/2,-c/2,f],[l/2,c/2,f],[-l/2,c/2,f]],m=[[d-h/2,p-u/2,-f],[d+h/2,p-u/2,-f],[d+h/2,p+u/2,-f],[d-h/2,p+u/2,-f]],g=S=>[(S[2]+o[2])/1200+r[0],(S[0]+o[0]+S[1]+o[1])/300+r[1]],v=S=>[(S[0]+o[0])/1200+r[0],(S[1]+o[1])/300+r[1]],y=new na;y.quad(x[0],x[1],x[2],x[3],v(x[0]),v(x[1]),v(x[2]),v(x[3])),y.quad(m[0],m[3],m[2],m[1],v(m[0]),v(m[3]),v(m[2]),v(m[1])),y.quad(m[0],m[1],x[1],x[0],g(m[0]),g(m[1]),g(x[1]),g(x[0])),y.quad(m[1],m[2],x[2],x[1],g(m[1]),g(m[2]),g(x[2]),g(x[1])),y.quad(m[2],m[3],x[3],x[2],g(m[2]),g(m[3]),g(x[3]),g(x[2])),y.quad(m[3],m[0],x[0],x[3],g(m[3]),g(m[0]),g(x[0]),g(x[3]));let _=y.build();return a==="y"?_.rotateX(-Math.PI/2):a==="x"&&_.rotateY(Math.PI/2),_}var dS=2400,pS=.001,mS={walnut:"walnut","white-oak":"oak",maple:"maple",cherry:"cherry",ash:"maple",cedar:"cedar","baltic-birch":"birchply","painted-white":"paint-white","painted-black":"paint-black","steel-black":"steel",brass:"brass"},gS=new Set(["oak","walnut","cherry","maple","mahogany","cedar","birchply"]);function xS(i){let e=2166136261;for(let s=0;s<i.length;s++)e^=i.charCodeAt(s),e=Math.imul(e,16777619);let t=(e>>>0)/4294967295,n=(Math.imul(e,48271)>>>0)/4294967295;return[t*10,n*10]}function Km(i){let e=["x","y","z"];switch(i.shape){case"jointedBoard":return i.lengthAxis;case"mortisedPost":return i.grain??"z";case"roundedNotchedSlab":return i.grain??"x";case"frenchDovetail":return i.grain??i.interfaceAxis;case"roundedSlab":return i.grain??(i.axis==="y"?"z":"x");case"taperedBox":return i.axis??"z";case"archedBoard":return e[Ef(i.size)];case"box":return i.grain??e[Ef(i.size)];default:return"y"}}function _S(i,e){switch(i.shape){case"jointedBoard":return Vm(i);case"taperedBox":return Zm(i.top,i.bottom,i.height,i.align,i.shift??[0,0],e,i.at,i.axis??"z");case"mortisedPost":return Gm(i.size[0],i.size[1],i.size[2],i.radius,i.mortises);case"roundedNotchedSlab":return Xm(i.size,i.notch,i.radius);case"frenchDovetail":{let t=Ym(i.depth,i.rootThin,i.tipThin,i.runH,i.dir);return qm(t,i.interfaceAxis,i.runAxis??"z",i.runSign??1),t}case"archedBoard":return Tf(i.size,i.arch,i.rise,i.shoulder??0,i.endSkew??0,e);case"roundedSlab":{let t=i.axis==="y",n=t?[i.size[0],i.size[2],i.size[1]]:i.size,s=Wm(n,i.radius,i.edge??0,i.corners??"front",i.edgeMode??"both",i.squareBack??!1);return t&&s.rotateX(-Math.PI/2),s}case"box":return jm(i.size,{x:0,y:1,z:2}[Km(i)],e,i.at);default:return null}}function yS(i,e,t,n){let s=xS(n);if(i.shape==="cylinder"){let l=new ji(i.radiusTop,i.radiusBottom,i.height,32),c=i.axis??"z";return c==="z"?l.rotateX(Math.PI/2):c==="x"&&l.rotateZ(Math.PI/2),l.translate(i.at[0],i.at[1],i.at[2]),new tt(l,e)}let r=_S(i,s)??new dt(...i.size);t&&Ns(r,dS,Km(i),s[0],s[1]);let o=i.shape==="box"?i.tiltX??0:0,a=i.shape==="box"?i.tilt??0:0;return(o||a)&&r.applyMatrix4(new Ie().makeRotationFromEuler(new It(o,a,0))),r.translate(i.at[0],i.at[1],i.at[2]),new tt(r,e)}function vS(i,e,t){let n=mS[i.material]??i.material;e.has(n)||(n="oak");let s=gS.has(n);return{material:e.get(n,s?t:null),isWood:s}}function MS(i,e,t){let n=new wt;n.name=i.name;let{material:s,isWood:r}=vS(i,e,t);for(let o of i.primitives){let a=yS(o,s,r,i.id);a.name=i.name,a.castShadow=!0,a.receiveShadow=!0,n.add(a)}return n}function bS(i,e,t){let n=new wt;n.name=i.name??i.id;let[s,r]=i.position??[0,0];n.position.set(s,r,0),n.rotation.z=i.rotationZ??0;for(let o of i.parts)n.add(MS(o,e,t));return n}function Af(i,e,t=null){let n=new wt,s=i.instances??(i.parts?[{id:"piece",parts:i.parts}]:[]);for(let a of s)n.add(bS(a,e,t));n.rotation.x=-Math.PI/2,n.scale.setScalar(pS);let r=new wt;r.add(n),r.updateMatrixWorld(!0);let o=new Rt().setFromObject(r);if(!o.isEmpty()){let a=o.getCenter(new L);n.position.x-=a.x,n.position.z-=a.z,n.position.y-=o.min.y}return r}var Vc="0.13.36";var Rf=class{static version=Vc;version=Vc;scene=new ir;camera;renderer;materials;controls;container;lightRig;floor;currentObject=null;currentLayout=null;assignments=new Map;panelMaterialId="birchply";stainId=null;resizeObserver;disposed=!1;animationHandle=0;constructor(e){this.container=e.container,this.materials=new Xo(e.textureSize??2048),this.renderer=new br({antialias:!0}),this.renderer.toneMapping=Ts,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ur,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block",this.camera=new Nt(32,1,.05,60),this.camera.position.set(2.4,1.6,2.8),this.controls=new lc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.55,this.controls.minDistance=.4,this.controls.maxDistance=15,this.scene.environment=this.makeEnvironment(this.renderer),this.scene.environmentIntensity=.58,this.setBackground(e.background??"studio"),this.lightRig=yc(e.lighting??"studio"),this.scene.add(this.lightRig),this.floor=new tt(new eo(7,64).rotateX(-Math.PI/2),new ho({opacity:.26})),this.floor.receiveShadow=!0,this.scene.add(this.floor),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container),this.handleResize(),this.startLoop()}showFurniture(e,t){let n=ko(e),s=this.materials.get(this.assignments.get("*")??"oak",this.stainId),r=Mf(n,s);return this.swapObject(r,t?.frame??!0),this.currentLayout=n,this.reapplyAssignments(),n}async loadModel(e,t){let n=await hf(e,t);this.swapObject(n),this.currentLayout=null}loadScene(e,t){let n=Af(e,this.materials,this.stainId);this.swapObject(n,t?.frame??!0),this.currentLayout=null,this.reapplyAssignments()}listMaterials(){return this.materials.list()}registerScannedMaterial(e){this.materials.addScanned(e)}unregisterScannedMaterial(e){this.materials.removeScanned(e)}renameScannedMaterial(e,t){this.materials.renameScanned(e,t)}setMaterialLabel(e,t){this.materials.setLabel(e,t)}isMaterialPlywood(e){return this.materials.isPlywood(e)}setMaterialPlywood(e,t){this.materials.setPlywood(e,t)}listLightingPresets(){return uf}listParts(){if(!this.currentObject)return[];let e=new Set;return this.currentObject.traverse(t=>{t instanceof tt&&t.name&&e.add(t.name)}),[...e]}setMaterial(e,t){let n=this.materials.get(e,this.stainId);t?this.assignments.set(t,e):(this.assignments.clear(),this.assignments.set("*",e)),this.currentObject&&this.currentObject.traverse(s=>{s instanceof tt&&!s.userData.isGlass&&(t?s.name===t:!s.userData.materialHint)&&(s.material=n)})}setStain(e){this.stainId=e,this.currentObject&&(!this.assignments.has("*")&&this.currentLayout&&this.assignments.set("*","oak"),this.reapplyAssignments())}listStains(){return this.materials.listStains()}setPanelMaterial(e){this.panelMaterialId=e,this.applyPanelMaterial()}applyPanelMaterial(){if(!this.currentObject)return;let e=this.materials.get(this.panelMaterialId,this.stainId);this.currentObject.traverse(t=>{t instanceof tt&&t.userData.materialHint==="ply"&&!this.assignments.has(t.name)&&(t.material=e)})}setLighting(e){this.scene.remove(this.lightRig),this.lightRig.traverse(t=>{t instanceof fi&&t.dispose()}),this.lightRig=yc(e),this.scene.add(this.lightRig),this.fitShadows()}setBackground(e){if(e==="transparent"){this.scene.background=null;return}if(e==="studio"){let t=document.createElement("canvas");t.width=64,t.height=512;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#34373e"),s.addColorStop(.45,"#272a30"),s.addColorStop(1,"#101114"),n.fillStyle=s,n.fillRect(0,0,64,512);let r=new Ms(t);r.colorSpace=Je,this.scene.background=r;return}this.scene.background=new Ae(e)}setTextureResolution(e){e!==this.materials.resolution&&(this.materials.setResolution(e),this.reapplyAssignments())}async renderSnapshot(e){return Sf({scene:this.scene,camera:this.camera,toneMapping:this.renderer.toneMapping,toneMappingExposure:this.renderer.toneMappingExposure,makeEnvironment:t=>this.makeEnvironment(t)},e)}getBuildPlan(){return this.currentLayout?Mu(this.currentLayout.spec):null}getLayout(){return this.currentLayout}setCameraOrbit(e,t,n=1){if(!this.currentObject)return;let s=new Rt().setFromObject(this.currentObject);if(s.isEmpty())return;let r=s.getCenter(new L),l=s.getBoundingSphere(new Kt).radius/Math.sin(Mt.degToRad(this.camera.fov/2))*1.15*n,c=Mt.degToRad(e),h=Mt.degToRad(t);this.camera.position.set(r.x+l*Math.cos(h)*Math.sin(c),r.y+l*Math.sin(h),r.z+l*Math.cos(h)*Math.cos(c)),this.controls.target.copy(r),this.controls.update()}frameObject(){if(!this.currentObject)return;let e=new Rt().setFromObject(this.currentObject);if(e.isEmpty())return;let t=e.getCenter(new L),s=e.getBoundingSphere(new Kt).radius/Math.sin(Mt.degToRad(this.camera.fov/2))*1.15,r=new L(.72,.42,1).normalize();this.camera.position.copy(t).addScaledVector(r,s),this.controls.target.copy(t),this.controls.update()}dispose(){this.disposed=!0,cancelAnimationFrame(this.animationHandle),this.resizeObserver.disconnect(),this.controls.dispose(),this.swapObject(null),this.scene.environment?.dispose(),this.materials.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}makeEnvironment(e){let t=new Mr(e),n=new ir,s=new tt(new dt(16,9,16),new cn({color:1447964,side:en}));s.position.y=3.5,n.add(s);let r=new tt(new Zn(16,16).rotateX(-Math.PI/2),new cn({color:2895411}));r.position.y=-.95,n.add(r);let o=(l,c,h,u,f)=>{let d=new cn;d.color.set(h).multiplyScalar(u);let p=new tt(new Zn(l,c),d);p.position.set(...f),p.lookAt(0,.8,0),n.add(p)};o(5,3.5,16773598,9,[-4.5,4.2,3.2]),o(4.2,3,14674175,2.2,[4.6,2.6,3.6]),o(5,1.3,16777215,6,[.5,4.6,-4.4]),o(3,2,16777215,.9,[0,.9,5]);let a=t.fromScene(n,.07).texture;return t.dispose(),a}reapplyAssignments(){if(!this.currentObject)return;let e=[...this.assignments],t=e.find(([n])=>n==="*");t&&this.setMaterial(t[1]);for(let[n,s]of e)n!=="*"&&this.setMaterial(s,n);this.applyPanelMaterial()}swapObject(e,t=!0){this.currentObject&&(this.scene.remove(this.currentObject),this.currentObject.traverse(n=>{n instanceof tt&&n.geometry.dispose()})),this.currentObject=e,e&&(this.scene.add(e),t&&this.frameObject(),this.fitShadows())}fitShadows(){if(!this.currentObject)return;let e=new Rt().setFromObject(this.currentObject);if(e.isEmpty())return;let t=e.getBoundingSphere(new Kt),n=Math.max(.4,t.radius*1.4);this.lightRig.traverse(s=>{if(s instanceof xn&&s.castShadow){let r=s.shadow.camera;r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.updateProjectionMatrix(),s.shadow.needsUpdate=!0}})}handleResize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}startLoop(){let e=()=>{this.disposed||(this.animationHandle=requestAnimationFrame(e),this.controls.update(),this.renderer.render(this.scene,this.camera))};e()}};export{Rf as FurnitureEngine,uf as LIGHTING_PRESETS,VM as MM_PER_INCH,Xo as MaterialLibrary,Tc as STAINS,Vc as VERSION,Ns as applyBoxUVs,Ec as applyStain,Mf as buildGroup,ko as buildLayout,Af as buildSceneGroup,_f as caseSideTailsGeometry,xm as classifyImportedParts,yc as createLightRig,Up as defaultBookshelfSpec,kp as defaultCabinetDoorSpec,Op as defaultCabinetSpec,Bp as defaultDrawerBoxSpec,zp as defaultDrawerFrontSpec,Hp as defaultDrawerUnitSpec,DM as defaultSpec,Fp as defaultTableSpec,mm as detectFormat,_m as dropOutlierTriangles,ns as formatInches,Mu as generateBuildPlan,Mm as guessUpAxis,GM as inchesToMm,ym as isBinaryStl,hf as loadModel,Wp as mmToInches,Sm as normalizeToFurnitureScale,bm as orientToYUp,vm as parseStlGeometry,Cc as pinsBoardGeometry,Sf as renderSnapshot,Ac as scoopedBoardGeometry,yf as slopedDrawerSideGeometry,gm as splitConnectedComponents,Rc as tailsBoardGeometry,yu as validateSpec};
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

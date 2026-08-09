"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var h=t(function(K,l){
var j=require('@stdlib/math-base-special-fast-min/dist'),f=require('@stdlib/blas-base-scopy/dist').ndarray;function z(i,r,u,s,e,n,o,v,q,c){var y,p,a;return i<=0||n===0||r>=i||(a=j(j(s,i)-u,i-r),a<=0)?e:(y=o+u*n,p=o+r*n,u<r+a&&r<u+a?(f(a,e,n,y,v,q,c),f(a,v,q,c,e,n,p),e):(f(a,e,n,y,e,n,p),e))}l.exports=z
});var E=t(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=h();function B(i,r,u,s,e,n,o,v){var q=R(i,n),c=R(i,v);return A(i,r,u,s,e,n,q,o,v,c)}_.exports=B
});var b=t(function(M,W){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),D=h();C(O,"ndarray",D);W.exports=O
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=b(),m,w=G(F(__dirname,"./native.js"));H(w)?m=I:m=w;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[935],{806:function(e,t,n){n.d(t,{O:function(){return f}});var r=n(501),c=n(871),a=n(251),i="MoviesList_TrendingList__DHTPV",o="MoviesList_TrendingList-item__G-pXu",s="MoviesList_TrendingList-item--link__gY+Pj",u=n(184);function f(e){var t=e.movies,n=e.to,f=(0,c.TH)();return(0,u.jsx)("ul",{className:i,children:t.map((function(e){var t=e.title,c=e.id,i=e.poster_path;return(0,u.jsx)("li",{className:o,children:(0,u.jsxs)(r.rU,{className:s,to:"".concat(n).concat(c),state:f,children:[(0,u.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):a,alt:t,width:"50"}),(0,u.jsx)("span",{children:t})]})},c)}))})}},935:function(e,t,n){n.r(t),n.d(t,{MoviesPage:function(){return _},default:function(){return d}});var r=n(885),c=n(791),a=n(450),i=n(768),o=n(501),s=n(682),u=n(806),f="MoviesPage_SearchForm__kpN7l",l="MoviesPage_SearchForm-input__gkM-N",m="MoviesPage_SearchForm-button__OadaN",v="MoviesPage_SearchForm-icon__H3pxL",p=n(184);function _(){var e,t=(0,o.lr)(),n=(0,r.Z)(t,2),_=n[0],d=n[1],h=(0,c.useState)(null!==(e=_.get("query"))&&void 0!==e?e:""),g=(0,r.Z)(h,2),x=g[0],j=g[1],k=(0,c.useState)([]),b=(0,r.Z)(k,2),y=b[0],w=b[1];return(0,c.useEffect)((function(){var e=_.get("query");e&&(0,a.mv)(e).then((function(e){w(e.results)}))}),[_]),(0,p.jsxs)(s.W,{children:[(0,p.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),""!==x.trim()&&(d({query:x}),(0,a.mv)(x).then((function(e){w(e.results)})),j(""))},children:[(0,p.jsx)("input",{className:l,type:"text",name:"searchQuery",value:x,onChange:function(e){j(e.currentTarget.value.toLowerCase())},autoComplete:"off",placeholder:"Search movies"}),(0,p.jsx)("button",{type:"submit",className:m,children:(0,p.jsx)(i.eaK,{className:v})})]}),y&&(0,p.jsx)(u.O,{movies:y,to:""})]})}var d=_},682:function(e,t,n){n.d(t,{W:function(){return a}});var r="Container_Container__GA3It",c=n(184);function a(e){var t=e.children;return(0,c.jsx)("div",{className:r,children:t})}},450:function(e,t,n){n.d(t,{Hx:function(){return p},Mc:function(){return m},mv:function(){return l},uV:function(){return v},wr:function(){return f}});var r=n(861),c=n(757),a=n.n(c),i="https://api.themoviedb.org/3/",o="b51df2db085891231dadc3f994e11109";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function f(){return s("".concat(i,"trending/movie/day?api_key=").concat(o))}function l(e){return s("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1&include_adult=true"))}function m(e){return s("".concat(i,"movie/").concat(e,"?api_key=").concat(o))}function v(e){return s("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o))}function p(e){return s("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o))}},251:function(e,t,n){e.exports=n.p+"static/media/no-image-poster-small.45aa31e799f0e6f65b0b.jpg"}}]);
//# sourceMappingURL=935.bdc4e05d.chunk.js.map
(this.webpackJsonpcustom_filter=this.webpackJsonpcustom_filter||[]).push([[3],{706:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(5),o=a(177),r=a(497),i=a(244),c=Object(r.a)((function(t){return{tooltip:{"& .content":Object(n.a)(Object(n.a)({},t.typography.caption),{},{position:"relative",padding:t.spacing(1,1.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900],color:"rgba(255, 255, 255, 0.75)",transform:"translate(-50%, calc(-100% - ".concat(t.spacing(2.5),"px))"),"& .arrow":{display:"block",position:"absolute",top:"calc(100% - 1px)",left:"50%",width:0,height:0,marginLeft:t.spacing(-1),borderLeft:"".concat(t.spacing(1),"px solid transparent"),borderRight:"".concat(t.spacing(1),"px solid transparent"),borderTop:"".concat(t.spacing(1),"px solid ").concat(t.palette.grey[900])}})}}}));function s(){var t=c(),e=Object(o.useDispatch)(),a=!1;return{handleViewStateChange:function(t){var a=t.viewState;e(Object(i.setViewState)(a))},handleSizeChange:function(t){var a=t.width,n=t.height;e(Object(i.setViewState)({width:a,height:n}))},handleHover:function(t){var e=t.object;return a=!!e},handleCursor:function(t){return t.isDragging?"grabbing":a?"pointer":"grab"},handleTooltip:function(e){var a;if(null!==e&&void 0!==e&&null!==(a=e.object)&&void 0!==a&&a.html)return{html:"<div class='content'>".concat(e.object.html,"<div class='arrow'></div></div>"),className:t.tooltip,style:{padding:0,background:"none"}}}}}},829:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return s}));var n=a(5),o=a(177),r=(a(736),a(367)),i=a(706),c=a(24);function s(t){var e=t.layers,a=Object(o.useSelector)((function(t){return t.carto.viewState})),s=Object(o.useSelector)((function(t){return r.BASEMAPS[t.carto.basemap]})),l=Object(o.useSelector)((function(t){return t.carto.googleApiKey})),u=Object(o.useSelector)((function(t){return t.carto.googleMapId})),p=Object(i.a)(),d=p.handleSizeChange,g=p.handleTooltip,b=p.handleViewStateChange;return Object(c.jsx)(r.GoogleMap,{basemap:s,apiKey:l,mapId:u,viewState:Object(n.a)({},a),layers:e,onViewStateChange:b,onResize:d,getTooltip:g})}}}]);
//# sourceMappingURL=google-map.f416db1c.chunk.js.map
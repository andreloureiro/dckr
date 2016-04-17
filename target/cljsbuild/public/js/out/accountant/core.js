// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__16589_16592 = el;
var G__16590_16593 = type;
var G__16591_16594 = ((function (G__16589_16592,G__16590_16593,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__16589_16592,G__16590_16593,out))
;
goog.events.listen(G__16589_16592,G__16590_16593,G__16591_16594);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__13822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto__,navigation){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto__,navigation){
return (function (state_16637){
var state_val_16638 = (state_16637[(1)]);
if((state_val_16638 === (1))){
var state_16637__$1 = state_16637;
var statearr_16639_16653 = state_16637__$1;
(statearr_16639_16653[(2)] = null);

(statearr_16639_16653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16638 === (2))){
var state_16637__$1 = state_16637;
var statearr_16640_16654 = state_16637__$1;
(statearr_16640_16654[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_16638 === (3))){
var inst_16635 = (state_16637[(2)]);
var state_16637__$1 = state_16637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16637__$1,inst_16635);
} else {
if((state_val_16638 === (4))){
var state_16637__$1 = state_16637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16637__$1,(7),navigation);
} else {
if((state_val_16638 === (5))){
var state_16637__$1 = state_16637;
var statearr_16642_16655 = state_16637__$1;
(statearr_16642_16655[(2)] = null);

(statearr_16642_16655[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16638 === (6))){
var inst_16633 = (state_16637[(2)]);
var state_16637__$1 = state_16637;
var statearr_16643_16656 = state_16637__$1;
(statearr_16643_16656[(2)] = inst_16633);

(statearr_16643_16656[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16638 === (7))){
var inst_16627 = (state_16637[(2)]);
var inst_16628 = inst_16627.token;
var inst_16629 = (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(inst_16628) : nav_handler.call(null,inst_16628));
var state_16637__$1 = (function (){var statearr_16644 = state_16637;
(statearr_16644[(7)] = inst_16629);

return statearr_16644;
})();
var statearr_16645_16657 = state_16637__$1;
(statearr_16645_16657[(2)] = null);

(statearr_16645_16657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__13822__auto__,navigation))
;
return ((function (switch__13708__auto__,c__13822__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____1 = (function (state_16637){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16637);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16650){if((e16650 instanceof Object)){
var ex__13712__auto__ = e16650;
var statearr_16651_16658 = state_16637;
(statearr_16651_16658[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16637);

return cljs.core.cst$kw$recur;
} else {
throw e16650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16659 = state_16637;
state_16637 = G__16659;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__ = function(state_16637){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____1.call(this,state_16637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__13709__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto__,navigation))
})();
var state__13824__auto__ = (function (){var statearr_16652 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto__);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto__,navigation))
);

return c__13822__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4655__auto__ = e.href;
if(cljs.core.truth_(temp__4655__auto__)){
var href = temp__4655__auto__;
return href;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__16660 = parent;
e = G__16660;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6207__auto__ = title;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
var or__6207__auto____$1 = document.title;
if(cljs.core.truth_(or__6207__auto____$1)){
return or__6207__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
var G__16664 = document;
var G__16665 = "click";
var G__16666 = ((function (G__16664,G__16665){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6207__auto__ = meta_key;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
var or__6207__auto____$1 = alt_key;
if(cljs.core.truth_(or__6207__auto____$1)){
return or__6207__auto____$1;
} else {
var or__6207__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6207__auto____$2)){
return or__6207__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__6195__auto__ = cljs.core.not(any_key);
if(and__6195__auto__){
var and__6195__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6195__auto____$1){
var and__6195__auto____$2 = (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
if(cljs.core.truth_(and__6195__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
} else {
return and__6195__auto____$2;
}
} else {
return and__6195__auto____$1;
}
} else {
return and__6195__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__16664,G__16665))
;
return goog.events.listen(G__16664,G__16665,G__16666);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__16667){
var map__16670 = p__16667;
var map__16670__$1 = ((((!((map__16670 == null)))?((((map__16670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16670):map__16670);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16670__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16672_SHARP_){
return cljs.core.name(p1__16672_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__16673_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__16673_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args16674 = [];
var len__7276__auto___16677 = arguments.length;
var i__7277__auto___16678 = (0);
while(true){
if((i__7277__auto___16678 < len__7276__auto___16677)){
args16674.push((arguments[i__7277__auto___16678]));

var G__16679 = (i__7277__auto___16678 + (1));
i__7277__auto___16678 = G__16679;
continue;
} else {
}
break;
}

var G__16676 = args16674.length;
switch (G__16676) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16674.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__16682 = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__16682) : accountant.core.nav_handler.call(null,G__16682));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

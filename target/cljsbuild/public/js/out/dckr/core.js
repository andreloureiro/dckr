// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('dckr.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
dckr.core.home_page = (function dckr$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to dckr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/about"], null),"go to about page"], null)], null)], null);
});
dckr.core.about_page = (function dckr$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About dckr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"go to the home page"], null)], null)], null);
});
dckr.core.current_page = (function dckr$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
var action__16712__auto___16833 = (function (params__16713__auto__){
if(cljs.core.map_QMARK_(params__16713__auto__)){
var map__16830 = params__16713__auto__;
var map__16830__$1 = ((((!((map__16830 == null)))?((((map__16830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16830):map__16830);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dckr.core.home_page;},cljs.core.cst$sym$dckr$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dckr$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/dckr/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dckr.core.home_page)?dckr.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__16713__auto__)){
var vec__16832 = params__16713__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dckr.core.home_page;},cljs.core.cst$sym$dckr$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dckr$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/dckr/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dckr.core.home_page)?dckr.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__16712__auto___16833);

var action__16712__auto___16837 = (function (params__16713__auto__){
if(cljs.core.map_QMARK_(params__16713__auto__)){
var map__16834 = params__16713__auto__;
var map__16834__$1 = ((((!((map__16834 == null)))?((((map__16834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16834):map__16834);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dckr.core.about_page;},cljs.core.cst$sym$dckr$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dckr$core,cljs.core.cst$sym$about_DASH_page,"src/cljs/dckr/core.cljs",17,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dckr.core.about_page)?dckr.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__16713__auto__)){
var vec__16836 = params__16713__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return dckr.core.about_page;},cljs.core.cst$sym$dckr$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dckr$core,cljs.core.cst$sym$about_DASH_page,"src/cljs/dckr/core.cljs",17,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(dckr.core.about_page)?dckr.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__16712__auto___16837);

dckr.core.mount_root = (function dckr$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dckr.core.current_page], null),document.getElementById("app"));
});
dckr.core.init_BANG_ = (function dckr$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return dckr.core.mount_root();
});

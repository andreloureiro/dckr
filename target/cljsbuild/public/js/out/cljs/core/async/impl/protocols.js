// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__6870__auto__ = (((port == null))?null:port);
var m__6871__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(port,fn1_handler) : m__6871__auto__.call(null,port,fn1_handler));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(port,fn1_handler) : m__6871__auto____$1.call(null,port,fn1_handler));
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__6870__auto__ = (((port == null))?null:port);
var m__6871__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$3(port,val,fn1_handler) : m__6871__auto__.call(null,port,val,fn1_handler));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3(port,val,fn1_handler) : m__6871__auto____$1.call(null,port,val,fn1_handler));
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__6870__auto__ = (((chan == null))?null:chan);
var m__6871__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(chan) : m__6871__auto__.call(null,chan));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(chan) : m__6871__auto____$1.call(null,chan));
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__6870__auto__ = (((chan == null))?null:chan);
var m__6871__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(chan) : m__6871__auto__.call(null,chan));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(chan) : m__6871__auto____$1.call(null,chan));
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__6870__auto__ = (((h == null))?null:h);
var m__6871__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(h) : m__6871__auto__.call(null,h));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(h) : m__6871__auto____$1.call(null,h));
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__6870__auto__ = (((h == null))?null:h);
var m__6871__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(h) : m__6871__auto__.call(null,h));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(h) : m__6871__auto____$1.call(null,h));
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__6870__auto__ = (((b == null))?null:b);
var m__6871__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(b) : m__6871__auto__.call(null,b));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(b) : m__6871__auto____$1.call(null,b));
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__6870__auto__ = (((b == null))?null:b);
var m__6871__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(b) : m__6871__auto__.call(null,b));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(b) : m__6871__auto____$1.call(null,b));
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__6870__auto__ = (((b == null))?null:b);
var m__6871__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(b,itm) : m__6871__auto__.call(null,b,itm));
} else {
var m__6871__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(b,itm) : m__6871__auto____$1.call(null,b,itm));
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var args12060 = [];
var len__7276__auto___12063 = arguments.length;
var i__7277__auto___12064 = (0);
while(true){
if((i__7277__auto___12064 < len__7276__auto___12063)){
args12060.push((arguments[i__7277__auto___12064]));

var G__12065 = (i__7277__auto___12064 + (1));
i__7277__auto___12064 = G__12065;
continue;
} else {
}
break;
}

var G__12062 = args12060.length;
switch (G__12062) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12060.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


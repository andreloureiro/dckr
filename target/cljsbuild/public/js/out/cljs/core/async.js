// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async13870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13870 = (function (fn_handler,f,meta13871){
this.fn_handler = fn_handler;
this.f = f;
this.meta13871 = meta13871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13872,meta13871__$1){
var self__ = this;
var _13872__$1 = this;
return (new cljs.core.async.t_cljs$core$async13870(self__.fn_handler,self__.f,meta13871__$1));
});

cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13872){
var self__ = this;
var _13872__$1 = this;
return self__.meta13871;
});

cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta13871], null);
});

cljs.core.async.t_cljs$core$async13870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13870";

cljs.core.async.t_cljs$core$async13870.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13870");
});

cljs.core.async.__GT_t_cljs$core$async13870 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async13870(fn_handler__$1,f__$1,meta13871){
return (new cljs.core.async.t_cljs$core$async13870(fn_handler__$1,f__$1,meta13871));
});

}

return (new cljs.core.async.t_cljs$core$async13870(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13875 = [];
var len__7276__auto___13878 = arguments.length;
var i__7277__auto___13879 = (0);
while(true){
if((i__7277__auto___13879 < len__7276__auto___13878)){
args13875.push((arguments[i__7277__auto___13879]));

var G__13880 = (i__7277__auto___13879 + (1));
i__7277__auto___13879 = G__13880;
continue;
} else {
}
break;
}

var G__13877 = args13875.length;
switch (G__13877) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13875.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13882 = [];
var len__7276__auto___13885 = arguments.length;
var i__7277__auto___13886 = (0);
while(true){
if((i__7277__auto___13886 < len__7276__auto___13885)){
args13882.push((arguments[i__7277__auto___13886]));

var G__13887 = (i__7277__auto___13886 + (1));
i__7277__auto___13886 = G__13887;
continue;
} else {
}
break;
}

var G__13884 = args13882.length;
switch (G__13884) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13882.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_13889 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13889) : fn1.call(null,val_13889));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13889,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13889) : fn1.call(null,val_13889));
});})(val_13889,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13890 = [];
var len__7276__auto___13893 = arguments.length;
var i__7277__auto___13894 = (0);
while(true){
if((i__7277__auto___13894 < len__7276__auto___13893)){
args13890.push((arguments[i__7277__auto___13894]));

var G__13895 = (i__7277__auto___13894 + (1));
i__7277__auto___13894 = G__13895;
continue;
} else {
}
break;
}

var G__13892 = args13890.length;
switch (G__13892) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13890.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7121__auto___13897 = n;
var x_13898 = (0);
while(true){
if((x_13898 < n__7121__auto___13897)){
(a[x_13898] = (0));

var G__13899 = (x_13898 + (1));
x_13898 = G__13899;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13900 = (i + (1));
i = G__13900;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13904 = (function (alt_flag,flag,meta13905){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13905 = meta13905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13906,meta13905__$1){
var self__ = this;
var _13906__$1 = this;
return (new cljs.core.async.t_cljs$core$async13904(self__.alt_flag,self__.flag,meta13905__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13906){
var self__ = this;
var _13906__$1 = this;
return self__.meta13905;
});})(flag))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13904.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13905], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13904";

cljs.core.async.t_cljs$core$async13904.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13904");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13904 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13904(alt_flag__$1,flag__$1,meta13905){
return (new cljs.core.async.t_cljs$core$async13904(alt_flag__$1,flag__$1,meta13905));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13904(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13910 = (function (alt_handler,flag,cb,meta13911){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13911 = meta13911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13912,meta13911__$1){
var self__ = this;
var _13912__$1 = this;
return (new cljs.core.async.t_cljs$core$async13910(self__.alt_handler,self__.flag,self__.cb,meta13911__$1));
});

cljs.core.async.t_cljs$core$async13910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13912){
var self__ = this;
var _13912__$1 = this;
return self__.meta13911;
});

cljs.core.async.t_cljs$core$async13910.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13911], null);
});

cljs.core.async.t_cljs$core$async13910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13910";

cljs.core.async.t_cljs$core$async13910.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async13910");
});

cljs.core.async.__GT_t_cljs$core$async13910 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13910(alt_handler__$1,flag__$1,cb__$1,meta13911){
return (new cljs.core.async.t_cljs$core$async13910(alt_handler__$1,flag__$1,cb__$1,meta13911));
});

}

return (new cljs.core.async.t_cljs$core$async13910(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13913_SHARP_){
var G__13917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13913_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13917) : fret.call(null,G__13917));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13914_SHARP_){
var G__13918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13914_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13918) : fret.call(null,G__13918));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6207__auto__ = wport;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13919 = (i + (1));
i = G__13919;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6207__auto__ = ret;
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6195__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6195__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___13925 = arguments.length;
var i__7277__auto___13926 = (0);
while(true){
if((i__7277__auto___13926 < len__7276__auto___13925)){
args__7283__auto__.push((arguments[i__7277__auto___13926]));

var G__13927 = (i__7277__auto___13926 + (1));
i__7277__auto___13926 = G__13927;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13922){
var map__13923 = p__13922;
var map__13923__$1 = ((((!((map__13923 == null)))?((((map__13923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13923):map__13923);
var opts = map__13923__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13920){
var G__13921 = cljs.core.first(seq13920);
var seq13920__$1 = cljs.core.next(seq13920);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13921,seq13920__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13928 = [];
var len__7276__auto___13978 = arguments.length;
var i__7277__auto___13979 = (0);
while(true){
if((i__7277__auto___13979 < len__7276__auto___13978)){
args13928.push((arguments[i__7277__auto___13979]));

var G__13980 = (i__7277__auto___13979 + (1));
i__7277__auto___13979 = G__13980;
continue;
} else {
}
break;
}

var G__13930 = args13928.length;
switch (G__13930) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13928.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13822__auto___13982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___13982){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___13982){
return (function (state_13954){
var state_val_13955 = (state_13954[(1)]);
if((state_val_13955 === (7))){
var inst_13950 = (state_13954[(2)]);
var state_13954__$1 = state_13954;
var statearr_13956_13983 = state_13954__$1;
(statearr_13956_13983[(2)] = inst_13950);

(statearr_13956_13983[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (1))){
var state_13954__$1 = state_13954;
var statearr_13957_13984 = state_13954__$1;
(statearr_13957_13984[(2)] = null);

(statearr_13957_13984[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (4))){
var inst_13933 = (state_13954[(7)]);
var inst_13933__$1 = (state_13954[(2)]);
var inst_13934 = (inst_13933__$1 == null);
var state_13954__$1 = (function (){var statearr_13958 = state_13954;
(statearr_13958[(7)] = inst_13933__$1);

return statearr_13958;
})();
if(cljs.core.truth_(inst_13934)){
var statearr_13959_13985 = state_13954__$1;
(statearr_13959_13985[(1)] = (5));

} else {
var statearr_13960_13986 = state_13954__$1;
(statearr_13960_13986[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (13))){
var state_13954__$1 = state_13954;
var statearr_13961_13987 = state_13954__$1;
(statearr_13961_13987[(2)] = null);

(statearr_13961_13987[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (6))){
var inst_13933 = (state_13954[(7)]);
var state_13954__$1 = state_13954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13954__$1,(11),to,inst_13933);
} else {
if((state_val_13955 === (3))){
var inst_13952 = (state_13954[(2)]);
var state_13954__$1 = state_13954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13954__$1,inst_13952);
} else {
if((state_val_13955 === (12))){
var state_13954__$1 = state_13954;
var statearr_13962_13988 = state_13954__$1;
(statearr_13962_13988[(2)] = null);

(statearr_13962_13988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (2))){
var state_13954__$1 = state_13954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13954__$1,(4),from);
} else {
if((state_val_13955 === (11))){
var inst_13943 = (state_13954[(2)]);
var state_13954__$1 = state_13954;
if(cljs.core.truth_(inst_13943)){
var statearr_13963_13989 = state_13954__$1;
(statearr_13963_13989[(1)] = (12));

} else {
var statearr_13964_13990 = state_13954__$1;
(statearr_13964_13990[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (9))){
var state_13954__$1 = state_13954;
var statearr_13965_13991 = state_13954__$1;
(statearr_13965_13991[(2)] = null);

(statearr_13965_13991[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (5))){
var state_13954__$1 = state_13954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13966_13992 = state_13954__$1;
(statearr_13966_13992[(1)] = (8));

} else {
var statearr_13967_13993 = state_13954__$1;
(statearr_13967_13993[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (14))){
var inst_13948 = (state_13954[(2)]);
var state_13954__$1 = state_13954;
var statearr_13968_13994 = state_13954__$1;
(statearr_13968_13994[(2)] = inst_13948);

(statearr_13968_13994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (10))){
var inst_13940 = (state_13954[(2)]);
var state_13954__$1 = state_13954;
var statearr_13969_13995 = state_13954__$1;
(statearr_13969_13995[(2)] = inst_13940);

(statearr_13969_13995[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13955 === (8))){
var inst_13937 = cljs.core.async.close_BANG_(to);
var state_13954__$1 = state_13954;
var statearr_13970_13996 = state_13954__$1;
(statearr_13970_13996[(2)] = inst_13937);

(statearr_13970_13996[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__13822__auto___13982))
;
return ((function (switch__13708__auto__,c__13822__auto___13982){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_13974 = [null,null,null,null,null,null,null,null];
(statearr_13974[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_13974[(1)] = (1));

return statearr_13974;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_13954){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_13954);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e13975){if((e13975 instanceof Object)){
var ex__13712__auto__ = e13975;
var statearr_13976_13997 = state_13954;
(statearr_13976_13997[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13954);

return cljs.core.cst$kw$recur;
} else {
throw e13975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__13998 = state_13954;
state_13954 = G__13998;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_13954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_13954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___13982))
})();
var state__13824__auto__ = (function (){var statearr_13977 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_13977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___13982);

return statearr_13977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___13982))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14182){
var vec__14183 = p__14182;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(1),null);
var job = vec__14183;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13822__auto___14365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results){
return (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (1))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14188__$1,(2),res,v);
} else {
if((state_val_14189 === (2))){
var inst_14185 = (state_14188[(2)]);
var inst_14186 = cljs.core.async.close_BANG_(res);
var state_14188__$1 = (function (){var statearr_14190 = state_14188;
(statearr_14190[(7)] = inst_14185);

return statearr_14190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14188__$1,inst_14186);
} else {
return null;
}
}
});})(c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results))
;
return ((function (switch__13708__auto__,c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_14194 = [null,null,null,null,null,null,null,null];
(statearr_14194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__);

(statearr_14194[(1)] = (1));

return statearr_14194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1 = (function (state_14188){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14188);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14195){if((e14195 instanceof Object)){
var ex__13712__auto__ = e14195;
var statearr_14196_14366 = state_14188;
(statearr_14196_14366[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14188);

return cljs.core.cst$kw$recur;
} else {
throw e14195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14367 = state_14188;
state_14188 = G__14367;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results))
})();
var state__13824__auto__ = (function (){var statearr_14197 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___14365);

return statearr_14197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___14365,res,vec__14183,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14198){
var vec__14199 = p__14198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(1),null);
var job = vec__14199;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7121__auto___14368 = n;
var __14369 = (0);
while(true){
if((__14369 < n__7121__auto___14368)){
var G__14200_14370 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14200_14370) {
case "compute":
var c__13822__auto___14372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14369,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (__14369,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function (state_14213){
var state_val_14214 = (state_14213[(1)]);
if((state_val_14214 === (1))){
var state_14213__$1 = state_14213;
var statearr_14215_14373 = state_14213__$1;
(statearr_14215_14373[(2)] = null);

(statearr_14215_14373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14214 === (2))){
var state_14213__$1 = state_14213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14213__$1,(4),jobs);
} else {
if((state_val_14214 === (3))){
var inst_14211 = (state_14213[(2)]);
var state_14213__$1 = state_14213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14213__$1,inst_14211);
} else {
if((state_val_14214 === (4))){
var inst_14203 = (state_14213[(2)]);
var inst_14204 = process(inst_14203);
var state_14213__$1 = state_14213;
if(cljs.core.truth_(inst_14204)){
var statearr_14216_14374 = state_14213__$1;
(statearr_14216_14374[(1)] = (5));

} else {
var statearr_14217_14375 = state_14213__$1;
(statearr_14217_14375[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14214 === (5))){
var state_14213__$1 = state_14213;
var statearr_14218_14376 = state_14213__$1;
(statearr_14218_14376[(2)] = null);

(statearr_14218_14376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14214 === (6))){
var state_14213__$1 = state_14213;
var statearr_14219_14377 = state_14213__$1;
(statearr_14219_14377[(2)] = null);

(statearr_14219_14377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14214 === (7))){
var inst_14209 = (state_14213[(2)]);
var state_14213__$1 = state_14213;
var statearr_14220_14378 = state_14213__$1;
(statearr_14220_14378[(2)] = inst_14209);

(statearr_14220_14378[(1)] = (3));


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
});})(__14369,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
;
return ((function (__14369,switch__13708__auto__,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_14224 = [null,null,null,null,null,null,null];
(statearr_14224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__);

(statearr_14224[(1)] = (1));

return statearr_14224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1 = (function (state_14213){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14213);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14225){if((e14225 instanceof Object)){
var ex__13712__auto__ = e14225;
var statearr_14226_14379 = state_14213;
(statearr_14226_14379[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14213);

return cljs.core.cst$kw$recur;
} else {
throw e14225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14380 = state_14213;
state_14213 = G__14380;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = function(state_14213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1.call(this,state_14213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__;
})()
;})(__14369,switch__13708__auto__,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
})();
var state__13824__auto__ = (function (){var statearr_14227 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___14372);

return statearr_14227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(__14369,c__13822__auto___14372,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
);


break;
case "async":
var c__13822__auto___14381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14369,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (__14369,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function (state_14240){
var state_val_14241 = (state_14240[(1)]);
if((state_val_14241 === (1))){
var state_14240__$1 = state_14240;
var statearr_14242_14382 = state_14240__$1;
(statearr_14242_14382[(2)] = null);

(statearr_14242_14382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14241 === (2))){
var state_14240__$1 = state_14240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14240__$1,(4),jobs);
} else {
if((state_val_14241 === (3))){
var inst_14238 = (state_14240[(2)]);
var state_14240__$1 = state_14240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14240__$1,inst_14238);
} else {
if((state_val_14241 === (4))){
var inst_14230 = (state_14240[(2)]);
var inst_14231 = async(inst_14230);
var state_14240__$1 = state_14240;
if(cljs.core.truth_(inst_14231)){
var statearr_14243_14383 = state_14240__$1;
(statearr_14243_14383[(1)] = (5));

} else {
var statearr_14244_14384 = state_14240__$1;
(statearr_14244_14384[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14241 === (5))){
var state_14240__$1 = state_14240;
var statearr_14245_14385 = state_14240__$1;
(statearr_14245_14385[(2)] = null);

(statearr_14245_14385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14241 === (6))){
var state_14240__$1 = state_14240;
var statearr_14246_14386 = state_14240__$1;
(statearr_14246_14386[(2)] = null);

(statearr_14246_14386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14241 === (7))){
var inst_14236 = (state_14240[(2)]);
var state_14240__$1 = state_14240;
var statearr_14247_14387 = state_14240__$1;
(statearr_14247_14387[(2)] = inst_14236);

(statearr_14247_14387[(1)] = (3));


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
});})(__14369,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
;
return ((function (__14369,switch__13708__auto__,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_14251 = [null,null,null,null,null,null,null];
(statearr_14251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__);

(statearr_14251[(1)] = (1));

return statearr_14251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1 = (function (state_14240){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14240);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14252){if((e14252 instanceof Object)){
var ex__13712__auto__ = e14252;
var statearr_14253_14388 = state_14240;
(statearr_14253_14388[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14240);

return cljs.core.cst$kw$recur;
} else {
throw e14252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14389 = state_14240;
state_14240 = G__14389;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = function(state_14240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1.call(this,state_14240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__;
})()
;})(__14369,switch__13708__auto__,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
})();
var state__13824__auto__ = (function (){var statearr_14254 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___14381);

return statearr_14254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(__14369,c__13822__auto___14381,G__14200_14370,n__7121__auto___14368,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14390 = (__14369 + (1));
__14369 = G__14390;
continue;
} else {
}
break;
}

var c__13822__auto___14391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___14391,jobs,results,process,async){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___14391,jobs,results,process,async){
return (function (state_14276){
var state_val_14277 = (state_14276[(1)]);
if((state_val_14277 === (1))){
var state_14276__$1 = state_14276;
var statearr_14278_14392 = state_14276__$1;
(statearr_14278_14392[(2)] = null);

(statearr_14278_14392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14277 === (2))){
var state_14276__$1 = state_14276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14276__$1,(4),from);
} else {
if((state_val_14277 === (3))){
var inst_14274 = (state_14276[(2)]);
var state_14276__$1 = state_14276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14276__$1,inst_14274);
} else {
if((state_val_14277 === (4))){
var inst_14257 = (state_14276[(7)]);
var inst_14257__$1 = (state_14276[(2)]);
var inst_14258 = (inst_14257__$1 == null);
var state_14276__$1 = (function (){var statearr_14279 = state_14276;
(statearr_14279[(7)] = inst_14257__$1);

return statearr_14279;
})();
if(cljs.core.truth_(inst_14258)){
var statearr_14280_14393 = state_14276__$1;
(statearr_14280_14393[(1)] = (5));

} else {
var statearr_14281_14394 = state_14276__$1;
(statearr_14281_14394[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14277 === (5))){
var inst_14260 = cljs.core.async.close_BANG_(jobs);
var state_14276__$1 = state_14276;
var statearr_14282_14395 = state_14276__$1;
(statearr_14282_14395[(2)] = inst_14260);

(statearr_14282_14395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14277 === (6))){
var inst_14257 = (state_14276[(7)]);
var inst_14262 = (state_14276[(8)]);
var inst_14262__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14264 = [inst_14257,inst_14262__$1];
var inst_14265 = (new cljs.core.PersistentVector(null,2,(5),inst_14263,inst_14264,null));
var state_14276__$1 = (function (){var statearr_14283 = state_14276;
(statearr_14283[(8)] = inst_14262__$1);

return statearr_14283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14276__$1,(8),jobs,inst_14265);
} else {
if((state_val_14277 === (7))){
var inst_14272 = (state_14276[(2)]);
var state_14276__$1 = state_14276;
var statearr_14284_14396 = state_14276__$1;
(statearr_14284_14396[(2)] = inst_14272);

(statearr_14284_14396[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14277 === (8))){
var inst_14262 = (state_14276[(8)]);
var inst_14267 = (state_14276[(2)]);
var state_14276__$1 = (function (){var statearr_14285 = state_14276;
(statearr_14285[(9)] = inst_14267);

return statearr_14285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14276__$1,(9),results,inst_14262);
} else {
if((state_val_14277 === (9))){
var inst_14269 = (state_14276[(2)]);
var state_14276__$1 = (function (){var statearr_14286 = state_14276;
(statearr_14286[(10)] = inst_14269);

return statearr_14286;
})();
var statearr_14287_14397 = state_14276__$1;
(statearr_14287_14397[(2)] = null);

(statearr_14287_14397[(1)] = (2));


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
}
}
});})(c__13822__auto___14391,jobs,results,process,async))
;
return ((function (switch__13708__auto__,c__13822__auto___14391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_14291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__);

(statearr_14291[(1)] = (1));

return statearr_14291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1 = (function (state_14276){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14276);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14292){if((e14292 instanceof Object)){
var ex__13712__auto__ = e14292;
var statearr_14293_14398 = state_14276;
(statearr_14293_14398[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14276);

return cljs.core.cst$kw$recur;
} else {
throw e14292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14399 = state_14276;
state_14276 = G__14399;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = function(state_14276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1.call(this,state_14276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___14391,jobs,results,process,async))
})();
var state__13824__auto__ = (function (){var statearr_14294 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___14391);

return statearr_14294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___14391,jobs,results,process,async))
);


var c__13822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto__,jobs,results,process,async){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto__,jobs,results,process,async){
return (function (state_14332){
var state_val_14333 = (state_14332[(1)]);
if((state_val_14333 === (7))){
var inst_14328 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
var statearr_14334_14400 = state_14332__$1;
(statearr_14334_14400[(2)] = inst_14328);

(statearr_14334_14400[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (20))){
var state_14332__$1 = state_14332;
var statearr_14335_14401 = state_14332__$1;
(statearr_14335_14401[(2)] = null);

(statearr_14335_14401[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (1))){
var state_14332__$1 = state_14332;
var statearr_14336_14402 = state_14332__$1;
(statearr_14336_14402[(2)] = null);

(statearr_14336_14402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (4))){
var inst_14297 = (state_14332[(7)]);
var inst_14297__$1 = (state_14332[(2)]);
var inst_14298 = (inst_14297__$1 == null);
var state_14332__$1 = (function (){var statearr_14337 = state_14332;
(statearr_14337[(7)] = inst_14297__$1);

return statearr_14337;
})();
if(cljs.core.truth_(inst_14298)){
var statearr_14338_14403 = state_14332__$1;
(statearr_14338_14403[(1)] = (5));

} else {
var statearr_14339_14404 = state_14332__$1;
(statearr_14339_14404[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (15))){
var inst_14310 = (state_14332[(8)]);
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14332__$1,(18),to,inst_14310);
} else {
if((state_val_14333 === (21))){
var inst_14323 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
var statearr_14340_14405 = state_14332__$1;
(statearr_14340_14405[(2)] = inst_14323);

(statearr_14340_14405[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (13))){
var inst_14325 = (state_14332[(2)]);
var state_14332__$1 = (function (){var statearr_14341 = state_14332;
(statearr_14341[(9)] = inst_14325);

return statearr_14341;
})();
var statearr_14342_14406 = state_14332__$1;
(statearr_14342_14406[(2)] = null);

(statearr_14342_14406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (6))){
var inst_14297 = (state_14332[(7)]);
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14332__$1,(11),inst_14297);
} else {
if((state_val_14333 === (17))){
var inst_14318 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
if(cljs.core.truth_(inst_14318)){
var statearr_14343_14407 = state_14332__$1;
(statearr_14343_14407[(1)] = (19));

} else {
var statearr_14344_14408 = state_14332__$1;
(statearr_14344_14408[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (3))){
var inst_14330 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14332__$1,inst_14330);
} else {
if((state_val_14333 === (12))){
var inst_14307 = (state_14332[(10)]);
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14332__$1,(14),inst_14307);
} else {
if((state_val_14333 === (2))){
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14332__$1,(4),results);
} else {
if((state_val_14333 === (19))){
var state_14332__$1 = state_14332;
var statearr_14345_14409 = state_14332__$1;
(statearr_14345_14409[(2)] = null);

(statearr_14345_14409[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (11))){
var inst_14307 = (state_14332[(2)]);
var state_14332__$1 = (function (){var statearr_14346 = state_14332;
(statearr_14346[(10)] = inst_14307);

return statearr_14346;
})();
var statearr_14347_14410 = state_14332__$1;
(statearr_14347_14410[(2)] = null);

(statearr_14347_14410[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (9))){
var state_14332__$1 = state_14332;
var statearr_14348_14411 = state_14332__$1;
(statearr_14348_14411[(2)] = null);

(statearr_14348_14411[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (5))){
var state_14332__$1 = state_14332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14349_14412 = state_14332__$1;
(statearr_14349_14412[(1)] = (8));

} else {
var statearr_14350_14413 = state_14332__$1;
(statearr_14350_14413[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (14))){
var inst_14312 = (state_14332[(11)]);
var inst_14310 = (state_14332[(8)]);
var inst_14310__$1 = (state_14332[(2)]);
var inst_14311 = (inst_14310__$1 == null);
var inst_14312__$1 = cljs.core.not(inst_14311);
var state_14332__$1 = (function (){var statearr_14351 = state_14332;
(statearr_14351[(11)] = inst_14312__$1);

(statearr_14351[(8)] = inst_14310__$1);

return statearr_14351;
})();
if(inst_14312__$1){
var statearr_14352_14414 = state_14332__$1;
(statearr_14352_14414[(1)] = (15));

} else {
var statearr_14353_14415 = state_14332__$1;
(statearr_14353_14415[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (16))){
var inst_14312 = (state_14332[(11)]);
var state_14332__$1 = state_14332;
var statearr_14354_14416 = state_14332__$1;
(statearr_14354_14416[(2)] = inst_14312);

(statearr_14354_14416[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (10))){
var inst_14304 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
var statearr_14355_14417 = state_14332__$1;
(statearr_14355_14417[(2)] = inst_14304);

(statearr_14355_14417[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (18))){
var inst_14315 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
var statearr_14356_14418 = state_14332__$1;
(statearr_14356_14418[(2)] = inst_14315);

(statearr_14356_14418[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (8))){
var inst_14301 = cljs.core.async.close_BANG_(to);
var state_14332__$1 = state_14332;
var statearr_14357_14419 = state_14332__$1;
(statearr_14357_14419[(2)] = inst_14301);

(statearr_14357_14419[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto__,jobs,results,process,async))
;
return ((function (switch__13708__auto__,c__13822__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_14361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__);

(statearr_14361[(1)] = (1));

return statearr_14361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1 = (function (state_14332){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14332);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14362){if((e14362 instanceof Object)){
var ex__13712__auto__ = e14362;
var statearr_14363_14420 = state_14332;
(statearr_14363_14420[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14332);

return cljs.core.cst$kw$recur;
} else {
throw e14362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14421 = state_14332;
state_14332 = G__14421;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__ = function(state_14332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1.call(this,state_14332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto__,jobs,results,process,async))
})();
var state__13824__auto__ = (function (){var statearr_14364 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto__);

return statearr_14364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto__,jobs,results,process,async))
);

return c__13822__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14422 = [];
var len__7276__auto___14425 = arguments.length;
var i__7277__auto___14426 = (0);
while(true){
if((i__7277__auto___14426 < len__7276__auto___14425)){
args14422.push((arguments[i__7277__auto___14426]));

var G__14427 = (i__7277__auto___14426 + (1));
i__7277__auto___14426 = G__14427;
continue;
} else {
}
break;
}

var G__14424 = args14422.length;
switch (G__14424) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14422.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14429 = [];
var len__7276__auto___14432 = arguments.length;
var i__7277__auto___14433 = (0);
while(true){
if((i__7277__auto___14433 < len__7276__auto___14432)){
args14429.push((arguments[i__7277__auto___14433]));

var G__14434 = (i__7277__auto___14433 + (1));
i__7277__auto___14433 = G__14434;
continue;
} else {
}
break;
}

var G__14431 = args14429.length;
switch (G__14431) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14429.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14436 = [];
var len__7276__auto___14489 = arguments.length;
var i__7277__auto___14490 = (0);
while(true){
if((i__7277__auto___14490 < len__7276__auto___14489)){
args14436.push((arguments[i__7277__auto___14490]));

var G__14491 = (i__7277__auto___14490 + (1));
i__7277__auto___14490 = G__14491;
continue;
} else {
}
break;
}

var G__14438 = args14436.length;
switch (G__14438) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14436.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13822__auto___14493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___14493,tc,fc){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___14493,tc,fc){
return (function (state_14464){
var state_val_14465 = (state_14464[(1)]);
if((state_val_14465 === (7))){
var inst_14460 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
var statearr_14466_14494 = state_14464__$1;
(statearr_14466_14494[(2)] = inst_14460);

(statearr_14466_14494[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (1))){
var state_14464__$1 = state_14464;
var statearr_14467_14495 = state_14464__$1;
(statearr_14467_14495[(2)] = null);

(statearr_14467_14495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (4))){
var inst_14441 = (state_14464[(7)]);
var inst_14441__$1 = (state_14464[(2)]);
var inst_14442 = (inst_14441__$1 == null);
var state_14464__$1 = (function (){var statearr_14468 = state_14464;
(statearr_14468[(7)] = inst_14441__$1);

return statearr_14468;
})();
if(cljs.core.truth_(inst_14442)){
var statearr_14469_14496 = state_14464__$1;
(statearr_14469_14496[(1)] = (5));

} else {
var statearr_14470_14497 = state_14464__$1;
(statearr_14470_14497[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (13))){
var state_14464__$1 = state_14464;
var statearr_14471_14498 = state_14464__$1;
(statearr_14471_14498[(2)] = null);

(statearr_14471_14498[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (6))){
var inst_14441 = (state_14464[(7)]);
var inst_14447 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14441) : p.call(null,inst_14441));
var state_14464__$1 = state_14464;
if(cljs.core.truth_(inst_14447)){
var statearr_14472_14499 = state_14464__$1;
(statearr_14472_14499[(1)] = (9));

} else {
var statearr_14473_14500 = state_14464__$1;
(statearr_14473_14500[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (3))){
var inst_14462 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14464__$1,inst_14462);
} else {
if((state_val_14465 === (12))){
var state_14464__$1 = state_14464;
var statearr_14474_14501 = state_14464__$1;
(statearr_14474_14501[(2)] = null);

(statearr_14474_14501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (2))){
var state_14464__$1 = state_14464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14464__$1,(4),ch);
} else {
if((state_val_14465 === (11))){
var inst_14441 = (state_14464[(7)]);
var inst_14451 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14464__$1,(8),inst_14451,inst_14441);
} else {
if((state_val_14465 === (9))){
var state_14464__$1 = state_14464;
var statearr_14475_14502 = state_14464__$1;
(statearr_14475_14502[(2)] = tc);

(statearr_14475_14502[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (5))){
var inst_14444 = cljs.core.async.close_BANG_(tc);
var inst_14445 = cljs.core.async.close_BANG_(fc);
var state_14464__$1 = (function (){var statearr_14476 = state_14464;
(statearr_14476[(8)] = inst_14444);

return statearr_14476;
})();
var statearr_14477_14503 = state_14464__$1;
(statearr_14477_14503[(2)] = inst_14445);

(statearr_14477_14503[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (14))){
var inst_14458 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
var statearr_14478_14504 = state_14464__$1;
(statearr_14478_14504[(2)] = inst_14458);

(statearr_14478_14504[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (10))){
var state_14464__$1 = state_14464;
var statearr_14479_14505 = state_14464__$1;
(statearr_14479_14505[(2)] = fc);

(statearr_14479_14505[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14465 === (8))){
var inst_14453 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
if(cljs.core.truth_(inst_14453)){
var statearr_14480_14506 = state_14464__$1;
(statearr_14480_14506[(1)] = (12));

} else {
var statearr_14481_14507 = state_14464__$1;
(statearr_14481_14507[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__13822__auto___14493,tc,fc))
;
return ((function (switch__13708__auto__,c__13822__auto___14493,tc,fc){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_14485 = [null,null,null,null,null,null,null,null,null];
(statearr_14485[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_14485[(1)] = (1));

return statearr_14485;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_14464){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14464);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14486){if((e14486 instanceof Object)){
var ex__13712__auto__ = e14486;
var statearr_14487_14508 = state_14464;
(statearr_14487_14508[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14464);

return cljs.core.cst$kw$recur;
} else {
throw e14486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14509 = state_14464;
state_14464 = G__14509;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_14464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_14464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___14493,tc,fc))
})();
var state__13824__auto__ = (function (){var statearr_14488 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___14493);

return statearr_14488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___14493,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto__){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto__){
return (function (state_14556){
var state_val_14557 = (state_14556[(1)]);
if((state_val_14557 === (1))){
var inst_14542 = init;
var state_14556__$1 = (function (){var statearr_14558 = state_14556;
(statearr_14558[(7)] = inst_14542);

return statearr_14558;
})();
var statearr_14559_14574 = state_14556__$1;
(statearr_14559_14574[(2)] = null);

(statearr_14559_14574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14557 === (2))){
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14556__$1,(4),ch);
} else {
if((state_val_14557 === (3))){
var inst_14554 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14556__$1,inst_14554);
} else {
if((state_val_14557 === (4))){
var inst_14545 = (state_14556[(8)]);
var inst_14545__$1 = (state_14556[(2)]);
var inst_14546 = (inst_14545__$1 == null);
var state_14556__$1 = (function (){var statearr_14560 = state_14556;
(statearr_14560[(8)] = inst_14545__$1);

return statearr_14560;
})();
if(cljs.core.truth_(inst_14546)){
var statearr_14561_14575 = state_14556__$1;
(statearr_14561_14575[(1)] = (5));

} else {
var statearr_14562_14576 = state_14556__$1;
(statearr_14562_14576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14557 === (5))){
var inst_14542 = (state_14556[(7)]);
var state_14556__$1 = state_14556;
var statearr_14563_14577 = state_14556__$1;
(statearr_14563_14577[(2)] = inst_14542);

(statearr_14563_14577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14557 === (6))){
var inst_14545 = (state_14556[(8)]);
var inst_14542 = (state_14556[(7)]);
var inst_14549 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14542,inst_14545) : f.call(null,inst_14542,inst_14545));
var inst_14542__$1 = inst_14549;
var state_14556__$1 = (function (){var statearr_14564 = state_14556;
(statearr_14564[(7)] = inst_14542__$1);

return statearr_14564;
})();
var statearr_14565_14578 = state_14556__$1;
(statearr_14565_14578[(2)] = null);

(statearr_14565_14578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14557 === (7))){
var inst_14552 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14566_14579 = state_14556__$1;
(statearr_14566_14579[(2)] = inst_14552);

(statearr_14566_14579[(1)] = (3));


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
});})(c__13822__auto__))
;
return ((function (switch__13708__auto__,c__13822__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13709__auto____0 = (function (){
var statearr_14570 = [null,null,null,null,null,null,null,null,null];
(statearr_14570[(0)] = cljs$core$async$reduce_$_state_machine__13709__auto__);

(statearr_14570[(1)] = (1));

return statearr_14570;
});
var cljs$core$async$reduce_$_state_machine__13709__auto____1 = (function (state_14556){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14556);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14571){if((e14571 instanceof Object)){
var ex__13712__auto__ = e14571;
var statearr_14572_14580 = state_14556;
(statearr_14572_14580[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14556);

return cljs.core.cst$kw$recur;
} else {
throw e14571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14581 = state_14556;
state_14556 = G__14581;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13709__auto__ = function(state_14556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13709__auto____1.call(this,state_14556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13709__auto____0;
cljs$core$async$reduce_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13709__auto____1;
return cljs$core$async$reduce_$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto__))
})();
var state__13824__auto__ = (function (){var statearr_14573 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto__);

return statearr_14573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto__))
);

return c__13822__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14582 = [];
var len__7276__auto___14634 = arguments.length;
var i__7277__auto___14635 = (0);
while(true){
if((i__7277__auto___14635 < len__7276__auto___14634)){
args14582.push((arguments[i__7277__auto___14635]));

var G__14636 = (i__7277__auto___14635 + (1));
i__7277__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var G__14584 = args14582.length;
switch (G__14584) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14582.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto__){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto__){
return (function (state_14609){
var state_val_14610 = (state_14609[(1)]);
if((state_val_14610 === (7))){
var inst_14591 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14611_14638 = state_14609__$1;
(statearr_14611_14638[(2)] = inst_14591);

(statearr_14611_14638[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (1))){
var inst_14585 = cljs.core.seq(coll);
var inst_14586 = inst_14585;
var state_14609__$1 = (function (){var statearr_14612 = state_14609;
(statearr_14612[(7)] = inst_14586);

return statearr_14612;
})();
var statearr_14613_14639 = state_14609__$1;
(statearr_14613_14639[(2)] = null);

(statearr_14613_14639[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (4))){
var inst_14586 = (state_14609[(7)]);
var inst_14589 = cljs.core.first(inst_14586);
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14609__$1,(7),ch,inst_14589);
} else {
if((state_val_14610 === (13))){
var inst_14603 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14614_14640 = state_14609__$1;
(statearr_14614_14640[(2)] = inst_14603);

(statearr_14614_14640[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (6))){
var inst_14594 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
if(cljs.core.truth_(inst_14594)){
var statearr_14615_14641 = state_14609__$1;
(statearr_14615_14641[(1)] = (8));

} else {
var statearr_14616_14642 = state_14609__$1;
(statearr_14616_14642[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (3))){
var inst_14607 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14609__$1,inst_14607);
} else {
if((state_val_14610 === (12))){
var state_14609__$1 = state_14609;
var statearr_14617_14643 = state_14609__$1;
(statearr_14617_14643[(2)] = null);

(statearr_14617_14643[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (2))){
var inst_14586 = (state_14609[(7)]);
var state_14609__$1 = state_14609;
if(cljs.core.truth_(inst_14586)){
var statearr_14618_14644 = state_14609__$1;
(statearr_14618_14644[(1)] = (4));

} else {
var statearr_14619_14645 = state_14609__$1;
(statearr_14619_14645[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (11))){
var inst_14600 = cljs.core.async.close_BANG_(ch);
var state_14609__$1 = state_14609;
var statearr_14620_14646 = state_14609__$1;
(statearr_14620_14646[(2)] = inst_14600);

(statearr_14620_14646[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (9))){
var state_14609__$1 = state_14609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14621_14647 = state_14609__$1;
(statearr_14621_14647[(1)] = (11));

} else {
var statearr_14622_14648 = state_14609__$1;
(statearr_14622_14648[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (5))){
var inst_14586 = (state_14609[(7)]);
var state_14609__$1 = state_14609;
var statearr_14623_14649 = state_14609__$1;
(statearr_14623_14649[(2)] = inst_14586);

(statearr_14623_14649[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (10))){
var inst_14605 = (state_14609[(2)]);
var state_14609__$1 = state_14609;
var statearr_14624_14650 = state_14609__$1;
(statearr_14624_14650[(2)] = inst_14605);

(statearr_14624_14650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14610 === (8))){
var inst_14586 = (state_14609[(7)]);
var inst_14596 = cljs.core.next(inst_14586);
var inst_14586__$1 = inst_14596;
var state_14609__$1 = (function (){var statearr_14625 = state_14609;
(statearr_14625[(7)] = inst_14586__$1);

return statearr_14625;
})();
var statearr_14626_14651 = state_14609__$1;
(statearr_14626_14651[(2)] = null);

(statearr_14626_14651[(1)] = (2));


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
}
}
}
}
}
}
});})(c__13822__auto__))
;
return ((function (switch__13708__auto__,c__13822__auto__){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_14630 = [null,null,null,null,null,null,null,null];
(statearr_14630[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_14630[(1)] = (1));

return statearr_14630;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_14609){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_14609);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e14631){if((e14631 instanceof Object)){
var ex__13712__auto__ = e14631;
var statearr_14632_14652 = state_14609;
(statearr_14632_14652[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14609);

return cljs.core.cst$kw$recur;
} else {
throw e14631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__14653 = state_14609;
state_14609 = G__14653;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_14609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_14609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto__))
})();
var state__13824__auto__ = (function (){var statearr_14633 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_14633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto__);

return statearr_14633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto__))
);

return c__13822__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6870__auto__ = (((_ == null))?null:_);
var m__6871__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6871__auto__.call(null,_));
} else {
var m__6871__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6871__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6871__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6871__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6871__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto__.call(null,m));
} else {
var m__6871__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14878 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14878) : cljs.core.atom.call(null,G__14878));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14879 = (function (mult,ch,cs,meta14880){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14880 = meta14880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14881,meta14880__$1){
var self__ = this;
var _14881__$1 = this;
return (new cljs.core.async.t_cljs$core$async14879(self__.mult,self__.ch,self__.cs,meta14880__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14881){
var self__ = this;
var _14881__$1 = this;
return self__.meta14880;
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14882_15102 = self__.cs;
var G__14883_15103 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14882_15102,G__14883_15103) : cljs.core.reset_BANG_.call(null,G__14882_15102,G__14883_15103));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14880], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14879";

cljs.core.async.t_cljs$core$async14879.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async14879");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14879 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14879(mult__$1,ch__$1,cs__$1,meta14880){
return (new cljs.core.async.t_cljs$core$async14879(mult__$1,ch__$1,cs__$1,meta14880));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14879(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13822__auto___15104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15104,cs,m,dchan,dctr,done){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15104,cs,m,dchan,dctr,done){
return (function (state_15014){
var state_val_15015 = (state_15014[(1)]);
if((state_val_15015 === (7))){
var inst_15010 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15016_15105 = state_15014__$1;
(statearr_15016_15105[(2)] = inst_15010);

(statearr_15016_15105[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (20))){
var inst_14915 = (state_15014[(7)]);
var inst_14925 = cljs.core.first(inst_14915);
var inst_14926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14925,(0),null);
var inst_14927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14925,(1),null);
var state_15014__$1 = (function (){var statearr_15017 = state_15014;
(statearr_15017[(8)] = inst_14926);

return statearr_15017;
})();
if(cljs.core.truth_(inst_14927)){
var statearr_15018_15106 = state_15014__$1;
(statearr_15018_15106[(1)] = (22));

} else {
var statearr_15019_15107 = state_15014__$1;
(statearr_15019_15107[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (27))){
var inst_14886 = (state_15014[(9)]);
var inst_14962 = (state_15014[(10)]);
var inst_14955 = (state_15014[(11)]);
var inst_14957 = (state_15014[(12)]);
var inst_14962__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14955,inst_14957);
var inst_14963 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14962__$1,inst_14886,done);
var state_15014__$1 = (function (){var statearr_15020 = state_15014;
(statearr_15020[(10)] = inst_14962__$1);

return statearr_15020;
})();
if(cljs.core.truth_(inst_14963)){
var statearr_15021_15108 = state_15014__$1;
(statearr_15021_15108[(1)] = (30));

} else {
var statearr_15022_15109 = state_15014__$1;
(statearr_15022_15109[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (1))){
var state_15014__$1 = state_15014;
var statearr_15023_15110 = state_15014__$1;
(statearr_15023_15110[(2)] = null);

(statearr_15023_15110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (24))){
var inst_14915 = (state_15014[(7)]);
var inst_14932 = (state_15014[(2)]);
var inst_14933 = cljs.core.next(inst_14915);
var inst_14895 = inst_14933;
var inst_14896 = null;
var inst_14897 = (0);
var inst_14898 = (0);
var state_15014__$1 = (function (){var statearr_15024 = state_15014;
(statearr_15024[(13)] = inst_14898);

(statearr_15024[(14)] = inst_14932);

(statearr_15024[(15)] = inst_14896);

(statearr_15024[(16)] = inst_14895);

(statearr_15024[(17)] = inst_14897);

return statearr_15024;
})();
var statearr_15025_15111 = state_15014__$1;
(statearr_15025_15111[(2)] = null);

(statearr_15025_15111[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (39))){
var state_15014__$1 = state_15014;
var statearr_15029_15112 = state_15014__$1;
(statearr_15029_15112[(2)] = null);

(statearr_15029_15112[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (4))){
var inst_14886 = (state_15014[(9)]);
var inst_14886__$1 = (state_15014[(2)]);
var inst_14887 = (inst_14886__$1 == null);
var state_15014__$1 = (function (){var statearr_15030 = state_15014;
(statearr_15030[(9)] = inst_14886__$1);

return statearr_15030;
})();
if(cljs.core.truth_(inst_14887)){
var statearr_15031_15113 = state_15014__$1;
(statearr_15031_15113[(1)] = (5));

} else {
var statearr_15032_15114 = state_15014__$1;
(statearr_15032_15114[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (15))){
var inst_14898 = (state_15014[(13)]);
var inst_14896 = (state_15014[(15)]);
var inst_14895 = (state_15014[(16)]);
var inst_14897 = (state_15014[(17)]);
var inst_14911 = (state_15014[(2)]);
var inst_14912 = (inst_14898 + (1));
var tmp15026 = inst_14896;
var tmp15027 = inst_14895;
var tmp15028 = inst_14897;
var inst_14895__$1 = tmp15027;
var inst_14896__$1 = tmp15026;
var inst_14897__$1 = tmp15028;
var inst_14898__$1 = inst_14912;
var state_15014__$1 = (function (){var statearr_15033 = state_15014;
(statearr_15033[(13)] = inst_14898__$1);

(statearr_15033[(18)] = inst_14911);

(statearr_15033[(15)] = inst_14896__$1);

(statearr_15033[(16)] = inst_14895__$1);

(statearr_15033[(17)] = inst_14897__$1);

return statearr_15033;
})();
var statearr_15034_15115 = state_15014__$1;
(statearr_15034_15115[(2)] = null);

(statearr_15034_15115[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (21))){
var inst_14936 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15038_15116 = state_15014__$1;
(statearr_15038_15116[(2)] = inst_14936);

(statearr_15038_15116[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (31))){
var inst_14962 = (state_15014[(10)]);
var inst_14966 = done(null);
var inst_14967 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14962);
var state_15014__$1 = (function (){var statearr_15039 = state_15014;
(statearr_15039[(19)] = inst_14966);

return statearr_15039;
})();
var statearr_15040_15117 = state_15014__$1;
(statearr_15040_15117[(2)] = inst_14967);

(statearr_15040_15117[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (32))){
var inst_14954 = (state_15014[(20)]);
var inst_14955 = (state_15014[(11)]);
var inst_14957 = (state_15014[(12)]);
var inst_14956 = (state_15014[(21)]);
var inst_14969 = (state_15014[(2)]);
var inst_14970 = (inst_14957 + (1));
var tmp15035 = inst_14954;
var tmp15036 = inst_14955;
var tmp15037 = inst_14956;
var inst_14954__$1 = tmp15035;
var inst_14955__$1 = tmp15036;
var inst_14956__$1 = tmp15037;
var inst_14957__$1 = inst_14970;
var state_15014__$1 = (function (){var statearr_15041 = state_15014;
(statearr_15041[(20)] = inst_14954__$1);

(statearr_15041[(11)] = inst_14955__$1);

(statearr_15041[(12)] = inst_14957__$1);

(statearr_15041[(22)] = inst_14969);

(statearr_15041[(21)] = inst_14956__$1);

return statearr_15041;
})();
var statearr_15042_15118 = state_15014__$1;
(statearr_15042_15118[(2)] = null);

(statearr_15042_15118[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (40))){
var inst_14982 = (state_15014[(23)]);
var inst_14986 = done(null);
var inst_14987 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14982);
var state_15014__$1 = (function (){var statearr_15043 = state_15014;
(statearr_15043[(24)] = inst_14986);

return statearr_15043;
})();
var statearr_15044_15119 = state_15014__$1;
(statearr_15044_15119[(2)] = inst_14987);

(statearr_15044_15119[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (33))){
var inst_14973 = (state_15014[(25)]);
var inst_14975 = cljs.core.chunked_seq_QMARK_(inst_14973);
var state_15014__$1 = state_15014;
if(inst_14975){
var statearr_15045_15120 = state_15014__$1;
(statearr_15045_15120[(1)] = (36));

} else {
var statearr_15046_15121 = state_15014__$1;
(statearr_15046_15121[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (13))){
var inst_14905 = (state_15014[(26)]);
var inst_14908 = cljs.core.async.close_BANG_(inst_14905);
var state_15014__$1 = state_15014;
var statearr_15047_15122 = state_15014__$1;
(statearr_15047_15122[(2)] = inst_14908);

(statearr_15047_15122[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (22))){
var inst_14926 = (state_15014[(8)]);
var inst_14929 = cljs.core.async.close_BANG_(inst_14926);
var state_15014__$1 = state_15014;
var statearr_15048_15123 = state_15014__$1;
(statearr_15048_15123[(2)] = inst_14929);

(statearr_15048_15123[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (36))){
var inst_14973 = (state_15014[(25)]);
var inst_14977 = cljs.core.chunk_first(inst_14973);
var inst_14978 = cljs.core.chunk_rest(inst_14973);
var inst_14979 = cljs.core.count(inst_14977);
var inst_14954 = inst_14978;
var inst_14955 = inst_14977;
var inst_14956 = inst_14979;
var inst_14957 = (0);
var state_15014__$1 = (function (){var statearr_15049 = state_15014;
(statearr_15049[(20)] = inst_14954);

(statearr_15049[(11)] = inst_14955);

(statearr_15049[(12)] = inst_14957);

(statearr_15049[(21)] = inst_14956);

return statearr_15049;
})();
var statearr_15050_15124 = state_15014__$1;
(statearr_15050_15124[(2)] = null);

(statearr_15050_15124[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (41))){
var inst_14973 = (state_15014[(25)]);
var inst_14989 = (state_15014[(2)]);
var inst_14990 = cljs.core.next(inst_14973);
var inst_14954 = inst_14990;
var inst_14955 = null;
var inst_14956 = (0);
var inst_14957 = (0);
var state_15014__$1 = (function (){var statearr_15051 = state_15014;
(statearr_15051[(20)] = inst_14954);

(statearr_15051[(11)] = inst_14955);

(statearr_15051[(12)] = inst_14957);

(statearr_15051[(27)] = inst_14989);

(statearr_15051[(21)] = inst_14956);

return statearr_15051;
})();
var statearr_15052_15125 = state_15014__$1;
(statearr_15052_15125[(2)] = null);

(statearr_15052_15125[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (43))){
var state_15014__$1 = state_15014;
var statearr_15053_15126 = state_15014__$1;
(statearr_15053_15126[(2)] = null);

(statearr_15053_15126[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (29))){
var inst_14998 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15054_15127 = state_15014__$1;
(statearr_15054_15127[(2)] = inst_14998);

(statearr_15054_15127[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (44))){
var inst_15007 = (state_15014[(2)]);
var state_15014__$1 = (function (){var statearr_15055 = state_15014;
(statearr_15055[(28)] = inst_15007);

return statearr_15055;
})();
var statearr_15056_15128 = state_15014__$1;
(statearr_15056_15128[(2)] = null);

(statearr_15056_15128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (6))){
var inst_14946 = (state_15014[(29)]);
var inst_14945 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14946__$1 = cljs.core.keys(inst_14945);
var inst_14947 = cljs.core.count(inst_14946__$1);
var inst_14948 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14947) : cljs.core.reset_BANG_.call(null,dctr,inst_14947));
var inst_14953 = cljs.core.seq(inst_14946__$1);
var inst_14954 = inst_14953;
var inst_14955 = null;
var inst_14956 = (0);
var inst_14957 = (0);
var state_15014__$1 = (function (){var statearr_15057 = state_15014;
(statearr_15057[(20)] = inst_14954);

(statearr_15057[(11)] = inst_14955);

(statearr_15057[(12)] = inst_14957);

(statearr_15057[(29)] = inst_14946__$1);

(statearr_15057[(30)] = inst_14948);

(statearr_15057[(21)] = inst_14956);

return statearr_15057;
})();
var statearr_15058_15129 = state_15014__$1;
(statearr_15058_15129[(2)] = null);

(statearr_15058_15129[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (28))){
var inst_14973 = (state_15014[(25)]);
var inst_14954 = (state_15014[(20)]);
var inst_14973__$1 = cljs.core.seq(inst_14954);
var state_15014__$1 = (function (){var statearr_15059 = state_15014;
(statearr_15059[(25)] = inst_14973__$1);

return statearr_15059;
})();
if(inst_14973__$1){
var statearr_15060_15130 = state_15014__$1;
(statearr_15060_15130[(1)] = (33));

} else {
var statearr_15061_15131 = state_15014__$1;
(statearr_15061_15131[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (25))){
var inst_14957 = (state_15014[(12)]);
var inst_14956 = (state_15014[(21)]);
var inst_14959 = (inst_14957 < inst_14956);
var inst_14960 = inst_14959;
var state_15014__$1 = state_15014;
if(cljs.core.truth_(inst_14960)){
var statearr_15062_15132 = state_15014__$1;
(statearr_15062_15132[(1)] = (27));

} else {
var statearr_15063_15133 = state_15014__$1;
(statearr_15063_15133[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (34))){
var state_15014__$1 = state_15014;
var statearr_15064_15134 = state_15014__$1;
(statearr_15064_15134[(2)] = null);

(statearr_15064_15134[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (17))){
var state_15014__$1 = state_15014;
var statearr_15065_15135 = state_15014__$1;
(statearr_15065_15135[(2)] = null);

(statearr_15065_15135[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (3))){
var inst_15012 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15014__$1,inst_15012);
} else {
if((state_val_15015 === (12))){
var inst_14941 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15066_15136 = state_15014__$1;
(statearr_15066_15136[(2)] = inst_14941);

(statearr_15066_15136[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (2))){
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15014__$1,(4),ch);
} else {
if((state_val_15015 === (23))){
var state_15014__$1 = state_15014;
var statearr_15067_15137 = state_15014__$1;
(statearr_15067_15137[(2)] = null);

(statearr_15067_15137[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (35))){
var inst_14996 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15068_15138 = state_15014__$1;
(statearr_15068_15138[(2)] = inst_14996);

(statearr_15068_15138[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (19))){
var inst_14915 = (state_15014[(7)]);
var inst_14919 = cljs.core.chunk_first(inst_14915);
var inst_14920 = cljs.core.chunk_rest(inst_14915);
var inst_14921 = cljs.core.count(inst_14919);
var inst_14895 = inst_14920;
var inst_14896 = inst_14919;
var inst_14897 = inst_14921;
var inst_14898 = (0);
var state_15014__$1 = (function (){var statearr_15069 = state_15014;
(statearr_15069[(13)] = inst_14898);

(statearr_15069[(15)] = inst_14896);

(statearr_15069[(16)] = inst_14895);

(statearr_15069[(17)] = inst_14897);

return statearr_15069;
})();
var statearr_15070_15139 = state_15014__$1;
(statearr_15070_15139[(2)] = null);

(statearr_15070_15139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (11))){
var inst_14915 = (state_15014[(7)]);
var inst_14895 = (state_15014[(16)]);
var inst_14915__$1 = cljs.core.seq(inst_14895);
var state_15014__$1 = (function (){var statearr_15071 = state_15014;
(statearr_15071[(7)] = inst_14915__$1);

return statearr_15071;
})();
if(inst_14915__$1){
var statearr_15072_15140 = state_15014__$1;
(statearr_15072_15140[(1)] = (16));

} else {
var statearr_15073_15141 = state_15014__$1;
(statearr_15073_15141[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (9))){
var inst_14943 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15074_15142 = state_15014__$1;
(statearr_15074_15142[(2)] = inst_14943);

(statearr_15074_15142[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (5))){
var inst_14893 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14894 = cljs.core.seq(inst_14893);
var inst_14895 = inst_14894;
var inst_14896 = null;
var inst_14897 = (0);
var inst_14898 = (0);
var state_15014__$1 = (function (){var statearr_15075 = state_15014;
(statearr_15075[(13)] = inst_14898);

(statearr_15075[(15)] = inst_14896);

(statearr_15075[(16)] = inst_14895);

(statearr_15075[(17)] = inst_14897);

return statearr_15075;
})();
var statearr_15076_15143 = state_15014__$1;
(statearr_15076_15143[(2)] = null);

(statearr_15076_15143[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (14))){
var state_15014__$1 = state_15014;
var statearr_15077_15144 = state_15014__$1;
(statearr_15077_15144[(2)] = null);

(statearr_15077_15144[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (45))){
var inst_15004 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15078_15145 = state_15014__$1;
(statearr_15078_15145[(2)] = inst_15004);

(statearr_15078_15145[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (26))){
var inst_14946 = (state_15014[(29)]);
var inst_15000 = (state_15014[(2)]);
var inst_15001 = cljs.core.seq(inst_14946);
var state_15014__$1 = (function (){var statearr_15079 = state_15014;
(statearr_15079[(31)] = inst_15000);

return statearr_15079;
})();
if(inst_15001){
var statearr_15080_15146 = state_15014__$1;
(statearr_15080_15146[(1)] = (42));

} else {
var statearr_15081_15147 = state_15014__$1;
(statearr_15081_15147[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (16))){
var inst_14915 = (state_15014[(7)]);
var inst_14917 = cljs.core.chunked_seq_QMARK_(inst_14915);
var state_15014__$1 = state_15014;
if(inst_14917){
var statearr_15082_15148 = state_15014__$1;
(statearr_15082_15148[(1)] = (19));

} else {
var statearr_15083_15149 = state_15014__$1;
(statearr_15083_15149[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (38))){
var inst_14993 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15084_15150 = state_15014__$1;
(statearr_15084_15150[(2)] = inst_14993);

(statearr_15084_15150[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (30))){
var state_15014__$1 = state_15014;
var statearr_15085_15151 = state_15014__$1;
(statearr_15085_15151[(2)] = null);

(statearr_15085_15151[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (10))){
var inst_14898 = (state_15014[(13)]);
var inst_14896 = (state_15014[(15)]);
var inst_14904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14896,inst_14898);
var inst_14905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14904,(0),null);
var inst_14906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14904,(1),null);
var state_15014__$1 = (function (){var statearr_15086 = state_15014;
(statearr_15086[(26)] = inst_14905);

return statearr_15086;
})();
if(cljs.core.truth_(inst_14906)){
var statearr_15087_15152 = state_15014__$1;
(statearr_15087_15152[(1)] = (13));

} else {
var statearr_15088_15153 = state_15014__$1;
(statearr_15088_15153[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (18))){
var inst_14939 = (state_15014[(2)]);
var state_15014__$1 = state_15014;
var statearr_15089_15154 = state_15014__$1;
(statearr_15089_15154[(2)] = inst_14939);

(statearr_15089_15154[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (42))){
var state_15014__$1 = state_15014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15014__$1,(45),dchan);
} else {
if((state_val_15015 === (37))){
var inst_14973 = (state_15014[(25)]);
var inst_14886 = (state_15014[(9)]);
var inst_14982 = (state_15014[(23)]);
var inst_14982__$1 = cljs.core.first(inst_14973);
var inst_14983 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14982__$1,inst_14886,done);
var state_15014__$1 = (function (){var statearr_15090 = state_15014;
(statearr_15090[(23)] = inst_14982__$1);

return statearr_15090;
})();
if(cljs.core.truth_(inst_14983)){
var statearr_15091_15155 = state_15014__$1;
(statearr_15091_15155[(1)] = (39));

} else {
var statearr_15092_15156 = state_15014__$1;
(statearr_15092_15156[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15015 === (8))){
var inst_14898 = (state_15014[(13)]);
var inst_14897 = (state_15014[(17)]);
var inst_14900 = (inst_14898 < inst_14897);
var inst_14901 = inst_14900;
var state_15014__$1 = state_15014;
if(cljs.core.truth_(inst_14901)){
var statearr_15093_15157 = state_15014__$1;
(statearr_15093_15157[(1)] = (10));

} else {
var statearr_15094_15158 = state_15014__$1;
(statearr_15094_15158[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___15104,cs,m,dchan,dctr,done))
;
return ((function (switch__13708__auto__,c__13822__auto___15104,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13709__auto__ = null;
var cljs$core$async$mult_$_state_machine__13709__auto____0 = (function (){
var statearr_15098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15098[(0)] = cljs$core$async$mult_$_state_machine__13709__auto__);

(statearr_15098[(1)] = (1));

return statearr_15098;
});
var cljs$core$async$mult_$_state_machine__13709__auto____1 = (function (state_15014){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15014);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15099){if((e15099 instanceof Object)){
var ex__13712__auto__ = e15099;
var statearr_15100_15159 = state_15014;
(statearr_15100_15159[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15014);

return cljs.core.cst$kw$recur;
} else {
throw e15099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15160 = state_15014;
state_15014 = G__15160;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13709__auto__ = function(state_15014){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13709__auto____1.call(this,state_15014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13709__auto____0;
cljs$core$async$mult_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13709__auto____1;
return cljs$core$async$mult_$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15104,cs,m,dchan,dctr,done))
})();
var state__13824__auto__ = (function (){var statearr_15101 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15104);

return statearr_15101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15104,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15161 = [];
var len__7276__auto___15164 = arguments.length;
var i__7277__auto___15165 = (0);
while(true){
if((i__7277__auto___15165 < len__7276__auto___15164)){
args15161.push((arguments[i__7277__auto___15165]));

var G__15166 = (i__7277__auto___15165 + (1));
i__7277__auto___15165 = G__15166;
continue;
} else {
}
break;
}

var G__15163 = args15161.length;
switch (G__15163) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15161.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto__.call(null,m,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6871__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto__.call(null,m));
} else {
var m__6871__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6871__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6871__auto__.call(null,m,state_map));
} else {
var m__6871__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6871__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6870__auto__ = (((m == null))?null:m);
var m__6871__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6871__auto__.call(null,m,mode));
} else {
var m__6871__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6871__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___15178 = arguments.length;
var i__7277__auto___15179 = (0);
while(true){
if((i__7277__auto___15179 < len__7276__auto___15178)){
args__7283__auto__.push((arguments[i__7277__auto___15179]));

var G__15180 = (i__7277__auto___15179 + (1));
i__7277__auto___15179 = G__15180;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((3) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7284__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15172){
var map__15173 = p__15172;
var map__15173__$1 = ((((!((map__15173 == null)))?((((map__15173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15173):map__15173);
var opts = map__15173__$1;
var statearr_15175_15181 = state;
(statearr_15175_15181[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15173,map__15173__$1,opts){
return (function (val){
var statearr_15176_15182 = state;
(statearr_15176_15182[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15173,map__15173__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15177_15183 = state;
(statearr_15177_15183[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15168){
var G__15169 = cljs.core.first(seq15168);
var seq15168__$1 = cljs.core.next(seq15168);
var G__15170 = cljs.core.first(seq15168__$1);
var seq15168__$2 = cljs.core.next(seq15168__$1);
var G__15171 = cljs.core.first(seq15168__$2);
var seq15168__$3 = cljs.core.next(seq15168__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15169,G__15170,G__15171,seq15168__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15350 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15350) : cljs.core.atom.call(null,G__15350));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15351 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15352){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15352 = meta15352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15353,meta15352__$1){
var self__ = this;
var _15353__$1 = this;
return (new cljs.core.async.t_cljs$core$async15351(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15352__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15353){
var self__ = this;
var _15353__$1 = this;
return self__.meta15352;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15354_15516 = self__.cs;
var G__15355_15517 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15354_15516,G__15355_15517) : cljs.core.reset_BANG_.call(null,G__15354_15516,G__15355_15517));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15352], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15351";

cljs.core.async.t_cljs$core$async15351.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15351");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15351 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15351(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15352){
return (new cljs.core.async.t_cljs$core$async15351(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15352));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15351(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13822__auto___15518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15453){
var state_val_15454 = (state_15453[(1)]);
if((state_val_15454 === (7))){
var inst_15371 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
var statearr_15455_15519 = state_15453__$1;
(statearr_15455_15519[(2)] = inst_15371);

(statearr_15455_15519[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (20))){
var inst_15383 = (state_15453[(7)]);
var state_15453__$1 = state_15453;
var statearr_15456_15520 = state_15453__$1;
(statearr_15456_15520[(2)] = inst_15383);

(statearr_15456_15520[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (27))){
var state_15453__$1 = state_15453;
var statearr_15457_15521 = state_15453__$1;
(statearr_15457_15521[(2)] = null);

(statearr_15457_15521[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (1))){
var inst_15359 = (state_15453[(8)]);
var inst_15359__$1 = calc_state();
var inst_15361 = (inst_15359__$1 == null);
var inst_15362 = cljs.core.not(inst_15361);
var state_15453__$1 = (function (){var statearr_15458 = state_15453;
(statearr_15458[(8)] = inst_15359__$1);

return statearr_15458;
})();
if(inst_15362){
var statearr_15459_15522 = state_15453__$1;
(statearr_15459_15522[(1)] = (2));

} else {
var statearr_15460_15523 = state_15453__$1;
(statearr_15460_15523[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (24))){
var inst_15427 = (state_15453[(9)]);
var inst_15413 = (state_15453[(10)]);
var inst_15406 = (state_15453[(11)]);
var inst_15427__$1 = (inst_15406.cljs$core$IFn$_invoke$arity$1 ? inst_15406.cljs$core$IFn$_invoke$arity$1(inst_15413) : inst_15406.call(null,inst_15413));
var state_15453__$1 = (function (){var statearr_15461 = state_15453;
(statearr_15461[(9)] = inst_15427__$1);

return statearr_15461;
})();
if(cljs.core.truth_(inst_15427__$1)){
var statearr_15462_15524 = state_15453__$1;
(statearr_15462_15524[(1)] = (29));

} else {
var statearr_15463_15525 = state_15453__$1;
(statearr_15463_15525[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (4))){
var inst_15374 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15374)){
var statearr_15464_15526 = state_15453__$1;
(statearr_15464_15526[(1)] = (8));

} else {
var statearr_15465_15527 = state_15453__$1;
(statearr_15465_15527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (15))){
var inst_15400 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15400)){
var statearr_15466_15528 = state_15453__$1;
(statearr_15466_15528[(1)] = (19));

} else {
var statearr_15467_15529 = state_15453__$1;
(statearr_15467_15529[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (21))){
var inst_15405 = (state_15453[(12)]);
var inst_15405__$1 = (state_15453[(2)]);
var inst_15406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15405__$1,cljs.core.cst$kw$solos);
var inst_15407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15405__$1,cljs.core.cst$kw$mutes);
var inst_15408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15405__$1,cljs.core.cst$kw$reads);
var state_15453__$1 = (function (){var statearr_15468 = state_15453;
(statearr_15468[(11)] = inst_15406);

(statearr_15468[(13)] = inst_15407);

(statearr_15468[(12)] = inst_15405__$1);

return statearr_15468;
})();
return cljs.core.async.ioc_alts_BANG_(state_15453__$1,(22),inst_15408);
} else {
if((state_val_15454 === (31))){
var inst_15435 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15435)){
var statearr_15469_15530 = state_15453__$1;
(statearr_15469_15530[(1)] = (32));

} else {
var statearr_15470_15531 = state_15453__$1;
(statearr_15470_15531[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (32))){
var inst_15412 = (state_15453[(14)]);
var state_15453__$1 = state_15453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15453__$1,(35),out,inst_15412);
} else {
if((state_val_15454 === (33))){
var inst_15405 = (state_15453[(12)]);
var inst_15383 = inst_15405;
var state_15453__$1 = (function (){var statearr_15471 = state_15453;
(statearr_15471[(7)] = inst_15383);

return statearr_15471;
})();
var statearr_15472_15532 = state_15453__$1;
(statearr_15472_15532[(2)] = null);

(statearr_15472_15532[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (13))){
var inst_15383 = (state_15453[(7)]);
var inst_15390 = inst_15383.cljs$lang$protocol_mask$partition0$;
var inst_15391 = (inst_15390 & (64));
var inst_15392 = inst_15383.cljs$core$ISeq$;
var inst_15393 = (inst_15391) || (inst_15392);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15393)){
var statearr_15473_15533 = state_15453__$1;
(statearr_15473_15533[(1)] = (16));

} else {
var statearr_15474_15534 = state_15453__$1;
(statearr_15474_15534[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (22))){
var inst_15413 = (state_15453[(10)]);
var inst_15412 = (state_15453[(14)]);
var inst_15411 = (state_15453[(2)]);
var inst_15412__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15411,(0),null);
var inst_15413__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15411,(1),null);
var inst_15414 = (inst_15412__$1 == null);
var inst_15415 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15413__$1,change);
var inst_15416 = (inst_15414) || (inst_15415);
var state_15453__$1 = (function (){var statearr_15475 = state_15453;
(statearr_15475[(10)] = inst_15413__$1);

(statearr_15475[(14)] = inst_15412__$1);

return statearr_15475;
})();
if(cljs.core.truth_(inst_15416)){
var statearr_15476_15535 = state_15453__$1;
(statearr_15476_15535[(1)] = (23));

} else {
var statearr_15477_15536 = state_15453__$1;
(statearr_15477_15536[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (36))){
var inst_15405 = (state_15453[(12)]);
var inst_15383 = inst_15405;
var state_15453__$1 = (function (){var statearr_15478 = state_15453;
(statearr_15478[(7)] = inst_15383);

return statearr_15478;
})();
var statearr_15479_15537 = state_15453__$1;
(statearr_15479_15537[(2)] = null);

(statearr_15479_15537[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (29))){
var inst_15427 = (state_15453[(9)]);
var state_15453__$1 = state_15453;
var statearr_15480_15538 = state_15453__$1;
(statearr_15480_15538[(2)] = inst_15427);

(statearr_15480_15538[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (6))){
var state_15453__$1 = state_15453;
var statearr_15481_15539 = state_15453__$1;
(statearr_15481_15539[(2)] = false);

(statearr_15481_15539[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (28))){
var inst_15423 = (state_15453[(2)]);
var inst_15424 = calc_state();
var inst_15383 = inst_15424;
var state_15453__$1 = (function (){var statearr_15482 = state_15453;
(statearr_15482[(15)] = inst_15423);

(statearr_15482[(7)] = inst_15383);

return statearr_15482;
})();
var statearr_15483_15540 = state_15453__$1;
(statearr_15483_15540[(2)] = null);

(statearr_15483_15540[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (25))){
var inst_15449 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
var statearr_15484_15541 = state_15453__$1;
(statearr_15484_15541[(2)] = inst_15449);

(statearr_15484_15541[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (34))){
var inst_15447 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
var statearr_15485_15542 = state_15453__$1;
(statearr_15485_15542[(2)] = inst_15447);

(statearr_15485_15542[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (17))){
var state_15453__$1 = state_15453;
var statearr_15486_15543 = state_15453__$1;
(statearr_15486_15543[(2)] = false);

(statearr_15486_15543[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (3))){
var state_15453__$1 = state_15453;
var statearr_15487_15544 = state_15453__$1;
(statearr_15487_15544[(2)] = false);

(statearr_15487_15544[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (12))){
var inst_15451 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15453__$1,inst_15451);
} else {
if((state_val_15454 === (2))){
var inst_15359 = (state_15453[(8)]);
var inst_15364 = inst_15359.cljs$lang$protocol_mask$partition0$;
var inst_15365 = (inst_15364 & (64));
var inst_15366 = inst_15359.cljs$core$ISeq$;
var inst_15367 = (inst_15365) || (inst_15366);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15367)){
var statearr_15488_15545 = state_15453__$1;
(statearr_15488_15545[(1)] = (5));

} else {
var statearr_15489_15546 = state_15453__$1;
(statearr_15489_15546[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (23))){
var inst_15412 = (state_15453[(14)]);
var inst_15418 = (inst_15412 == null);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15418)){
var statearr_15490_15547 = state_15453__$1;
(statearr_15490_15547[(1)] = (26));

} else {
var statearr_15491_15548 = state_15453__$1;
(statearr_15491_15548[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (35))){
var inst_15438 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
if(cljs.core.truth_(inst_15438)){
var statearr_15492_15549 = state_15453__$1;
(statearr_15492_15549[(1)] = (36));

} else {
var statearr_15493_15550 = state_15453__$1;
(statearr_15493_15550[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (19))){
var inst_15383 = (state_15453[(7)]);
var inst_15402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15383);
var state_15453__$1 = state_15453;
var statearr_15494_15551 = state_15453__$1;
(statearr_15494_15551[(2)] = inst_15402);

(statearr_15494_15551[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (11))){
var inst_15383 = (state_15453[(7)]);
var inst_15387 = (inst_15383 == null);
var inst_15388 = cljs.core.not(inst_15387);
var state_15453__$1 = state_15453;
if(inst_15388){
var statearr_15495_15552 = state_15453__$1;
(statearr_15495_15552[(1)] = (13));

} else {
var statearr_15496_15553 = state_15453__$1;
(statearr_15496_15553[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (9))){
var inst_15359 = (state_15453[(8)]);
var state_15453__$1 = state_15453;
var statearr_15497_15554 = state_15453__$1;
(statearr_15497_15554[(2)] = inst_15359);

(statearr_15497_15554[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (5))){
var state_15453__$1 = state_15453;
var statearr_15498_15555 = state_15453__$1;
(statearr_15498_15555[(2)] = true);

(statearr_15498_15555[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (14))){
var state_15453__$1 = state_15453;
var statearr_15499_15556 = state_15453__$1;
(statearr_15499_15556[(2)] = false);

(statearr_15499_15556[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (26))){
var inst_15413 = (state_15453[(10)]);
var inst_15420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15413);
var state_15453__$1 = state_15453;
var statearr_15500_15557 = state_15453__$1;
(statearr_15500_15557[(2)] = inst_15420);

(statearr_15500_15557[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (16))){
var state_15453__$1 = state_15453;
var statearr_15501_15558 = state_15453__$1;
(statearr_15501_15558[(2)] = true);

(statearr_15501_15558[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (38))){
var inst_15443 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
var statearr_15502_15559 = state_15453__$1;
(statearr_15502_15559[(2)] = inst_15443);

(statearr_15502_15559[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (30))){
var inst_15413 = (state_15453[(10)]);
var inst_15406 = (state_15453[(11)]);
var inst_15407 = (state_15453[(13)]);
var inst_15430 = cljs.core.empty_QMARK_(inst_15406);
var inst_15431 = (inst_15407.cljs$core$IFn$_invoke$arity$1 ? inst_15407.cljs$core$IFn$_invoke$arity$1(inst_15413) : inst_15407.call(null,inst_15413));
var inst_15432 = cljs.core.not(inst_15431);
var inst_15433 = (inst_15430) && (inst_15432);
var state_15453__$1 = state_15453;
var statearr_15503_15560 = state_15453__$1;
(statearr_15503_15560[(2)] = inst_15433);

(statearr_15503_15560[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (10))){
var inst_15359 = (state_15453[(8)]);
var inst_15379 = (state_15453[(2)]);
var inst_15380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15379,cljs.core.cst$kw$solos);
var inst_15381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15379,cljs.core.cst$kw$mutes);
var inst_15382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15379,cljs.core.cst$kw$reads);
var inst_15383 = inst_15359;
var state_15453__$1 = (function (){var statearr_15504 = state_15453;
(statearr_15504[(16)] = inst_15380);

(statearr_15504[(17)] = inst_15381);

(statearr_15504[(7)] = inst_15383);

(statearr_15504[(18)] = inst_15382);

return statearr_15504;
})();
var statearr_15505_15561 = state_15453__$1;
(statearr_15505_15561[(2)] = null);

(statearr_15505_15561[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (18))){
var inst_15397 = (state_15453[(2)]);
var state_15453__$1 = state_15453;
var statearr_15506_15562 = state_15453__$1;
(statearr_15506_15562[(2)] = inst_15397);

(statearr_15506_15562[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (37))){
var state_15453__$1 = state_15453;
var statearr_15507_15563 = state_15453__$1;
(statearr_15507_15563[(2)] = null);

(statearr_15507_15563[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15454 === (8))){
var inst_15359 = (state_15453[(8)]);
var inst_15376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15359);
var state_15453__$1 = state_15453;
var statearr_15508_15564 = state_15453__$1;
(statearr_15508_15564[(2)] = inst_15376);

(statearr_15508_15564[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13708__auto__,c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13709__auto__ = null;
var cljs$core$async$mix_$_state_machine__13709__auto____0 = (function (){
var statearr_15512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15512[(0)] = cljs$core$async$mix_$_state_machine__13709__auto__);

(statearr_15512[(1)] = (1));

return statearr_15512;
});
var cljs$core$async$mix_$_state_machine__13709__auto____1 = (function (state_15453){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15453);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15513){if((e15513 instanceof Object)){
var ex__13712__auto__ = e15513;
var statearr_15514_15565 = state_15453;
(statearr_15514_15565[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15453);

return cljs.core.cst$kw$recur;
} else {
throw e15513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15566 = state_15453;
state_15453 = G__15566;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13709__auto__ = function(state_15453){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13709__auto____1.call(this,state_15453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13709__auto____0;
cljs$core$async$mix_$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13709__auto____1;
return cljs$core$async$mix_$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13824__auto__ = (function (){var statearr_15515 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15518);

return statearr_15515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6871__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6871__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6871__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6871__auto__.call(null,p,v,ch));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6871__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15567 = [];
var len__7276__auto___15570 = arguments.length;
var i__7277__auto___15571 = (0);
while(true){
if((i__7277__auto___15571 < len__7276__auto___15570)){
args15567.push((arguments[i__7277__auto___15571]));

var G__15572 = (i__7277__auto___15571 + (1));
i__7277__auto___15571 = G__15572;
continue;
} else {
}
break;
}

var G__15569 = args15567.length;
switch (G__15569) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15567.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6871__auto__.call(null,p));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6871__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6870__auto__ = (((p == null))?null:p);
var m__6871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6870__auto__)]);
if(!((m__6871__auto__ == null))){
return (m__6871__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6871__auto__.call(null,p,v));
} else {
var m__6871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6871__auto____$1 == null))){
return (m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6871__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6871__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15575 = [];
var len__7276__auto___15703 = arguments.length;
var i__7277__auto___15704 = (0);
while(true){
if((i__7277__auto___15704 < len__7276__auto___15703)){
args15575.push((arguments[i__7277__auto___15704]));

var G__15705 = (i__7277__auto___15704 + (1));
i__7277__auto___15704 = G__15705;
continue;
} else {
}
break;
}

var G__15577 = args15575.length;
switch (G__15577) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15575.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15578 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15578) : cljs.core.atom.call(null,G__15578));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6207__auto__,mults){
return (function (p1__15574_SHARP_){
if(cljs.core.truth_((p1__15574_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15574_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15574_SHARP_.call(null,topic)))){
return p1__15574_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15574_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6207__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15580 = meta15580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15581,meta15580__$1){
var self__ = this;
var _15581__$1 = this;
return (new cljs.core.async.t_cljs$core$async15579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15580__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15581){
var self__ = this;
var _15581__$1 = this;
return self__.meta15580;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15582 = self__.mults;
var G__15583 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15582,G__15583) : cljs.core.reset_BANG_.call(null,G__15582,G__15583));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15580], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15579";

cljs.core.async.t_cljs$core$async15579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15579");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15579 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15580){
return (new cljs.core.async.t_cljs$core$async15579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15580));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13822__auto___15707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15707,mults,ensure_mult,p){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15707,mults,ensure_mult,p){
return (function (state_15655){
var state_val_15656 = (state_15655[(1)]);
if((state_val_15656 === (7))){
var inst_15651 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15657_15708 = state_15655__$1;
(statearr_15657_15708[(2)] = inst_15651);

(statearr_15657_15708[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (20))){
var state_15655__$1 = state_15655;
var statearr_15658_15709 = state_15655__$1;
(statearr_15658_15709[(2)] = null);

(statearr_15658_15709[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (1))){
var state_15655__$1 = state_15655;
var statearr_15659_15710 = state_15655__$1;
(statearr_15659_15710[(2)] = null);

(statearr_15659_15710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (24))){
var inst_15634 = (state_15655[(7)]);
var inst_15643 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15634);
var state_15655__$1 = state_15655;
var statearr_15660_15711 = state_15655__$1;
(statearr_15660_15711[(2)] = inst_15643);

(statearr_15660_15711[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (4))){
var inst_15586 = (state_15655[(8)]);
var inst_15586__$1 = (state_15655[(2)]);
var inst_15587 = (inst_15586__$1 == null);
var state_15655__$1 = (function (){var statearr_15661 = state_15655;
(statearr_15661[(8)] = inst_15586__$1);

return statearr_15661;
})();
if(cljs.core.truth_(inst_15587)){
var statearr_15662_15712 = state_15655__$1;
(statearr_15662_15712[(1)] = (5));

} else {
var statearr_15663_15713 = state_15655__$1;
(statearr_15663_15713[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (15))){
var inst_15628 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15664_15714 = state_15655__$1;
(statearr_15664_15714[(2)] = inst_15628);

(statearr_15664_15714[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (21))){
var inst_15648 = (state_15655[(2)]);
var state_15655__$1 = (function (){var statearr_15665 = state_15655;
(statearr_15665[(9)] = inst_15648);

return statearr_15665;
})();
var statearr_15666_15715 = state_15655__$1;
(statearr_15666_15715[(2)] = null);

(statearr_15666_15715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (13))){
var inst_15610 = (state_15655[(10)]);
var inst_15612 = cljs.core.chunked_seq_QMARK_(inst_15610);
var state_15655__$1 = state_15655;
if(inst_15612){
var statearr_15667_15716 = state_15655__$1;
(statearr_15667_15716[(1)] = (16));

} else {
var statearr_15668_15717 = state_15655__$1;
(statearr_15668_15717[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (22))){
var inst_15640 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
if(cljs.core.truth_(inst_15640)){
var statearr_15669_15718 = state_15655__$1;
(statearr_15669_15718[(1)] = (23));

} else {
var statearr_15670_15719 = state_15655__$1;
(statearr_15670_15719[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (6))){
var inst_15586 = (state_15655[(8)]);
var inst_15634 = (state_15655[(7)]);
var inst_15636 = (state_15655[(11)]);
var inst_15634__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15586) : topic_fn.call(null,inst_15586));
var inst_15635 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15636__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15635,inst_15634__$1);
var state_15655__$1 = (function (){var statearr_15671 = state_15655;
(statearr_15671[(7)] = inst_15634__$1);

(statearr_15671[(11)] = inst_15636__$1);

return statearr_15671;
})();
if(cljs.core.truth_(inst_15636__$1)){
var statearr_15672_15720 = state_15655__$1;
(statearr_15672_15720[(1)] = (19));

} else {
var statearr_15673_15721 = state_15655__$1;
(statearr_15673_15721[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (25))){
var inst_15645 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15674_15722 = state_15655__$1;
(statearr_15674_15722[(2)] = inst_15645);

(statearr_15674_15722[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (17))){
var inst_15610 = (state_15655[(10)]);
var inst_15619 = cljs.core.first(inst_15610);
var inst_15620 = cljs.core.async.muxch_STAR_(inst_15619);
var inst_15621 = cljs.core.async.close_BANG_(inst_15620);
var inst_15622 = cljs.core.next(inst_15610);
var inst_15596 = inst_15622;
var inst_15597 = null;
var inst_15598 = (0);
var inst_15599 = (0);
var state_15655__$1 = (function (){var statearr_15675 = state_15655;
(statearr_15675[(12)] = inst_15621);

(statearr_15675[(13)] = inst_15597);

(statearr_15675[(14)] = inst_15598);

(statearr_15675[(15)] = inst_15596);

(statearr_15675[(16)] = inst_15599);

return statearr_15675;
})();
var statearr_15676_15723 = state_15655__$1;
(statearr_15676_15723[(2)] = null);

(statearr_15676_15723[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (3))){
var inst_15653 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15655__$1,inst_15653);
} else {
if((state_val_15656 === (12))){
var inst_15630 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15677_15724 = state_15655__$1;
(statearr_15677_15724[(2)] = inst_15630);

(statearr_15677_15724[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (2))){
var state_15655__$1 = state_15655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15655__$1,(4),ch);
} else {
if((state_val_15656 === (23))){
var state_15655__$1 = state_15655;
var statearr_15678_15725 = state_15655__$1;
(statearr_15678_15725[(2)] = null);

(statearr_15678_15725[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (19))){
var inst_15586 = (state_15655[(8)]);
var inst_15636 = (state_15655[(11)]);
var inst_15638 = cljs.core.async.muxch_STAR_(inst_15636);
var state_15655__$1 = state_15655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15655__$1,(22),inst_15638,inst_15586);
} else {
if((state_val_15656 === (11))){
var inst_15610 = (state_15655[(10)]);
var inst_15596 = (state_15655[(15)]);
var inst_15610__$1 = cljs.core.seq(inst_15596);
var state_15655__$1 = (function (){var statearr_15679 = state_15655;
(statearr_15679[(10)] = inst_15610__$1);

return statearr_15679;
})();
if(inst_15610__$1){
var statearr_15680_15726 = state_15655__$1;
(statearr_15680_15726[(1)] = (13));

} else {
var statearr_15681_15727 = state_15655__$1;
(statearr_15681_15727[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (9))){
var inst_15632 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15682_15728 = state_15655__$1;
(statearr_15682_15728[(2)] = inst_15632);

(statearr_15682_15728[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (5))){
var inst_15593 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15594 = cljs.core.vals(inst_15593);
var inst_15595 = cljs.core.seq(inst_15594);
var inst_15596 = inst_15595;
var inst_15597 = null;
var inst_15598 = (0);
var inst_15599 = (0);
var state_15655__$1 = (function (){var statearr_15683 = state_15655;
(statearr_15683[(13)] = inst_15597);

(statearr_15683[(14)] = inst_15598);

(statearr_15683[(15)] = inst_15596);

(statearr_15683[(16)] = inst_15599);

return statearr_15683;
})();
var statearr_15684_15729 = state_15655__$1;
(statearr_15684_15729[(2)] = null);

(statearr_15684_15729[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (14))){
var state_15655__$1 = state_15655;
var statearr_15688_15730 = state_15655__$1;
(statearr_15688_15730[(2)] = null);

(statearr_15688_15730[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (16))){
var inst_15610 = (state_15655[(10)]);
var inst_15614 = cljs.core.chunk_first(inst_15610);
var inst_15615 = cljs.core.chunk_rest(inst_15610);
var inst_15616 = cljs.core.count(inst_15614);
var inst_15596 = inst_15615;
var inst_15597 = inst_15614;
var inst_15598 = inst_15616;
var inst_15599 = (0);
var state_15655__$1 = (function (){var statearr_15689 = state_15655;
(statearr_15689[(13)] = inst_15597);

(statearr_15689[(14)] = inst_15598);

(statearr_15689[(15)] = inst_15596);

(statearr_15689[(16)] = inst_15599);

return statearr_15689;
})();
var statearr_15690_15731 = state_15655__$1;
(statearr_15690_15731[(2)] = null);

(statearr_15690_15731[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (10))){
var inst_15597 = (state_15655[(13)]);
var inst_15598 = (state_15655[(14)]);
var inst_15596 = (state_15655[(15)]);
var inst_15599 = (state_15655[(16)]);
var inst_15604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15597,inst_15599);
var inst_15605 = cljs.core.async.muxch_STAR_(inst_15604);
var inst_15606 = cljs.core.async.close_BANG_(inst_15605);
var inst_15607 = (inst_15599 + (1));
var tmp15685 = inst_15597;
var tmp15686 = inst_15598;
var tmp15687 = inst_15596;
var inst_15596__$1 = tmp15687;
var inst_15597__$1 = tmp15685;
var inst_15598__$1 = tmp15686;
var inst_15599__$1 = inst_15607;
var state_15655__$1 = (function (){var statearr_15691 = state_15655;
(statearr_15691[(13)] = inst_15597__$1);

(statearr_15691[(14)] = inst_15598__$1);

(statearr_15691[(15)] = inst_15596__$1);

(statearr_15691[(17)] = inst_15606);

(statearr_15691[(16)] = inst_15599__$1);

return statearr_15691;
})();
var statearr_15692_15732 = state_15655__$1;
(statearr_15692_15732[(2)] = null);

(statearr_15692_15732[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (18))){
var inst_15625 = (state_15655[(2)]);
var state_15655__$1 = state_15655;
var statearr_15693_15733 = state_15655__$1;
(statearr_15693_15733[(2)] = inst_15625);

(statearr_15693_15733[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15656 === (8))){
var inst_15598 = (state_15655[(14)]);
var inst_15599 = (state_15655[(16)]);
var inst_15601 = (inst_15599 < inst_15598);
var inst_15602 = inst_15601;
var state_15655__$1 = state_15655;
if(cljs.core.truth_(inst_15602)){
var statearr_15694_15734 = state_15655__$1;
(statearr_15694_15734[(1)] = (10));

} else {
var statearr_15695_15735 = state_15655__$1;
(statearr_15695_15735[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___15707,mults,ensure_mult,p))
;
return ((function (switch__13708__auto__,c__13822__auto___15707,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_15699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15699[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_15699[(1)] = (1));

return statearr_15699;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_15655){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15655);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15700){if((e15700 instanceof Object)){
var ex__13712__auto__ = e15700;
var statearr_15701_15736 = state_15655;
(statearr_15701_15736[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15655);

return cljs.core.cst$kw$recur;
} else {
throw e15700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15737 = state_15655;
state_15655 = G__15737;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_15655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_15655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15707,mults,ensure_mult,p))
})();
var state__13824__auto__ = (function (){var statearr_15702 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15707);

return statearr_15702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15707,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15738 = [];
var len__7276__auto___15741 = arguments.length;
var i__7277__auto___15742 = (0);
while(true){
if((i__7277__auto___15742 < len__7276__auto___15741)){
args15738.push((arguments[i__7277__auto___15742]));

var G__15743 = (i__7277__auto___15742 + (1));
i__7277__auto___15742 = G__15743;
continue;
} else {
}
break;
}

var G__15740 = args15738.length;
switch (G__15740) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15738.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15745 = [];
var len__7276__auto___15748 = arguments.length;
var i__7277__auto___15749 = (0);
while(true){
if((i__7277__auto___15749 < len__7276__auto___15748)){
args15745.push((arguments[i__7277__auto___15749]));

var G__15750 = (i__7277__auto___15749 + (1));
i__7277__auto___15749 = G__15750;
continue;
} else {
}
break;
}

var G__15747 = args15745.length;
switch (G__15747) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15745.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15752 = [];
var len__7276__auto___15823 = arguments.length;
var i__7277__auto___15824 = (0);
while(true){
if((i__7277__auto___15824 < len__7276__auto___15823)){
args15752.push((arguments[i__7277__auto___15824]));

var G__15825 = (i__7277__auto___15824 + (1));
i__7277__auto___15824 = G__15825;
continue;
} else {
}
break;
}

var G__15754 = args15752.length;
switch (G__15754) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15752.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13822__auto___15827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15793){
var state_val_15794 = (state_15793[(1)]);
if((state_val_15794 === (7))){
var state_15793__$1 = state_15793;
var statearr_15795_15828 = state_15793__$1;
(statearr_15795_15828[(2)] = null);

(statearr_15795_15828[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (1))){
var state_15793__$1 = state_15793;
var statearr_15796_15829 = state_15793__$1;
(statearr_15796_15829[(2)] = null);

(statearr_15796_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (4))){
var inst_15757 = (state_15793[(7)]);
var inst_15759 = (inst_15757 < cnt);
var state_15793__$1 = state_15793;
if(cljs.core.truth_(inst_15759)){
var statearr_15797_15830 = state_15793__$1;
(statearr_15797_15830[(1)] = (6));

} else {
var statearr_15798_15831 = state_15793__$1;
(statearr_15798_15831[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (15))){
var inst_15789 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15799_15832 = state_15793__$1;
(statearr_15799_15832[(2)] = inst_15789);

(statearr_15799_15832[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (13))){
var inst_15782 = cljs.core.async.close_BANG_(out);
var state_15793__$1 = state_15793;
var statearr_15800_15833 = state_15793__$1;
(statearr_15800_15833[(2)] = inst_15782);

(statearr_15800_15833[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (6))){
var state_15793__$1 = state_15793;
var statearr_15801_15834 = state_15793__$1;
(statearr_15801_15834[(2)] = null);

(statearr_15801_15834[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (3))){
var inst_15791 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15793__$1,inst_15791);
} else {
if((state_val_15794 === (12))){
var inst_15779 = (state_15793[(8)]);
var inst_15779__$1 = (state_15793[(2)]);
var inst_15780 = cljs.core.some(cljs.core.nil_QMARK_,inst_15779__$1);
var state_15793__$1 = (function (){var statearr_15802 = state_15793;
(statearr_15802[(8)] = inst_15779__$1);

return statearr_15802;
})();
if(cljs.core.truth_(inst_15780)){
var statearr_15803_15835 = state_15793__$1;
(statearr_15803_15835[(1)] = (13));

} else {
var statearr_15804_15836 = state_15793__$1;
(statearr_15804_15836[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (2))){
var inst_15756 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15757 = (0);
var state_15793__$1 = (function (){var statearr_15805 = state_15793;
(statearr_15805[(9)] = inst_15756);

(statearr_15805[(7)] = inst_15757);

return statearr_15805;
})();
var statearr_15806_15837 = state_15793__$1;
(statearr_15806_15837[(2)] = null);

(statearr_15806_15837[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (11))){
var inst_15757 = (state_15793[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15793,(10),Object,null,(9));
var inst_15766 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15757) : chs__$1.call(null,inst_15757));
var inst_15767 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15757) : done.call(null,inst_15757));
var inst_15768 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15766,inst_15767);
var state_15793__$1 = state_15793;
var statearr_15807_15838 = state_15793__$1;
(statearr_15807_15838[(2)] = inst_15768);


cljs.core.async.impl.ioc_helpers.process_exception(state_15793__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (9))){
var inst_15757 = (state_15793[(7)]);
var inst_15770 = (state_15793[(2)]);
var inst_15771 = (inst_15757 + (1));
var inst_15757__$1 = inst_15771;
var state_15793__$1 = (function (){var statearr_15808 = state_15793;
(statearr_15808[(7)] = inst_15757__$1);

(statearr_15808[(10)] = inst_15770);

return statearr_15808;
})();
var statearr_15809_15839 = state_15793__$1;
(statearr_15809_15839[(2)] = null);

(statearr_15809_15839[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (5))){
var inst_15777 = (state_15793[(2)]);
var state_15793__$1 = (function (){var statearr_15810 = state_15793;
(statearr_15810[(11)] = inst_15777);

return statearr_15810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15793__$1,(12),dchan);
} else {
if((state_val_15794 === (14))){
var inst_15779 = (state_15793[(8)]);
var inst_15784 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15779);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15793__$1,(16),out,inst_15784);
} else {
if((state_val_15794 === (16))){
var inst_15786 = (state_15793[(2)]);
var state_15793__$1 = (function (){var statearr_15811 = state_15793;
(statearr_15811[(12)] = inst_15786);

return statearr_15811;
})();
var statearr_15812_15840 = state_15793__$1;
(statearr_15812_15840[(2)] = null);

(statearr_15812_15840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (10))){
var inst_15761 = (state_15793[(2)]);
var inst_15762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15793__$1 = (function (){var statearr_15813 = state_15793;
(statearr_15813[(13)] = inst_15761);

return statearr_15813;
})();
var statearr_15814_15841 = state_15793__$1;
(statearr_15814_15841[(2)] = inst_15762);


cljs.core.async.impl.ioc_helpers.process_exception(state_15793__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15794 === (8))){
var inst_15775 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15815_15842 = state_15793__$1;
(statearr_15815_15842[(2)] = inst_15775);

(statearr_15815_15842[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13708__auto__,c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_15819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15819[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_15819[(1)] = (1));

return statearr_15819;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_15793){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15793);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15820){if((e15820 instanceof Object)){
var ex__13712__auto__ = e15820;
var statearr_15821_15843 = state_15793;
(statearr_15821_15843[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15793);

return cljs.core.cst$kw$recur;
} else {
throw e15820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15844 = state_15793;
state_15793 = G__15844;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_15793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_15793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13824__auto__ = (function (){var statearr_15822 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15827);

return statearr_15822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15827,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15846 = [];
var len__7276__auto___15902 = arguments.length;
var i__7277__auto___15903 = (0);
while(true){
if((i__7277__auto___15903 < len__7276__auto___15902)){
args15846.push((arguments[i__7277__auto___15903]));

var G__15904 = (i__7277__auto___15903 + (1));
i__7277__auto___15903 = G__15904;
continue;
} else {
}
break;
}

var G__15848 = args15846.length;
switch (G__15848) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15846.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___15906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15906,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15906,out){
return (function (state_15878){
var state_val_15879 = (state_15878[(1)]);
if((state_val_15879 === (7))){
var inst_15858 = (state_15878[(7)]);
var inst_15857 = (state_15878[(8)]);
var inst_15857__$1 = (state_15878[(2)]);
var inst_15858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15857__$1,(0),null);
var inst_15859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15857__$1,(1),null);
var inst_15860 = (inst_15858__$1 == null);
var state_15878__$1 = (function (){var statearr_15880 = state_15878;
(statearr_15880[(7)] = inst_15858__$1);

(statearr_15880[(9)] = inst_15859);

(statearr_15880[(8)] = inst_15857__$1);

return statearr_15880;
})();
if(cljs.core.truth_(inst_15860)){
var statearr_15881_15907 = state_15878__$1;
(statearr_15881_15907[(1)] = (8));

} else {
var statearr_15882_15908 = state_15878__$1;
(statearr_15882_15908[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (1))){
var inst_15849 = cljs.core.vec(chs);
var inst_15850 = inst_15849;
var state_15878__$1 = (function (){var statearr_15883 = state_15878;
(statearr_15883[(10)] = inst_15850);

return statearr_15883;
})();
var statearr_15884_15909 = state_15878__$1;
(statearr_15884_15909[(2)] = null);

(statearr_15884_15909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (4))){
var inst_15850 = (state_15878[(10)]);
var state_15878__$1 = state_15878;
return cljs.core.async.ioc_alts_BANG_(state_15878__$1,(7),inst_15850);
} else {
if((state_val_15879 === (6))){
var inst_15874 = (state_15878[(2)]);
var state_15878__$1 = state_15878;
var statearr_15885_15910 = state_15878__$1;
(statearr_15885_15910[(2)] = inst_15874);

(statearr_15885_15910[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (3))){
var inst_15876 = (state_15878[(2)]);
var state_15878__$1 = state_15878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15878__$1,inst_15876);
} else {
if((state_val_15879 === (2))){
var inst_15850 = (state_15878[(10)]);
var inst_15852 = cljs.core.count(inst_15850);
var inst_15853 = (inst_15852 > (0));
var state_15878__$1 = state_15878;
if(cljs.core.truth_(inst_15853)){
var statearr_15887_15911 = state_15878__$1;
(statearr_15887_15911[(1)] = (4));

} else {
var statearr_15888_15912 = state_15878__$1;
(statearr_15888_15912[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (11))){
var inst_15850 = (state_15878[(10)]);
var inst_15867 = (state_15878[(2)]);
var tmp15886 = inst_15850;
var inst_15850__$1 = tmp15886;
var state_15878__$1 = (function (){var statearr_15889 = state_15878;
(statearr_15889[(10)] = inst_15850__$1);

(statearr_15889[(11)] = inst_15867);

return statearr_15889;
})();
var statearr_15890_15913 = state_15878__$1;
(statearr_15890_15913[(2)] = null);

(statearr_15890_15913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (9))){
var inst_15858 = (state_15878[(7)]);
var state_15878__$1 = state_15878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15878__$1,(11),out,inst_15858);
} else {
if((state_val_15879 === (5))){
var inst_15872 = cljs.core.async.close_BANG_(out);
var state_15878__$1 = state_15878;
var statearr_15891_15914 = state_15878__$1;
(statearr_15891_15914[(2)] = inst_15872);

(statearr_15891_15914[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (10))){
var inst_15870 = (state_15878[(2)]);
var state_15878__$1 = state_15878;
var statearr_15892_15915 = state_15878__$1;
(statearr_15892_15915[(2)] = inst_15870);

(statearr_15892_15915[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15879 === (8))){
var inst_15858 = (state_15878[(7)]);
var inst_15850 = (state_15878[(10)]);
var inst_15859 = (state_15878[(9)]);
var inst_15857 = (state_15878[(8)]);
var inst_15862 = (function (){var cs = inst_15850;
var vec__15855 = inst_15857;
var v = inst_15858;
var c = inst_15859;
return ((function (cs,vec__15855,v,c,inst_15858,inst_15850,inst_15859,inst_15857,state_val_15879,c__13822__auto___15906,out){
return (function (p1__15845_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15845_SHARP_);
});
;})(cs,vec__15855,v,c,inst_15858,inst_15850,inst_15859,inst_15857,state_val_15879,c__13822__auto___15906,out))
})();
var inst_15863 = cljs.core.filterv(inst_15862,inst_15850);
var inst_15850__$1 = inst_15863;
var state_15878__$1 = (function (){var statearr_15893 = state_15878;
(statearr_15893[(10)] = inst_15850__$1);

return statearr_15893;
})();
var statearr_15894_15916 = state_15878__$1;
(statearr_15894_15916[(2)] = null);

(statearr_15894_15916[(1)] = (2));


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
}
}
}
}
});})(c__13822__auto___15906,out))
;
return ((function (switch__13708__auto__,c__13822__auto___15906,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_15898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15898[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_15898[(1)] = (1));

return statearr_15898;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_15878){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15878);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15899){if((e15899 instanceof Object)){
var ex__13712__auto__ = e15899;
var statearr_15900_15917 = state_15878;
(statearr_15900_15917[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15878);

return cljs.core.cst$kw$recur;
} else {
throw e15899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15918 = state_15878;
state_15878 = G__15918;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_15878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_15878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15906,out))
})();
var state__13824__auto__ = (function (){var statearr_15901 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15906);

return statearr_15901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15906,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15919 = [];
var len__7276__auto___15968 = arguments.length;
var i__7277__auto___15969 = (0);
while(true){
if((i__7277__auto___15969 < len__7276__auto___15968)){
args15919.push((arguments[i__7277__auto___15969]));

var G__15970 = (i__7277__auto___15969 + (1));
i__7277__auto___15969 = G__15970;
continue;
} else {
}
break;
}

var G__15921 = args15919.length;
switch (G__15921) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15919.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___15972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___15972,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___15972,out){
return (function (state_15945){
var state_val_15946 = (state_15945[(1)]);
if((state_val_15946 === (7))){
var inst_15927 = (state_15945[(7)]);
var inst_15927__$1 = (state_15945[(2)]);
var inst_15928 = (inst_15927__$1 == null);
var inst_15929 = cljs.core.not(inst_15928);
var state_15945__$1 = (function (){var statearr_15947 = state_15945;
(statearr_15947[(7)] = inst_15927__$1);

return statearr_15947;
})();
if(inst_15929){
var statearr_15948_15973 = state_15945__$1;
(statearr_15948_15973[(1)] = (8));

} else {
var statearr_15949_15974 = state_15945__$1;
(statearr_15949_15974[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (1))){
var inst_15922 = (0);
var state_15945__$1 = (function (){var statearr_15950 = state_15945;
(statearr_15950[(8)] = inst_15922);

return statearr_15950;
})();
var statearr_15951_15975 = state_15945__$1;
(statearr_15951_15975[(2)] = null);

(statearr_15951_15975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (4))){
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15945__$1,(7),ch);
} else {
if((state_val_15946 === (6))){
var inst_15940 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15952_15976 = state_15945__$1;
(statearr_15952_15976[(2)] = inst_15940);

(statearr_15952_15976[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (3))){
var inst_15942 = (state_15945[(2)]);
var inst_15943 = cljs.core.async.close_BANG_(out);
var state_15945__$1 = (function (){var statearr_15953 = state_15945;
(statearr_15953[(9)] = inst_15942);

return statearr_15953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15945__$1,inst_15943);
} else {
if((state_val_15946 === (2))){
var inst_15922 = (state_15945[(8)]);
var inst_15924 = (inst_15922 < n);
var state_15945__$1 = state_15945;
if(cljs.core.truth_(inst_15924)){
var statearr_15954_15977 = state_15945__$1;
(statearr_15954_15977[(1)] = (4));

} else {
var statearr_15955_15978 = state_15945__$1;
(statearr_15955_15978[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (11))){
var inst_15922 = (state_15945[(8)]);
var inst_15932 = (state_15945[(2)]);
var inst_15933 = (inst_15922 + (1));
var inst_15922__$1 = inst_15933;
var state_15945__$1 = (function (){var statearr_15956 = state_15945;
(statearr_15956[(8)] = inst_15922__$1);

(statearr_15956[(10)] = inst_15932);

return statearr_15956;
})();
var statearr_15957_15979 = state_15945__$1;
(statearr_15957_15979[(2)] = null);

(statearr_15957_15979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (9))){
var state_15945__$1 = state_15945;
var statearr_15958_15980 = state_15945__$1;
(statearr_15958_15980[(2)] = null);

(statearr_15958_15980[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (5))){
var state_15945__$1 = state_15945;
var statearr_15959_15981 = state_15945__$1;
(statearr_15959_15981[(2)] = null);

(statearr_15959_15981[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (10))){
var inst_15937 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15960_15982 = state_15945__$1;
(statearr_15960_15982[(2)] = inst_15937);

(statearr_15960_15982[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15946 === (8))){
var inst_15927 = (state_15945[(7)]);
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15945__$1,(11),out,inst_15927);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___15972,out))
;
return ((function (switch__13708__auto__,c__13822__auto___15972,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_15964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15964[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_15964[(1)] = (1));

return statearr_15964;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_15945){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_15945);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object)){
var ex__13712__auto__ = e15965;
var statearr_15966_15983 = state_15945;
(statearr_15966_15983[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15945);

return cljs.core.cst$kw$recur;
} else {
throw e15965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__15984 = state_15945;
state_15945 = G__15984;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_15945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_15945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___15972,out))
})();
var state__13824__auto__ = (function (){var statearr_15967 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___15972);

return statearr_15967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___15972,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15994 = (function (map_LT_,f,ch,meta15995){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15995 = meta15995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15996,meta15995__$1){
var self__ = this;
var _15996__$1 = this;
return (new cljs.core.async.t_cljs$core$async15994(self__.map_LT_,self__.f,self__.ch,meta15995__$1));
});

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15996){
var self__ = this;
var _15996__$1 = this;
return self__.meta15995;
});

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15997 = (function (map_LT_,f,ch,meta15995,_,fn1,meta15998){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15995 = meta15995;
this._ = _;
this.fn1 = fn1;
this.meta15998 = meta15998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15999,meta15998__$1){
var self__ = this;
var _15999__$1 = this;
return (new cljs.core.async.t_cljs$core$async15997(self__.map_LT_,self__.f,self__.ch,self__.meta15995,self__._,self__.fn1,meta15998__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15999){
var self__ = this;
var _15999__$1 = this;
return self__.meta15998;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15997.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15985_SHARP_){
var G__16000 = (((p1__15985_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15985_SHARP_) : self__.f.call(null,p1__15985_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16000) : f1.call(null,G__16000));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15997.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15995,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15994], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15998], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15997";

cljs.core.async.t_cljs$core$async15997.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15997");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15997 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15997(map_LT___$1,f__$1,ch__$1,meta15995__$1,___$2,fn1__$1,meta15998){
return (new cljs.core.async.t_cljs$core$async15997(map_LT___$1,f__$1,ch__$1,meta15995__$1,___$2,fn1__$1,meta15998));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15997(self__.map_LT_,self__.f,self__.ch,self__.meta15995,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6195__auto__ = ret;
if(cljs.core.truth_(and__6195__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6195__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16001 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16001) : self__.f.call(null,G__16001));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15995], null);
});

cljs.core.async.t_cljs$core$async15994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15994";

cljs.core.async.t_cljs$core$async15994.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async15994");
});

cljs.core.async.__GT_t_cljs$core$async15994 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15994(map_LT___$1,f__$1,ch__$1,meta15995){
return (new cljs.core.async.t_cljs$core$async15994(map_LT___$1,f__$1,ch__$1,meta15995));
});

}

return (new cljs.core.async.t_cljs$core$async15994(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16005 = (function (map_GT_,f,ch,meta16006){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16006 = meta16006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16007,meta16006__$1){
var self__ = this;
var _16007__$1 = this;
return (new cljs.core.async.t_cljs$core$async16005(self__.map_GT_,self__.f,self__.ch,meta16006__$1));
});

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16007){
var self__ = this;
var _16007__$1 = this;
return self__.meta16006;
});

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16006], null);
});

cljs.core.async.t_cljs$core$async16005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16005";

cljs.core.async.t_cljs$core$async16005.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16005");
});

cljs.core.async.__GT_t_cljs$core$async16005 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16005(map_GT___$1,f__$1,ch__$1,meta16006){
return (new cljs.core.async.t_cljs$core$async16005(map_GT___$1,f__$1,ch__$1,meta16006));
});

}

return (new cljs.core.async.t_cljs$core$async16005(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16011 = (function (filter_GT_,p,ch,meta16012){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16012 = meta16012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16013,meta16012__$1){
var self__ = this;
var _16013__$1 = this;
return (new cljs.core.async.t_cljs$core$async16011(self__.filter_GT_,self__.p,self__.ch,meta16012__$1));
});

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16013){
var self__ = this;
var _16013__$1 = this;
return self__.meta16012;
});

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16012], null);
});

cljs.core.async.t_cljs$core$async16011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16011";

cljs.core.async.t_cljs$core$async16011.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write(writer__6814__auto__,"cljs.core.async/t_cljs$core$async16011");
});

cljs.core.async.__GT_t_cljs$core$async16011 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16011(filter_GT___$1,p__$1,ch__$1,meta16012){
return (new cljs.core.async.t_cljs$core$async16011(filter_GT___$1,p__$1,ch__$1,meta16012));
});

}

return (new cljs.core.async.t_cljs$core$async16011(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16014 = [];
var len__7276__auto___16058 = arguments.length;
var i__7277__auto___16059 = (0);
while(true){
if((i__7277__auto___16059 < len__7276__auto___16058)){
args16014.push((arguments[i__7277__auto___16059]));

var G__16060 = (i__7277__auto___16059 + (1));
i__7277__auto___16059 = G__16060;
continue;
} else {
}
break;
}

var G__16016 = args16014.length;
switch (G__16016) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16014.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___16062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___16062,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___16062,out){
return (function (state_16037){
var state_val_16038 = (state_16037[(1)]);
if((state_val_16038 === (7))){
var inst_16033 = (state_16037[(2)]);
var state_16037__$1 = state_16037;
var statearr_16039_16063 = state_16037__$1;
(statearr_16039_16063[(2)] = inst_16033);

(statearr_16039_16063[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (1))){
var state_16037__$1 = state_16037;
var statearr_16040_16064 = state_16037__$1;
(statearr_16040_16064[(2)] = null);

(statearr_16040_16064[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (4))){
var inst_16019 = (state_16037[(7)]);
var inst_16019__$1 = (state_16037[(2)]);
var inst_16020 = (inst_16019__$1 == null);
var state_16037__$1 = (function (){var statearr_16041 = state_16037;
(statearr_16041[(7)] = inst_16019__$1);

return statearr_16041;
})();
if(cljs.core.truth_(inst_16020)){
var statearr_16042_16065 = state_16037__$1;
(statearr_16042_16065[(1)] = (5));

} else {
var statearr_16043_16066 = state_16037__$1;
(statearr_16043_16066[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (6))){
var inst_16019 = (state_16037[(7)]);
var inst_16024 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16019) : p.call(null,inst_16019));
var state_16037__$1 = state_16037;
if(cljs.core.truth_(inst_16024)){
var statearr_16044_16067 = state_16037__$1;
(statearr_16044_16067[(1)] = (8));

} else {
var statearr_16045_16068 = state_16037__$1;
(statearr_16045_16068[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (3))){
var inst_16035 = (state_16037[(2)]);
var state_16037__$1 = state_16037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16037__$1,inst_16035);
} else {
if((state_val_16038 === (2))){
var state_16037__$1 = state_16037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16037__$1,(4),ch);
} else {
if((state_val_16038 === (11))){
var inst_16027 = (state_16037[(2)]);
var state_16037__$1 = state_16037;
var statearr_16046_16069 = state_16037__$1;
(statearr_16046_16069[(2)] = inst_16027);

(statearr_16046_16069[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (9))){
var state_16037__$1 = state_16037;
var statearr_16047_16070 = state_16037__$1;
(statearr_16047_16070[(2)] = null);

(statearr_16047_16070[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (5))){
var inst_16022 = cljs.core.async.close_BANG_(out);
var state_16037__$1 = state_16037;
var statearr_16048_16071 = state_16037__$1;
(statearr_16048_16071[(2)] = inst_16022);

(statearr_16048_16071[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (10))){
var inst_16030 = (state_16037[(2)]);
var state_16037__$1 = (function (){var statearr_16049 = state_16037;
(statearr_16049[(8)] = inst_16030);

return statearr_16049;
})();
var statearr_16050_16072 = state_16037__$1;
(statearr_16050_16072[(2)] = null);

(statearr_16050_16072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16038 === (8))){
var inst_16019 = (state_16037[(7)]);
var state_16037__$1 = state_16037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16037__$1,(11),out,inst_16019);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto___16062,out))
;
return ((function (switch__13708__auto__,c__13822__auto___16062,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_16054 = [null,null,null,null,null,null,null,null,null];
(statearr_16054[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_16054[(1)] = (1));

return statearr_16054;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_16037){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16037);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16055){if((e16055 instanceof Object)){
var ex__13712__auto__ = e16055;
var statearr_16056_16073 = state_16037;
(statearr_16056_16073[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16037);

return cljs.core.cst$kw$recur;
} else {
throw e16055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16074 = state_16037;
state_16037 = G__16074;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_16037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_16037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___16062,out))
})();
var state__13824__auto__ = (function (){var statearr_16057 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___16062);

return statearr_16057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___16062,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16075 = [];
var len__7276__auto___16078 = arguments.length;
var i__7277__auto___16079 = (0);
while(true){
if((i__7277__auto___16079 < len__7276__auto___16078)){
args16075.push((arguments[i__7277__auto___16079]));

var G__16080 = (i__7277__auto___16079 + (1));
i__7277__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var G__16077 = args16075.length;
switch (G__16077) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16075.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto__){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto__){
return (function (state_16247){
var state_val_16248 = (state_16247[(1)]);
if((state_val_16248 === (7))){
var inst_16243 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16249_16290 = state_16247__$1;
(statearr_16249_16290[(2)] = inst_16243);

(statearr_16249_16290[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (20))){
var inst_16213 = (state_16247[(7)]);
var inst_16224 = (state_16247[(2)]);
var inst_16225 = cljs.core.next(inst_16213);
var inst_16199 = inst_16225;
var inst_16200 = null;
var inst_16201 = (0);
var inst_16202 = (0);
var state_16247__$1 = (function (){var statearr_16250 = state_16247;
(statearr_16250[(8)] = inst_16200);

(statearr_16250[(9)] = inst_16199);

(statearr_16250[(10)] = inst_16201);

(statearr_16250[(11)] = inst_16224);

(statearr_16250[(12)] = inst_16202);

return statearr_16250;
})();
var statearr_16251_16291 = state_16247__$1;
(statearr_16251_16291[(2)] = null);

(statearr_16251_16291[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (1))){
var state_16247__$1 = state_16247;
var statearr_16252_16292 = state_16247__$1;
(statearr_16252_16292[(2)] = null);

(statearr_16252_16292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (4))){
var inst_16188 = (state_16247[(13)]);
var inst_16188__$1 = (state_16247[(2)]);
var inst_16189 = (inst_16188__$1 == null);
var state_16247__$1 = (function (){var statearr_16253 = state_16247;
(statearr_16253[(13)] = inst_16188__$1);

return statearr_16253;
})();
if(cljs.core.truth_(inst_16189)){
var statearr_16254_16293 = state_16247__$1;
(statearr_16254_16293[(1)] = (5));

} else {
var statearr_16255_16294 = state_16247__$1;
(statearr_16255_16294[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (15))){
var state_16247__$1 = state_16247;
var statearr_16259_16295 = state_16247__$1;
(statearr_16259_16295[(2)] = null);

(statearr_16259_16295[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (21))){
var state_16247__$1 = state_16247;
var statearr_16260_16296 = state_16247__$1;
(statearr_16260_16296[(2)] = null);

(statearr_16260_16296[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (13))){
var inst_16200 = (state_16247[(8)]);
var inst_16199 = (state_16247[(9)]);
var inst_16201 = (state_16247[(10)]);
var inst_16202 = (state_16247[(12)]);
var inst_16209 = (state_16247[(2)]);
var inst_16210 = (inst_16202 + (1));
var tmp16256 = inst_16200;
var tmp16257 = inst_16199;
var tmp16258 = inst_16201;
var inst_16199__$1 = tmp16257;
var inst_16200__$1 = tmp16256;
var inst_16201__$1 = tmp16258;
var inst_16202__$1 = inst_16210;
var state_16247__$1 = (function (){var statearr_16261 = state_16247;
(statearr_16261[(8)] = inst_16200__$1);

(statearr_16261[(9)] = inst_16199__$1);

(statearr_16261[(10)] = inst_16201__$1);

(statearr_16261[(14)] = inst_16209);

(statearr_16261[(12)] = inst_16202__$1);

return statearr_16261;
})();
var statearr_16262_16297 = state_16247__$1;
(statearr_16262_16297[(2)] = null);

(statearr_16262_16297[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (22))){
var state_16247__$1 = state_16247;
var statearr_16263_16298 = state_16247__$1;
(statearr_16263_16298[(2)] = null);

(statearr_16263_16298[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (6))){
var inst_16188 = (state_16247[(13)]);
var inst_16197 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16188) : f.call(null,inst_16188));
var inst_16198 = cljs.core.seq(inst_16197);
var inst_16199 = inst_16198;
var inst_16200 = null;
var inst_16201 = (0);
var inst_16202 = (0);
var state_16247__$1 = (function (){var statearr_16264 = state_16247;
(statearr_16264[(8)] = inst_16200);

(statearr_16264[(9)] = inst_16199);

(statearr_16264[(10)] = inst_16201);

(statearr_16264[(12)] = inst_16202);

return statearr_16264;
})();
var statearr_16265_16299 = state_16247__$1;
(statearr_16265_16299[(2)] = null);

(statearr_16265_16299[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (17))){
var inst_16213 = (state_16247[(7)]);
var inst_16217 = cljs.core.chunk_first(inst_16213);
var inst_16218 = cljs.core.chunk_rest(inst_16213);
var inst_16219 = cljs.core.count(inst_16217);
var inst_16199 = inst_16218;
var inst_16200 = inst_16217;
var inst_16201 = inst_16219;
var inst_16202 = (0);
var state_16247__$1 = (function (){var statearr_16266 = state_16247;
(statearr_16266[(8)] = inst_16200);

(statearr_16266[(9)] = inst_16199);

(statearr_16266[(10)] = inst_16201);

(statearr_16266[(12)] = inst_16202);

return statearr_16266;
})();
var statearr_16267_16300 = state_16247__$1;
(statearr_16267_16300[(2)] = null);

(statearr_16267_16300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (3))){
var inst_16245 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16247__$1,inst_16245);
} else {
if((state_val_16248 === (12))){
var inst_16233 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16268_16301 = state_16247__$1;
(statearr_16268_16301[(2)] = inst_16233);

(statearr_16268_16301[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (2))){
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16247__$1,(4),in$);
} else {
if((state_val_16248 === (23))){
var inst_16241 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16269_16302 = state_16247__$1;
(statearr_16269_16302[(2)] = inst_16241);

(statearr_16269_16302[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (19))){
var inst_16228 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16270_16303 = state_16247__$1;
(statearr_16270_16303[(2)] = inst_16228);

(statearr_16270_16303[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (11))){
var inst_16213 = (state_16247[(7)]);
var inst_16199 = (state_16247[(9)]);
var inst_16213__$1 = cljs.core.seq(inst_16199);
var state_16247__$1 = (function (){var statearr_16271 = state_16247;
(statearr_16271[(7)] = inst_16213__$1);

return statearr_16271;
})();
if(inst_16213__$1){
var statearr_16272_16304 = state_16247__$1;
(statearr_16272_16304[(1)] = (14));

} else {
var statearr_16273_16305 = state_16247__$1;
(statearr_16273_16305[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (9))){
var inst_16235 = (state_16247[(2)]);
var inst_16236 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16247__$1 = (function (){var statearr_16274 = state_16247;
(statearr_16274[(15)] = inst_16235);

return statearr_16274;
})();
if(cljs.core.truth_(inst_16236)){
var statearr_16275_16306 = state_16247__$1;
(statearr_16275_16306[(1)] = (21));

} else {
var statearr_16276_16307 = state_16247__$1;
(statearr_16276_16307[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (5))){
var inst_16191 = cljs.core.async.close_BANG_(out);
var state_16247__$1 = state_16247;
var statearr_16277_16308 = state_16247__$1;
(statearr_16277_16308[(2)] = inst_16191);

(statearr_16277_16308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (14))){
var inst_16213 = (state_16247[(7)]);
var inst_16215 = cljs.core.chunked_seq_QMARK_(inst_16213);
var state_16247__$1 = state_16247;
if(inst_16215){
var statearr_16278_16309 = state_16247__$1;
(statearr_16278_16309[(1)] = (17));

} else {
var statearr_16279_16310 = state_16247__$1;
(statearr_16279_16310[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (16))){
var inst_16231 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16280_16311 = state_16247__$1;
(statearr_16280_16311[(2)] = inst_16231);

(statearr_16280_16311[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (10))){
var inst_16200 = (state_16247[(8)]);
var inst_16202 = (state_16247[(12)]);
var inst_16207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16200,inst_16202);
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16247__$1,(13),out,inst_16207);
} else {
if((state_val_16248 === (18))){
var inst_16213 = (state_16247[(7)]);
var inst_16222 = cljs.core.first(inst_16213);
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16247__$1,(20),out,inst_16222);
} else {
if((state_val_16248 === (8))){
var inst_16201 = (state_16247[(10)]);
var inst_16202 = (state_16247[(12)]);
var inst_16204 = (inst_16202 < inst_16201);
var inst_16205 = inst_16204;
var state_16247__$1 = state_16247;
if(cljs.core.truth_(inst_16205)){
var statearr_16281_16312 = state_16247__$1;
(statearr_16281_16312[(1)] = (10));

} else {
var statearr_16282_16313 = state_16247__$1;
(statearr_16282_16313[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13822__auto__))
;
return ((function (switch__13708__auto__,c__13822__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____0 = (function (){
var statearr_16286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16286[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__);

(statearr_16286[(1)] = (1));

return statearr_16286;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____1 = (function (state_16247){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16247);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16287){if((e16287 instanceof Object)){
var ex__13712__auto__ = e16287;
var statearr_16288_16314 = state_16247;
(statearr_16288_16314[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16247);

return cljs.core.cst$kw$recur;
} else {
throw e16287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16315 = state_16247;
state_16247 = G__16315;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__ = function(state_16247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____1.call(this,state_16247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto__))
})();
var state__13824__auto__ = (function (){var statearr_16289 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto__);

return statearr_16289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto__))
);

return c__13822__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16316 = [];
var len__7276__auto___16319 = arguments.length;
var i__7277__auto___16320 = (0);
while(true){
if((i__7277__auto___16320 < len__7276__auto___16319)){
args16316.push((arguments[i__7277__auto___16320]));

var G__16321 = (i__7277__auto___16320 + (1));
i__7277__auto___16320 = G__16321;
continue;
} else {
}
break;
}

var G__16318 = args16316.length;
switch (G__16318) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16316.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16323 = [];
var len__7276__auto___16326 = arguments.length;
var i__7277__auto___16327 = (0);
while(true){
if((i__7277__auto___16327 < len__7276__auto___16326)){
args16323.push((arguments[i__7277__auto___16327]));

var G__16328 = (i__7277__auto___16327 + (1));
i__7277__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var G__16325 = args16323.length;
switch (G__16325) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16323.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16330 = [];
var len__7276__auto___16381 = arguments.length;
var i__7277__auto___16382 = (0);
while(true){
if((i__7277__auto___16382 < len__7276__auto___16381)){
args16330.push((arguments[i__7277__auto___16382]));

var G__16383 = (i__7277__auto___16382 + (1));
i__7277__auto___16382 = G__16383;
continue;
} else {
}
break;
}

var G__16332 = args16330.length;
switch (G__16332) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16330.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___16385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___16385,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___16385,out){
return (function (state_16356){
var state_val_16357 = (state_16356[(1)]);
if((state_val_16357 === (7))){
var inst_16351 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16358_16386 = state_16356__$1;
(statearr_16358_16386[(2)] = inst_16351);

(statearr_16358_16386[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (1))){
var inst_16333 = null;
var state_16356__$1 = (function (){var statearr_16359 = state_16356;
(statearr_16359[(7)] = inst_16333);

return statearr_16359;
})();
var statearr_16360_16387 = state_16356__$1;
(statearr_16360_16387[(2)] = null);

(statearr_16360_16387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (4))){
var inst_16336 = (state_16356[(8)]);
var inst_16336__$1 = (state_16356[(2)]);
var inst_16337 = (inst_16336__$1 == null);
var inst_16338 = cljs.core.not(inst_16337);
var state_16356__$1 = (function (){var statearr_16361 = state_16356;
(statearr_16361[(8)] = inst_16336__$1);

return statearr_16361;
})();
if(inst_16338){
var statearr_16362_16388 = state_16356__$1;
(statearr_16362_16388[(1)] = (5));

} else {
var statearr_16363_16389 = state_16356__$1;
(statearr_16363_16389[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (6))){
var state_16356__$1 = state_16356;
var statearr_16364_16390 = state_16356__$1;
(statearr_16364_16390[(2)] = null);

(statearr_16364_16390[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (3))){
var inst_16353 = (state_16356[(2)]);
var inst_16354 = cljs.core.async.close_BANG_(out);
var state_16356__$1 = (function (){var statearr_16365 = state_16356;
(statearr_16365[(9)] = inst_16353);

return statearr_16365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16356__$1,inst_16354);
} else {
if((state_val_16357 === (2))){
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16356__$1,(4),ch);
} else {
if((state_val_16357 === (11))){
var inst_16336 = (state_16356[(8)]);
var inst_16345 = (state_16356[(2)]);
var inst_16333 = inst_16336;
var state_16356__$1 = (function (){var statearr_16366 = state_16356;
(statearr_16366[(7)] = inst_16333);

(statearr_16366[(10)] = inst_16345);

return statearr_16366;
})();
var statearr_16367_16391 = state_16356__$1;
(statearr_16367_16391[(2)] = null);

(statearr_16367_16391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (9))){
var inst_16336 = (state_16356[(8)]);
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16356__$1,(11),out,inst_16336);
} else {
if((state_val_16357 === (5))){
var inst_16333 = (state_16356[(7)]);
var inst_16336 = (state_16356[(8)]);
var inst_16340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16336,inst_16333);
var state_16356__$1 = state_16356;
if(inst_16340){
var statearr_16369_16392 = state_16356__$1;
(statearr_16369_16392[(1)] = (8));

} else {
var statearr_16370_16393 = state_16356__$1;
(statearr_16370_16393[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (10))){
var inst_16348 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16371_16394 = state_16356__$1;
(statearr_16371_16394[(2)] = inst_16348);

(statearr_16371_16394[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16357 === (8))){
var inst_16333 = (state_16356[(7)]);
var tmp16368 = inst_16333;
var inst_16333__$1 = tmp16368;
var state_16356__$1 = (function (){var statearr_16372 = state_16356;
(statearr_16372[(7)] = inst_16333__$1);

return statearr_16372;
})();
var statearr_16373_16395 = state_16356__$1;
(statearr_16373_16395[(2)] = null);

(statearr_16373_16395[(1)] = (2));


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
}
}
}
}
});})(c__13822__auto___16385,out))
;
return ((function (switch__13708__auto__,c__13822__auto___16385,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_16377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16377[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_16377[(1)] = (1));

return statearr_16377;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_16356){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16356);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16378){if((e16378 instanceof Object)){
var ex__13712__auto__ = e16378;
var statearr_16379_16396 = state_16356;
(statearr_16379_16396[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16356);

return cljs.core.cst$kw$recur;
} else {
throw e16378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16397 = state_16356;
state_16356 = G__16397;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_16356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_16356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___16385,out))
})();
var state__13824__auto__ = (function (){var statearr_16380 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___16385);

return statearr_16380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___16385,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16398 = [];
var len__7276__auto___16468 = arguments.length;
var i__7277__auto___16469 = (0);
while(true){
if((i__7277__auto___16469 < len__7276__auto___16468)){
args16398.push((arguments[i__7277__auto___16469]));

var G__16470 = (i__7277__auto___16469 + (1));
i__7277__auto___16469 = G__16470;
continue;
} else {
}
break;
}

var G__16400 = args16398.length;
switch (G__16400) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16398.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___16472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___16472,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___16472,out){
return (function (state_16438){
var state_val_16439 = (state_16438[(1)]);
if((state_val_16439 === (7))){
var inst_16434 = (state_16438[(2)]);
var state_16438__$1 = state_16438;
var statearr_16440_16473 = state_16438__$1;
(statearr_16440_16473[(2)] = inst_16434);

(statearr_16440_16473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (1))){
var inst_16401 = (new Array(n));
var inst_16402 = inst_16401;
var inst_16403 = (0);
var state_16438__$1 = (function (){var statearr_16441 = state_16438;
(statearr_16441[(7)] = inst_16402);

(statearr_16441[(8)] = inst_16403);

return statearr_16441;
})();
var statearr_16442_16474 = state_16438__$1;
(statearr_16442_16474[(2)] = null);

(statearr_16442_16474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (4))){
var inst_16406 = (state_16438[(9)]);
var inst_16406__$1 = (state_16438[(2)]);
var inst_16407 = (inst_16406__$1 == null);
var inst_16408 = cljs.core.not(inst_16407);
var state_16438__$1 = (function (){var statearr_16443 = state_16438;
(statearr_16443[(9)] = inst_16406__$1);

return statearr_16443;
})();
if(inst_16408){
var statearr_16444_16475 = state_16438__$1;
(statearr_16444_16475[(1)] = (5));

} else {
var statearr_16445_16476 = state_16438__$1;
(statearr_16445_16476[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (15))){
var inst_16428 = (state_16438[(2)]);
var state_16438__$1 = state_16438;
var statearr_16446_16477 = state_16438__$1;
(statearr_16446_16477[(2)] = inst_16428);

(statearr_16446_16477[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (13))){
var state_16438__$1 = state_16438;
var statearr_16447_16478 = state_16438__$1;
(statearr_16447_16478[(2)] = null);

(statearr_16447_16478[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (6))){
var inst_16403 = (state_16438[(8)]);
var inst_16424 = (inst_16403 > (0));
var state_16438__$1 = state_16438;
if(cljs.core.truth_(inst_16424)){
var statearr_16448_16479 = state_16438__$1;
(statearr_16448_16479[(1)] = (12));

} else {
var statearr_16449_16480 = state_16438__$1;
(statearr_16449_16480[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (3))){
var inst_16436 = (state_16438[(2)]);
var state_16438__$1 = state_16438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16438__$1,inst_16436);
} else {
if((state_val_16439 === (12))){
var inst_16402 = (state_16438[(7)]);
var inst_16426 = cljs.core.vec(inst_16402);
var state_16438__$1 = state_16438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16438__$1,(15),out,inst_16426);
} else {
if((state_val_16439 === (2))){
var state_16438__$1 = state_16438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16438__$1,(4),ch);
} else {
if((state_val_16439 === (11))){
var inst_16418 = (state_16438[(2)]);
var inst_16419 = (new Array(n));
var inst_16402 = inst_16419;
var inst_16403 = (0);
var state_16438__$1 = (function (){var statearr_16450 = state_16438;
(statearr_16450[(7)] = inst_16402);

(statearr_16450[(10)] = inst_16418);

(statearr_16450[(8)] = inst_16403);

return statearr_16450;
})();
var statearr_16451_16481 = state_16438__$1;
(statearr_16451_16481[(2)] = null);

(statearr_16451_16481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (9))){
var inst_16402 = (state_16438[(7)]);
var inst_16416 = cljs.core.vec(inst_16402);
var state_16438__$1 = state_16438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16438__$1,(11),out,inst_16416);
} else {
if((state_val_16439 === (5))){
var inst_16402 = (state_16438[(7)]);
var inst_16406 = (state_16438[(9)]);
var inst_16403 = (state_16438[(8)]);
var inst_16411 = (state_16438[(11)]);
var inst_16410 = (inst_16402[inst_16403] = inst_16406);
var inst_16411__$1 = (inst_16403 + (1));
var inst_16412 = (inst_16411__$1 < n);
var state_16438__$1 = (function (){var statearr_16452 = state_16438;
(statearr_16452[(11)] = inst_16411__$1);

(statearr_16452[(12)] = inst_16410);

return statearr_16452;
})();
if(cljs.core.truth_(inst_16412)){
var statearr_16453_16482 = state_16438__$1;
(statearr_16453_16482[(1)] = (8));

} else {
var statearr_16454_16483 = state_16438__$1;
(statearr_16454_16483[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (14))){
var inst_16431 = (state_16438[(2)]);
var inst_16432 = cljs.core.async.close_BANG_(out);
var state_16438__$1 = (function (){var statearr_16456 = state_16438;
(statearr_16456[(13)] = inst_16431);

return statearr_16456;
})();
var statearr_16457_16484 = state_16438__$1;
(statearr_16457_16484[(2)] = inst_16432);

(statearr_16457_16484[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (10))){
var inst_16422 = (state_16438[(2)]);
var state_16438__$1 = state_16438;
var statearr_16458_16485 = state_16438__$1;
(statearr_16458_16485[(2)] = inst_16422);

(statearr_16458_16485[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16439 === (8))){
var inst_16402 = (state_16438[(7)]);
var inst_16411 = (state_16438[(11)]);
var tmp16455 = inst_16402;
var inst_16402__$1 = tmp16455;
var inst_16403 = inst_16411;
var state_16438__$1 = (function (){var statearr_16459 = state_16438;
(statearr_16459[(7)] = inst_16402__$1);

(statearr_16459[(8)] = inst_16403);

return statearr_16459;
})();
var statearr_16460_16486 = state_16438__$1;
(statearr_16460_16486[(2)] = null);

(statearr_16460_16486[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__13822__auto___16472,out))
;
return ((function (switch__13708__auto__,c__13822__auto___16472,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_16464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16464[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_16464[(1)] = (1));

return statearr_16464;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_16438){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16438);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16465){if((e16465 instanceof Object)){
var ex__13712__auto__ = e16465;
var statearr_16466_16487 = state_16438;
(statearr_16466_16487[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16438);

return cljs.core.cst$kw$recur;
} else {
throw e16465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16488 = state_16438;
state_16438 = G__16488;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_16438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_16438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___16472,out))
})();
var state__13824__auto__ = (function (){var statearr_16467 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___16472);

return statearr_16467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___16472,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16489 = [];
var len__7276__auto___16563 = arguments.length;
var i__7277__auto___16564 = (0);
while(true){
if((i__7277__auto___16564 < len__7276__auto___16563)){
args16489.push((arguments[i__7277__auto___16564]));

var G__16565 = (i__7277__auto___16564 + (1));
i__7277__auto___16564 = G__16565;
continue;
} else {
}
break;
}

var G__16491 = args16489.length;
switch (G__16491) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16489.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13822__auto___16567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13822__auto___16567,out){
return (function (){
var f__13823__auto__ = (function (){var switch__13708__auto__ = ((function (c__13822__auto___16567,out){
return (function (state_16533){
var state_val_16534 = (state_16533[(1)]);
if((state_val_16534 === (7))){
var inst_16529 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16535_16568 = state_16533__$1;
(statearr_16535_16568[(2)] = inst_16529);

(statearr_16535_16568[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (1))){
var inst_16492 = [];
var inst_16493 = inst_16492;
var inst_16494 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16533__$1 = (function (){var statearr_16536 = state_16533;
(statearr_16536[(7)] = inst_16494);

(statearr_16536[(8)] = inst_16493);

return statearr_16536;
})();
var statearr_16537_16569 = state_16533__$1;
(statearr_16537_16569[(2)] = null);

(statearr_16537_16569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (4))){
var inst_16497 = (state_16533[(9)]);
var inst_16497__$1 = (state_16533[(2)]);
var inst_16498 = (inst_16497__$1 == null);
var inst_16499 = cljs.core.not(inst_16498);
var state_16533__$1 = (function (){var statearr_16538 = state_16533;
(statearr_16538[(9)] = inst_16497__$1);

return statearr_16538;
})();
if(inst_16499){
var statearr_16539_16570 = state_16533__$1;
(statearr_16539_16570[(1)] = (5));

} else {
var statearr_16540_16571 = state_16533__$1;
(statearr_16540_16571[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (15))){
var inst_16523 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16541_16572 = state_16533__$1;
(statearr_16541_16572[(2)] = inst_16523);

(statearr_16541_16572[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (13))){
var state_16533__$1 = state_16533;
var statearr_16542_16573 = state_16533__$1;
(statearr_16542_16573[(2)] = null);

(statearr_16542_16573[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (6))){
var inst_16493 = (state_16533[(8)]);
var inst_16518 = inst_16493.length;
var inst_16519 = (inst_16518 > (0));
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16519)){
var statearr_16543_16574 = state_16533__$1;
(statearr_16543_16574[(1)] = (12));

} else {
var statearr_16544_16575 = state_16533__$1;
(statearr_16544_16575[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (3))){
var inst_16531 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16533__$1,inst_16531);
} else {
if((state_val_16534 === (12))){
var inst_16493 = (state_16533[(8)]);
var inst_16521 = cljs.core.vec(inst_16493);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(15),out,inst_16521);
} else {
if((state_val_16534 === (2))){
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(4),ch);
} else {
if((state_val_16534 === (11))){
var inst_16497 = (state_16533[(9)]);
var inst_16501 = (state_16533[(10)]);
var inst_16511 = (state_16533[(2)]);
var inst_16512 = [];
var inst_16513 = inst_16512.push(inst_16497);
var inst_16493 = inst_16512;
var inst_16494 = inst_16501;
var state_16533__$1 = (function (){var statearr_16545 = state_16533;
(statearr_16545[(7)] = inst_16494);

(statearr_16545[(11)] = inst_16513);

(statearr_16545[(8)] = inst_16493);

(statearr_16545[(12)] = inst_16511);

return statearr_16545;
})();
var statearr_16546_16576 = state_16533__$1;
(statearr_16546_16576[(2)] = null);

(statearr_16546_16576[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (9))){
var inst_16493 = (state_16533[(8)]);
var inst_16509 = cljs.core.vec(inst_16493);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(11),out,inst_16509);
} else {
if((state_val_16534 === (5))){
var inst_16494 = (state_16533[(7)]);
var inst_16497 = (state_16533[(9)]);
var inst_16501 = (state_16533[(10)]);
var inst_16501__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16497) : f.call(null,inst_16497));
var inst_16502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16501__$1,inst_16494);
var inst_16503 = cljs.core.keyword_identical_QMARK_(inst_16494,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16504 = (inst_16502) || (inst_16503);
var state_16533__$1 = (function (){var statearr_16547 = state_16533;
(statearr_16547[(10)] = inst_16501__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16504)){
var statearr_16548_16577 = state_16533__$1;
(statearr_16548_16577[(1)] = (8));

} else {
var statearr_16549_16578 = state_16533__$1;
(statearr_16549_16578[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (14))){
var inst_16526 = (state_16533[(2)]);
var inst_16527 = cljs.core.async.close_BANG_(out);
var state_16533__$1 = (function (){var statearr_16551 = state_16533;
(statearr_16551[(13)] = inst_16526);

return statearr_16551;
})();
var statearr_16552_16579 = state_16533__$1;
(statearr_16552_16579[(2)] = inst_16527);

(statearr_16552_16579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (10))){
var inst_16516 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16553_16580 = state_16533__$1;
(statearr_16553_16580[(2)] = inst_16516);

(statearr_16553_16580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16534 === (8))){
var inst_16497 = (state_16533[(9)]);
var inst_16501 = (state_16533[(10)]);
var inst_16493 = (state_16533[(8)]);
var inst_16506 = inst_16493.push(inst_16497);
var tmp16550 = inst_16493;
var inst_16493__$1 = tmp16550;
var inst_16494 = inst_16501;
var state_16533__$1 = (function (){var statearr_16554 = state_16533;
(statearr_16554[(7)] = inst_16494);

(statearr_16554[(8)] = inst_16493__$1);

(statearr_16554[(14)] = inst_16506);

return statearr_16554;
})();
var statearr_16555_16581 = state_16533__$1;
(statearr_16555_16581[(2)] = null);

(statearr_16555_16581[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__13822__auto___16567,out))
;
return ((function (switch__13708__auto__,c__13822__auto___16567,out){
return (function() {
var cljs$core$async$state_machine__13709__auto__ = null;
var cljs$core$async$state_machine__13709__auto____0 = (function (){
var statearr_16559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16559[(0)] = cljs$core$async$state_machine__13709__auto__);

(statearr_16559[(1)] = (1));

return statearr_16559;
});
var cljs$core$async$state_machine__13709__auto____1 = (function (state_16533){
while(true){
var ret_value__13710__auto__ = (function (){try{while(true){
var result__13711__auto__ = switch__13708__auto__(state_16533);
if(cljs.core.keyword_identical_QMARK_(result__13711__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13711__auto__;
}
break;
}
}catch (e16560){if((e16560 instanceof Object)){
var ex__13712__auto__ = e16560;
var statearr_16561_16582 = state_16533;
(statearr_16561_16582[(5)] = ex__13712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16533);

return cljs.core.cst$kw$recur;
} else {
throw e16560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13710__auto__,cljs.core.cst$kw$recur)){
var G__16583 = state_16533;
state_16533 = G__16583;
continue;
} else {
return ret_value__13710__auto__;
}
break;
}
});
cljs$core$async$state_machine__13709__auto__ = function(state_16533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13709__auto____1.call(this,state_16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13709__auto____0;
cljs$core$async$state_machine__13709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13709__auto____1;
return cljs$core$async$state_machine__13709__auto__;
})()
;})(switch__13708__auto__,c__13822__auto___16567,out))
})();
var state__13824__auto__ = (function (){var statearr_16562 = (f__13823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13823__auto__.cljs$core$IFn$_invoke$arity$0() : f__13823__auto__.call(null));
(statearr_16562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13822__auto___16567);

return statearr_16562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13824__auto__);
});})(c__13822__auto___16567,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

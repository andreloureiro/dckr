// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12467 = arguments.length;
var i__7277__auto___12468 = (0);
while(true){
if((i__7277__auto___12468 < len__7276__auto___12467)){
args__7283__auto__.push((arguments[i__7277__auto___12468]));

var G__12469 = (i__7277__auto___12468 + (1));
i__7277__auto___12468 = G__12469;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12465){
var vec__12466 = p__12465;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12466,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq12463){
var G__12464 = cljs.core.first(seq12463);
var seq12463__$1 = cljs.core.next(seq12463);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__12464,seq12463__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12474 = arguments.length;
var i__7277__auto___12475 = (0);
while(true){
if((i__7277__auto___12475 < len__7276__auto___12474)){
args__7283__auto__.push((arguments[i__7277__auto___12475]));

var G__12476 = (i__7277__auto___12475 + (1));
i__7277__auto___12475 = G__12476;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12472){
var vec__12473 = p__12472;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq12470){
var G__12471 = cljs.core.first(seq12470);
var seq12470__$1 = cljs.core.next(seq12470);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__12471,seq12470__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12479 = arguments.length;
var i__7277__auto___12480 = (0);
while(true){
if((i__7277__auto___12480 < len__7276__auto___12479)){
args__7283__auto__.push((arguments[i__7277__auto___12480]));

var G__12481 = (i__7277__auto___12480 + (1));
i__7277__auto___12480 = G__12481;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq12477){
var G__12478 = cljs.core.first(seq12477);
var seq12477__$1 = cljs.core.next(seq12477);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12478,seq12477__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__12484 = reagent.session.state;
var G__12485 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12484,G__12485) : cljs.core.reset_BANG_.call(null,G__12484,G__12485));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12486_SHARP_){
return cljs.core.assoc_in(p1__12486_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12491 = arguments.length;
var i__7277__auto___12492 = (0);
while(true){
if((i__7277__auto___12492 < len__7276__auto___12491)){
args__7283__auto__.push((arguments[i__7277__auto___12492]));

var G__12493 = (i__7277__auto___12492 + (1));
i__7277__auto___12492 = G__12493;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12489){
var vec__12490 = p__12489;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq12487){
var G__12488 = cljs.core.first(seq12487);
var seq12487__$1 = cljs.core.next(seq12487);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12488,seq12487__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12498 = arguments.length;
var i__7277__auto___12499 = (0);
while(true){
if((i__7277__auto___12499 < len__7276__auto___12498)){
args__7283__auto__.push((arguments[i__7277__auto___12499]));

var G__12500 = (i__7277__auto___12499 + (1));
i__7277__auto___12499 = G__12500;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12496){
var vec__12497 = p__12496;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12497,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq12494){
var G__12495 = cljs.core.first(seq12494);
var seq12494__$1 = cljs.core.next(seq12494);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12495,seq12494__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12505 = arguments.length;
var i__7277__auto___12506 = (0);
while(true){
if((i__7277__auto___12506 < len__7276__auto___12505)){
args__7283__auto__.push((arguments[i__7277__auto___12506]));

var G__12507 = (i__7277__auto___12506 + (1));
i__7277__auto___12506 = G__12507;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12501_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__12501_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq12502){
var G__12503 = cljs.core.first(seq12502);
var seq12502__$1 = cljs.core.next(seq12502);
var G__12504 = cljs.core.first(seq12502__$1);
var seq12502__$2 = cljs.core.next(seq12502__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12503,G__12504,seq12502__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12512 = arguments.length;
var i__7277__auto___12513 = (0);
while(true){
if((i__7277__auto___12513 < len__7276__auto___12512)){
args__7283__auto__.push((arguments[i__7277__auto___12513]));

var G__12514 = (i__7277__auto___12513 + (1));
i__7277__auto___12513 = G__12514;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12508_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__12508_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq12509){
var G__12510 = cljs.core.first(seq12509);
var seq12509__$1 = cljs.core.next(seq12509);
var G__12511 = cljs.core.first(seq12509__$1);
var seq12509__$2 = cljs.core.next(seq12509__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12510,G__12511,seq12509__$2);
});

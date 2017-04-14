// Type definitions for redux-batched-subscribe 0.1.6
// Project: https://github.com/tappleby/redux-batched-subscribe
// Definitions by: Simone Fonda <fonda@spaziodati.eu>
// .. for some reason cant augment an untyped module when using noImplicitAny,


declare module 'redux-batched-subscribe' {
    export function batchedSubscribe(next: Function): Function;
}

"use strict";

let Node = require("./node");

class LL {
  constructor(value, next = null) {
    (this.value = value), this.next;
  }
}

function llMerge(ll1, ll2) {
  let ll3 = new LL();
  let current = ll3;

  while (current1 && current2) {
    if (ll1 < ll2) {
      current.next = ll1;
      ll1 = ll1.next;
    } else {
      current.next = ll2;
      ll2 = ll2.next;
    }
    current = current.next;
  }

  if (ll1) {
    current.next = ll1;
  } else {
    currentnext = ll2;
  }

  return current.next;
}

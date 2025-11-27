"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function divide(start, end) {
    let mid;
    if (start < end) {
        mid = Math.trunc(start + end) / 2;
        divide(start, mid);
        divide(mid + 1, end);
        mergeSort(start, mid, end);
    }
}
function mergeSort(start, mid, end) {
}
//# sourceMappingURL=mergesort.js.map
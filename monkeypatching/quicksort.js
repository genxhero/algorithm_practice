Array.prototype.quickSort =  (proc) => {
    if (this.length <= 1) return this;
  
    if (typeof proc !== "function") {
      proc = (x, y) => {
        if (x === y) {
          return 0;
        } else if (x < y) {
          return -1;
        } else {
          return 1;
        }
      };
    }
  
    const pivot = this[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < this.length; i++) {
      if (proc(this[i], pivot) === -1) {
        left.push(this[i]);
      } else {
        right.push(this[i]);
      }
    }
  
    return left.quickSort(proc).
      concat([pivot]).
      concat(right.quickSort(proc));
  };
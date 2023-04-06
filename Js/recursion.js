function pow(x, n) {
    debugger;
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

  pow(2,3);
/* exported defaults */

/*
-
*/

function defaults(target, source) {
  for (var x in source) {
    for (var y in target) {
      if (x === y) {
        source[x] = target[x];
      } else {
        target[x] = source[x];
      }
    }
  }
}

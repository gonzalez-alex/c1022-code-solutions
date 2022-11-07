/* exported defaults */

/*
- loop through object from source parameter
    - if key is not in target parameter
        - value from object of the source parameter at key is assigned to object from target parameter at key
*/

function defaults(target, source) {
  for (var x in source) {
    if (!(x in target)) {
      target[x] = source[x];
    }
  }
}

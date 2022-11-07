/* exported defaults */

/*
- loop through object from source parameter
    - if key is not in target parameter
        - source object at key parameter is assigned to target object at key parameter
*/

function defaults(target, source) {
  for (var x in source) {
    if (!(x in target)) {
      target[x] = source[x];
    }
  }
}

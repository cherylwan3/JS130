/**
 * p:
 * - set contains unique elements
 * D:
 * 
 * 
 * A:
 * class customSet
 * 
 * constructor(set = [])
 *  - set 'this.set' to array
 
 * isEmpty() => boolean,true if is set empty
 *  - if length of 'this.set' is 0, return true
 * 
 * contains(elem) => boolean, true if set contains elem
 *  - iterate over 'this.set', if it includes 'elem', return true 
 * 
 * isSubset(superSet) => boolean, true if set is subset of superSet 
 *                      (all of its elements are contained in the other set)
 *  - iterate over every subset, true superSet contains subset elem => return true if all true
 * 
 * isDisjoint(otherSet) => boolean, true if sets share no elements, false if share 1
 *  - iterate over every subset, return true if there otherSet doesn't contain elem in subset
 * 
 * isSame(otherSet) => boolean, true if all elem are same
 *  - sort set and otherset
 *  - return true if set & otherset have same length && 
 *  - iterate over every subset, return true if there otherSet elem equals subset elem
 * 
 * add(elem) => adds elem to set
 *  (adding existing elem doesn't work, only adds unique elem returns existing set if doesn't work)
 * - if set includes, elem, return set
 *  - else push elem onto set
 * 
 * intersection(otherSet) => returns set of shared elem, returns [] if none
 * - declare returnSet to []
 * - iterate over every elem in set, if otherset contains elem, add this elem to returnSet
 * - return returnSet
 * 
 * difference(otherSet) => set of all elements that are only in the first set returns [] if none
 * - declare returnSet to []
 * - iterate over every elem in set, if otherset doesn't contain elem, add this elem to returnSet
 * - return returnSet
 * 
 * union(otherSet) => returns set of all unique elem in both sets
 * - declare returnSet to []
 * - iterate over every elem in set, if otherset doesn't contain elem, add this elem to returnSet
 * - iterate over every elem in otherset, if set doesn't contain elem, add this elem to returnSet
 * - return  returnSet 
*/

class CustomSet {
  constructor(set = []) {
    this.elements = set;
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(elem) {
    return this.elements.includes(elem);
  }

  isSubset(superSet) {
    return this.elements.every(elem => superSet.contains(elem));
  }

  isDisjoint(otherSet) {
    return this.elements.every(elem => !otherSet.contains(elem));
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) && 
            this.elements.length === otherSet.elements.length;
  }

  add(elem) {
    if (!this.contains(elem)) this.elements.push(elem);
    return this;
  }

  intersection(otherSet) {
    let arr = this.elements.filter(elem => otherSet.contains(elem));
    return new CustomSet(arr);
  }

  difference(otherSet) {
    let arr = this.elements.filter(elem => !otherSet.contains(elem));
    return new CustomSet(arr);
  }

  union(otherSet) {
    let unionSet = new CustomSet(this.elements);
    let uniqueOtherSet = otherSet.difference(this);
    uniqueOtherSet.elements.forEach(elem => unionSet.add(elem));

    return unionSet;
  }
}

module.exports = CustomSet;
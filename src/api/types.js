export class Blueprint {

  constructor (name, label) {
    this.name = name
    this.label = label
  }

  isAddable () {
    return Promise.resolve(true)
  }

  createElement () {
    return Promise.resolve(new Element({}))
  }

}

export class Element {

  constructor (config, parent = null) {
    this.config = config
    this.parent = parent
  }

  /**
   * Check whether this element is allowed inside a specific parent element.
   * @param {Element} parent
   *   The would be parent element.
   * @param {int} pos
   *   Position inside the parent element.
   * @return {Promise}
   *   Resolve to true if allowed otherwise reject.
   */
  isAllowedInside (parent, pos) {
    return Promise.resolve(true)
  }

  /**
   * Check whether we allow a specfic element as child element.
   * @param {Element} child
   *   The would be child element.
   * @param {int} pos
   *   Position inside the parent element.
   * @return {Promise}
   *   Resolve to true if allowed otherwise reject.
   */
  allowsChild (child, pos) {
    return Promise.resolve(true)
  }

  isRemoveable (tree) {
    return Promise.resolve(true)
  }

}

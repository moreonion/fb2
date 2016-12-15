import {Blueprint, Element} from './api/types.js'

export default class {
  test () {
    return 'hello from the backend! :-)'
  }

  /**
   * Return a list of blueprints.
   *
   * @return {Promise}
   *   A promise that returns an array of palette groups.
   */
  blueprints () {
    let groups = [
      {
        name: 'personal',
        label: 'Personal data',
        blueprints: [
          new Blueprint('email', 'Email address'),
          new Blueprint('first_name', 'First name')
        ]
      },
      {
        name: 'generic',
        label: 'Generic fields',
        blueprints: [
          new Blueprint('textfield', 'Text field'),
          new Blueprint('select', 'Select box')
        ]
      }
    ]
    return Promise.resolve(groups)
  }

  tree () {
    let root = new Element('ROOT', {})
    for (var i = 0; i < 3; i++) {
      root.children.push(new Element({name: 'Element' + i}, root))
    }
    // Level 2
    let p0 = root.children[0]
    for (var j = 0; j < 3; j++) {
      p0.children.push(new Element({name: 'Element 0-' + j}, p0))
    }
    // Level 3
    let p01 = root.children[0].children[1]
    for (var k = 0; k < 3; k++) {
      p01.children.push(new Element({name: 'Element 0-1-' + k}, p01))
    }
    // add an apples
    root.children.push(new Element({name: 'apple'}, root))
    // some test settings
    root.children[2].config.hatesApples = true
    root.children[2].config.name += ' (hates apples)'
    return Promise.resolve(root)
  }

  elementIsMovable () {
  }

  elementIsContainer () {
  }

}

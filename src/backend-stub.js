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
    return Promise.resolve(new Element({}))
  }

  elementIsMovable () {
  }

  elementIsContainer () {
  }

}

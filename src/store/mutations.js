export function generateDummyContent (state) {
  // Level 1
  for (var i = 0; i < 3; i++) {
    state.root.children.push({
      children: [],
      parent: state.root,
      config: { name: 'Element ' + i }
    })
  }
  // Level 2
  for (var j = 0; j < 3; j++) {
    state.root.children[0].children.push({
      children: [],
      parent: state.root.children[0],
      config: { name: 'Element 0-' + j }
    })
  }
  // Level 3
  for (var k = 0; k < 3; k++) {
    state.root.children[0].children[1].children.push({
      children: [],
      parent: state.root.children[0].children[1],
      config: { name: 'Element 0-1-' + k }
    })
  }
  // add an apples
  state.root.children.push({
    children: [],
    parent: state.root,
    config: { name: 'apple' }
  })
  // some test settings
  state.root.children[2].config.hatesApples = true
  state.root.children[2].config.name += ' (hates apples)'
}

export function generateDummyBlueprints (state) {
  // Group 0
  state.blueprints.push({
    name: 'fruits',
    label: 'Fruits',
    blueprints: [
      {
        name: 'banana',
        label: 'Banana blueprint',
        config: { name: 'Banana' }
      },
      {
        name: 'apple',
        label: 'Apple blueprint',
        config: { name: 'Apple' }
      },
      {
        name: 'kiwi',
        label: 'Kiwi blueprint',
        config: { name: 'Kiwi' }
      }
    ]
  })
  // Group 1
  state.blueprints.push({
    name: 'vegetables',
    label: 'Vegetables',
    blueprints: [
      {
        name: 'potato',
        label: 'Potato blueprint',
        config: { name: 'Potato' }
      },
      {
        name: 'carrot',
        label: 'Carrot blueprint',
        config: { name: 'Carrot' }
      }
    ]
  })
}

export function addElement (state, { element, parent, pos }) {
  parent.children.splice(pos, 0, element)
}

export function removeElement (state, { element }) {
  for (var i = 0, j = element.parent.children.length; i < j; i++) {
    if (element.parent.children[i] === element) {
      console.log('remove element ' + i)
      element.parent.children.splice(i, 1)
    }
  }
}

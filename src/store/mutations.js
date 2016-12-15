export function updateTree (state, tree) {
  state.root = tree
}

export function updateBlueprints (state, blueprints) {
  state.blueprints = blueprints
}

export function addElement (state, { element, parent, pos }) {
  element.parent = parent
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

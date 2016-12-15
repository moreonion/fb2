export function mayAddElement ({ state }, { element, parent, pos, backend }) {
  // Ask the backend whether a child accepts a specific parent and the
  // parent-to-be likes the new child.
  return Promise.all([
    element.isAllowedInside(parent, pos),
    parent.allowsChild(element, pos)
  ])
}

export function mayRemoveElement ({ state }, { element, parent, pos, backend }) {
  return new Promise((resolve, reject) => {
    // Don’t remove the root.
    if (element.parent === null) {
      reject()
    }

    // Ask the element whether it can be removed.
    element.isRemovable(state)
      .then(() => resolve(true), () => reject())
  })
}

export function cloneElement ({ commit, dispatch }, { element, parent, pos, backend }) {
  return dispatch('mayAddElement', { element, parent, pos, backend }).then(() => {
    commit('addElement', { element, parent, pos })
  }, () => {
    window.alert('i’ve told you i don’t like apples!')
  })
}

export function deleteElement ({ commit, dispatch }, { element, backend }) {
  return dispatch('mayRemoveElement', { element, backend }).then(() => {
    commit('removeElement', { element })
  }, () => {
    window.alert(element.config.name + ' is not removable!')
  })
}

export function getTree ({commit}, {backend}) {
  return backend.tree().then((tree) => {
    commit('updateTree', tree)
  })
}

export function getBlueprints ({commit}, {backend}) {
  return backend.blueprints().then((blueprints) => {
    commit('updateBlueprints', blueprints)
  })
}

export function newElementFromBlueprint ({commit, dispatch}, {blueprint, parent, pos, backend}) {
  var element
  return blueprint.createElement().then((newElement) => {
    element = newElement
    return Promise.all([
      element.isAllowedInside({parent, pos}),
      parent.allowsChild({element, pos})
    ]).then(() => {
      commit('addElement', {element, parent, pos})
    })
  })
}

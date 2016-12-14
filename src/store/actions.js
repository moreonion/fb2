export function mayAddElement ({ state }, { element, parent, pos }) {
  return new Promise((resolve, reject) => {
    // ask the backend whether a child accepts a specific parent and the
    // parent-to-be likes the new child
    setTimeout(() => {
      if (element.config.name === 'apple' && parent.config.hatesApples) {
        console.log('the new parent hates apples')
        reject()
      } else {
        console.log(element.config.name + ' may be added to ' + parent.config.name)
        resolve(true)
      }
    }, 500)
  })
}

export function mayRemoveElement ({ state }, { element, parent, pos }) {
  return new Promise((resolve, reject) => {
    // don’t remove the root
    if (element.parent === null) {
      console.log('nulla')
      reject()
    }
    // ask the element and it’s parent whether it may be removed
    setTimeout(() => {
      // can’t delete apples
      if (element.config.name === 'apple') {
        console.log(element.config.name)
        reject()
      } else {
        resolve(true)
      }
    }, 500)
  })
}

export function cloneElement ({ commit, dispatch }, { element, parent, pos }) {
  return dispatch('mayAddElement', { element, parent, pos }).then(() => {
    commit('addElement', { element, parent, pos })
  }, () => {
    window.alert('i’ve told you i don’t like apples!')
  })
}

export function deleteElement ({ commit, dispatch }, { element }) {
  return dispatch('mayRemoveElement', { element }).then(() => {
    commit('removeElement', { element })
  }, () => {
    window.alert(element.config.name + ' is not removable!')
  })
}

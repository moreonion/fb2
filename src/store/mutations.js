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
}

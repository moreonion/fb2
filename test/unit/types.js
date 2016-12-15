import {Blueprint} from '../../src/api/types.js'

describe('Blueprint', () => {
  it('should have a name and label property', () => {
    const bp = new Blueprint('test', 'Test')
    expect(bp.name).toBe('test')
    expect(bp.label).toBe('Test')
  })
})

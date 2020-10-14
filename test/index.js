const chai = require('chai'), 
      expect = chai.expect,
      sinonChai = require('sinon-chai'),
      sinon = require('sinon')

const log = require('../index')

const MESSAGE = '¡Hola Mundo!'

chai.use(sinonChai)

describe('Test functions', () => {

  beforeEach(() => sinon.spy(console, 'log'))

  afterEach(() => console.log.restore())

  it('Success', () => {
    log.success(MESSAGE)
    expect(console.log).to.be.called
  })
  
  it('Error', () => {
    log.error(MESSAGE)
    expect(console.log).to.be.called
  })
  
  it('Info', () => {
    log.info(MESSAGE)
    expect(console.log).to.be.called
  })
  
  it('Warning', () => {
    log.warning(MESSAGE)
    expect(console.log).to.be.called
  })

})

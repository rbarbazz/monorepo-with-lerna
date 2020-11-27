import moduleA from '@rbarbazz/module-a'
import moduleB from '@rbarbazz/module-b'

const moduleC = () => {
  moduleA()
  moduleB()
}

moduleC()
export default moduleC

//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const {MIKE,SARAH} = require('./4-names')
const sayHi = require('./5-utils')
require('./7-mind-grenade')

sayHi('Randy')
sayHi(MIKE)
sayHi(SARAH)
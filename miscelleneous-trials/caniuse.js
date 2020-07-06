const caniuse = require('caniuse-api')

/**
console.log( caniuse.getSupport('border-radius'));
caniuse.isSupported('border-radius', 'ie 8, ie 9')
caniuse.setBrowserScope('> 5%, last 1 version')
caniuse.getSupport('border-radius')
**/


let feature = "border-radius";
console.log(`${feature} support \n\n`, caniuse.getSupport(`${feature}`), "\n\n\n" );
console.log(`${feature} is it supported -> `, caniuse.isSupported(`${feature}`, 'ie 8, ie 9'));

//console.log(`${feature} is it supported \n\n`, caniuse.isSupported(`${feature}`, "'chrome 80'") );
console.log('\n\n\n');
feature = "sticky";
console.log(`${feature} support \n\n`, caniuse.getSupport(`${feature}`), "\n\n\n" );
//onsole.log(`${feature} is it supported -> `, caniuse.isSupported(`${feature}`, 'opera 10'));

Define Property e Define Proporties

Em suma, ao invés de dar freeze que congela todo o objeto, vc congela atributos específicos e ainda por cima consegue mexer em mais configurações desse atributo.

Object.defineProperty (this, 'nome do atributo', {
    enumerable: ,
    value: ,
    writable: ,
    configurable: 
})

Object.defineProperties(this, {
    'nome do atributo1': {
        enumerable: ,
        value: ,
        writable: ,
        configurable:
    }
    'nome do atributo2': {
        enumerable: ,
        value: ,
        writable: ,
        configurable:
    }
})

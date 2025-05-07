
// Escribe una función llamada esPar que reciba un número y
// devuelva true si el número es par, o false si es impar.

describe("Función esPar", function() {

it('Deberia existir una función esPar', () => {
    expect(typeof esPar).toEqual('function')
    })

it('Devuelve false si la entrada no es un número', () => {
    expect(esPar("texto")).toBe(false);
    expect(esPar(null)).toBe(false);
    expect(esPar(undefined)).toBe(false);
    });


it('sale true si es par', () => {
    expect(esPar(2)).toBe(true);
    expect(esPar(0)).toBe(true);
    expect(esPar(-4)).toBe(true);
    })
    
it('sale false si es impar', () => {
    expect(esPar(1)).toBe(false);
    expect(esPar(-3)).toBe(false);
    expect(esPar(7)).toBe(false);
        })


    });



describe("Función factorial", function() {

    it("Debería existir una función llamada factorial", function() {

      expect(typeof factorial).toBe("function");

    });
  
    it("Debería devolver 1 si el número es 0", function() {

      expect(factorial(0)).toBe(1);

    });
  
    it("Debería devolver 1 si el número es 1", function() {

      expect(factorial(1)).toBe(1);

    });
  
    it("Debería devolver el factorial de un número mayor que 1", function() {

      expect(factorial(3)).toBe(6); 
      expect(factorial(5)).toBe(120); 
      
    });
  
    it("Debería lanzar error si el número es negativo", function() {
      expect(() => factorial(-1)).toThrowError("El número debe ser no negativo");
    });
    
  
  });
  


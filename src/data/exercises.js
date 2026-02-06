// Importar imágenes de logos
import pythonLogo from '../assets/images/python-logo.webp';
import jsLogo from '../assets/images/js-logo.webp';
import javaLogo from '../assets/images/java-logo.webp';
import csharpLogo from '../assets/images/csharp-logo.webp';
import cppLogo from '../assets/images/cplusplus-logo.webp';
import reactLogo from '../assets/images/react-logo.webp';
import htmlLogo from '../assets/images/html-logo.webp';
import cssLogo from '../assets/images/css-logo.webp';

export const exercises = {
  python: {
    name: "Python",
    icon: pythonLogo,
    color: "#3776ab",
    exercises: [
      {
        id: 1,
        title: "FizzBuzz",
        difficulty: "Fácil",
        description: "Escribe un programa que imprima los números del 1 al 100. Para múltiplos de 3, imprime 'Fizz'. Para múltiplos de 5, imprime 'Buzz'. Para múltiplos de ambos, imprime 'FizzBuzz'.",
        starterCode: `# Escribe tu solución aquí
def fizzbuzz():
    for i in range(1, 101):
        # Tu código aquí
        pass

fizzbuzz()`,
        solution: `def fizzbuzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz()`,
        hints: ["Usa el operador módulo (%)", "El orden de las condiciones importa"]
      },
      {
        id: 2,
        title: "Palíndromo",
        difficulty: "Fácil",
        description: "Escribe una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).",
        starterCode: `def es_palindromo(texto):
    # Tu código aquí
    pass

# Pruebas
print(es_palindromo("radar"))  # True
print(es_palindromo("python")) # False
print(es_palindromo("anilina")) # True`,
        solution: `def es_palindromo(texto):
    texto = texto.lower().replace(" ", "")
    return texto == texto[::-1]

# Pruebas
print(es_palindromo("radar"))  # True
print(es_palindromo("python")) # False
print(es_palindromo("anilina")) # True`,
        hints: ["Puedes invertir un string con [::-1]", "Considera convertir a minúsculas"]
      },
      {
        id: 3,
        title: "Fibonacci",
        difficulty: "Medio",
        description: "Escribe una función que devuelva los primeros n números de la secuencia de Fibonacci.",
        starterCode: `def fibonacci(n):
    # Tu código aquí
    pass

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
        solution: `def fibonacci(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
        hints: ["Empieza con [0, 1]", "Cada número es la suma de los dos anteriores"]
      },
      {
        id: 4,
        title: "Dos Sumas",
        difficulty: "Medio",
        description: "Dado un array de enteros y un objetivo, devuelve los índices de los dos números que suman el objetivo.",
        starterCode: `def two_sum(nums, target):
    # Tu código aquí
    pass

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]`,
        solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]`,
        hints: ["Usa un diccionario para guardar valores vistos", "El complemento es target - num actual"]
      },
      {
        id: 5,
        title: "Anagramas",
        difficulty: "Medio",
        description: "Escribe una función que determine si dos cadenas son anagramas (contienen las mismas letras).",
        starterCode: `def son_anagramas(str1, str2):
    # Tu código aquí
    pass

print(son_anagramas("listen", "silent"))  # True
print(son_anagramas("hello", "world"))    # False`,
        solution: `def son_anagramas(str1, str2):
    str1 = str1.lower().replace(" ", "")
    str2 = str2.lower().replace(" ", "")
    return sorted(str1) == sorted(str2)

print(son_anagramas("listen", "silent"))  # True
print(son_anagramas("hello", "world"))    # False`,
        hints: ["sorted() ordena los caracteres", "Compara las versiones ordenadas"]
      }
    ]
  },
  javascript: {
    name: "JavaScript",
    icon: jsLogo,
    color: "#f7df1e",
    exercises: [
      {
        id: 1,
        title: "Aplanar Array",
        difficulty: "Medio",
        description: "Escribe una función que aplane un array anidado de cualquier profundidad.",
        starterCode: `function flatten(arr) {
  // Tu código aquí
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]`,
        solution: `function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

// Alternativa con flat()
// const flatten = arr => arr.flat(Infinity);

console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]`,
        hints: ["Usa recursión", "reduce() es muy útil aquí"]
      },
      {
        id: 2,
        title: "Debounce",
        difficulty: "Medio",
        description: "Implementa una función debounce que limite la frecuencia de ejecución de una función.",
        starterCode: `function debounce(func, delay) {
  // Tu código aquí
}

// Ejemplo de uso
const log = debounce(() => console.log('Ejecutado!'), 1000);
log(); log(); log(); // Solo se ejecuta una vez después de 1 segundo`,
        solution: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, timeoutId);
  };
}

// Ejemplo de uso
const log = debounce(() => console.log('Ejecutado!'), 1000);
log(); log(); log(); // Solo se ejecuta una vez después de 1 segundo`,
        hints: ["Usa setTimeout y clearTimeout", "Retorna una nueva función"]
      },
      {
        id: 3,
        title: "Promesas en Serie",
        difficulty: "Difícil",
        description: "Ejecuta un array de funciones que retornan promesas en serie (una después de otra).",
        starterCode: `function runInSeries(promiseFunctions) {
  // Tu código aquí
}

const funcs = [
  () => new Promise(r => setTimeout(() => { console.log(1); r(1); }, 100)),
  () => new Promise(r => setTimeout(() => { console.log(2); r(2); }, 100)),
  () => new Promise(r => setTimeout(() => { console.log(3); r(3); }, 100))
];

runInSeries(funcs).then(results => console.log('Resultados:', results));`,
        solution: `async function runInSeries(promiseFunctions) {
  const results = [];
  for (const fn of promiseFunctions) {
    const result = await fn();
    results.push(result);
  }
  return results;
}

// Alternativa con reduce
function runInSeriesReduce(promiseFunctions) {
  return promiseFunctions.reduce(
    (promise, fn) => promise.then(results => fn().then(r => [...results, r])),
    Promise.resolve([])
  );
}

const funcs = [
  () => new Promise(r => setTimeout(() => { console.log(1); r(1); }, 100)),
  () => new Promise(r => setTimeout(() => { console.log(2); r(2); }, 100)),
  () => new Promise(r => setTimeout(() => { console.log(3); r(3); }, 100))
];

runInSeries(funcs).then(results => console.log('Resultados:', results));`,
        hints: ["async/await simplifica esto", "Itera con for...of"]
      },
      {
        id: 4,
        title: "Deep Clone",
        difficulty: "Medio",
        description: "Implementa una función que haga una copia profunda de un objeto.",
        starterCode: `function deepClone(obj) {
  // Tu código aquí
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copia = deepClone(original);
copia.b.c = 999;
console.log(original.b.c); // Debería ser 2
console.log(copia.b.c);    // Debería ser 999`,
        solution: `function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copia = deepClone(original);
copia.b.c = 999;
console.log(original.b.c); // 2
console.log(copia.b.c);    // 999`,
        hints: ["Usa recursión", "Maneja arrays y objetos por separado"]
      },
      {
        id: 5,
        title: "Memoización",
        difficulty: "Medio",
        description: "Implementa una función memoize que cachee los resultados de llamadas anteriores.",
        starterCode: `function memoize(fn) {
  // Tu código aquí
}

const factorial = memoize(n => {
  console.log('Calculando factorial de', n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calcula
console.log(factorial(5)); // Usa cache`,
        solution: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize(n => {
  console.log('Calculando factorial de', n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calcula
console.log(factorial(5)); // Usa cache`,
        hints: ["Usa un Map o objeto como cache", "JSON.stringify convierte args a string"]
      }
    ]
  },
  java: {
    name: "Java",
    icon: javaLogo,
    color: "#007396",
    exercises: [
      {
        id: 1,
        title: "Invertir String",
        difficulty: "Fácil",
        description: "Escribe un método que invierta una cadena sin usar StringBuilder.reverse().",
        starterCode: `public class Main {
    public static String reverse(String str) {
        // Tu código aquí
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(reverse("Hello")); // olleH
        System.out.println(reverse("Java"));  // avaJ
    }
}`,
        solution: `public class Main {
    public static String reverse(String str) {
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        
        return new String(chars);
    }
    
    public static void main(String[] args) {
        System.out.println(reverse("Hello")); // olleH
        System.out.println(reverse("Java"));  // avaJ
    }
}`,
        hints: ["Usa dos punteros", "Intercambia caracteres desde los extremos"]
      },
      {
        id: 2,
        title: "Singleton Pattern",
        difficulty: "Medio",
        description: "Implementa el patrón Singleton de forma thread-safe.",
        starterCode: `public class Singleton {
    // Tu código aquí
    
    public void showMessage() {
        System.out.println("Singleton instance!");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(obj1 == obj2); // true
    }
}`,
        solution: `public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    
    public void showMessage() {
        System.out.println("Singleton instance!");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(obj1 == obj2); // true
    }
}`,
        hints: ["Usa double-checked locking", "Marca instance como volatile"]
      },
      {
        id: 3,
        title: "Encontrar Duplicados",
        difficulty: "Fácil",
        description: "Encuentra todos los elementos duplicados en un array.",
        starterCode: `import java.util.*;

public class Main {
    public static List<Integer> findDuplicates(int[] nums) {
        // Tu código aquí
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 2, 1, 4, 5, 4};
        System.out.println(findDuplicates(nums)); // [1, 2, 4]
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static List<Integer> findDuplicates(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new LinkedHashSet<>();
        
        for (int num : nums) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        
        return new ArrayList<>(duplicates);
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 2, 1, 4, 5, 4};
        System.out.println(findDuplicates(nums)); // [1, 2, 4]
    }
}`,
        hints: ["HashSet.add() retorna false si el elemento ya existe", "Usa dos Sets"]
      },
      {
        id: 4,
        title: "Merge Sort",
        difficulty: "Medio",
        description: "Implementa el algoritmo Merge Sort.",
        starterCode: `import java.util.Arrays;

public class Main {
    public static void mergeSort(int[] arr) {
        // Tu código aquí
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));
        // [11, 12, 22, 25, 34, 64, 90]
    }
}`,
        solution: `import java.util.Arrays;

public class Main {
    public static void mergeSort(int[] arr) {
        if (arr.length < 2) return;
        
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);
        
        mergeSort(left);
        mergeSort(right);
        merge(arr, left, right);
    }
    
    private static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
        hints: ["Divide y vencerás", "Crea un método auxiliar merge()"]
      },
      {
        id: 5,
        title: "Validar Paréntesis",
        difficulty: "Fácil",
        description: "Verifica si una cadena con paréntesis, corchetes y llaves está balanceada.",
        starterCode: `import java.util.*;

public class Main {
    public static boolean isValid(String s) {
        // Tu código aquí
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));     // true
        System.out.println(isValid("()[]{}"));  // true
        System.out.println(isValid("(]"));      // false
        System.out.println(isValid("([)]"));    // false
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = Map.of(
            ')', '(',
            ']', '[',
            '}', '{'
        );
        
        for (char c : s.toCharArray()) {
            if (pairs.containsValue(c)) {
                stack.push(c);
            } else if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));     // true
        System.out.println(isValid("()[]{}"));  // true
        System.out.println(isValid("(]"));      // false
        System.out.println(isValid("([)]"));    // false
    }
}`,
        hints: ["Usa una Stack", "Mapea cada cierre con su apertura"]
      }
    ]
  },
  csharp: {
    name: "C#",
    icon: csharpLogo,
    color: "#68217a",
    exercises: [
      {
        id: 1,
        title: "LINQ Básico",
        difficulty: "Fácil",
        description: "Usa LINQ para filtrar y transformar una lista de números.",
        starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> numbers = new List<int> {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        // 1. Obtén los números pares
        // 2. Multiplícalos por 2
        // 3. Ordénalos de mayor a menor
        
        // Tu código aquí
        
        Console.WriteLine(string.Join(", ", result));
        // Esperado: 20, 16, 12, 8, 4
    }
}`,
        solution: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> numbers = new List<int> {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        var result = numbers
            .Where(n => n % 2 == 0)
            .Select(n => n * 2)
            .OrderByDescending(n => n);
        
        Console.WriteLine(string.Join(", ", result));
        // Output: 20, 16, 12, 8, 4
    }
}`,
        hints: ["Where() filtra elementos", "Select() transforma elementos", "OrderByDescending() ordena"]
      },
      {
        id: 2,
        title: "Async/Await",
        difficulty: "Medio",
        description: "Implementa un método asíncrono que simule descargas paralelas.",
        starterCode: `using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class Program {
    static async Task<string> DownloadAsync(string url) {
        await Task.Delay(1000); // Simula descarga
        return $"Contenido de {url}";
    }
    
    static async Task Main() {
        string[] urls = { "url1.com", "url2.com", "url3.com" };
        
        // Descarga todas las URLs en paralelo
        // Tu código aquí
        
        // Imprime todos los resultados
    }
}`,
        solution: `using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class Program {
    static async Task<string> DownloadAsync(string url) {
        await Task.Delay(1000); // Simula descarga
        return $"Contenido de {url}";
    }
    
    static async Task Main() {
        string[] urls = { "url1.com", "url2.com", "url3.com" };
        
        // Descarga todas las URLs en paralelo
        var tasks = urls.Select(url => DownloadAsync(url));
        string[] results = await Task.WhenAll(tasks);
        
        // Imprime todos los resultados
        foreach (var result in results) {
            Console.WriteLine(result);
        }
    }
}`,
        hints: ["Task.WhenAll ejecuta tareas en paralelo", "Select puede crear tareas"]
      },
      {
        id: 3,
        title: "Extensiones de Método",
        difficulty: "Medio",
        description: "Crea métodos de extensión útiles para strings.",
        starterCode: `using System;

public static class StringExtensions {
    // 1. Método que cuente las palabras
    // 2. Método que convierta a Title Case
    // Tu código aquí
}

class Program {
    static void Main() {
        string text = "hello world from csharp";
        
        Console.WriteLine(text.WordCount());    // 4
        Console.WriteLine(text.ToTitleCase());  // Hello World From Csharp
    }
}`,
        solution: `using System;
using System.Globalization;

public static class StringExtensions {
    public static int WordCount(this string str) {
        if (string.IsNullOrWhiteSpace(str))
            return 0;
        return str.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Length;
    }
    
    public static string ToTitleCase(this string str) {
        if (string.IsNullOrEmpty(str))
            return str;
        return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(str.ToLower());
    }
}

class Program {
    static void Main() {
        string text = "hello world from csharp";
        
        Console.WriteLine(text.WordCount());    // 4
        Console.WriteLine(text.ToTitleCase());  // Hello World From Csharp
    }
}`,
        hints: ["Usa 'this' como primer parámetro", "La clase debe ser static"]
      },
      {
        id: 4,
        title: "Diccionario Inverso",
        difficulty: "Fácil",
        description: "Invierte un diccionario (las claves se vuelven valores y viceversa).",
        starterCode: `using System;
using System.Collections.Generic;

class Program {
    static Dictionary<V, K> InvertDictionary<K, V>(Dictionary<K, V> dict) {
        // Tu código aquí
        return null;
    }
    
    static void Main() {
        var original = new Dictionary<string, int> {
            {"uno", 1}, {"dos", 2}, {"tres", 3}
        };
        
        var inverted = InvertDictionary(original);
        
        foreach (var kvp in inverted) {
            Console.WriteLine($"{kvp.Key}: {kvp.Value}");
        }
        // 1: uno, 2: dos, 3: tres
    }
}`,
        solution: `using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static Dictionary<V, K> InvertDictionary<K, V>(Dictionary<K, V> dict) {
        return dict.ToDictionary(kvp => kvp.Value, kvp => kvp.Key);
    }
    
    static void Main() {
        var original = new Dictionary<string, int> {
            {"uno", 1}, {"dos", 2}, {"tres", 3}
        };
        
        var inverted = InvertDictionary(original);
        
        foreach (var kvp in inverted) {
            Console.WriteLine($"{kvp.Key}: {kvp.Value}");
        }
    }
}`,
        hints: ["ToDictionary() con LINQ", "Intercambia Key y Value"]
      },
      {
        id: 5,
        title: "Eventos y Delegados",
        difficulty: "Medio",
        description: "Implementa un sistema simple de publicador-suscriptor.",
        starterCode: `using System;

// Crea un publicador que notifique cuando el precio cambie
public class StockPrice {
    private decimal _price;
    
    // Declara el evento aquí
    
    public decimal Price {
        get => _price;
        set {
            // Notifica a los suscriptores
        }
    }
}

class Program {
    static void Main() {
        var stock = new StockPrice();
        
        // Suscríbete al evento
        
        stock.Price = 100.50m;
        stock.Price = 105.75m;
    }
}`,
        solution: `using System;

public class PriceChangedEventArgs : EventArgs {
    public decimal OldPrice { get; }
    public decimal NewPrice { get; }
    
    public PriceChangedEventArgs(decimal oldPrice, decimal newPrice) {
        OldPrice = oldPrice;
        NewPrice = newPrice;
    }
}

public class StockPrice {
    private decimal _price;
    
    public event EventHandler<PriceChangedEventArgs> PriceChanged;
    
    public decimal Price {
        get => _price;
        set {
            if (_price != value) {
                var oldPrice = _price;
                _price = value;
                OnPriceChanged(new PriceChangedEventArgs(oldPrice, value));
            }
        }
    }
    
    protected virtual void OnPriceChanged(PriceChangedEventArgs e) {
        PriceChanged?.Invoke(this, e);
    }
}

class Program {
    static void Main() {
        var stock = new StockPrice();
        
        stock.PriceChanged += (sender, e) => {
            Console.WriteLine($"Precio cambió de {e.OldPrice:C} a {e.NewPrice:C}");
        };
        
        stock.Price = 100.50m;
        stock.Price = 105.75m;
    }
}`,
        hints: ["Usa EventHandler<T>", "Crea una clase para los argumentos del evento"]
      }
    ]
  },
  cpp: {
    name: "C++",
    icon: cppLogo,
    color: "#00599c",
    exercises: [
      {
        id: 1,
        title: "Smart Pointers",
        difficulty: "Medio",
        description: "Implementa una clase que use smart pointers correctamente.",
        starterCode: `#include <iostream>
#include <memory>
#include <string>

class Person {
public:
    std::string name;
    Person(const std::string& n) : name(n) {
        std::cout << name << " created\\n";
    }
    ~Person() {
        std::cout << name << " destroyed\\n";
    }
};

int main() {
    // Crea un unique_ptr a Person
    // Crea un shared_ptr y demuestra el contador de referencias
    // Tu código aquí
    
    return 0;
}`,
        solution: `#include <iostream>
#include <memory>
#include <string>

class Person {
public:
    std::string name;
    Person(const std::string& n) : name(n) {
        std::cout << name << " created\\n";
    }
    ~Person() {
        std::cout << name << " destroyed\\n";
    }
};

int main() {
    // unique_ptr - propiedad única
    std::unique_ptr<Person> p1 = std::make_unique<Person>("Alice");
    std::cout << "unique_ptr name: " << p1->name << "\\n";
    
    // shared_ptr - propiedad compartida
    std::shared_ptr<Person> p2 = std::make_shared<Person>("Bob");
    std::cout << "Reference count: " << p2.use_count() << "\\n";
    
    {
        std::shared_ptr<Person> p3 = p2; // Comparte propiedad
        std::cout << "Reference count: " << p2.use_count() << "\\n";
    } // p3 se destruye, pero Bob sigue vivo
    
    std::cout << "Reference count: " << p2.use_count() << "\\n";
    
    return 0;
}`,
        hints: ["make_unique y make_shared son más seguros", "use_count() muestra referencias"]
      },
      {
        id: 2,
        title: "Templates",
        difficulty: "Medio",
        description: "Crea una función template que encuentre el máximo en un array.",
        starterCode: `#include <iostream>
#include <vector>

// Escribe una función template findMax
// Tu código aquí

int main() {
    std::vector<int> ints = {3, 1, 4, 1, 5, 9};
    std::vector<double> doubles = {2.7, 1.4, 3.14, 1.6};
    std::vector<std::string> strings = {"apple", "zebra", "mango"};
    
    std::cout << findMax(ints) << std::endl;     // 9
    std::cout << findMax(doubles) << std::endl;  // 3.14
    std::cout << findMax(strings) << std::endl;  // zebra
    
    return 0;
}`,
        solution: `#include <iostream>
#include <vector>
#include <stdexcept>

template<typename T>
T findMax(const std::vector<T>& vec) {
    if (vec.empty()) {
        throw std::invalid_argument("Vector vacío");
    }
    
    T maxVal = vec[0];
    for (const auto& item : vec) {
        if (item > maxVal) {
            maxVal = item;
        }
    }
    return maxVal;
}

int main() {
    std::vector<int> ints = {3, 1, 4, 1, 5, 9};
    std::vector<double> doubles = {2.7, 1.4, 3.14, 1.6};
    std::vector<std::string> strings = {"apple", "zebra", "mango"};
    
    std::cout << findMax(ints) << std::endl;     // 9
    std::cout << findMax(doubles) << std::endl;  // 3.14
    std::cout << findMax(strings) << std::endl;  // zebra
    
    return 0;
}`,
        hints: ["template<typename T>", "Usa const reference para eficiencia"]
      },
      {
        id: 3,
        title: "Move Semantics",
        difficulty: "Difícil",
        description: "Implementa una clase con constructor de movimiento y operador de asignación por movimiento.",
        starterCode: `#include <iostream>
#include <cstring>

class MyString {
private:
    char* data;
    size_t length;
    
public:
    // Constructor
    MyString(const char* str) {
        length = strlen(str);
        data = new char[length + 1];
        strcpy(data, str);
        std::cout << "Constructed: " << data << "\\n";
    }
    
    // Destructor
    ~MyString() {
        delete[] data;
    }
    
    // Constructor de copia
    MyString(const MyString& other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
        std::cout << "Copied: " << data << "\\n";
    }
    
    // TODO: Implementa constructor de movimiento
    
    // TODO: Implementa operador de asignación por movimiento
    
    void print() const {
        std::cout << (data ? data : "null") << "\\n";
    }
};

int main() {
    MyString s1("Hello");
    MyString s2 = std::move(s1);  // Move constructor
    s2.print();
    
    MyString s3("World");
    s3 = std::move(s2);  // Move assignment
    s3.print();
    
    return 0;
}`,
        solution: `#include <iostream>
#include <cstring>
#include <utility>

class MyString {
private:
    char* data;
    size_t length;
    
public:
    MyString(const char* str) {
        length = strlen(str);
        data = new char[length + 1];
        strcpy(data, str);
        std::cout << "Constructed: " << data << "\\n";
    }
    
    ~MyString() {
        delete[] data;
    }
    
    MyString(const MyString& other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
        std::cout << "Copied: " << data << "\\n";
    }
    
    // Move constructor
    MyString(MyString&& other) noexcept 
        : data(other.data), length(other.length) {
        other.data = nullptr;
        other.length = 0;
        std::cout << "Moved (constructor)\\n";
    }
    
    // Move assignment operator
    MyString& operator=(MyString&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            length = other.length;
            other.data = nullptr;
            other.length = 0;
            std::cout << "Moved (assignment)\\n";
        }
        return *this;
    }
    
    void print() const {
        std::cout << (data ? data : "null") << "\\n";
    }
};

int main() {
    MyString s1("Hello");
    MyString s2 = std::move(s1);
    s2.print();
    
    MyString s3("World");
    s3 = std::move(s2);
    s3.print();
    
    return 0;
}`,
        hints: ["&& indica rvalue reference", "Pon el puntero original en nullptr", "Usa noexcept"]
      },
      {
        id: 4,
        title: "Lambda y STL",
        difficulty: "Fácil",
        description: "Usa lambdas con algoritmos STL para filtrar y transformar datos.",
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // 1. Usa std::count_if para contar números pares
    
    // 2. Usa std::transform para duplicar cada número
    
    // 3. Usa std::sort con lambda para ordenar de mayor a menor
    
    // Tu código aquí
    
    return 0;
}`,
        solution: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // 1. Contar números pares
    int evenCount = std::count_if(numbers.begin(), numbers.end(),
        [](int n) { return n % 2 == 0; });
    std::cout << "Pares: " << evenCount << "\\n";
    
    // 2. Duplicar cada número
    std::vector<int> doubled(numbers.size());
    std::transform(numbers.begin(), numbers.end(), doubled.begin(),
        [](int n) { return n * 2; });
    
    std::cout << "Duplicados: ";
    for (int n : doubled) std::cout << n << " ";
    std::cout << "\\n";
    
    // 3. Ordenar de mayor a menor
    std::sort(numbers.begin(), numbers.end(),
        [](int a, int b) { return a > b; });
    
    std::cout << "Ordenados desc: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << "\\n";
    
    return 0;
}`,
        hints: ["Lambdas: [captures](params){ body }", "std::transform necesita iterador de salida"]
      },
      {
        id: 5,
        title: "Binary Search Tree",
        difficulty: "Difícil",
        description: "Implementa un árbol binario de búsqueda con inserción y búsqueda.",
        starterCode: `#include <iostream>
#include <memory>

template<typename T>
class BST {
private:
    struct Node {
        T data;
        std::unique_ptr<Node> left;
        std::unique_ptr<Node> right;
        
        Node(T val) : data(val), left(nullptr), right(nullptr) {}
    };
    
    std::unique_ptr<Node> root;
    
    // Métodos privados auxiliares aquí
    
public:
    void insert(T value) {
        // Tu código aquí
    }
    
    bool search(T value) {
        // Tu código aquí
        return false;
    }
    
    void inorder() {
        // Tu código aquí
    }
};

int main() {
    BST<int> tree;
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    
    tree.inorder();  // 20 30 40 50 70
    
    std::cout << "\\nSearch 30: " << (tree.search(30) ? "Found" : "Not found") << "\\n";
    std::cout << "Search 100: " << (tree.search(100) ? "Found" : "Not found") << "\\n";
    
    return 0;
}`,
        solution: `#include <iostream>
#include <memory>

template<typename T>
class BST {
private:
    struct Node {
        T data;
        std::unique_ptr<Node> left;
        std::unique_ptr<Node> right;
        
        Node(T val) : data(val), left(nullptr), right(nullptr) {}
    };
    
    std::unique_ptr<Node> root;
    
    void insertHelper(std::unique_ptr<Node>& node, T value) {
        if (!node) {
            node = std::make_unique<Node>(value);
        } else if (value < node->data) {
            insertHelper(node->left, value);
        } else {
            insertHelper(node->right, value);
        }
    }
    
    bool searchHelper(const std::unique_ptr<Node>& node, T value) const {
        if (!node) return false;
        if (value == node->data) return true;
        if (value < node->data) return searchHelper(node->left, value);
        return searchHelper(node->right, value);
    }
    
    void inorderHelper(const std::unique_ptr<Node>& node) const {
        if (node) {
            inorderHelper(node->left);
            std::cout << node->data << " ";
            inorderHelper(node->right);
        }
    }
    
public:
    void insert(T value) {
        insertHelper(root, value);
    }
    
    bool search(T value) {
        return searchHelper(root, value);
    }
    
    void inorder() {
        inorderHelper(root);
    }
};

int main() {
    BST<int> tree;
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    
    tree.inorder();  // 20 30 40 50 70
    
    std::cout << "\\nSearch 30: " << (tree.search(30) ? "Found" : "Not found") << "\\n";
    std::cout << "Search 100: " << (tree.search(100) ? "Found" : "Not found") << "\\n";
    
    return 0;
}`,
        hints: ["Usa recursión con helpers", "unique_ptr se pasa por referencia"]
      }
    ]
  },
  react: {
    name: "React",
    icon: reactLogo,
    color: "#61dafb",
    exercises: [
      {
        id: 1,
        title: "Contador con Hooks",
        difficulty: "Fácil",
        description: "Crea un componente contador usando useState y useEffect.",
        starterCode: `import React from 'react';

function Counter() {
  // Usa useState para el contador
  // Usa useEffect para actualizar el título del documento
  
  return (
    <div>
      {/* Tu JSX aquí */}
    </div>
  );
}

export default Counter;`,
        solution: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Contador: \${count}\`;
  }, [count]);
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;`,
        hints: ["useState retorna [valor, setter]", "useEffect con dependencias"]
      },
      {
        id: 2,
        title: "Lista de Tareas",
        difficulty: "Medio",
        description: "Crea un componente de lista de tareas con agregar, completar y eliminar.",
        starterCode: `import React from 'react';

function TodoList() {
  // Estado para las tareas
  // Estado para el input
  
  const addTodo = () => {
    // Tu código aquí
  };
  
  const toggleTodo = (id) => {
    // Tu código aquí
  };
  
  const deleteTodo = (id) => {
    // Tu código aquí
  };
  
  return (
    <div>
      {/* Input y botón para agregar */}
      {/* Lista de tareas */}
    </div>
  );
}

export default TodoList;`,
        solution: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nueva tarea..."
        />
        <button onClick={addTodo}>Agregar</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
        hints: ["Usa map para renderizar la lista", "filter para eliminar", "spread operator para actualizar"]
      },
      {
        id: 3,
        title: "Custom Hook: useFetch",
        difficulty: "Medio",
        description: "Crea un custom hook para hacer peticiones HTTP.",
        starterCode: `import React from 'react';

// Crea el custom hook useFetch
function useFetch(url) {
  // Retorna { data, loading, error }
}

// Componente que usa el hook
function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`,
        solution: `import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`,
        hints: ["Custom hooks empiezan con 'use'", "Maneja loading, error y data"]
      },
      {
        id: 4,
        title: "Context API",
        difficulty: "Medio",
        description: "Implementa un tema oscuro/claro usando Context API.",
        starterCode: `import React from 'react';

// Crea el ThemeContext
// Crea el ThemeProvider

// Componente que consume el contexto
function ThemedButton() {
  // Usa el contexto
  
  return (
    <button>
      Toggle Theme
    </button>
  );
}

function App() {
  return (
    // Envuelve con el Provider
    <div>
      <h1>Tema con Context</h1>
      <ThemedButton />
    </div>
  );
}

export default App;`,
        solution: `import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#333' : '#fff',
      text: isDark ? '#fff' : '#333',
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

function ThemedButton() {
  const { isDark, toggleTheme, colors } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: '10px 20px',
        border: '1px solid',
        cursor: 'pointer'
      }}
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { colors } = useTheme();
  
  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>Tema con Context</h1>
      <ThemedButton />
    </div>
  );
}

export default App;`,
        hints: ["createContext() crea el contexto", "useContext() lo consume", "Crea un custom hook useTheme"]
      },
      {
        id: 5,
        title: "useReducer",
        difficulty: "Medio",
        description: "Implementa un carrito de compras usando useReducer.",
        starterCode: `import React from 'react';

// Define las acciones
const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

// Implementa el reducer
function cartReducer(state, action) {
  // Tu código aquí
}

function ShoppingCart() {
  // Usa useReducer
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Teclado', price: 79 }
  ];
  
  return (
    <div>
      {/* Productos y carrito */}
    </div>
  );
}

export default ShoppingCart;`,
        solution: `import React, { useReducer } from 'react';

const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

function cartReducer(state, action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      const existingItem = state.items.find(i => i.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };
    
    case actions.CLEAR_CART:
      return { items: [] };
    
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Teclado', price: 79 }
  ];
  
  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Tienda</h1>
      
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id} style={{ margin: '10px 0' }}>
          {product.name} - \${product.price}
          <button onClick={() => dispatch({
            type: actions.ADD_ITEM,
            payload: product
          })}>
            Agregar
          </button>
        </div>
      ))}
      
      <h2>Carrito ({cart.items.length} items)</h2>
      {cart.items.map(item => (
        <div key={item.id}>
          {item.name} x{item.quantity} = \${item.price * item.quantity}
          <button onClick={() => dispatch({
            type: actions.REMOVE_ITEM,
            payload: item.id
          })}>
            🗑️
          </button>
        </div>
      ))}
      
      <h3>Total: \${total}</h3>
      <button onClick={() => dispatch({ type: actions.CLEAR_CART })}>
        Vaciar Carrito
      </button>
    </div>
  );
}

export default ShoppingCart;`,
        hints: ["useReducer(reducer, initialState)", "dispatch({ type, payload })"]
      }
    ]
  },
  html: {
    name: "HTML",
    icon: htmlLogo,
    color: "#e34c26",
    exercises: [
      {
        id: 1,
        title: "Formulario Semántico",
        difficulty: "Fácil",
        description: "Crea un formulario de contacto usando HTML5 semántico con validación nativa.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Contacto</title>
</head>
<body>
  <!-- Crea un formulario con:
       - Nombre (requerido)
       - Email (requerido, validación de email)
       - Teléfono (patrón de 10 dígitos)
       - Mensaje (mínimo 20 caracteres)
       - Botón de envío
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Contacto</title>
  <style>
    form { max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 10px; }
    input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    button { margin-top: 15px; padding: 10px 20px; }
  </style>
</head>
<body>
  <main>
    <h1>Contáctanos</h1>
    <form action="/submit" method="POST">
      <label for="nombre">Nombre:</label>
      <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        required
        placeholder="Tu nombre completo"
      >
      
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        placeholder="correo@ejemplo.com"
      >
      
      <label for="telefono">Teléfono:</label>
      <input 
        type="tel" 
        id="telefono" 
        name="telefono" 
        pattern="[0-9]{10}"
        placeholder="1234567890"
        title="Ingresa 10 dígitos"
      >
      
      <label for="mensaje">Mensaje:</label>
      <textarea 
        id="mensaje" 
        name="mensaje" 
        rows="4"
        minlength="20"
        required
        placeholder="Escribe tu mensaje (mínimo 20 caracteres)"
      ></textarea>
      
      <button type="submit">Enviar Mensaje</button>
    </form>
  </main>
</body>
</html>`,
        hints: ["Usa type='email' para validación automática", "pattern acepta regex", "minlength valida longitud mínima"]
      },
      {
        id: 2,
        title: "Tabla Accesible",
        difficulty: "Fácil",
        description: "Crea una tabla de datos accesible con cabeceras, pie y atributos ARIA.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tabla de Ventas</title>
</head>
<body>
  <!-- Crea una tabla con:
       - Caption descriptivo
       - thead con cabeceras
       - tbody con datos
       - tfoot con totales
       - scope en las cabeceras
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tabla de Ventas</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px auto; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    thead { background: #333; color: white; }
    tfoot { background: #f5f5f5; font-weight: bold; }
    tbody tr:nth-child(even) { background: #f9f9f9; }
    caption { font-size: 1.2em; margin-bottom: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <table role="table" aria-describedby="tabla-desc">
    <caption id="tabla-desc">Reporte de Ventas Q1 2024</caption>
    
    <thead>
      <tr>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio Unit.</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <th scope="row">Laptop Pro</th>
        <td>15</td>
        <td>$999</td>
        <td>$14,985</td>
      </tr>
      <tr>
        <th scope="row">Monitor 4K</th>
        <td>25</td>
        <td>$450</td>
        <td>$11,250</td>
      </tr>
      <tr>
        <th scope="row">Teclado RGB</th>
        <td>50</td>
        <td>$120</td>
        <td>$6,000</td>
      </tr>
    </tbody>
    
    <tfoot>
      <tr>
        <th scope="row" colspan="3">Total General</th>
        <td>$32,235</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
        hints: ["scope='col' para cabeceras de columna", "scope='row' para cabeceras de fila", "caption describe la tabla"]
      },
      {
        id: 3,
        title: "Layout Semántico",
        difficulty: "Medio",
        description: "Crea una página con estructura semántica completa (header, nav, main, aside, footer).",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Blog</title>
</head>
<body>
  <!-- Estructura semántica:
       - header con logo y nav
       - main con article y aside
       - footer con info de copyright
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Blog</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; line-height: 1.6; }
    
    header { background: #333; color: white; padding: 1rem; }
    header nav ul { list-style: none; display: flex; gap: 20px; }
    header nav a { color: white; text-decoration: none; }
    
    .container { display: grid; grid-template-columns: 1fr 300px; gap: 20px; padding: 20px; max-width: 1200px; margin: 0 auto; }
    
    article { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    article header { background: none; color: #333; padding: 0 0 10px; }
    
    aside { background: #f5f5f5; padding: 20px; border-radius: 8px; }
    
    footer { background: #333; color: white; text-align: center; padding: 1rem; margin-top: 20px; }
    
    @media (max-width: 768px) {
      .container { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Navegación principal">
      <a href="/" aria-label="Inicio">🏠 Mi Blog</a>
      <ul>
        <li><a href="/articulos">Artículos</a></li>
        <li><a href="/sobre-mi">Sobre Mí</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <div class="container">
    <main>
      <article>
        <header>
          <h1>Título del Artículo</h1>
          <p><time datetime="2024-01-15">15 de Enero, 2024</time> por <address><a href="/autor">Juan Pérez</a></address></p>
        </header>
        
        <section>
          <h2>Introducción</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.</p>
        </section>
        
        <section>
          <h2>Desarrollo</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <figure>
            <img src="/imagen.jpg" alt="Descripción de la imagen" width="400">
            <figcaption>Pie de imagen descriptivo</figcaption>
          </figure>
        </section>
        
        <footer>
          <p>Categoría: <a href="/cat/tecnologia">Tecnología</a></p>
        </footer>
      </article>
    </main>
    
    <aside aria-label="Barra lateral">
      <section>
        <h2>Sobre el Autor</h2>
        <p>Desarrollador web con 10 años de experiencia.</p>
      </section>
      
      <section>
        <h2>Artículos Populares</h2>
        <nav aria-label="Artículos relacionados">
          <ul>
            <li><a href="/art1">Cómo aprender HTML</a></li>
            <li><a href="/art2">CSS para principiantes</a></li>
          </ul>
        </nav>
      </section>
    </aside>
  </div>
  
  <footer>
    <p><small>&copy; 2024 Mi Blog. Todos los derechos reservados.</small></p>
  </footer>
</body>
</html>`,
        hints: ["main contiene el contenido principal", "article es contenido independiente", "aside es contenido relacionado"]
      },
      {
        id: 4,
        title: "Multimedia HTML5",
        difficulty: "Fácil",
        description: "Implementa video y audio con controles personalizados y fallbacks.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Multimedia</title>
</head>
<body>
  <!-- Implementa:
       - Video con múltiples fuentes y subtítulos
       - Audio con controles
       - Picture para imágenes responsive
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Multimedia HTML5</title>
  <style>
    .media-container { max-width: 800px; margin: 20px auto; }
    video, audio { width: 100%; }
    figure { margin: 20px 0; }
    figcaption { text-align: center; color: #666; }
  </style>
</head>
<body>
  <main class="media-container">
    <h1>Galería Multimedia</h1>
    
    <section>
      <h2>Video</h2>
      <figure>
        <video 
          controls 
          poster="/poster.jpg"
          preload="metadata"
          width="800"
          height="450"
        >
          <source src="/video.webm" type="video/webm">
          <source src="/video.mp4" type="video/mp4">
          <track 
            kind="subtitles" 
            src="/subs-es.vtt" 
            srclang="es" 
            label="Español"
            default
          >
          <track 
            kind="subtitles" 
            src="/subs-en.vtt" 
            srclang="en" 
            label="English"
          >
          <p>Tu navegador no soporta video HTML5. 
             <a href="/video.mp4">Descarga el video</a>
          </p>
        </video>
        <figcaption>Demo de características HTML5</figcaption>
      </figure>
    </section>
    
    <section>
      <h2>Audio</h2>
      <figure>
        <audio controls preload="metadata">
          <source src="/audio.ogg" type="audio/ogg">
          <source src="/audio.mp3" type="audio/mpeg">
          <p>Tu navegador no soporta audio HTML5.
             <a href="/audio.mp3">Descarga el audio</a>
          </p>
        </audio>
        <figcaption>Podcast Episodio 1</figcaption>
      </figure>
    </section>
    
    <section>
      <h2>Imagen Responsive</h2>
      <figure>
        <picture>
          <source 
            media="(min-width: 800px)" 
            srcset="/hero-large.webp" 
            type="image/webp"
          >
          <source 
            media="(min-width: 800px)" 
            srcset="/hero-large.jpg"
          >
          <source 
            media="(min-width: 400px)" 
            srcset="/hero-medium.webp" 
            type="image/webp"
          >
          <source 
            media="(min-width: 400px)" 
            srcset="/hero-medium.jpg"
          >
          <img 
            src="/hero-small.jpg" 
            alt="Imagen hero responsive"
            loading="lazy"
            width="800"
            height="400"
          >
        </picture>
        <figcaption>Imagen que se adapta al tamaño de pantalla</figcaption>
      </figure>
    </section>
  </main>
</body>
</html>`,
        hints: ["source permite múltiples formatos", "track añade subtítulos", "picture permite imágenes responsive"]
      },
      {
        id: 5,
        title: "Microdata y SEO",
        difficulty: "Medio",
        description: "Añade microdata Schema.org a una página de producto para mejorar SEO.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Producto</title>
</head>
<body>
  <!-- Crea una página de producto con:
       - Microdata de Schema.org/Product
       - Metadatos Open Graph
       - Datos estructurados JSON-LD
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iPhone 15 Pro - TechStore</title>
  <meta name="description" content="iPhone 15 Pro con chip A17 Pro. El smartphone más potente de Apple. Envío gratis.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="iPhone 15 Pro - TechStore">
  <meta property="og:description" content="El smartphone más potente de Apple con chip A17 Pro">
  <meta property="og:image" content="https://example.com/iphone15.jpg">
  <meta property="og:url" content="https://example.com/iphone-15-pro">
  <meta property="og:type" content="product">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="iPhone 15 Pro - TechStore">
  
  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "iPhone 15 Pro",
    "image": "https://example.com/iphone15.jpg",
    "description": "iPhone 15 Pro con chip A17 Pro y cámara de 48MP",
    "brand": {
      "@type": "Brand",
      "name": "Apple"
    },
    "offers": {
      "@type": "Offer",
      "price": "999.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "TechStore"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2456"
    }
  }
  </script>
</head>
<body>
  <main>
    <!-- Microdata inline -->
    <article itemscope itemtype="https://schema.org/Product">
      <h1 itemprop="name">iPhone 15 Pro</h1>
      
      <img 
        itemprop="image" 
        src="/iphone15.jpg" 
        alt="iPhone 15 Pro en color titanio"
        width="400"
      >
      
      <div itemprop="brand" itemscope itemtype="https://schema.org/Brand">
        <span>Marca: <span itemprop="name">Apple</span></span>
      </div>
      
      <p itemprop="description">
        El iPhone 15 Pro cuenta con el revolucionario chip A17 Pro, 
        cámara principal de 48MP y el nuevo botón de acción.
      </p>
      
      <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <p>
          Precio: 
          <span itemprop="priceCurrency" content="USD">$</span>
          <span itemprop="price" content="999.00">999.00</span>
        </p>
        <link itemprop="availability" href="https://schema.org/InStock">
        <p>✅ En stock - Envío gratis</p>
      </div>
      
      <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <p>
          ⭐ <span itemprop="ratingValue">4.8</span>/5 
          (<span itemprop="reviewCount">2,456</span> reseñas)
        </p>
      </div>
      
      <button>Añadir al Carrito</button>
    </article>
  </main>
</body>
</html>`,
        hints: ["itemscope define el alcance", "itemtype el tipo de Schema", "itemprop las propiedades"]
      }
    ]
  },
  css: {
    name: "CSS",
    icon: cssLogo,
    color: "#264de4",
    exercises: [
      {
        id: 1,
        title: "Flexbox Layout",
        difficulty: "Fácil",
        description: "Crea un layout de tarjetas responsivo usando Flexbox.",
        starterCode: `/* Crea un contenedor flex con tarjetas que:
   - Se distribuyan uniformemente
   - Se envuelvan en múltiples líneas
   - Tengan espacio entre ellas
   - Se centren en pantallas pequeñas
*/

.container {
  /* Tu código aquí */
}

.card {
  /* Tu código aquí */
}`,
        solution: `.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  max-width: 350px;
  min-height: 200px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card h3 {
  margin: 0 0 10px;
  color: #333;
}

.card p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}`,
        hints: ["flex-wrap: wrap permite múltiples líneas", "gap controla el espacio", "flex: 1 1 300px es shorthand"]
      },
      {
        id: 2,
        title: "CSS Grid Dashboard",
        difficulty: "Medio",
        description: "Crea un layout de dashboard con CSS Grid.",
        starterCode: `/* Crea un dashboard con:
   - Header que ocupe todo el ancho
   - Sidebar a la izquierda
   - Main content en el centro
   - Widgets en la derecha
   - Footer al fondo
*/

.dashboard {
  /* Tu código aquí */
}

.header { /* Tu código */ }
.sidebar { /* Tu código */ }
.main { /* Tu código */ }
.widgets { /* Tu código */ }
.footer { /* Tu código */ }`,
        solution: `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main widgets"
    "footer footer footer";
  min-height: 100vh;
  gap: 0;
}

.header {
  grid-area: header;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar {
  grid-area: sidebar;
  background: #2d3748;
  color: white;
  padding: 20px;
}

.sidebar nav a {
  display: block;
  padding: 12px 15px;
  color: #a0aec0;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 5px;
  transition: all 0.3s;
}

.sidebar nav a:hover,
.sidebar nav a.active {
  background: #4a5568;
  color: white;
}

.main {
  grid-area: main;
  background: #f7fafc;
  padding: 30px;
  overflow-y: auto;
}

.widgets {
  grid-area: widgets;
  background: #edf2f7;
  padding: 20px;
}

.widget {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.footer {
  grid-area: footer;
  background: #1a202c;
  color: #a0aec0;
  padding: 15px 30px;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .dashboard {
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
  .widgets {
    display: none;
  }
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  .sidebar {
    display: none;
  }
}`,
        hints: ["grid-template-areas para layout visual", "grid-area asigna elementos", "Usa media queries para responsive"]
      },
      {
        id: 3,
        title: "Animaciones CSS",
        difficulty: "Medio",
        description: "Crea animaciones atractivas con @keyframes y transitions.",
        starterCode: `/* Crea:
   1. Un botón con efecto ripple
   2. Un loader animado
   3. Una card con flip animation
*/

.ripple-button {
  /* Tu código aquí */
}

.loader {
  /* Tu código aquí */
}

.flip-card {
  /* Tu código aquí */
}`,
        solution: `/* ========= RIPPLE BUTTON ========= */
.ripple-button {
  position: relative;
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.ripple-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.ripple-button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  transform: scale(0);
  opacity: 0;
}

.ripple-button:active::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

/* ========= LOADER ========= */
.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Loader alternativo - puntos */
.loader-dots {
  display: flex;
  gap: 8px;
}

.loader-dots span {
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}

.loader-dots span:nth-child(1) { animation-delay: 0s; }
.loader-dots span:nth-child(2) { animation-delay: 0.2s; }
.loader-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

/* ========= FLIP CARD ========= */
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.flip-card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.flip-card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}`,
        hints: ["@keyframes define la animación", "animation-delay crea efectos escalonados", "perspective para 3D"]
      },
      {
        id: 4,
        title: "Variables CSS y Temas",
        difficulty: "Fácil",
        description: "Implementa un sistema de temas usando CSS Custom Properties.",
        starterCode: `/* Crea un sistema de temas con:
   - Variables para colores, espaciado, tipografía
   - Tema claro y oscuro
   - Transiciones suaves entre temas
*/

:root {
  /* Variables aquí */
}

[data-theme="dark"] {
  /* Override para tema oscuro */
}`,
        solution: `:root {
  /* Colores base */
  --color-primary: #667eea;
  --color-primary-dark: #5a67d8;
  --color-secondary: #764ba2;
  --color-success: #48bb78;
  --color-warning: #ed8936;
  --color-error: #f56565;
  
  /* Tema claro (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-tertiary: #edf2f7;
  
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #a0aec0;
  
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.1);
  
  /* Espaciado */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Tipografía */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}

/* Tema oscuro */
[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --bg-tertiary: #4a5568;
  
  --text-primary: #f7fafc;
  --text-secondary: #e2e8f0;
  --text-muted: #a0aec0;
  
  --border-color: #4a5568;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Uso de las variables */
body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal),
              color var(--transition-normal);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: all var(--transition-normal);
}

.button {
  background: var(--color-primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: background var(--transition-fast);
}

.button:hover {
  background: var(--color-primary-dark);
}

.text-muted {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
}`,
        hints: ["var(--nombre) usa la variable", "data-theme permite cambiar temas", "Transitions suavizan el cambio"]
      },
      {
        id: 5,
        title: "Responsive Avanzado",
        difficulty: "Medio",
        description: "Implementa un diseño responsive con container queries y clamp().",
        starterCode: `/* Usa técnicas modernas:
   - clamp() para tipografía fluida
   - Container queries
   - Aspect-ratio
   - min/max con grid
*/

.responsive-section {
  /* Tu código aquí */
}`,
        solution: `/* ========= TIPOGRAFÍA FLUIDA ========= */
:root {
  /* clamp(min, preferred, max) */
  --font-size-h1: clamp(2rem, 5vw + 1rem, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
  --font-size-body: clamp(1rem, 1vw + 0.75rem, 1.25rem);
  
  /* Espaciado fluido */
  --space-fluid: clamp(1rem, 3vw, 3rem);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
body { font-size: var(--font-size-body); }

/* ========= CONTAINER QUERIES ========= */
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
}

/* Cuando el contenedor es mayor a 400px */
@container card (min-width: 400px) {
  .card {
    grid-template-columns: 150px 1fr;
    padding: 1.5rem;
  }
  
  .card-image {
    aspect-ratio: 1;
  }
}

/* Cuando el contenedor es mayor a 600px */
@container card (min-width: 600px) {
  .card {
    grid-template-columns: 200px 1fr auto;
  }
  
  .card-actions {
    flex-direction: column;
  }
}

/* ========= ASPECT RATIO ========= */
.video-wrapper {
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
}

.square-image {
  aspect-ratio: 1;
  object-fit: cover;
}

.portrait {
  aspect-ratio: 3 / 4;
}

/* ========= GRID AUTO-FIT ========= */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: var(--space-fluid);
  padding: var(--space-fluid);
}

/* ========= RESPONSIVE SIN MEDIA QUERIES ========= */
.flexible-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flexible-layout > * {
  /* Crece desde 300px, máximo 1fr */
  flex: 1 1 min(100%, 300px);
}

/* ========= GRID INTELIGENTE ========= */
.smart-grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}

/* ========= IMÁGENES RESPONSIVE ========= */
.responsive-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Lazy loading styles */
.responsive-image[loading="lazy"] {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}`,
        hints: ["clamp() permite valores fluidos", "container-type habilita container queries", "min() dentro de minmax() previene overflow"]
      }
    ]
  }
};

export const getLanguageById = (id) => exercises[id];
export const getAllLanguages = () => Object.keys(exercises).map(key => ({
  id: key,
  ...exercises[key]
}));

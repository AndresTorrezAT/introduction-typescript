## Diferencia clave: Módulos vs. Espacios de Nombres

Los módulos son el mecanismo de organización de código recomendado para proyectos nuevos, ya que están diseñados para funcionar con el estándar ES6 y permiten un manejo claro de dependencias entre archivos, encapsulación y reutilización de código. Los espacios de nombres (namespace) son una técnica más antigua, utilizada antes de que los módulos fueran ampliamente compatibles.

# Ejemplo de Espacio de Nombres (namespace):
Compilacion: tsc --outFile salida.js archivo1.ts archivo2.ts

```
    namespace MiEspacio {
        export function saludar(nombre: string): void {
            console.log(`Hola, ${nombre}`);
        }
    }

    // Usar el espacio de nombres
    MiEspacio.saludar("Andrés"); // "Hola, Andrés"
```


# Ejemplo de Módulos (ES6):

Archivo utils.ts:
```
export function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}

```

Archivo main.ts:

```
import { saludar } from "./utils";

saludar("Andrés"); // "Hola, Andrés"
```
compilar: tsc utils.ts main.ts
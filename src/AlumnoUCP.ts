
import { PersonaUCP } from "./PersonaUCP";

export class AlumnoUCP extends PersonaUCP {
  private _notaFinal: number = 0;

  constructor(nombre: string, dni: string, public legajo: string) {
    super(nombre, dni); 
  }

  get notaFinal(): number {
    return this._notaFinal;
  }

  set notaFinal(valor: number) {
    if (valor >= 1 && valor <= 10) {
      this._notaFinal = valor;
    } else {
      throw new Error("Error en el sistema UCP: La nota debe estar entre 1 y 10");
    }
  }

  obtenerCredencial(): string {
    return `ALU-${this.legajo}`;
  }

  public determinarEstado(): string {
    if (this.notaFinal >= 8) {
      return "Promocionado";
    } else if (this.notaFinal >= 6) {
      return "Regular";
    } else {
      return "Recuperatorio";
    }
  }
  
}

export abstract class PersonaUCP {
  private _nombre: string;
  private _dni: string;

  constructor(nombre: string, dni: string) {
    this._nombre = nombre;
    this._dni = dni;
  }

  get nombre(): string {
    return this._nombre;
  }

  get dni(): string {
    return this._dni;
  }

  abstract obtenerCredencial(): string;
}
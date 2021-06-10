// Products
interface Engine {}
interface Wings {}
interface Cockpit {}

class F16Engine implements Engine {}
class F16Wings implements Wings {}
class F16Cockpit implements Cockpit {}

class BoeingEngine implements Engine {}
class BoeingWings implements Wings {}
class BoeingCockpit implements Cockpit {}

// Abstract Factory
interface AircraftFactory {
  createEngine(): Engine;
  createWings(): Wings;
  createCockpit(): Cockpit;
}

export class F16Factory implements AircraftFactory {
  createEngine() {
    return new F16Engine();
  }
  createWings() {
    return new F16Wings();
  }
  createCockpit() {
    return new F16Cockpit();
  }
}
export class BoeingFactory implements AircraftFactory {
  createEngine(): Engine {
    return new BoeingEngine();
  }
  createWings(): Wings {
    return new BoeingWings();
  }
  createCockpit(): Cockpit {
    return new BoeingCockpit();
  }
}

export const enum AircraftState {
  RUNNING = 'Taxing on runway',
  FLYING = 'Flying',
}

export class Aircraft {
  _engine!: Engine;
  _wings!: Wings;
  _cockpit!: Cockpit;

  public get state(): AircraftState {
    return this._state;
  }
  private _state!: AircraftState;

  factory: AircraftFactory;

  constructor(factory: AircraftFactory) {
    this.factory = factory;
  }

  protected makeAircraft(): Aircraft {
    this._engine = this.factory.createEngine();
    this._cockpit = this.factory.createCockpit();
    this._wings = this.factory.createWings();
    return this;
  }

  private taxi(): void {
    this._state = AircraftState.RUNNING;
  }

  public fly(): void {
    const aircraft: Aircraft = this.makeAircraft();
    aircraft.taxi();
    this._state = AircraftState.RUNNING;
  }
}

// No need for specific classes, with the help of factory method we are creating all kind of aircrafts from Aircraft class
// class F16 {
//   // engine
//   // cockpit
//   // wings
// }
// class Boeing {}

export const main = () => {
  const aircrafts: Aircraft[] = [];

  const f16Aircraft: Aircraft = new Aircraft(new F16Factory());
  const boeingAircraft = new Aircraft(new BoeingFactory());

  aircrafts.push(f16Aircraft, boeingAircraft);

  for (const aircraft of aircrafts) {
    aircraft.fly();
    console.log(aircraft.state);
  }
};

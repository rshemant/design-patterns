interface PilotActions {
  pilotTaxies(): void;
  pilotFlies(): void;
  pilotEjects(): void;
  pilotLands(): void;
  pilotParks(): void;
}

export class ParkedState implements PilotActions {
  f16: F16;
  constructor(f16: F16) {
    this.f16 = f16;
  }
  pilotTaxies(): void {
    // set state
    this.f16.state = this.f16.getTaxiState();
  }
  pilotFlies(): void {
    throw new Error('Method not implemented.');
  }
  pilotEjects(): void {
    throw new Error('Method not implemented.');
  }
  pilotLands(): void {
    throw new Error('Method not implemented.');
  }
  pilotParks(): void {
    throw new Error('Method not implemented.');
  }
}
export class TaxiState implements PilotActions {
  f16: F16;
  constructor(f16: F16) {
    this.f16 = f16;
  }
  pilotTaxies(): void {
    throw new Error('Method not implemented.');
  }
  pilotFlies(): void {
    throw new Error('Method not implemented.');
  }
  pilotEjects(): void {
    throw new Error('Method not implemented.');
  }
  pilotLands(): void {
    throw new Error('Method not implemented.');
  }
  pilotParks(): void {
    throw new Error('Method not implemented.');
  }
}
// class AirborneState implements PilotActions {}
// class LandState implements PilotActions {}
// class CrashedState implements PilotActions {}

export class F16 {
  private parkedState = new ParkedState(this);
  private taxiState = new TaxiState(this);
  //   private runningState: RunningState;
  //   private crashedState: CrashedState;

  public get state(): PilotActions {
    return this._state;
  }
  public set state(value: PilotActions) {
    this._state = value;
  }
  private _state!: PilotActions;
  constructor() {
    this.state = this.parkedState;
  }

  startsEngine() {
    this._state.pilotTaxies();
  }
  getTaxiState(): TaxiState {
    return this.taxiState;
  }
}

const Client = () => {
  const f16: F16 = new F16();
  f16.startsEngine();
  //   f16.fliesPlane();
  //   f16.ejectsPlane();
};

export default Client;

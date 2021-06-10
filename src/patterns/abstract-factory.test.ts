import {
  Aircraft,
  F16Factory,
  BoeingFactory,
  AircraftState,
} from './abstract-factory';

describe('Abstract Factory', () => {
  it('works', () => {
    const aircrafts: Aircraft[] = [];

    const f16Aircraft: Aircraft = new Aircraft(new F16Factory());
    const boeingAircraft = new Aircraft(new BoeingFactory());

    aircrafts.push(f16Aircraft, boeingAircraft);

    for (const aircraft of aircrafts) {
      aircraft.fly();
      expect(aircraft.state).toEqual(AircraftState.RUNNING);
      expect(aircraft.state).not.toEqual(AircraftState.FLYING);
    }
    expect(aircrafts.length).toEqual(2);
  });
});

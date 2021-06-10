import { ParkedState, TaxiState, F16 } from './state-pattern';

describe('State Factory', () => {
  it('works', () => {
    const f16: F16 = new F16();
    f16.startsEngine();

    expect(f16.state instanceof TaxiState).toBeTruthy();
    expect(f16.state instanceof ParkedState).toBeFalsy();
  });
});

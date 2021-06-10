import { HotAirBalloon, Adapter } from './adapter-pattern';

describe('Bridge Pattern', () => {
  it('works', () => {
    const hotAirBalloon: HotAirBalloon = new HotAirBalloon();
    const hotAirBalloonAdapter: Adapter = new Adapter(hotAirBalloon);

    expect(hotAirBalloonAdapter.fly()).toEqual(
      'HotAir balloon flying with Helium'
    );
  });
});

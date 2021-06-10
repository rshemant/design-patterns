export class HotAirBalloon {
  gasUsed = 'Helium';

  fly(_gasUsed: string): string {
    // Take-off sequence based on the kind of fuel
    // Followed by more code.
    return 'HotAir balloon flying with ' + this.gasUsed;
  }

  // Function returns the gas used by the balloon for flight
  inflateWithGas(): string {
    return this.gasUsed;
  }
}

interface Aircraft {
  fly(): void;
}

export class Adapter implements Aircraft {
  hotAirBalloon: HotAirBalloon;
  constructor(hotAirBalloon: HotAirBalloon) {
    this.hotAirBalloon = hotAirBalloon;
  }

  fly(): string {
    const fuelUsed = this.hotAirBalloon.inflateWithGas();
    return this.hotAirBalloon.fly(fuelUsed);
  }
}

const Client = () => {
  const hotAirBalloon: HotAirBalloon = new HotAirBalloon();
  const hotAirBalloonAdapter: Adapter = new Adapter(hotAirBalloon);

  hotAirBalloonAdapter.fly();
};

export default Client;

import {
  AbstractCorolla,
  Corolla_L,
  Corolla_L_Impl_AsiaPacific,
  Corolla_L_Impl_NorthAmerica,
} from './bridge-pattern';

describe('Bridge Pattern', () => {
  it('works', () => {
    const myCorolla: AbstractCorolla = new Corolla_L(
      new Corolla_L_Impl_AsiaPacific()
    );
    expect(myCorolla.isCarRightHanded()).toBe(false);

    myCorolla.setCorollaImpl(new Corolla_L_Impl_NorthAmerica());
    expect(myCorolla.isCarRightHanded()).toBe(true);
  });
});

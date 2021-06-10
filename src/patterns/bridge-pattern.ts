interface Corolla_L_Impl {
  listSafetyEquipment(): string;
  isCarRightHanded(): boolean;
}

export class Corolla_L_Impl_AsiaPacific implements Corolla_L_Impl {
  listSafetyEquipment(): string {
    return 'safety equipment: bumper, shilled ';
  }
  isCarRightHanded(): boolean {
    return false;
  }
}
export class Corolla_L_Impl_NorthAmerica implements Corolla_L_Impl {
  listSafetyEquipment(): string {
    return 'safety equipment: only bumper ';
  }
  isCarRightHanded(): boolean {
    return true;
  }
}

export abstract class AbstractCorolla {
  protected corolla_L_Impl: Corolla_L_Impl;
  constructor(corolla_L_Impl: Corolla_L_Impl) {
    this.corolla_L_Impl = corolla_L_Impl;
  }
  setCorollaImpl(corolla_L_Impl: Corolla_L_Impl) {
    this.corolla_L_Impl = corolla_L_Impl;
  }
  abstract listSafetyEquipment(): void;
  abstract isCarRightHanded(): boolean;
}

export class Corolla_L extends AbstractCorolla {
  constructor(corolla_L_Impl: Corolla_L_Impl) {
    super(corolla_L_Impl);
  }
  listSafetyEquipment(): void {
    this.corolla_L_Impl.listSafetyEquipment();
  }
  isCarRightHanded(): boolean {
    return this.corolla_L_Impl.isCarRightHanded();
  }
}

const Client = () => {
  const myCorolla: AbstractCorolla = new Corolla_L(
    new Corolla_L_Impl_AsiaPacific()
  );
  console.log(myCorolla.isCarRightHanded());

  myCorolla.setCorollaImpl(new Corolla_L_Impl_NorthAmerica());
  console.log(myCorolla.isCarRightHanded());
};

export default Client;

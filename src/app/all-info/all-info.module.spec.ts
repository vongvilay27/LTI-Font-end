import { AllInfoModule } from './all-info.module';

describe('AllInfoModule', () => {
  let allInfoModule: AllInfoModule;

  beforeEach(() => {
    allInfoModule = new AllInfoModule();
  });

  it('should create an instance', () => {
    expect(allInfoModule).toBeTruthy();
  });
});

import { TransportationsModule } from './transportations.module';

describe('TransportationsModule', () => {
  let transportationsModule: TransportationsModule;

  beforeEach(() => {
    transportationsModule = new TransportationsModule();
  });

  it('should create an instance', () => {
    expect(transportationsModule).toBeTruthy();
  });
});

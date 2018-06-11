import { AttractionsMainModule } from './attractions-main.module';

describe('AttractionsMainModule', () => {
  let attractionsMainModule: AttractionsMainModule;

  beforeEach(() => {
    attractionsMainModule = new AttractionsMainModule();
  });

  it('should create an instance', () => {
    expect(attractionsMainModule).toBeTruthy();
  });
});

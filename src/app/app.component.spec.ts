import { AppComponent } from './app.component';

describe('clicking on sayhello function', () => {
  const app = new AppComponent();

  it('must return hello there!', () => {
    expect(app.sayhello()).toBe('hello there!');
  })
  it('must return welcome there!', () => {
    expect(app.saywelcome()).toBe('welcome there!');
  })
})

import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should display message saying My Todos', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Todos');
  });
});

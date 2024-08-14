// Jest isn't compatible with more recent versions of react-markdown, and so this warning arises about future incompatibility. Suppress it, for now.
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (msg.includes('Support for defaultProps will be removed from function components')) {
      return;
    }
    console.error(msg);
  });
});

afterAll(() => {
  console.error.mockRestore();
});

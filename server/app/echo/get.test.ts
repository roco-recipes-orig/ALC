import { getEcho } from './get';

describe(getEcho.name, () => {
  it('echoes a sample string', async () => {
    const { data } = await getEcho('myStr');
    expect(data).toBe('myStr');
  });
});

import API from '../api';

describe('Get Data from API', () => {
  it('gets the missions data', async () => {
    const data = await API.getMissions();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data).toHaveLength(10);
    expect(typeof data[1].mission_id).toBe('string');
  });

  it('gets the rockets data', async () => {
    const data = await API.getRockets();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data).toHaveLength(4);
    expect(typeof data[1].id).toBe('number');
  });
});

const request = require('supertest');
const app = require('./index');

describe('Business API Health Check', () => {
  it('should return ok status for health endpoint', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
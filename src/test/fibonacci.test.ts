import calculateFibonacciNumber from '../utils/calculateFibonacciNumber';
import request from 'supertest';
import { app, server } from '../server';

describe('Fibonacci function', () => {
  it('should return 0 for number 0', () => {
    expect(calculateFibonacciNumber(0)).toBe(0);
  });

  it('should return 1 for number 1', () => {
    expect(calculateFibonacciNumber(1)).toBe(1);
  });

  it('should return the expected result for number 6', () => {
    expect(calculateFibonacciNumber(6)).toBe(8);
  });

  it('should return the expected result for number 5', () => {
    expect(calculateFibonacciNumber(20)).toBe(6765);
  });
});

describe('/fibonacci/:number endpoint', () => {
  afterAll(() => {
    server.close();
  });

  it('should return 200 statusCode for /fibonacci/:number endpoint', async () => {
    const response = await request(app).get('/api/fibonacci/2');
    expect(response.statusCode).toBe(200);
  });

  it('should return 422 statusCode for error at /fibonacci/:number endpoint', async () => {
    const response = await request(app).get('/api/fibonacci/NaN');
    expect(response.statusCode).toBe(422);
  });
});

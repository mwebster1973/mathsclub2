import { Sum } from './Sum';

test('Multiply', () => {
	const s = new Sum(10.0, 10.0);
	expect(s.result).toBe(100)
  });
  test('Zero Multiply', () => {
	const s = new Sum(10.0, 0.0);
	expect(s.result).toBe(0)
  });
  test('Negative Multiply', () => {
	const s = new Sum(10.0, -1.0);
	expect(s.result).toBe(-10)
  });

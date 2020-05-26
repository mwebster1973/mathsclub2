import { SumGenerator, splitInto } from "./SumGenerator";

test('1 Sum', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 100,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	expect(generator.generateSums(1).length).toBe(1);	
});
test('0 Sum', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 100,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	expect(generator.generateSums(0).length).toBe(0);	
});
test('Number of questions from criteria', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 100,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	expect(generator.generateSums().length).toBe(100);	
});

test('Number of questions from criteria', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 4,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	const sums = generator.generateSums();	 
	const result = splitInto(sums, 2);
	expect(result.length).toBe(2);
	expect(result[0].length).toBe(2);
	expect(result[0][0]).toBe(sums[0]);
	expect(result[0][1]).toBe(sums[1]);
	expect(result[1][0]).toBe(sums[2]);
	expect(result[1][1]).toBe(sums[3]);
});

test('Split empty', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 0,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	const sums = generator.generateSums();	
	const result = splitInto(sums, 2);
	expect(result.length).toBe(2);
	expect(result[0].length).toBe(0);
	expect(result[1].length).toBe(0);
});
test('Split Unequal 2 columns', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 5,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	const sums = generator.generateSums();	
	const result = splitInto(sums, 2);
	expect(result.length).toBe(2);
	expect(result[0].length).toBe(3);
	expect(result[1].length).toBe(2);
	expect(result[0][0]).toBe(sums[0]);
	expect(result[0][1]).toBe(sums[1]);
	expect(result[0][2]).toBe(sums[2]);
	expect(result[1][0]).toBe(sums[3]);
	expect(result[1][1]).toBe(sums[4]);
});

test('Split Unequal 3 columns', () => {
	const generator = new SumGenerator({
		numberOfQuestions: 8,
		timesTables: [2],
		divisions: false,
		decimals: false,
	}); 
	const sums = generator.generateSums();	 
	const result = splitInto(sums, 3);
	expect(result.length).toBe(3);
	expect(result[0].length).toBe(3);
	expect(result[1].length).toBe(3);
	expect(result[2].length).toBe(2);
	expect(result[0][0]).toBe(sums[0]);
	expect(result[0][1]).toBe(sums[1]);
	expect(result[0][2]).toBe(sums[2]);
	expect(result[1][0]).toBe(sums[3]);
	expect(result[1][1]).toBe(sums[4]);
	expect(result[1][2]).toBe(sums[5]);
	expect(result[2][0]).toBe(sums[6]);
	expect(result[2][1]).toBe(sums[7]);
});

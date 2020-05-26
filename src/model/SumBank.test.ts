import { SumBank } from './SumBank';

test('Total sums correct', () => {
	const bank = new SumBank();
	bank.addTable(2);
	expect(bank.getTotalSumsRemaining()).toBe(12);
	bank.addTable(3);
	expect(bank.getTotalSumsRemaining()).toBe(24);
  });
  test('Is empty calculates correctly', () => {
		const bank = new SumBank();
		expect(bank.isEmpty()).toBe(true)
		bank.addTable(2);
		expect(bank.isEmpty()).toBe(false)
		for (var x=1; x<=12; x++){
			bank.getNextSum();
		}
		expect(bank.isEmpty()).toBe(true)
  });

  test('Withdraw from an empty bank', () => {
		const bank = new SumBank(); 
		expect(bank.isEmpty()).toBe(true)
		expect( () => {bank.getNextSum()}).toThrowError("Bank has no sums remaining"); 
		
});

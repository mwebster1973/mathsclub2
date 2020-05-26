import { SumBank } from "./SumBank";
import { Sum } from "./Sum";
import { Club } from "./ClubCriteria";

export class SumGenerator {

	private bank = new SumBank();
	
	constructor(public criteria: Club){
	}
	
	public generateSums(count: number = this.criteria.numberOfQuestions) : Array<Sum> {
		var sums : Array<Sum> = [];
		
		for (var x=0; x< count; x++){
			if (this.bank.isEmpty()){
				this.populateSumBank();
			}
			const nextSum = this.bank.getNextSum();
			nextSum.shuffleParameters();
			
			if (this.criteria.decimals){
				nextSum.decimails = true;
				nextSum.convertToDecimals();
			}
			
			if (this.criteria.divisions){
				nextSum.maybeConvertToDivision();
			}
			sums.push(nextSum);
		}
		return sums;
	}
	
	private populateSumBank() {
		this.criteria.timesTables.forEach( (table:number) =>{
			this.bank.addTable(table);
		});
	}
}

export function splitInto(sumsToSplit: Array<Sum>, cols:number):Array<Array<Sum>> {
	const splitSize  = Math.floor(Math.round(sumsToSplit.length/cols));
	
	var startPos = 0;	
	const results: Array<Array<Sum>> = [];
	for (var col=0; col< cols; col++){			
		
		var endPos = startPos + splitSize;
		const colList = sumsToSplit.slice(startPos, endPos);			
		results.push(colList);
		startPos = endPos;
	}
	return results;
}

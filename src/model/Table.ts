
export class Table {
	
	private questionsToAnswer : Array<string> = [];
	
	private readonly start = 1;
	private readonly end = 12;
	
	constructor(public tableName: number){
		this.tableName = tableName;
		this.generateFullTable();
	}
	
	private generateFullTable() {
		for (var x = this.start; x<=this.end ; x++){
			this.questionsToAnswer.push(String(x));
		}
	}

	/**
	 * Determine whether all the questions have been answered
	 */
	public isEmpty() : boolean{
		return this.questionsToAnswer.length===0;
	}
	
	public getNextEntry() : number {
		
		var pos = this.getRandomPositon();
		const value = this.questionsToAnswer[pos];
		const index = this.questionsToAnswer.indexOf(value, 0);
		if (index > -1) {
			this.questionsToAnswer.splice(index, 1);
		}
		return Number(value);
	}

	public getQuestionsRemaining() : number{
		return this.questionsToAnswer.length;
	}
	
	private getRandomPositon(): number{
		const min = 0;
		const max = this.questionsToAnswer.length-1;
		return  min +  Math.floor((Math.random() * ((max - min) + 1)));		
	}
}

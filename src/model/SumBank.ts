import { Table } from "./Table";
import { Sum } from "./Sum";

export class SumBank {

	private tables: Array<Table> = []; 
	
	public addTable(table: number) {
		this.tables.push(new Table(table));
	}	
	
	protected getRandomTable(): Table{

		return this.tables[this.getRandomTableIndex()];
	}
	
	protected getRandomTableIndex():number{		
		const min = 0;
		const max = this.tables.length-1;
		return  min + Math.floor((Math.random() * ((max - min) + 1)));
	}
	
	public getNextSum(): Sum {
		if (this.isEmpty()){
			throw new Error("Bank has no sums remaining");
		}
		var table = this.getRandomTable();		
		var times = table.getNextEntry();  
		if (table.isEmpty()){
			const index = this.tables.indexOf(table, 0);
			if (index > -1) {
				this.tables.splice(index, 1);
			}
		}
		return new Sum(table.tableName, times);
	}
	
	public isEmpty() : boolean{
		return this.tables.length===0;
	}
	
	public getTotalSumsRemaining(): number{
		var total = 0;
		this.tables.forEach( (table: Table) =>{
			total += table.getQuestionsRemaining();
		})
		return total;
	}	
}

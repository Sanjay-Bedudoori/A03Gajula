var Test = {
	Name : function(NameCheck){
		var n;
		try{	
			var n1 = typeof NameCheck;		
			if(NameCheck>0) throw "It is a Positive Number";
			if(NameCheck=="")throw "Empty Value";
			if(n1=="string") throw "Success";
			if(NameCheck<0) throw "It is a Negative Number";
		}
		catch(err){
				n = err;
			}
		return n;
	}

}
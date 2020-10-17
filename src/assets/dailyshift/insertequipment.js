function validateEquipment(){
    var eqp = document.getElementById('eqp');
    var date = document.getElementById('date');
    var quantity = document.getElementById('quantity');
	var price = document.getElementById('price');
			
		
		if(eqp.value == '')
		{
			alert('Please enter equipment ID');
			return false;
		}
        
        if(date.value == '')
		{
			alert('Please enter date');
			return false;
		}
		if(quantity.value == '')
		{
			alert('Please enter quantity');
			return false;
		}
		if(price.value == '')
		{
			alert('Please enter price');
			return false;
		}
		
		
	
}
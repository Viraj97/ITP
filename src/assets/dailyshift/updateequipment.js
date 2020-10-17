function validateUpdateEquipment(){
    var NIC = document.getElementById('NIC');
			
		
		if(NIC.value == '')
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
function makeCustomer()
{
    let customer={};
    let _id,_name;
    customer.setId=function(id){
        if(id>0){
            _id=id;
        }
    }
    customer.setName=function(name){
        if(name.length>0)
            _name=name;
    }
    customer.getDetails=function(){
        return "Customer ID:"+_id+" and Customer Name:"+_name;
    }

    return customer;
}
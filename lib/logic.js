/**
 * Sample Logic File.
 */

 /**
*  Transfer an Employee
*  @param  {org.hyperledgercomposer.erm.TransferEmployee} TransferEmployee
*  @transaction
*/
function transferEmployee(TransferEmployee) {
    now = new Date();
    employee = TransferEmployee.employee;
    
    if(employee.employeeStatus.dateHired > now)
        throw new('Invalid Transfer');

}
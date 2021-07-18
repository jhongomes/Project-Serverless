
import { ListEmployeeUseCase } from "./listEmployeeUseCase"



export const handle = async () => {
    const listEmployeeUseCase = new ListEmployeeUseCase();
    
    const employees = await listEmployeeUseCase.execute();
    if(employees[0]){
        return {
               statusCode: 200,
               body: JSON.stringify(employees),
        }
    }

        return {
               statusCode: 400,
               body: JSON.stringify({ message: "not found employee !"}),
        }
}
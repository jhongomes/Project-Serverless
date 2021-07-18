import { CreateEmployeeUseCase } from "./createEmployeeUseCase";



export const handle = async (event) => {
    const { name, age, occupation } = JSON.parse(event.body);

    const createEmployeeUseCase = new CreateEmployeeUseCase();

    await createEmployeeUseCase.execute({ name, age, occupation})

    return {    statusCode: 201,
                body: JSON.stringify({
                message: "Employee created sucess!",   }),
            
                headers: {
                         "Content-type": "application/json",
                },
            }
                
}
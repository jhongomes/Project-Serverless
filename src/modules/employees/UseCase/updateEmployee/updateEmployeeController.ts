import { UpdateEmployeeUseCase } from "./updateEmployeeUseCase";



export const handle = async (event) => {
    const { id } = event.pathParameters;
    const { name, age, occupation } = JSON.parse(event.body);

    const updateEmployeeUseCase = new UpdateEmployeeUseCase();

    await updateEmployeeUseCase.execute({ id, name, age, occupation });

    return {    statusCode: 201,
                body: JSON.stringify({ message: "Employee info updated",
            
            }),  headers: {  "Contet-type": "application/json"

            },
            }
}
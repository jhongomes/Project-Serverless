import { AppError } from "src/shared/errors/AppError";
import { document } from "src/utils/dynamodbClient";

interface IUpdatedEmployee{
    id: string;
    name: string;
    age: number;
    occupation: string;

}



class UpdateEmployeeUseCase {
    async execute({ id, name, age, occupation}:IUpdatedEmployee): Promise<void>{
        let employeeAlreadyExists = await document.scan({
                        TableName: "employees",
                        FilterExpression: "id = :id",
                        ExpressionAttributeValues: {
                            ":id": id,
                        },
                    }).promise();

        if(!employeeAlreadyExists.Items[0]){
            throw new AppError("Employee doesn't exists!")
        }

        employeeAlreadyExists = await document.scan({
                         TableName: "employees",
                         FilterExpression: "name = :name",
                         ExpressionAttributeValues: {
                            ":name": name,
                         }, 
                        }).promise()
        if (employeeAlreadyExists.Items[0]){
            throw new AppError("Existing employee");
    }

        await document.put({
                        TableName: "employees",
                        Item: {
                        id,
                        age,
                        name,
                        occupation,
                        },
                    }).promise();

    }
                        
}

export { UpdateEmployeeUseCase}
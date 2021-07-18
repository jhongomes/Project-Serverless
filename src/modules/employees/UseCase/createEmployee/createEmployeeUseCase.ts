import { v4 as uuidv4 } from "uuid";

import { document } from "../../../../utils/dynamodbClient";

interface ICreateEmployee {
    name: string;
    age: number;
    occupation: string;
}



class CreateEmployeeUseCase {

    async execute({name, age, occupation}:ICreateEmployee): Promise<void>{

        await document.put({
                      TableName: "employees",
                       Item: {
                       id: uuidv4(),
                       name,
                       age,
                       occupation,
                       },
                       }).promise();
    }

}
export { CreateEmployeeUseCase}
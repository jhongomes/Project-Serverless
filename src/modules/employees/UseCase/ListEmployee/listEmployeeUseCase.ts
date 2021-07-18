import { document } from "src/utils/dynamodbClient"



class ListEmployeeUseCase {
    async execute(){
        const response = await document.scan({   TableName: "employees"  })
        .promise()

        const employees = response.Items;

        return employees;
    }
}

export { ListEmployeeUseCase}
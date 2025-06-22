import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const getData = async () : Promise<Payment[]> => {

    return [

        {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },
         {
            id: "728ed521",
            amount : 134,
            status : "processing",
            username : "john Doe",
            email : "johndoe@gmail.com"
        },

        {
            id: "728ed522",
            amount : 124,
            status : "success",
            username : "john Doe",
            email : "janedoe@gmail.com"
        },

        {
            id: "728ed122",
            amount : 189,
            status : "pending",
            username : "Benson Woodside",
            email : "bensonwoodside@gmail.com"
        },

        {
            id: "728ed523",
            amount : 167,
            status : "success",
            username : "Mike Galloway",
            email : "mikegalloway@gmail.com"
        },

        {
            id: "728ed52m",
            amount : 123,
            status : "pending",
            username : "Ethel Waters",
            email : "ethelwaters@gmail.com"
        },

        {
            id: "728ed52n",
            amount : 422,
            status : "failed",
            username : "Grace Edwards",
            email : "graceedwards@gmail.com"
        },

        {
            id: "728ed52o",
            amount : 712,
            status : "success",
            username : "sallie Wong",
            email : "salliewong@gmail.com"
        },

        {
            id: "728ed52k",
            amount : 134,
            status : "success",
            username : "Taofeek Lawal",
            email : "taofeeklawal@gmail.com"
        },

        {
            id: "728ed52s",
            amount : 773,
            status : "pending",
            username : "Philip Loade",
            email : "philiploade@gmail.com"
        },

        {
            id: "728ed52f",
            amount : 113,
            status : "failed",
            username : "Toks Vicks",
            email : "toksvicks@gmail.com"
        },

        {
            id: "728ed53f",
            amount : 114,
            status : "pending",
            username : "Olarenwaju Zainab",
            email : "olarenwajuzainab@gmail.com"
        },

        {
            id: "728ed73f",
            amount : 129,
            status : "processing",
            username : "Olarenwaju Balikis",
            email : "olarenwajubalikis@gmail.com"
        },

        {
            id: "728ed71f",
            amount : 199,
            status : "pending",
            username : "Olaoluwa Lawal",
            email : "olaoluwalawal@gmail.com"
        },

        {
            id: "728ed77f",
            amount : 121,
            status : "success",
            username : "Olusegun Ibrahim",
            email : "olusegunibrahim@gmail.com"
        },
    ]
}


const PaymentsPage = async () => {

    const data = await getData()

  return (

        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
            
        </div>
  )

}

export default PaymentsPage
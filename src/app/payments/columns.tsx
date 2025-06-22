"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type Payment ={

    id : string;
    username : string;
    amount : number;
    email : string;
    status : "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "email",
    header: "Email",
  },
   {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
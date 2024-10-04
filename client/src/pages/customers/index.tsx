import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

const CustomersPage = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Customers" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CustomersPage;
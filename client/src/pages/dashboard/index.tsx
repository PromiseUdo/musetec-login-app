import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import React from "react";

const salesData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "₦45,333",
    description: "+20.1% from last month",
    icon: DollarSign,
  },

  {
    label: "Subscriptions",
    amount: "₦45,333",
    description: "+20.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "₦45,333",
    description: "+20.1% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "₦45,333",
    description: "+20.1% from last month",
    icon: Activity,
  },
];

const customerSalesData: SalesProps[] = [
  {
    name: "Promise Udo",
    email: "info.promiseudo@gmail.com",
    salesAmount: "₦1,4545",
  },
  {
    name: "Promise Udo",
    email: "info.promiseudo@gmail.com",
    salesAmount: "₦1,4545",
  },
  {
    name: "Promise Udo",
    email: "info.promiseudo@gmail.com",
    salesAmount: "₦1,4545",
  },
  {
    name: "Promise Udo",
    email: "info.promiseudo@gmail.com",
    salesAmount: "₦1,4545",
  },
  {
    name: "Promise Udo",
    email: "info.promiseudo@gmail.com",
    salesAmount: "₦1,4545",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {salesData.map((data, idx) => (
          <Card
            key={idx}
            amount={data.amount}
            description={data.description}
            label={data.label}
            icon={data.icon}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold ">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex  justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 23 sales this month
            </p>
          </section>
          {customerSalesData.map((data, idx) => (
            <SalesCard
              key={idx}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
};

export default Dashboard;

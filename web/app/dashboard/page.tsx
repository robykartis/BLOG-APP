import { Card } from "@/app/ui/dashboard/cards";
import { lusitana } from "@/app/ui/fonts";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspense } from "react";
import clsx from "clsx";
import { CardSkeleton, LatestInvoicesSkeleton } from "../ui/skeletons";

const latestInvoices = [
  {
    id: 1,
    name: "John Smith",
    email: "qjw4w@example.com",
    image_url: "/hero-desktop.png",
    amount: 1000,
  },
];

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <Card title="Collected" value={"edsd"} type="collected" />
          <Card title="Pending" value={"edsd"} type="pending" />
          <Card title="Total Invoices" value={"edsd"} type="invoices" />
          <Card title="Total Customers" value={"edsd"} type="customers" />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
              Latest Invoices
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
              {/* NOTE: comment in this code when you get to this point in the course */}

              <div className="bg-white px-6">
                {latestInvoices.map((invoice, i) => {
                  return (
                    <div
                      key={invoice.id}
                      className={clsx(
                        "flex flex-row items-center justify-between py-4",
                        {
                          "border-t": i !== 0,
                        }
                      )}
                    >
                      <div className="flex items-center">
                        <Image
                          src={invoice.image_url}
                          alt={`${invoice.name}'s profile picture`}
                          className="mr-4 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold md:text-base">
                            {invoice.name}
                          </p>
                          <p className="hidden text-sm text-gray-500 sm:block">
                            {invoice.email}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                      >
                        {invoice.amount}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center pb-2 pt-6">
                <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                <h3 className="ml-2 text-sm text-gray-500 ">
                  Updated just now
                </h3>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </main>
  );
}

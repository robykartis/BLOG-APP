import AcmeLogo from "@/app/ui/acme-logo";
import styles from "./home.module.css";
import { lusitana } from "@/app/ui/fonts";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { HomeType } from "../lib/home/data";

export async function getData() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${api}/api/marketing`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}
export default async function Page() {
  const data: HomeType[] = await getData();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-teal-500 p-4 md:h-20">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-teal-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="p-6 flex ">
        {data.map((item, index) => (
          <ul key={index}>
            <li>{item.hero_title}</li>
            <li>{item.hero_description}</li>
            <li>{item.hero_image_one}</li>
            <li>{item.hero_image_two}</li>
            <li>{item.hero_image_three}</li>
            <li>{item.hero_image_four}</li>
            <li>{item.hero_image_six}</li>
            <li>{item.use_app_one_title}</li>
            <li>{item.use_app_one_description}</li>
            <li>{item.use_app_two_title}</li>
            <li>{item.use_app_two_description}</li>
            <li>{item.use_app_three_title}</li>
            <li>{item.use_app_three_description}</li>
            <li>{item.use_app_four_title}</li>
            <li>{item.use_app_four_description}</li>
            <li>{item.section_video_marketing_title}</li>
            <li>{item.section_video_marketing_video}</li>
            <li>{item.section_one_title}</li>
            <li>{item.section_one_description}</li>
            <li>{item.section_one_image}</li>
            <li>{item.section_two_title}</li>
            <li>{item.section_two_description}</li>
            <li>{item.section_two_image}</li>
            <li>{item.section_three_title}</li>
            <li>{item.section_three_description}</li>
            <li>{item.section_three_image}</li>
            <li>{item.section_four_title}</li>
            <li>{item.section_four_description}</li>
            <li>{item.section_four_image}</li>
            <li>{item.section_five_title}</li>
            <li>{item.section_five_description}</li>
            <li>{item.section_five_image}</li>
            <li>{item.section_six_title}</li>
            <li>{item.section_six_description}</li>
            <li>{item.section_six_image}</li>
            <li>{item.created_at}</li>
            <li>{item.updated_at}</li>
          </ul>
        ))}
      </div>
    </main>
  );
}

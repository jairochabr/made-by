import Link from "next/link";
import { ArrowRight } from "./icons/arrow-right";
import { Button } from "./ui/Button";
import { cursor, message } from "@/assets";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-clip bg-black bg-hero py-14 text-white">
      <div className="absolute left-1/2 top-[calc(100%-86px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(51.38%_51.38%_at_50%_50%,_#000_82.2%,_#9560EB_100%)] sm:h-[768px] sm:w-[1536px] sm:py-24 lg:h-[1200px] lg:w-[2400px]"></div>
      <div className="container relative">
        <div className="space-y-8 text-center">
          <div className="">
            <p className="inline-flex gap-1 rounded-lg border border-white/30 bg-text_gradient bg-clip-text px-3 py-1 font-secondary text-sm font-medium text-transparent [-webkit-background-clip:text]">
              Version 2.0 is here
              <Link
                href="/"
                className="group flex items-center gap-1 text-white"
              >
                Read more
                <ArrowRight className="transition duration-300 group-hover:-rotate-45" />
              </Link>
            </p>
          </div>

          <div className="relative inline-flex">
            <h1 className="text-7xl font-bold tracking-tighter sm:text-9xl">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursor}
              alt="..."
              width="200"
              height="200"
              className="absolute right-[476px] top-6 hidden sm:inline lg:right-[492px] lg:top-32"
            />
            <Image
              src={message}
              alt="..."
              width="200"
              height="200"
              className="absolute left-[498px] top-[56px] hidden sm:inline lg:left-[510px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="max-w-[457px] text-xl">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
          </div>
          <Button className="rounded-xl bg-white px-5 py-4 font-medium text-black">
            Get for free
          </Button>
        </div>
      </div>
    </div>
  );
}

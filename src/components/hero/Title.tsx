import { cursor, message } from "@/assets";
import Image from "next/image";

export function Title() {
  return (
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
  );
}

// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";

// type Props = {};

// const InspiringSection = (props: Props) => {
//   return (
//     <section className="w-[80%] mx-auto mt-8">
//       <div className="flex justify-between max-lg:justify-center  ">
//         <div className="">
//           <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
//             Inspiring stories
//           </h2>
//         </div>
//         <div className="hidden lg:block">
//           <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2 uppercase">
//             see all testimonies
//           </Button>
//         </div>
//       </div>

//       <div className="flex mt-5 gap-x-5  overflow-x-scroll items-center  scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100">
//         <Inspirationboxs />
//         <Inspirationboxs />
//         <Inspirationboxs />
//         <Inspirationboxs />
//       </div>
//     </section>
//   );
// };

// export default InspiringSection;

"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <div className="flex justify-between max-lg:justify-center max-md:px-4 mt-28 mb-10  lg:w-[80%] mx-auto">
        <div className="">
          <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
            Inspiring stories
          </h2>
        </div>{" "}
        <div className="hidden lg:block">
          {" "}
          <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2 uppercase">
            see all testimonies //{" "}
          </Button>{" "}
        </div>{" "}
      </div>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  mx-auto lg:w-[80%] overflow-hidden mb-28 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
        </ul>
      </div>
    </>
  );
};

function Inspirationboxs() {
  return (
    <div>
      <div className="w-[300px] h-[400px] p-6 border-orange-400/30 border-[1px] cursor-pointer">
        <div className="rounded-full bg-black h-20 w-20"></div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex items-center gap-x-3 ">
            <p className="capitalize text-texts font-bold">temitope</p>
            <div className="  bg-orange-500/30 text-orange-500 px-1 font-semibold text-base ">
              student
            </div>
          </div>
          <p className="text-texts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            delectus blanditiis doloremque quis aliquam obcaecati quos? Sapiente
            iste nobis cupiditate, optio id facilis quisquam similique quas.
            Praesentium dolorum quae velit.
          </p>
        </div>
      </div>
    </div>
  );
}

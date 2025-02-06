import { Apple, Bell, House, Rocket } from "lucide-react";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { Particles } from "../ui/particles";

const features = [
    {
        Icon: Bell,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <></>
            // <Marquee
            //   pauseOnHover
            //   className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            // >
            //   {files.map((f, idx) => (
            //     <figure
            //       key={idx}
            //       className={cn(
            //         "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            //         "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            //       )}
            //     >
            //       <div className="flex flex-row items-center gap-2">
            //         <div className="flex flex-col">
            //           <figcaption className="text-sm font-medium dark:text-white ">
            //             {f.name}
            //           </figcaption>
            //         </div>
            //       </div>
            //       <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            //     </figure>
            //   ))}
            // </Marquee>
        ),
    },
    {
        Icon: Rocket,
        name: "Notifications",
        description: "Get notified when something happens.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <></>
            // <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: Apple,
        name: "Integrations",
        description: "Supports 100+ integrations and counting.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <></>
            // <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: House,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            // <Calendar
            //   mode="single"
            //   selected={new Date(2022, 4, 11, 0, 0, 0)}
            //   className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            // />
            <></>
        ),
    },
];


export function Features() {
    return (
        <div className="md:max-w-3xl mx-auto pt-10 pb-10 z-10 p-2">
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color='#ffffff'
                refresh
            />
        </div>
    );
}
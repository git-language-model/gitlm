import { Workflow, TableOfContents, MessageSquareMore, Github } from "lucide-react";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { File, Folder, Tree } from "@/components/magicui/file-tree";


const ELEMENTS = [
    {
        id: "1",
        isSelectable: true,
        name: "src",
        children: [
            {
                id: "2",
                isSelectable: true,
                name: "app",
                children: [
                    {
                        id: "3",
                        isSelectable: true,
                        name: "layout.tsx",
                    },
                    {
                        id: "4",
                        isSelectable: true,
                        name: "page.tsx",
                    },
                ],
            },
            {
                id: "5",
                isSelectable: true,
                name: "components",
                children: [
                    {
                        id: "6",
                        isSelectable: true,
                        name: "header.tsx",
                    },
                    {
                        id: "7",
                        isSelectable: true,
                        name: "footer.tsx",
                    },
                ],
            },
            {
                id: "8",
                isSelectable: true,
                name: "lib",
                children: [
                    {
                        id: "9",
                        isSelectable: true,
                        name: "utils.ts",
                    },
                ],
            },
        ],
    },
];

const features = [
    {
        Icon: TableOfContents,
        name: "Takes Files and structure",
        description: "",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute">
                <Tree
                    className="overflow-hidden rounded-md p-2"
                    initialSelectedId="7"
                    initialExpandedItems={[
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                    ]}
                    elements={ELEMENTS}
                >
                    <Folder element="src" value="1">
                        <Folder value="2" element="app">
                            <File value="3">
                                <p>layout.tsx</p>
                            </File>
                            <File value="4">
                                <p>page.tsx</p>
                            </File>
                        </Folder>
                        <Folder value="5" element="components">
                        </Folder>
                        <Folder value="10" element="lib">
                            <File value="11">
                                <p>utils.ts</p>
                            </File>
                        </Folder>
                    </Folder>
                </Tree>
            </div>
        ),
    },
    {
        Icon: Github,
        name: "Github Integration",
        description: "",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://i.ibb.co/KPvgDy9/Screenshot-2025-02-14-085437.png" alt="Github Data" className="w-full h-full object-cover" />
            </div>
        ),
    },
    {
        Icon: Workflow,
        name: "Hypermode + dgraph",
        description: "",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="https://cdn.dribbble.com/userupload/12689015/file/original-418e3580e99461ff76919dc82273dd0b.png?resize=400x0"
                    alt="Hypermode"
                    className="w-full h-full object-cover"
                />
            </div>

        ),
    },
    {
        Icon: MessageSquareMore,
        name: "Chat with Repo",
        description: "",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://i.ibb.co/F4gsBrWR/Screenshot-2025-02-16-184412.png" alt="chat" className="w-full h-full object-cover" />

            </div>
        ),
    },
];


export function Features() {
    return (
        <div className="w-full">
            <div className="md:max-w-3xl mx-auto pt-10 pb-10 z-10 p-6">
                <BentoGrid>
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </div>

    );
}
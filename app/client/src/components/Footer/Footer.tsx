import ModeToggle from "../Theme/mode-toggle";

export function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0 md:gap-x-12 mx-auto">
                <p className="text-gray-600">&copy; 2025 GitLM. All rights reserved.</p>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Legal
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li className="-mt-6" >
                        <ModeToggle />
                    </li>
                </ul>
            </div>

        </footer>
    );
}
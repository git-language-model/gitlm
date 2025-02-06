import ModeToggle from "../Theme/mode-toggle";

export function Footer() {
    return (
        <div className="flex flex-row justify-center items-center p-4 gap-4">
            <span>© Gitlm 2025</span>
            <div className="-mt-6" ><ModeToggle /></div>
        </div>
    );
}
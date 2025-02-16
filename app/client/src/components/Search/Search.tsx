import { ChevronLeft, ChevronRight, FolderGit2, GlobeLock, Plus, RotateCw, Share } from "lucide-react";
// import { Particles } from "../ui/particles";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  // const resolvedTheme = localStorage.getItem("theme") || "dark";
  // const [color, setColor] = useState("#ffffff");

  // Effect to handle theme-based color change for Particles
  // useEffect(() => {
  //   setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  // }, [resolvedTheme]);

  // Navigate on "Explore" button click
  const handleExploreClick = () => {
    if (user) {
      navigate(`/${user}`); // Redirect to user page with the entered username
    }
  };

  return (
    <div className="relative p-2 pb-10">
      <div className="mx-auto border rounded-md md:max-w-3xl z-10">
        <div className="bg-muted/40 p-1 flex flex-row items-center justify-between border-b">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row gap-0.5">
              <div className="h-2 w-2 bg-red-900 rounded-full"></div>
              <div className="h-2 w-2 bg-yellow-900 rounded-full"></div>
              <div className="h-2 w-2 bg-green-900 rounded-full"></div>
            </div>
            <div className="flex flex-row">
              <ChevronLeft className="h-3 w-3" />
              <ChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div className="w-[30%] bg-muted flex items-center justify-between rounded-md p-1">
            <div className="flex flex-row gap-1 items-center">
              <GlobeLock className="h-2 w-2" />
              <span className="text-[8px]">gitlm.vercel.app</span>
            </div>
            <RotateCw className="h-2 w-2" />
          </div>
          <div className="flex flex-row gap-1">
            <Share className="h-3 w-3" />
            <Plus className="h-3 w-3" />
          </div>
        </div>

        <div className="flex items-center justify-center p-4 flex-col pt-10 pb-10">
          <div className="flex w-full mx-auto items-center flex-col max-w-sm border rounded-lg pt-10 pb-10 bg-muted/50">
            <FolderGit2 className="h-10 w-10" />
            <span className="mb-6 mt-6">Start with your own Github Repository</span>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Enter GitHub username"
                value={user}
                onChange={(e) => setUser(e.target.value)} // Handle user input change
              />
              <Button size="sm" onClick={handleExploreClick}>Explore</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particles effect background */}
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      /> */}
    </div>
  );
}

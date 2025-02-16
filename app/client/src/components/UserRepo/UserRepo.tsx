import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchGitHubUser, callLLM } from "@/lib/actions";
import { UserDetails } from "./UserDetails";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

interface GitHubUser {
    login: string;
}

interface GitHubRepository {
    name: string;
    description: string;
    size: string;
    full_name: string;
}

const UserRepo = () => {
    const navigate = useNavigate();
    const { username } = useParams();
    const [githubId, setGithubId] = useState(username || "");
    const [selectedRepo, setSelectedRepo] = useState<GitHubRepository | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [followers, setFollowers] = useState<GitHubUser[]>([]);
    const [following, setFollowing] = useState<GitHubUser[]>([]);
    const [repos, setRepos] = useState<GitHubRepository[]>([]);
    const [starredRepos, setStarredRepos] = useState<GitHubRepository[]>([]);
    const [loading, setLoading] = useState(false);

    const handleBack = () => {
        navigate("/");
    };

    useEffect(() => {
        
        if (githubId) {
            handleSearch(githubId);
        }
    }, [githubId]);

    const handleSearch = async (id: string) => {
        try {
            const userConnections = await fetchGitHubUser(id);
            setFollowers(userConnections.data.userDetails.followers);
            setFollowing(userConnections.data.userDetails.following);
            setRepos(userConnections.data.userDetails.repositories);
            setStarredRepos(userConnections.data.userDetails.starredRepositories);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const handleSendMessage = async () => {
        if (!newMessage.trim()) return;
        setLoading(true);
        if (selectedRepo) {
            const url = `https://github.com/${selectedRepo.full_name}`;
            const answer = await callLLM(url, newMessage);
            setMessages((prev) => [
                ...prev,
                { role: "user", content: newMessage },
                { role: "assistant", content: answer },
            ]);
        }
        setLoading(false);
        setNewMessage("");
    };

    return (
        <div>
            <UserDetails
                githubId={githubId}
                onBack={handleBack}
                onUserClick={(newUserId) => {
                    setGithubId(newUserId)
                    handleSearch(newUserId)
                }}
                followers={followers}
                following={following}
                repos={repos}
                starredRepos={starredRepos}
                setChatRepo={(repo) =>
                    setSelectedRepo(repo)
                }
            />
            <div className="p-2">
                <Dialog open={!!selectedRepo} onOpenChange={() => setSelectedRepo(null)}>
                    <DialogContent className="sm:max-w-[700px] w-[90%] h-[80vh] bg-background flex flex-col">
                        <DialogTitle className="text-lg font-semibold">
                            Chat with {selectedRepo?.name}
                        </DialogTitle>
                        <div className="flex-1 flex flex-col min-h-0">
                            <ScrollArea className="flex-1 pr-4">
                                <div className="space-y-4 pb-4">
                                    {messages.map((message, index) => (
                                        <div key={index} className={message.role === "user" ? "text-right" : "text-left"}>
                                            <div
                                                className={`inline-block pl-1 pr-1 rounded-lg max-w-fit ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                                                    }`}
                                            >
                                                {message.role === "user" ? (
                                                    <div className="break-words">{message.content}</div>
                                                ) : (
                                                    <ReactMarkdown
                                                        className="markdown prose dark:prose-invert max-w-none break-words"
                                                        components={{
                                                            p: ({ children }) => <p className="mb-2">{children}</p>,
                                                            h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
                                                            h2: ({ children }) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
                                                            h3: ({ children }) => <h3 className="text-base font-bold mb-2">{children}</h3>,
                                                            ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                                            ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                                            li: ({ children }) => <li className="mb-1">{children}</li>,
                                                            code: ({ children }) => (
                                                                <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">{children}</code>
                                                            ),
                                                            pre: ({ children }) => (
                                                                <pre className="bg-muted-foreground/20 p-2 rounded-lg mb-2 overflow-x-auto">
                                                                    {children}
                                                                </pre>
                                                            ),
                                                        }}
                                                    >
                                                        {message.content}
                                                    </ReactMarkdown>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {loading && (
                                        <div className="flex justify-center">
                                            <Loader className="h-8 w-8 animate-spin" />
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                            <div className="flex items-center gap-2 pt-4 mt-auto">
                                <Input
                                    placeholder="Ask about this repository..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                />
                                <Button onClick={handleSendMessage} disabled={loading}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default UserRepo;

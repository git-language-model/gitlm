import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

interface UserDetailsProps {
  githubId: string
  onBack: () => void
  onUserClick: (newUserId: string) => void
  followers: { login: string }[]
  following: { login: string }[]
  repos: { name: string; description: string; size: string; full_name: string }[]
  starredRepos: { name: string; description: string; size: string; full_name: string }[]
  setChatRepo: (repo: { name: string; description: string; size: string; full_name: string }) => void
}

export function UserDetails({
  githubId,
  onBack,
  onUserClick,
  followers,
  following,
  repos,
  starredRepos,
  setChatRepo,
}: UserDetailsProps) {
  console.log(starredRepos)
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold">Github Username: {githubId}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-6">
          {/* Left Section - Followers/Following Tabs */}
          <Card className="p-4">
            <Tabs defaultValue="followers">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="followers">Followers</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
              <div className="h-[75vh] overflow-y-auto">
                <TabsContent value="followers" className="mt-4 space-y-2">
                  {followers.map((user) => (
                    <Card
                      key={user.login}
                      className="p-3 hover:bg-accent transition-colors cursor-pointer"
                      onClick={() => onUserClick(user.login)}
                    >
                      <h4 className="font-medium">{user.login}</h4>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="following" className="mt-4 space-y-2">
                  {following.map((user) => (
                    <Card
                      key={user.login}
                      className="p-3 hover:bg-accent transition-colors cursor-pointer"
                      onClick={() => onUserClick(user.login)}
                    >
                      <h4 className="font-medium">{user.login}</h4>
                    </Card>
                  ))}
                </TabsContent>
              </div>
              
            </Tabs>
          </Card>

          {/* Right Section - Repositories */}
          <div className="space-y-6">
            <Card className="p-6 ">
              <h3 className="text-xl font-semibold mb-4">{githubId} Repositories</h3>
              <div className="grid gap-4 h-[75vh] overflow-y-auto">
                {repos.map((repo) => (
                  <Card
                    key={repo.name}
                    className="p-4 hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatRepo(repo)}
                  >
                    <h4 className="font-bold mb-2">{repo.name}</h4>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {repo.description !== "ul" ? repo.description : ""}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">Size: {repo.size}</p>
                  </Card>
                ))}
              </div>
            </Card>

            {/* <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Starred Repositories</h3>
              <div className="grid gap-4">
                {starredRepos.map((repo) => (
                  <Card
                    key={repo.name}
                    className="p-4 hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatRepo(repo)}
                  >
                    <h4 className="font-bold mb-2">{repo.name}</h4>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {repo.description !== "ul" ? repo.description : ""}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">Size: {repo.size}</p>
                  </Card>
                ))}
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}
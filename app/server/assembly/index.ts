import { getUserFromDgraph, storeUserInDgraph  } from "./db_helpers";
import { getFollowers, getFollowing, getRepositories, getStarredRepositories, ConnectionsData, getContext } from "./api_calls";
import { generateText } from "./model_calls";


export function getUserDetails(name: string): ConnectionsData {  
  
  const followers = getFollowers(name)
  const following = getFollowing(name)
  const repositories = getRepositories(name)
  const starredRepositories = getStarredRepositories(name)
  
  return {
      followers: followers,
      following: following,
      repositories: repositories,
      starredRepositories: starredRepositories
  }
}


export function callOpenAIWithContext( url:string, prompt: string,): string {
  const instruction = getContext(url);
  return generateText(instruction, prompt)
}



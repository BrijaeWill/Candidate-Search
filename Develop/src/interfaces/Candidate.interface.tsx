// TODO: Create an interface for the Candidate objects returned by the API
interface CandidateInterface {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }
  export default CandidateInterface;
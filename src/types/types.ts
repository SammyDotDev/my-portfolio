export interface WorkItem {
    id: number;
    title: string;
    description: string;
    image: string;
    subImages: string[];
    techStack: string[];
    githubLink: string;
    liveLink: string | null;
    featured?: boolean;
}

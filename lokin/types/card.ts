
interface SocialCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    topTitle?: string; 
    onLike: () => void;
    onShare: () => void;
    onSave: () => void;
    likeCount: number;
    isLiked?: boolean;
}

export default SocialCardProps
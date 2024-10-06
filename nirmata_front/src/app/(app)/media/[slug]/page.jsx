import PhotoGallery from "@/components/media/photo-gallery";
import ProjectVideos from "@/components/media/project-videos";

export const mediaLinks = [
  {
    id: 1,
    label: "Photos gallery",
    link: "photo-gallery",
  },
  {
    id: 2,
    label: "Project videos",
    link: "project-videos",
  },
  {
    id: 3,
    label: "Facebook (Post and Videos)",
    link: "facebook-post-videos",
  },
  {
    id: 4,
    label: "Instagram (Photos and Posts)",
    link: "instagram-photos-posts",
  },
  {
    id: 5,
    label: "YouTube",
    link: "YouTube-Link",
  },
];

export default function SlugPage({ params }) {
  switch (params.slug) {
    case "photo-gallery":
      return <PhotoGallery />;
    case "project-videos":
      return <ProjectVideos />;
    default:
      return params.slug;
  }
}

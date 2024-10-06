import styles from "./css/project-videos.module.css";

const youtubeVideos = [
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
  {
    title: "The Power and Beauty of Construction Sites: A Cinematic Reel",
    link: "https://youtu.be/4BzjUq921Y4?si=ZhMS2iFMTITLb5-z",
  },
];

export default function ProjectVideos() {
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section className={`container ${styles.container}`}>
      <div className="title">
        <h1>Our Project Videos</h1>
        <p>
          Explore our collection of construction site videos showcasing the power and beauty of our projects.
        </p>
      </div>
      <div className={styles.videoGrid}>
        {youtubeVideos.map((video, index) => (
          <div key={index} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(video.link)}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className={styles.videoTitle}>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

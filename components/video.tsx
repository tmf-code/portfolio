export type VideoProps = {
  srcURL: string;
  title: string;
};

export const Video = ({ srcURL, title }: VideoProps): React.ReactElement<VideoProps> => {
  return (
    <div className="video">
      <iframe
        width={'100%'}
        height={'600vw'}
        src={srcURL}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

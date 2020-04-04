export type VideoProps = {
  srcURL: string;
  title: string;
};

export const Video = ({ srcURL, title }: VideoProps): React.ReactElement<VideoProps> => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }} className="video">
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src={srcURL}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

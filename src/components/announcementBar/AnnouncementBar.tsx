interface IAnnouncementBarProps {
  text: string;
}

const AnnouncementBar = ({ text }: IAnnouncementBarProps) => {
  return <div>{text}</div>;
};

export default AnnouncementBar;

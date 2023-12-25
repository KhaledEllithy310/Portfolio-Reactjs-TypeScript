interface ISecondaryTitleProps {
  title: string;
}
const SecondaryTitle = ({ title }: ISecondaryTitleProps) => {
  return <p className="capitalize text-2xl text-primary py-4">{title}</p>;
};

export default SecondaryTitle;

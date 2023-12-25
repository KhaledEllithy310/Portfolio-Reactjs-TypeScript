interface IImageProps {
  imageURL: string;
  className: string;
}
const Image = ({ imageURL, className }: IImageProps) => {
  return <img src={imageURL} alt="imagePortfolio" className={className} />;
};

export default Image;

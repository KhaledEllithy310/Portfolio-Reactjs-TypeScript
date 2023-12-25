import wave from "../../assets/images/wave-haikei (1).svg";

interface IBackWaveProps {}
// eslint-disable-next-line no-empty-pattern
const BackWave = ({}: IBackWaveProps) => {
  return <img src={wave} alt="" className="w-full absolute top-0 -z-10" />;
};

export default BackWave;

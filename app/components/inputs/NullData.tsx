import { Teko } from "next/font/google";

interface NullDataProps {
  title: string;
}

const teko = Teko({ subsets: ["latin"], weight: ["500"] });

const NullData: React.FC<NullDataProps> = ({ title }) => {
  return (
    <div className="text-orange-400 w-full h-[50vh] flex items-center justify-center text-3xl md:text-4xl p-4">
      <p className={teko.className}>{title}</p>
    </div>
  );
};
export default NullData;

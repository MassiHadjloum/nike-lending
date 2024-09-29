import Image from "next/image";

interface ShoeCardProps {
  imgUrl: string;
  imgThumbnail: string;
  changeBigShoeImage: (imgUrl: string) => void;
  bigShoeImg: string;
}

const ShoeCard = ({ imgUrl, imgThumbnail, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
    const handleClick = () => {
      if (bigShoeImg !== imgUrl) {
        changeBigShoeImage(imgUrl);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgUrl
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <Image
            src={imgThumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
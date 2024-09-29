import Image from "next/image";


interface ButtonProps {
  label?: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <Image src={iconURL!} width={20} height={20} alt="arrow-icon" className="rounded-full ml-2" />
      )} 
    </button>
  )
}

export default Button

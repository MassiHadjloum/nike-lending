import Image from "next/image";


interface ButtonProps {
  label: string;
  iconURL: string;
}

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none text-white
    border-coral-red bg-coral-red rounded-full font-semibold">
      {label}
      <Image src={iconURL} width={20} height={20} alt="arrow-icon" className="rounded-full ml-2" />
    </button>
  )
}

export default Button

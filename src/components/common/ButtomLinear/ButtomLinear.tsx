interface Props {
  text: string;
}

export default function ButtomLinear({ text }: Props) {
  return (
    <>
      <a href="#leads-b125aa7c11be23b21ed9">
        <button className=" flex justify-center items-center h-12 bg-buttom-color font-ubuntu text-white font-bold py-4 px-9 rounded-lg text-base max-md:w-auto max-md:py-0 max-md:text-[14px] ">
          {text}
        </button>
      </a>
    </>
  );
}

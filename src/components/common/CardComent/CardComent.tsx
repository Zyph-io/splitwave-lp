interface Props {
  data: CardCommentData;
}

interface CardCommentData {
  title: string;
  text: string;
  stars: string;
  profile: string;
  verification: string;
}

export default function CardComent({ data }: Props) {
  return (
    <>
      <div className="max-w-[530px] bg-[#222222] flex flex-col justify-center items-center p-10 mx-auto rounded-xl  max-md:mx-2 max-md:p-5">
        <div className="">
          {data.profile && (
            <img
              src={data.profile}
              alt="Usuário"
              className="max-w-[59px] max-md:w-[30px]"
            />
          )}
          {(data.verification || data.stars) && (
            <div className="flex my-6 max-md:my-1">
              {data.stars && (
                <img
                  src={data.stars}
                  alt=""
                  className="max-w-[101px]  mr-1 max-md:w-[50px]"
                />
              )}
              {data.verification && (
                <img src={data.verification} alt="" className="max-w-[14px]" />
              )}
            </div>
          )}
          {data.title && (
            <p className="font-inter font-bold text-base max-md:text-xs">
              {data.title}
            </p>
          )}
          {data.text && (
            <p className="font-inter font-semibold text-base max-md:text-xs">
              {data.text}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

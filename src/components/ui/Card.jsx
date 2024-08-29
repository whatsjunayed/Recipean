import Link from 'next/link';

const Card = ({ allitem }) => {
    
    
  return (
    <>
      <Link href={`recipe-list/${allitem.id}`}>
        <div className=" group w-full cursor-pointer shadow-[5px_5px_10px_black] rounded-xl overflow-hidden">
          <div className=" overflow-hidden">
            <img
              src={allitem.image}
              alt=""
              className=" hover:scale-110 ease-out duration-500"
            />
          </div>

          <div className='h-32 flex flex-col justify-between'>
            <div>
              <h1 className="text-center text-xl pt-2 font-semibold">
                {allitem.name}
              </h1>
            </div>
            <div className="flex justify-between px-5 py-4 font-semibold opacity-60 duration-500 group-hover:opacity-70">
              <div>Rating: {allitem.rating}</div>
              <div>{allitem.cuisine}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card
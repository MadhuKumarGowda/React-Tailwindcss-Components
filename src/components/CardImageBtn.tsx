const CardImageBtn = ({ title, imgSrc, children, btnLabel, btnLink }) => {
  return (
    <div className="border p-4 shadow-lg w-60 sm:w-72 md:w-96 mx-auto mt-5 rounded-lg sm:m-4">
      <img src={imgSrc} alt="image " className="mb-3 rounded-lg" />
      <h3 className="font-bold mb-3"> {title}</h3>
      <div className="test-gray-500 text-sm mb-3">
        <p className="text-wrap text-left">{children}</p>
      </div>
      <div className="text-center">
        <a
          className="bg-indigo-800 text-white px-4 py-2 inline-block rounded-lg"
          href={btnLink}
        >
          {btnLabel}
        </a>
      </div>
    </div>
  );
};

export default CardImageBtn;

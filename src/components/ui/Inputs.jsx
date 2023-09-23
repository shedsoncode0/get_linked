export const PrimaryInput = ({ type, value, onChange, id, placeholder }) => {
  return (
    <div className="w-full h-fit">
      <input
        type={type}
        id={id}
        className="w-full py-3 px-6 bg-transparent border-[1px] border-white outline-none mb-[42px] rounded font-montserrat text-base text-white placeholder:text-gray-200"
        value={value}
        onChange={onChange}
        placeholder={typeof placeholder !== "undefined" ? placeholder : ""}
      />
    </div>
  );
};

export const PrimaryTextbox = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      id={id}
      className="w-full h-[119px] py-3 px-6 resize-none bg-transparent border-[1px] border-white outline-none rounded font-montserrat text-base text-white placeholder:text-gray-200"
      value={value}
      onChange={onChange}
      placeholder={typeof placeholder !== "undefined" ? placeholder : ""}
    ></textarea>
  );
};

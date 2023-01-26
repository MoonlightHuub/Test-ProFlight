import "../index.css";

function Button({ id, setSelected, selected }) {

  const handleclick = () => {
    if (id === 0) {
      setSelected(selected - 1);
    } else {
      setSelected(selected + 1);
    }
  };

  return (
    <>
      <button
        className="bg-gradient-to-r from-[#00B0CE] text-white w-[64px] h-[64px] text-3xl rounded-full"
        onClick={handleclick}
      >
        {id === 0 ? '<=' : '=>'}
      </button>
    </>
  );
}

export default Button;

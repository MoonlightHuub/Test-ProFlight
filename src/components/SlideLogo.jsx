import logos from "../data/index";
import Button from "./Buttons";
import { useEffect, useState } from "react";

function SlideLogo() {
  const [selected, setSelected] = useState(0);

 useEffect(() => {
  if (selected > 3) {
    setSelected(0);
  }

  if (selected < 0) {
    setSelected(3);
  }
 })

  return (
    <>
      <div className="flex flex-row bg-slate-800 m-2 justify-around h-[300px] items-center rounded-[30px]">
        <Button id={0} setSelected={setSelected} selected={selected} />
        {logos.map((logo) => (
          <div
            key={logo.id}
            className={`h-[240px] w-[240px] p-4 rounded-[30px]`}
          >
            <img
              src={logo.image}
              alt="ProFlight"
              className={`h-[216px] w-[216px] rounded-[30px] ${
                logo.id === selected ? "opacity-[1]" : "opacity-[.2]"
              } transition-[.2s] `}
            />
          </div>
        ))}
        <Button id={1} setSelected={setSelected} selected={selected} />
      </div>
    </>
  );
}

export default SlideLogo;

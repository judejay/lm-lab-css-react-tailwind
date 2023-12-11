import { propertyData } from "../data/data";
import { Card } from "./card";

export const PropertiesDisplay = () => {
  console.log(propertyData.length);
  return (
    <>
      <ul className="flex flex-col justify-center items-center">
        {propertyData.map((p) => (
          <Card property={p} />
        ))}
      </ul>
    </>
  );
};

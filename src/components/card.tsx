export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <>
      <div className=" container flex flex-row m-2 shadow place-content-between ">
        <div className="m-2">
          <h4 className="text-xl">{title}</h4>
          <p className="text-base">{location}</p>
          <p className="text-base">{country}</p>
          <p className="text-base">{property_type}</p>
          <p className="text-base">{description}</p>
          <p className="text-base">{bedroom_count}</p>
          <p className="text-base">{bathroom_count}</p>
          <p className="text-base">{price}</p>
        </div>
        <div>
          <img className="m-2 max-h-96" src={image_urls[0]} />
        </div>
      </div>
    </>
  );
};

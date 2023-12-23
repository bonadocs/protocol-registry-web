import React from "react";
import Image from "next/image";
import { Option } from "../../app/types";

type Index = {
    index: string | number;
};

type RegistryWrapperListContainerItemProps = Option & Index;

export const RegistryWrapperListContainerItem: React.FC<
    RegistryWrapperListContainerItemProps
> = ({ index, image, tag }: RegistryWrapperListContainerItemProps) => {
    // Component logic goes here

    return (
        <div
            key={index}
            className="bonadocs__search__registry__content__list__item"
        >
            <div>
                <Image
                    className="bonadocs__search__registry__content__list__item__icon"
                    width={24}
                    height={24}
                    alt="Protocol image"
                    src={image}
                />
                <h3>Uniswap v1 Protocol</h3>
            </div>
            <h2 className="bonadocs__search__registry__content__list__item__id">
                Project ID
            </h2>
            <div>
                <h5 className="bonadocs__search__registry__content__list__item__tag">{`"${tag}"`}</h5>
                <Image
                    width={16}
                    height={16}
                    className="bonadocs__search__registry__content__list__item__icon"
                    alt="Copy icon"
                    src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703350537/Copy_Icon_gbt3mh.svg"
                />
            </div>
        </div>
    );
};

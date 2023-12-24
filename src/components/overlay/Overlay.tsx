import React from "react";
import Image from "next/image";
import { Button } from "../button/Button";

interface OverlayProps {
  closeOverlay: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ closeOverlay }) => {
  return (
    <>
      <div onClick={closeOverlay} className="bonadocs__search__overlay2"></div>
      <div className="bonadocs__search__overlay">
        <div className="bonadocs__search__overlay__wrapper">
          <Button
            onClick={closeOverlay}
            icon={
              <svg
                className="bonadocs__search__overlay__wrapper__button__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97495 15.6833C7.81662 15.6833 7.65828 15.625 7.53328 15.5L2.47495 10.4417C2.23328 10.2 2.23328 9.8 2.47495 9.55833L7.53328 4.5C7.77495 4.25833 8.17495 4.25833 8.41662 4.5C8.65828 4.74167 8.65828 5.14167 8.41662 5.38333L3.79995 10L8.41662 14.6167C8.65828 14.8583 8.65828 15.2583 8.41662 15.5C8.29995 15.625 8.13328 15.6833 7.97495 15.6833Z"
                  fill="#95A8C0"
                />
                <path
                  d="M17.0833 10.625H3.05835C2.71668 10.625 2.43335 10.3417 2.43335 10C2.43335 9.65833 2.71668 9.375 3.05835 9.375H17.0833C17.425 9.375 17.7083 9.65833 17.7083 10C17.7083 10.3417 17.425 10.625 17.0833 10.625Z"
                  fill="#95A8C0"
                />
              </svg>
            }
            className="bonadocs__search__overlay__wrapper__button"
          >
            Back to Projects
          </Button>
          <div className="bonadocs__search__overlay__wrapper__header">
            <Image
              className="bonadocs__search__overlay__wrapper__header__logo"
              width={56}
              height={56}
              alt="protocol logo"
              src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703348572/uni-logo_xhlgp5.svg"
            />
            <div>
              <h3 className="bonadocs__search__overlay__wrapper__header__title">
                Uniswap v1 Protocol
              </h3>
              <div className="bonadocs__search__overlay__wrapper__header__tag">
                <span className="bonadocs__search__overlay__wrapper__header__tag__name">
                  uniswap-v1-protocol
                </span>
                <Image
                  width={16}
                  height={16}
                  className="bonadocs__search__registry__content__list__item__icon"
                  alt="Copy icon"
                  src="https://res.cloudinary.com/dfkuxnesz/image/upload/v1703350537/Copy_Icon_gbt3mh.svg"
                />
              </div>
            </div>
            <Button
              icon={
                <svg
                  className="bonadocs__search__overlay__wrapper__button__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 11L21.2 2.8"
                    stroke="#0F141B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6.8V2H17.2"
                    stroke="#0F141B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                    stroke="#0F141B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              className="bonadocs__search__overlay__wrapper__button__action"
            >
              Open on Bonadocs
            </Button>
          </div>
          <h3 className="bonadocs__search__overlay__wrapper__subheader">
            The Uniswap V1 Smart Contracts
          </h3>
          <p className="bonadocs__search__overlay__wrapper__content">
            Uniswap V1 is the first version of the protocol, launched in
            November 2018 at Devcon 4. Because of its permissionless nature, it
            will exist for as long as Ethereum does. Designed with simplicity in
            mind, the Uniswap protocol provides an interface for seamless
            exchange of ERC20 tokens on Ethereum. By eliminating unnecessary
            forms of rent extraction and middlemen it allows faster, more
            efficient exchange. Where it makes tradeoffs, decentralization,
            censorship resistance, and security are prioritized. Uniswap is open
            source and functions as a public good. There is no central token or
            platform fee. No special treatment is given to early investors,
            adopters, or developers. Token listing is open and free. All smart
            contract functions are public and all upgrades are opt-in. This site
            will serve as a project overview for Uniswap - explaining how it
            works, how to use it, and how to build on top of it. These docs are
            actively being worked on and more information will be added on an
            ongoing basis.
          </p>
          <h3 className="bonadocs__search__overlay__wrapper__subheader">
            Resources
          </h3>
          <p className="bonadocs__search__overlay__wrapper__resources">
            Website
          </p>
        </div>
      </div>
    </>
  );
};

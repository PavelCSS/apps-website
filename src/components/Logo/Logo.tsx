import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@toxic/navigation";

import { indexRoute } from "../../routes";
import { LogoVariant } from "../../enums";
import logoImage from "./logo.svg";
import logo2Image from "./logo2.svg";

type LogoProps = {
  variant?: LogoVariant;
  height?: number;
  width?: number;
};

export const Logo = styled<FC<LogoProps>>(
  ({ variant = LogoVariant.Header, height, width, ...props }) => (
    <Link {...props} route={indexRoute}>
      <img
        src={variant === LogoVariant.Page ? logoImage : logo2Image}
        alt={"ZiBY Apps"}
        width={width}
        style={{ maxHeight: height || variant === LogoVariant.Page ? 300 : 56 }}
      />
    </Link>
  )
)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 56px;
  line-height: 1;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
    text-decoration: none;
  }
`;

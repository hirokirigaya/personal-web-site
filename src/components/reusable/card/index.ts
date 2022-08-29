import styled from "styled-components";
import {
  color,
  ColorProps,
  height,
  HeightProps,
  width,
  WidthProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
} from "styled-system";

type IProps = {dropShadowColor?: string} & HeightProps & WidthProps & ColorProps & TypographyProps & SpaceProps & LayoutProps & ShadowProps;

export const Card = styled.div<IProps>`
  padding: 2rem;
  max-width: 500px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.default.black};
  ${color}
  ${height}
  ${width}
  ${typography}
  ${space}
  ${layout}
  ${shadow}
`;

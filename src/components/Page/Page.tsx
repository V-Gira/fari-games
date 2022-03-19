import Box, { BoxProps } from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

export function Page(props: {
  title: string | null;
  description: string | null;
  image?: string;
  children: React.ReactNode;
  box?: BoxProps;
  container?: ContainerProps;
}) {
  const location = useLocation();
  const title = props.title
    ? `${props.title} - Singularity`
    : "Singularity - A campaign for Minutes to Midnight";
  const description =
    props.description ||
    "All the best TTRPG SRDs available right here on Fari Games.";
  const image =
    props.image || "https://gyazo.com/b0feeda1f7d9486bd761e27eb468a1f3.png";
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:image",
            content: image,
          },
          {
            property: "og:url",
            content: `https://fari.games${location.pathname}`,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]}
      >
        <title>{title}</title>
      </Helmet>
      <Box {...props.box}>
        {props.container ? (
          <Container {...props.container}>{props.children}</Container>
        ) : (
          props.children
        )}
      </Box>
    </>
  );
}

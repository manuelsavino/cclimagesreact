import React from "react";
import { StyledCardGrid, Card, Heading } from "./styledCardGrid";
import hero from "./icons/hero.svg";
import c from "./icons/c.svg";
import b from "./icons/b.svg";
import sticky from "./icons/sticky.svg";
import deals from "./icons/deals.svg";
import search from "./icons/search.svg";

const items = [
  { icon: hero, name: "Desktop Heros", path: "/desktopheros" },
  { icon: b, name: "Desktop B-Tiles", path: "/desktopbtiles" },
  { icon: c, name: "Desktop C Tiles", path: "/desktopctile" },
  { icon: deals, name: "Cruise Deals", path: "/cruisedeals" },
  { icon: hero, name: "Mobile Heros", path: "/mobileheros" },
  { icon: b, name: "Mobile B-Tiles", path: "/mobilebtiles" },
  { icon: sticky, name: "Mobile Sticky", path: "/mobilesticky" },
  { icon: search, name: "Search Banners", path: "/searchbanners" },
];

export default function CardGridComp() {
  return (
    <>
      <Heading>
        <span>CATEGORIES</span>
      </Heading>
      <StyledCardGrid>
        {items.map((item) => (
          <Card key={item.name} to={item.path}>
            <img src={item.icon} />
            <h2>{item.name}</h2>
          </Card>
        ))}
      </StyledCardGrid>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: "Uncut sticker sheet ˚⊹♡",
    imageUrl: "https://pbs.twimg.com/media/GzshmF6WoAADD-b?format=png&name=small",
    link: "Uncut sticker sheet"
  },
  {
    id: 1,
    title: "Handmade Earrings ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/GzshpdYWsAAqR-H?format=png&name=small",
      link: "Handmade Earrings",
  },

      {
    id: 2,
    title: "Glass Beaded Bracelet ˚⋆𐙚｡",
    imageUrl: "https://pbs.twimg.com/media/GzshygZXkAE-yfa?format=png&name=small",
      link: "Glass Beaded Bracelet"
  },
      {
    id: 5,
    title: "Keychains ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/Gzshz4LWAAAj6mB?format=png&name=small",
     link: "Keychains"
  },
        {
    id: 5,
    title: "Necklaces ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsiTTGWQAE28GI?format=png&name=small",
     link: "Necklaces"
  },
        {
    id: 5,
    title: "Under 550  Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsiZPRWAAEBu9C?format=png&name=small",
     link: "Under 550 Bracelets"
  },
          {
    id: 5,
    title: "Beaded bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsieEJWEAA70gk?format=png&name=small",
     link: "Beaded bracelets"
  },
            {
    id: 5,
    title: "Phone Charms ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsijyJW8AAuXMa?format=png&name=small",
     link: "Phone Charms"
  },
            {
    id: 5,
    title: "Under 800 bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/Gzsi9DDW0AAy5dr?format=png&name=small",
     link: "Under 800 bracelets"
  },
              {
    id: 5,
    title: "Clay Bead Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsjEeoWoAAWKqA?format=png&name=small",
     link: "Clay Bead Bracelets"
  },
                {
    id: 5,
    title: "Charm Earrings ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsjMBgWYAAMUSV?format=png&name=small",
     link: "Charm Earrings"
  },
                  {
    id: 5,
    title: "Pair Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsjQJPXAAAgBE0?format=png&name=900x900",
     link: "Pair Bracelets"
  },
                    {
    id: 5,
    title: "Y2K ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GzsjsPmXIAAULvd?format=jpg&name=small",
     link: "Y2K"
  },
                     {
    id: 5,
    title: "Stainless Steel ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/Gzsjv3YXkAAtoO6?format=png&name=small",
     link: "Stainless Steel"
  },
                    {
    id: 5,
    title: "Chokers ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/Gzsjzf2WsAAXRvR?format=png&name=small",
     link: "Chokers "
  },
                    {
    id: 5,
    title: "Charm Pendants ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/Gzsj6aDWQAAizfg?format=png&name=small",
     link: "Charm Pendants"
  },
];


function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;

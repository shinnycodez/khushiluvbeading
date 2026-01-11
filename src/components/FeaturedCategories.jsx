import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
        {
    id: 2,
    title: "More Bracelets ˚⋆𐙚｡",
    imageUrl: "https://pbs.twimg.com/media/G-YYD6JbsAAwauq?format=jpg&name=large",
      link: "More Braceletst"
  },
              {
    id: 5,
    title: "Crystal Bead Bracelet ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-195vW4AEytv5?format=png&name=900x900",
     link: "Crystal Bead Bracelet"
  },
              {
    id: 6,
    title: "Phone Charms ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YYPzhbkAAMcTN?format=jpg&name=large",
     link: "Phone Charms"
  },
    {
    id: 3,
    title: "Uncut sticker sheet ˚⊹♡",
    imageUrl: "https://pbs.twimg.com/media/GzshmF6WoAADD-b?format=png&name=small",
    link: "Uncut sticker sheet"
  },
  {
    id: 1,
    title: "Earrings ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/G-YZgyAa8AAQOnN?format=jpg&name=small",
      link: "Earrings",
  },
          {
    id: 1,
    title: "Stainless Steel Earrings ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/G-YZmeybYAEMaP7?format=jpg&name=small",
      link: "Stainless Steel Earrings",
  },
          {
    id: 1,
    title: "Stainless Steel Rings ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/G-YZigtbwAAtolt?format=jpg&name=small",
      link: "Stainless Steel Rings",
  },
      {
    id: 5,
    title: "Keychains ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/G-YYMKxaAAAkgl9?format=jpg&name=large",
     link: "Keychains"
  },
        {
    id: 5,
    title: "Necklaces ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YZahLaEAAyvaO?format=jpg&name=small",
     link: "Necklaces"
  },
                {
    id: 5,
    title: "Stainless Stell Necklaces ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YazezaYAAJIi0?format=jpg&name=small",
     link: "Stainless Stell Necklaces"
  },
        {
    id: 5,
    title: "Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YYBNTbwAAupmb?format=jpg&name=large",
     link: "Bracelets"
  },
          {
    id: 5,
    title: "Scrunchies ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-06ZTW4AAFbXB?format=png&name=900x900",
     link: "Scrunchies"
  },


  //             {
  //   id: 5,
  //   title: "Clay Bead Bracelets ⋆⭒˚.⋆",
  //   imageUrl:"https://pbs.twimg.com/media/GzsjEeoWoAAWKqA?format=png&name=small",
  //    link: "Clay Bead Bracelets"
  // },
                {
    id: 5,
    title: "Charm Pendants ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-2ARbWkAAihM7?format=png&name=small",
     link: "Charm Pendants"
  },
  //                 {
  //   id: 5,
  //   title: "Pair Bracelets ⋆⭒˚.⋆",
  //   imageUrl:"https://pbs.twimg.com/media/GzsjQJPXAAAgBE0?format=png&name=900x900",
  //    link: "Pair Bracelets"
  // },
                    {
    id: 5,
    title: "Rings ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-2-ZpWYAA6ss4?format=png&name=small",
     link: "Rings"
  },
  {
    id: 5,
    title: "Handmade Rings ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-2-ZpWYAA6ss4?format=png&name=small",
     link: "Handmade Rings"
  },
          {
    id: 5,
    title: "Stainless Steel Anklet ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YcRhXa8AASFgB?format=jpg&name=small",
     link: "Stainless Steel Anklet"
  },
                  {
    id: 5,
    title: "Stainless Steel Bracelet ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YcfNraAAA7NMb?format=png&name=small",
     link: "Stainless Steel Bracelet"
  },
    {
    id: 5,
    title: "Stainless Steel Handcuffs ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YchUlbsAAqeKc?format=png&name=900x900",
     link: "Stainless Steel Handcuffs"
  },
            {
    id: 5,
    title: "Thrifted Stuff ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YcjGLbgAAH76_?format=jpg&name=large",
     link: "Thrifted Stuff"
  },
        
                     {
    id: 5,
    title: "Stainless Steel ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0-3BTLXYAAHD1C?format=png&name=small",
     link: "Stainless Steel"
  },
                    {
    id: 5,
    title: "Pouches ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YaxjbaoAA9cPO?format=png&name=small",
     link: "Pouches"
  },
                            {
    id: 5,
    title: "Plushies ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G-YbLBqaUAAaLlj?format=png&name=small",
     link: "Plushies"
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

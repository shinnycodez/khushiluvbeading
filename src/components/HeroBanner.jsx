import React from 'react';

function HeroBanner() {
  const imageUrl =
    'https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/527713778_1305652094306327_3638434376915081328_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DcN_ojpcxKsQ7kNvwHKk0oR&_nc_oc=Adlo1FYFNTpK1n2BSB4OTiyDvVp3cLVbd0RLrJEkcQKXyMG_yIUdh6A-LEjcSbz38wY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AGMBrclqUKSqgPUmzUrwigETac2-C3650mOhHjlqHMxcQ&oe=68BE7A82';

  return (
    <div className="relative">
<div
  className="min-h-[240px] md:min-h-[480px] bg-cover lg:bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out"
  style={{
    backgroundImage: `url("${imageUrl}")`,
  }}
/>

    </div>
  );
}

export default HeroBanner;

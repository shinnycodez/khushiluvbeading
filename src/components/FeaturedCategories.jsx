import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: "Uncut sticker sheet ˚⊹♡",
    imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/528364839_735797702766212_9136847646116888837_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CMhC0LcHyu0Q7kNvwGFPRTm&_nc_oc=AdlOMO5tlQo0aZi-85ofSs-WAz70AASbW0iej7JwgSkG_lqBtYn-ey6xxknJL-XlwuY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AGasYOooKpj-141rQCvm_dH3wTpHAEUZgecfVdpDcgkKg&oe=68BC7F02",
    link: "Uncut sticker sheet"
  },
  {
    id: 1,
    title: "Handmade Earrings ⋆｡𖦹°",
    imageUrl: "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/527402610_24272694319088065_4937485833314713169_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UPASIUnWwx4Q7kNvwErkYr5&_nc_oc=Adlm2-p10AI8QPMrmDDkrp_pfeVVsKB4L1fYpdC7KQ6_uos9j3Wk-ZcERiCwsTAUn70&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AFed2T6C73i7FRcm0C1A7_BDmagQu0_vwBqXGegh-okkQ&oe=68BC6B46",
      link: "Handmade Earrings",
  },

      {
    id: 2,
    title: "Glass Beaded Bracelet ˚⋆𐙚｡",
    imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/527674622_1518599662884785_4496843977879727829_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ooidYo3X0q4Q7kNvwHMHTKB&_nc_oc=Adlnk5ccoBYYoD72hUYk-II3t2_TLK7MFpPH0Ffu5qp-p4TjmVsYrLw1RZ9tuzbqCTQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD3AGsWN7-r6AmRcI1iZLQwdvmQ3ZDIre7_AzKtbr78ju-7Q&oe=68BC7152",
      link: "Glass Beaded Bracelet"
  },
      {
    id: 5,
    title: "Keychains ｡°✩",
    imageUrl:"https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/528279657_2120213751793921_6088974346624873546_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Ddb80QNoBfkQ7kNvwGhKkK3&_nc_oc=AdnGPzmusetHPMge892ZmC1wrUERkouXAzaaXpmRyuaeqDPeOym0QUDAXsf8V3Wq784&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD3AHyw9HICnbWsdl4w7W9BIwR8GrNF6509Wp7MNmZtyx8TQ&oe=68BC9D35",
     link: "Keychains"
  },
        {
    id: 5,
    title: "Necklaces ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.15752-9/528329381_642132875586657_487393409748674155_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=XUlKgobCLOMQ7kNvwHkPO3s&_nc_oc=AdkVsEbTOpZLF9OwY4oATAJ88SCAqIODZvEiKilqqhl0EAf_ftzsWXcgc8ZlEaZo1hQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&oh=03_Q7cD3AFsJoCBFEIDWP61naRWRgZ-7X12G17h3oAjYdS1ceWqcQ&oe=68BC784D",
     link: "Necklaces"
  },
        {
    id: 5,
    title: "Under 550  Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/527348197_1120977356574443_2180543296353734968_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=v4CFFUKpa4wQ7kNvwHXi-Cz&_nc_oc=AdnDrOFGE5J3P2CPawiPnc-BrRRS4ZTfJ6xGAhg59M7KOho-6OwYob5srSfWBty9IsE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AFulCvpPCN_DXRdxa035yZe60k0tipjNnhlTXDex9DrYw&oe=68BC6B6A",
     link: "Under 550 Bracelets"
  },
          {
    id: 5,
    title: "Beaded bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/528204475_1505365660843931_1920617359328061287_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Iv2l2HOyj50Q7kNvwFHkmIS&_nc_oc=AdmP7DXtLspuP1h5dzBB1mZAPu6-0etLx-T-cNqVauNpeHZCR4r3ry5IBvL98gwMY_w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AErJDI9KYTUOawAJr0Sszv7Bo96Ymg8lt2T2w5SVyxHug&oe=68BC6903",
     link: "Beaded bracelets"
  },
            {
    id: 5,
    title: "Phone Charms ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/528384072_1156957392940190_1537747980504653871_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vxOFmBuMXH4Q7kNvwE9fxQ2&_nc_oc=AdnXIB4swCQIB0wRehL1DC0maTGCpHS06WpfYFQjEienzCcT1uljQHG6WfqvPI6yDYw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AHcdutN3jyQpTHXs3gmH3OcOYvJ5t8IYnjnzB3jiHatYA&oe=68BC8796",
     link: "Phone Charms"
  },
            {
    id: 5,
    title: "Under 800 bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/527451001_793593093406735_8063623490973440396_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=FwYHWe_YzLkQ7kNvwE4Gya6&_nc_oc=Adnjj8nm9KfCtnMnoU3PuduPeRmm2gtuVbosbvxgJ1je51TsCsRMi1lBX2TEMAw9q-0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AGUaQwZ6lWlJZOg-3JCkj1YqMJ92A81f7itF-yYL-GO-A&oe=68BC66BD",
     link: "Under 800 bracelets"
  },
              {
    id: 5,
    title: "Clay Bead Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/527750929_1138513241664611_1316995369839421662_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9aICfWzhJHsQ7kNvwFO6fbV&_nc_oc=Adn0ZaEHL698TgqoJkirAhnyvNYC37YOAiGi35nBtAKipjIcsqdxw1wU6N9hBNiMwmo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AG-HC5JEpZxHy2OIyE4M7iiFIzFhFQwsRqido2ssWR0Zw&oe=68BC77A0",
     link: "Under 800 bracelets"
  },
                {
    id: 5,
    title: "Charm Earrings ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/528134551_602609076040762_3013924492111747438_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m6EEvKXRhZ4Q7kNvwEDTzmh&_nc_oc=AdmtLzcWFuIF3LAgfwHQyYS6Ai4jDGp5oSa1_LKhmezWgFXI71GbYqgkrr8l8Mnsjq8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AGnitjmvM97CmFAKxTBA1BTvSpxQdehtgDr5EyaRktzTg&oe=68BC873B",
     link: "Charm Earrings"
  },
                  {
    id: 5,
    title: "Pair Bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.15752-9/528220363_1989050018295587_1013949113788365056_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ix976yRk86cQ7kNvwFCt9to&_nc_oc=AdmOeEi8zUqtZjFu5EMS5F64Zcvx1k2ETYpE3ayns4CQDeaeRpMfNzKqPCTiIXIID54&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&oh=03_Q7cD3AE_OVB4EGU-NVlfJhs2-dyTmYhQoaOCvMrmLaNXobQm_g&oe=68BC8B05",
     link: "Pair Bracelets"
  },
                    {
    id: 5,
    title: "Y2K ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/527775127_2255222911573835_8632798042082498648_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Mb3lpUeM91oQ7kNvwFxRXbV&_nc_oc=AdlDXtkk7MzsnAXDLVNjhpHqkKdoW4PJHn5F_OvW2I_xSxFMNqrBvJ1GoRwySSym3bk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AEsBZ3_Bf4ORB-VKksOW9PrzLgK1QhnHQCZOcH5tNkwWw&oe=68BC7B65",
     link: "Y2K"
  },
                     {
    id: 5,
    title: "Stainless Steel ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/527333727_1263922609078718_7153272179770132696_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2Smg419WPLYQ7kNvwFIG2fx&_nc_oc=AdkKGdVhhA_Fzfnq6ruOfEAxHVOBmtJks5HpQPQHY6maqQTQJP0aUe0i2tPHEkyDVBY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AGup4YGtcYXExt8uanj7HUCwPGw06hfuy0eV3qx4CQqkQ&oe=68BC67FC",
     link: "Stainless Steel"
  },
                    {
    id: 5,
    title: "Chokers ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/527306850_1258203502126333_4393295709142299332_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Y8uTH22EzywQ7kNvwFMDiSc&_nc_oc=AdkqqHPkF1nM4VFt-dllpYy6HyJ3ULusFiRAOHrtBoxaYc6J_vTJ_h0l4kKMwFLzQyw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AGn9sq7M1eIXK8YEdQryMYXrQUFK9r8SrU3adKHaDIIdQ&oe=68BC6B62",
     link: "Chokers "
  },
                    {
    id: 5,
    title: "Charm Pendants ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/528298407_1177374651103563_1994921588001056297_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9AUR6rDF8jIQ7kNvwFYiB-u&_nc_oc=AdmKo7JjT4veqqu-mF0MT5C-jWdK4PU5lceCAgM43LuBSggauwCMRf-Mz40l3BbAT70&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AHUs2Fgdpkd6aoOd_i9Gace06RXvZh7cbcjNJX2LmoTbg&oe=68BC71D1",
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

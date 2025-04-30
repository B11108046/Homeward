import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import loungewearImage from "@/assets/images/loungewear.jpg";
import candlesImage from "@/assets/images/candles.jpg";
import slippersImage from "@/assets/images/slippers.jpg";

type Product = {
  id: number;
  type: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
};

export default function Products() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add active class after component mounts for animation
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("active");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      type: "loungewear",
      title: "Loungewear",
      titleZh: "居家服飾",
      description: "Slip into Homeward, and feel like you're returning to yourself.",
      descriptionZh: "穿上Homeward，感覺像是回到了真實的自己。",
      image: loungewearImage
    },
    {
      id: 2,
      type: "candles",
      title: "Scented Candles",
      titleZh: "香氛蠟燭",
      description: "Light up Homeward, and illuminate a quiet corner of your heart.",
      descriptionZh: "點亮Homeward，照亮心中寧靜的角落。",
      image: candlesImage
    },
    {
      id: 3,
      type: "slippers",
      title: "Indoor Slippers",
      titleZh: "室內拖鞋",
      description: "Step into Homeward, and let comfort begin from the ground up.",
      descriptionZh: "踏入Homeward，讓舒適從腳底開始。",
      image: slippersImage
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center mb-16">
          {t("Products", "產品")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-warmWhite rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={t(product.title, product.titleZh)} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-deepBrown mb-3">
                  {t(product.title, product.titleZh)}
                </h3>
                <p className="text-softBlack mb-4">
                  {t(product.description, product.descriptionZh)}
                </p>
                <Link href={`/products/${product.type}`} className="inline-block mt-2 text-warmTan hover:text-deepBrown font-montserrat text-sm transition-colors duration-300">
                  {t("Explore More", "探索更多")}
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

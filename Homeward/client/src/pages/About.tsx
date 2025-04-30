import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/images/profile.jpg";

export default function About() {
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

  const hashtags = [
    "#HomeEssence", 
    "#WarmthInDesign", 
    "#ComfortLiving",
    "#MindfulHome", 
    "#AuthenticSpace", 
    "#MinimalistBeauty",
    "#CozyCorners",
    "#HomeHarmony",
    "#GentleLiving",
    "#LifeQuality"
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center mb-12">
          {t("About Me", "關於我")}
        </h2>
        
        <div className="bg-warmWhite rounded-lg shadow-md p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="rounded-full overflow-hidden border-4 border-warmTan shadow-lg w-56 h-56 md:w-64 md:h-64">
                <img 
                  src={profileImage} 
                  alt="Hsieh Yi-Lin profile photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="font-playfair text-2xl text-deepBrown mb-4 text-center md:text-left">Hsieh Yi-Lin</h3>
              
              <div className="space-y-4 text-softBlack">
                <p>
                  {t(
                    "I'm Lynn. I am a NTUST student majoring in Management Administration, passionate about observing people and the small details of life.",
                    "我是Lynn。我是台科大的管理學系學生，熱衷於觀察人和生活中的細節。"
                  )}
                </p>
                <p>
                  {t(
                    "I believe that beyond the fast pace of work and study, home should be the place where we feel most relaxed and authentic.",
                    "我相信，在緊湊的工作和學習之外，家應該是我們感到最放鬆和真實的地方。"
                  )}
                </p>
                <p>
                  {t(
                    "Through this website, I hope to share my love for a quality life and help us all rediscover those gentle moments.",
                    "通過這個網站，我希望分享我對品質生活的熱愛，幫助我們重新發現那些溫柔的時刻。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-warmWhite rounded-lg shadow-md p-6">
            <h3 className="font-playfair text-xl text-deepBrown mb-4 border-b border-warmTan pb-2">
              {t("Interests", "興趣愛好")}
            </h3>
            <ul className="space-y-2 text-softBlack">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Home decoration & minimalist design", "家居裝飾與極簡設計")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Reading and collecting cozy lifestyle books", "閱讀和收集溫馨生活方式的書籍")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Slow living and mindful cooking", "慢生活和專注烹飪")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Creating relaxing home scents and atmospheres", "創造放鬆的家居香氛和氛圍")}
              </li>
            </ul>
          </div>
          
          <div className="bg-warmWhite rounded-lg shadow-md p-6">
            <h3 className="font-playfair text-xl text-deepBrown mb-4 border-b border-warmTan pb-2">
              {t("Specialties", "專長")}
            </h3>
            <ul className="space-y-2 text-softBlack">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Project management with a focus on details", "注重細節的專案管理")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Creative content planning and design", "創意內容規劃與設計")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Finding and creating comfort in everyday life", "在日常生活中尋找和創造舒適感")}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-warmTan mr-2"></span>
                {t("Organizing spaces for maximum comfort and efficiency", "組織空間以實現最大舒適度和效率")}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-warmWhite rounded-lg shadow-md p-8 border border-warmTan border-opacity-20">
          <h3 className="font-playfair text-2xl text-deepBrown mb-6 text-center">
            {t("Keywords That Define This Website", "定義這個網站的關鍵詞")}
          </h3>
          <p className="text-center text-softBlack mb-6 max-w-2xl mx-auto">
            {t(
              "Homeward is more than just a website; it's a philosophy of living. These keywords capture the essence of what we believe creates a true home.",
              "Homeward 不僅是一個網站，更是一種生活理念。這些關鍵詞捕捉了我們認為創造真正的家所需的本質。"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {hashtags.map((tag, index) => (
              <span 
                key={index} 
                className="hashtag bg-softBeige text-deepBrown px-5 py-2 rounded-full text-sm font-montserrat hover:bg-warmTan hover:text-warmWhite transition-colors duration-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

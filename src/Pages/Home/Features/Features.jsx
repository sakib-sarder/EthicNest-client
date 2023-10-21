import freeDeliver from "../../../assets/icons/free-delivery.png";
import budgetDeal from "../../../assets/icons/budget-deal.png";
import trending from "../../../assets/icons/trending.png";
import mart from "../../../assets/icons/mart.png";
import voucher from "../../../assets/icons/voucher.png";
import safeDelivery from "../../../assets/icons/safe-delivery.png";
import specialOffer from "../../../assets/icons/special-offer.png";
import bestPrice from "../../../assets/icons/best-price.png";
const Features = () => {
  return (
    <section className="flex justify-between border px-2 py-3 rounded shadow-md">
      {/* features one */}
      <div className="md:inline-flex flex-col items-center gap-1 hidden cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={freeDeliver} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Free Delivery</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={budgetDeal} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Budget Deal</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={trending} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Trendings</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={mart} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Mart</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={voucher} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Voucher</p>
      </div>
      {/* features one */}
      <div className="md:inline-flex flex-col items-center gap-1 hidden cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={safeDelivery} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Safe Delivery</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={specialOffer} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Special Offer</p>
      </div>
      {/* features one */}
      <div className="inline-flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200 transition-all border p-2 rounded shadow-md">
        <img src={bestPrice} alt="free-delivery" className="w-8 md:w-10 lg:w-20" />
        <p className="font-semibold text-xs md:text-sm lg:text-lg">Best Price</p>
      </div>
    </section>
  );
};

export default Features;

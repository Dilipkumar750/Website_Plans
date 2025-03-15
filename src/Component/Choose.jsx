import webhosting from "../assets/webhosting.jpg";
import dynamic from "../assets/dynamic.png";
import payment from "../assets/payment.jpg";
import delivery from "../assets/delivery.png";
import expert from "../assets/expert.jpeg";
import secret from "../assets/secret.png";
const FeaturesSection = () => {
    const features = [
      {
        img: webhosting,
        text: "1 Year Free Domain/Hosting",
      },
      {
        img: dynamic,
        text: "Dynamic Websites with attractive web designs",
      },
      {
        img: payment,
        text: "Our design and development services are pocket friendly – Starting from ₹2,999/- Only (18% GST applicable)",
      },
      {
        img: delivery,
        text: "Project delivery on time with proper analysis and development of a schedule for project completion.",
      },
      {
        img: expert,
        text: "High-end services with 100% expert assistance and a wide range of modern tools and parameters.",
      },
      {
        img: secret,
        text: "Innovation and creativity are our secrets to web designing and development success.",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-6 rounded-2xl bg-white flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                <img src={feature.img} alt="Feature Icon" className="w-24 h-24 mb-4" />
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  
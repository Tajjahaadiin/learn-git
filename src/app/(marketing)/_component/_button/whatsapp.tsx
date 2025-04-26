import Link from "next/link";
const WhatsappdButton = () => {
  return (
    <Link
      href={"https://wa.me/6287861604875"}
      target="_blank"
      className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition-colors flex items-center font-medium"
    >
      <img src={"whatsapp.png"} alt="Whatsapp" className="w-4 h-4 mr-2" />
      Lets's Talk
    </Link>
  );
};
export default WhatsappdButton;

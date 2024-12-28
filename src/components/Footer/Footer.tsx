export const Footer = () => {
  const className = "flex justify-center align-center";
  return (
    <div className="border-t flex justify-center align-center flex-col pt-3">
      <p className={className}>
        Copyright © 2024 Crystal Meth Anonymous. CMA General Services 1920
        Hillhurst Ave #1315 Los Angeles, CA 90027
      </p>
      <p className={className + " gap-2"}>
        <span>
          <a href={"tel:18556384373"}>855-METH-FREE</a>
        </span>
        <span> •••</span>
        <span>
          <a href={"tel:18556384373"}>(855) 638-4373</a>
        </span>
      </p>
      <p className={className}>
        <a href={"https://www.crystalmeth.org/privacy-policy/"}>
          Website Privacy Policy
        </a>
      </p>
    </div>
  );
};

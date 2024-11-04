import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: any[] = [
  {
    label: "MyChart Login",
    url: "https://www.mypatientchart.org/MyChart/Authentication/Login",
  },
  {
    label: "About BJC",
    url: "https://www.bjc.org/about",
  },
  {
    label: "Pay a Bill",
    url: "https://www.bjc.org/patients-visitors/billing-and-financial-assistance/online-bill-pay",
  },
  ,
  {
    label: "Contact Us",
    url: "https://legacy.bjc.org/Contact-Us-form",
  },
];

const Header = ({ _site }: any) => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="p-6 flex justify-between items-center w-full max-w-screen-3xl">
      <img
        src="https://www.bjc.org/images/logo/logo-leaf.svg"
        alt=""
        className="w-auto h-20"
      />
      <div className="flex gap-8 items-center text-2xl text-primary">
        {links.map((item: Link, index: any) => (
          <a
            href={item.url}
            key={index}
            className={`${item.label === "For Patients" ? "hover:underline" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;

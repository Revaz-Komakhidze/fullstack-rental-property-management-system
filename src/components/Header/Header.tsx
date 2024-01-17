import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-[#F27405]">
          MyHome
        </Link>
      </div>
      <ul></ul>
    </header>
  );
};

export default Header;

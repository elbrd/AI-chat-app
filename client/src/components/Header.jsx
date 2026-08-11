const Header = () => {
  return (
    <header
      className="
        border-b 
        border-(--color-border)
        mx-auto 
        w-full 
        px-4 md:px-8 
        py-6 
        flex items-center justify-between
      "
    >
      <span className="oi-regular text-2xl text-(--color-text-primary)">
        JIPPIDY
      </span>
    </header>
  );
};

export default Header;

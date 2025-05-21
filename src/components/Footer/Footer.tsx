export const Footer = () => {
  return (
    <footer className="container mx-auto px-2 py-1">
      <p className="text-center font-semibold md:text-xl">
        {' '}
        &copy; Best footer in the world. {new Date().getFullYear()} year.
      </p>
    </footer>
  );
};

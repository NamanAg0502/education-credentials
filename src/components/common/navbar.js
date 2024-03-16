import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="py-3 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div>
            <span className="text-lg font-semibold">EDU-ID</span>
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex justify-center items-center gap-2">
              <Link href="">
                <li className="text-sm font-medium">Certificates</li>
              </Link>
            </ul>
          </div>
          {/* Connect Wallet */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

'use client';

import Link from 'next/link';
import ConnectWallet from './connect-wallet';

const Navbar = () => {
  return (
    <div className="py-3 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div>
            <Link href="/" className="text-lg font-semibold">
              EDU-ID
            </Link>
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex justify-center items-center gap-4">
              <Link href="/">
                <li className="underline hover:font-medium">Home</li>
              </Link>
              <Link href="/issue">
                <li className="underline hover:font-medium">Issue</li>
              </Link>
              <Link href="/verify">
                <li className="underline hover:font-medium">Verify</li>
              </Link>
            </ul>
          </div>
          {/* Connect Wallet */}
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FC, ReactNode } from 'react';

import Navbar from '@/components/common/navbar';

import Footer from '@/components/common/footer';

interface LayoutProps {

children: ReactNode;

}

const Layout: FC<LayoutProps> = ({ children }) => {

return (

<div className="h-screen flex flex-col">

<div className="flex-1">

<Navbar />

{children}

</div>

<Footer />

</div>

);

};

export default Layout;

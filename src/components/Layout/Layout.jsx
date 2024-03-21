import { Suspense } from "react";
import { Header, Main } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
 
 return (
    <>
        <Header />
        <Main>
            <Suspense fallback={<div>LOADER.....</div>} >
                <Outlet />
            </Suspense>
        </Main>
    </>
  );
};

export default Layout;
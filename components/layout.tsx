import { Fragment, ReactChild, ReactFragment, ReactPortal } from "react";

import Navbar from "./navbar";

function Layout(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Fragment>
      <div className="bg-body text-white font-poppins pb-12">
        <Navbar />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;

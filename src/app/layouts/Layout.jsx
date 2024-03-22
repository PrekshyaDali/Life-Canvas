import { Children } from "react";
import NavBar from "../components/NavBar";

export default function Layout({children}) {
  return (
    <>
      <NavBar></NavBar>
      <div className = "pt-16">{children}</div>
    </>
  );
}

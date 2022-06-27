/* eslint-disable @next/next/no-img-element */
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CollapseLeftIcon from "./svg/CollapseLeftIcon";
import LogOutIcon from "./svg/LogOutIcon";
import { menuItems } from "../static/menuItems";

import { RemoveUserLocal, GetUser } from "../utility";

export default function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    setUser(GetUser());
  }, []);

  const activeMenu = useMemo(() => menuItems.find((item) => item.link === router.pathname), [router.pathname]);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleLogOutAdmin = () => {
    RemoveUserLocal();
    router.push("/login");
  };

  return (
    <>
      <div className={`h-screen px-4 pt-8 pb-4 bg-gray-300 flex flex-col justify-between ${!toggleCollapse ? "w-[350px]" : "w-[80px]"} `} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className={`items-center pl-1 gap-4 ${toggleCollapse ? "hidden" : "flex"}`}>
              <img src="assets/svg/myStore.svg" alt="logo" height={120} width={120} />
            </div>
            {isCollapsible && (
              <button className={`p-4 rounded  absolute right-0 cursor-pointer ${toggleCollapse ? "rotate-180" : "rotate-0"}`} onClick={handleSidebarToggle}>
                <CollapseLeftIcon />
              </button>
            )}
          </div>
          <div className={`ml-[10px] text-sm text-gray-500 font-semibold ${toggleCollapse ? "hidden" : "flex"}`}>Welcome, {user.username}</div>
          <div className="flex flex-col items-start mt-24 gap-4 text-m text-gray-700">
            {menuItems.map((item) => (
              <>
                <div
                  className={`flex hover:border items-center cursor-pointer hover:border-gray-400 hover:shadow-md px-3 rounded-[10px] w-full overflow-hidden whitespace-nowrap focus:border-gray-400 ${
                    activeMenu ? "border-gray-400" : "bg-transparent"
                  }`}
                  key={item.id}
                >
                  <Link href={item.link}>
                    <a className=" flex py-4 px-3 items-center w-full h-full gap-5 focus:text-indigo-600 active:text-indigo-600">
                      {item.icon}

                      {!toggleCollapse && <span>{item.label}</span>}
                    </a>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
        <button className=" w-[110px] h-[50px] flex cursor-pointer pl-1 mb-4 " onClick={handleLogOutAdmin}>
          <div className="flex py-2 px-2">
            <LogOutIcon />
            {!toggleCollapse && <div className="ml-2 text-sm mt-1 font-semibold">Logout</div>}
          </div>
        </button>
      </div>
    </>
  );
}

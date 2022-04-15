import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
function Header() {
  const user = JSON.parse(localStorage.getItem("sheygram-lite-user"));
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Add Post",
      path: "/addpost",
    },
    {
      title: "Shares",
      path: "/shares",
    },
    {
      title: "Profile",
      path: `/profile/${user.id}`,
    },
  ];

  return (
    <div className="p-3 bg-primary rounded-md">
      {!showMenu && (
        <div className="md:flex justify-end hidden bg-primary -mb-8">
          <CgMenuRightAlt
            size={30}
            color="white"
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl font-semibold text-white">SHEYGRAM</h1>
          <span className="text-gray-500">
            {user.email.substring(0, user.email.length - 10)}
          </span>
        </div>
        {/* web view */}
        <div className="flex space-x-10 justify-end items-center md:hidden">
          {menuItems.map((item) => {
            return (
              <Link
                to={`${item.path}`}
                className={`text-gray-200 ${
                  item.path == location.pathname &&
                  "bg-white text-black rounded py-1 px-3"
                }`}
                onClick={() => setShowMenu(false)}
              >
                {item.title}
              </Link>
            );
          })}
          <h1
            className="text-gray-200 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("sheygram-lite-user");
              navigate("/login");
            }}
          >
            Logout
          </h1>
        </div>

        {/* {mobile view} */}
        {showMenu && (
          <div className="md:flex space-x-10 justify-end flex-col items-end space-y-5 hidden">
            {menuItems.map((item) => {
              return (
                <Link
                  to={`${item.path}`}
                  className={`text-gray-200 ${
                    item.path == location.pathname &&
                    "bg-white text-black rounded py-1 px-3"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
            <h1
              className="text-gray-200"
              onClick={() => {
                localStorage.removeItem("sheygram-lite-user");
                navigate("/login");
              }}
            >
              Logout
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

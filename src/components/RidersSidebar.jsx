import { useEffect } from "react";
import ridersSidebarItems from "./ridersSidebarItems";

import logoImg from "../assets/blue in white bg original logo (1) 1.png";



import rightArrow from "../assets/right-arrow.png";
import downArrow from "../assets/down-arrow.png";

const sidebarBg = "#f7f9fb";
const sidebarActive = "#0C6CFC";
const sidebarActiveText = "#fff";
const sidebarText = "#222";

const getFirstChildKey = (item) => {
  if (!item.children || item.children.length === 0) return item.key;
  return getFirstChildKey(item.children[0]);
};

function RidersSidebar({ active, setActive, openMenus, setOpenMenus }) {
  useEffect(() => {
    setActive("dashboard");
  }, [setActive]);
  

  const handleToggle = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClick = (item) => {
    if (item.children) {
      setOpenMenus((prev) => ({ ...prev, [item.key]: true }));
      const firstChildKey = getFirstChildKey(item);
      setActive(firstChildKey);
    } else {
      setActive(item.key);
    }
  };

 
  const renderItems = (items, level = 0) => (
    <ul className="nav flex-column mb-0" style={{ paddingLeft: level ? 16 : 0 }}>
      {items.map((item) => (
        <li key={item.key} className="nav-item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="#"
              className="nav-link"
              style={{
                background:
                  active === item.key ? sidebarActive : "transparent",
                color:
                  active === item.key ? sidebarActiveText : sidebarText,
                fontWeight: active === item.key ? 600 : 400,
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                paddingLeft: item.icon && level === 0 ? 0 : 36,
              }}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
            >
              {item.icon && <span className="me-2">{item.icon}</span>}
              {item.label}
            </a>

            {item.children && (
              <button
                className="btn btn-link btn-sm px-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(item.key);
                }}
              >
                <img
                  src={openMenus[item.key] ? downArrow : rightArrow}
                  alt="toggle"
                  style={{ width: 16, height: 16 }}
                />
              </button>
            )}
          </div>

          {item.children &&
            openMenus[item.key] &&
            renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  );
return (
  <div
    className="d-flex flex-column flex-shrink-0 ps-3 border-end vh-100"
    style={{ width: 260, background: sidebarBg }}
  >
    <div className="d-flex align-items-center m-2">
      <img
        src={logoImg}
        alt="Logo"
        style={{
          width: 56,
          height: 56,
          marginRight: 12,
          objectFit: "cover",
        }}
      />
      <span
        className="fw-bold"
        style={{ color: "#000000ff", fontSize: "48px" }}
      >
        QPo
      </span>
    </div>

    {renderItems(ridersSidebarItems)}
  </div>
);

}

export default RidersSidebar;

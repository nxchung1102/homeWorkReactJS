import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faTruck,
  faMessage,
  faMobile,
  faMobileButton,
  faLaptop,
  faTablet,
  faDesktop,
  faTv,
  faClock,
  faHeadphones,
  faHouse,
  faBolt,
  faGamepad,
  faMobileRetro,
  faScrewdriverWrench,
  faBellConcierge,
  faNewspaper,
  faScaleUnbalancedFlip,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Icons/logo.png";
import Htc from "../Icons/Tablet_htc_top_menu.png";
import "./style.css";
function Header() {
  return (
    <div>
      <header>
        <div className="top-navigation">
          <div className="container">
            <ul>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Bản mobile
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Sản phẩm đã xem
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Trung tâm bảo hành
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Hệ thống 128 siêu thị
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Tra cứu đơn hàng
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="menuTopNavigation">
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="heading">
          <div className="container">
            <div className="logo">
              <a href="/">
                <img src={Logo} />
              </a>
            </div>
            <div className="search-box">
              <form>
                <div className="border">
                  <input placeholder="Hôm nay bạn cần tìm gì?" />
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </form>
            </div>
            <div className="oder-tools">
              <div className="item check-oder">
                <button className="btnCheckOder">
                  <span className="icon">
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                  <span className="text">Kiểm tra đơn hàng</span>
                </button>
              </div>
              <div className="item cart">
                <button className="btnCart">
                  <span className="iconCart">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  <label className="labelCart">
                    <span className="iconMsg">
                      <FontAwesomeIcon icon={faMessage} />
                    </span>
                    <span id="cart-total">0</span>
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ul className="root">
              <li id="dien-thoai-di-dong">
                <a href="/">
                  <i className="icon phone">
                    <FontAwesomeIcon icon={faMobile} />
                  </i>
                  <span>Điện thoại</span>
                </a>
                <div className="sub-container">
                  <div className="sub">
                    <div className="menu g1">
                      <h4>
                        <a href="">Hãng sản xuất</a>
                      </h4>
                      <ul className="display-column format_3">
                        <li>
                          <a href="">Apple</a>
                        </li>
                        <li>
                          <a href="">Samsung</a>
                        </li>
                        <li>
                          <a href="">Xiaomi</a>
                        </li>
                        <li>
                          <a href="">OPPO</a>
                        </li>
                        <li>
                          <a href="">TECNO</a>
                        </li>
                        <li>
                          <a href="">HONOR</a>
                        </li>
                        <li>
                          <a href="">realme</a>
                        </li>
                        <li>
                          <a href="">Vivo</a>
                        </li>
                        <li>
                          <a href="">Nokia</a>
                        </li>
                        <li>
                          <a href="">HTC</a>
                        </li>
                        <li>
                          <a href="">Infinix</a>
                        </li>
                        <li>
                          <a href="">ROG</a>
                        </li>
                        <li>
                          <a href="">Nubia</a>
                        </li>
                        <li>
                          <a href="">XOR</a>
                        </li>
                        <li>
                          <a href="">Masstel</a>
                        </li>
                        <li>
                          <a href="">TCL</a>
                        </li>
                        <li>
                          <a href="">Itel</a>
                        </li>
                        <li>
                          <a href="">ZTE</a>
                        </li>
                        <li>
                          <a href="">Mới - tin đồn</a>
                        </li>
                      </ul>
                      <h4>
                        <a href="">Điện thoại cao cấp</a>
                      </h4>
                      <ul className="display-row format_1"></ul>
                      <h4>
                        <a href="">Điện thoại cao cấp</a>
                      </h4>
                      <ul className="display-row format_1"></ul>
                    </div>
                    <div className="menu g2">
                      <h4>
                        <a href="">Mức giá</a>
                      </h4>
                      <ul className="display-row format_2">
                        <li>
                          <a href="">Trên 100 triệu</a>
                        </li>
                        <li>
                          <a href="">Dưới 1 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 2 đến 3 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 3 đến 4 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 6 đến 8 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 15 đến 20 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 20 đến 100 triệu</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu g3">
                      <h4>
                        <a href="">Quan tâm nhất</a>
                      </h4>
                      <ul className="display-row format_2">
                        <li>
                          <a href="">Hôm nay</a>
                        </li>
                        <li>
                          <a href="">Tuần này</a>
                        </li>
                        <li>
                          <a href="">Tháng này</a>
                        </li>
                        <li>
                          <a href="">Năm nay</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu ads"></div>
                  </div>
                </div>
              </li>
              <li id="apple">
                <a href="/">
                  <i className="icon apple">
                    <FontAwesomeIcon icon={faMobileButton} />
                  </i>
                  <span>Apple</span>
                </a>
              </li>
              <li id="laptop">
                <a href="/">
                  <i className="icon laptop">
                    <FontAwesomeIcon icon={faLaptop} />
                  </i>
                  <span>Laptop</span>
                </a>
                <div className="sub-container">
                  <div className="sub">
                    <div className="menu g1">
                      <h4>
                        <a href="">Hãng sản xuất</a>
                      </h4>
                      <ul className="display-column format_3">
                        <li>
                          <a href="">Apple</a>
                        </li>
                        <li>
                          <a href="">ASUS</a>
                        </li>
                        <li>
                          <a href="">Dell</a>
                        </li>
                        <li>
                          <a href="">Acer</a>
                        </li>
                        <li>
                          <a href="">MSI</a>
                        </li>
                        <li>
                          <a href="">Phân loại sản phẩm </a>
                        </li>
                        <li>
                          <a href="">LG</a>
                        </li>
                        <li>
                          <a href="">HUAWEI</a>
                        </li>
                        <li>
                          <a href="">Lenovo</a>
                        </li>
                        <li>
                          <a href="">HP</a>
                        </li>
                        <li>
                          <a href="">GIGABYTE</a>
                        </li>
                        <li>
                          <a href="">Itel</a>
                        </li>
                        <li>
                          <a href="">Xiaomi</a>
                        </li>
                        <li>
                          <a href="">Masstel</a>
                        </li>
                      </ul>
                      <h4>
                        <a href="">Phân loại Sản phẩm</a>
                      </h4>
                      <ul className="display-row format_1">
                        <li>
                          <a href="">Cao cấp - Sang trọng</a>
                        </li>
                        <li>
                          <a href="">Đồ họa - Kĩ thuật</a>
                        </li>
                        <li>
                          <a href="">Học tập - Văn phòng</a>
                        </li>
                        <li>
                          <a href="">Laptop Gaming</a>
                        </li>
                        <li>
                          <a href="">Mỏng nhẹ</a>
                        </li>
                      </ul>
                    </div>

                    <div className="menu g3">
                      <h4>
                        <a href="">Mức giá</a>
                      </h4>
                      <ul className="display-row format_2">
                        <li>
                          <a href="">Trên 20 triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 12 đến 15 Triệu</a>
                        </li>
                        <li>
                          <a href="">Từ 15 đến 20 triệu</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu ads"></div>
                  </div>
                </div>
              </li>
              <li id="tablet">
                <a href="/">
                  <i className="icon tablet">
                    <FontAwesomeIcon icon={faTablet} />
                  </i>
                  <span>Tablet</span>
                  <div className="sub-container">
                    <div className="sub">
                      <div className="menu g2">
                        <h4>
                          <a href="">Hãng sản xuất</a>
                        </h4>
                        <ul className="display-row format_3">
                          <li>
                            <a href="">Apple</a>
                          </li>
                          <li>
                            <a href="">Samsung</a>
                          </li>
                          <li>
                            <a href="">Xiaomi</a>
                          </li>
                          <li>
                            <a href="">Nokia</a>
                          </li>
                          <li>
                            <a href="">TCL</a>
                          </li>
                          <li>
                            <a href="">Lenovo</a>
                          </li>
                          <li>
                            <a href="">OPPO</a>
                          </li>
                          <li>
                            <a href="">HUAWEI</a>
                          </li>
                          <li>
                            <a href="">HTC</a>
                          </li>
                          <li>
                            <a href="">Yuho</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu ads">
                        <a href="">
                          <img src={Htc} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li id="man-hinh">
                <a href="/">
                  <i className="icon desktop">
                    <FontAwesomeIcon icon={faDesktop} />
                  </i>
                  <span>Màn hình</span>
                </a>
                <div className="sub-container">
                  <div className="sub">
                    <div className="menu g0">
                      <h4>
                        <a href="">hãng sản xuất</a>
                      </h4>
                      <ul className="display-column format_2">
                        <li>
                          <a href="">Acer</a>
                        </li>
                        <li>
                          <a href="">AOC</a>
                        </li>
                        <li>
                          <a href="">Asus</a>
                        </li>
                        <li>
                          <a href="">Dell</a>
                        </li>
                        <li>
                          <a href="">GIGABYTE</a>
                        </li>
                        <li>
                          <a href="">HP</a>
                        </li>
                        <li>
                          <a href="">HUAWEI</a>
                        </li>
                        <li>
                          <a href="">Lenovo</a>
                        </li>
                        <li>
                          <a href="">LG</a>
                        </li>
                        <li>
                          <a href="">MSI</a>
                        </li>
                        <li>
                          <a href="">SamSung</a>
                        </li>
                        <li>
                          <a href="">ViewSonic</a>
                        </li>
                      </ul>
                    </div>
                    <div className="shiftLeft">
                      <div className="menu g2">
                        <h4>
                          <a href="">phân loại sản phẩm</a>
                        </h4>
                        <ul className="display-column format_1">
                          <li>
                            <a href="">Màn hình đồ họa</a>
                          </li>
                          <li>
                            <a href="">Màn hình Gaming</a>
                          </li>
                          <li>
                            <a href="">Màn hình văn phòng</a>
                          </li>
                          <li>
                            <a href="">Màn hình di động</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="menu g3">
                      <h4>
                        <a href="">phụ kiện màn hình</a>
                      </h4>
                    </div>
                    <div className="menu ads"></div>
                  </div>
                </div>
              </li>
              <li id="smart-tv">
                <a href="/">
                  <i className="icon tv">
                    <FontAwesomeIcon icon={faTv} />
                  </i>
                  <span>Smart TV</span>
                </a>
                <div className="sub-container">
                  <div className="sub">
                    <div className="menu g1">
                      <h4>
                        <a href="">hãng sản xuất</a>
                      </h4>
                      <ul className="display-column format_1">
                        <li>
                          <a href="">Tivi Xiaomi</a>
                        </li>
                        <li>
                          <a href="">Tivi Casper</a>
                        </li>
                        <li>
                          <a href="">Tivi SamSung</a>
                        </li>
                        <li>
                          <a href="">Tivi Coocaa</a>
                        </li>
                        <li>
                          <a href="">Tivi Intel</a>
                        </li>
                        <li>
                          <a href="">Tivi SKYWORTH</a>
                        </li>
                        <li>
                          <a href="">Tivi Toshiba</a>
                        </li>
                      </ul>
                      <br />
                      <h4>
                        <a href="">phụ kiện tv</a>
                      </h4>
                    </div>

                    <div className="menu ads"></div>
                  </div>
                </div>
              </li>
              <li id="dong-ho">
                <a href="/">
                  <i className="icon watch">
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>Đồng hồ</span>
                </a>
                <div className="sub-container">
                  <div className="sub">
                    <div className="menu g0">
                      <h4>
                        <a href="">đồng hồ</a>
                      </h4>
                      <ul className="display-column format_1">
                        <li>
                          <a href="">Tivi Xiaomi</a>
                        </li>
                        <li>
                          <a href="">Tivi Casper</a>
                        </li>
                        <li>
                          <a href="">Tivi SamSung</a>
                        </li>
                        <li>
                          <a href="">Tivi Coocaa</a>
                        </li>
                        <li>
                          <a href="">Tivi Intel</a>
                        </li>
                        <li>
                          <a href="">Tivi SKYWORTH</a>
                        </li>
                        <li>
                          <a href="">Tivi Toshiba</a>
                        </li>
                      </ul>
                    </div>

                    <div className="menu ads"></div>
                  </div>
                </div>
              </li>
              <li id="loa-tai-nghe">
                <a href="/">
                  <i className="icon headphone">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </i>
                  <span>Âm thanh</span>
                </a>
              </li>
              <li id="smart-home">
                <a href="/">
                  <i className="icon home">
                    <FontAwesomeIcon icon={faHouse} />
                  </i>
                  <span>Smart Home</span>
                </a>
              </li>
              <li id="phu-kien">
                <a href="/">
                  <i className="icon bolt">
                    <FontAwesomeIcon icon={faBolt} />
                  </i>
                  <span>Phụ kiện</span>
                </a>
              </li>
              <li id="do-choi-cong-nghe">
                <a href="/">
                  <i className="icon gamepad">
                    <FontAwesomeIcon icon={faGamepad} />
                  </i>
                  <span>Đồ chơi CN</span>
                </a>
              </li>
              <li id="kho-san-pham-cu">
                <a href="/">
                  <i className="icon retro">
                    <FontAwesomeIcon icon={faMobileRetro} />
                  </i>
                  <span>Máy trôi</span>
                </a>
              </li>
              <li id="dich-vu-sua-chua">
                <a href="/">
                  <i className="icon repair">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                  </i>
                  <span>Sửa chữa</span>
                </a>
              </li>
              <li id="dich-vu">
                <a href="/">
                  <i className="icon srvice">
                    <FontAwesomeIcon icon={faBellConcierge} />
                  </i>
                  <span>Dịch Vụ</span>
                </a>
              </li>
              <li id="tin-tuc">
                <a href="/">
                  <i className="icon news">
                    <FontAwesomeIcon icon={faNewspaper} />
                  </i>
                  <span>Tin hot</span>
                </a>
              </li>
              <li id="tin-khuyen-maiuu-dai-hot">
                <a href="/">
                  <i className="icon sale">
                    <FontAwesomeIcon icon={faScaleUnbalancedFlip} />
                  </i>
                  <span>Ưu đãi</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;

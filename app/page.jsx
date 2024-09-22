"use client"
import Image from "next/image";
import Modal_Dost from "../components/modal-dostavka"
import Card from "../components/card"
import Food_selections from "../components/Food_selection"
import { useEffect, useState } from "react";
export default  function Home() {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/menu');
        if (!res.ok) throw new Error("Ошибка при получении данных");
        
        const response = await res.json();
        console.log("Response from API:", response); // Логируем ответ
        setMenuItems(response.data); // Убедитесь, что это массив
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const items_selections = [
    { imgSrc: "images/free-icon-cheeseburger-2362255.png", title: "Бургеры", id: 1 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Закуски", id: 2 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 3 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 4 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 5 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 6 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 7 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 8 },
    { imgSrc: "/images/free-icon-onion-2362361.png", title: "Бургеры", id: 9 },
  ];
  return (
    <>
      <div className="circle-box"></div>
      <div className="wrap">
        <div className="icons">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="box">
          <div className="left">
            <img src="/images/g10.png" alt="" />
          </div>
          <div className="right">
            <span className="white">Только самые <br />
              <span className="yellow">сочные бургеры!</span>
            </span>
            <h4>Бесплатная доставка от 599₽</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-vibor-blud">
          {items_selections.map((item, index) => (
            <Food_selections
              key={index}
              selctions={item}
              isFirst={index === 0}
            />
          ))}

        </div>
        <div className="flex">
          <div className="sticky">
            <div className="left-flex">
              <div className="counts-box">
                <span>Корзина</span>
                <button>4</button>
              </div>
              <div className="elements">
                <div className="element">
                  <div className="l">
                    <div className="left">
                      <img src="/images/Rectangle 2.png" alt="" />
                    </div>
                    <div className="center">
                      <span>Супер сырный</span>
                      <p>512г</p>
                      <h4>550₽</h4  >
                    </div>
                  </div>
                  <div className="right">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                  </div>
                </div>
                <div className="element">
                  <div className="l">
                    <div className="left">
                      <img src="/images/Rectangle 2.png" alt="" />
                    </div>
                    <div className="center">
                      <span>Супер сырный</span>
                      <p>512г</p>
                      <h4>550₽</h4  >
                    </div>
                  </div>
                  <div className="right">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                  </div>
                </div>
                <div className="element">
                  <div className="l">
                    <div className="left">
                      <img src="/images/Rectangle 2.png" alt="" />
                    </div>
                    <div className="center">
                      <span>Супер сырный</span>
                      <p>512г</p>
                      <h4>550₽</h4  >
                    </div>
                  </div>
                  <div className="right">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className="counts-box2">
                <h4>Итого</h4>
                <h4>1279₽</h4>
              </div>
              <center>
                <Modal_Dost Button={<button>Оформить заказ</button>}>
                  <div className="modal">
                    <div className="left-mod">
                      <div className="image-ponchik">
                        <img src="/images/pic.png" alt="" />
                      </div>
                    </div>
                    <div className="right-mod">

                      <form >
                        <h2>Доставка</h2>
                        <div className="inps">
                          <input type="text" placeholder="Ваше имя" />
                          <input type="text" placeholder="Телефон" />
                        </div>
                        <div className="flex-checkbox">
                          <div className="check">
                            <input type="checkbox" />
                            <p>Самовызов</p>
                          </div>
                          <div className="check">
                            <input type="checkbox" />
                            <p>Доставка</p>
                          </div>
                        </div>
                        <div className="one-inp">
                          <input type="text" placeholder="Улица, дом, квартира" />
                        </div >
                        <div className="flex-inp">
                          <input type="text" placeholder="Этаж" />
                          <input type="text" placeholder="Домофон" />
                        </div>
                        <button>Оформить</button>
                      </form>
                    </div>
                  </div>
                </Modal_Dost>
              </center>
              <div className="zakas">
                <img src="/images/free-icon-delivery-2362252.png" alt="" />
                <span>Бесплатная доставка</span>
              </div>
            </div>
          </div>
          <div className="right-flex">
            <h2>Бургеры</h2>
            <div className="box-elem">
              {menuItems.map(item => (
                <Card elem={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="box-foot">
          <div className="left-foot">
            <div className="item-foot">
              <img src="/images/Group 7.png" alt="" />
              <div className="loc">
                <p>© YouMeal, 2022</p>
                <p>Design: Anastasia Ilina</p>
              </div>
            </div>
          </div>
          <div className="right-foot">
            <div className="item">
              <span>Номер для заказа</span>
              <div className="tel-number">
                <img src="/images/Vector.png" alt="" />
                <p>+7(930)833-38-11</p>
              </div>
            </div>
            <div className="item">
              <span>Мы в соцсетях</span>
              <div className="tel-number">
                <img src="/images/entypo-social_vk-with-circle.png" alt="" />
                <img src="/images/bi_telegram.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}


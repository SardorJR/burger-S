"use client"

import { useEffect, useState } from "react";
export default function Page() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/menu');
                if (!res.ok) throw new Error("Ошибка при получении данных");
                
                const response = await res.json();
                console.log("Response from API:", response)
                setMenuItems(response.data)
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchMenuItems();
    }, []);
    return (
        <div className="conts">
            <div className="top-container">
            {menuItems.map((item) => (
                <Card2 key={item._id} item={item} />
            ))}
                <div className="burger-card">
                    <img src="/images/49742_hamburger_fast food_burger_junk food_food_icon.png" alt="Burger" className="burger-image" />
                    <h3 className="burger-title">Cheeseburger</h3>
                    <div className="button-container">
                        <button className="edit-button">Изменить</button>
                        <button className="delete-button">Удалить</button>
                    </div>
                </div>
                <div className="burger-card">
                    <img src="/images/49742_hamburger_fast food_burger_junk food_food_icon.png" alt="Burger" className="burger-image" />
                    <h3 className="burger-title">Cheeseburger</h3>
                    <div className="button-container">
                        <button className="edit-button">Изменить</button>
                        <button className="delete-button">Удалить</button>
                    </div>
                </div>
                <div className="burger-card">
                    <img src="/images/49742_hamburger_fast food_burger_junk food_food_icon.png" alt="Burger" className="burger-image" />
                    <h3 className="burger-title">Cheeseburger</h3>
                    <div className="button-container">
                        <button className="edit-button">Изменить</button>
                        <button className="delete-button">Удалить</button>
                    </div>
                </div>
                <div className="burger-card">
                    <img src="/images/49742_hamburger_fast food_burger_junk food_food_icon.png" alt="Burger" className="burger-image" />
                    <h3 className="burger-title">Cheeseburger</h3>
                    <div className="button-container">
                        <button className="edit-button">Изменить</button>
                        <button className="delete-button">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const Card2 = ({ item }) => {
    console.log(item);
    return (
        <div>
            <div className="burger-card">
                <img src={item.imageUrl} alt={item.name} className="burger-image" />
                <h3 className="burger-title">{item.titles ? item.titles.ru : 'Название недоступно'}</h3>
                <div className="button-container">
                    <button className="edit-button">Изменить</button>
                    <button className="delete-button">Удалить</button>
                </div>
            </div>
        </div>
    )
}
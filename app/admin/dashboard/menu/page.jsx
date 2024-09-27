
"use client"

import { useEffect, useState } from "react";
import Modal_Form from "../form";
export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };  
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/menu');
                if (!res.ok) throw new Error("Ошибка при получении данных");
                
                const response = await res.json();
                setMenuItems(response.data)
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchMenuItems();
    }, []);
    return (
        <div className="conts">
            <button className="dobavit" onClick={openModal}>Добавить в меню</button>  
            <div className="top-container">
              
            {menuItems.map((item) => (
                <Card2 key={item._id} item={item} />
            ))}
              
            </div>
            {isModalOpen && (
                <Modal_Form isOpen={isModalOpen} onClose={closeModal} />
            )}
        </div>
        
    );
}


export const Card2 = ({ item }) => {
    return (
        <div>
            <div className="burger-card">
                <img src={item.image} alt={item.name} className="burger-image" />
                <h3 className="burger-title">{item.titles ? item.titles.ru : 'Название недоступно'}</h3>
                <div className="button-container">
                    <button className="edit-button">Изменить</button>
                    <button className="delete-button">Удалить</button>
                </div>
            </div>
        </div>
    )
}
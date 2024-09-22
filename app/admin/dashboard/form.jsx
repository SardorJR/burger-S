"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import { useForm } from 'react-hook-form';

const Modal_Form = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  async function onSubmit(formData) {
    console.log(formData);
    reset();

    try {
      const res = await fetch('http://localhost:3000/api/menu', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();
      console.log(responseData);
      onClose()
      router.push('/');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-header">Добавить в меню</h2>
        <div className="popup-body">
          <form className="popup-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="image"
              className="popup-field"
              placeholder="Изображение"
              {...register('image')}
            />
            <input
              type="text"
              name="title"
              className="popup-field"
              placeholder="Название"
              {...register('title')}
            />
            <input
              type="number"
              name="weight"
              className="popup-field"
              placeholder="Вес"
              {...register('weight')}
            />
            <input
              type="text"
              name="price"
              className="popup-field"
              placeholder="Цена"
              {...register('price')}
            />
            <textarea
              name="composition"
              className="popup-textarea"
              placeholder="Состав"
              {...register('composition')}
            ></textarea>
            <textarea
              name="description"
              className="popup-textarea"
              placeholder="Описание"
              {...register('description')}
            ></textarea>
            <button type="submit" className="popup-submit-btn">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal_Form;

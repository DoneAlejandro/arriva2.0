import React from "react";
import { NavLink } from "react-router-dom";
import styleOfAddTask from "../AddTask/AddTask.module.scss";

const AddTask = () => {
  return (
    <div className={styleOfAddTask.taskBox}>
      <div className={styleOfAddTask.inputBox}>
        <div>
          <p className={styleOfAddTask.title}>Название мероприятия</p>
          <input type="text" className={styleOfAddTask.event} />
        </div>
        <div>
          <p className={styleOfAddTask.title}>Описание мероприятия (задачи)</p>
          <input type="text" className={styleOfAddTask.task} />
        </div>
        <div>
          <p className={styleOfAddTask.title}>Адрес мероприятия</p>
          <input type="text" className={styleOfAddTask.adres} />
        </div>
        <div className={styleOfAddTask.date}>
          <p className={styleOfAddTask.title}>Дата и время</p>
          <div className={styleOfAddTask.dateBox}>
            <input className={styleOfAddTask.inputDate} type="date" />
            <input className={styleOfAddTask.inputTime} type="time" />
          </div>
        </div>
        <div>
          <p className={styleOfAddTask.title}>Контакты организатора</p>
          <div>
            <div className={styleOfAddTask.organizationBox}>
              <input
                type="text"
                name="name"
                placeholder="ФИО"
                className={styleOfAddTask.areaName}
              />
              <input
                type="tel"
                name="phone"
                placeholder="+7(000)000-00-00"
                className={styleOfAddTask.areaNumber}
              />
              <div>
                <input type="text" placeholder="Организация" />
                <input type="email" placeholder="E-mail" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavLink to="/mainpage">Далее</NavLink>
      </div>
    </div>
  );
};

export default AddTask;

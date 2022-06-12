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
              <div className={styleOfAddTask.organizationBoxFirst}>
                <div className={styleOfAddTask.inputNameBox}>
                  <input
                    type="text"
                    name="name"
                    placeholder="ФИО"
                    className={styleOfAddTask.areaName}
                  />
                </div>
                <div className={styleOfAddTask.inputPhoneBox}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7(000)000-00-00"
                    className={styleOfAddTask.areaNumber}
                  />
                </div>
              </div>
              <div className={styleOfAddTask.organizationBoxSecond}>
                <div className={styleOfAddTask.inputOrganizationBox}>
                  <input
                    type="text"
                    placeholder="Организация"
                    className={styleOfAddTask.areaOrganization}
                  />
                </div>
                <div className={styleOfAddTask.inputMailBox}>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className={styleOfAddTask.areaMail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styleOfAddTask.btnBox}>
          <NavLink to="/mainpage" className={styleOfAddTask.areaBtn}>
            Далее
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

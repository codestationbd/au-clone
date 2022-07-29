import React from "react";
import "./Latest.scss";
import data from "Assets/Data/data";

export default function Latest() {
    const allNews = data.latest.news

    const newsElements = allNews.map(news => {
        return <div className="card--news">
            <img src={require(`Assets/Image/${news.img}`)} alt="" />
            <div className="col">
                <h1>{news.title}</h1>
                <p>{news.date}</p>
            </div>
        </div>
    })

    return <section id="latest">
        <div className="news">
            <h1>Latest News</h1>
            <div className="cards--news">
                { newsElements }
            </div>
            <button>View All</button>
        </div>

        <div className="notice">
            <h1>Latest Notices</h1>
            <div className="card--notice">
                <img src={require("Assets/Image/Eid-ul-Adha (Notification) holy day.jpg")} alt="" />
                <h1>University will remain closed from 08.07.2022 to 17.07.2022</h1>
                <p>Read More</p>
            </div>
            <button>View All</button>
        </div>
    </section>;
}

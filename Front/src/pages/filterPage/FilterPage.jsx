import FilterCard from "../../components/filterCard/FilterCard";
import './filterPage.scss'
import ApiServices from "../../services/ApiServices.ts"
import React, {useEffect, useState} from "react";
import {options} from "axios";
import CourseCard from "../../components/CourseCard/CourseCard";

const Filter = () => {
    const [itemList, setItemList] = useState([]);
    const [level, setLevel] = useState("");
    const [length, setLength] = useState("");
    const [language, setLanguage] = useState("russian")
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(100000);
    const [filterLink, setFilterLink] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isRangeChanged, setIsRangeChanged] = useState({priceMin: false, priceMax: false});

    const apiLink = 'https://jsonplaceholder.typicode.com/'
    const apiService = new ApiServices();

    const handleReset = () => {
        setLevel('default');
        setLength('default')
        setLanguage("russian")
        setPriceMin(0)
        setPriceMax(100000)
        setIsRangeChanged({priceMin: false, priceMax: false});
    };

    useEffect(() => {
        buildLink();
        onRequest();
    }, [submit]);

    const onRequest = () => {
        setItemList([])
        apiService
            .getFilteredProducts(filterLink)
            .then((data) => onDataLoaded(data))
            .catch(onError);
    };

    const onDataLoaded = (newDataList) => {
        setItemList((oldDataList) => [...oldDataList, ...newDataList])
        setLoading(false)
    }

    const onError = () => {
        setLoading(false)
        setError(true)
        setItemList(Array(100).fill().map(()=>product))
    }

    const onLoading = () => {
        setLoading(true)
        setError(false)
    }

    const handleLevel = (event) => {
        setSelectedCategories([...selectedCategories, event.target.value])
        setLevel(event.target.value)
    }

    const handleLength = (event) => {
        setSelectedCategories([...selectedCategories, event.target.value])
        setLength(event.target.value)
    }

    const handleLanguage = (event)  => {
        setSelectedCategories([...selectedCategories, event.target.value])
        setLanguage(event.target.value)
    }

    const buildLink = () => {
        const UrlParam = new URLSearchParams();
        let link = apiLink;
        UrlParam.append("posts", level);
        UrlParam.append("userId", length);
        UrlParam.append("_start", priceMin.toString());
        UrlParam.append("_limit", priceMax.toString());
        link += UrlParam;
        setFilterLink(link);
    };

    const levelCategories = [
        { value: "level1", label: "Кодозавренок" },
        { value: "level2", label: "Легкий" },
        { value: "level3", label: "Средний" },
        { value: "level4", label: "Средний++" },
        { value: "level5", label: "Сложна" },
        { value: "level6", label: "Хард мод" }
    ];

    const lengthCategories = [
        { value: "length1", label: "3 дня" },
        { value: "length2", label: "5 дней" },
        { value: "length3", label: "7 дней" },
        { value: "length4", label: "10 дней" },
        { value: "length5", label: "14 дней" },
        { value: "length6", label: "30 дней" }
    ];

    const product = {
        cost: 999,
        imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/ae3c7473-5df0-4fbc-a9bf-61d8fa4eaa98.png',
        id: 1,
        level: 'Кодозавренок',
        length: '10 уроков',
        description: 'Идеально для новичков\n Видео лекции практические занятия\n Можно изучать в своем темпе\n',
        title: 'Основы программирования',
        chips: ['#Popular', '#New', '#52']
    }

    return (
        <section className='filter'>
            <div className="filter-container">
                <div className="filter-block">
                    <header className="filter-block__header">Подобрать курс</header>
                    <div className="filter-block__content">
                        <div className="filter-block__main-filter">
                            <div className="filter-block__main-item">
                                Поиск по названию
                                <div className="filter-block__main-inp">
                                    <input type="text" placeholder="Выберите название курса"/>
                                </div>
                            </div>
                            <div className="filter-block__main-item">
                                Уровень
                                <div className="filter-block__main-sel">
                                    <select
                                        value={level}
                                        onChange={handleLevel}>
                                        <option value="" disabled>Выберите уровень</option>
                                        <option value="default" hidden>Выберите уровень</option>
                                        {levelCategories.map(o => (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="filter-block__main-item">
                                Длительность
                                <div className="filter-block__main-sel">
                                    <select
                                        value={length}
                                        onChange={handleLength}>
                                        <option value="" disabled>Выберите продолжительность</option>
                                        <option value="default" hidden>Выберите продолжительность</option>
                                        {lengthCategories.map(o => (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="filter-block__reset">
                            <button className="filter-block__reset-btn" onClick={handleReset}>
                                Сбросить фильтры
                            </button>
                        </div>
                        <div className="filter-block__lang-filter">
                            Язык
                            <div className="filter-block__lang-item">
                                <input type="radio" name="lang"
                                       checked={language === 'russian'}
                                       onChange={handleLanguage}
                                /> Русский
                            </div>
                            <div className="filter-block__lang-item">
                                <input type="radio" name="lang"
                                       checked={language !== 'russian'}
                                       onChange={handleLanguage}
                                /> Не русский
                            </div>
                        </div>
                        <div className="filter-block__cost-filter">
                            Стоимость
                            <div className="filter-block__cost-inp">
                                <input type="text" placeholder='От' value={isRangeChanged.priceMin ? `${priceMin}` : ''}
                                       onChange={(event) => {
                                           setPriceMin(+event.target.value);
                                           setIsRangeChanged({priceMin: true, priceMax: false});
                                       }} />
                                <input type="text" placeholder='До' value={isRangeChanged.priceMax ? `${priceMax}` : ''}
                                       onChange={(event) => {
                                           setPriceMax(+event.target.value);
                                           setIsRangeChanged({priceMin: true, priceMax: true});
                                       }} />
                            </div>
                            {priceMin > priceMax ? (
                                    <div className="filter-block__cost-check">Неверный диапазон</div>
                                )
                                : undefined}
                        </div>
                        <button className="filter-block__btn">Найти</button>
                    </div>
                </div>
                <div className="cards-block">
                    <div className="cards-block__footer">
                        <header className="cards-block__header">Все курсы</header>
                        <select name="" id="" className="cards-block__select">
                            <option value="">Сортировать</option>
                        </select></div>
                    {!loading ? (
                        <div className="cards-block__list">
                            {itemList.map(course => <CourseCard course={course}/>)}
                        </div>
                    ) : <p className="cards-block__list-loading">Loading...</p>}
                </div>

            </div>
        </section>
    );
};

export default Filter;
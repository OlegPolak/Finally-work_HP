import './hogwarts-menu.css';

const Hogwarts = () => {
    return (
        <section className="hogwarts-section" id="hogwarts-section">
            <div className="container">
                 <div className="hogwarts-section__container">
                            <ul className="hogwarts-section__list ">

                                <li className="hogwarts-card__width">
                                    <article className="hogwarts-card">
                                        <div className="hogwarts-card__container">
                                            <img className="hogwarts-card__image"
                                                src= {require('../image/student.jpeg')} alt="Студенти Хогвартсу"/>
                                        </div>
                                    </article>
                                     <div className="hogwarts-section__text-btn">
                                        <button className="hogwarts-section__button button" type="button"> Студенти Хогвартсу</button>
                                    </div>
                                </li>
                                <li className="hogwarts-card__width">
                                    <article className="hogwarts-card">
                                        <div className="hogwarts-card__container">
                                            <img className="hogwarts-card__image"
                                                src= {require('../image/employees.jpeg')} alt="Співробітники Хогвартсу"/>
                                        </div>
                                    </article>
                                     <div className="hogwarts-section__text-btn">
                                        <button className="hogwarts-section__button button" type="button"> Співробітники Хогвартсу</button>
                                     </div>
                                </li>
                                <li className="hogwarts-card__width">
                                    <article className="hogwarts-card">
                                        <div className="hogwarts-card__container">
                                            <img className="hogwarts-card__image"
                                                src=  {require('../image/student-house.jpeg')}  alt="Персонажі в певному домі"/>
                                        </div>
                                    </article>
                                     <div className="hogwarts-section__text-btn">
                                        <button className="hogwarts-section__button button" type="button"> Персонажі в певному домі</button>
                                    </div>
                                </li>
                            </ul>
                     </div>
             </div>
    </section>

       
    );
}
 
export default Hogwarts;
import React from 'react'
import './student.css';

const Student = () => {
  return (
  <section className="student-section" id="student-section">
                <div className="container">
                    <h2 className="section-title">Студенти Хогвортсу</h2>
                        <div className="student-section__container swiper-container">
                            <ul className="student-section__list swiper-wrapper">

                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/potter.jpeg')} alt="Маска для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Harry Potter</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>31-07-1980</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/hermione.jpeg')}  alt="Ін'єкції для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Hermione Granger</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>19-09-1979</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/ron.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Ron Weasley</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>01-03-1980</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/draco.jpeg')} alt="Маска для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Draco Malfoy</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Slytherin</p>
                                                 <p className='student-card__text-yelow'>05-06-1980</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/cedric.jpeg')} alt="Ін'єкції для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Cedric Diggory</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Hufflepuff</p>
                                                 <p className='student-card__text-yelow'>31-07-1980</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/chochang.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Cho Chang</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Ravenclaw</p>
                                                 <p className='student-card__text-yelow'>07-04-1979</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/neville.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Neville Longbottom</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>30-07-1980</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/lunalovegood.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Luna Lovegood</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Ravenclaw</p>
                                                 <p className='student-card__text-yelow'>13-02-1981</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>

                            </ul>
                        </div>
                    </div>
            </section>
  )
}

export default Student

import React from 'react'
import '../student/student.css';

const Student = () => {
  return (
  <section className="student-section" id="student-section">
                <div className="container">
                    <h2 className="section-title employees">Співробітники Хогвортсу</h2>
                        <div className="student-section__container swiper-container">
                            <ul className="student-section__list swiper-wrapper">

                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/minerva.jpeg')} alt="Маска для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Minerva McGonagall</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>04-10-1925</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/snape.jpeg')}  alt="Ін'єкції для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Severus Snape</h3>
                                                 <p className='student-card__text-yelow'>Half-Blood Princ</p>
                                                 <p className='student-card__text-yelow'>Slytherin</p>
                                                 <p className='student-card__text-yelow'>09-10-1960</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/hagrid.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Rubeus Hagrid</h3>
                                                 <p className='student-card__text-yelow'>Dragomir Despard</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>06-12-1928</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/lupin.jpeg')} alt="Маска для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Remus Lupin</h3>
                                                 <p className='student-card__text-yelow'>Professor Lupin, Moony</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>10-03-1960</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/slughorn.jpeg')} alt="Ін'єкції для обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Horace Slughorn</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Slytherin</p>
                                                 <p className='student-card__text-yelow'>Null</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>

                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/dolores.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Dolores Umbridge</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Slytherin</p>
                                                 <p className='student-card__text-yelow'>Null</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/filch.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Argus Filch</h3>
                                                 <p className='student-card__text-yelow'>The Boy Who Lived</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>Null</p>
                                                 <p className='student-card__text-white'>Більше інформації</p>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                                <li className="student-card__width swiper-slide">
                                    <article className="student-card">
                                        <div className="student-card__container">
                                            <img className="student-card__image"
                                                src=  {require('../image/albus.jpeg')} alt=">Очищення обличчя"/>
                                            <div className="student-card__div">
                                                 <h3 className="student-card__title">Albus Dumbledore</h3>
                                                 <p className='student-card__text-yelow'>Professor Dumbledor</p>
                                                 <p className='student-card__text-yelow'>Gryffindor</p>
                                                 <p className='student-card__text-yelow'>Null</p>
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

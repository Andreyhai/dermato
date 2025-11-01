import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    // Состояние для открытия/закрытия мобильного меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // Используем семантический тег <header> и добавляем роль для навигации
        <header className={styles.header} role="banner">
            <div className={styles.container}>

                {/* Логотип слева */}
                <div className={styles.logo}>
                    <a href="/" aria-label="На главную страницу">
                        {/* Вставь сюда свой логотип, пока заглушка текстом */}
                        MyPortfolio
                    </a>
                </div>

                {/* Навигация справа */}
                {/* Для мобильных устройств - кнопка-бургер */}
                <button
                    className={styles.menuToggle}
                    aria-label="Открыть меню"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Основное навигационное меню */}
                <nav
                    className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
                    role="navigation"
                    aria-label="Основная навигация"
                >
                    <ul className={styles.navList}>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Главная</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Обо мне</a></li>
                        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Проекты</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакты</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
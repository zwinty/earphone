import React, { useState } from "react";
import "./Navigation.css";
import { FiAlignJustify } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="navigation-container">
        {/* Mobile Navigation */}
        <div className="navigation-ph">
            <FiAlignJustify className="nav-icon-ph" onClick={toggleMenu} />
           <Link to="/" className="logo-ph-con"><img className="logo-ph" src="/logo.svg" alt="Logo" /> </Link>
            <IoCart className="nav-icon-ph" />

            {/* Hamburger Menu */}
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
                <div className="hamburger-close" onClick={toggleMenu}>✖</div>
                <ul className="hamburger-nav-menu">
                    {[
                        {
                            label: "中古",
                            dropdownItems: [
                                "中古ワイヤレス",
                                "中古有線イヤホン",
                                "中古有線ヘッドホン",
                                "中古ゲーミング",
                                "中古プレーヤー",
                                "中古AMP・DAC",
                                "中古ケーブル",
                                "中古スピーカー",
                            ],
                        },
                        {
                            label: "買取",
                            dropdownItems: [
                                <Link to="./kaitori">eイヤホンの買取サービス</Link>,
                                "無料査定のお申込み",
                                "買取金額を調べる",
                                "買取Q&A",
                            ],
                        },
                        {
                            label: "修理",
                            dropdownItems: [
                                "イヤホンクリニック",
                            ],
                        },
                        {
                            label: "カスタムIEM",
                            dropdownItems: [
                                "カスタムIEMとは",
                                "ブランド一覧",
                            ],
                        },
                        {
                            label: "カテゴリ",
                            dropdownItems: [
                                "ワイヤレス",
                                "有線イヤホン",
                                "有線ヘッドホン",
                                "ゲーミング",
                                "プレーヤー",
                                "AMP・DAC",
                                "修理・自作",
                                "雑貨アクセサリ",
                                "アウトレット"
                            ],
                        },
                        {
                            label: "店舗一覧",
                            dropdownItems: [
                                "秋葉原店　本店",
                                "ゲーミングAKIBA",
                                "大阪日本橋本店",
                                "名古屋大須店",
                                "仙台駅前店",
                            ],
                        },
                        // Add more dropdown configurations here.
                    ].map((item, index) => (
                        <li key={index} className="dropdown-container">
                            <div onClick={() => toggleDropdown(index)}>
                                {item.label}
                                <FaCaretDown />
                            </div>
                            <ul className={`dropdown-ph ${activeDropdown === index ? "visible" : ""}`}>
                                {item.dropdownItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

            {/* Desktop Navigation */}
            <div className="navigation-pc">
                <div className="nav-top">
                    <div className="logo-pc-container">
                    <Link to="/">
                        <img className="logo-pc" src="/logo.svg" alt="Logo" />
                    </Link>
                    </div>
                    <div className="search-container">
                        <input className="search-box" type="text" placeholder="キーワードで探す"/>
                    </div>
                  
                    <div className="nav-btn">
                        <div className="nav-btn-icon">
                            <IoPersonOutline className="nav-icon" />
                            <p>ログイン</p>
                        </div>
                        <div className="nav-btn-icon">
                            <FaRegHeart className="nav-icon" />
                            <p>お気に入り</p>
                        </div>
                        <div className="nav-btn-icon">
                            <IoCart className="nav-icon" />
                            <p>カード</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <ul className="nav-menu">
                        <li>
                            <a href="#">中古</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>中古ワイヤレス</li>
                                <li>中古有線イヤホン</li>
                                <li>中古有線ヘッドホン</li>
                                <li>中古ゲーミング</li>
                                <li>中古プレーヤー</li>
                                <li>中古AMP・DAC</li>
                                <li>中古ケーブル</li>
                                <li>中古スピーカー</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">買取</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>
                                    <Link to="./kaitori">eイヤホンの買取サービス</Link>
                                </li>
                                <li>無料査定のお申込み</li>
                                <li>買取金額を調べる</li>
                                <li>買取Q&A</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">修理</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>イヤホンクリニック</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">カスタムIEM</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>カスタムIEMとは</li>
                                <li>ブランド一覧</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">カテゴリ</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>ワイヤレス</li>
                                <li>有線イヤホン</li>
                                <li>有線ヘッドホン</li>
                                <li>ゲーミング</li>
                                <li>プレーヤー</li>
                                <li>AMP・DAC</li>
                                <li>ケーブル</li>
                                <li>スピーカー</li>
                                <li>修理・自作</li>
                                <li>雑貨アクセサリ</li>
                                <li>アウトレット</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">店舗一覧</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>秋葉原店　本店</li>
                                <li>ゲーミングAKIBA</li>
                                <li>大阪日本橋本店</li>
                                <li>名古屋大須店</li>
                                <li>仙台駅前店</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">商品を探す</a>
                            <FaCaretDown />
                            <ul className="dropdown">
                                <li>ブランドから探す</li>
                                <li>ランキングから探す</li>
                                <li>キャンペーンから探す</li>
                                <li>レビューから探す</li>
                                <li>特集から探す</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav-sns">
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">X(Twitter)</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

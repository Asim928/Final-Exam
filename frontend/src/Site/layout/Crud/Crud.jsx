import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Crud.scss'

const Crud = () => {
    const [data, setData] = useState([])
    const [searchValue, setSeachValue] = useState([])
    const [fake, setFake] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/").then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [searchValue === "", fake ? data : ""])

    return (
        <>
            <div className="crud">
                <div className="crud_title">
                    <h1>Recent Podcasts</h1>
                </div>
                <div className="sort_filter">
                <input type="text" placeholder='search' onChange={(e) => {
                    setSeachValue(e.target.value)
                    setData(data.filter(item => item.name.includes(searchValue)))
                }} />

                <button onClick={() => {
                    setData([...data.sort((a, b) => b.price - a.price)])
                }}>Sort By Price</button>
                </div>
                <div className="crud_cards">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="crud_card" key={index}>
                                    <div className="crud_card_left">
                                        <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp" alt="" />
                                    </div>
                                    <div className="crud_card_right">
                                        <div className="crud_card_name">
                                            <h3>{item.name}</h3>
                                            <p style={{ marginTop: "15px", color: "GrayText", fontSize: "15px" }}>By Mike Smith / 16 September 2017 / 1:30:20</p>
                                        </div>
                                        <div className="crud_card_desc">
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="crud_card_price">
                                            <p>Price: {item.price}$</p>
                                        </div>
                                        <div className="crud_card_buttons">
                                            <button className='deletebtn' onClick={(e) => {
                                                axios.delete(`http://localhost:8080/${item._id}`).then(res => {
                                                    console.log("item deleted")
                                                    setFake(true)
                                                })
                                            }}> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Crud